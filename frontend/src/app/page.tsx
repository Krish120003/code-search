"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { useQueryState } from "nuqs";
import { api } from "@/trpc/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, X, Github, FileCode, CaseSensitive } from "lucide-react";
import { cn } from "@/lib/utils";

function SearchFilesComponent() {
  // Use URL state for the search query
  const [query, setQuery] = useQueryState("q");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [useRegex, setUseRegex] = useState(false);
  const [wholeWord, setWholeWord] = useState(false);
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
      {
        query: query || "",
        options: {
          caseSensitive,
          useRegex,
          wholeWord,
        },
      },
      {
        enabled: (query || "").length > 0,
      }
    );

  // Determine if we have an active search
  const hasSearched = (query || "").length > 0;
  const isLoading = hasSearched && isSearching;

  // Get facets for filtering UI
  const langFacets = searchResults?.facets?.lang?.buckets || [];
  const pathFacets = searchResults?.facets?.path?.buckets || [];
  const repoFacets = searchResults?.facets?.repo?.buckets || [];
  const totalResults = searchResults?.facets?.count || 0;

  // Get search hits
  const searchHits = searchResults?.hits?.hits || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Code Search</h1>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href="/ingest">
              <Github className="h-4 w-4 mr-1" />
              Add Repository
            </Link>
          </Button>
          <Button asChild variant="default">
            <Link href="/add-code-file">Add New File</Link>
          </Button>
        </div>
      </div>

      {/* Search bar */}
      <div className="mb-6 sticky top-0 z-10 bg-background/95 pt-2 pb-4">
        <div className="relative w-full flex-grow md:max-w-[625px] mx-auto">
          <Input
            ref={inputRef}
            type="text"
            value={query || ""}
            onChange={(e) => setQuery(e.target.value || null)}
            placeholder="Search code..."
            aria-label="Search code"
            className="flex w-full min-w-0 shrink rounded-md border border-grep-4 bg-grep-0 px-3 py-1 text-sm transition-colors focus-visible:border-grep-12 focus-visible:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grep-4 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-grep-7 h-[42px] pr-24 md:h-9"
            spellCheck="false"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
          />

          {/* Search options */}
          <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1">
            <button
              type="button"
              aria-pressed={caseSensitive}
              data-state={caseSensitive ? "on" : "off"}
              onClick={() => setCaseSensitive(!caseSensitive)}
              className="border border-transparent inline-flex items-center justify-center gap-2 rounded-md text-sm text-grep-9 font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-grep-11 data-[state=on]:border-grep-6 data-[state=on]:text-foreground bg-transparent h-6 px-1 min-w-6"
              aria-label="Match case"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M11.6667 11C12.7713 11 13.6667 10.1046 13.6667 9C13.6667 7.89543 12.7713 7 11.6667 7C10.5621 7 9.66669 7.89543 9.66669 9C9.66669 10.1046 10.5621 11 11.6667 11Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.6667 7V11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.26242 10.0789L2.63419 11.8414L2.57767 12H0.985229L1.22126 11.3378L4.22128 2.92102L5.63421 2.92102L8.63419 11.3378L8.87023 12H7.27779L7.22126 11.8414L6.59305 10.0789H6.5777H3.2777H3.26242ZM3.79707 8.57885H6.0584L4.92774 5.40668L3.79707 8.57885Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <div
              role="group"
              dir="ltr"
              className="flex items-center justify-center gap-1"
            >
              <button
                type="button"
                data-state={wholeWord ? "on" : "off"}
                role="radio"
                aria-checked={wholeWord}
                onClick={() => setWholeWord(!wholeWord)}
                className="border border-transparent inline-flex items-center justify-center gap-2 rounded-md text-sm text-grep-9 font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-grep-11 data-[state=on]:border-grep-6 data-[state=on]:text-foreground bg-transparent h-6 px-1 min-w-6"
                aria-label="Match whole words"
                tabIndex={-1}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                >
                  <rect
                    x="3"
                    y="3"
                    width="10"
                    height="10"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="5"
                    y="5"
                    width="6"
                    height="6"
                    rx="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>

              <button
                type="button"
                data-state={useRegex ? "on" : "off"}
                role="radio"
                aria-checked={useRegex}
                onClick={() => setUseRegex(!useRegex)}
                className="border border-transparent inline-flex items-center justify-center gap-2 rounded-md text-sm text-grep-9 font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-grep-11 data-[state=on]:border-grep-6 data-[state=on]:text-foreground bg-transparent h-6 px-1 min-w-6"
                aria-label="Use regex"
                tabIndex={-1}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.1301 5.33417L10.112 5.31999L10.1301 5.33781C10.9636 6.24371 11.3971 7.41351 11.3529 8.61253C11.3086 9.81154 10.7904 10.9457 9.89695 11.7924C9.00349 12.6392 7.80333 13.1302 6.55521 13.1689C5.30709 13.2075 4.07979 12.7911 3.13553 11.9999C2.19128 11.2087 1.59546 10.0979 1.46984 8.89791C1.34422 7.69788 1.69812 6.50339 2.45931 5.5736C3.2205 4.64381 4.33258 4.05105 5.55116 3.92091C6.76975 3.79077 7.99048 4.13252 8.96994 4.86417L8.98262 4.87442L9.41862 4.36299L9.42009 4.36133L10.1301 5.33417ZM5.70006 5.42433C5.00536 5.42433 4.33849 5.69468 3.84462 6.17542C3.35076 6.65617 3.07315 7.30518 3.07315 7.98117C3.07315 8.65716 3.35076 9.30616 3.84462 9.78691C4.33849 10.2677 5.00536 10.538 5.70006 10.538C6.39476 10.538 7.06163 10.2677 7.5555 9.78691C8.04936 9.30616 8.32697 8.65716 8.32697 7.98117C8.32697 7.30518 8.04936 6.65617 7.5555 6.17542C7.06163 5.69468 6.39476 5.42433 5.70006 5.42433Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.2856 3.46231C14.3801 3.38328 14.3974 3.25135 14.3246 3.15162C14.2518 3.05188 14.1198 3.02926 14.0253 3.10829L9.87109 6.32465C9.77664 6.40368 9.75935 6.53561 9.83215 6.63534C9.90495 6.73508 10.0369 6.7577 10.1314 6.67867L14.2856 3.46231Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.2856 12.5001C14.3801 12.5791 14.3974 12.711 14.3246 12.8108C14.2518 12.9105 14.1198 12.9331 14.0253 12.8541L9.87109 9.63774C9.77664 9.55871 9.75935 9.42678 9.83215 9.32704C9.90495 9.22731 10.0369 9.20469 10.1314 9.28372L14.2856 12.5001Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {query && (
              <button
                type="button"
                onClick={() => setQuery(null)}
                className="ml-1 rounded-md text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results area with facets and hits */}
      {hasSearched && (
        <div className="mt-6 grid grid-cols-12 gap-6">
          {/* Facets sidebar */}
          <div className="col-span-3">
            <div className="rounded-lg border border-border p-4">
              <h2 className="mb-4 font-medium">Filters</h2>

              {/* Language facets */}
              {langFacets.length > 0 && (
                <div className="mb-4">
                  <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                    Languages
                  </h3>
                  <ul className="space-y-1">
                    {langFacets.map((facet) => (
                      <li
                        key={facet.val}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm">{facet.val}</span>
                        <Badge variant="outline">
                          {facet.count.toLocaleString()}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Path facets */}
              {pathFacets.length > 0 && (
                <div className="mb-4">
                  <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                    Paths
                  </h3>
                  <ul className="space-y-1">
                    {pathFacets.map((facet) => (
                      <li
                        key={facet.val}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm">{facet.val}</span>
                        <Badge variant="outline">
                          {facet.count.toLocaleString()}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Repository facets */}
              {repoFacets.length > 0 && (
                <div>
                  <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                    Repositories
                  </h3>
                  <ul className="space-y-1">
                    {repoFacets.map((facet) => (
                      <li
                        key={facet.val}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm">{facet.val}</span>
                        <Badge variant="outline">
                          {facet.count.toLocaleString()}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Search results */}
          <div className="col-span-9">
            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <Skeleton className="mb-2 h-6 w-3/4" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  </Card>
                ))}
              </div>
            ) : searchHits.length === 0 && hasSearched ? (
              <div className="rounded-lg border border-border p-6 text-center">
                <p className="text-lg font-medium">No results found</p>
                <p className="text-muted-foreground">
                  Try adjusting your search term or filters
                </p>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">
                    Found {totalResults.toLocaleString()} results for "{query}"
                  </p>
                </div>
                <div className="space-y-6">
                  {searchHits.map((hit) => (
                    <Card key={hit.id.raw} className="overflow-hidden">
                      <div className="border-b border-border bg-muted/50 px-4 py-2">
                        <div className="flex items-center gap-2">
                          <FileCode className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{hit.path.raw}</span>
                          <Badge variant="outline">
                            {hit.total_matches.raw} matches
                          </Badge>
                        </div>
                        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                          <Github className="h-3 w-3" />
                          <span>{hit.repo.raw}</span>
                          <span>•</span>
                          <span>Branch: {hit.branch.raw}</span>
                        </div>
                      </div>

                      {/* Code snippet with syntax highlighting */}
                      <div className="max-h-96 overflow-auto p-0">
                        <div
                          className="code-snippet text-sm"
                          dangerouslySetInnerHTML={{
                            __html: hit.content.snippet,
                          }}
                        />
                      </div>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchFilesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchFilesComponent />
    </Suspense>
  );
}
