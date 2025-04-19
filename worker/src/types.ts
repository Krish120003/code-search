// Job related types
export interface Job {
  url: string;
  createdAt: string;
  status: JobStatus;
  processingStartedAt?: string;
  processingEndedAt?: string;
  error?: string;
  processingId?: string;
}

export type JobStatus = "pending" | "processing" | "completed" | "failed";

// Git repo related types
export interface RepoMetadata {
  url: string;
  owner: string;
  name: string;
  clonePath: string;
}

// File related types
export interface CodeFile {
  id: string;
  repoUrl: string;
  repoOwner: string;
  repoName: string;
  filepath: string;
  filename: string;
  content: string;
  language: string;
  createdAt: string;
  size: number;
  lastModified: string;
}
