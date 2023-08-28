---
sidebar_position: 1
sidebar_label: Momento Vector Index
sidebar_class_name: sidebar-item-python-cheat-sheet
title: Cheat Sheet for Python + Momento Vector Index
description: Everything to get you going with coding using Python and Momento Vector Index
---

# Cheat Sheet for Python with Momento Vector Index
If you need to get going quickly with Python and Momento Vector Index, this page contains the basic API calls you'll need.

:::tip

If you combine all of the functions on this page into one python file, you'd have a central collection of functions you can import and call from other python code. In addition, if you are using this code in production you might look to replace the print() calls with ones using the logging library (`import logging`) in python. [Click here](../../../../static/code/cheat-sheets/MomentoBasics.py) to see the class file with all definitions in it.

:::

## Import libraries and connect to return a PreviewVectorIndexClient object
This code sets up the class with the necessary imports, the class definition, and the PreviewVectorIndexClient instantiation that each of the other functions will need to call.

```python
from momento import (
    CredentialProvider,
    PreviewVectorIndexClient,
    VectorIndexConfigurations,
)

from momento.requests.vector_index import Item
from momento.responses.vector_index import (
    AddItemBatch,
    CreateIndex,
    DeleteIndex,
    DeleteItemBatch,
    ListIndexes,
    Search,
)

def create_vector_index_client():
  momento_auth_token = CredentialProvider.from_environment_variable('MOMENTO_AUTH_TOKEN')
  config = {
    'configuration': VectorIndexConfigurations.Default.latest(),
    'credential_provider': momento_auth_token,
  }
  return PreviewVectorIndexClient(**config)
```

## Create a new index in Momento Vector Index
Use this function to create a new index in your account.
```python
def create_index(client, index_name: str) -> None:
    print("Creating index with name " + index_name)
    create_index_response = client.create_index(index_name, num_dimensions=2)
    if isinstance(create_index_response, CreateIndex.Success):
        print("Index with name " + index_name + " successfully created!")
    elif isinstance(create_index_response, CreateIndex.IndexAlreadyExists):
        print("Index with name " + index_name + " already exists")
    elif isinstance(create_index_response, CreateIndex.Error):
        raise(Exception("Error while creating index " + create_index_response.message))
```

## Get list of existing indexes in your account
In this example, we use the client function above to get a client object and then use it to list all of the indexes for this account.
```python
def list_indexes(client) -> None:
    print("Listing indexes")
    list_indexes_response = client.list_indexes()
    if isinstance(list_indexes_response, ListIndexes.Success):
        for index in list_indexes_response.index_names:
            print("Account has an index with name " + index)
    elif isinstance(list_indexes_response, ListIndexes.Error):
        print(Exception("Error while listing indexes " + list_indexes_response.message))
```

## Write an item batch to the index
A simple example of doing an `add_item_batch` operation. 
```python
def add_items(client, index_name: str):
    items = [
        Item(id="test_item_1", vector=[1.0, 2.0], metadata={"key1": "value1"}),
        Item(id="test_item_2", vector=[3.0, 4.0], metadata={"key2": "value2"}),
        Item(id="test_item_3", vector=[5.0, 6.0], metadata={"key1": "value3", "key3": "value3"}),
    ]
    print("Adding items " + str(items))
    add_response = client.add_item_batch(
        index_name,
        items=items,
    )
    if isinstance(add_response, AddItemBatch.Success):
        print("Successfully added items")
    elif isinstance(add_response, AddItemBatch.Error):
        raise(Exception("Error while adding items to index " + index_name + " " + add_response.message))
```

## Searching the index
This is an example of a search operation to get the topK items from the index matching the `query_vector`.
```python
def search(client, index_name: str):
    query_vector = [1.0, 2.0]
    top_k = 2
    print("Searching index " + index_name + " with query_vector " + str(query_vector) + " and top " + str(top_k) + " elements")
    search_response = client.search(index_name, query_vector=query_vector, top_k=top_k)
    if isinstance(search_response, Search.Success):
        print("Search succeeded with " + str(len(search_response.hits)) + " matches")
    elif isinstance(search_response, Search.Error):
        raise(Exception("Error while searching on index " + index_name + " " + search_response.message))
```

## Deleting items from the index
An example of deleting the items from an index using `delete_item_batch`.
```python
def delete_items(client, index_name: str):
    item_ids_to_delete = ["test_item_1", "test_item_3"]
    delete_response = client.delete_item_batch(index_name, ids=item_ids_to_delete)
    if isinstance(delete_response, DeleteItemBatch.Success):
        print("Successfully deleted items")
    elif isinstance(delete_response, DeleteItemBatch.Error):
        raise(Exception("Error while deleting items " + delete_response.message))
```

## Usage notes
For any of these functions, call the `create_vector_index_client()` function which returns a `PreviewVectorIndexClient` object. Then pass that object into subsequent functions. This way, calls are more efficient as they reuse the `PreviewVectorIndexClient` for multiple calls to Momento.
