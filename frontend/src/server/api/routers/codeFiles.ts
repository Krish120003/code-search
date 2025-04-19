import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { addFile, getAllFiles, searchFiles } from "@/server/services/solr";
import { randomUUID } from "crypto";

// Schema for the raw field values
const rawFieldSchema = z.object({
  raw: z.string(),
});

// Schema for facet buckets
const facetBucketSchema = z.object({
  count: z.number(),
  val: z.string(),
});

// Schema for repo buckets that include owner_id
const repoBucketSchema = facetBucketSchema.extend({
  owner_id: z.string(),
});

// Schema for search hit objects
const searchHitSchema = z.object({
  branch: rawFieldSchema,
  content: z.object({
    snippet: z.string(),
  }),
  id: rawFieldSchema,
  owner_id: rawFieldSchema,
  path: rawFieldSchema,
  repo: rawFieldSchema,
  total_matches: rawFieldSchema,
});

// Schema for the complete search response
const searchResponseSchema = z.object({
  facets: z.object({
    count: z.number(),
    lang: z.object({
      buckets: z.array(facetBucketSchema),
    }),
    path: z.object({
      buckets: z.array(facetBucketSchema),
    }),
    repo: z.object({
      buckets: z.array(repoBucketSchema),
    }),
  }),
  hits: z.object({
    hits: z.array(searchHitSchema),
    total: z.number(),
  }),
  partial: z.boolean(),
  time: z.number(),
});

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

  // Search code files with highlighted snippets
  search: publicProcedure
    .input(
      z.object({
        query: z.string(),
        options: z
          .object({
            caseSensitive: z.boolean().optional().default(false),
            useRegex: z.boolean().optional().default(false),
            wholeWord: z.boolean().optional().default(false),
            limit: z.number().optional().default(20),
            offset: z.number().optional().default(0),
            filter: z
              .object({
                language: z.array(z.string()).optional(),
                path: z.array(z.string()).optional(),
                repo: z.array(z.string()).optional(),
              })
              .optional()
              .default({}),
          })
          .optional()
          .default({}),
      })
    )
    .output(searchResponseSchema)
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
