---
sidebar_position: 1
sidebar_label: Cheat Sheet
sidebar_class_name: sidebar-item-nodejs-cheat-sheet
title: Momento Vector Index cheat sheet for TypeScript and Node.js
description: Everything to get you going with coding using Node.js and Momento Vector Index
---

# Cheat Sheet for Node.js with Momento Vector Index

If you need to get going quickly with Node.js and Momento Vector Index, this page contains the basic API calls you'll need.


## Import libraries and instantiate a vector index client

This code sets up the class with the necessary imports, the class definition, and the `PreviewVectorIndexClient` instantiation that each of the other functions will need to call.

```typescript
import {CredentialProvider, PreviewVectorIndexClient, VectorIndexConfigurations} from "@gomomento/sdk";


const client = new PreviewVectorIndexClient({
    configuration: VectorIndexConfigurations.Laptop.latest(),
    credentialProvider: CredentialProvider.fromEnvironmentVariable({
        environmentVariableName: 'MOMENTO_API_KEY',
    }),
});

```

The following examples assume that you have already instantiated a `PreviewVectorIndexClient` as shown above.

## Create a new index in Momento Vector Index

Use this snippet to create a new index in your account. The `similarityMetric` parameter is optional and defaults to `VectorSimilarityMetric.COSINE_SIMILARITY`.

```typescript
const indexName = "my-index";
// The number of dimensions in your vectors
const numDimensions = 2;
const similarityMetric = VectorSimilarityMetric.COSINE_SIMILARITY;

const createResponse = await client.createIndex(indexName, numDimensions, similarityMetric);
if (createResponse instanceof CreateVectorIndex.Success) {
    console.log('Index created successfully!');
} else {
    console.log(`Error creating index: ${createResponse.toString()}`);
}
```

## Get list of existing indexes in your account

In this example, we list the indexes in your account.

```typescript
const listResponse = await client.listIndexes();
if (listResponse instanceof ListVectorIndexes.Success) {
    console.log(listResponse.getIndexNames().join('\n'));
} else {
    console.log(`Error listing indexes: ${listResponse.toString()}`);
}
```

## Write a batch of items to the index

A simple example of doing an `upsertItemBatch` operation. This operation will insert the items if they don't exist, or replace them if they do.

```typescript
const indexName = "my-index";
const upsertResponse = await client.upsertItemBatch(indexName, [
    {
        id: 'example_item_1',
        vector: [1.0, 2.0],
        metadata: {key1: 'value1'},
    },
    {
        id: 'example_item_2',
        vector: [3.0, 4.0],
        metadata: {key2: 'value2'},
    },
]);
if (upsertResponse instanceof VectorUpsertItemBatch.Success) {
    console.log('Successfully upserted items');
} else {
    console.log(`Error adding items: ${upsertResponse.toString()}`);
}
```

## Searching the index

This is an example of a search operation to get the top-k items from the index matching the `queryVector`. The `metadataFields` parameter is optional and can be used to specify which metadata fields to return in the response.

Here we use a `queryVector` of `[1.0, 2.0]` and ask for the top 2 results.


```typescript
const indexName = "my-index";
const queryVector = [1.0, 2.0];
const searchResponse = await client.search(indexName, queryVector, {
    topK: 2,
    metadataFields: ALL_VECTOR_METADATA,
});
if (searchResponse instanceof VectorUpsertItemBatch.Success) {
    console.log(`Search succeeded with ${searchResponse.hits().length} results`);
} else {
    console.log(`Error searching items: ${searchResponse.toString()}`);
}
```

## Deleting items from the index

An example of deleting the items from an index using `deleteItemBatch`.

```typescript
const indexName = "my-index";
const itemsToDelete = [
    'example_item_1',
    'example_item_2',
];

const deleteResponse = await client.deleteItemBatch(indexName, itemsToDelete);
if (deleteResponse instanceof VectorUpsertItemBatch.Success) {
    console.log('Successfully deleted items');
} else {
    console.log(`Error deleting items: ${deleteResponse.toString()}`);
}
```

## Deleting an index

An example of deleting an index using `deleteIndex`.

```typescript
const indexName = "my-index";
const deleteIndexResponse = await client.deleteIndex(indexName);
if (deleteIndexResponse instanceof DeleteVectorIndex.Success) {
    console.log("Index 'test-index' deleted");
} else {
    console.log(`Error deleting index: ${deleteIndexResponse.toString()}`);
}
```
