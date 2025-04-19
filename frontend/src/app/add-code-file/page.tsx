"use client";

import { useState } from "react";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddCodeFilePage() {
  const router = useRouter();
  const [filename, setFilename] = useState("");
  const [content, setContent] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addCodeFile = api.codeFiles.add.useMutation({
    onSuccess: () => {
      setIsSubmitting(false);
      router.push("/search");
    },
    onError: (error) => {
      setIsSubmitting(false);
      console.error("Error adding code file:", error);
      alert("Failed to add code file. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    addCodeFile.mutate({ filename, content, language });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Add Code File</h1>
        <Link
          href="/search"
          className="rounded bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300"
        >
          Go to Search
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="filename"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Filename
          </label>
          <input
            id="filename"
            type="text"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2"
            required
            placeholder="e.g., example.js"
          />
        </div>
        <div>
          <label
            htmlFor="language"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Language
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2"
            required
          >
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="go">Go</option>
            <option value="rust">Rust</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="csharp">C#</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="content"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="h-64 w-full rounded-md border border-gray-300 p-2 font-mono"
            required
            placeholder="Paste your code here..."
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-blue-400"
        >
          {isSubmitting ? "Adding..." : "Add Code File"}
        </button>
      </form>
    </div>
  );
}
