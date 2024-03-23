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

# PythonでMomento Vector Indexを始める

PythonとMomento Vector Indexをすぐに使い始める必要がある場合、このページには必要な基本的なAPIコールが含まれています。

## Install the Momento SDK

Momento Python SDK は [pypi as `momento`](https://pypi.org/project/momento/) から入手できます。

Pythonアプリケーションにpip経由でインストールするには、次のようにする：

```bash
pip install momento
```

## APIキーの設定

Momentoで認証するには[Momento API key](/cache/develop/authentication/api-keys)が必要です。できれば、[Momento Web Console](https://console.gomomento.com/caches) から取得できます。
トークンを取得したら、それを環境変数に保存し、Momentoクライアントがそれを使用できるようにします：

```
export MOMENTO_API_KEY=<your Momento token here>
```

**Note**:セキュリティ強化のためには、トークンを環境変数ではなく、AWS Secret ManagerやGCP Secret Managerのようなものに格納するのがベストプラクティスだが、ここではデモのために使用している。

## ライブラリをインポートし、ベクトルインデックスクライアントをインスタンス化する

このコードでは、必要なインポート、クラス定義、そして他の各関数が呼び出す必要のある `PreviewVectorIndexClient` のインスタンスをセットアップします。

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

以下の例では、すでに `PreviewVectorIndexClient` をインスタンス化しているものとする。

## Momento Vector Indexに新しいインデックスを作成する

このスニペットを使用して、アカウントに新しいインデックスを作成します。similarity_metric`パラメータはオプションで、デフォルトは `SimilarityMetric.COSINE_SIMILARITY` です。

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

## アカウントに存在するインデックスのリストを取得する

この例では、アカウント内のインデックスをリストします。

```python
list_indexes_response = client.list_indexes()
if isinstance(list_indexes_response, ListIndexes.Success):
    for index in list_indexes_response.index_names:
        print(f"Account has an index with name: {index!r}")
elif isinstance(list_indexes_response, ListIndexes.Error):
    print(f"Error while listing indexes: {list_indexes_response.message}")
```

## インデックスに項目を一括して書き込む

`upsert_item_batch`操作の簡単な例です。この操作はアイテムが存在しなければ挿入し、存在すれば置き換えます。

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

## インデックスの検索

これは `query_vector` にマッチするインデックスから上位 k 個のアイテムを取得する検索操作の例です。metadata_fields` パラメータはオプションであり、レスポンスで返すメタデータフィールドを指定するために使用します。

ここでは `[1.0, 2.0]` の `query_vector` を使い、上位2つの結果を求めています。


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

## インデックスから項目を削除する

`delete_item_batch` を使用してインデックスから項目を削除する例です。

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

`delete_index`を使用してインデックスを削除する例。

```python
index_name = "my_index"

delete_response = client.delete_index(index_name)
if isinstance(delete_response, DeleteIndex.Success):
    print("Successfully deleted index")
elif isinstance(delete_response, DeleteIndex.Error):
    print(f"Error while deleting index {delete_response.message}")
```
