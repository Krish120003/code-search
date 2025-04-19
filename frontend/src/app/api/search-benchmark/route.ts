import { NextResponse } from "next/server";
import { searchFiles } from "@/server/services/solr";

export async function POST(req: Request) {
  try {
    // Get the query from the request body
    const body = await req.json();
    const { query } = body;

    if (!query) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }

    // Set a timeout to avoid long-running queries
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Search timed out")), 10000);
    });

    // Execute the search
    const searchPromise = searchFiles(query, { limit: 200 });

    // Wait for either the search to complete or timeout
    const result = await Promise.race([searchPromise, timeoutPromise]);

    // Extract the count from the search results - use safe optional chaining
    const count = result?.facets?.count ?? 0;

    // Return just the count for simplicity
    return NextResponse.json({
      count,
      query,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error in search benchmark API:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
