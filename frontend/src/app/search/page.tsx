"use client";

import { useEffect, useRef, useState } from "react";
import { useQueryState } from "nuqs";
import { api } from "@/trpc/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, X, Github, FileCode, CaseSensitive } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default function SearchFilesPage() {
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

  // Helper function to highlight matches in text based on search options
  const highlightMatches = (text: string, searchTerm: string) => {
    if (!searchTerm.trim() || !text) return <>{text}</>;

    try {
      let regexPattern = searchTerm;

      // Escape regex special chars if not using regex mode
      if (!useRegex) {
        regexPattern = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }

      // Add word boundary for whole word search
      if (wholeWord) {
        regexPattern = `\\b${regexPattern}\\b`;
      }

      const regex = new RegExp(`(${regexPattern})`, caseSensitive ? "g" : "gi");

      const parts = text.split(regex);

      return (
        <>
          {parts.map((part, i) => {
            const isMatch = i % 2 === 1; // Every odd-indexed part is a match
            return isMatch ? (
              <mark
                key={i}
                className="bg-primary/20 text-foreground font-normal"
              >
                {part}
              </mark>
            ) : (
              part
            );
          })}
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
              className="pl-9 pr-28 bg-background h-11 text-base"
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

            {/* Search options */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "h-7 w-7 rounded-md",
                  caseSensitive && "bg-primary/10 border border-primary/20"
                )}
                onClick={() => setCaseSensitive(!caseSensitive)}
                aria-label="Match case"
                title="Match case"
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
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "h-7 w-7 rounded-md",
                  wholeWord && "bg-primary/10 border border-primary/20"
                )}
                onClick={() => setWholeWord(!wholeWord)}
                aria-label="Match whole word"
                title="Match whole word"
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
                    d="M4.66669 10C5.77126 10 6.66669 9.10457 6.66669 8C6.66669 6.89543 5.77126 6 4.66669 6C3.56212 6 2.66669 6.89543 2.66669 8C2.66669 9.10457 3.56212 10 4.66669 10Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66669 6V10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.3333 10C12.4379 10 13.3333 9.10457 13.3333 8C13.3333 6.89543 12.4379 6 11.3333 6C10.2287 6 9.33331 6.89543 9.33331 8C9.33331 9.10457 10.2287 10 11.3333 10Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.33331 4.66675V10.0001"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 11V13H15V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "h-7 w-7 rounded-md",
                  useRegex && "bg-primary/10 border border-primary/20"
                )}
                onClick={() => setUseRegex(!useRegex)}
                aria-label="Use regular expression"
                title="Use regular expression"
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
                    d="M10.8867 2V8.66667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 3.66675L13.7733 7.00008"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 7.00008L13.7733 3.66675"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.22331 7.00008C2.22331 7.00008 4.66665 4.55566 4.66665 3.66675C4.66665 2.77783 3.9553 2.06641 3.06665 2.06641C2.17801 2.06641 1.46631 2.77783 1.46631 3.66675"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.33334 7.00008C1.33334 7.00008 3.77668 9.4445 3.77668 10.3334C3.77668 11.2223 3.06534 11.9338 2.17669 11.9338C1.28805 11.9338 0.576343 11.2223 0.576343 10.3334"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.22331 13.9999H5.33334"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </Button>
            </div>
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
