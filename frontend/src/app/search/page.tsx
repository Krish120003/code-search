"use client";

import { useEffect, useRef } from "react";
import { useQueryState } from "nuqs";
import { api } from "@/trpc/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, X, Github, FileCode } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

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
      ? contentStr
      : "Content preview not available";
  };

  // Helper function to get filename (may be an array from Solr)
  const getFilename = (filename: any): string => {
    if (!filename) return "Unnamed file";
    return Array.isArray(filename) ? filename[0] : filename;
  };

  // Helper function to get file parts to display path with breaks
  const getFileParts = (filename: string): string[] => {
    return filename.split(/[/\\]/g);
  };

  // Helper to get content lines for display
  const getContentLines = (content: string): string[] => {
    return content.split("\n").slice(0, 7); // Show up to 7 lines
  };

  // Helper function to highlight matches in text
  const highlightMatches = (text: string, searchTerm: string) => {
    if (!searchTerm.trim() || !text) return <>{text}</>;

    try {
      const regex = new RegExp(`(${searchTerm})`, "gi");
      const parts = text.split(regex);

      return (
        <>
          {parts.map((part, i) =>
            part.toLowerCase() === searchTerm.toLowerCase() ? (
              <mark
                key={i}
                className="bg-primary/20 text-foreground font-normal"
              >
                {part}
              </mark>
            ) : (
              part
            )
          )}
        </>
      );
    } catch {
      // In case of invalid regex
      return <>{text}</>;
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
      <div className="mb-6 sticky top-0 z-10 bg-background/95 pt-2 pb-4">
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
              className="pl-9 bg-background h-11 text-base"
            />
            {query && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full"
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
            {filesToDisplay.map((file: any) => {
              const content = getContentPreview(file.content);
              const filename = getFilename(file.filename);
              const fileParts = getFileParts(filename);
              const contentLines = getContentLines(content);

              return (
                <div
                  key={file.id}
                  className="flex w-full flex-col overflow-hidden rounded-md border border-border"
                >
                  {/* Result Header */}
                  <div className="flex min-h-10 w-full items-center justify-between border-b bg-card/50 px-4">
                    <div className="flex flex-col py-1 sm:flex-row sm:gap-2">
                      <div className="flex shrink-0 flex-row items-center gap-2">
                        <Github className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          {file.language}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {fileParts.map((part, i) => (
                          <span key={i}>
                            {i > 0 && <wbr />}
                            {part}
                            {i < fileParts.length - 1 && "/"}
                          </span>
                        ))}
                      </span>
                    </div>
                    <div className="hidden text-nowrap text-xs text-muted-foreground md:block">
                      {contentLines.length} lines
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="bg-background/50">
                    <Table>
                      <TableBody>
                        {contentLines.map((line, index) => (
                          <TableRow key={index} className="hover:bg-muted/30">
                            <TableCell className="p-0 w-14 text-right border-r border-card/30 text-muted-foreground">
                              <div className="px-2 py-1 text-xs tabular-nums">
                                {index + 1}
                              </div>
                            </TableCell>
                            <TableCell className="px-4 py-1">
                              <div className="font-mono text-sm whitespace-pre-wrap">
                                {query ? highlightMatches(line, query) : line}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              );
            })}
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
