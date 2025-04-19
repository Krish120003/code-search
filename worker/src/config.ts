import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const config = {
  redis: {
    url: process.env.REDIS_URL || "redis://localhost:6379",
    queueName: process.env.QUEUE_NAME || "repo-ingest-queue",
    processingTimeoutMs: parseInt(
      process.env.PROCESSING_TIMEOUT_MS || "300000",
      10
    ),
  },
  solr: {
    host: process.env.SOLR_HOST || "127.0.0.1",
    port: parseInt(process.env.SOLR_PORT || "8983", 10),
    core: process.env.SOLR_CORE || "code",
    path: process.env.SOLR_PATH || "/solr",
  },
  worker: {
    pollingIntervalMs: parseInt(process.env.POLLING_INTERVAL_MS || "5000", 10),
    concurrentJobs: parseInt(process.env.CONCURRENT_JOBS || "2", 10),
  },
};
