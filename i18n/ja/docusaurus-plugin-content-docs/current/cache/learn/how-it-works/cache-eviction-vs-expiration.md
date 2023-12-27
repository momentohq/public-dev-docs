---
sidebar_position: 4
sidebar_label: キャッシュの立ち退き vs 期限切れ
title: Cache eviction vs expiration
description: Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Serverless cache
---

# Cache evictionとcache expiration
データのライフサイクルは、キャッシュ管理システムの最も重要な側面の1つです。このページでは、キャッシュがこれを行う2つの手段、Cache evictionとcache expirationについて説明し、Momento Serverless Cacheがこれらの概念をどのように採用しているかについて詳しく説明します。

## キャッシュの立ち退きとは？
一般的なキャッシュ用語では、キャッシュの書き込みによってキャッシュ内のデータが利用可能なメモリストレージを超えることになり、キャッシュがスペースを確保するためにデータを削除（"evict"）しなければならないことをevictionといいます。例えば、キャッシュの構成によっては、この退避されるデータは使用頻度の低いデータであったり、別のアルゴリズムであったりする。キャッシュの実装によっては、メンテナンスウィンドウを実行するためにデータを退避させるものもあります。

## Momento Serverless Cache and eviction
Momento Serverless Cacheは、キャッシュミスをエラーと密接に関連付けます。そのため、このサービスはキャッシュからデータを退避させないように設計されています。データを退避させる代わりに、サービスのキャッシュノードの1つが容量に近づくと、サービスがお客様に代わって容量を追加するようにスケーリングし、キャッシュミス率を低く保つためにキーが透過的に再分配されます。

Momento Serverless Cacheにはメンテナンスウィンドウがありません。スケーリングやノード交換などの運用上の変更は、サービスによってバックグラウンドで自動的に処理されます。キャッシュのヒット率に影響を与えないよう、プレウォーミングプロセスが使用されます。

## Cache expiration
一般的なキャッシュ用語では、有効期限とは、各データの一部にTTL（time-to-live）値が含まれていることを指します。その時間が経過すると、サービスはキャッシュからデータを削除します。

Momento Serverless Cache がこのトピックをどのように扱うかについての具体的な情報は、[Time-to-Live (TTL) を設定してキャッシュからデータを失効させる](./expire-data-with-ttl) を参照してください。
