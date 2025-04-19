import path from "path";
import { promises as fs } from "fs";
import * as os from "os";
import * as crypto from "crypto";
import simpleGit from "simple-git";
import { RepoMetadata, CodeFile } from "../types";

// Detect language from file extension
function detectLanguage(filePath: string): string {
  const extension = path.extname(filePath).toLowerCase();
  const extensionMap: Record<string, string> = {
    ".js": "javascript",
    ".jsx": "javascript",
    ".ts": "typescript",
    ".tsx": "typescript",
    ".py": "python",
    ".java": "java",
    ".c": "c",
    ".cpp": "cpp",
    ".cc": "cpp",
    ".h": "c",
    ".hpp": "cpp",
    ".rb": "ruby",
    ".go": "go",
    ".rs": "rust",
    ".php": "php",
    ".cs": "csharp",
    ".swift": "swift",
    ".kt": "kotlin",
    ".sh": "shell",
    ".bash": "shell",
    ".html": "html",
    ".css": "css",
    ".scss": "scss",
    ".json": "json",
    ".md": "markdown",
    ".yml": "yaml",
    ".yaml": "yaml",
    ".xml": "xml",
    ".sol": "solidity",
  };

  return extensionMap[extension] || "unknown";
}

// Parse GitHub URL to extract owner and repo name
function parseGitHubUrl(url: string): { owner: string; name: string } {
  const githubRegex = /github\.com\/([^\/]+)\/([^\/]+)/;
  const match = url.match(githubRegex);

  if (!match) {
    throw new Error(`Invalid GitHub URL: ${url}`);
  }

  return {
    owner: match[1],
    name: match[2],
  };
}

// Create a temporary directory for cloning
async function createTempDir(): Promise<string> {
  const tempDir = path.join(
    os.tmpdir(),
    `code-search-${crypto.randomBytes(8).toString("hex")}`
  );
  await fs.mkdir(tempDir, { recursive: true });
  return tempDir;
}

// Clone a GitHub repository
export async function cloneRepository(url: string): Promise<RepoMetadata> {
  try {
    const { owner, name } = parseGitHubUrl(url);
    const clonePath = await createTempDir();

    console.log(`Cloning repository ${url} to ${clonePath}...`);

    const git = simpleGit();
    await git.clone(url, clonePath);

    console.log(`Repository ${url} cloned successfully`);

    return { url, owner, name, clonePath };
  } catch (error) {
    console.error("Error cloning repository:", error);
    throw error;
  }
}

// Generate file paths to ignore
function getIgnorePatterns(): string[] {
  return [
    ".git",
    "node_modules",
    "dist",
    "build",
    ".next",
    "coverage",
    ".DS_Store",
    ".idea",
    ".vscode",
    "venv",
    "__pycache__",
  ];
}

// Recursively scan a directory for files
async function scanDirectory(
  dirPath: string,
  basePath: string = dirPath,
  ignorePatterns: string[] = getIgnorePatterns()
): Promise<string[]> {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relativePath = path.relative(basePath, fullPath);

    // Skip ignored patterns
    if (
      ignorePatterns.some(
        (pattern) =>
          relativePath === pattern || relativePath.startsWith(`${pattern}/`)
      )
    ) {
      continue;
    }

    if (entry.isDirectory()) {
      const subDirFiles = await scanDirectory(
        fullPath,
        basePath,
        ignorePatterns
      );
      files.push(...subDirFiles);
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

// Process a repository and extract code files
export async function processRepository(
  repoMetadata: RepoMetadata
): Promise<CodeFile[]> {
  try {
    console.log(`Processing repository ${repoMetadata.url}...`);

    const { clonePath, url, owner, name } = repoMetadata;
    const filePaths = await scanDirectory(clonePath);
    const codeFiles: CodeFile[] = [];

    for (const filePath of filePaths) {
      try {
        // Skip binary files and very large files
        const stats = await fs.stat(filePath);
        if (stats.size > 1024 * 1024) {
          // Skip files larger than 1MB
          console.log(`Skipping large file: ${filePath}`);
          continue;
        }

        // Read file contents
        const content = await fs.readFile(filePath, "utf-8");
        const relativePath = path.relative(clonePath, filePath);
        const language = detectLanguage(filePath);

        // Create a unique ID for the file
        const id = crypto
          .createHash("md5")
          .update(`${url}:${relativePath}`)
          .digest("hex");

        codeFiles.push({
          id,
          repoUrl: url,
          repoOwner: owner,
          repoName: name,
          filepath: relativePath,
          filename: path.basename(filePath),
          content,
          language,
          createdAt: new Date().toISOString(),
          size: stats.size,
          lastModified: stats.mtime.toISOString(),
        });
      } catch (error) {
        console.error(`Error processing file ${filePath}:`, error);
        // Continue with next file
      }
    }

    console.log(`Processed ${codeFiles.length} files from repository ${url}`);
    return codeFiles;
  } catch (error) {
    console.error("Error processing repository:", error);
    throw error;
  }
}

// Cleanup after processing
export async function cleanupRepository(
  repoMetadata: RepoMetadata
): Promise<void> {
  try {
    console.log(`Cleaning up repository ${repoMetadata.url}...`);
    await fs.rm(repoMetadata.clonePath, { recursive: true, force: true });
    console.log(`Repository ${repoMetadata.url} cleaned up successfully`);
  } catch (error) {
    console.error("Error cleaning up repository:", error);
    // Don't throw here, just log the error
  }
}
