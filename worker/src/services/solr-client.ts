import * as Solr from "solr-client";
import { config } from "../config";
import { CodeFile } from "../types";

// Create Solr client with configuration
const client = Solr.createClient({
  host: config.solr.host,
  port: config.solr.port,
  core: config.solr.core,
  path: config.solr.path,
});

/**
 * Add a code file to the Solr index
 */
export async function addCodeFile(file: CodeFile): Promise<void> {
  try {
    // Map our CodeFile type to Solr document structure
    const solrDoc = {
      id: file.id,
      repo_url_s: file.repoUrl,
      repo_owner_s: file.repoOwner,
      repo_name_s: file.repoName,
      filepath_s: file.filepath,
      filename_s: file.filename,
      content_t: file.content,
      language_s: file.language,
      created_at_dt: file.createdAt,
      size_i: file.size,
      last_modified_dt: file.lastModified,
    };

    await client.add(solrDoc);
    await client.commit();

    console.log(
      `Added file to Solr: ${file.filepath} (${file.language}, ${formatBytes(
        file.size
      )})`
    );
  } catch (error) {
    console.error("Error adding file to Solr:", error);
    throw error;
  }
}

/**
 * Add multiple code files to the Solr index in a batch
 */
export async function addCodeFilesBatch(files: CodeFile[]): Promise<void> {
  try {
    if (files.length === 0) {
      return;
    }

    // Log each file before adding to batch
    files.forEach((file) => {
      console.log(
        `Adding to batch: ${file.filepath} (${file.language}, ${formatBytes(
          file.size
        )})`
      );
    });

    // Map our CodeFile array to Solr document structure
    const solrDocs = files.map((file) => ({
      id: file.id,
      repo_url_s: file.repoUrl,
      repo_owner_s: file.repoOwner,
      repo_name_s: file.repoName,
      filepath_s: file.filepath,
      filename_s: file.filename,
      content_t: file.content,
      language_s: file.language,
      created_at_dt: file.createdAt,
      size_i: file.size,
      last_modified_dt: file.lastModified,
    }));

    await client.add(solrDocs);
    await client.commit();

    console.log(`Batch completed: Added ${files.length} files to Solr index`);
  } catch (error) {
    console.error("Error adding files to Solr in batch:", error);
    throw error;
  }
}

/**
 * Delete files from a specific repository
 */
export async function deleteRepoFiles(repoUrl: string): Promise<void> {
  try {
    await client.deleteByQuery(`repo_url_s:"${repoUrl}"`);
    await client.commit();

    console.log(`Deleted all files from repository ${repoUrl} from Solr index`);
  } catch (error) {
    console.error("Error deleting repo files from Solr:", error);
    throw error;
  }
}

/**
 * Search for code in Solr
 */
export async function searchCode(
  query: string,
  options: {
    start?: number;
    rows?: number;
    filter?: string[];
  } = {}
): Promise<any> {
  try {
    const { start = 0, rows = 10, filter = [] } = options;

    // Build Solr query
    const solrQuery = client.query().q(query).start(start).rows(rows);

    // Add any filters - using fq (filter query) parameter manually
    // since addFilter might not be available in all versions
    if (filter.length > 0) {
      // @ts-ignore - Handle potential type issues with solr-client
      solrQuery.set("fq", filter);
    }

    const result = await client.search(solrQuery);
    return result.response;
  } catch (error) {
    console.error("Error searching code in Solr:", error);
    throw error;
  }
}

/**
 * Format bytes to a human-readable string
 */
function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

// Export the Solr client for direct use if needed
export { client };
