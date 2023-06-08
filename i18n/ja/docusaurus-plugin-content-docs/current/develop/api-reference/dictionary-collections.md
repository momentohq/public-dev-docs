---
sidebar_position: 1
sidebar_label: Dictionary
title: Dictionary API リファレンス
説明: Momento Cacheのコレクションdictionaryの使い方を学ぼう。
slug: /develop/api-reference/collections/dictionary
---

# Momento CacheのDictionary APIリファレンス
このページでは、Dictionary[コレクションデータ型](./../datatypes.md#dictionary-collections)のMomento APIメソッドについて詳しく説明します。

## Dictionaryのメソッド

### DictionaryFetch

cacheからDictionaryを取得します。

| 名前            | 型   | 説明                                   |
| --------------- | ------ | --------------------------------------------- |
| cache名前       | String | 名前 of the cache.                            |
| dictionaryName  | String | 取得するDictionaryの名前。 |

<details>
  <summary>メソッドのレスポンスオブジェクト </summary>

DictionaryFetchで返却されるレスポンスオブジェクトの種類は３つあります。cache hit、miss、errorです。

* Cache hit
    - `valueDictionaryBytesBytes()`: Map<Bytes, Bytes>
    - `valueDictionaryStringString()`: Map<String, String>
    - `valueDictionaryStringBytes()`: Map<String, Bytes>
    - `valueDictionaryBytesString()`: Map<Bytes, String>
    - `toString()`: String - 省略されたfield/valueのペアを表示します。
* Cache miss
* Cache error

具体的な情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_DictionaryFetch'} />

### DictionaryGetField
cache内のDictionaryアイテムから1つのfieldを取得します。

| 名前            | 型         | 説明                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Cacheの名前。                           |
| dictionaryName  | String       | 取得するDictionaryの名前。 |
| field           | String/Bytes | 取得するDictionary内のfieldの名前。 |

<details>
  <summary>メソッドのレスポンスオブジェクト </summary>

* Cache hit
    - `fieldString()`: String
    - `fieldBytes()`: Bytes
    - `valueString()`: String
    - `valueBytes()`: Bytes

        これらはfieldとそれに対するvalueをdictionaryから返却します。

* Cache miss
    - `fieldString()`: String
    - `fieldBytes()`: Bytes

* Cache error
    - `fieldString()`: String
    - `fieldBytes()`: Bytes

具体的な情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_DictionaryGetField'} />

### DictionaryGetFields
cache内のDictionaryから1つ以上のfieldを取得します。

| 名前            | 型         | 説明                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Cacheの名前。                           |
| dictionaryName  | String       | 取得するDictionaryの名前。  |
| fields          | String[]/Bytes[] | 取得するDictionary内のfieldの名前。 |

<details>
  <summary>メソッドのレスポンスオブジェクト </summary>

* Cache hit
    - valueDictionaryBytesBytes(): Map<Bytes, Bytes>
    - valueDictionaryStringString(): Map<String, String>
    - valueDictionaryStringBytes(): Map<String, Bytes>
    - valueDictionaryBytesString(): Map<Bytes, String>
    - toString(): String - valueDictionaryStringString()の省略版を表示します。
* Cache miss
* Error

具体的な情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_DictionaryGetFields'} />

### DictionaryIncrement
既存の値が基数10の整数を表すUTF-8文字列である場合に限り、fieldの値に追加します。 fieldがDictionaryにない場合、このメソッドはfieldの値を増分量に設定します。

:::注記

結果として得られる増分値は、-9223372036854775808 から 9223372036854775807 の間でなければなりません。 つまり64ビットの符号付き整数です。 そうでない場合は、エラー応答が返されます。

:::

例:

- fieldが存在しない場合、 `dictionaryIncrement(cache, dict, field, 10)` はfieldの値を10に設定します。
- field = 5,の場合、 `dictionaryIncrement(cache, dict, field, 10)`はfieldの値を15に設定します。
- field = ‘five’、FailedPreconditionException エラーで応答します。

| 名前            | 型         | 説明                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Cacheの名前。                           |
| dictionaryName  | String       | 取得するDictionaryの名前。  |
| field           | String/Bytes | 取得するDictionary内のfieldの名前。 |
| amount          | Integer      | 値に追加する数量。 正、負、またはゼロの場合があります。 デフォルトは 1 です。 |
| ttl             | [CollectionTTL object](./collection-ttl.md) | これはTTLコンストラクトとして返されます。 |

<details>
  <summary>メソッドのレスポンスオブジェクト </summary>

* Success
    - `value()`: integer - 追加が行われた後の新しい値
    - `toString()`: String - value()を表示します
* Error

具体的な情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_DictionaryIncrement'} />

### DictionaryRemoveField

Dictionaryアイテムからfieldを削除します。

| 名前            | 型         | 説明                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Cacheの名前。                            |
| dictionaryName  | String       | 取得するDictionaryの名前。 |
| field           | String/Bytes | 取得するDictionary内のfieldの名前。 |

<details>
  <summary>メソッドのレスポンスオブジェクト </summary>

* Success
* Error

具体的な情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_DictionaryRemoveField'} />

### DictionaryRemoveFields
Dictionaryアイテムから複数のfieldを削除します。

| 名前            | 型             | 説明                                   |
| --------------- | ------------     | --------------------------------------------- |
| cacheName       | String           | Cacheの名前。                           |
| dictionaryName  | String           | 取得するDictionaryの名前。 |
| fields          | String[]/Bytes[] | 取得するDictionary内のfieldの名前。 |

<details>
  <summary>メソッドのレスポンスオブジェクト </summary>

* Success
* Error

具体的な情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_DictionaryRemoveFields'} />

### DictionarySetField
既存のDictionaryにfield:value ペアを設定します。 Dictionaryが存在しない場合は、新しいfield:valueのペアで作成されます。

| 名前            | 型         | 説明                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Cacheの名前。                            |
| dictionaryName  | String       | Dictionaryの名前。 |
| field           | String/Bytes | 設定するDictionaryのfieldの名前。 |
| value           | String/Bytes | 設定するfieldの値。 |
| ttl             | [CollectionTTL object](./collection-ttl.md) | Cache内のDictionaryのTTL。このTTL はCacheクライアントの初期化時に使用されるTTLよりも優先されます。 |

<details>
  <summary>メソッドのレスポンスオブジェクト </summary>

* Success
* Error

具体的な情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_DictionarySetField'} />

### DictionarySetFields
Dictionaryに複数のfield:valueのペアを設定します。 Dictionaryアイテムが存在しない場合は、新しいfieldを使用して作成されます。

| 名前            | 型         | 説明                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | Cacheの名前。                            |
| dictionaryName  | String       | Dictionaryの名前。 |
| fields          | String[]/Bytes[] | 設定操作によってディクショナリ項目に追加されるfield:valueのペア。 |
| ttl             | [CollectionTTL object](./collection-ttl.md) | Cache内のDictionaryのTTL。このTTLはCacheクライアントの初期化時に使用されるTTLよりも優先されます。 |

<details>
  <summary>メソッドのレスポンスオブジェクト </summary>

* Success
* Error

具体的な情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_DictionarySetFields'} />

### DictionaryLength
既存のDictionaryの長さを取得します

| 名前           | 型         | 説明                                |
|----------------| ------------ |--------------------------------------------|
| cacheName      | String       | Cacheの名前。                         |
| dictionaryName | String       | Dictionaryの名前。 |

<details>
  <summary>メソッドのレスポンスオブジェクト </summary>

* Hit
  * `length()`: Number
* Miss
* Error

具体的な情報については、[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_DictionaryLength'} />
