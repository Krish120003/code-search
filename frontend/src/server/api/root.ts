import { postRouter } from "@/server/api/routers/post";
import { codeFilesRouter } from "@/server/api/routers/codeFiles";
import { ingestRouter } from "@/server/api/routers/ingest";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { ingestionRouter } from "@/server/api/routers/ingestion";

export const appRouter = createTRPCRouter({
  post: postRouter,
  codeFiles: codeFilesRouter,
  ingest: ingestRouter,
  ingestion: ingestionRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
