---
sidebar_position: 1
pagination_prev: null
sidebar_label: API Reference
title: MVI API reference
description: Learn how to interact programmatically with Momento Vector Index API.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Using the Momento Vector Index API
Momento Vector Index (MVI) is a scalable, developer-friendly vector index service designed for real-time storage and retrieval of vector data for use in AI-powered applications.

## Vector Index Client

To interact with Momento Vector Indexes, you must use a VectorIndexClient.

<SdkExampleTabs snippetId={'API_InstantiateVectorClient'} />

## Control APIs

These API methods are used to manage and control indexes.

### Create Index
Creates a vector index.

| Name             | Type   | Description                                                                                                                                            |
|------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| indexName        | String | Name of the vector index.                                                                                                                              |
| numDimensions    | String | Number of dimensions per vector.                                                                                                                       |
| similarityMetric | String | Metric used to quantify the distance between vectors. Can be cosine similarity, inner product, or euclidean similarity. Defaults to cosine similarity. |


<details>
  <summary>Method response object</summary>

* Success
* AlreadyExists
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_CreateIndex'} />

### Delete Index
Deletes a vector index.

| Name      | Type            | Description               |
|-----------| --------------- |---------------------------|
| indexName | String          | Name of the vector index. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_DeleteIndex'} />

### List Indexes
Lists all vector indexes.

<details>
  <summary>Method response object</summary>

* Success
    * getIndexes(): VectorIndexInfo[]
        * VectorIndexInfo:
            * name: String
            * numDimensions: number
            * similarityMetric: String
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_ListIndexes'} />

## Data APIs

These API methods are used to directly interact with data in an index.

### Count Items
Counts the number of items in a vector index.


| Name      | Type            | Description                     |
|-----------|-----------------|---------------------------------|
| indexName | String          | Name of the vector index.       |

<details>
  <summary>Method response object</summary>

* Success
    * itemCount(): number
* Error
    * An index that does not exist will return a NOT_FOUND error code. This is distinct from an index with no items, for which the request will succeed with a count of 0.

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_CountItems'} />

### Upsert Item Batch
Upserts a batch of items into a vector index.


| Name      | Type            | Description                     |
|-----------|-----------------|---------------------------------|
| indexName | String          | Name of the vector index.       |
| items     | VectorIndexItem | Items to upsert into the index. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_UpsertItemBatch'} />

### Search
Searches for items with vectors most similar to a query vector.


| Name           | Type                            | Description                                                                                                                                                              |
|----------------|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| indexName      | String                          | Name of the vector index.                                                                                                                                                |
| queryVector    | number[]                        | Vector to search for.                                                                                                                                                    |
| topK           | number                          | Number of results to return. Defaults to 10.                                                                                                                             |
| metadataFields | String[] or ALL_VECTOR_METADATA | A list of metadata fields to return with each result, or a value indicating all metadata should be returned. If not provided, no metadata is returned. Defaults to None. |
| scoreThreshold | number                          | A score threshold to filter results by. The threshold is exclusive. Defaults to no threshold (all results are returned).                                                 |
| filter         | [VectorFilterExpression](filter-expressions.md)          | A filter expression to filter results by. Defaults to no filter.                                                                                                         |

<details>
  <summary>Method response object</summary>

* Success
    * hits(): SearchHit[]
        * SearchHit: 
            * id: string
            * score: number
            * metadata: Map<string, string>
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_Search'} />

### Search And Fetch Vectors
Searches for items with vectors most similar to a query vector. Also returns corresponding vectors to search hits.


| Name           | Type                            | Description                                                                                                                                                              |
|----------------|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| indexName      | String                          | Name of the vector index.                                                                                                                                                |
| queryVector    | number[]                        | Vector to search for.                                                                                                                                                    |
| topK           | number                          | Number of results to return. Defaults to 10.                                                                                                                             |
| metadataFields | String[] or ALL_VECTOR_METADATA | A list of metadata fields to return with each result, or a value indicating all metadata should be returned. If not provided, no metadata is returned. Defaults to None. |
| scoreThreshold | number                          | A score threshold to filter results by. The threshold is exclusive. Defaults to no threshold (all results are returned).                                                 |
| filter         | [VectorFilterExpression](./filter-expressions.md)          | A filter expression to filter results by. Defaults to no filter.                                                                                                         |

<details>
  <summary>Method response object</summary>

* Success
    * hits(): SearchAndFetchVectorsHit[]
        * SearchAndFetchVectorsHit:
            * id: string
            * score: number
            * metadata: Map<string, string>
            * vector: number[]
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_SearchAndFetchVectors'} />

### Get Item Batch
Gets a batch of items from a vector index.


| Name      | Type     | Description                     |
|-----------|----------|---------------------------------|
| indexName | String   | Name of the vector index.       |
| filter    | String[] | IDs of the items to retrieve.   |

<details>
  <summary>Method response object</summary>

* Success
    * values(): Record<string, VectorIndexItem> - Items for found IDs.
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_GetItemBatch'} />

### Get Item Metadata Batch
Gets a batch of items' metadata from a vector index.

| Name      | Type     | Description                         |
|-----------|----------|-------------------------------------|
| indexName | String   | Name of the vector index.           |
| filter    | String[] | IDs of item metadata to retrieve.   |

<details>
  <summary>Method response object</summary>

* Success
    * values(): Record<string, VectorIndexMetadata> - Metadata for found IDs.
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_GetItemMetadataBatch'} />


### Delete Item Batch
Deletes a batch of items from a vector index.


| Name      | Type     | Description                     |
|-----------|----------|---------------------------------|
| indexName | String   | Name of the vector index.       |
| filter    | [VectorFilterExpression](./filter-expressions.md) \| String[] | A filter to match the items to be deleted or the item IDs to be deleted. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_DeleteItemBatch'} />
