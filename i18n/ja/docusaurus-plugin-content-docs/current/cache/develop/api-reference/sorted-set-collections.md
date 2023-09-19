---
sidebar_position: 4
sidebar_label: Sorted sets
title: Sorted set collections API リファレンス
description: Momento Cache のソート済みセットコレクションデータ型の API のやり取りの方法を学びましょう。
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Sorted set collections

Momento Cache におけるソート済みのセットは、値（String, Byte[], など）とスコア（符号付き64ビット浮動小数点数）のペアを持つユニークな要素の集まりです。アイテム内の要素はスコアによって順序付けられています。

## Sorted set メソッド

### SortedSetPutElement

ソート済みセットのアイテムに新たな [ソート済みセットの要素](#sortedsetelement) を追加するか、既存の要素を更新します。

- セットが存在しない場合、このメソッドは渡された要素を含む新たなソート済みセットのアイテムを作成します。

- セットが存在する場合、その値が存在しなければその要素はソート済みセットに追加されます。その要素の値が存在する場合、その要素は上書きされます。

| 名前            | 型               | 説明                                   |
| --------------- | ------------------ | --------------------------------------------- |
| cacheName       | String             | キャッシュの名前                            |
| setName         | String             | 変更対象のソート済みセットアイテムの名前 |
| value        | String \| Byte[] | この操作によってソート済みセットに追加される要素の値。 |
| score        | number | この操作によってソート済みセットに追加される要素のスコア。 |
| ttl             | [CollectionTTL object](./collection-ttl.md) | ソート済みセットアイテムのTTL（Time to Live: 生存時間）。このTTLは、キャッシュ接続クライアントを初期化する際に使用されるTTLよりも優先されます。 |

<details>
  <summary>Method response object</summary>

* Success
* Error

特定の情報については、 [レスポンスオブジェクト](./response-objects.md) を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetPutElement'} />

### SortedSetPutElements

ソート済みセットのアイテムに新たな[ソート済みセットの要素](#sortedsetelement)を追加するか、既存の要素を更新します

- セットが存在しない場合、このメソッドは渡された要素(要素たち)を含む新たなソート済みセットのアイテムを作成します。

- セットが存在する場合、配列内の各[SortedSetElement](#sortedsetelement)について、その値が存在しなければ要素はソート済みセットに追加されます。その要素の値が存在する場合、その要素は上書きされます。

| 名前            | 型               | 説明                                   |
| --------------- | ------------------ | --------------------------------------------- |
| cacheName       | String             | キャッシュの名前                            |
| setName         | String             | 変更対象のソート済みセットアイテムの名前 |
| elements        | [SortedSetElement](#sortedsetelement)[] | この操作によってソート済みセットに追加される要素。 |
| ttl             | [CollectionTTL object](./collection-ttl.md) | ソート済みセットアイテムのTTL（Time to Live: 生存時間）。このTTLは、キャッシュ接続クライアントを初期化する際に使用されるTTLよりも優先されます。 |

<details>
  <summary>Method response object</summary>

* Success
* Error

特定の情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetPutElements'} />

### SortedSetFetchByRank

ランクによるフィルタリングをオプションで適用しつつ、ソート済みセットの要素を取得し、昇順または降順で返します。

| 名前            | 型            | 説明                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | キャッシュの名前                            |
| setName         | String          | ソート済みセットアイテムの名前 |
| startRank | Optional[integer]   | 開始のランクの結果（を含む）。デフォルトは0となっています。 |
| endRank | Optional[integer]   | 終了のランク（を含まない）。デフォルトはnull。最後のランクまでの要素を含む。 |
| order           | Ascending \| Descending | ソート済みセットを返す順序。 |

<details>
  <summary>Method response object</summary>

* Hit
    * elements(): SortedSetElement[]
* Miss
* Error

特定の情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetFetchByRank'} />

### SortedSetFetchByScore

スコアによるフィルタリングをオプションで適用しつつ、ソート済みセットの要素を取得し、昇順または降順で返します。

| 名前            | 型            | 説明                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | キャッシュの名前                            |
| setName         | String          | ソート済みセットアイテムの名前 |
| minScore | Optional[double]   | 結果の下限となるスコア（を含む）。デフォルトは-inf、つまり最低となるスコアを含むまでです。 |
| maxScore | Optional[double]   | 結果の上限となるスコア（を含む）。デフォルトは+inf、つまり最高となるスコアを含むまでです。 |
| order           | Ascending \| Descending | ソート済みセットを返す順序。 |
| offset           | Optional[int] | フィルタリングされたリストの開始位置（を含む）から結果を返し始めるオフセットです。デフォルトは0でフィルタリングしない。指定された場合、マイナスの値は指定できません。 |
| count           | Optional[int] | フィルタリングされたリストから返す結果の総数。デフォルトはnullで、制限はありません。指定された場合、必ず正の値である必要があります。 |

<details>
  <summary>Method response object</summary>

* Hit
    * elements(): SortedSetElement[]
* Miss
* Error

特定の情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetFetchByScore'} />

### SortedSetGetScore

ソート済みセットから、値によってインデックス付けられた要素のスコアを取得します。

| 名前             | 型                | 説明                                   |
| ---------------- | ------------------- | --------------------------------------------- |
| cacheName        | String              | キャッシュの名前                             |
| setName          | String              | ソート済みセットアイテムの名前 |
| value           | String \| Bytes | スコアを取得する値。 |

<details>
  <summary>Method response object</summary>

* Cache hit
  * Score: number
* Cache miss (if the sorted set does not exist)
* Error

特定の情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetGetScore'} />

### SortedSetGetScores

ソート済みセットから、値によってインデックス付けられた要素のスコアを取得します。複数の要素に関連するスコアを取得します。

| 名前             | 型                | 説明                                   |
| ---------------- | ------------------- | --------------------------------------------- |
| cacheName        | String              | キャッシュの名前                             |
| setName          | String              | ソート済みセットアイテムの名前 |
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

特定の情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetGetScores'} />

### SortedSetRemoveElement

値によってインデックス付けられたソート済みセットから要素を削除します。

| 名前            | 型             | 説明                                   |
| --------------- | ---------------- | --------------------------------------------- |
| cacheName       | String           | キャッシュの名前                             |
| setName         | String           | Name of the set item to be altered. |
| value          | String \| Bytes | この操作によって削除される要素の値。 |

<details>
  <summary>Method response object</summary>

* Success
* Error

特定の情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetRemoveElement'} />

### SortedSetRemoveElements

値によってインデックス付けられたソート済みセットから要素を削除します。

| 名前            | 型             | 説明                                   |
| --------------- | ---------------- | --------------------------------------------- |
| cacheName       | String           | キャッシュの名前                             |
| setName         | String           | 変更対象のセットアイテムの名前。 |
| values          | String[] \| Bytes[] | この操作によって削除される要素の値。 |

これにより、個別の要素または特定のグループの要素を削除することができます。

<details>
  <summary>Method response object</summary>

* Success
* Error

特定の情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetRemoveElements'} />

### SortedSetGetRank

指定されたソート済みセット内の要素の位置は何番目かを知ることができます。

| 名前            | 型            | 説明                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | キャッシュの名前                             |
| setName         | String          | 変更対象のソート済みセットアイテムの名前。    |
| value           | String \| Bytes | スコアを取得する要素の値。 |

<details>
  <summary>Method response object</summary>

* Hit
  * Rank: integer
* Miss
* Error

特定の情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetGetRank'} />

### SortedSetIncrementScore

要素のスコアに加算します。値がソート済みセットに存在しない場合、このメソッドは値をインクリメンタルするように設定します。

:::note


インクリメンタルされた後のスコアは、-9223372036854775808から9223372036854775807までの範囲内である必要があります（符号付きの64ビット浮動小数点数）。範囲外の場合は、エラーレスポンスが返されます。

:::

例:

- ソート済みセットに要素が存在しない場合、SortedSetIncrementScore(cacheName, setName, value, 10) は要素のスコアを10に設定します。
- 既存の要素が値:スコアの組み合わせで "{ 'KesselRun' : 12 }" である場合、SortedSetIncrementScore(cacheName, setName, value, 10) は要素のスコアを22に設定します。

| 名前            | 型            | 説明                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | キャッシュの名前                             |
| setName         | String          | 変更するソート済みセットアイテムの名前。 |
| value           | String \| Bytes | この操作によってインクリメンタルされる要素の値。 |
| amount          | Number          | スコアに加算する量。正数、負数、またはゼロが指定できます。デフォルトは1です。 |          
| ttl             | [CollectionTTL object](./collection-ttl.md) | ソート済みセットアイテムのTTL（Time to Live: 生存時間）。このTTLは、キャッシュ接続クライアントを初期化する際に使用されるTTLよりも優先されます。 |

<details>
  <summary>Method response object</summary>

* Success
  * Value: number - the new value after incrementing
* Error

特定の情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetIncrementScore'} />

## SortedSetElement

ソート済みセット内の各要素は、値とスコアの組み合わせで構成されています。

例:
`{ "TomHocusXaster" : 1138 }`

| 名前            | 型                         | 説明                                   |
| --------------- | ---------------------------- | --------------------------------------------- |
| Value           | String \| Bytes              | ソート済みセット要素の値。                            |
| Score           | Signed double 64-bit float   | ソート済みセット要素のスコア。 |

SortedSetElement は、単独で存在することも、SortedSetElement の配列の一部として存在することもあります。

### SortedSetLength
ソート済みセットアイテム内のエントリ数を取得します。

| 名前           | 型         | 説明                                |
|----------------| ------------ |--------------------------------------------|
| cacheName      | String       | キャッシュの名前                         |
| sortedSetName | String       | 確認するソート済みセットアイテムの名前。 |

<details>
  <summary>Method response object</summary>

* Hit
    * `length()`: Number
* Miss
* Error

特定の情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetLength'} />

### SortedSetLengthByScore
既存のソート済みセットアイテムについて、指定された最小スコアと最大スコアの間のすべての値を検索し、その数を返します。

| 名前           | 型         | 説明                                |
|----------------| ------------ |--------------------------------------------|
| cacheName      | String       | キャッシュの名前                         |
| sortedSetName | String       | 確認するソート済みセットアイテムの名前。 |
| minScore | Optional[double]   | 結果の下限のスコア（を含む）。デフォルトは -inf であり、最低のスコアまで含まれます。 |
| maxScore | Optional[double]   | 結果の上限のスコア（を含む）。デフォルトは +inf であり、最高のスコアまで含まれます。 |

<details>
  <summary>Method response object</summary>

* Hit
    * `length()`: Number
* Miss
* Error

特定の情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SortedSetLengthByScore'} />
