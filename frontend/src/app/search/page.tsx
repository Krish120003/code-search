"use client";

import { useEffect, useRef } from "react";
import { useQueryState } from "nuqs";
import { api } from "@/trpc/react";
import Link from "next/link";

export default function SearchFilesPage() {
  // Use URL state for the search query
  const [query, setQuery] = useQueryState("q");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Fetch search results whenever the query changes
  const { data: searchResults, isLoading: isSearching } =
    api.codeFiles.search.useQuery(
      { query: query || "" },
      {
        enabled: (query || "").length > 0,
      }
    );

  // Determine if we have an active search
  const hasSearched = (query || "").length > 0;
  const filesToDisplay = hasSearched ? searchResults?.docs : [];
  const isLoading = hasSearched && isSearching;
  const resultCount = filesToDisplay?.length ?? 0;

  // Helper function to handle content that may be an array or string
  const getContentPreview = (content: any): string => {
    if (!content) return "";
    const contentStr = Array.isArray(content) ? content[0] : content;
    return typeof contentStr === "string"
      ? contentStr.substring(0, 200) + "..."
      : "Content preview not available";
  };

  // Helper function to get filename (may be an array from Solr)
  const getFilename = (filename: any): string => {
    if (!filename) return "Unnamed file";
    return Array.isArray(filename) ? filename[0] : filename;
  };

  // Helper function to highlight matches in text
  const highlightMatches = (text: string, searchTerm: string) => {
    if (!searchTerm.trim() || !text) return text;

    try {
      const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
      return parts.map((part, i) =>
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key={i} className="bg-[#7AB]/40 text-white">
            {part}
          </mark>
        ) : (
          part
        )
      );
    } catch {
      // In case of invalid regex
      return text;
    }
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

      {/* Search bar */}
      <div className="mb-6 sticky top-0 z-10 bg-[#212121]/95 pt-2 pb-4">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query || ""}
            onChange={(e) => setQuery(e.target.value || null)}
            placeholder="Search code..."
            aria-label="Search code"
            className="w-full rounded-md border border-[#666] bg-[#111] px-4 py-3 pl-10 text-[#EEE] placeholder-[#888] focus:border-[#7AB] focus:outline-none focus:ring-1 focus:ring-[#7AB]"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#888]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {query && (
            <button
              onClick={() => setQuery(null)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#888] hover:text-[#EEE]"
              aria-label="Clear search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Results counter - only show when there's a query */}
      {hasSearched && (
        <div className="mb-4 text-[#888]">
          {isLoading ? (
            <span>Searching...</span>
          ) : (
            <span>
              {resultCount} {resultCount === 1 ? "result" : "results"}
              {` for "${query}"`}
            </span>
          )}
        </div>
      )}

      {/* Results */}
      {hasSearched ? (
        isLoading ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="animate-pulse flex space-x-2">
              <div className="h-3 w-3 bg-[#7AB] rounded-full"></div>
              <div className="h-3 w-3 bg-[#7AB] rounded-full"></div>
              <div className="h-3 w-3 bg-[#7AB] rounded-full"></div>
            </div>
          </div>
        ) : filesToDisplay && filesToDisplay.length > 0 ? (
          <div className="space-y-6 overflow-y-auto pb-8">
            {filesToDisplay.map((file: any) => (
              <div
                key={file.id}
                className="rounded-lg border border-[#666] bg-[#111] overflow-hidden"
              >
                <div className="border-b border-[#666] bg-[#1a1a1a] p-3 flex justify-between items-center">
                  <h3 className="font-mono text-[#EEE]">
                    {getFilename(file.filename)}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[#7AB]/20 px-2 py-1 text-xs text-[#7AB]">
                      {file.language}
                    </span>
                  </div>
                </div>
                {file.content && (
                  <div className="p-0">
                    <pre className="m-0 overflow-x-auto p-4 text-sm">
                      <code>
                        {highlightMatches(
                          getContentPreview(file.content),
                          query || ""
                        )}
                      </code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8 text-[#888] border border-dashed border-[#666] rounded-lg">
            <svg
              className="h-16 w-16 mb-4 text-[#666]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <p className="text-xl">
              No results found. Try a different search query.
            </p>
          </div>
        )
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <svg
            className="h-24 w-24 mb-6 text-[#444]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <p className="text-xl text-[#666]">
            Enter a search term to find code files
          </p>
        </div>
      )}
    </div>
  );
}
