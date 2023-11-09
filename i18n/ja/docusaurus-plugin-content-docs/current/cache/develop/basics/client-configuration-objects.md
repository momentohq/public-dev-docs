---
sidebar_position: 10
sidebar_label: SDK Configuration Objects
sidebar_class_name: "sidebar-item-api-reference"
title: SDK configuration objects
description: Discover how to use configuration objects to initialize the Momento SDK client.
pagination_prev: null
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# SDK Client configuration objects

<img src="/img/client-configurations.jpg" width="90%" alt="a technical illustration of Momento client configuration objects." />

`Configuration` オブジェクトには、Momento クライアントが Momento サービスに接続するために必要な設定が含まれます。`Configuration` オブジェクトは、タイムアウト、再試行、ロギング、ミドルウェアなどの設定を制御します。

各 SDK には `Configuration` オブジェクトがあらかじめ用意されており、可能な限り素早く起動できるようになっています。様々なデプロイ環境に対応するためのチューニングは私たちが行っていますので、お客様はご自身のビジネスに特化したチューニングに専念することができます。(それについてのブログシリーズもあります！[驚くほどシンプル： あなたのために大変な仕事をするキャッシュクライアント](https://jp.gomomento.com/blog/shockingly-simple-cache-clients-that-do-the-hard-work-for-you/)

事前にビルドされた設定には `latest()` バージョンが付属しており、与えられた環境に対して常に最新の推奨設定が提供されます。例えば

<SdkExampleTabs snippetId={'API_ConfigurationInRegionDefaultLatest'} />

`latest()`のビルド済みコンフィギュレーションは、SDKのリリース間で変更される可能性があります。SDKのアップグレードによって設定が変更されないようにしたい場合は、リリースごとに固定されることが保証されている `v1()` のような固定バージョンを提供しています。例えば

<SdkExampleTabs snippetId={'API_ConfigurationInRegionDefault'} />

custom configuration が必要な場合は、独自の `Configuration` オブジェクトを構築することができます。どのように構築されるかは、各SDKのソースコードの `Configurations` 名前空間にあるサンプルを参照してください。

これらのconfigurationがほとんどのユースケースのニーズを満たすことを期待していますが、もしこれらのconfigurationに何らかの不足がある場合は、そのSDKのレポでGitHub issueを開いていただくか、`support@momentohq.com`までご連絡ください。あなたのユースケースについてぜひお聞かせください。そうすれば、ビルド済みのコンフィギュレーションを修正したり拡張したりして、より良いサポートを提供できるようになります。

## Pre-built configurations

以下は、ご興味をお持ちになるかもしれない、あらかじめ構築されたconfigurationの一部です。

### Laptop

`Configurations.Laptop`は開発環境です。タイムアウトが緩やかで、ネットワークのレイテンシが少し高いことを想定しています。

<SdkExampleTabs snippetId={'API_ConfigurationLaptop'} />

### Browser

`Configurations.Browser`は[web SDK](./../sdks/web)独自の設定です。個々のユーザーのブラウザでレイテンシが大きく変動する可能性があるため、タイムアウトの設定が緩和されています。

### InRegion - Default

`Configurations.InRegion.Default`は、同じクラウドプロバイダのリージョンでホストされているアプリからMomentoサービスにリクエストを送信するような、ほとんどのサーバーサイドのユースケースで推奨される設定です。Laptop 設定よりもタイムアウトや再試行が積極的なので、より早く失敗し、アプリケーションをデータベースや他のデータソースに素早くフォールバックさせることができます。このため、ネットワークやサービスの中断時に、アプリケーションがMomento上でボトルネックになることはありません。

<SdkExampleTabs snippetId={'API_ConfigurationInRegionDefault'} />

### InRegion - Low Latency

`Configurations.InRegion.LowLatency`はp99.9のレイテンシを可能な限り低く保つことを優先する設定です。`InRegion.Default`の設定よりも早くタイムアウトします。キャッシュが利用できない場合に、アプリケーションにとって許容できないほど高いレイテンシが発生しないようにすることが最も重要であり、キャッシュが応答しなかった場合にアプリケーションロジックまたは信頼できるデータソースにより迅速にフォールバックしたい場合は、この設定を使用します。

<SdkExampleTabs snippetId={'API_ConfigurationInRegionLowLatency'} />

### Lambda

`Configurations.Lambda` は一部の SDK で利用可能な設定で、AWS Lambda 環境に最適化されています。Lambda 関数のコールドスタート時にクライアントを事前にウォームアップしたり、Lambda 関数のアイドル状態が長く続いて接続がタイムアウトした場合にプロアクティブに接続が再確立されるように設計されています。

<SdkExampleTabs snippetId={'API_ConfigurationLambda'} />
