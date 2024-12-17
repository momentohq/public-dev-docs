---
sidebar_position: 10
sidebar_label: SDK クライエント Configuration オブジェクト
title: SDK クライエント Configuration オブジェクト
description: Confugiration オブジェクトを使用して Momento SDK クライエントをイニシャライズする方法を説明しています。
pagination_prev: null
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# SDKクライアントConfigurationオブジェクト

`Configuration` オブジェクトには、Momento クライアントが Momento サービスに接続するために必要な設定が含まれます。`Configuration` オブジェクトは、タイムアウト、再試行、ロギング、ミドルウェア、[read concern] (../../learn/how--it-works/read-concern) などの設定を制御します。

各SDKには、できるだけ早く立ち上げて実行できるように、あらかじめ`Configuration`オブジェクトが含まれています。様々なデプロイ環境に対応するためのチューニングは私たちが行います。(それについてのブログシリーズもあります！[衝撃的なほどシンプル：あなたのために大変な仕事をするキャッシュクライアント](https://www.gomomento.com/blog/shockingly-simple-cache-clients-that-do-the-hard-work-for-you))

ビルド済みのコンフィギュレーションには `latest()` バージョンが付属しており、与えられた環境に対して常に最新の推奨コンフィギュレーションを提供します。例えば

<SdkExampleTabs snippetId={'API_ConfigurationInRegionDefaultLatest'} />

`latest()`のビルド済みコンフィギュレーションは、SDKのリリース間で変更される可能性があります。SDKのアップグレードによって設定が変更されないようにしたい場合は、リリースごとに固定されることが保証されている `v1()` のような固定バージョンを提供しています。例えば

<SdkExampleTabs snippetId={'API_ConfigurationInRegionDefault'} />

カスタムコンフィギュレーションが必要な場合は、独自の `Configuration` オブジェクトを構築することができます。どのように構築するかは、各SDKのソースコードの `Configurations` 名前空間にあるサンプルを参照してください。

これらの構成がほとんどのユースケースのニーズを満たすことを期待していますが、もし何か不足している点がありましたら、そのSDKのレポにGitHub issueを開くか、`support@momentohq.com`までご連絡ください。あなたのユースケースについてぜひお聞かせください。そうすれば、ビルド済みのコンフィギュレーションを修正したり拡張したりして、より良いサポートを提供できるようになります。

## ビルド済みコンフィギュレーション

以下は、興味があるかもしれません。あらかじめ構築されたコンフィギュレーションの一部です。

### Laptop

`Configurations.Laptop`は開発環境です。タイムアウトが緩やかで、ネットワークのレイテンシが少し高いことを想定しています。

<SdkExampleTabs snippetId={'API_ConfigurationLaptop'} />

### Browser

`Configurations.Browser`は[web SDK](/platform/sdks/web/index.md)独自の設定です。個々のユーザーのブラウザでレイテンシが大きく変動する可能性があるため、タイムアウトの設定が緩和されています。

### InRegion - Default

`Configurations.InRegion.Default`は、同じクラウドプロバイダのリージョンでホストされているアプリからMomentoサービスにリクエストを送信するような、ほとんどのサーバーサイドのユースケースで推奨される設定です。Laptop 設定よりもタイムアウトや再試行が積極的なので、より早く失敗し、アプリケーションをデータベースや他のデータソースに素早くフォールバックさせることができます。このため、ネットワークやサービスの中断時に、アプリケーションがMomento上でボトルネックになることはありません。

<SdkExampleTabs snippetId={'API_ConfigurationInRegionDefault'} />

### InRegion - Low Latency

`Configurations.InRegion.LowLatency`はp99.9のレイテンシを可能な限り低く保つことを優先する設定です。InRegion.Default`の設定よりも早くタイムアウトします。キャッシュが利用できない場合に、アプリケーションにとって許容できないほど高いレイテンシが発生しないようにすることが最も重要であり、キャッシュが応答しなかった場合にアプリケーションロジックまたは信頼できるデータソースにより迅速にフォールバックしたい場合は、この設定を使用します。

<SdkExampleTabs snippetId={'API_ConfigurationInRegionLowLatency'} />

### Lambda

`Configurations.Lambda` は一部の SDK で利用可能な設定で、AWS Lambda 環境に最適化されています。Lambda 関数のコールドスタート時にクライアントを事前にウォームアップしたり、Lambda 関数のアイドル状態が長く続いて接続がタイムアウトした場合にプロアクティブに接続が再確立されるように設計されています。

<SdkExampleTabs snippetId={'API_ConfigurationLambda'} />
