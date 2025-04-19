"use client";

import { useEffect, useRef } from "react";
import { useQueryState } from "nuqs";
import { api } from "@/trpc/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, X } from "lucide-react";

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
        <Button asChild variant="default">
          <Link href="/add-code-file">Add New File</Link>
        </Button>
      </div>

      {/* Search bar */}
      <div className="mb-6 sticky top-0 z-10 bg-[#212121]/95 pt-2 pb-4">
        <div className="relative">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="text"
              value={query || ""}
              onChange={(e) => setQuery(e.target.value || null)}
              placeholder="Search code..."
              aria-label="Search code"
              className="pl-9 bg-background"
            />
            {query && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1 h-7 w-7 rounded-full"
                onClick={() => setQuery(null)}
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Results counter - only show when there's a query */}
      {hasSearched && (
        <div className="mb-4 text-muted-foreground">
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
          <div className="space-y-4">
            <Skeleton className="h-[150px] w-full rounded-lg" />
            <Skeleton className="h-[150px] w-full rounded-lg" />
            <Skeleton className="h-[150px] w-full rounded-lg" />
          </div>
        ) : filesToDisplay && filesToDisplay.length > 0 ? (
          <div className="space-y-6 overflow-y-auto pb-8">
            {filesToDisplay.map((file: any) => (
              <Card key={file.id} className="bg-card overflow-hidden">
                <CardHeader className="border-b p-3 bg-muted/30">
                  <div className="flex justify-between items-center">
                    <CardTitle className="font-mono text-base">
                      {getFilename(file.filename)}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {file.language}
                    </Badge>
                  </div>
                </CardHeader>
                {file.content && (
                  <CardContent className="p-0">
                    <pre className="m-0 overflow-x-auto p-4 text-sm font-mono">
                      <code>
                        {highlightMatches(
                          getContentPreview(file.content),
                          query || ""
                        )}
                      </code>
                    </pre>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <Card className="flex flex-col items-center justify-center text-center p-8 bg-card/50 border-dashed">
            <Search className="h-16 w-16 mb-4 text-muted-foreground/50" />
            <p className="text-xl text-muted-foreground">
              No results found. Try a different search query.
            </p>
          </Card>
        )
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <Search className="h-24 w-24 mb-6 text-muted-foreground/30" />
          <p className="text-xl text-muted-foreground/70">
            Enter a search term to find code files
          </p>
        </div>
      )}
    </div>
  );
}
