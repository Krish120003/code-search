# Code Search Worker

A worker service that processes GitHub repository URLs from a Redis queue and indexes their code into Apache Solr for searching.

## Features

- Listens to a Redis queue for GitHub repository URLs
- Clones repositories and extracts code files
- Processes files and extracts metadata (filepath, language, repo path)
- Indexes code into Solr with appropriate metadata
- Manages job state (pending, processing, completed, failed)
- Batch processing with error handling

## Getting Started

### Prerequisites

- Node.js 18+
- Redis server
- Apache Solr instance

### Installation

1. Install dependencies:

```bash
npm install
# or
pnpm install
```

2. Configure environment variables in `.env` file:

```bash
# Redis Configuration
REDIS_URL=redis://localhost:6379
QUEUE_NAME=repo-ingest-queue
PROCESSING_TIMEOUT_MS=300000

# Solr Configuration
SOLR_HOST=127.0.0.1
SOLR_PORT=8983
SOLR_CORE=code
SOLR_PATH=/solr

# Worker Configuration
POLLING_INTERVAL_MS=5000
CONCURRENT_JOBS=2
```

### Running the Worker

Development mode:

```bash
npm run dev
# or
pnpm dev
```

Production mode:

```bash
npm run build
npm start
# or
pnpm build
pnpm start
```

## Architecture

### Queue Structure

- The worker uses a Redis list as a queue
- New jobs are added to the left side of the list with `LPUSH`
- Jobs are processed from the right side of the list with `RPOP`
- Processing jobs are tracked in a separate Redis hash

### Job Lifecycle

1. Frontend adds a job to the Redis queue
2. Worker polls the queue at regular intervals
3. When a job is found, it's marked as "processing"
4. Worker clones the GitHub repository
5. Files are extracted and processed
6. Files are indexed into Solr
7. Temporary clone is cleaned up
8. Job is marked as "completed" or "failed"

## Metadata Fields

Each indexed document contains the following metadata:

- `id`: Unique document identifier
- `repo_url_s`: Repository URL
- `repo_owner_s`: Repository owner (GitHub username)
- `repo_name_s`: Repository name
- `filepath_s`: File path within repository
- `filename_s`: File name
- `content_t`: File content (indexed for full-text search)
- `language_s`: Programming language
- `created_at_dt`: Processing timestamp
- `size_i`: File size in bytes
- `last_modified_dt`: File last modified timestamp

## Docker Support

This project can be run in Docker using the provided Docker Compose file. Add the worker service to the existing `docker-compose.yml` file:

```yaml
worker:
  build: ./worker
  container_name: codesearch_worker
  depends_on:
    - redis
    - solr
  volumes:
    - worker_tmp:/tmp
  networks:
    - app_net
```

## License

MIT
