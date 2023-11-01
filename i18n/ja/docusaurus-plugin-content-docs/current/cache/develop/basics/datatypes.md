---
sidebar_position: 1
sidebar_label: Data Types
sidebar_class_name: sidebar-item-data-types
title: Supported data types
description: Learn the core data types in Momento Cache to match up with common types in modern programming languages and information about each.
---

# Momento Cacheでサポートされているデータ型
Momento Cache は、さまざまな最新のプログラミング言語の一般的な型に対応するコアなデータ型のグループを提供します。このページには、コアなデータ型の一覧と、それぞれのデータ型に関する情報があります。

![An image of a fast moving collection of various data types and ideas](@site/static/img/more-data-types.jpg)

## Momento Cacheのコアなデータ型

### Byte arrays
保存されたデータはすべてバイト配列として表現されます。Momento SDKは、データを生のバイトまたは移植可能なUTF-8文字列として格納するために使用できる簡単な方法を提供します。文字列、文字、数値などのスカラーデータ、画像やProtocol Buffersの直列化配列などのバイナリデータなどです。

### Collection data types (CDTs)
Collection data typesは、関連するデータを1つのアイテムにまとめたものです。これらはバイト配列の値として格納され、Momento SDKではそれぞれ独自のAPIコールのセットを持っています。例えば、DictionaryFetch、ListFetch、SetFetchなどです。

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

To learn the API methods, check the [API reference for list collection data types](./../api-reference/list-collections.md).

#### Dictionaries
Dictionaries は、順序付けされていない要素の集まりであり、各要素はフィールド:値のペアです。

dictionary を使う例としては、データをまとめて保存し、フィールドと値のペアを名前で取り出す必要がある場合があります。

```javascript
"truck546" = {
    "brand" : "Ford", 
    "model": "F-350",
    "year" : "2020",
    "engine" : "diesel"
}
```

API メソッドを学ぶには、[dictionary collection data 型の API リファレンス](./../api-reference/dictionary-collections.md) を確認してください。

#### Sets
セットとは、一意な要素の並び順のないコレクションのことで、それぞれが文字列形式になっています。たとえば、「sugar」を何度セットに追加しても、「sugar」のエントリーは1つしかないです。

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

APIメソッドを学ぶには、[セット・コレクション・データ型のAPIリファレンス](./../api-reference/set-collections.md)を確認してください。

#### Sorted sets

ソートされたセットは、値（文字列）とスコア（符号付きダブル64ビットフロート）のペアを持つユニークな要素のコレクションです。項目の要素はスコア値順に並べられます。例えば

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

APIメソッドを学ぶには、[API reference for sorted set collection data types](./../api-reference/sorted-set-collections.md)を確認してください。

## FAQs
<details>
  <summary>辞書項目からデータのサブセットを取得するためにAPIコールを実行した場合、項目全体のサイズはGBあたりの転送コストにカウントされますか？</summary>
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
  <summary>increment APIを使用する際、要素をどのようにフォーマットすればいいですか？</summary>
increment APIコールで使用される要素は、基数10の整数を表すUTF-8文字列として格納されなければならないです。要素がその形式でない場合、APIコールはフォーマットエラーを投げます。
</details>
