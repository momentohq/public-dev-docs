---
sidebar_position: 5
sidebar_label: Working with Time Series Data
title: Working with Time Series Data
description: Learn how to store time series data in Momento Cache
pagination_next: null
---

# 時系列データの保存

時系列データを一時的に保存することで、長期間の保存コストを気にすることなくデータを可視化できます。IoTセンサーのような時系列データの一般的なユースケースについて考えてみましょう。確かに、最近のデータがどのようなものかを見るのは便利ですが、各センサーの値を無期限に保存する必要があるでしょうか？
多数のセンサーがデータベースにメトリクスを送信すると、ストレージのコストが急上昇します。その代わりにMomentoにデータを保存すれば、Momentoが最も得意とする、スケーリングや長期的なストレージ・コストを心配することなく大量のデータを保存することができます。

[lists](./../api-reference/list-collections.md)、[sets](./../api-reference/set-collections.md)、[dictionaries](./../api-reference/dictionary-collections.md)などのMomentoのコレクションデータ型に関連するデータ要素を格納できます。アプリケーションのアクセスパターンとデータスキーマに適したデータ型を選ぶべきです。時系列データの場合は、Momentoの[SortedSet データ型](./../api-reference/sorted-set-collections.md)を使用します。SortedSets`については[こちら](https://www.gomomento.com/blog/were-back-with-another-collection-data-type-sorted-sets)を参照してください。


### なぜSortedSetsを使うのか？

- 時系列データをタイムスタンプでソートすることで、クライアントアプリケーションがデータをソートされた順序で取得し、表示することが容易になります。
- Momento SDKの[SortedSetFetchByRank](./../api-reference/sorted-set-collections.md#sortedsetfetchbyrank)および[SortedSetFetchByScore](./../api-reference/sorted-set-collections.md#sortedsetfetchbyscore)を使用して、クエリ応答を特定の値数または特定のタイムスパン内の値に制限します。

## 時系列データをSortedSetに格納する
SortedSet にアイテムを挿入するには、Momento SDK の [SortedSetPutElement](./../api-reference/sorted-set-collections.md#sortedsetputelement) メソッドを使用します。

IoTセンサーデータをMomento Cacheに保存するワークロードを考えてみましょう。

- 各センサーは独自の SortedSet を持ちます。
- センサーの SortedSet 内の各 sensor_value は、値とタイムスタンプを含む JSON 文字列としましょう。
すなわち、`JSON.stringify("value":1, "timestamp": 1686583076)` となります。
- SortedSet の各項目のスコアは、データポイントのタイムスタンプです。SortedSet は、スコアを使ってセット内のデータをソートします。

>SortedSetをキャッシュに書き込むコードスニペット

```javascript
const item_value = JSON.stringify({"sensor_value": sensor_value, "timestamp": timestamp})

const response = await cacheClient.sortedSetPutElement("sensor_data", `${sensor_id}-sensor-data`, item_value, timestamp)
```

ソートされたセットから時系列データを取得する：

キャッシュからデータを取得するには、SortedSetFetchByRank を使用する。SortedSet全体を取得したい場合は、startRankとendRankパラメータ値を渡さないでください。

>SortedSetFetchByRank で SortedSet 全体を取得するコードスニペット

```javascript
const sensor_data = await cacheClient.sortedSetFetchByRank("sensor_data", `${sensor_id}-sensor-data`)
```

SortedSetのサブセットだけを取得したい場合は、次のようにstartRankとendRankパラメータ値を設定できます：

>SortedSet のサブセットを取得する SortedSetFetchByRank のコードスニペット

```javascript
const sensor_data = await cacheClient.sortedSetFetchByRank("sensor_data", `${sensor_id}-sensor-data`, 0, 10)
```

特定の数の値ではなく、指定した期間のデータのみを取得したい場合は、[SortedSetFetchByScore](./../api-reference/sorted-set-collections.md#sortedsetfetchbyscore)を使用できます。

>SortedSetのサブセットを取得するSortedSetFetchByScoreのコードスニペット

```javascript
const sensor_data = await cacheClient.sortedSetFetchByScore("sensor_data", `${sensor_id}-sensor-data`, 1686511076, 1686597476)
```

## 時系列データに関する考察

### Time To Live (TTL)の値

[TTLの値](./../../learn/how-it-works/expire-data-with-ttl.md)は、ユーザーに時系列データを表示し続ける期間によって異なります。クライアントアプリケーションで時系列データをチャートに表示する場合、チャートの最も古い時刻の値が時系列データのTTLと一致していることを確認してください。

### センサーインデックスセット

複数のセンサーがキャッシュにデータをプッシュしている場合は、すべてのセンサー ID を格納する Set データ型の追加を検討してください。SortedSets からデータをフェッチするときに Sensor ID を渡す必要があります。クライアントアプリケーションは、時系列データをフェッチする前に、このSetからすべてのSensor IDを取得し、Sorted Setsからすべてのセンサーのデータをフェッチすることができます。

![Set example](./images/time-series-example.png)
