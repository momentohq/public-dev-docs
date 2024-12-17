---
sidebar_position: 3
sidebar_label: Sets
title: Set API reference
description: Momento Cacheのセット・コレクション・データ型のAPIを操作する方法について説明します。
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Momento CacheのためのSet APIについて

:::info

Momentoコレクションタイプは、[CollectionTTL](./collection-ttl.md)を使用してTTL動作を指定します。これは、すべての "write" 操作のオプション引数です。

:::

集合は要素の集まりですが、各要素は一度しか現れず、順序は保証されません。
例: セットが `[1, 2, 3]` を含み、2 を追加してもセットは `[1, 2, 3].` のままです。

詳しくは、[Sets](../basics/datatypes.md#sets)を参照してください。

## Set methods

### SetAddElement
セットに要素を追加します。セット項目がまだ存在しない場合、このメソッドはそれを作成します。

| 名前            | 型            | 詳細                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | キャッシュの名前。                            |
| setName         | String          | 変更するセットアイテムの名前。 |
| element         | String \| Bytes | この操作によって追加される要素。 |
| ttl             | [CollectionTTL object](./collection-ttl.md) | キャッシュに設定された項目の TTLです。この TTL は、キャッシュ接続クライアントを初期化するときに使用される TTL よりも優先されます。 |

<details>
  <summary>Method response object</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SetAddElement'} />

### SetAddElements
Adds multiple elements to a set item.

| 名前            | 型            | 詳細                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | キャッシュの名前。                            |
| setName         | String       | 変更するセットアイテムの名前。 |
| elements        | String[] \| Bytes[] | この操作によって追加される要素。 |
| ttl          | [CollectionTTL object](./collection-ttl.md) | キャッシュに設定された項目の TTLです。この TTL は、キャッシュ接続クライアントを初期化するときに使用される TTL よりも優先されます。 |

<details>
  <summary>Method response object</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SetAddElements'} />

### SetFetch

Gets a set item from a cache.

| 名前            | 型            | 詳細                                   |
| --------------- | ------ | --------------------------------------------- |
| cacheName       | String | キャッシュの名前。                            |
| setName         | String | 取得するセットアイテムの名前。    |

<details>
  <summary>Method response object</summary>

SetFetch のレスポンスオブジェクトは、キャッシュヒット、ミス、エラーの3つの可能なオプションを返します。

* Hit
    * valueSetBytes(): Bytes[]
    * valueSetString(): String[]
    * toString(): String
* Miss
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SetFetch'} />

### SetSample

キャッシュ内のセット項目から要素のランダムサンプリングを取得します。

| Name      | Type   | Description                                     |
|-----------|--------|-------------------------------------------------|
| cacheName | String | キャッシュの名前                          |
| setName   | String | サンプリングするセット項目の名前          |
| limit     | Number | 取得する要素の最大数 |

<details>
  <summary>メソッド・レスポンス・オブジェクト</summary>

SetSampleのレスポンス・オブジェクトは、キャッシュ・ヒット、ミス、エラーの3つの可能なオプションを返します。

* Hit
  * valueSetBytes(): Bytes[]
  * valueSetString(): String[]
  * toString(): String
* Miss
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</details>

<SdkExampleTabs snippetId={'API_SetSample'} />

### SetRemoveElement
既存のセット項目から単一の要素を削除します。

| 名前            | 型            | 詳細                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | キャッシュの名前。                            |
| setName         | String          | 変更するセットアイテムの名前。           |
| element         | String \| Bytes | この操作によって削除される要素。  |

<details>
  <summary>Method response object</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SetRemoveElement'} />

### SetRemoveElements
既存のセットアイテムから複数の要素を削除します。

| 名前            | 型            | 詳細                                   |
| --------------- | ------------ | --------------------------------------------- |
| cacheName       | String       | キャッシュの名前。                            |
| setName         | String       | 変更するセットアイテムの名前。 |
| elements         | String[] \| Bytes[] | この操作によって削除される要素。   |

<details>
  <summary>Method response object</summary>

* Success
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SetRemoveElements'} />

### SetContainsElement
指定された要素が指定されたセットに含まれるかどうかを調べます。

| 名前            | 型            | 詳細                |
|-----------| --------------- |-----------------------|
| cacheName | String          | キャッシュの名前。    |
| setName   | String          | セットアイテムの名前。 |
| element   | String \| Bytes | 存在をチェックする要素の名前。  |

<details>
  <summary>Method response object</summary>

SetContainsElementのレスポンスオブジェクトは、キャッシュヒット、ミス、エラーの3つの可能なオプションを返します。

* Hit
  * containsElement(): bool
* Miss
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SetContainsElement'} />

### SetContainsElements
指定された要素が指定されたセットに含まれるかどうかをチェックします。

| 名前            | 型            | 詳細                         |
|-----------|------------|-------------------------------------|
| cacheName | String     | キャッシュの名前。                  |
| setName   | String     | セットアイテムの名前。 |
| elements  | String[] \| Bytes[]          | 存在をチェックする要素名の配列。  |

<details>
  <summary>Method response object</summary>

SetContainsElementsのレスポンスオブジェクトは、キャッシュヒット、ミス、エラーの3つの可能なオプションを返します。

* Hit
  * containsElements(): bool[]
* Miss
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SetContainsElements'} />

### SetLength
既存のセットアイテムの長さを取得します。

| 名前            | 型            | 詳細                           |
|-----------| ------------ |-------------------------------------|
| cacheName | String       | キャッシュの名前。                  |
| setName   | String       | チェックするセットアイテムの名前。 |

<details>
  <summary>Method response object</summary>

* Hit
  * `length()`: Number
* Miss
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_SetLength'} />
