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

// Process the content to create line-numbered snippets with highlighting
function processContentHighlighting(
  content: string,
  query: string
): { snippet: string; lineMatches: number[] } {
  if (!content) return { snippet: "", lineMatches: [] };

  const lines = content.split("\n");
  const lineMatches: number[] = [];
  const regex = new RegExp(query, "gi");

  // Find all lines with matches
  lines.forEach((line, index) => {
    if (regex.test(line)) {
      lineMatches.push(index + 1); // 1-indexed line numbers
    }
    // Reset regex state
    regex.lastIndex = 0;
  });

  // Group consecutive line matches
  const lineGroups: Array<{ start: number; end: number }> = [];
  let currentGroup: { start: number; end: number } | null = null;

  lineMatches.forEach((lineNum) => {
    if (!currentGroup) {
      currentGroup = { start: lineNum, end: lineNum };
    } else if (lineNum === currentGroup.end + 1) {
      currentGroup.end = lineNum;
    } else {
      lineGroups.push(currentGroup!);
      currentGroup = { start: lineNum, end: lineNum };
    }
  });

  if (currentGroup) {
    lineGroups.push(currentGroup);
  }

  // Generate HTML snippet with line numbers and highlighting
  let snippetHtml = '<table class="highlight-table">';
  const context = 2; // Show N lines before and after matches

  lineGroups.forEach((group, idx) => {
    // Add jump indicator if there's a gap between groups
    if (
      idx > 0 &&
      lineGroups[idx - 1].end + context * 2 < group.start - context
    ) {
      snippetHtml += '<tr><td><div class="jump"></div></td></tr>';
    }

    // Show lines with context
    const startLine = Math.max(1, group.start - context);
    const endLine = Math.min(lines.length, group.end + context);

    for (let i = startLine; i <= endLine; i++) {
      const line = lines[i - 1]; // 0-indexed array
      const isMatch = i >= group.start && i <= group.end;

      // Create HTML for this line with highlighting
      snippetHtml += `<tr data-line="${i}"><td><div class="lineno">${i}</div></td><td><div class="highlight"><pre>`;

      if (isMatch && line) {
        // Highlight the search term
        const highlightedLine = line.replace(
          regex,
          (match) => `<mark>${match}</mark>`
        );
        snippetHtml += highlightedLine;
      } else {
        snippetHtml += line;
      }

      snippetHtml += "</pre></div></td></tr>";
    }
  });

  snippetHtml += "</table>";

  return {
    snippet: snippetHtml,
    lineMatches,
  };
}

// Search for files with highlighted snippets
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
        if (doc.language) {
          const lang = Array.isArray(doc.language)
            ? doc.language[0]
            : doc.language;
          languageFacets[lang] = (languageFacets[lang] || 0) + 1;
        }

        if (doc.filename) {
          const filename = Array.isArray(doc.filename)
            ? doc.filename[0]
            : doc.filename;
          // Extract path parts for path facet
          const parts = filename.split("/");
          if (parts.length > 1) {
            const pathPart = parts[0] + "/";
            pathFacets[pathPart] = (pathFacets[pathPart] || 0) + 1;
          }

          // Use first part as "repo" for demo purposes
          if (parts.length > 0) {
            const repo = parts[0];
            if (!repoFacets[repo]) {
              repoFacets[repo] = {
                count: 0,
                owner_id: Math.floor(Math.random() * 10000000).toString(),
              };
            }
            repoFacets[repo].count += 1;
          }
        }

        // Create enhanced snippet with highlighting
        const content = Array.isArray(doc.content)
          ? doc.content[0]
          : doc.content;
        const { snippet, lineMatches } = processContentHighlighting(
          content,
          query
        );

        return {
          id: {
            raw: doc.id,
          },
          path: {
            raw: Array.isArray(doc.filename) ? doc.filename[0] : doc.filename,
          },
          repo: {
            raw:
              Array.isArray(doc.filename) && doc.filename[0].includes("/")
                ? doc.filename[0].split("/")[0]
                : "unknown",
          },
          branch: {
            raw: "main",
          },
          owner_id: {
            raw: Math.floor(Math.random() * 10000000).toString(),
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
