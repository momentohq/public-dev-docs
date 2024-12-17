---
sidebar_position: 10
sidebar_label: CollectionTTL object
title: CollectionTTL API reference
description: Learn how to interact with the CollectionTTL object in Momento Cache.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# CollectionTTL object API リファレンス

CollectionTtl型は、コレクションに対して書き込み操作を行うときに使用します。

コレクションを更新するときに、TTLを更新したいことがあります。また、TTLをそのままにしたい場合もあります。この場合
パラメータでこの動作を指定できます。

デフォルトの動作は、書き込み操作が発生するたびにコレクションTTLがリセットされることです。`dictionaryFetch`や`listLength`のような読み取り操作を行う場合は、CollectionTTLオブジェクトを指定することはできません。

Momento Cache での TTL の動作については、[Expire Data with TTL](../../learn/how-it-works/expire-data-with-ttl.md) を参照してください。

:::caution

CollectionTTLはコレクション全体のTTLを指定するもので、コレクション内の個々の要素のTTLを設定するためのものではありません。コレクションが期限切れにならなければ、コレクション内の要素は期限切れになりません。

:::

## Compatible data types

CollectionTTL オブジェクトは、以下の [コレクションデータ型](/cache/develop/basics/datatypes#collection-data-types-cdts) と互換性があります：

* [Dictionary](../api-reference/dictionary-collections.md)
* [List](../api-reference/list-collections.md)
* [Set](../api-reference/set-collections.md)
* [Sorted Set](../api-reference/sorted-set-collections.md)

下の図が示すように、コレクションは`elements`を含むことができる`items`とみなされます。

<img src="/img/collection_data_types.png" alt="Collection data types drawing | Momento Cache" width="80%"/>

## デフォルトの動作

- コレクションへの書き込み操作では、 `CollectionTtl` パラメータは省略可能です。
- コレクションTTLが指定されない場合、デフォルトの `CollectionTtl.fromCacheTtl()` が使用されます。この値はキャッシュクライアントで設定されているデフォルトのTTLです。
- コレクションのTTLは、コレクションが変更されるたびに更新されます。

## 例

デフォルト以外の動作が必要な場合は、コレクションの書き込み操作にCollectionTtlオブジェクトを指定できます。

書き込み操作時にコレクションをリフレッシュするTTLを明示的に指定するには、 `CollectionTtl.of()` を使用します：

<SdkExampleTabs snippetId={'API_CollectionTtlOf'} />

これは、コンストラクタを直接呼び出すのと同等の便利なメソッドです：

<SdkExampleTabs snippetId={'API_CollectionTtlNew'} />

コレクションが作成されたときだけTTLを設定し、それ以降の書き込みではリフレッシュしないようにしたい場合は、`withNoRefreshTtlOnUpdates()`を使用します：

<SdkExampleTabs snippetId={'API_CollectionTtlOfNoRefresh'} />

これもまた、コンストラクターを直接呼び出すのと同等の便利なメソッドです：

<SdkExampleTabs snippetId={'API_CollectionTtlNewNoRefresh'} />

## コンストラクタのパラメータ

- `ttl`: duration - (オプション)
    * TTL が与えられない場合、現在のクライアント接続オブジェクトに設定されている TTL が使用されます。
- `refreshTtl`: boolean = true - (オプション) * true を指定すると、コレクションの TTL は指定した値にリセットされます。
    * trueを指定すると、コレクションのTTLは指定された値にリセットされます。
    * falseに設定すると、コレクションに設定されている既存のTTLが保持されます。

## 追加のコンストラクター

- `fromCacheTtl()`： CollectionTtl - クライアントの TTL を使います。 `CollectionTtl(null, true)` と同じです。
- `of(ttl: duration)`： CollectionTtl - `CollectionTtl(ttl, true)`と同じです。
- `refreshTtlIfProvided(ttl?: duration)`： CollectionTtl - 値が指定された場合、コレクションのTTLをリフレッシュする。値が提供されない場合、TTLはリフレッシュされません。

## インスタンスメソッド

- `ttlSeconds()`: duration - TTL を秒で返します。
- `ttlMilliseconds()`: duration - TTL をミリ秒で返します。
- `refreshTtl()`: boolean - アイテムが変更された際に TTL を更新するかどうかを設定します。
- `withRefreshTtlOnUpdates()`： CollectionTtl - コピーで、リフレッシュは true です。
- `withNoRefreshTtlOnUpdates()`： CollectionTtl - コピーで、リフレッシュは false です。
- `toString()`: TTL (秒) と refreshTtl の設定を表示する。
