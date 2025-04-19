import path from "path";
import { promises as fs } from "fs";
import * as os from "os";
import * as crypto from "crypto";
import simpleGit from "simple-git";
import { RepoMetadata, CodeFile } from "../types";

/**
 * Detect programming or markup language based on file extension.
 */
export function detectLanguage(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  const extensionMap: Record<string, string> = {
    // JavaScript & derivatives
    ".js": "javascript",
    ".mjs": "javascript",
    ".cjs": "javascript",
    ".jsx": "javascript",
    ".ts": "typescript",
    ".tsx": "typescript",
    ".d.ts": "typescript",

    // Web templates & markup
    ".html": "html",
    ".htm": "html",
    ".xhtml": "html",
    ".pug": "pug",
    ".jade": "jade",
    ".ejs": "ejs",
    ".hbs": "handlebars",
    ".mustache": "mustache",
    ".twig": "twig",
    ".njk": "nunjucks",
    ".md": "markdown",
    ".mdx": "mdx",
    ".markdown": "markdown",
    ".rst": "restructuredtext",
    ".adoc": "asciidoc",

    // Stylesheets
    ".css": "css",
    ".scss": "scss",
    ".sass": "sass",
    ".less": "less",
    ".styl": "stylus",
    ".pcss": "postcss",

    // JSON & data formats
    ".json": "json",
    ".json5": "json5",
    ".jsonc": "jsonc",
    ".yaml": "yaml",
    ".yml": "yaml",
    ".toml": "toml",
    ".ini": "ini",
    ".cfg": "ini",
    ".properties": "properties",
    ".csv": "csv",
    ".tsv": "tsv",
    ".xml": "xml",
    ".xsd": "xml",
    ".wsdl": "xml",
    ".plist": "plist",
    ".lock": "lockfile",

    // Shell & scripting
    ".sh": "shell",
    ".bash": "shell",
    ".zsh": "shell",
    ".ksh": "shell",
    ".csh": "shell",
    ".fish": "shell",
    ".ps1": "powershell",
    ".psm1": "powershell",
    ".psd1": "powershell",
    ".cmd": "batch",
    ".bat": "batch",

    // Python & notebooks
    ".py": "python",
    ".pyw": "python",
    ".ipynb": "jupyter-notebook",
    ".rpy": "renpy",

    // Java & JVM languages
    ".java": "java",
    ".class": "java-bytecode",
    ".jar": "java-archive",
    ".groovy": "groovy",
    ".kt": "kotlin",
    ".kts": "kotlin-script",
    ".scala": "scala",
    ".sc": "scala",

    // C-family
    ".c": "c",
    ".h": "c-header",
    ".cpp": "cpp",
    ".cc": "cpp",
    ".cxx": "cpp",
    ".hpp": "cpp-header",
    ".hxx": "cpp-header",
    ".m": "objective-c",
    ".mm": "objective-c++",

    // Go & Rust
    ".go": "go",
    ".rs": "rust",

    // PHP & templating
    ".php": "php",
    ".phtml": "php",
    ".php3": "php",
    ".php4": "php",
    ".php5": "php",
    ".phps": "php",
    ".ctp": "cakephp",
    ".inc": "php",

    // Ruby & related
    ".rb": "ruby",
    ".erb": "erb",
    ".rake": "rake",
    ".gemspec": "ruby-gemspec",
    ".ru": "rack",

    // .NET & C#
    ".cs": "csharp",
    ".vb": "vbnet",
    ".vbs": "vbscript",
    ".fs": "fsharp",

    // Functional languages
    ".hs": "haskell",
    ".lhs": "haskell",
    ".ml": "ocaml",
    ".mli": "ocaml-interface",
    ".elm": "elm",
    ".ex": "elixir",
    ".exs": "elixir",
    ".erl": "erlang",
    ".hrl": "erlang",

    // Dart & Flutter
    ".dart": "dart",

    // Swift
    ".swift": "swift",
    ".playground": "swift-playground",

    // SQL & databases
    ".sql": "sql",
    ".psql": "sql",
    ".ddl": "sql",
    ".dml": "sql",

    // Docker & container
    ".dockerfile": "dockerfile",
    ".dockerignore": "dockerignore",
    ".env": "dotenv",

    // Protocol / schema
    ".proto": "protobuf",
    ".avdl": "avro-idl",
    ".thrift": "thrift",
    ".graphql": "graphql",
    ".gql": "graphql",

    // Hardware description
    ".v": "verilog",
    ".vh": "verilog",
    ".sv": "systemverilog",
    ".vhd": "vhdl",
    ".vhdl": "vhdl",

    // Infrastructure

    ".tf": "terraform",
    ".tfvars": "terraform",
    ".tfstate": "terraform",
    ".tfstate.json": "terraform",
    ".tfvars.json": "terraform",

    // Esoteric languages
    ".bf": "brainfuck",
    ".bfi": "brainfuck",
    ".bef": "befunge",
    ".befunge": "befunge",
    ".mal": "malbolge",
    ".ws": "whitespace",
    ".ook": "ook",

    // Miscellaneous & esoteric
    ".cob": "cobol",
    ".cbl": "cobol",
    ".cl": "lisp",
    ".lisp": "lisp",
    ".scm": "scheme",
    ".ss": "scheme",
    ".rkt": "racket",
    ".jl": "julia",
    ".r": "r",
    ".coffee": "coffeescript",
    ".nim": "nim",
    ".vala": "vala",
    ".vapi": "vala",
    ".f": "fortran",
    ".for": "fortran",
    ".f90": "fortran90",
    ".f95": "fortran95",
    ".e": "eiffel",
    ".exl": "excel",

    // Assets & binaries
    ".bmp": "image",
    ".gif": "image",
    ".ico": "image",
    ".jpeg": "image",
    ".jpg": "image",
    ".png": "image",
    ".svg": "image",
    ".tiff": "image",
    ".webp": "image",
    ".pdf": "pdf",
    ".zip": "archive",
    ".tar": "archive",
    ".gz": "archive",
    ".rar": "archive",
    ".7z": "archive",
  };

  return extensionMap[ext] || "unknown";
}

