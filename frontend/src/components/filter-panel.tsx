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

// Example filter data
const languages = [
  { name: "JavaScript", count: 120 },
  { name: "TypeScript", count: 95 },
  { name: "Python", count: 67 },
  { name: "Java", count: 42 },
  { name: "C++", count: 31 },
];

const repositories = [
  { name: "react/react", count: 183 },
  { name: "tensorflow/tensorflow", count: 142 },
  { name: "kubernetes/kubernetes", count: 89 },
  { name: "angular/angular", count: 76 },
  { name: "flutter/flutter", count: 54 },
];

const paths = [
  { name: "src/", count: 320 },
  { name: "lib/", count: 215 },
  { name: "dist/", count: 116 },
  { name: "components/", count: 78 },
  { name: "utils/", count: 64 },
];

export function FilterPanel() {
  const [activeFilters, setActiveFilters] = useState<{
    languages: string[];
    repositories: string[];
    paths: string[];
  }>({
    languages: [],
    repositories: [],
    paths: [],
  });

  const [languageFilter, setLanguageFilter] = useState("");
  const [repoFilter, setRepoFilter] = useState("");
  const [pathFilter, setPathFilter] = useState("");

  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(languageFilter.toLowerCase())
  );

  const filteredRepos = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(repoFilter.toLowerCase())
  );

  const filteredPaths = paths.filter((path) =>
    path.name.toLowerCase().includes(pathFilter.toLowerCase())
  );

  const toggleFilter = (
    type: "languages" | "repositories" | "paths",
    value: string
  ) => {
    setActiveFilters((prev) => {
      const currentFilters = [...prev[type]];
      const index = currentFilters.indexOf(value);

      if (index >= 0) {
        currentFilters.splice(index, 1);
      } else {
        currentFilters.push(value);
      }

      return {
        ...prev,
        [type]: currentFilters,
      };
    });
  };

  const clearFilters = (type: "languages" | "repositories" | "paths") => {
    setActiveFilters((prev) => ({
      ...prev,
      [type]: [],
    }));
  };

  return (
    <div className="py-4 px-3">
      <h2 className="font-medium text-sm tracking-tight mb-4 text-muted-foreground px-2">
        FILTERS
      </h2>

      <Accordion
        type="multiple"
        defaultValue={["languages", "repositories", "paths"]}
        className="space-y-2"
      >
        {/* Languages Filter */}
        <AccordionItem value="languages" className="border-0">
          <AccordionTrigger className="py-2 px-2 text-sm font-medium hover:bg-primary/5 rounded-md">
            <div className="flex justify-between w-full pr-2">
              <span>Language</span>
              {activeFilters.languages.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-5 px-1 text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    clearFilters("languages");
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
              {activeFilters.languages.length > 0 && (
                <div className="flex flex-wrap gap-1 px-2 mb-2">
                  {activeFilters.languages.map((lang) => (
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
                        onClick={() => toggleFilter("languages", lang)}
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
                    key={lang.name}
                    className={`flex justify-between w-full px-3 py-1.5 text-xs hover:bg-muted/50 ${
                      activeFilters.languages.includes(lang.name)
                        ? "bg-primary/10"
                        : ""
                    }`}
                    onClick={() => toggleFilter("languages", lang.name)}
                  >
                    <span>{lang.name}</span>
                    <span className="text-muted-foreground">{lang.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Repositories Filter */}
        <AccordionItem value="repositories" className="border-0">
          <AccordionTrigger className="py-2 px-2 text-sm font-medium hover:bg-primary/5 rounded-md">
            <div className="flex justify-between w-full pr-2">
              <span>Repository</span>
              {activeFilters.repositories.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-5 px-1 text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    clearFilters("repositories");
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
              {activeFilters.repositories.length > 0 && (
                <div className="flex flex-wrap gap-1 px-2 mb-2">
                  {activeFilters.repositories.map((repo) => (
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
                        onClick={() => toggleFilter("repositories", repo)}
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
                    key={repo.name}
                    className={`flex justify-between w-full px-3 py-1.5 text-xs hover:bg-muted/50 ${
                      activeFilters.repositories.includes(repo.name)
                        ? "bg-primary/10"
                        : ""
                    }`}
                    onClick={() => toggleFilter("repositories", repo.name)}
                  >
                    <span>{repo.name}</span>
                    <span className="text-muted-foreground">{repo.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Paths Filter */}
        <AccordionItem value="paths" className="border-0">
          <AccordionTrigger className="py-2 px-2 text-sm font-medium hover:bg-primary/5 rounded-md">
            <div className="flex justify-between w-full pr-2">
              <span>Path</span>
              {activeFilters.paths.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-5 px-1 text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    clearFilters("paths");
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
              {activeFilters.paths.length > 0 && (
                <div className="flex flex-wrap gap-1 px-2 mb-2">
                  {activeFilters.paths.map((path) => (
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
                        onClick={() => toggleFilter("paths", path)}
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
                    key={path.name}
                    className={`flex justify-between w-full px-3 py-1.5 text-xs hover:bg-muted/50 ${
                      activeFilters.paths.includes(path.name)
                        ? "bg-primary/10"
                        : ""
                    }`}
                    onClick={() => toggleFilter("paths", path.name)}
                  >
                    <span>{path.name}</span>
                    <span className="text-muted-foreground">{path.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
