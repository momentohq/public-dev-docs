---
sidebar_position: 1
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

## Vector Index methods

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
    * getIndexNames(): string[]
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_ListIndexes'} />

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
Deletes a batch of items from a vector index.


| Name           | Type                            | Description                                                                                                                                                              |
|----------------|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| indexName      | String                          | Name of the vector index.                                                                                                                                                |
| queryVector    | number[]                        | Vector to search for.                                                                                                                                                    |
| topK           | number                          | Number of results to return. Defaults to 10.                                                                                                                             |
| metadataFields | String[] or ALL_VECTOR_METADATA | A list of metadata fields to return with each result, or a value indicating all metadata should be returned. If not provided, no metadata is returned. Defaults to None. |

<details>
  <summary>Method response object</summary>

* Success
    * hits(): SearchHit[]
        * SearchHit: 
            * id(): string
            * distance(): number
            * metadata(): Map<string, string>
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_Search'} />

### Delete Item Batch
Deletes a batch of items from a vector index.


| Name      | Type     | Description                     |
|-----------|----------|---------------------------------|
| indexName | String   | Name of the vector index.       |
| items     | String[] | IDs of the items to be deleted. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_DeleteItemBatch'} />
