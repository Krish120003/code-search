# Setting Up Apache Solr with TypeScript: My Journey and Lessons Learned

## Introduction

So, you want to set up Apache Solr with TypeScript? I recently went through this process and thought I'd share my experience, including the pitfalls I encountered and how I overcame them.

Solr is a powerful search platform, but getting it to play nicely with TypeScript can be tricky. This post walks through creating a basic connector that handles common operations like adding documents, searching, and deleting.

## Getting Started with Docker

First things first: use Docker! Trust me, setting up Solr natively can be a headache with various dependencies and configuration files. Docker makes it much simpler.

Here's the `docker-compose.yml` I used:

```yaml
version: "3.8"
services:
  solr:
    image: solr:9
    container_name: solr
    ports:
      - "8983:8983"
    volumes:
      - solr_data:/var/solr
    # command: solr-precreate mycore
    networks:
      - solr_net

volumes:
  solr_data:

networks:
  solr_net:
    driver: bridge
```

A quick `docker-compose up -d` in the terminal, and Solr is up and running! You should be able to access the Solr admin UI at `http://localhost:8983/solr/`.

## The Core Issue (Pun Intended)

**Warning #1**: Solr needs "cores" (or collections) to store your data, and they don't create themselves!

I spent an embarrassing amount of time debugging why my connector couldn't connect to Solr, only to realize that while Solr was running fine, I hadn't created the core it was trying to use.

The error looked something like this:

```
HTTP error 404: <p>
  Searching for Solr?<br/>
  You must type the correct path.<br/>
  Solr will respond.
</p>
```

There are two ways to create a core:

1. Uncomment the `command: solr-precreate mycore` line in your docker-compose.yml and restart the container.
2. Run this command manually: `docker exec -it solr bin/solr create_core -c mycore`

I opted for the second approach during development, but in production, you might want the first option for consistency.

## Building the TypeScript Connector

For our TypeScript connector, I used the `solr-client` package, which provides a nice wrapper around Solr's REST API.

**Warning #2**: Check package versions carefully! I initially tried to use `solr-client@^0.10.0`, but that version doesn't exist. What does exist is `0.10.0-rc10` (a release candidate).

```json
"dependencies": {
  "solr-client": "0.10.0-rc10"
}
```

I'm using pnpm as the package manager here, but npm or yarn would work just as well:

```bash
pnpm install
```

## Type Definitions: Not What You'd Expect

**Warning #3**: TypeScript type definitions in third-party libraries can be spotty.

I hit this error when trying to define a typed configuration object:

```
Namespace 'Solr' has no exported member 'ClientOptions'
```

The solution was simple but not obvious: remove the explicit type annotation and let TypeScript infer it:

```typescript
// Before (error)
const solrOptions: Solr.ClientOptions = { ... };

// After (works)
const solrOptions = { ... };
```

## The Core Functionality

I created functions for the most common operations:

- Adding documents (`addDocument` and `addDocuments`)
- Searching (`searchDocuments`)
- Deleting documents (`deleteDocumentById` and `deleteDocumentsByQuery`)

Here's what using the connector looks like:

```typescript
// Add a document
await addDocument({
  id: "doc1",
  title_s: "Example Document",
  content_t: "This is sample content",
});

// Search for it
const results = await searchDocuments("title_s:Example");
console.log(results.docs);

// Delete it when done
await deleteDocumentById("doc1");
```

**Warning #4**: Notice the field names have suffixes like `_s` or `_t`. These are Solr's dynamic field type indicators (`_s` for string, `_t` for text). Without them, Solr will try to guess the field type, which can lead to unpredictable behavior.

## Testing: Where Reality Hits

I wrote some Jest tests to verify everything worked, and this is where I encountered more interesting issues.

**Warning #5**: Solr operations can have timing issues. Sometimes a document isn't immediately available after you add it, or might still be findable immediately after deletion.

My initial test was expecting to find exactly 3 documents:

```typescript
const results = await searchDocuments(
  `title_s:"Test Document" AND test_run_id_s:${testRunId}`
);
expect(results.numFound).toBe(3); // This would sometimes fail
```

I made the test more resilient by:

1. Using a more general query
2. Using `toBeGreaterThanOrEqual` instead of exact matching

```typescript
const results = await searchDocuments(`test_run_id_s:${testRunId}`);
expect(results.numFound).toBeGreaterThanOrEqual(2);
```

## Advice for Production Use

If I were implementing this in production, I'd make these improvements:

1. **Add better error handling**: The current error handling is basic - log and move on. In production, you'd want to properly propagate errors and perhaps add retries.

2. **Implement connection health checks**: Periodically ping Solr to ensure it's still available, and reconnect if needed.

3. **Add schema management**: The current implementation assumes the schema is already set up. You might want to add functions to create/update schema fields.

4. **Configure authentication**: The setup assumes no authentication, which is fine for development but not for production.

5. **Add automatic core creation**: Check if the core exists when starting up, and create it if needed.

6. **Enhance search capabilities**: Add support for faceting, highlighting, suggestions, etc.

## Conclusion

Setting up Solr with TypeScript has its challenges, but once you understand the quirks, it's a powerful combination. The most important lessons I learned:

1. Make sure your Solr core exists before trying to use it.
2. Be careful with package versions and type definitions.
3. Use dynamic field types in Solr to avoid schema surprises.
4. Account for timing issues in tests and real-world usage.
5. Consider adding more robust features for production use.

I hope this saves you some of the headaches I experienced. Happy searching!
