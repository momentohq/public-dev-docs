---
sidebar_position: 1
sidebar_label: Dictionary
title: Dictionary API reference
description: Learn how to interact with the API for dictionary collection data types in Momento Cache.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Momento Cache 用 Dictionary API リファレンス
このページでは、[辞書コレクション・データ型](../basics/datatypes.md#dictionaries) の Momento API メソッドについて詳しく説明します。

:::info

Momentoコレクションタイプは、[CollectionTTL](./collection-ttl.md)を使用してTTL動作を指定します。これは、すべての "write" 操作のオプション引数です。

:::

## Dictionary メソッド

### DictionaryFetch

キャッシュからDictionary項目を取得します。

| Name            | Type   | Description                                   |
| --------------- | ------ | --------------------------------------------- |
| cacheName       | String | キャッシュの名前                            |
| dictionaryName  | String | 取得するDictionary項目の名前 |

<details>
  <summary>Method response object</summary>

DictionaryFetchのレスポンスオブジェクトは、キャッシュヒット、ミス、エラーの3つのオプションを返します。

* Cache hit
    - `valueDictionaryBytesBytes()`: Map\<Bytes, Bytes>
    - `valueDictionaryStringString()`: Map\<String, String>
    - `valueDictionaryStringBytes()`: Map\<String, Bytes>
    - `valueDictionaryBytesString()`: Map\<Bytes, String>
    - `toString()`: String - displays the field/value pairs, truncated.
* Cache miss
* Cache error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_DictionaryFetch'} />

### DictionaryGetField
キャッシュ内のDictionary項目から 1 つのフィールドを取得します。

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | キャッシュの名前                             |
| dictionaryName  | String       | 取得するDictionary項目の名前 |
| field           | String/Bytes | 取得するDictionary項目のフィールド名 |

<details>
  <summary>Method response object</summary>

* Cache hit
    - `fieldString()`: String
    - `fieldBytes()`: Bytes
    - `valueString()`: String
    - `valueBytes()`: Bytes

        これらは、辞書からフィールドとその値を返します。

* Cache miss
    - `fieldString()`: String
    - `fieldBytes()`: Bytes

* Cache error
    - `fieldString()`: String
    - `fieldBytes()`: Bytes

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</details>

<SdkExampleTabs snippetId={'API_DictionaryGetField'} />

### DictionaryGetFields
キャッシュ内の辞書から 1 つ以上のフィールドを取得します。

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       |　キャッシュの名前                             |
| dictionaryName  | String       |　取得するDictionary項目の名前  |
| fields          | String[]/Bytes[] | 取得するDictionary項目のフィールド名 |

<details>
  <summary>Method response object</summary>

* Cache hit
    - valueDictionaryBytesBytes(): Map\<Bytes, Bytes>
    - valueDictionaryStringString(): Map\<String, String>
    - valueDictionaryStringBytes(): Map\<String, Bytes>
    - valueDictionaryBytesString(): Map\<Bytes, String>
    - toString(): String - displays truncated valueDictionaryStringString()
* Cache miss
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</details>

<SdkExampleTabs snippetId={'API_DictionaryGetFields'} />

### DictionaryIncrement
既存の値が基数 10 の整数を表す UTF-8 文字列である場合にのみ、フィールドの値を追加します。フィールドが辞書にない場合、このメソッドは、フィールドの値をインクリメントする量に設定します。

:::note

結果として得られるインクリメント値は、-9223372036854775808 から 9223372036854775807 の間、つまり符号付き 64 ビット整数でなければならりません。そうでない場合、エラー応答が返されます。

:::

Examples:

- フィールドが存在しない場合、`dictionaryIncrement(cache, dict, field, 10)` はフィールドの値を 10 に設定する。
- フィールドが 5 の場合、`dictionaryIncrement(cache, dict, field, 10)` はフィールドの値を 15 に設定する。
- field = 'five' のとき、FailedPreconditionException エラーが返される。

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | キャッシュの名前                              |
| dictionaryName  | String       | 取得するDictionary項目の名前  |
| field           | String/Bytes | 取得するDictionary項目のフィールド名 |
| amount          | Integer      | 値に加える量。正の値、負の値、またはゼロを指定します。デフォルトは1。 |
| ttl             | [CollectionTTL object](./collection-ttl.md) | これはTTLコンストラクトとして戻ってきます |

<details>
  <summary>Method response object</summary>

* Success
    - `value()`: integer - the new value after incrementing
    - `toString()`: String - displays the value()
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</details>

<SdkExampleTabs snippetId={'API_DictionaryIncrement'} />

### DictionaryRemoveField

Dictionary項目からフィールドを削除する。

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | キャッシュの名前                           |
| dictionaryName  | String       | 取得するDictionary項目の名前 |
| field           | String/Bytes | 取得するDictionary項目のフィールド名 |

<details>
  <summary>Method response object</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</details>

<SdkExampleTabs snippetId={'API_DictionaryRemoveField'} />

### DictionaryRemoveFields
Dictionary項目から複数のフィールドを削除します。

| Name            | Type             | Description                                   |
| --------------- | ------------     | --------------------------------------------- |
| cacheName       | String           | キャッシュの名前                            |
| dictionaryName  | String           | 取得するDictionary項目の名前 |
| fields          | String[]/Bytes[] | 取得するDictionary項目のフィールド名 |

<details>
  <summary>Method response object</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</details>

<SdkExampleTabs snippetId={'API_DictionaryRemoveFields'} />

### DictionarySetField
既存のDictionary項目のフィールド:値のペアを設定します。辞書項目が存在しない場合は、新しいフィールド:値のペアで作成されます。

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | キャッシュの名前                            |
| dictionaryName  | String       | 設定するDictionary項目名。 |
| field           | String/Bytes | 設定する辞書項目のフィールド名 |
| value           | String/Bytes | 設定するフィールドの値 |
| ttl             | [CollectionTTL object](./collection-ttl.md) | キャッシュ内のDictionary項目の TTL。このTTLは、キャッシュ・クライアントを初期化するときに使用されるTTLよりも優先されます。 |

<details>
  <summary>Method response object</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</details>

<SdkExampleTabs snippetId={'API_DictionarySetField'} />

### DictionarySetFields
Dictionary項目に複数のフィールド:値のペアを設定します。辞書項目が存在しない場合は、新しいフィールドで作成されます。

| Name            | Type         | Description                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | キャッシュの名前                           |
| dictionaryName  | String       | 設定するDictionary項目名 |
| fields          | String[]/Bytes[] | セット操作によってDictionary項目に追加されるフィールド：値のペア。|
| ttl             | [CollectionTTL object](./collection-ttl.md) | キャッシュ内のDictionary項目の TTL。このTTLは、キャッシュ・クライアントを初期化するときに使用されるTTLよりも優先されます。 |

<details>
  <summary>Method response object</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</details>

<SdkExampleTabs snippetId={'API_DictionarySetFields'} />

### DictionaryLength
既存のDictionary項目の長さを取得します

| Name           | Type         | Description                                |
|----------------| ------------ |--------------------------------------------|
| cacheName      | String       | キャッシュの名前                        |
| dictionaryName | String       | チェックするDictionary項目名 |

<details>
  <summary>Method response object</summary>

* Hit
  * `length()`: Number
* Miss
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</details>

<SdkExampleTabs snippetId={'API_DictionaryLength'} />
