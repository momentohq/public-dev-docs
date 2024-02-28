---
sidebar_position: 1
sidebar_label: Vector Index
title: Getting started with Momento Vector Index in Python
description: Learn the basic building blocks for writing Python code to interact with Momento Vector Index.
keywords:
  - momento
  - cache
  - caching
  - vector index
  - llm
  - large language model
  - vector search
  - redis
  - serverless
  - sdk
  - sdks
  - api
  - python
  - examples
  - resources
  - getting started
  - quick start
  - web
  - browser
---

# Getting Started with Momento Vector Index in Python

If you need to get going quickly with Python and Momento Vector Index, this page contains the basic API calls you'll need.

## Install the Momento SDK

The Momento Python SDK is available on [pypi as `momento`](https://pypi.org/project/momento/).

To install in your Python application via pip, use:

```bash
pip install momento
```

## Set up your API key

You'll need a [Momento API key](/cache/develop/authentication/api-keys) to authenticate with Momento. You can get one, preferably a fine-grained token, from the [Momento Web Console](https://console.gomomento.com/caches).
Once you have a token, store it in an environment variable so that the Momento client can consume it:

```
export MOMENTO_API_KEY=<your Momento token here>
```

**Note**: it is best practice to put the token into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes.

## Import libraries and instantiate a vector index client

This code sets up the class with the necessary imports, the class definition, and the `PreviewVectorIndexClient` instantiation that each of the other functions will need to call.

```python
from momento import (
    CredentialProvider,
    PreviewVectorIndexClient,
    VectorIndexConfigurations,
)

from momento.requests.vector_index import (
    ALL_METADATA,
    Item,
    SimilarityMetric
)
from momento.responses.vector_index import (
    UpsertItemBatch,
    CreateIndex,
    DeleteIndex,
    DeleteItemBatch,
    ListIndexes,
    Search,
)

client = PreviewVectorIndexClient(
    configuration=VectorIndexConfigurations.Default.latest(),
    credential_provider=CredentialProvider.from_environment_variable('MOMENTO_API_KEY')
  )
```

The following examples assume that you have already instantiated a `PreviewVectorIndexClient` as shown above.

## Create a new index in Momento Vector Index

Use this snippet to create a new index in your account. The `similarity_metric` parameter is optional and defaults to `SimilarityMetric.COSINE_SIMILARITY`.

```python
index_name = "my_index"
 # The number of dimensions in your vectors
num_dimensions = 2
similarity_metric = SimilarityMetric.COSINE_SIMILARITY

create_index_response = client.create_index(index_name, num_dimensions, similarity_metric)
if isinstance(create_index_response, CreateIndex.Success):
    print(f"Index with name {index_name!r} successfully created!")
elif isinstance(create_index_response, CreateIndex.IndexAlreadyExists):
    print(f"Index with name {index_name!r} already exists")
elif isinstance(create_index_response, CreateIndex.Error):
    print(f"Error while creating index: {create_index_response.message}")
```

## Get list of existing indexes in your account

In this example, we list the indexes in your account.

```python
list_indexes_response = client.list_indexes()
if isinstance(list_indexes_response, ListIndexes.Success):
    for index in list_indexes_response.index_names:
        print(f"Account has an index with name: {index!r}")
elif isinstance(list_indexes_response, ListIndexes.Error):
    print(f"Error while listing indexes: {list_indexes_response.message}")
```

## Write a batch of items to the index

A simple example of doing an `upsert_item_batch` operation. This operation will insert the items if they don't exist, or replace them if they do.

```python
index_name = "my_index"
items = [
        Item(id="test_item_1", vector=[1.0, 2.0], metadata={"key1": "value1"}),
        Item(id="test_item_2", vector=[3.0, 4.0], metadata={"key2": "value2"}),
        Item(id="test_item_3", vector=[5.0, 6.0], metadata={"key1": "value3", "key3": "value3"}),
]

print(f"Upserting items {items}")
upsert_response = client.upsert_item_batch(
    index_name,
    items=items,
)
if isinstance(upsert_response, UpsertItemBatch.Success):
    print("Successfully upserted items")
elif isinstance(upsert_response, UpsertItemBatch.Error):
    print(f"Error while adding items to index {index_name!r}: {upsert_response.message}")
```

## Searching the index

This is an example of a search operation to get the top-k items from the index matching the `query_vector`. The `metadata_fields` parameter is optional and can be used to specify which metadata fields to return in the response.

Here we use a `query_vector` of `[1.0, 2.0]` and ask for the top 2 results.


```python
index_name = "my_index"
query_vector = [1.0, 2.0]
top_k = 2

print(f"Searching index {index_name} with query_vector {query_vector} and top {top_k} elements")
search_response = client.search(index_name, query_vector=query_vector, top_k=top_k, metadata_fields=ALL_METADATA)
if isinstance(search_response, Search.Success):
    print(f"Search succeeded with {len(search_response.hits)} matches")
elif isinstance(search_response, Search.Error):
    print(f"Error while searching on index {index_name}: {search_response.message}")
```

## Deleting items from the index

An example of deleting the items from an index using `delete_item_batch`.

```python
index_name = "my_index"
item_ids_to_delete = ["test_item_1", "test_item_3"]

delete_response = client.delete_item_batch(index_name, ids=item_ids_to_delete)
if isinstance(delete_response, DeleteItemBatch.Success):
    print("Successfully deleted items")
elif isinstance(delete_response, DeleteItemBatch.Error):
    print(f"Error while deleting items {delete_response.message}")
```

## Deleting an index

An example of deleting an index using `delete_index`.

```python
index_name = "my_index"

delete_response = client.delete_index(index_name)
if isinstance(delete_response, DeleteIndex.Success):
    print("Successfully deleted index")
elif isinstance(delete_response, DeleteIndex.Error):
    print(f"Error while deleting index {delete_response.message}")
```
