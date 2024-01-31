---
sidebar_position: 1
sidebar_label: Momento Topics
title: Topics
pagination_prev: null
description: Learn about Momento Topics, a high-speed, low-drag serverless pub/sub (publish/subscribe) messaging pattern for real-time application communication.
hide_title: true
keywords:
  - momento
  - topics
  - event-driven architecture
  - eda
  - websockets
  - real-time
  - serverless
---

# Momento Topicsとは何ですか？

Momento Topics は、高速でドラッグの少ないサーバーレスの pub/sub (パブリッシュ/サブスクライブ) メッセージングパターンで、分散システムの各パート間のリアルタイム通信を可能にします。アプリのパブリッシャーから送信されたアイテムを受信するために、アプリが *topic*、つまり専用のチャネルをサブスクライブすることを可能にします。Momento Topics サービスはサーバーレスであるため、インフラストラクチャを作成したり管理したりする必要はなく、パブ/サブトピックをインスタンス化する必要もありません。トピックにアイテムをパブリッシュすると、そのアイテムがまだ存在しない場合はトピックが作成されます。トピックはMomento Cacheを利用するため、スケーリング設定も不要です。課金されるのは、サービスの[データの出し入れ](./manage/pricing.md)だけです。

## Momento Topics はどのように動きますか？

Momento Topicsは、分散システムの異なる部分間の効率的なリアルタイム通信を可能にするサーバーレスサービスです。pub/sub サービスは非連結アーキテクチャを促進し、パブリッシャー (プロデューサー) はサブスクライバー (コンシューマー) の身元や場所を知ることなく、特定のトピックにアイテムを送信します。サブスクライバーは、関心のある1つまたは複数のトピック上のアイテムをリッスンし、パブリッシャーによってそれらのトピックに公開されたすべてのアイテムを受信します。

このトピックベースのコミュニケーションは、効果的なルーティングとフィルタリングを可能にし、購読者は購読したトピックに関連するアイテムのみを受信するため、特定のトピックに集中することができます。このアプローチは、チャットシステム、通知、データストリーミングなどのリアルタイムアプリケーションの実装を簡素化します。

Momento Topicsはfire-and-forgetメッセージングモデルで動作します。つまり、アイテムが公開されると、トピックの現在のサブスクライバすべてに即座に送信され、その後破棄されます。アイテムの永続性や配信の保証は組み込まれていません。そのため、Momento Topics は低レイテンシが重要で、アイテムの紛失が許容されるアプリケーションに最適です。

:::note

Momento TopicsはMomento Cacheをバックエンドとして使用するため、既存のキャッシュを使用するか、Momento Cacheで新しいキャッシュを作成し、[Momento Topics publish and subscribe API](./develop/api-reference/index.md)を呼び出します。

:::

## Momento Topics はどこで利用できますか？

Momento Topics は、チャネルとコネクションを処理してくれるマネージドウェブソケットサービスのようなものだと考えることができます。

![A diagram showing service-to-service, service-to-browser, and browser-to-browser connectivity with Topics](@site/static/img/topics-connections.png)

### ブラウザやモバイルアプリからの接続

ブラウザーでも、iOS や Android デバイスでも、フロントエンド SDK を使用して、Topic の公開と購読の両方を行うことができます。Topic にデータを公開すると、すべての購読者がデータを受信します。つまり、サーバー側のインフラストラクチャを構築することなく、ブラウザ同士を接続できます！

* [Momento Web SDK](/sdks/web/index.md) (for JavaScript browser apps)
* [Momento Swift SDK](/sdks/swift/index.md) (for native iOS apps)
* [Momento Kotlin SDK](/sdks/kotlin/index.md) (for native Android apps)
* [Momento Dart SDK](/sdks/dart/index.md) (for Flutter apps)

### サーバーからの接続

また、バックエンドサービスでトピックを公開したり購読したりすることもできます。サーバーサイド開発をサポートするSDKはこちらです：

* [Momento Node.js SDK](/sdks/nodejs/index.md)
* [Momento Go SDK](/sdks/go/index.md)
* [Momento Java SDK](/sdks/java/index.md)
* [Momento Kotlin SDK](/sdks/kotlin/index.md)
* [Momento Python SDK](/sdks/python/index.md)
* [Momento .NET SDK](/sdks/dotnet/index.md)

:::note

注意点として、Momento Topicsはサブスクライバにステートフルな接続を要求するため、LambdaやCloudflare Workerのようなサーバレスファンクションには最適ではないです。しかし、データを公開するのであれば、完全にステートレスなので、関数で完璧に動作します。

:::

## 例

- [サーバーレスでアイテムをパブリッシングするマイクロサービス](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/lambda-examples/topics-microservice) このマイクロサービスはTypeScriptで書かれ、API Gateway、Lambda関数、Momento Topicsを使ってAWS上で実行されます。(API Gateway上で適切なセキュリティが設定されていれば)他のサービスでも利用することができ、様々なトピックにメッセージを発行して他のアプリケーションからサブスクライブさせることができます。この API に `topicName` と `topicValue` を渡すと、このサービスはその値をトピックに発行します。

- [Next.jsのチャットアプリケーションでTopicsを使う](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat) このアプリケーションは、Next.jsフレームワークを使ってTypeScriptで書かれています。ユーザーはキャッシュとトピック名を使って、参加するチャットルームを選択します。ブラウザがトピックを購読するために使用する、ロースコープで短命なトークンをフロントエンドに配布するAPIがあります。トークンの有効期限が切れると、フロントエンドはAPIを呼び出して新しいトークンを取得し、自動的にトピックに再登録する。このアプリケーションには[静的バージョン](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/vite-chat-app)もあり、フロントエンドにトークンを提供するAPIが必要です。

## 投稿されたブログ

- [Momento Topicsのご紹介](https://www.gomomento.com/blog/momento-just-got-more-powerful-introducing-topics) - シンプルな価格で、大規模なスケールに対応する完全サーバーレスのイベントメッセージングシステムです。
- [Momento Topicsによるイベントルーティング](https://www.gomomento.com/blog/build-on-momento-event-routing-with-momento-topics) - Momento Topicsを使用することで、いかに簡単にイベントをアーキテクチャに導入できるかをご覧ください。
- [WebSocketはなぜ難しいのか](https://www.gomomento.com/blog/why-are-websockets-so-hard) - WebSocketが難しい理由と、Momento Topicsがそれを解決する方法を紹介します。

## Momento Topics のAPIコール

[TopicsのAPIリファレンスページ](./develop/api-reference/index.md)を参照。

## Momento Topicsの言語サポート
[言語サポートページ](./develop/language-support/language-support.md)で、さまざまなプログラミング言語で利用可能なSDKの詳細をご覧ください。


## デモ

Topicsを試してみませんか？[Momento Console](https://console.gomomento.com/topics)で直接無料でお試しいただけます。リージョンとキャッシュを選択し、トピック名を入力して、メッセージの送信を開始します！

## Momento Topicsに関するよくある質問

<details>
  <summary>アイテムが公開された後にアプリがTopicsをサブスクライブした場合でも、そのアイテムを入手できますか？</summary>
いいえ。サブスクライバーは、Topicsのアイテムの履歴にアクセスできません。
</details>
