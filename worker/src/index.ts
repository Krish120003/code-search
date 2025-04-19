import { v4 as uuidv4 } from "uuid";
import { config } from "./config";
import { Job } from "./types";
import * as redisClient from "./services/redis-client";
import * as solrClient from "./services/solr-client";
import * as repoService from "./services/repo-service";

// Flag to track if worker is processing a job
let isProcessing = false;

/**
 * Process a job
 */
async function processJob(job: Job): Promise<void> {
  const processingId = uuidv4();
  console.log(`Processing job ${processingId} for repository ${job.url}`);

  try {
    // 1. Mark job as processing
    const processingJob = await redisClient.markJobAsProcessing(
      job,
      processingId
    );
    console.log(`Job ${processingId} marked as processing`);

    // 2. Clone the repository
    const repoMetadata = await repoService.cloneRepository(processingJob.url);
    console.log(`Repository ${processingJob.url} cloned successfully`);

    // 3. Process the repository and extract code files
    const codeFiles = await repoService.processRepository(repoMetadata);
    console.log(
      `Extracted ${codeFiles.length} files from repository ${processingJob.url}`
    );

    // 4. Delete any existing files for this repo in Solr (to avoid duplicates)
    await solrClient.deleteRepoFiles(processingJob.url);

    // 5. Add the code files to Solr index in batches of 100
    const batchSize = 100;
    for (let i = 0; i < codeFiles.length; i += batchSize) {
      const batch = codeFiles.slice(i, i + batchSize);
      await solrClient.addCodeFilesBatch(batch);
      console.log(
        `Added batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(
          codeFiles.length / batchSize
        )} to Solr`
      );
    }

    // 6. Clean up the cloned repository
    await repoService.cleanupRepository(repoMetadata);

    // 7. Mark job as completed
    await redisClient.markJobAsCompleted(processingId);
    console.log(`Job ${processingId} completed successfully`);
  } catch (error) {
    console.error(`Error processing job ${processingId}:`, error);
    await redisClient.markJobAsFailed(processingId, error as Error);
  } finally {
    isProcessing = false;
  }
}

/**
 * Poll for jobs in the queue
 */
async function pollQueue(): Promise<void> {
  try {
    // Check if worker is already processing a job
    if (isProcessing) {
      return;
    }

    // Get next job from queue
    const job = await redisClient.getNextJob();

    if (job) {
      isProcessing = true;
      // Process the job (don't await to allow polling to continue)
      processJob(job).catch((error) => {
        console.error("Error in job processing:", error);
        isProcessing = false;
      });
    }
  } catch (error) {
    console.error("Error polling queue:", error);
  }
}

/**
 * Start the worker
 */
async function startWorker(): Promise<void> {
  console.log("Starting worker process...");
  console.log(`Polling interval: ${config.worker.pollingIntervalMs}ms`);

  // Set up polling for jobs
  setInterval(pollQueue, config.worker.pollingIntervalMs);

  // Initial poll
  pollQueue();

  console.log("Worker process started");
}

// Start the worker process
startWorker().catch((error) => {
  console.error("Error starting worker:", error);
  process.exit(1);
});
