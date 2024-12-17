---
sidebar_position: 2
sidebar_label: Lists
title: List API リファレンス
description: Momento Cache内のリストコレクションデータ型のAPIとのやり取り方法を学びましょう。
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# List API reference for Momento Cache
このページでは、[リストコレクションデータ型](../basics/datatypes.md#lists)の Momento API メソッドの詳細を説明しています。

<br />

:::info

Momentoコレクションタイプは、[CollectionTTL](./collection-ttl.md)を使用してTTL動作を指定します。これは、すべての "write" 操作のオプション引数です。

:::

## List methods

### ListFetch

キャッシュからリストアイテムを取得し、オプションでスライスを指定します。

| 名前       | 型   | 説明                                                                 |
|------------|--------|-----------------------------------------------------------------------------|
| cacheName  | String | キャッシュの名前。                                                          |
| listName   | String | 取得するリストアイテムの名前。                                  |
| startIndex | Number | 取得するリストの開始位置（含む要素）。デフォルトは0です。 **この引数はオプションです。** |
| endIndex   | Number | 取得するリストの終了位置（含まない要素）。デフォルトはリストの末尾です。 **この引数はオプションです。**|

<details>
  <summary>Method response object</summary>

ListFetch のレスポンスオブジェクトには、キャッシュのヒット、ミス、またはエラーの3つの可能なオプションがあります。

* Hit
    * valueListBytes(): Bytes[]
    * valueListString(): String[]
    * toString(): String - valueListString() のトランケーションされた値を表示します。[詳細は、トランケーションを参照してください。](#truncate-to-size)
* Miss
* Error

特定の情報については、 [レスポンスオブジェクト](./response-objects.md) を参照してください。

</details>

<SdkExampleTabs snippetId={'API_ListFetch'} />

### ListConcatenateBack
指定されたリストを既存のリストアイテムの末尾に追加します。

例:

もし[1, 2, 3]と listConcatenateBack [4, 5, 6]がある場合、[1, 2, 3, 4, 5, 6]となります。

| 名前            | 型                | 説明                                   |
| --------------- | ------------------- | --------------------------------------------- |
| cacheName       | String              | キャッシュの名前。                            |
| listName        | String              | 設定するリストアイテムの名前。                  |
| values          | String[] \| Bytes[] | リストアイテムに追加する要素としての値。          |
| ttl             | [CollectionTTL object](./collection-ttl.md) | キャッシュ内のリストアイテムの TTL（有効期限）。この TTL は、キャッシュクライアント接続オブジェクトを初期化する際に使用される TTL よりも優先されます。 |
| truncateFrontToSize | Number | [truncate to size](#truncate-to-size)を確認してください。 |

<details>
  <summary>Method response object</summary>

* Success
    * `listLength()`: Number - リストの新しい長さ
    * `toString()`: String - listLength を追加
* Error

特定の情報については、 [レスポンスオブジェクト](./response-objects.md) を参照してください。

</details>

<SdkExampleTabs snippetId={'API_ListConcatenateBack'} />

### ListConcatenateFront
既存のリストアイテムの前に指定されたリストを追加します。

例:

もし [1, 2, 3] があり、listConcatenateFront に [4, 5, 6] を追加すると、[4, 5, 6, 1, 2, 3] になります。

| 名前            | 型         | 説明                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | キャッシュの名前。                          |
| listName        | String       | 設定するリストアイテムの名前。             |
| values          | String[] \| Bytes[] | リストアイテムに追加される要素の値。|
| ttl          | [CollectionTTL object](./collection-ttl.md) | キャッシュ内のリストアイテムの TTL（Time To Live）。この TTL は、キャッシュクライアントを初期化する際に使用される TTL よりも優先されます。 |
| truncateBackToSize | Number | [truncate to size](#truncate-to-size)を確認してください。 |

<details>
  <summary>Method response object</summary>

* Success
    * `listLength()`: Number - リストアイテムの新しい長さ
    * `toString()`: String - listLength を追加。
* Error

特定の情報については、 [レスポンスオブジェクト](./response-objects.md) を参照してください。

</details>

<SdkExampleTabs snippetId={'API_ListConcatenateFront'} />

### ListLength
既存のリストアイテムの長さを取得します。

| 名前            | 型         | 説明                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | キャッシュの名前。                            |
| listName        | String       | 確認するリストアイテムの名前です。         |

<details>
  <summary>Method response object</summary>

* Hit
    * `length()`: Number
* Miss
* Error

特定の情報については、 [レスポンスオブジェクト](./response-objects.md) を参照してください。

</details>

<SdkExampleTabs snippetId={'API_ListLength'} />

### ListPopBack
リストアイテムから最後の要素を削除して返します。

| 名前            | 型         | 説明                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | キャッシュの名前。                            |
| listName        | String       | 削除して返すリストアイテムの名前です。        |

<details>
  <summary>Method response object</summary>

* Hit
    * `valueString()`: String
    * `valueBytes()`: Bytes
    * `toString()`: 切り詰められた valueString() です。
* Miss
* Error

特定の情報については、 [レスポンスオブジェクト](./response-objects.md) を参照してください。

</details>

<SdkExampleTabs snippetId={'API_ListPopBack'} />

### ListPopFront
リストアイテムから最初の要素を削除して返します。

| 名前            | 型         | 説明                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | キャッシュの名前。                            |
| listName        | String       | 取得するリストアイテムの名前。        |

<details>
  <summary>Method response object</summary>

* Hit
    * `valueString()`: String
    * `valueBytes()`: Bytes
    * `toString()`: 切り詰められた valueString() です。
* Miss
* Error

特定の情報については、 [レスポンスオブジェクト](./response-objects.md) を参照してください。

</details>

<SdkExampleTabs snippetId={'API_ListPopFront'} />

### ListPushBack
リストアイテムの末尾に値を追加します。これは、[ListConcatenateBack](#listconcatenateback) に単一の値を渡すのとまったく同じです。

| 名前            | 型            | 説明                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | キャッシュの名前です。                            |
| listName        | String          | 設定するリストの名前です。                   |
| value           | String \| Bytes | 追加する値です。              |
| ttl             | [CollectionTTL object](./collection-ttl.md) | キャッシュ内のリストアイテムの TTL（Time To Live）です。この TTL は、キャッシュ接続クライアントの初期化時に使用される TTL より優先されます。 |
| truncateBackToSize | Number | [truncate to size](#truncate-to-size)を確認してください。 |

<details>
  <summary>Method response object</summary>

* Success
    * `listLength()`: Number - リストアイテムの新しい長さです。
    * `toString()`: String - listLengthを追加
* Error

特定の情報については、 [レスポンスオブジェクト](./response-objects.md) を参照してください。

</details>

<SdkExampleTabs snippetId={'API_ListPushBack'} />

### ListPushFront
リストアイテムの先頭に値を追加します。ListPushBack(#listpushback) と同様ですが、先頭に追加されます。

| 名前            | 型            | 説明                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | キャッシュの名前です。                            |
| listName        | String          | 設定するリストの名前です。 |
| value           | String \| Bytes | 操作によってリストアイテムに追加される値です。 |
| ttl             | [CollectionTTL object](./collection-ttl.md) | キャッシュ内のリストアイテムの TTL です。この TTL は、キャッシュ接続クライアントの初期化時に使用される TTL よりも優先されます。 |
| truncateBackToSize | Number | [truncate to size](#truncate-to-size)を確認してください。 |

<details>
  <summary>Method response object</summary>

* Success
    * `listLength()`: Number - リストアイテムの新しい長さです。
    * `toString()`: String - listLengthを追加
* Error

特定の情報については、 [レスポンスオブジェクト](./response-objects.md) を参照してください。

</details>

<SdkExampleTabs snippetId={'API_ListPushFront'} />

### ListRemoveValue
特定の値と等しいすべての要素をリストアイテムから削除します。

例

- もしリスト ['up', 'up', 'down', 'down', 'left', 'right'] があり、'up' を削除すると、リストは ['down', 'down', 'left', 'right'] になります。

| 名前            | 型            | 説明                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | キャッシュの名前。                            |
| listName        | String          | 設定するリストアイテムの名前。             |
| value           | String \| Bytes | 操作によってリストアイテムに追加される値。 |

<details>
  <summary>Method response object</summary>

Responses

* Success - 値が存在しない場合でも、指定した値をリストアイテムに追加します。
* Error

特定の情報については、 [レスポンスオブジェクト](./response-objects.md) を参照してください。

</details>

<SdkExampleTabs snippetId={'API_ListRemoveValue'} />

### ListRetain

指定されたリストに対して、開始位置（startIndex）を含み、終了位置（endIndex）を含まない範囲のスライスのみを保持します。この範囲外のアイテムはリストから削除されます。

例：
指定されたリストに対して、インデックス4から（startIndex）次の5つの要素を保持し、インデックス10で（endIndex）終わります。他の要素はすべて破棄されます。この例では、位置0〜3と9以上の要素が削除されます。

| 名前       | 型                                        | 説明                                                                                                              |
|------------|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| cacheName  | String                                      | キャッシュの名前。                                                                                                      |
| listName   | String                                      | 設定されるべきリストアイテムの名前。                                                                                         |
| startIndex | Number                                      | 保持するリストの開始位置（含む要素）です。デフォルトは0です。                                                      |
| endIndex   | Number                                      | 保持するリストの終了位置（含まない要素）です。デフォルトはリストの末尾です。                                              |
| ttl        | [CollectionTTL object](./collection-ttl.md) | キャッシュ内のリストアイテムの TTL（Time To Live）です。この TTL は、キャッシュ接続クライアントを初期化する際に使用される TTL よりも優先されます。

<details>
  <summary>Method response object</summary>

Responses

* Success - 値が存在しなくても、スライス範囲内のリストのみを保持します。
* Error

特定の情報については、 [レスポンスオブジェクト](./response-objects.md) を参照してください。

</details>

<SdkExampleTabs snippetId={'API_ListRetain'} />


## Truncate to size

[ListConcatenate](#listconcatenateback) や [ListPush](#listpushback) などの API 呼び出しには、トランケーションオプションがあります。要素を追加した後、リストのサイズがこの制限を超える場合、リストは切り詰められます。

例：リストが [1, 2, 3] で、ListConcatenateBack に [4, 5, 6] を使用し、truncateFrontToSize: 5 とすると、リストは [2, 3, 4, 5, 6] に切り詰められ、応答の ListLength は 5 になります。

例：リストが [1, 2, 3] で、ListConcatenateBack に [4, 5, 6] を使用し、truncateFrontToSize: 10 とすると、リストは切り詰められません。リストは [1, 2, 3, 4, 5, 6] となります。
