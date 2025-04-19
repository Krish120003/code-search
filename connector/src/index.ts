import * as Solr from "solr-client";

// --- Configuration ---
const solrOptions = {
  host: "127.0.0.1", // Solr host IP
  port: 8983, // Solr host port
  core: "mycore", // Solr core name - CHANGE IF YOUR CORE HAS A DIFFERENT NAME
  path: "/solr", // Default Solr path
};

// Create a Solr client instance
const client = Solr.createClient(solrOptions);

// --- Basic Solr Operations ---

/**
 * Adds a single document to the Solr index.
 * @param doc The document to add (must have an 'id' field).
 */
async function addDocument(
  doc: object & { id: string | number }
): Promise<void> {
  try {
    const result = await client.add(doc);
    console.log("Document added:", result);
    await client.commit(); // Commit changes to make them visible
    console.log("Commit successful");
  } catch (error) {
    console.error("Error adding document:", error);
  }
}

/**
 * Adds multiple documents to the Solr index.
 * @param docs An array of documents to add (each must have an 'id' field).
 */
async function addDocuments(
  docs: Array<object & { id: string | number }>
): Promise<void> {
  try {
    const result = await client.add(docs);
    console.log("Documents added:", result);
    await client.commit(); // Commit changes
    console.log("Commit successful");
  } catch (error) {
    console.error("Error adding documents:", error);
  }
}

/**
 * Deletes a document by its ID.
 * @param id The ID of the document to delete.
 */
async function deleteDocumentById(id: string | number): Promise<void> {
  try {
    const result = await client.deleteByID(id);
    console.log("Document deleted by ID:", result);
    await client.commit(); // Commit changes
    console.log("Commit successful");
  } catch (error) {
    console.error("Error deleting document by ID:", error);
  }
}

/**
 * Deletes documents based on a query.
 * @param query The Solr query to select documents for deletion (e.g., 'title:example').
 */
async function deleteDocumentsByQuery(query: string): Promise<void> {
  try {
    const result = await client.deleteByQuery(query);
    console.log("Documents deleted by query:", result);
    await client.commit(); // Commit changes
    console.log("Commit successful");
  } catch (error) {
    console.error("Error deleting documents by query:", error);
  }
}

/**
 * Performs a search query.
 * @param query The Solr search query (e.g., 'description:test').
 */
async function searchDocuments(queryString: string): Promise<any> {
  try {
    const query = client.query().q(queryString); // Basic query
    // Add more query parameters as needed, e.g.:
    // query.start(0).rows(10).fl(['id', 'title']);

    const result = await client.search(query);
    console.log("Search results:", result.response);
    return result.response;
  } catch (error) {
    console.error("Error searching documents:", error);
    return null;
  }
}

// --- Example Usage (Uncomment to run) ---

/*
async function runExamples() {
    // Example 1: Add a single document
    await addDocument({ id: 'doc1', title_s: 'My First Document', description_s: 'This is a test document.' });

    // Example 2: Add multiple documents
    await addDocuments([
        { id: 'doc2', title_s: 'Second Doc', value_i: 100 },
        { id: 'doc3', title_s: 'Third Doc', tags_ss: ['test', 'example'] }
    ]);

    // Example 3: Search for documents
    console.log('\nSearching for "test":');
    await searchDocuments('description_s:test OR tags_ss:test');

    // Example 4: Delete a document by ID
    // await deleteDocumentById('doc1');

    // Example 5: Delete documents by query
    // await deleteDocumentsByQuery('value_i:100');

    // Final search to see remaining docs
    console.log('\nSearching for all documents (*:*):');
    await searchDocuments('*:*');
}

runExamples();
*/

// Export functions for potential use in other modules
export {
  addDocument,
  addDocuments,
  deleteDocumentById,
  deleteDocumentsByQuery,
  searchDocuments,
  client, // Export client if direct access is needed
};
