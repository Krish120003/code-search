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
import {
  Search,
  X,
  Github,
  FileCode,
  CaseSensitive,
  Filter,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { FilterPanel } from "@/components/filter-panel";

function SearchFilesComponent() {
  // Use URL state for the search query
  const [query, setQuery] = useQueryState("q");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [useRegex, setUseRegex] = useState(false);
  const [wholeWord, setWholeWord] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // State for selected filters
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedPaths, setSelectedPaths] = useState<string[]>([]);
  const [selectedRepos, setSelectedRepos] = useState<string[]>([]);

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Fetch search results whenever the query or filters change
  const { data: searchResults, isLoading: isSearching } =
    api.codeFiles.search.useQuery(
      {
        query: query || "",
        options: {
          caseSensitive,
          useRegex,
          wholeWord,
          filter: {
            language:
              selectedLanguages.length > 0 ? selectedLanguages : undefined,
            path: selectedPaths.length > 0 ? selectedPaths : undefined,
            repo: selectedRepos.length > 0 ? selectedRepos : undefined,
          },
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

  // Handle toggling language filter
  const toggleLanguageFilter = (language: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((lang) => lang !== language)
        : [...prev, language]
    );
  };

  // Handle toggling path filter
  const togglePathFilter = (path: string) => {
    setSelectedPaths((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path]
    );
  };

  // Handle toggling repo filter
  const toggleRepoFilter = (repo: string) => {
    setSelectedRepos((prev) =>
      prev.includes(repo) ? prev.filter((r) => r !== repo) : [...prev, repo]
    );
  };

  // Check if there are any active filters
  const hasActiveFilters =
    selectedLanguages.length > 0 ||
    selectedPaths.length > 0 ||
    selectedRepos.length > 0;

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedLanguages([]);
    setSelectedPaths([]);
    setSelectedRepos([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Code Search</h1>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href="/benchmark">
              <Search className="h-4 w-4 mr-1" />
              Benchmark
            </Link>
          </Button>
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
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-pressed={caseSensitive}
              onClick={() => setCaseSensitive(!caseSensitive)}
              className={cn(
                "h-6 w-6 rounded-md text-muted-foreground",
                caseSensitive && "bg-muted text-foreground"
              )}
              aria-label="Match case"
            >
              <CaseSensitive className="h-3.5 w-3.5" />
            </Button>

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
            <div className="rounded-lg border border-border">
              <FilterPanel
                languageFacets={langFacets}
                pathFacets={pathFacets}
                repoFacets={repoFacets}
                selectedLanguages={selectedLanguages}
                selectedPaths={selectedPaths}
                selectedRepos={selectedRepos}
                onToggleLanguage={toggleLanguageFilter}
                onTogglePath={togglePathFilter}
                onToggleRepo={toggleRepoFilter}
                onClearLanguages={() => setSelectedLanguages([])}
                onClearPaths={() => setSelectedPaths([])}
                onClearRepos={() => setSelectedRepos([])}
                onClearAll={clearAllFilters}
              />
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
                    {hasActiveFilters && (
                      <span className="ml-1">
                        with
                        {selectedLanguages.length > 0 &&
                          ` ${selectedLanguages.length} languages`}
                        {selectedPaths.length > 0 &&
                          `${selectedLanguages.length > 0 ? "," : ""} ${
                            selectedPaths.length
                          } paths`}
                        {selectedRepos.length > 0 &&
                          `${
                            selectedLanguages.length > 0 ||
                            selectedPaths.length > 0
                              ? ","
                              : ""
                          } ${selectedRepos.length} repos`}
                      </span>
                    )}
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
                          className="code-snippet text-sm p-4 whitespace-pre-wrap font-mono"
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
