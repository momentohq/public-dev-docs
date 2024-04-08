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

# Momento Vector Index APIを使う
Momento Vector Index（MVI）は、AIを活用したアプリケーションで使用するベクトルデータをリアルタイムで保存・検索するために設計された、スケーラブルで開発者に優しいベクトルインデックスサービスです。

## Vector Index Client

Momento Vector Indexes を操作するには、VectorIndexClient を使用する必要があります。

<SdkExampleTabs snippetId={'API_InstantiateVectorClient'} />

## Vector Index methods

### Create Index
vector indexを作成

| 名前             | タイプ   | 詳細                                                                                                                                            |
|------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| indexName        | String | vector indexの名前                                                                                                                              |
| numDimensions    | String | Number of dimensions per vector.                                                                                                                       |
| similarityMetric | String | Metric used to quantify the distance between vectors. Can be cosine similarity, inner product, or euclidean similarity. Defaults to cosine similarity. |


<details>
  <summary>Method response object</summary>

* Success
* AlreadyExists
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_CreateIndex'} />

### Delete Index
vector indexの削除

| 名前             | タイプ   | 詳細     |
|-----------| --------------- |---------------------------|
| indexName | String          | vector indexの名前 |

<details>
  <summary>Method response object</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_DeleteIndex'} />

### List Indexes
vector indexesの全てのリスト

<details>
  <summary>Method response object</summary>

* Success
    * getIndexes(): VectorIndexInfo[]
        * VectorIndexInfo:
            * name: String
            * numDimensions: number
            * similarityMetric: String
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_ListIndexes'} />

### Upsert Item Batch
アイテムを一括でvector indexにUpsertsします。


| 名前             | タイプ   | 詳細     |
|-----------|-----------------|---------------------------------|
| indexName | String          | vector indexの名前       |
| items     | VectorIndexItem | indexにアップサートする項目。 |

<details>
  <summary>Method response object</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_UpsertItemBatch'} />

### Search
クエリのベクトルに最も近いベクトルを持つアイテムを検索する。


| 名前             | タイプ   | 詳細     |
|----------------|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| indexName      | String                          | vector indexの名前                                                                                                                                                |
| queryVector    | number[]                        | 検索するベクトル                                                                                                                                                    |
| topK           | number                          | 返す結果の数。デフォルトは10                                                                                                                             |
| metadataFields | String[] or ALL_VECTOR_METADATA | 各結果とともに返すメタデータ・フィールドのリスト、またはすべてのメタデータを返すことを示す値です。指定しない場合は、メタデータは返されません。デフォルトは None |
| filter         | [VectorFilterExpression](./filter-expressions.md)          | 結果をフィルターするためのフィルター式。デフォルトはフィルタなし                                                                                                        |

<details>
  <summary>Method response object</summary>

* Success
    * hits(): SearchHit[]
        * SearchHit: 
            * id: string
            * score: number
            * metadata: Map<string, string>
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_Search'} />

### Search And Fetch Vectors
クエリのベクトルに最も近いベクトルを持つアイテムを検索します。検索ヒットしたベクトルに対応するベクトルも返します。


| 名前             | タイプ   | 詳細     |
|----------------|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| indexName      | String                          | vector indexの名前                                                                                                                                                |
| queryVector    | number[]                        | 検索するベクトル                                                                                                                                                    |
| topK           | number                          | 返す結果の数。デフォルトは10。                                                                                                                             |
| metadataFields | String[] or ALL_VECTOR_METADATA | 各結果とともに返すメタデータ・フィールドのリスト、またはすべてのメタデータを返すことを示す値です。指定しない場合は、メタデータは返されません。デフォルトは None |
| filter         | [VectorFilterExpression](filter-expressions.md)          | 結果をフィルターするためのフィルター式。デフォルトはフィルタなし                                                                                                        |

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

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SearchAndFetchVectors'} />

### Get Item Batch
vector indexから項目を一括で取得します。


| Name      | Type     | Description                     |
|-----------|----------|---------------------------------|
| indexName | String   | vector indexの名前       |
| ids       | String[] | 取得するアイテムのID。   |

<details>
  <summary>Method response object</summary>

* Success
    * values(): Record<string, VectorIndexItem> - Items for found IDs.
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_GetItemBatch'} />

### Get Item Metadata Batch
vector indexからアイテムのメタデータを一括で取得します。

| Name      | Type     | Description                         |
|-----------|----------|-------------------------------------|
| indexName | String   | vector indexの名前           |
| ids       | String[] | 取得するアイテムのメタデータのID   |

<details>
  <summary>Method response object</summary>

* Success
    * values(): Record<string, VectorIndexMetadata> - Metadata for found IDs.
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_GetItemMetadataBatch'} />

### Delete Item Batch
vector indexから項目を一括削除します。


| 名前             | タイプ   | 詳細     |
|-----------|----------|---------------------------------|
| indexName | String   | vector indexの名前       |
| items     | String[] | IDs of the items to be deleted. |

<details>
  <summary>Method response object</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_DeleteItemBatch'} />
