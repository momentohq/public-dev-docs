---
sidebar_position: 4
sidebar_label: Sorted sets
title: Sorted set collections API reference
description: Learn how to interact with the API for sorted set collection data types in Momento Cache.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Sorted set collections

Momento Cacheのソート済みセットは、値（String、Byte[]など）とスコア（符号付きダブル64ビットfloat）のペアを持つ一意の要素のコレクションです。ソートされたセットの要素は、スコア順に並べられます。

:::info

Momento コレクションタイプは、[CollectionTTL](./collection-ttl.md)を使用してTTL動作を指定します。これは、すべての "write" 操作のオプション引数です。

:::

## Sorted set methods

### SortedSetPutElement

ソートされたセットに新しい要素を追加したり、既存の[ソートされたセット要素](#sortedsetelement)を更新したりします。

- セットが存在しない場合、このメソッドは渡された要素を持つ新しいソート済みセットコレクションを作成します。

- セットが存在する場合、その **値** が存在しなければ、その要素はソートされたセットに追加されます。その要素の値が存在する場合、その要素は上書きされます。

| Name            | Type               | Description                                   |
| --------------- | ------------------ | --------------------------------------------- |
| cacheName       | String             | キャッシュの名前                            |
| setName         | String             | 変更するソートセットコレクションの名前。 |
| value           | String \| Byte[]   | The value of the element to be added to the sorted set by this operation. |
| score           | number             | The score of the element to be added to the sorted set by this operation. |
| ttl             | [CollectionTTL object](./collection-ttl.md) | TTL for the sorted set collection. This TTL takes precedence over the TTL used when initializing a cache connection client. |

<details>
  <summary>Method response object</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetPutElement'} />

### SortedSetPutElements

Adds new or updates existing [sorted set elements](#sortedsetelement) in a sorted set collection.

- If the set does not exist, this method creates a new sorted set collection with the element(s) passed in.

- If the set exists, for each [SortedSetElement](#sortedsetelement) in the array, each element is added to the sorted set if that **value** doesn't exist. If the value of that element does exist, that element is overwritten.

| Name            | Type               | Description                                   |
| --------------- | ------------------ | --------------------------------------------- |
| cacheName       | String             | キャッシュの名前                            |
| setName         | String             | 変更するソートセットコレクションの名前。 |
| elements        | [SortedSetElement](#sortedsetelement)[] | この操作によってソートされたセットに追加される要素。|
| ttl             | [CollectionTTL object](./collection-ttl.md) | ソートされたセットコレクションの TTL。この TTL は、キャッシュ接続クライアントを初期化するときに使用される TTL よりも優先されます。 |

<details>
  <summary>Method response object</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetPutElements'} />

### SortedSetFetchByRank

ソートされた集合の要素を取得し、オプションで順位でフィルタリングして、昇順または降順で返します。

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | キャッシュの名前                            |
| setName         | String          | ソートされたセットコレクションの名前。 |
| startRank | Optional[integer]   | 結果の開始順位。デフォルトはゼロです。 |
| endRank | Optional[integer]   | 結果の排他的な終了順位。デフォルトは `null` である。 |
| order           | Ascending \| Descending | ソートされたセットを返したい順番。|

<details>
  <summary>Method response object</summary>

* Hit
    * elements(): SortedSetElement[]
* Miss
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetFetchByRank'} />

### SortedSetFetchByScore

ソートされた集合の要素を取得し、スコアでフィルタリングして昇順または降順で返します。

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | キャッシュの名前                            |
| setName         | String          | ソートされたセットコレクションの名前。 |
| minScore | Optional[double]   | 結果の低スコアを含む。デフォルトは `-inf` で、最低スコアまで含める。|
| maxScore | Optional[double]   | 結果のハイスコア。デフォルトは `+inf` である。 |
| order           | Ascending \| Descending | ソートされたセットを返したい順番。|
| offset           | Optional[int] | フィルタリングされたリストから結果を返し始めるオフセット。デフォルトは0、つまりフィルタリングしない。指定する場合は、非負でなければならない。 |
| count           | Optional[int] | フィルタリングされたリストから返す結果の最大数。デフォルトは `null` で、つまり無制限である。指定する場合は、厳密に正数でなければならない。|

<details>
  <summary>Method response object</summary>

* Hit
    * elements(): SortedSetElement[]
* Miss
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetFetchByScore'} />

### SortedSetGetScore

Gets an element's score from the sorted set, indexed by value.

| Name             | Type                | Description                                   |
| ---------------- | ------------------- | --------------------------------------------- |
| cacheName        | String              | キャッシュの名前                            |
| setName          | String              | ソートされたセットコレクションの名前。 |
| value           | String \| Bytes | スコアを取得する値。 |

<details>
  <summary>Method response object</summary>

* Cache hit
  * Score: number
* Cache miss (if the sorted set does not exist)
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetGetScore'} />

### SortedSetGetScores

ソートされたセットから、値でインデックス付けされた要素のリストに関連付けられたスコアを取得します。

| Name             | Type                | Description                                   |
| ---------------- | ------------------- | --------------------------------------------- |
| cacheName        | String              | キャッシュの名前                            |
| setName          | String              | ソートされたセットコレクションの名前。 |
| values           | String[] \| Bytes[] | スコアを取得する値の配列。 |

<details>
  <summary>Method response object</summary>

* Cache hit
    * Elements() (returns hit/miss per element)
      * Hit:
        * Score: number
      * Miss
* Cache miss (if the sorted set does not exist)
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetGetScores'} />

### SortedSetRemoveElement

値でインデックス付けされた、ソートされたセットから要素を削除します。

| Name            | Type             | Description                                   |
| --------------- | ---------------- | --------------------------------------------- |
| cacheName       | String           | キャッシュの名前                            |
| setName         | String           | 変更するセットコレクションの名前。 |
| value          | String \| Bytes | この操作によって削除される要素の値。 |

<details>
  <summary>Method response object</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetRemoveElement'} />

### SortedSetRemoveElements

値でインデックス付けされたソートされたセットから要素を削除します。

| Name            | Type             | Description                                   |
| --------------- | ---------------- | --------------------------------------------- |
| cacheName       | String           | キャッシュの名前                            |
| setName         | String           | 変更するセットコレクションの名前。 |
| values          | String[] \| Bytes[] | この操作によって削除される要素の値。 |

You can remove either one or a specific group of elements.

<details>
  <summary>Method response object</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetRemoveElements'} />

### SortedSetGetRank

指定されたソートされた集合の中で、要素はどの位置にあるか？が分かります。

| Name      | Type                              | Description                                                         |
|-----------|-----------------------------------|---------------------------------------------------------------------|
| cacheName | String                            | キャッシュの名前                                              |
| setName   | String                            | 変更されるコレクションの名前                  |
| value     | String \| Bytes                   | スコアを取得する要素の値                     |
| order     | Optional[Ascending \| Descending] | ソートされた集合が順位を決定するためにソートされる順序 |

<details>
  <summary>Method response object</summary>

* Hit
  * Rank: integer
* Miss
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetGetRank'} />

### SortedSetIncrementScore

要素のスコアを加算します。値がソートされたセットから *missing* されている場合、このメソッドは値をインクリメントする量に設定します。

:::note

インクリメンタルされた後のスコアは、-9223372036854775808から9223372036854775807までの範囲内である必要があります（符号付きの64ビット浮動小数点数）。範囲外の場合は、エラーレスポンスが返されます。

:::

例:

- 要素がソートされたセットに存在しない場合、`SortedSetIncrementScore(cacheName, setName, value, 10)` は要素のスコアを10に設定します。
- 既存の要素が value:score の "\{ 'KesselRun' : 12 \}" の場合、`SortedSetIncrementScore(cacheName, setName, 10)` は要素のスコアを10に設定します。の場合、`SortedSetIncrementScore(cacheName, setName, value, 10)` は要素のスコアを22に設定します。

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | キャッシュの名前                            |
| setName         | String          | 変更するソートセットコレクションの名前。 |
| value           | String \| Bytes | この操作によってインクリメントされる要素の値。 |
| amount          | Number          | スコアに加算する量。正、負、ゼロのいずれかを指定する。デフォルトは1。 |
| ttl             | [CollectionTTL object](./collection-ttl.md) | ソートされたセット・コレクションの TTL。この TTL は、キャッシュ接続クライアントを初期化するときに使用される TTL よりも優先されます。 |

<details>
  <summary>Method response object</summary>

* Success
  * Value: number - the new value after incrementing
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetIncrementScore'} />

## SortedSetElement

ソートされた集合の各要素を構成するのは、値とスコアです。

例:
`{ "TomHocusXaster" : 1138 }`

| Name            | Type                         | Description                                   |
| --------------- | ---------------------------- | --------------------------------------------- |
| Value           | String \| Bytes              | ソートされたセット要素の値。|
| Score           | Signed double 64-bit float   | 要素に得点をつける。 |

SortedSetElementは、それ自体で存在することもできるし、SortedSetElementの配列の一部として存在することもできます。

### SortedSetLength
ソートされたセットコレクションのエントリ数を取得します。

| Name           | Type         | Description                                |
|----------------| ------------ |--------------------------------------------|
| cacheName      | String       | キャッシュの名前                         |
| sortedSetName | String       | チェックするソートセットコレクションの名前。|

<details>
  <summary>Method response object</summary>

* Hit
    * `length()`: Number
* Miss
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetLength'} />

### SortedSetLengthByScore
既存のソートされた集合コレクションに対して、指定された最小スコアと最大スコアの間のすべての値を見つけ、その長さを返します。

| Name           | Type         | Description                                |
|----------------| ------------ |--------------------------------------------|
| cacheName      | String       | キャッシュの名前                         |
| sortedSetName | String       | チェックするソートセットコレクションの名前。 |
| minScore | Optional[double]   | 結果の低スコアを含む。デフォルトは `-inf` で、最低スコアまで含める。 |
| maxScore | Optional[double]   | 結果のハイスコア。デフォルトは `+inf` である。 |

<details>
  <summary>Method response object</summary>

* Hit
    * `length()`: Number
* Miss
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetLengthByScore'} />
