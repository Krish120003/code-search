import * as Solr from "solr-client";

// Solr configuration
const solrOptions = {
  host: process.env.SOLR_HOST || "127.0.0.1",
  port: Number(process.env.SOLR_PORT) || 8983,
  core: process.env.SOLR_CORE || "code",
  path: process.env.SOLR_PATH || "/solr",
};

// Create a Solr client instance
const client = Solr.createClient(solrOptions);

// Add a file to the index
export async function addFile(file: {
  id: string;
  filename: string;
  content: string;
  language: string;
  createdAt: Date;
}): Promise<void> {
  try {
    await client.add(file);
    await client.commit();
  } catch (error) {
    console.error("Error adding file to Solr:", error);
    throw new Error("Failed to add file to index");
  }
}

// Escape Solr special characters
function escapeSolrQuery(query: string): string {
  // Escape Solr special characters: + - && || ! ( ) { } [ ] ^ " ~ * ? : \ /
  return query.replace(/([+\-&|!(){}[\]^"~*?:\\\/])/g, "\\$1");
}

// Search for files
export async function searchFiles(query: string): Promise<any> {
  try {
    // Escape special characters
    const escapedQuery = escapeSolrQuery(query);

    // Format the query to search in content and filename fields
    const solrSearchQuery = `content:*${escapedQuery}* OR filename:*${escapedQuery}*`;

    console.log("Executing Solr query:", solrSearchQuery);

    const solrQuery = client
      .query()
      .q(solrSearchQuery)
      .fl(["id", "filename", "content", "language", "createdAt"])
      .start(0)
      .rows(20);

    const result = await client.search(solrQuery);
    console.log("Solr search results:", result.response);
    return result.response;
  } catch (error) {
    console.error("Error searching files:", error);
    throw new Error("Failed to search files");
  }
}

// Get all files
export async function getAllFiles(): Promise<any> {
  try {
    const solrQuery = client
      .query()
      .q("*:*")
      .fl(["id", "filename", "language", "createdAt"])
      .sort({ createdAt: "desc" })
      .start(0)
      .rows(100);

    const result = await client.search(solrQuery);
    return result.response;
  } catch (error) {
    console.error("Error fetching all files:", error);
    throw new Error("Failed to fetch files");
  }
}
