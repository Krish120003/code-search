import { NextResponse } from "next/server";
import { ingestRouter } from "@/server/api/routers/ingest";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { repoUrl, stats, fileTypes } = body;

    if (!repoUrl || !stats || !fileTypes) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const result = await ingestRouter.addIngestionDetails({
      repoUrl,
      stats,
      fileTypes,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in ingestion API:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