// Check if a file is likely a binary file
async function isBinaryFile(filePath: string): Promise<boolean> {
  try {
    // Common binary file extensions
    const binaryExtensions = [
      // Images
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".bmp",
      ".tiff",
      ".webp",
      ".ico",
      ".svg",
      // Audio/Video
      ".mp3",
      ".mp4",
      ".wav",
      ".avi",
      ".mov",
      ".mkv",
      ".flac",
      ".ogg",
      // Archives
      ".zip",
      ".tar",
      ".gz",
      ".rar",
      ".7z",
      ".bz2",
      // Executables and binaries
      ".exe",
      ".dll",
      ".so",
      ".dylib",
      ".bin",
      ".dat",
      // Documents
      ".pdf",
      ".doc",
      ".docx",
      ".xls",
      ".xlsx",
      ".ppt",
      ".pptx",
      // Other
      ".ttf",
      ".otf",
      ".woff",
      ".woff2",
      ".eot",
    ];

    const extension = path.extname(filePath).toLowerCase();
    if (binaryExtensions.includes(extension)) {
      return true;
    }

    // For other files, test by reading a small chunk and checking for null bytes
    // which are common in binary files
    const fileHandle = await fs.open(filePath, "r");
    const buffer = Buffer.alloc(512); // Read first 512 bytes

    try {
      const { bytesRead } = await fileHandle.read(buffer, 0, buffer.length, 0);

      if (bytesRead === 0) {
        return false; // Empty file
      }

      // Check for null bytes and high ASCII characters, common in binary files
      for (let i = 0; i < bytesRead; i++) {
        const byte = buffer[i];
        // Null bytes or non-ASCII characters are good indicators of binary content
        if (byte === 0 || (byte > 127 && byte < 160)) {
          return true;
        }
      }

      return false;
    } finally {
      await fileHandle.close();
    }
  } catch (error) {
    console.error(`Error checking binary status for ${filePath}:`, error);
    return true; // Assume binary if we can't tell for sure
  }
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
    // Use --depth=1 for a shallow clone (faster and takes less space)
    console.log("Using shallow clone (depth=1) for faster processing");
    await git.clone(url, clonePath, ["--depth=1"]);

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

// Group files by directory
function groupFilesByDirectory(
  files: string[],
  basePath: string
): Record<string, string[]> {
  const grouped: Record<string, string[]> = {};

  for (const file of files) {
    const relativePath = path.relative(basePath, file);
    const dirName = path.dirname(relativePath);

    if (!grouped[dirName]) {
      grouped[dirName] = [];
    }

    grouped[dirName].push(file);
  }

  return grouped;
}

// Print file directories with counts
function logFilesByDirectory(groupedFiles: Record<string, string[]>): void {
  console.log("\n--- Files by Directory ---");

  // Get directories sorted by file count (descending)
  const sortedDirs = Object.keys(groupedFiles).sort(
    (a, b) => groupedFiles[b].length - groupedFiles[a].length
  );

  for (const dir of sortedDirs) {
    const fileCount = groupedFiles[dir].length;
    const dirDisplay = dir === "." ? "[Root]" : dir;
    console.log(`${dirDisplay}: ${fileCount} files`);
  }

  console.log("------------------------\n");
}

// Process a repository and extract code files
export async function processRepository(
  repoMetadata: RepoMetadata
): Promise<CodeFile[]> {
  try {
    console.log(`Processing repository ${repoMetadata.url}...`);

    const { clonePath, url, owner, name } = repoMetadata;
    const filePaths = await scanDirectory(clonePath);

    // Log files by directory
    const groupedFiles = groupFilesByDirectory(filePaths, clonePath);
    logFilesByDirectory(groupedFiles);

    console.log(`Found ${filePaths.length} total files, processing...`);

    const codeFiles: CodeFile[] = [];
    const skippedBinaryFiles: string[] = [];
    const skippedLargeFiles: string[] = [];
    const processedExtensions: Set<string> = new Set();

    for (const filePath of filePaths) {
      try {
        // Get stats for file size
        const stats = await fs.stat(filePath);
        const relativePath = path.relative(clonePath, filePath);
        const extension = path.extname(filePath).toLowerCase();

        // Track extensions we're processing
        processedExtensions.add(extension);

        // Check if file is too large (skip files larger than 1MB)
        if (stats.size > 1024 * 1024) {
          skippedLargeFiles.push(relativePath);
          continue;
        }

        // Check if file is binary
        if (await isBinaryFile(filePath)) {
          skippedBinaryFiles.push(relativePath);
          continue;
        }

        // Read file contents
        const content = await fs.readFile(filePath, "utf-8");
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

    // Log summary of processing
    console.log(`\n--- Processing Summary ---`);
    console.log(`Total files found: ${filePaths.length}`);
    console.log(`Processed code files: ${codeFiles.length}`);
    console.log(`Skipped binary files: ${skippedBinaryFiles.length}`);
    console.log(`Skipped large files: ${skippedLargeFiles.length}`);

    // Log extensions processed
    console.log(
      `\nFile extensions processed: ${Array.from(processedExtensions)
        .sort()
        .join(", ")}`
    );

    // Log some examples of skipped binary files
    if (skippedBinaryFiles.length > 0) {
      console.log(`\nExample binary files skipped:`);
      skippedBinaryFiles
        .slice(0, 5)
        .forEach((file) => console.log(`- ${file}`));
      if (skippedBinaryFiles.length > 5) {
        console.log(`... and ${skippedBinaryFiles.length - 5} more`);
      }
    }

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
