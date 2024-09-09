---
sidebar_position: 1
sidebar_label: データ型
title: サポートされているデータ型
description: 最新のプログラミング言語の一般的な型に対応する Momento Cache のコア・データ型について詳しく説明しています。
---

# Momento Cacheでサポートされているデータ型

Momento Cache は、さまざまな最新のプログラミング言語の一般的な型に対応するコア・データ型のグループを提供します。このページには、コア・データ型の一覧と、それぞれのデータ型に関する情報があります。

## Momento Cacheのコア・データ型

### Byte arrays

保存されたデータはすべてバイト配列として表現されます。Momento SDKは、データを生のバイトまたは移植可能なUTF-8文字列として格納するために使用できる簡単な方法を提供します。文字列、文字、数値などのスカラーデータ、画像やプロトコルバッファの直列化配列などのバイナリデータなどです。

### Collection data types (CDTs)

コレクションデータタイプは、関連するデータを1つのアイテムにまとめたものです。これらはバイト配列の値として格納され、Momento SDKではそれぞれ独自のAPIコールセットを持っています。例えば、DictionaryFetch、ListFetch、SetFetchなどです。

<img src="/img/collection_data_types.png" alt="Collection data types drawing | Momento Cache" width="80%"/>

#### Lists

リストは順番に並べられた要素の集まりで、各要素が挿入された順番にソートされています。

```javascript
"Hoover’s Sour Cream Cookies" = [
  "1 cup butter (2 sticks), room temperature",
  "1 cup granulated sugar",
  "1 cup brown sugar, packed",
  "3 eggs, room temperature",
  "1 cup sour cream, room temperature",
  "1 tsp pure vanilla extract",
  "3 cups all-purpose flour",
  "1 tsp baking powder",
  "1 tsp baking soda",
  "1 tsp salt"
]
```

APIメソッドを学ぶには、[リスト・コレクション・データ型のAPIリファレンス](../api-reference/list-collections.md)を確認してください。

#### Dictionaries

Dictionaryは、順序付けされていない要素の集まりであり、各要素はフィールド:値のペアである。

An example of using a dictionary is when you need to store data together and retrieve field:value pairs by name.
```javascript
"truck546" = {
    "brand" : "Ford",
    "model": "F-350",
    "year" : "2020",
    "engine" : "diesel"
}
```

API メソッドを学ぶには、[辞書コレクション・データ型の API リファレンス](../api-reference/dictionary-collections.md) を確認してください。

#### Sets
セットとは、一意な要素の並び順のないコレクションのことで、それぞれが文字列形式になっている。たとえば、「sugar」を何度セットに追加しても、「sugar」のエントリーは1つしかありません。

```javascript
"myIngredients" = {
    "water",
    "sugar",
    "ground cinnamon",
    "all-purpose flour",
    "baking soda",
    "raisins"
}
```

APIメソッドを学ぶには、[セット・コレクション・データ型のAPIリファレンス](../api-reference/set-collections.md)を確認してください。

#### Sorted sets

Sorted setsは、値（文字列）とスコア（符号付きダブル64ビットフロート）のペアを持つユニークな要素のコレクションです。項目の要素はスコア値順に並べられます。例えば

```javascript
"players" = {
    "SorataABard" : 32.7,
    "Juliversal" : 30.45,
    "DragonNosy" : 26.8,
    "redbyrd" : 26.8,
    "SaltyAdjeley" : 23.25,
    "ZachAttack" : 17.3,
    "ElyahouBeets" : 5.0,
    "Smashley" : 3.2"
}
```

:::note

要素が同じスコアを持つ場合、それらは[辞書的に](https://www.dictionary.com/browse/lexicographically)ソートされます。

:::

APIメソッドを学ぶには、[API reference for sorted set collection data types](../api-reference/sorted-set-collections.md)を確認してください。

## FAQ
<details>
  <summary>Dictionary項目からデータのサブセットを取得するためにAPIコールを実行した場合、項目全体のサイズはGBあたりの転送コストにカウントされますか？</summary>
  
いいえ、カウントされません。たとえば、辞書項目全体が50キロバイトである辞書から、5キロバイトのフィールド:値のペアを1つ取得するためにAPIコールDictionaryGetFieldを実行した場合、GBあたりの転送コストには5キロバイトしかカウントされません。
</details>

<details>
  <summary>JSONドキュメントをMomento Cacheに保存するには？</summary>
  
お気に入りの JSON ライブラリを使用して JSON ドキュメントをバイト配列にシリアライズし、そのバイト配列を Momento Cache に挿入します。JSONドキュメントの各フィールド値を辞書に格納することもできます。
</details>

<details>
  <summary>Momento Cacheは、コレクション・データ型にネストされたデータを保存しますか？</summary>
  
直接はできません。このデータを JSON オブジェクトとして保存し、お気に入りの JSON ライブラリを使用して JSON ドキュメントをバイト配列にシリアライズし、そのバイト配列を Momento Cache に挿入するのが最善の方法です。
</details>

<details>
  <summary>インクリメントAPIを使用する際、要素をどのようにフォーマットすればいいですか？</summary>
  
インクリメントAPIコールで使用される要素は、基数10の整数を表すUTF-8文字列として格納されなければなりません。要素がその形式でない場合、APIコールはフォーマットエラーを投げます。
</details>
