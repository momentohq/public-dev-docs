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

## Control APIs

これらのAPIメソッドは、インデックスの管理と制御に使用される。

### Index の作成
ベクトルインデックスを作成します。

| Name             | Type   | Description                                                                                                                                            |
|------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| indexName        | String | ベクトルのインデックス名                                                                                                                             |
| numDimensions    | String | ベクトルあたりの次元数                                                                                                                  |
| similarityMetric | String | ベクトル間の距離を定量化するために使用されるメトリック。cosine similarity, inner product, euclidean similarity のいずれか。デフォルトは cosine similarity。 |


<details>
  <summary>メソッド・レスポンス・オブジェクト</summary>

* Success
* AlreadyExists
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</details>

<SdkExampleTabs snippetId={'API_CreateIndex'} />

### Index の削除
ベクトル・インデックスを削除します。

| Name      | Type            | Description               |
|-----------| --------------- |---------------------------|
| indexName | String          | ベクトルのインデックス名 |

<details>
  <summary>メソッド・レスポンス・オブジェクト</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</details>

<SdkExampleTabs snippetId={'API_DeleteIndex'} />

### Indexes の一覧出力
すべてのベクトル・インデックスを一覧表示します。

<details>
  <summary>メソッド・レスポンス・オブジェクト</summary>

* Success
    * getIndexes(): VectorIndexInfo[]
        * VectorIndexInfo:
            * name: String
            * numDimensions: number
            * similarityMetric: String
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</details>

<SdkExampleTabs snippetId={'API_ListIndexes'} />

## Data APIs

これらのAPIメソッドは、インデックス内のデータを直接操作するために使用されます。

### Count Items
ベクトル・インデックスの項目数を数えます。


| Name      | Type            | Description                     |
|-----------|-----------------|---------------------------------|
| indexName | String          | ベクトルのインデックス名      |

<details>
  <summary>メソッド・レスポンス・オブジェクト</summary>

* Success
    * itemCount(): number
* Error
    * 存在しないインデックスはNOT_FOUNDエラーコードを返します。これはアイテムがないインデックスとは異なり、リクエストは0カウントで成功します。

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</details>

<SdkExampleTabs snippetId={'API_CountItems'} />

### Item のバッチアップサート
アイテムのバッチをベクトル・インデックスにアップサートします。


| Name      | Type            | Description                     |
|-----------|-----------------|---------------------------------|
| indexName | String          | ベクトルのインデックス名      |
| items     | VectorIndexItem | インデックスにアップサートする項目 |

<details>
  <summary>メソッド・レスポンス・オブジェクト</summary>

* Success
* Erro

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</details>

<SdkExampleTabs snippetId={'API_UpsertItemBatch'} />

### Search
クエリのベクトルに最も近いベクトルを持つアイテムを検索する。


| Name           | Type                            | Description                                                                                                                                                              |
|----------------|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| indexName      | String                          | ベクトルのインデックス名                                                                                                                                               |
| queryVector    | number[]                        | 検索するベクトル                                                                                                                                              |
| topK           | number                          | 返す結果の数。デフォルトは10                                                                                                                             |
| metadataFields | String[] or ALL_VECTOR_METADATA | 各結果とともに返すメタデータ・フィールドのリスト、またはすべてのメタデータを返すことを示す値。指定しない場合は、メタデータは返されません。デフォルトは None。 |
| scoreThreshold | number                          | 結果をフィルタリングするスコアのしきい値。閾値は排他的です。デフォルトはしきい値なし (すべての結果が返される)。                                                 |
| filter         | [VectorFilterExpression](filter-expressions.md)          | 結果をフィルターするためのフィルター式。デフォルトはフィルタなし。                                                                                                         |

<details>
  <summary>メソッド・レスポンス・オブジェクト</summary>

* Success
    * hits(): SearchHit[]
        * SearchHit: 
            * id: string
            * score: number
            * metadata: Map<string, string>
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</details>

<SdkExampleTabs snippetId={'API_Search'} />

### ベクターの検索と取得
クエリのベクトルに最も近いベクトルを持つアイテムを検索します。検索ヒットしたベクトルに対応するベクトルも返す。


| Name           | Type                            | Description                                                                                                                                                              |
|----------------|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| indexName      | String                          | ベクトルのインデックス名                                                                                                                                              |
| queryVector    | number[]                        | 検索するベクトル                                                                                                                                                    |
| topK           | number                          | 返す結果の数。デフォルトは10。                                                                                                                             |
| metadataFields | String[] or ALL_VECTOR_METADATA | 各結果とともに返すメタデータ・フィールドのリスト、またはすべてのメタデータを返すことを示す値。指定しない場合は、メタデータは返されない。デフォルトは None。 |
| scoreThreshold | number                          | 結果をフィルタリングするスコアのしきい値。閾値は排他的。デフォルトはしきい値なし (すべての結果が返される)。                                                |
| filter         | [VectorFilterExpression](./filter-expressions.md)          | 結果をフィルターするためのフィルター式。デフォルトはフィルタなし                                                                                                       |

<details>
  <summary>メソッド・レスポンス・オブジェクト</summary>
* Success
    * hits(): SearchAndFetchVectorsHit[]
        * SearchAndFetchVectorsHit:
            * id: string
            * score: number
            * metadata: Map<string, string>
            * vector: number[]
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</details>

<SdkExampleTabs snippetId={'API_SearchAndFetchVectors'} />

### Item のバッチ一括取得
ベクトルインデックスから項目を一括で取得します。


| Name      | Type     | Description                     |
|-----------|----------|---------------------------------|
| indexName | String   | ベクトルのインデックス名      |
| filter    | String[] | 取得するアイテムのID  |

<details>
  <summary>メソッド・レスポンス・オブジェクト</summary>

* Success
    * values(): Record<string, VectorIndexItem> - Items for found IDs.
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</details>

<SdkExampleTabs snippetId={'API_GetItemBatch'} />

### Item メタデータ一括取得
ベクトルインデックスからアイテムのメタデータを一括で取得します。

| Name      | Type     | Description                         |
|-----------|----------|-------------------------------------|
| indexName | String   | ベクトルのインデックス名         |
| filter    | String[] | 取得するアイテムのメタデータのID   |

<details>
  <summary>メソッド・レスポンス・オブジェクト</summary>

* Success
    * values(): Record<string, VectorIndexMetadata> - Metadata for found IDs.
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</details>

<SdkExampleTabs snippetId={'API_GetItemMetadataBatch'} />


### Item の一括削除
ベクトル・インデックスから項目を一括削除します。


| Name      | Type     | Description                     |
|-----------|----------|---------------------------------|
| indexName | String   | ベクトルのインデックス名      |
| filter    | [VectorFilterExpression](./filter-expressions.md) \| String[] | 削除するアイテムまたはアイテムIDにマッチするフィルタ|

<details>
  <summary>メソッド・レスポンス・オブジェクト</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</details>

<SdkExampleTabs snippetId={'API_DeleteItemBatch'} />
