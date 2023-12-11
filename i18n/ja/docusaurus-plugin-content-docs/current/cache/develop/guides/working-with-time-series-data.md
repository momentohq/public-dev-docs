---
sidebar_position: 5
sidebar_label: Working with Time Series Data
title: Working with Time Series Data
description: Learn how to store time series data in Momento Cache
---

# 時系列データの保存

時系列データを一時的に保存することで、長期間の保存コストを気にすることなくデータを可視化することができます。IoTセンサーのような時系列データの一般的なユースケースを考えてみよう。確かに、最近のデータがどのようなものかを見るのは便利ですが、各センサーの値を無期限に保存する必要があるでしょうか？多数のセンサーがデータベースにメトリクスを送信すると、ストレージ・コストが急上昇します。そのデータをMomentoに保存することで、Momentoが最も得意とする、スケーリングや長期的な保存コストを気にすることなく大量のデータを保存することができます。

[リスト](./../api-reference/list-collections.md)、[セット](./../api-reference/set-collections.md)、[辞書など](./../api-reference/dictionary-collections.md)、Momento のコレクション・データ型に関連するデータ要素を格納できます。アプリケーションのアクセスパターンやデータスキーマに適したデータ型を選択する必要があります。時系列データの場合は、Momento の[SortedSet データ](./../api-reference/sorted-set-collections.md)型を使用します。`SortedSet`については、[こちらのブログで](https://www.gomomento.com/blog/were-back-with-another-collection-data-type-sorted-sets)詳しく説明しています。

### なぜ SortedSets を使うのか？

- 時系列データをタイムスタンプでソートすることで、クライアントアプリケーションはソートされた順序でデータを取得し、表示することが容易になります。
- Momento SDKの[SortedSetFetchByRankと](./../api-reference/sorted-set-collections.md#sortedsetfetchbyrank) [SortedSetFetchByScoreを](./../api-reference/sorted-set-collections.md#sortedsetfetchbyscore)使用して、クエリ応答を特定の値数または特定の時間内の値に制限します。

## 時系列データのSortedSetへの格納

Momento SDKの[SortedSetPutElement](./../api-reference/sorted-set-collections.md#sortedsetputelement)メソッドを使用して、SortedSetに項目を挿入します。

IoTセンサーのデータをMomento Cacheに格納するワークロードを考えてみましょう。

- 各センサーは独自のSortedSetを持っている。
- センサーのSortedSet内の各sensor_valueは、値とタイムスタンプを含むJSON文字列です。

例：`JSON.stringify("value":1, "timestamp": 1686583076)`

- SortedSet 内の各項目のスコアは、データポイントのタイムスタンプである。SortedSetはスコアを使用してセット内のデータをソートします。

> SortedSet をキャッシュに書き込むコード・スニペット

```javascript
const item_value = JSON.stringify({"sensor_value": sensor_value, "timestamp": timestamp})

const response = await cacheClient.sortedSetPutElement("sensor_data", `${sensor_id}-sensor-data`, item_value, timestamp)
```

並べ替えられたセットから時系列データを取得する：

キャッシュからデータを取得するには、SortedSetFetchByRankを使用します。SortedSet全体を取得したい場合は、startRankとendRankパラメータ値を渡さないでください。

> SortedSetFetchByRank で SortedSet 全体を取得するコード・スニペット

```javascript
const sensor_data = await cacheClient.sortedSetFetchByRank("sensor_data", `${sensor_id}-sensor-data`)
```

SortedSetのサブセットのみを取得したい場合は、以下のようにstartRankとendRankパラメータ値を設定します：

> SortedSetのサブセットを取得するSortedSetFetchByRankのコード・スニペット

```javascript
const sensor_data = await cacheClient.sortedSetFetchByRank("sensor_data", `${sensor_id}-sensor-data`, 0, 10)
```

特定の数の値ではなく、指定した期間のデータのみを取得したい場合は、[SortedSetFetchByScoreを](./../api-reference/sorted-set-collections.md#sortedsetfetchbyscore)使用できます。

> SortedSet のサブセットを取得する SortedSetFetchByScore のコード・スニペット

```javascript
const sensor_data = await cacheClient.sortedSetFetchByScore("sensor_data", `${sensor_id}-sensor-data`, 1686511076, 1686597476)
```

## 時系列データに関する考慮事項

### 生存時間（TTL）値

SortedSet の[CollectionTTL オブジェクトは](/cache/develop/api-reference/collection-ttl)、各センサーの時系列データを保存する期間に応じて設定される。デフォルトでは、SortedSetのTTLは変更されるたびに更新されます。つまり、SortedSetに要素を追加し続ける限り、TTLは増え続けます。

:::caution

CollectionTTL は、コレクション全体、この場合は SortedSet 全体の TTL を指定するものであり、SortedSet 内の個々の要素の TTL を設定するものでは*ありません*。SortedSetが期限切れにならなければ、SortedSet内の要素は期限切れにならない。

:::

### センサー・インデックス・セット

複数のセンサーがキャッシュにデータをプッシュしている場合は、すべてのセンサーIDを格納するSetデータ型の追加を検討してください。SortedSets からデータをフェッチするときに Sensor ID を渡す必要があります。クライアントアプリケーションは、時系列データをフェッチする前に、このSetからすべてのSensor IDを取得し、Sorted Setsからすべてのセンサーのデータをフェッチすることができます。

![セットの例](./images/time-series-example.png)
