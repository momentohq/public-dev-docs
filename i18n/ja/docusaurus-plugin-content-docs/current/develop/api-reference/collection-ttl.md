---
sidebar_position: 10
sidebar_label: CollectionTTL object
title: CollectionTTL API リファレンス
description: Momento Cache の CollectionTTL オブジェクトとのやり取り方法を学びましょう。
slug: /develop/api-reference/collections/collectionttl
---

# CollectionTTL object API reference

このオブジェクトは、API メソッドに渡され、TTL を更新するかどうか、そして更新する場合は新しい TTL 値を何にするかを指定します。

さまざまな状況に対応するために、名前付きのコンストラクタとコピーを提供することで、プロセスをより直感的に試せます。

Momento Cache における TTL の仕組みについての詳細情報は、[TTL を使用したデータの有効期限切れ](../../../learn/how-it-works/expire-data-with-ttl)を参照してください。こちらのドキュメントでは、Momento Cache において TTL がデータの有効期限管理にどのように機能するかについて詳しく説明されています。

## Common method behaviors

- もしも関数呼び出し時に CollectionTTL が指定されていない場合、デフォルト値として `CollectionTtl.fromCacheTtl()` が使用されます。この値はキャッシュクライアントに設定された TTL です。

- コレクションが変更されるたびに、コレクションの TTL は更新されます。

## Constructor parameters

- ttl: duration - (optional)
    * もし TTL が指定されていない場合、現在のクライアントに接続されているオブジェクトで設定されている TTL が使用されます。
- refreshTtl: boolean = true
    * もし true に設定されている場合、コレクションの TTL は提供された値にリセットされます。
    * もし false に設定されている場合、アイテムに設定されている既存の TTL は維持されます。

## Additional constructors

- fromCacheTtl(): CollectionTtl - クライアントの TTL を使用し、`CollectionTtl(null, true)` と同等の動作をします。
- of(ttl: duration): CollectionTtl - `CollectionTtl(ttl, true)` と同等の動作をします。
- refreshTtlIfProvided(ttl?: duration): CollectionTtl - もし値が指定されている場合、アイテムの TTL を更新します。値が指定されていない場合、TTL は更新されません。

## Instance methods

- ttlSeconds(): duration - TTL を秒単位で返します。
- ttlMilliseconds(): duration - TTL をミリ秒単位で返します。
- refreshTtl(): boolean - アイテムが変更された場合に TTL を更新するかどうかを設定します。
- withRefreshTtlOnUpdates(): CollectionTtl - コピーを作成しますが、リフレッシュは true です。
- withNoRefreshTtlOnUpdates(): CollectionTtl - コピーを作成しますが、リフレッシュは false です。
- toString(): TTL を秒単位で表示し、refreshTtl の設定を表示します。
