import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ingestionRouter = createTRPCRouter({
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
    .mutation(async ({ input }) => {
      try {
        await prisma.ingestionDetails.create({
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
