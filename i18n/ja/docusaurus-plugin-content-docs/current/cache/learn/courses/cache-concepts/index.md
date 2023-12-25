
---
sidebar_position: 1
sidebar_label: Cache Concepts
title: Cache concepts course
pagination_prev: null
description: This cache concepts course gets you going with what you need to know on the basics of caching data for your application.
---

# Course: Cache の概念

このビギナー・キャッシング・コースでは、以下のようなトピックを扱います：

- キャッシングとはなにか
- なぜそれが必要か
- なぜサーバレスがキャッシュに適しているのか
- どのようにキャッシュは動作するのか
- キャッシュの戦略
- それらの戦略を同実装するか
- Time to live (TTL)
- キャッシュの立ち消えとキャッシュの期限切れ

## 動画
このイントロビデオ（1:38）は、あなたのアーキテクチャでキャッシングを始めるために必要な情報を説明しています。

<iframe width="560" height="315" src="https://www.youtube.com/embed/yErvJ2Bv6dY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## トランスクリプト

キャッシングを扱ったことがない方、基本を再確認したい方に最適です。このコースでは、キャッシングとは何か、なぜ重要なのか、なぜサーバーレスサービスがキャッシングに適しているのかを学びます。また、キャッシングがどのように機能するのか、キャッシング戦略とアプリケーション・アーキテクチャにどのように採用するのかという基本についても説明します。

キャッシュとは何かについて説明しよう。キャッシングとは、ソフトウェア開発において、頻繁に使用されるデータを一時的な記憶領域に保存し、アプリケーションのパフォーマンスを高速化するために使用されるテクニックです。記憶領域は、インメモリであったり、ローカルのディスクベースのストレージであったり、分散キャッシュサービスであったりします。アプリケーション・キャッシングの目的は、アプリケーションがデータベース、API、リモート・サービスなどの低速なストレージ・システムからデータを取得する回数を減らし、データが必要な場所に近いキャッシュからデータを取得することです。

アプリケーションのキャッシュは、データベースのクエリ結果、APIのレスポンス、画像、その他のデータなど、さまざまなデータを保存するために使用できます。これらのデータをキャッシュすることで、アプリケーションはデータの取得にかかる時間を短縮し、アプリケーションの全体的なエクスペリエンスを向上させることができます。

使用するキャッシング・テクノロジーの選択は、アプリケーションの特定のニーズといくつかの選択基準に依存します。この知識をもとに、さらに話を進めていきましょう。
