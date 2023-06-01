---
sidebar_position: 2
sidebar_label: データ型
sidebar_class_name: sidebar-item-data-types
title: サポートしているデータ型
pagination_prev: null
pagination_next: null
description: Momento Cache のコアとなるデータ型を学び、現代的なプログラミング言語のに共通する型との対応をみてみましょう。
---

# Momento Cache と Momento Topics でサポートしているデータ型
Momento Cache は、現代的な様々なプログラミング言語に共通する型と対応するコアとなるデータ型を提供しています。このページでは、コアのデータ構造の一覧と、それぞれの情報を紹介しています。

## Momento Cache と Topics のコアデータ型

### バイト配列

保存される全てのデータはバイト配列で表現されます。Momento SDK は、生のバイトやUTF-8 の文字列として皆さんのデータを保存するために簡単に使えるメソッドを提供してます。これらは、スカラーデータ (文字列、キャラクタ、数字、等) か、バイナリデータ (画像、Protocol Buffer のシリアライズされた配列) の形になります。

### コレクションデータ型 (CDT)

コレクションデータ型は、関連するデータを一つの項目にグループ化したものです。それらはバイト配列の値として保存され、Momento SDK ではそれぞれに API が提供されています。例えば、DictionaryFetch、ListFetch、SetFetch 等です。

![コレクションデータ型 | Momento Cache](/img/collection_data_types.png)

#### リスト

リストは順序のある要素の集合で、挿入された順にソートされています。

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

API メソッドは、[リストコレクションデータ型の API リファレンス](./api-reference/list-collections.md)をご覧下さい。

#### 辞書

辞書は順序のない要素の集合で、各要素は field:value の組で表されます。

辞書の使用例としては、 field:value の組を一緒に保存して、名前でそれを取り出したい時です。
```javascript
"truck546" = {
    "brand" : "Ford",
    "model": "F-350",
    "year" : "2020",
    "engine" : "diesel"
}
```

API メソッドは、[辞書コレクションデータ型の API リファレンス](./api-reference/dictionary-collections.md)をご覧下さい。

#### セット

セットは順序のないユニークな要素の集合で、各要素は文字列の形になります。例えば、あるセットに何度 'sugar' を追加しても、 'sugar' は一つしか現れません。

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

API メソッドは、[セットコレクションデータ型の API リファレンス](./api-reference/set-collections.md)をご覧下さい。

#### ソート済セット

ソート済セットは値(文字列)とスコア(64ビット符号付き浮動小数点数)の組で表されるユニークな要素の集合です。項目内の要素はスコアの値でソートされています。例:

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

もし要素が同じスコアの場合、[辞書的に](https://www.dictionary.com/browse/lexicographically)ソートされます。

:::

API メソッドは [ソート済セットコレクションデータ型の API リファレンス](./api-reference/sorted-set-collections.md)をご覧下さい。

## FAQs
<details>
  <summary>辞書型の項目からデータの部分集合を取り出す API 呼出しをした場合、項目全体のサイズが GB 毎の転送コストに計上されますか？</summary>
いいえ、されません。例えば、もし全体で 50 KB ある辞書型の項目から、DictionaryGetField API 呼出しで 5 KB の field:value 組のデータを1つ取り出した場合、5 KB だけが GB 毎の転送コストに計上されます。
</details>

<details>
  <summary>どうやれば Momento Cache に JSON ドキュメントを保存できますか？</summary>
お好みの JSON ライブラリを使って、その JSON ドキュメントをバイト配列にシリアライズし、そのバイト配列を Momento Cache に挿入してください。または、JSON ドキュメントの各フィールドの値を辞書型に保存することもできます。
</details>

<details>
  <summary>Momento Cache はコレクションデータ型でネストされたデータを保存できますか？</summary>
直接的にはできません。ベストな選択肢としては、そのデータを JSON オブジェクトとして保存することで、お好みの JSON ライブラリを使って JSON ドキュメントをバイト配列にシリアライズしてからそのバイト配列を Momento Cache に挿入できます。
</details>

<details>
  <summary>インクリメント API を使う場合、要素はどのような形式にすればよいですか？</summary>
インクリメント API で使う要素は、基数 10 の整数を表現する UTF-8 の文字列で保存されている必要があります。もし要素がこの形式になっていない場合、API 呼出しは形式エラーを投げます。
</details>
