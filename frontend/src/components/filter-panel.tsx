"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FilterPanelProps {
  languageFacets: { val: string; count: number }[];
  pathFacets: { val: string; count: number }[];
  repoFacets: { val: string; count: number; owner_id: string }[];
  selectedLanguages: string[];
  selectedPaths: string[];
  selectedRepos: string[];
  onToggleLanguage: (language: string) => void;
  onTogglePath: (path: string) => void;
  onToggleRepo: (repo: string) => void;
  onClearLanguages: () => void;
  onClearPaths: () => void;
  onClearRepos: () => void;
  onClearAll: () => void;
}

export function FilterPanel({
  languageFacets = [],
  pathFacets = [],
  repoFacets = [],
  selectedLanguages = [],
  selectedPaths = [],
  selectedRepos = [],
  onToggleLanguage,
  onTogglePath,
  onToggleRepo,
  onClearLanguages,
  onClearPaths,
  onClearRepos,
  onClearAll,
}: FilterPanelProps) {
  const [languageFilter, setLanguageFilter] = useState("");
  const [repoFilter, setRepoFilter] = useState("");
  const [pathFilter, setPathFilter] = useState("");

  const filteredLanguages = languageFacets.filter((lang) =>
    lang.val.toLowerCase().includes(languageFilter.toLowerCase())
  );

  const filteredRepos = repoFacets.filter((repo) =>
    repo.val.toLowerCase().includes(repoFilter.toLowerCase())
  );

  const filteredPaths = pathFacets.filter((path) =>
    path.val.toLowerCase().includes(pathFilter.toLowerCase())
  );

  const hasActiveFilters =
    selectedLanguages.length > 0 ||
    selectedPaths.length > 0 ||
    selectedRepos.length > 0;

  return (
    <div className="py-4 px-3">
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="font-medium text-sm tracking-tight text-muted-foreground">
          FILTERS
        </h2>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            className="h-6 text-xs"
            onClick={onClearAll}
          >
            Clear all
          </Button>
        )}
      </div>

      <Accordion
        type="multiple"
        defaultValue={["languages", "repositories", "paths"]}
        className="space-y-2"
      >
        {/* Languages Filter */}
        {languageFacets.length > 0 && (
          <AccordionItem value="languages" className="border-0">
            <AccordionTrigger className="py-2 px-2 text-sm font-medium hover:bg-primary/5 rounded-md">
              <div className="flex justify-between w-full pr-2">
                <span>Language</span>
                {selectedLanguages.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-5 px-1 text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      onClearLanguages();
                    }}
                  >
                    Clear
                  </Button>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-0">
              <div className="space-y-2">
                {/* Active language filters */}
                {selectedLanguages.length > 0 && (
                  <div className="flex flex-wrap gap-1 px-2 mb-2">
                    {selectedLanguages.map((lang) => (
                      <Badge
                        key={lang}
                        variant="outline"
                        className="bg-primary/10 hover:bg-primary/20 border-primary/20 text-foreground"
                      >
                        {lang}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-4 w-4 p-0 ml-1 hover:bg-transparent"
                          onClick={() => onToggleLanguage(lang)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Filter input */}
                <div className="relative px-2">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                  <Input
                    placeholder="Filter languages..."
                    value={languageFilter}
                    onChange={(e) => setLanguageFilter(e.target.value)}
                    className="pl-8 h-8 text-xs bg-muted/50"
                  />
                </div>

                {/* Language options */}
                <div className="max-h-40 overflow-y-auto py-1">
                  {filteredLanguages.map((lang) => (
                    <button
                      key={lang.val}
                      className={`flex justify-between w-full px-3 py-1.5 text-xs hover:bg-muted/50 ${
                        selectedLanguages.includes(lang.val)
                          ? "bg-primary/10"
                          : ""
                      }`}
                      onClick={() => onToggleLanguage(lang.val)}
                    >
                      <span>{lang.val}</span>
                      <span className="text-muted-foreground">
                        {lang.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {/* Repositories Filter */}
        {repoFacets.length > 0 && (
          <AccordionItem value="repositories" className="border-0">
            <AccordionTrigger className="py-2 px-2 text-sm font-medium hover:bg-primary/5 rounded-md">
              <div className="flex justify-between w-full pr-2">
                <span>Repository</span>
                {selectedRepos.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-5 px-1 text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      onClearRepos();
                    }}
                  >
                    Clear
                  </Button>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-0">
              <div className="space-y-2">
                {/* Active repo filters */}
                {selectedRepos.length > 0 && (
                  <div className="flex flex-wrap gap-1 px-2 mb-2">
                    {selectedRepos.map((repo) => (
                      <Badge
                        key={repo}
                        variant="outline"
                        className="bg-primary/10 hover:bg-primary/20 border-primary/20 text-foreground"
                      >
                        {repo}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-4 w-4 p-0 ml-1 hover:bg-transparent"
                          onClick={() => onToggleRepo(repo)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Filter input */}
                <div className="relative px-2">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                  <Input
                    placeholder="Filter repositories..."
                    value={repoFilter}
                    onChange={(e) => setRepoFilter(e.target.value)}
                    className="pl-8 h-8 text-xs bg-muted/50"
                  />
                </div>

                {/* Repository options */}
                <div className="max-h-40 overflow-y-auto py-1">
                  {filteredRepos.map((repo) => (
                    <button
                      key={repo.val}
                      className={`flex justify-between w-full px-3 py-1.5 text-xs hover:bg-muted/50 ${
                        selectedRepos.includes(repo.val) ? "bg-primary/10" : ""
                      }`}
                      onClick={() => onToggleRepo(repo.val)}
                    >
                      <span>{repo.val}</span>
                      <span className="text-muted-foreground">
                        {repo.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {/* Paths Filter */}
        {pathFacets.length > 0 && (
          <AccordionItem value="paths" className="border-0">
            <AccordionTrigger className="py-2 px-2 text-sm font-medium hover:bg-primary/5 rounded-md">
              <div className="flex justify-between w-full pr-2">
                <span>Path</span>
                {selectedPaths.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-5 px-1 text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      onClearPaths();
                    }}
                  >
                    Clear
                  </Button>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-0">
              <div className="space-y-2">
                {/* Active path filters */}
                {selectedPaths.length > 0 && (
                  <div className="flex flex-wrap gap-1 px-2 mb-2">
                    {selectedPaths.map((path) => (
                      <Badge
                        key={path}
                        variant="outline"
                        className="bg-primary/10 hover:bg-primary/20 border-primary/20 text-foreground"
                      >
                        {path}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-4 w-4 p-0 ml-1 hover:bg-transparent"
                          onClick={() => onTogglePath(path)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Filter input */}
                <div className="relative px-2">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                  <Input
                    placeholder="Filter paths..."
                    value={pathFilter}
                    onChange={(e) => setPathFilter(e.target.value)}
                    className="pl-8 h-8 text-xs bg-muted/50"
                  />
                </div>

                {/* Path options */}
                <div className="max-h-40 overflow-y-auto py-1">
                  {filteredPaths.map((path) => (
                    <button
                      key={path.val}
                      className={`flex justify-between w-full px-3 py-1.5 text-xs hover:bg-muted/50 ${
                        selectedPaths.includes(path.val) ? "bg-primary/10" : ""
                      }`}
                      onClick={() => onTogglePath(path.val)}
                    >
                      <span>{path.val}</span>
                      <span className="text-muted-foreground">
                        {path.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>
    </div>
  );
}
