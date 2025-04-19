"use client";

import { useState } from "react";
import { api } from "@/trpc/react";
import Link from "next/link";

export default function SearchFilesPage() {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const { data: allFiles, isLoading: isLoadingAll } =
    api.codeFiles.getAll.useQuery(undefined, {
      enabled: !hasSearched,
    });

  const {
    data: searchResults,
    isLoading: isSearching,
    refetch: performSearch,
  } = api.codeFiles.search.useQuery(
    { query },
    {
      enabled: false,
    }
  );

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    await performSearch();
  };

  // Determine which files to display
  const filesToDisplay = hasSearched ? searchResults?.docs : allFiles?.docs;
  const isLoading = hasSearched ? isSearching : isLoadingAll;

  // Helper function to handle content that may be an array or string
  const getContentPreview = (content: any): string => {
    if (!content) return "";

    // If content is an array, take the first element
    const contentStr = Array.isArray(content) ? content[0] : content;

    // Return a substring of the content
    return typeof contentStr === "string"
      ? contentStr.substring(0, 200) + "..."
      : "Content preview not available";
  };

  // Helper function to get filename (may be an array from Solr)
  const getFilename = (filename: any): string => {
    if (!filename) return "Unnamed file";
    return Array.isArray(filename) ? filename[0] : filename;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Code Search</h1>
        <Link
          href="/add-code-file"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add New File
        </Link>
      </div>

      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for code..."
            className="flex-1 rounded-md border border-gray-300 p-2"
          />
          <button
            type="submit"
            disabled={isSearching || !query}
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-blue-400"
          >
            {isSearching ? "Searching..." : "Search"}
          </button>
          {hasSearched && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setHasSearched(false);
              }}
              className="rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300"
            >
              Clear
            </button>
          )}
        </div>
      </form>

      <div>
        <h2 className="mb-4 text-xl font-semibold">
          {hasSearched ? "Search Results" : "Recent Files"}
        </h2>

        {isLoading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : filesToDisplay && filesToDisplay.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filesToDisplay.map((file: any) => (
              <div
                key={file.id}
                className="rounded-lg border border-gray-200 p-4 shadow-sm"
              >
                <h3 className="mb-2 text-lg font-medium">
                  {getFilename(file.filename)}
                </h3>
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                    {file.language}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(file.createdAt).toLocaleDateString()}
                  </span>
                </div>
                {file.content && (
                  <pre className="mt-2 max-h-32 overflow-auto rounded-md bg-gray-100 p-2 text-sm">
                    <code>{getContentPreview(file.content)}</code>
                  </pre>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-gray-200 p-8 text-center text-gray-500">
            {hasSearched
              ? "No results found. Try a different search query."
              : "No files have been added yet. Click 'Add New File' to get started."}
          </div>
        )}
      </div>
    </div>
  );
}
