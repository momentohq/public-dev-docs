---
sidebar_position: 4
sidebar_label: Cache eviction vs expiration
title: Cache eviction vs expiration
pagination_next: null
description: Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Cache
---

# Cache eviction と cache expiration

データのライフサイクルは、キャッシュ管理システムの最も重要な側面の1つです。このページでは、キャッシュがこれを行う2つの手段、キャッシュエビクションとキャッシュエクスパイアについて説明し、Momento Cacheがこれらの概念をどのように採用しているかについて詳しく説明します。

<iframe width="560" height="315" src="https://www.youtube.com/embed/76qpwvn262g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## キャッシュの立ち退き(eviction)とは？

一般的なキャッシュ用語では、キャッシュの書き込みによってキャッシュ内のデータが利用可能なメモリ・ストレージを超えることになり、キャッシュがスペースを確保するためにデータを削除（"evict"）しなければならないことをevictionといいます。例えば、キャッシュの構成によっては、この退避されるデータは使用頻度の低いデータであったり、別のアルゴリズムであったりします。キャッシュの実装によっては、メンテナンス・ウィンドウを実行するためにデータを退避させるものもあります。

## Momento Cache と 立ち退き(eviction)

Momentoは、キャッシュ退避をサービス品質低下の重要な指標と考えています。このサービスは継続的にこれを監視し、すべての顧客のためにバッファを維持するために容量を追加します。Momento Cacheのサービスレベルの目標は、すべてのキャッシュアイテムの有効期限のTTLを尊重し、データを退避させないことです。

Momento Cacheにはメンテナンスウィンドウがありません。スケーリングやノード交換などの運用上の変更は、サービスによってバックグラウンドで自動的に処理されます。キャッシュのヒット率に影響を与えないように、プリウォーミングプロセスが使用されます。

## Cache expiration

一般的なキャッシュ用語では、有効期限とは、各データの一部にTTL（time-to-live）値が含まれていることを指します。その時間が経過すると、サービスはキャッシュからデータを削除します。

Momento Cache がこのトピックをどのように扱うかについては、[Time-to-Live (TTL) を設定してキャッシュからデータを失効させる](./expire-data-with-ttl) を参照してください。
