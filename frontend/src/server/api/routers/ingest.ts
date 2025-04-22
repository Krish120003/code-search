import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import Redis from "ioredis";

// Create Redis client
const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

// Queue name for repository ingestion
const QUEUE_NAME = "repo-ingest-queue";

export const ingestRouter = createTRPCRouter({
  // Add a GitHub repository URL to the ingestion queue
  addToQueue: publicProcedure
    .input(
      z.object({
        url: z
          .string()
          .url()
          .refine(
            (url) => {
              // Check if it's a GitHub URL format
              return /^https?:\/\/(www\.)?github\.com\/[^\/]+\/[^\/]+\/?.*$/.test(
                url
              );
            },
            { message: "Must be a valid GitHub repository URL" }
          ),
      })
    )
    .mutation(async ({ input }) => {
      try {
        // Create a job object with metadata
        const job = {
          url: input.url,
          createdAt: new Date().toISOString(),
          status: "pending",
        };

        // Add to Redis queue (using LPUSH to add to the left/beginning of the list)
        await redis.lpush(QUEUE_NAME, JSON.stringify(job));

        return {
          success: true,
          message: "Repository added to ingestion queue",
        };
      } catch (error) {
        console.error("Error adding to queue:", error);
        throw new Error("Failed to add repository to ingestion queue");
      }
    }),

  // Get queue status (optional - could be used for a dashboard)
  getQueueStatus: publicProcedure.query(async () => {
    try {
      // Get the current queue length
      const queueLength = await redis.llen(QUEUE_NAME);

      // Optionally get a few recent items (up to 5)
      const recentItems = await redis.lrange(QUEUE_NAME, 0, 4);

      return {
        queueLength,
        recentItems: recentItems.map((item: string) => JSON.parse(item)),
      };
    } catch (error) {
      console.error("Error getting queue status:", error);
      throw new Error("Failed to get queue status");
    }
  }),

  // Add ingestion details to the database
  addIngestionDetails: publicProcedure
    .input(
      z.object({
        repoUrl: z.string().url(),
        stats: z.object({
          numberOfFiles: z.number(),
          ingestionTime: z.number(),
          completionTime: z.string(),
        }),
        fileTypes: z.array(
          z.object({
            fileType: z.string(),
            count: z.number(),
          })
        ),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        // Insert ingestion details into the database
        await ctx.prisma.ingestionDetails.create({
          data: {
            repoUrl: input.repoUrl,
            numberOfFiles: input.stats.numberOfFiles,
            ingestionTime: input.stats.ingestionTime,
            completionTime: new Date(input.stats.completionTime),
            fileTypes: {
              create: input.fileTypes.map((fileType) => ({
                fileType: fileType.fileType,
                count: fileType.count,
              })),
            },
          },
        });

        return {
          success: true,
          message: "Ingestion details added to the database",
        };
      } catch (error) {
        console.error("Error adding ingestion details:", error);
        throw new Error("Failed to add ingestion details to the database");
      }
    }),
});
