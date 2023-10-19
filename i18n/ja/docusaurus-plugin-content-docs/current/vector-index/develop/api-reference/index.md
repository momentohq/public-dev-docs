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

# Momento Vector Index API の使用
Momento Vector Index (MVI) は、AI を活用したアプリケーションで使用するベクトルデータのリアルタイムの保存と取得のために設計された、スケーラブルで開発者に優しいVector Indexサービスです。

## Vector Index Client

Momento Vector Index を操作するには、VectorIndexClient を使用する必要があります。

<SdkExampleTabs snippetId={'API_InstantiateVectorClient'} />

## Vector Index methods

### Create Index
vector indexを作成

| Name             | Type   | Description                                                                                                                                            |
|------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| indexName        | String | ベクターの名前 index.                                                                                                                              |
| numDimensions    | String | ベクトルごとの次元数                                                                                                                       |
| similarityMetric | String | ベクトル間の距離を定量化するために使用されるメトリックです。 コサイン類似度、内積、またはユークリッド類似度を使用できます。 デフォルトはコサイン類似度です。 |


<details>
  <summary>Method response object</summary>

* Success
* AlreadyExists
* Error

具体的な情報については、[レスポンスオブジェクト](./response-objects.md) を参照してください。

</details>

<SdkExampleTabs snippetId={'API_CreateIndex'} />

### Delete Index
vector indexの削除

| Name      | Type            | Description               |
|-----------| --------------- |---------------------------|
| indexName | String          | vector indexの名前 |

<details>
  <summary>Method response object</summary>

* Success
* Error

具体的な情報については、[レスポンスオブジェクト](./response-objects.md) を参照してください。

</details>

<SdkExampleTabs snippetId={'API_DeleteIndex'} />

### List Indexes
全てのvector indexのリスト.

<details>
  <summary>Method response object</summary>

* Success
    * getIndexNames(): string[]
* Error

具体的な情報については、[レスポンスオブジェクト](./response-objects.md) を参照してください。

</details>

<SdkExampleTabs snippetId={'API_ListIndexes'} />

### Upsert Item Batch
vector indexにアイテムを一括挿入します。


| Name      | Type            | Description                     |
|-----------|-----------------|---------------------------------|
| indexName | String          | vector indexの名前       |
| items     | VectorIndexItem | インデックスにUpsertする項目。 |

<details>
  <summary>Method response object</summary>

* Success
* Error

具体的な情報については、[レスポンスオブジェクト](./response-objects.md) を参照してください。

</details>

<SdkExampleTabs snippetId={'API_UpsertItemBatch'} />

### Search
vector indexからアイテムを一括検索します。


| Name           | Type                            | Description                                                                                                                                                              |
|----------------|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| indexName      | String                          | vector indexの名前                                                                                                                                                |
| queryVector    | number[]                        | 検索するベクトル                                                                                                                                                    |
| topK           | number                          | 返す結果の数。デフォルトは10。                                                                                                                             |
| metadataFields | String[] or ALL_VECTOR_METADATA | 各結果とともに返すメタデータフィールドのリスト、またはすべてのメタデータを返すことを示す値。指定しない場合は、メタデータは返されません。デフォルトは None　|

<details>
  <summary>Method response object</summary>

* Success
    * hits(): SearchHit[]
        * SearchHit: 
            * id(): string
            * distance(): number
            * metadata(): Map<string, string>
* Error

具体的な情報については、[レスポンスオブジェクト](./response-objects.md) を参照してください。

</details>

<SdkExampleTabs snippetId={'API_Search'} />

### Delete Item Batch
vector indexから項目を一括削除します。


| Name      | Type     | Description                     |
|-----------|----------|---------------------------------|
| indexName | String   | vector indexの名前       |
| items     | String[] | 削除する項目のID |

<details>
  <summary>Method response object</summary>

* Success
* Error

具体的な情報については、[レスポンスオブジェクト](./response-objects.md) を参照してください。

</details>

<SdkExampleTabs snippetId={'API_DeleteItemBatch'} />
