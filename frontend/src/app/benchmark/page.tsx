"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2, ArrowLeft } from "lucide-react";

// Sample queries to benchmark
const sampleQueries = [
  { name: "Simple keyword", query: "function" },
  { name: "Complex expression", query: "async function searchFiles" },
  { name: "Rare term", query: "benchmark" },
  { name: "Common symbol", query: "=" },
  { name: "Long string", query: "return new Promise" },

  // C-style language queries
  { name: "C include", query: "#include" },
  { name: "C malloc", query: "malloc" },
  { name: "C struct", query: "struct" },

  // Python queries
  { name: "Python function", query: "def " },
  { name: "Python import", query: "import " },

  // Rust query
  { name: "Rust function", query: "fn " },
];

// Number of iterations for each query
const NUM_ITERATIONS = 100;

// Types for benchmark results
interface BenchmarkResult {
  queryName: string;
  query: string;
  p50: number;
  p90: number;
  p99: number;
  min: number;
  max: number;
  avg: number;
  resultCount: number;
  iterations: number;
}

interface RawQueryResult {
  queryName: string;
  query: string;
  durations: number[];
  resultCount: number;
}

export default function BenchmarkPage() {
  const router = useRouter();
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<BenchmarkResult[]>([]);
  const [activeTab, setActiveTab] = useState<string>("results");
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState({ current: 0, total: 0 });

  // Function to run a single benchmark query one time
  const runSingleQueryOnce = async (
    queryName: string,
    queryString: string
  ): Promise<{ durationMs: number; resultCount: number }> => {
    const startTime = performance.now();

    try {
      // Make the API request
      const response = await fetch("/api/search-benchmark", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: queryString,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      const endTime = performance.now();

      return {
        durationMs: Math.round(endTime - startTime),
        resultCount: typeof data.count === "number" ? data.count : 0,
      };
    } catch (error) {
      console.error("Error in benchmark:", error);
      throw error;
    }
  };

  // Calculate percentiles from an array of durations
  const calculatePercentile = (
    values: number[],
    percentile: number
  ): number => {
    if (values.length === 0) return 0;

    // Sort values in ascending order
    const sorted = [...values].sort((a, b) => a - b);

    // Calculate the index position for the percentile
    const index = Math.ceil((percentile / 100) * sorted.length) - 1;

    // Return the value at that position, with a safe check
    return sorted[Math.max(0, index)] ?? 0;
  };

  // Process raw results into metrics including percentiles
  const processResults = (rawResults: RawQueryResult[]): BenchmarkResult[] => {
    return rawResults.map((result) => {
      const { queryName, query, durations, resultCount } = result;

      // Calculate statistics
      const p50 = calculatePercentile(durations, 50);
      const p90 = calculatePercentile(durations, 90);
      const p99 = calculatePercentile(durations, 99);
      const min = durations.length > 0 ? Math.min(...durations) : 0;
      const max = durations.length > 0 ? Math.max(...durations) : 0;
      const avg =
        durations.length > 0
          ? Math.round(
              durations.reduce((sum, val) => sum + val, 0) / durations.length
            )
          : 0;

      return {
        queryName,
        query,
        p50,
        p90,
        p99,
        min,
        max,
        avg,
        resultCount,
        iterations: durations.length,
      };
    });
  };

  // Function to run the benchmark
  const runBenchmark = async () => {
    setIsRunning(true);
    setResults([]);
    setError(null);
    setProgress({ current: 0, total: sampleQueries.length * NUM_ITERATIONS });

    try {
      // Initialize raw results container
      const rawResults: RawQueryResult[] = sampleQueries.map((query) => ({
        queryName: query.name,
        query: query.query,
        durations: [],
        resultCount: 0,
      }));

      // Run batches of iterations
      for (let i = 0; i < NUM_ITERATIONS; i++) {
        // Run all queries in parallel for this iteration
        const batchPromises = sampleQueries.map(async (query, queryIndex) => {
          try {
            const result = await runSingleQueryOnce(query.name, query.query);

            // Ensure the array index exists before accessing
            if (rawResults[queryIndex]) {
              // Update the raw results
              rawResults[queryIndex].durations.push(result.durationMs);

              // Set the result count if not already set
              if (rawResults[queryIndex].resultCount === 0) {
                rawResults[queryIndex].resultCount = result.resultCount;
              }
            }

            // Update progress
            setProgress((prev) => ({
              current: prev.current + 1,
              total: prev.total,
            }));

            // Update the results with the current data after each batch
            // to show progress to the user
            if (i % 10 === 0 || i === NUM_ITERATIONS - 1) {
              setResults(processResults(rawResults));
            }
          } catch (error) {
            console.error(`Error running query "${query.name}":`, error);
          }
        });

        // Wait for all queries in this batch to complete
        await Promise.all(batchPromises);
      }

      // Final processing of results
      setResults(processResults(rawResults));
    } catch (error) {
      console.error("Error running benchmarks:", error);
      setError(
        error instanceof Error ? error.message : "Unknown error occurred"
      );
    } finally {
      setIsRunning(false);
    }
  };

  // Calculate completion percentage
  const completionPercentage =
    progress.total > 0
      ? Math.round((progress.current / progress.total) * 100)
      : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push("/")}
          className="mr-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Search
        </Button>
        <h1 className="text-2xl font-bold">Search Performance Benchmark</h1>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Run Benchmarks</CardTitle>
          <CardDescription>
            Test the performance of search queries with {NUM_ITERATIONS}{" "}
            iterations per query.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <p className="text-sm text-muted-foreground">
              Click the button below to run {sampleQueries.length} different
              search queries {NUM_ITERATIONS} times each. Results will display
              percentile metrics (p50, p90, p99) for query performance.
            </p>
            <div>
              <Button
                onClick={runBenchmark}
                disabled={isRunning}
                className="w-full sm:w-auto"
              >
                {isRunning && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isRunning ? "Running Benchmarks..." : "Run Benchmarks"}
              </Button>
            </div>

            {isRunning && (
              <div className="mt-4">
                <div className="text-sm mb-1">
                  Progress: {progress.current} of {progress.total} (
                  {completionPercentage}%)
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${completionPercentage}%` }}
                  ></div>
                </div>
              </div>
            )}

            {error && (
              <div className="p-3 text-sm text-white bg-red-500 rounded-md mt-2">
                Error: {error}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="mb-4">
        <div className="border-b">
          <div className="flex">
            <button
              className={`px-4 py-2 ${
                activeTab === "results"
                  ? "border-b-2 border-primary font-medium"
                  : ""
              }`}
              onClick={() => setActiveTab("results")}
            >
              Results
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "queries"
                  ? "border-b-2 border-primary font-medium"
                  : ""
              }`}
              onClick={() => setActiveTab("queries")}
            >
              Test Queries
            </button>
          </div>
        </div>
      </div>

      {activeTab === "results" && (
        <Card>
          <CardHeader>
            <CardTitle>Benchmark Results</CardTitle>
            <CardDescription>
              Performance metrics for search queries across {NUM_ITERATIONS}{" "}
              iterations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>
                {results.length > 0
                  ? `Search performance benchmark results (${NUM_ITERATIONS} iterations per query).`
                  : "Run the benchmark to see results."}
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Query Type</TableHead>
                  <TableHead>p50 (ms)</TableHead>
                  <TableHead>p90 (ms)</TableHead>
                  <TableHead>p99 (ms)</TableHead>
                  <TableHead>Min (ms)</TableHead>
                  <TableHead>Max (ms)</TableHead>
                  <TableHead>Avg (ms)</TableHead>
                  <TableHead className="text-right">Results</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.length > 0 ? (
                  results.map((result, index) => (
                    <TableRow key={index}>
                      <TableCell>{result.queryName}</TableCell>
                      <TableCell>{result.p50}</TableCell>
                      <TableCell>{result.p90}</TableCell>
                      <TableCell>{result.p99}</TableCell>
                      <TableCell>{result.min}</TableCell>
                      <TableCell>{result.max}</TableCell>
                      <TableCell>{result.avg}</TableCell>
                      <TableCell className="text-right">
                        {result.resultCount}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center">
                      {isRunning
                        ? "Running benchmarks..."
                        : "No results yet. Run the benchmark to see data."}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {activeTab === "queries" && (
        <Card>
          <CardHeader>
            <CardTitle>Test Queries</CardTitle>
            <CardDescription>
              Sample queries used in the benchmark.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Query String</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleQueries.map((query, index) => (
                  <TableRow key={index}>
                    <TableCell>{query.name}</TableCell>
                    <TableCell className="font-mono">{query.query}</TableCell>
                    <TableCell>{getQueryDescription(query.name)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Helper function to get descriptions for query types
function getQueryDescription(queryName: string): string {
  switch (queryName) {
    case "Simple keyword":
      return "A common programming keyword that should appear frequently.";
    case "Complex expression":
      return "A specific function signature that's less common.";
    case "Rare term":
      return "A term that appears infrequently in the codebase.";
    case "Common symbol":
      return "A ubiquitous programming symbol that appears very frequently.";
    case "Long string":
      return "A longer phrase that requires matching multiple terms.";

    // C-style language query descriptions
    case "C include":
      return "Preprocessor directive commonly found in C/C++ files.";
    case "C malloc":
      return "Memory allocation function in C.";
    case "C struct":
      return "Data structure definition keyword in C-style languages.";

    // Python query descriptions
    case "Python function":
      return "Function definition keyword in Python.";
    case "Python import":
      return "Module import statement in Python.";

    // Rust query description
    case "Rust function":
      return "Function definition keyword in Rust.";

    default:
      return "";
  }
}
