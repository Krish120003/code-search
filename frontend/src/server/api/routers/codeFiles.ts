import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { addFile, getAllFiles, searchFiles } from "@/server/services/solr";
import { randomUUID } from "crypto";

export const codeFilesRouter = createTRPCRouter({
  // Add a new code file
  add: publicProcedure
    .input(
      z.object({
        filename: z.string(),
        content: z.string(),
        language: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const fileData = {
        id: randomUUID(),
        filename: input.filename,
        content: input.content,
        language: input.language,
        createdAt: new Date(),
      };

      await addFile(fileData);
      return { success: true, id: fileData.id };
    }),

  // Search code files
  search: publicProcedure
    .input(z.object({ query: z.string() }))
    .query(async ({ input }) => {
      const results = await searchFiles(input.query);
      return results;
    }),

  // Get all code files
  getAll: publicProcedure.query(async () => {
    const results = await getAllFiles();
    return results;
  }),
});
