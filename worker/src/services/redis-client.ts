import Redis from "ioredis";
import { config } from "../config";
import { Job } from "../types";

// Create Redis client
const redis = new Redis(config.redis.url);
const { queueName } = config.redis;

// Processing set name - to track jobs in processing
const processingSetName = `${queueName}-processing`;

/**
 * Get the next job from the queue
 */
export async function getNextJob(): Promise<Job | null> {
  try {
    // Get the last item in the queue (using RPOP to get from the right/end of the list)
    const jobData = await redis.rpop(queueName);

    if (!jobData) {
      return null;
    }

    return JSON.parse(jobData);
  } catch (error) {
    console.error("Error getting next job from queue:", error);
    return null;
  }
}

/**
 * Mark a job as processing
 */
export async function markJobAsProcessing(
  job: Job,
  processingId: string
): Promise<Job> {
  try {
    // Update job status and add processing info
    const updatedJob: Job = {
      ...job,
      status: "processing",
      processingStartedAt: new Date().toISOString(),
      processingId,
    };

    // Add to processing set with the updated data
    await redis.hset(
      processingSetName,
      processingId,
      JSON.stringify(updatedJob)
    );

    return updatedJob;
  } catch (error) {
    console.error("Error marking job as processing:", error);
    throw error;
  }
}

/**
 * Mark a job as completed
 */
export async function markJobAsCompleted(processingId: string): Promise<void> {
  try {
    // Get the job from the processing set
    const jobData = await redis.hget(processingSetName, processingId);

    if (!jobData) {
      throw new Error(
        `Job with processing ID ${processingId} not found in processing set`
      );
    }

    const job: Job = JSON.parse(jobData);

    // Update job status
    const updatedJob: Job = {
      ...job,
      status: "completed",
      processingEndedAt: new Date().toISOString(),
    };

    // Remove from processing set
    await redis.hdel(processingSetName, processingId);

    // Optionally, you could add to a history set or store completed jobs somewhere
    // await redis.hset(`${queueName}-completed`, processingId, JSON.stringify(updatedJob));

    console.log(`Job ${processingId} marked as completed`);
  } catch (error) {
    console.error("Error marking job as completed:", error);
    throw error;
  }
}

/**
 * Mark a job as failed
 */
export async function markJobAsFailed(
  processingId: string,
  error: Error
): Promise<void> {
  try {
    // Get the job from the processing set
    const jobData = await redis.hget(processingSetName, processingId);

    if (!jobData) {
      throw new Error(
        `Job with processing ID ${processingId} not found in processing set`
      );
    }

    const job: Job = JSON.parse(jobData);

    // Update job status
    const updatedJob: Job = {
      ...job,
      status: "failed",
      processingEndedAt: new Date().toISOString(),
      error: error.message,
    };

    // Remove from processing set
    await redis.hdel(processingSetName, processingId);

    // Add back to the queue for retry (at the beginning with LPUSH)
    // You might want to implement a max retry count or dead letter queue
    await redis.lpush(queueName, JSON.stringify({ ...job, status: "pending" }));

    console.log(`Job ${processingId} marked as failed and returned to queue`);
  } catch (error) {
    console.error("Error marking job as failed:", error);
    throw error;
  }
}

/**
 * Get queue status
 */
export async function getQueueStatus(): Promise<{
  queueLength: number;
  processingCount: number;
}> {
  try {
    const [queueLength, processingCount] = await Promise.all([
      redis.llen(queueName),
      redis.hlen(processingSetName),
    ]);

    return {
      queueLength,
      processingCount,
    };
  } catch (error) {
    console.error("Error getting queue status:", error);
    throw error;
  }
}

// Export the Redis client for direct use if needed
export { redis };
