---
sidebar_position: 2
sidebar_label: SDK Configuration Objects
title: SDK configuration objects
description: Momento SDK クライアントの初期化に使用される設定オブジェクトの使い方
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# SDK Client configuration objects

![a technical illustration of Momento client configuration objects.](@site/static/img/client-configurations.jpg)

`Configuration` オブジェクトには、Momento クライアントが Momento サービスに接続するために必要な設定が含まれます。
`Configuration` オブジェクトは、タイムアウトや再試行、ロギング、ミドルウェアなどの設定を制御します。

各 SDK には、できるだけ早く立ち上げて実行できるように、あらかじめ `Configuration` オブジェクトが含まれています。様々なデプロイメント環境に対応するためのチューニングは私たちが行います。(それについてのブログシリーズもあります！[衝撃的なほどシンプル：あなたのために大変な仕事をするキャッシュクライアント](https://www.gomomento.com/blog/shockingly-simple-cache-clients-that-do-the-hard-work-for-you))

ビルド済みの `configurations` には `latest()` バージョンを持っていて、与えられた環境に対して常に最新の推奨されるの `configuration` を提供します。例えば

<SdkExampleTabs snippetId={'API_ConfigurationInRegionDefaultLatest'} />

`latest()` のビルド済み `configuration` は、SDK のリリースによって変更される可能性があります。SDK のアップグレードによって設定が変更されないようにしたい場合は、リリースごとに固定されることが保証されている `v1()` のような固定バージョンを提供しています。例えば

<SdkExampleTabs snippetId={'API_ConfigurationInRegionDefault'} />

カスタムの設定が必要な場合は、専用の `Configuration` オブジェクトを構築することもできます。各 SDK ソースコードの Configurations 名前空間にある例を見て、どのように構築されているかをご確認下さい。

これらの設定はほとんどのユースケースで必要となる要件を満たせていると思っていますが、もし何かしら欠けているものを見つけられた場合には、SDK のレポジトリに GitHub issue を作るか、support@momentohq.com へご連絡下さい。ぜひ皆さんのユースケースを聞いて、事前構築済の設定を修正したり拡張することで、より良いサポートを提供したいと考えています。

以下が、いくつかの事前構築済の設定です。

## Pre-built configurations

以下は、あらかじめ構築された `configuration` の一部です。

### Laptop

`Configurations.Laptop` は開発環境様で、ラップトップ上から使うためにあります。タイムアウトは緩めになっていて、ネットワークのレイテンシが多少大きいことを仮定しています。

<SdkExampleTabs snippetId={'API_ConfigurationLaptop'} />

### Browser

Configurations.Browser は [web SDK](../sdks/web/index.md) に特有の設定になっています。ユーザー毎にブラウザのレイテンシの振れ幅が大きいので、タイムアウト設定が緩めになっています。

### InRegion - Default

`Configurations.InRegion.Default` は、アプリケーションから同一のクラウドプロバイダーのリージョンにある Momento サービスにリクエストを送る、多くのサーバーサイドでのユースケースのための設定です。ラップトップ設定よりも積極的なタイムアウトとリトライの挙動が設定されているので、より早く失敗することでアプリケーションがデータベースや他のデータソースにより早くフォールバックできるようにしてくれています。これによって、ネットワークやサービスに問題があるときにアプリケーションが Momento でボトルネックにならないことを保証するのに役立ちます。

<SdkExampleTabs snippetId={'API_ConfigurationInRegionDefault'} />

### InRegion - Low Latency

`Configurations.InRegion.LowLatency` は p99.9 レイテンシを可能な限り低く保つことを優先した設定で、そのためにスループットを犠牲にしている可能性があります。InRegion.Default の設定よりも早くタイムアウトします。この設定は、キャッシュが利用できない時に許容できない程の大きなレイテンシを生まないことを保証することがアプリケーションの最も重要な要素で、もしキャッシュが反応しない時にアプリケーションロジックや権威あるデータソースにもっと早くフォールバックしたい時に利用して下さい。

<SdkExampleTabs snippetId={'API_ConfigurationInRegionLowLatency'} />

### Lambda

`Configurations.Lambda` はいくつかの SDK で利用可能な、AWS Lambda 環境に最適化された設定です。Lambda 関数のコールドスタートでクライアントを暖気する様に設計された設定を持ち、もし接続がタイムアウトするほど長く Lambda 関数がアイドル状態になった時は、接続が再度確立されていることを積極的に保証してくれます。

<SdkExampleTabs snippetId={'API_ConfigurationLambda'} />
