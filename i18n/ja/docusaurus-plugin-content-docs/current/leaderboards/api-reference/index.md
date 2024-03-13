---
sidebar_position: 1
sidebar_label: API Reference
title: Leaderboards API reference
description: Learn how to interact programmatically with Momento Leaderboards API.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

## Momento Leaderboardsを使用する

Momento Leaderboardsは、専用のAPIを備えたトップクラスのサービスであり、数千万のアイテムを持つリーダーボードと、迅速なingestion/querying/updatesをサポートします。

## Leaderboard Client

リーダーボードを作成し、操作するには、まずLeaderboardClientを作成する必要があります。

<SdkExampleTabs snippetId={'API_InstantiateLeaderboardClient'} />

そして、キャッシュとリーダーボード名を指定して、リーダーボードを作成することができます。

<SdkExampleTabs snippetId={'API_CreateLeaderboard'} />

## Leaderboard メソッド

### 要素をUpsert

リーダボードにまだ要素が存在しない場合、要素を挿入します。要素がすでにリーダーボードに存在する場合は、要素を更新する。upsertコールは成功するか失敗するかのどちらかです。

IDは、プレーヤー識別子、セッション識別子、ブラウザ識別子、またはこのスコアボードに使用したい他の種類の識別子にすることができます。0から2^63-1まで、64ビットの符号なし整数で指定できます。idはリーダーボードに一度しか表示されません。つまり、プレイヤーが2つのidを持っていない限り、一人のプレイヤーに対して2つのスコアを表示することはできません。

| 名前         | タイプ                | 説明                                                    |
|--------------|---------------------|----------------------------------------------------------------|
| elements     | Map<number, number> | upsertする要素(id,scoreのペア)のマップまたはレコード       |

<details>
  <summary>Method response object</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_LeaderboardUpsert'} />

アップサートはバッチ操作として実装されているので、大規模なリーダーボードでは、最大8192要素のバッチでアップサートを行うことができます。

<SdkExampleTabs snippetId={'API_LeaderboardUpsertPagination'} />

### スコアで要素を取得する

指定された最小スコアと最大スコアの範囲内にある要素を取得します。

同じスコアを持つ要素は、IDに基づいた英数字順で返されます (例えば、同じスコアを持つ要素のIDは、`[1, 2, 10, 123, 2, 234, ...]` ではなく `[1, 10, 123, 234, ...]` の順に返されます)。

| 名前         | タイプ                | 説明                                                       |
|--------------|---------------------|-------------------------------------------------------------------|
| minScore     | Optional[number]    | スコア範囲の下限を含む。デフォルトは `-inf`    |
| maxScore     | Optional[number]    | スコア範囲の排他的上限値。デフォルトは `+inf`    |
| order        | Optional[Ascending / Descending]    | 要素を取得する順番。デフォルトは昇順で、0が最も低いスコアとなります。   |
| offset       | Optional[number]    | 最初の要素を返す前にスキップする要素の数。注意: これは最初に返す要素のスコアではなく、最初の要素を返す前にスキップする結果セットの要素数です。    |
| count        | Optional[number]    | 返す要素の最大数。デフォルトは 8192 で、これはリクエストごとに取得できる最大数です。    |

<details>
  <summary>Method response object</summary>

* Success
    * values(): {`id`: number, `score`: number, `rank`: number}[]
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_LeaderboardFetchByScore'} />

FetchByScore はバッチ処理として実装されているので、大規模なリーダーボードの場合、最大 8192 要素までまとめて取得することができます。offset` パラメータを使用すると、要求されたスコア範囲に含まれる複数の要素を、要求された要素の終わりを示す空のリストが返されるまでページ送りすることができます。

<SdkExampleTabs snippetId={'API_LeaderboardFetchByScorePagination'} />

### ランク別に要素を取得する

指定された最小ランクと最大ランクの範囲内にある要素を取得する。


| 名前         | タイプ                | 説明                                                                  |
|--------------|---------------------|------------------------------------------------------------------------------|
| startRank    | number    | ランク範囲の包含下限。デフォルトは0。                    |
| endRank      | number    | ランク範囲の排他的上限。デフォルトは `startRank` + 8192 です。   |
| order        | Optional[Ascending / Descending]    | 要素を取得する順番。デフォルトは昇順で、0が最も低いスコアとなります。   |

<details>
  <summary>Method response object</summary>

* Success
    * values(): {`id`: number, `score`: number, `rank`: number}[]
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_LeaderboardFetchByRank'} />

大規模なリーダーボードでは、最大8192個の要素を一括でフェッチする必要があります。

<SdkExampleTabs snippetId={'API_LeaderboardFetchByRankPagination'} />

### IDで要素を取得する

要素IDのリストを指定して要素を取得する。


| 名前         | タイプ                                | 説明                                                  |
|--------------|-------------------------------------|--------------------------------------------------------------|
| ids          | Array<`number`>                       | 順位を取得する要素のID       |
| order        | Optional[Ascending / Descending]    | 要素を取得する順番。デフォルトは昇順で、0が最も低いスコアとなります。   |

<details>
  <summary>Method response object</summary>

* Success
    * values(): {`id`: number, `score`: number, `rank`: number}[]
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_LeaderboardGetRank'} />

### リーダーボードの長さを取得する

リーダーボードのエントリー数を取得する。リーダーボードの名前は `Leaderboard` オブジェクトから推測されます。

<details>
  <summary>Method response object</summary>

* Success
    * length(): number
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_LeaderboardLength'} />

### 要素を削除する

指定されたIDを持つ要素を削除します。

| 名前             | タイプ   | 説明                                                                                                                                            |
|------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| ids        | Array<`number`> | 削除したい要素のID配列。                                                                                                                              |

<details>
  <summary>Method response object</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_LeaderboardRemoveElements'} />

大規模なリーダーボードでは、最大8192個の要素を一括して削除する必要があります。

<SdkExampleTabs snippetId={'API_LeaderboardRemoveElementsPagination'} />

### リーダーボードの削除

リーダーボードを削除する。リーダーボードの名前は `Leaderboard` オブジェクトから推測されます。

<details>
  <summary>Method response object</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_LeaderboardDelete'} />