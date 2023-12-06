---
sidebar_position: 10
sidebar_label: CollectionTTL object
title: CollectionTTL API reference
description: Learn how to interact with the CollectionTTL object in Momento Cache.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# CollectionTTL オブジェクト API リファレンス

CollectionTtl型は、コレクションに対して書き込み操作を行うときに使用します。

コレクションを更新するときに、TTLを更新したいことがあります。また、TTLをそのままにしたい場合もあります。この場合、パラメータでこの動作を指定できます。

デフォルトの動作は、書き込み操作が発生するたびにコレクションのTTLが変更されます。

Momento CacheでのTTLの動作については、[Expire Data with TTL](./../../learn/how--it-works/expire-data-with-ttl.md) を参照してください。

## 互換性のあるデータ型

CollectionTTLオブジェクトは、以下のデータ型と互換性があります：

* [Dictionary](../api-reference/dictionary-collections.md)
* [List](../api-reference/list-collections.md)
* [Set](../api-reference/set-collections.md)
* [Sorted Set](../api-reference/sorted-set-collections.md)

:::info

`dictionaryFetch` や `listLength` のような読み取り操作を行う際には、CollectionTTL オブジェクトを指定することはできない。

:::

## デフォルトの動作

- コレクションへの書き込み操作では、 `CollectionTtl` パラメータは省略可能です。
- コレクションTTLが指定されない場合、デフォルトの `CollectionTtl.fromCacheTtl()` が使用される。この値はキャッシュクライアントで設定されているデフォルトのTTLです。
- コレクションのTTLは、コレクションが変更されるたびに更新されます。

## 例

デフォルト以外の動作が必要な場合は、コレクションの書き込み操作にCollectionTtlオブジェクトを指定できます。

書き込み操作時にコレクションをリフレッシュするTTLを明示的に指定するには、 `CollectionTtl.of()` を使用します：

<SdkExampleTabs snippetId={'API_CollectionTtlOf'} />

これは、コンストラクタを直接呼び出すのと同等の便利なメソッドです。:

<SdkExampleTabs snippetId={'API_CollectionTtlNew'} />

コレクションが作成されたときだけTTLを設定し、それ以降の書き込みではリフレッシュしないようにしたい場合は、`withNoRefreshTtlOnUpdates()`を使用します：

<SdkExampleTabs snippetId={'API_CollectionTtlOfNoRefresh'} />

これもまた、コンストラクターを直接呼び出すのと同等の便利なメソッドです。：

<SdkExampleTabs snippetId={'API_CollectionTtlNewNoRefresh'} />

## コンストラクタのパラメータ

- ttl: 期間 - (オプション)
    * TTL が与えられない場合、現在のクライアント接続オブジェクトに設定されている TTL が使用されます。
- refreshTtl: boolean = true。
    * trueに設定された場合、コレクションのTTLは指定された値にリセットされます。
    * falseに設定された場合、アイテムに設定された既存のTTLが保持されます。

## 追加のコンストラクタ

- fromCacheTtl() を使用します： CollectionTtl - クライアントの TTL を使用します。
- of(ttl: duration)： CollectionTtl - `CollectionTtl(ttl, true)`と同じです。
- refreshTtlIfProvided(ttl?: duration)： CollectionTtl - 値が提供された場合、アイテムのTTLを更新する。値が提供されない場合、TTLはリフレッシュされません。

## インスタンスメソッド

- ttlSeconds(): 期間 - TTL を秒単位で返します、
- ttlMilliseconds(): 持続時間 - TTL をミリ秒で返します。
- refreshTtl(): boolean - アイテムが変更されたときに TTL を更新するかどうかを設定します。
- withRefreshTtlOnUpdates()： CollectionTtl - コピーですが、リフレッシュは true です。
- withNoRefreshTtlOnUpdates()： CollectionTtl - コピーですが、リフレッシュは false です。
- toString(): TTL (秒) および refreshTtl 設定を表示します。
