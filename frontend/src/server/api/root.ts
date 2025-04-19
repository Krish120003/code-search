import { postRouter } from "@/server/api/routers/post";
import { codeFilesRouter } from "@/server/api/routers/codeFiles";
import { ingestRouter } from "@/server/api/routers/ingest";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  codeFiles: codeFilesRouter,
  ingest: ingestRouter,
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller.
 */
export const createCaller = createCallerFactory(appRouter);
