import {
  addDocument,
  addDocuments,
  searchDocuments,
  deleteDocumentById,
  deleteDocumentsByQuery,
  client, // We might need the client for lower-level checks or pings
} from "./index";

// Unique identifier for documents created during this test run
const testRunId = `test-${Date.now()}`;
const testDocId1 = `${testRunId}-doc1`;
const testDocId2 = `${testRunId}-doc2`;
const testDocId3 = `${testRunId}-doc3`;

describe("Solr Connector", () => {
  // Optional: Check connection before running tests
  beforeAll(async () => {
    try {
      // Simple ping to check if Solr is reachable
      await client.ping();
      console.log("Successfully connected to Solr for testing.");
    } catch (error) {
      console.error(
        "Solr connection failed. Ensure Solr is running and the core exists.",
        error
      );
      // Optionally, throw the error to stop tests if connection fails
      throw new Error("Solr connection failed.");
    }
    // Initial cleanup just in case previous tests failed
    await deleteDocumentsByQuery(`test_run_id_s:${testRunId}`);
  });

  // Cleanup after all tests are done
  afterAll(async () => {
    console.log(`Cleaning up test documents with ID: ${testRunId}`);
    await deleteDocumentsByQuery(`test_run_id_s:${testRunId}`);
    // Add a small delay to allow Solr to process the delete and commit
    await new Promise((resolve) => setTimeout(resolve, 500));
  });

  it("should add a single document", async () => {
    const doc = {
      id: testDocId1,
      title_s: "Test Document 1",
      test_run_id_s: testRunId,
    };
    await addDocument(doc);

    // Verify by searching
    const results = await searchDocuments(`id:${testDocId1}`);
    expect(results).toBeDefined();
    expect(results.numFound).toBe(1);
    expect(results.docs[0].id).toBe(testDocId1);
    expect(results.docs[0].title_s).toBe("Test Document 1");
  });

  it("should add multiple documents", async () => {
    const docs = [
      { id: testDocId2, title_s: "Test Document 2", test_run_id_s: testRunId },
      {
        id: testDocId3,
        title_s: "Test Document 3",
        test_run_id_s: testRunId,
        value_i: 42,
      },
    ];
    await addDocuments(docs);

    // Verify by searching
    const results = await searchDocuments(
      `test_run_id_s:${testRunId} AND (id:${testDocId2} OR id:${testDocId3})`
    );
    expect(results).toBeDefined();
    expect(results.numFound).toBe(2);
  });

  it("should search for documents", async () => {
    // Documents were added in previous tests
    const results = await searchDocuments(`test_run_id_s:${testRunId}`);
    expect(results).toBeDefined();
    // Should find doc1, doc2, doc3 from previous tests
    expect(results.numFound).toBeGreaterThanOrEqual(2);

    const resultsById = await searchDocuments(`id:${testDocId3}`);
    expect(resultsById).toBeDefined();
    expect(resultsById.numFound).toBe(1);
    expect(resultsById.docs[0].value_i).toBe(42);
  });

  it("should delete a document by ID", async () => {
    // Ensure doc1 exists before deleting
    const searchBefore = await searchDocuments(`id:${testDocId1}`);
    expect(searchBefore.numFound).toBe(1);

    await deleteDocumentById(testDocId1);

    // Verify it's deleted
    // Add a small delay before searching to allow commit to propagate
    await new Promise((resolve) => setTimeout(resolve, 500));
    const searchAfter = await searchDocuments(`id:${testDocId1}`);
    expect(searchAfter).toBeDefined();
    expect(searchAfter.numFound).toBe(0);
  });

  it("should delete documents by query", async () => {
    // Docs 2 and 3 should still exist
    const searchBefore = await searchDocuments(`test_run_id_s:${testRunId}`);
    expect(searchBefore.numFound).toBeGreaterThanOrEqual(2);

    // Delete doc 2 and 3 by test run ID
    await deleteDocumentsByQuery(`test_run_id_s:${testRunId}`);

    // Verify they are deleted
    await new Promise((resolve) => setTimeout(resolve, 500));
    const searchAfter = await searchDocuments(`test_run_id_s:${testRunId}`);
    expect(searchAfter).toBeDefined();
    expect(searchAfter.numFound).toBe(0);
  });
});
