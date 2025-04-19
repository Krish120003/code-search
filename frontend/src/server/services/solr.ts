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
  // return query.replace(/([+\-&|!(){}[\]^"~*?:\\\/])/g, "\\$1");
  return query;
}

// Process content to create highlighted snippets
function processContentHighlighting(
  content: string,
  query: string
): { snippet: string; lineMatches: string[] } {
  // Split content into lines
  const lines = content.split("\n");
  const lineMatches: string[] = [];

  // Simple case-insensitive matching for demo
  const queryLower = query.toLowerCase();

  // Find lines that match the query
  lines.forEach((line, i) => {
    if (line.toLowerCase().includes(queryLower)) {
      lineMatches.push(`${i + 1}: ${line}`);
    }
  });

  // Create a snippet with line numbers and highlighting
  // Take up to 5 matching lines
  const matchesToShow = lineMatches.slice(0, 5);

  // Join the matches into a single string with line breaks
  const snippet =
    matchesToShow.length > 0
      ? matchesToShow.join("\n")
      : "No matching lines found";

  return { snippet, lineMatches };
}

// Get all files from the index
export async function getAllFiles(): Promise<any> {
  try {
    const solrQuery = client.query().q("*:*");
    const result = await client.search(solrQuery);
    return result.response;
  } catch (error) {
    console.error("Error getting all files:", error);
    throw new Error("Failed to get files");
  }
}

// Search for files with highlighted snippets
export async function searchFiles(
  query: string,
  options: {
    caseSensitive?: boolean;
    useRegex?: boolean;
    wholeWord?: boolean;
    limit?: number;
    offset?: number;
    filter?: {
      language?: string[];
      path?: string[];
      repo?: string[];
    };
  } = {}
): Promise<any> {
  try {
    // Escape special characters
    const escapedQuery = escapeSolrQuery(query);

    // Format the query to search in content_t and filename_s fields (matching the worker's field names)
    let solrSearchQuery = `content_t:*${escapedQuery}* OR filename_s:*${escapedQuery}*`;

    // Apply filters if they exist
    const filterQueries = [];

    // Add language filter
    if (options.filter?.language && options.filter.language.length > 0) {
      const languageQuery = options.filter.language
        .map((lang) => `language_s:"${lang}"`)
        .join(" OR ");
      filterQueries.push(`(${languageQuery})`);
    }

    // Add path filter
    if (options.filter?.path && options.filter.path.length > 0) {
      const pathQuery = options.filter.path
        .map((path) => `filepath_s:${path}*`)
        .join(" OR ");
      filterQueries.push(`(${pathQuery})`);
    }

    // Add repo filter
    if (options.filter?.repo && options.filter.repo.length > 0) {
      const repoQuery = options.filter.repo
        .map((repo) => `repo_name_s:"${repo}"`)
        .join(" OR ");
      filterQueries.push(`(${repoQuery})`);
    }

    // console.log("Executing Solr query:", solrSearchQuery);
    // console.log("Filter queries:", filterQueries);

    const solrQuery = client
      .query()
      .q(solrSearchQuery)
      .fl([
        "id",
        "filename_s",
        "filepath_s",
        "content_t",
        "language_s",
        "repo_url_s",
        "repo_owner_s",
        "repo_name_s",
        "created_at_dt",
      ])
      .start(options.offset || 0)
      .rows(options.limit || 20);

    // Add filter queries
    if (filterQueries.length > 0) {
      // @ts-ignore - Cast the solrQuery to any type to avoid TypeScript errors
      (solrQuery as any).set("fq", filterQueries);
    }

    const result = await client.search(solrQuery);
    // console.log("Solr se`arch results:", result.response);

    // Process results to add highlighting
    if (result.response && result.response.docs) {
      // Calculate facets from the response
      const languageFacets: Record<string, number> = {};
      const pathFacets: Record<string, number> = {};
      const repoFacets: Record<string, { count: number; owner_id: string }> =
        {};

      // Process each document to create highlighted snippets
      const processedDocs = result.response.docs.map((doc: any) => {
        // Add to facets
        if (doc.language_s) {
          const lang = Array.isArray(doc.language_s)
            ? doc.language_s[0]
            : doc.language_s;
          languageFacets[lang] = (languageFacets[lang] || 0) + 1;
        }

        // Use filepath_s for path facets
        if (doc.filepath_s) {
          const filepath = Array.isArray(doc.filepath_s)
            ? doc.filepath_s[0]
            : doc.filepath_s;

          // Extract directory part for path facet
          const parts = filepath.split("/");
          if (parts.length > 1) {
            const dirPart = parts[0] + "/";
            pathFacets[dirPart] = (pathFacets[dirPart] || 0) + 1;
          }

          // Use repo_name_s as repo for facet
          if (doc.repo_name_s) {
            const repo = Array.isArray(doc.repo_name_s)
              ? doc.repo_name_s[0]
              : doc.repo_name_s;

            if (!repoFacets[repo]) {
              repoFacets[repo] = {
                count: 0,
                owner_id:
                  doc.repo_owner_s ||
                  Math.floor(Math.random() * 10000000).toString(),
              };
            }
            repoFacets[repo].count += 1;
          }
        }

        // Create enhanced snippet with highlighting
        const content = Array.isArray(doc.content_t)
          ? doc.content_t[0]
          : doc.content_t;
        const { snippet, lineMatches } = processContentHighlighting(
          content,
          query
        );

        return {
          id: {
            raw: doc.id,
          },
          path: {
            raw: Array.isArray(doc.filepath_s)
              ? doc.filepath_s[0]
              : doc.filepath_s || "",
          },
          repo: {
            raw: Array.isArray(doc.repo_name_s)
              ? doc.repo_name_s[0]
              : doc.repo_name_s || "unknown",
          },
          branch: {
            raw: "main",
          },
          owner_id: {
            raw: Array.isArray(doc.repo_owner_s)
              ? doc.repo_owner_s[0]
              : doc.repo_owner_s || "",
          },
          content: {
            snippet,
          },
          total_matches: {
            raw:
              lineMatches.length > 100 ? "100+" : lineMatches.length.toString(),
          },
        };
      });

      // Convert facet objects to array format that matches the example API
      const langBuckets = Object.entries(languageFacets).map(
        ([val, count]) => ({ val, count })
      );
      const pathBuckets = Object.entries(pathFacets).map(([val, count]) => ({
        val,
        count,
      }));
      const repoBuckets = Object.entries(repoFacets).map(([val, data]) => ({
        val,
        count: data.count,
        owner_id: data.owner_id,
      }));

      // Create response in the format of the example API
      return {
        facets: {
          count: result.response.numFound,
          lang: {
            buckets: langBuckets,
          },
          path: {
            buckets: pathBuckets,
          },
          repo: {
            buckets: repoBuckets,
          },
        },
        hits: {
          hits: processedDocs,
          total: result.response.numFound,
        },
        partial: false,
        time: 63, // Mock time for now
      };
    }

    return result.response;
  } catch (error) {
    console.error("Error searching files:", error);
    throw new Error("Failed to search files");
  }
}
