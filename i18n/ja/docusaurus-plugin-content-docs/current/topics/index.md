---
sidebar_position: 1
sidebar_label: Overview
title: Momento Topics とは?
pagination_prev: null
description: リアルタイムなアプリケーション通信のための、最高に洗練されたサーバーレスのパブ/サブ (パブリッシュ/サブスクライブ) メッセージパターンである Momento Topics について学びましょう。
---

# Momento Topics とは？

Momento Topics は、最高に洗練されたサーバーレスの pub/sub (パブリッシュ/サブスクライブ) メッセージングパターンで、分散システム間のリアルタイム通信を可能にします。アプリのパブリッシャーから送信されたアイテムを受信するために、アプリが *topics*、つまり専用のチャネルでサブスクライブすることを可能にします。Momento Topics サービスはサーバーレスであるため、インフラストラクチャを作成したり管理したりする必要はなく、pub/subするトピックを作成する必要もありません。あるトピックにアイテムをパブリッシュすると、そのアイテムがまだ存在しない場合はトピックが自動的に作成されます。トピックはMomento Cacheを基盤として利用するため、スケーリング設定も不要です。

## Momento Topics はどの様に動作するのか？

Momento Topics はサーバーレスサービスで、分散システム間のリアルタイム通信を効率よく実行できるようにしてくれます。パブ/サブのサービスは疎結合なアーキテクチャに繋がっていて、そこではパブリッシャー(プロデューサー)はサブスクライバー(コンシューマー)が誰でどこにあるのかを全く知る必要なく、項目を特定のトピックに送り出します。サブスクライバーは1つ、もしくは複数の興味あるトピックから項目が来ないか聴いていて、あらゆるパブリッシャーからそれらのトピックにパブリッシュされた全ての項目を受け取っています。

このトピックベースの通信は、サブスクライバーがサブスクライブしているトピックからのみ項目を受け取るので、効果的なルーティングとフィルタリングを可能にし、サブスクライバーはこれらの特定のトピックに集中することができます。このアプローチはチャットシステム、通知、またはデータストリーミング等のリアルタイムアプリケーションの実装を単純化してくれます。

Momento Topics は"Fire-and-forget (発火したら忘れる)"メッセージモデルなので、一度項目をパブリッシュしたら、それはその時点でそのトピックの全サブスクライバーに即座に送られ、その後捨てられます。項目の永続化や配送保証をする仕組みはもっていません。従って、Momento Topics は低レイテンシであることが重要で、たまに項目を失っても問題なく動作するようなアプリケーションに最も適しています。

:::note

Momento Topics は Momento Cache をバックエンドとして使うので、既存のキャッシュを使うか、新しいキャッシュを Momento Cache に作成してから、[Momento Topics のパブリッシュやサブスクライブ API](/topics/api-reference)を呼び出すことができます。

:::

## Momento Topics はどこで使えますか？

トピックスは、チャネルとコネクションを処理してくれるマネージドWebSocketサービスのようなものだと考えることができます。

![A diagram showing service-to-service, service-to-browser, and browser-to-browser connectivity with Topics](@site/static//img/topics-connections.png)

### ブラウザから接続

[Web SDK](/platform/sdks/web)を使用すると、ブラウザでTopicのパブリッシュとサブスクライブの両方を行うことができます。Topic にデータを公開すると、すべてのサブスクライバーがそのデータを受信します。つまり、サーバー側のコードを作成することなく、ブラウザ同士で接続できます。

* [Momento Web SDK](/platform/sdks/web/index.md) (for JavaScript browser apps)
* [Momento Swift SDK](/platform/sdks/swift/index.md) (for native iOS apps)
* [Momento Kotlin SDK](/platform/sdks/kotlin/index.md) (for native Android apps)
* [Momento Dart SDK](/platform/sdks/dart/index.md) (for Flutter apps)

### サーバから接続

また、バックエンド・サービスでトピックを公開したり購読したりすることもできます。サーバーサイド開発をサポートするSDKはこちらです：

* [Momento Node.js SDK](/platform/sdks/nodejs/index.md)
* [Momento Go SDK](/platform/sdks/go/index.md)
* [Momento Java SDK](/platform/sdks/java/index.md)
* [Momento Kotlin SDK](/platform/sdks/kotlin/index.md)
* [Momento Python SDK](/platform/sdks/python/index.md)
* [Momento .NET SDK](/platform/sdks/dotnet/index.md)
*
:::note

注意点として、Momento Topicsはサブスクライバにステートフルな接続を要求するため、LambdaやCloudflare Workerのようなサーバレスファンクションには最適ではありません。しかし、データをパブリッシュするだけであれば、完全にステートレスなので、サーバレスファンクションでも動作します。

:::


## 例

- [サーバーレス環境でアイテムをパブリッシュするためのマイクロサービス](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/lambda-examples/topics-microservice) このマイクロサービスはTypeScriptで書かれており、API Gateway、Lambda関数、Momento Topicsを使ってAWS上で実行されます。(API Gateway上で適切なセキュリティが設定されていれば)他のサービスでも利用することができ、様々なトピックにメッセージを発行して他のアプリケーションからサブスクライブさせることができます。この API に `topicName` と `topicValue` を渡すと、このサービスはその値をトピックに発行します。

- [Next.jsとMomento topics作成したチャットアプリケーション](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat) このアプリケーションは、Next.jsフレームワークを使ってTypeScriptで書かれています。ユーザーはキャッシュとトピック名を使って、参加するチャットルームを選択します。ブラウザがトピックをサブスクライブするために使用する、ロースコープで短命なトークンをフロントエンドに送信するAPIもあります。トークンの有効期限が切れると、フロントエンドはAPIを呼び出して新しいトークンを取得し、自動的にトピックに再登録します。このアプリケーションには[静的バージョン](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/vite-chat-app)もあり、こちらはフロントエンドにトークンを提供するAPIが必要です。

## ブログ記事

- [Momento Topicsのご紹介](https://www.gomomento.com/blog/momento-just-got-more-powerful-introducing-topics) - シンプルな価格で、大規模なスケールに対応するサーバーレスのイベントメッセージングシステムです。
- [Momento Topicsによるイベントルーティング](https://www.gomomento.com/blog/build-on-momento-event-routing-with-momento-topics) - Momento Topicsを使用することで、いかに楽で簡単にイベントルーティングをアーキテクチャに導入できるかご覧ください。
- [WebSocketはなぜ難しいのか](https://www.gomomento.com/blog/why-are-websockets-so-hard) - WebSocketが難しい理由と、Momento Topicsがそれを解決する方法を紹介します。

## Momento TopicsのAPI呼び出し

[API reference page for Topics](/topics/api-reference)をご参照ください。

## Momento Topicsの言語サポート
[言語サポートページ](/topics/develop/language-support)で、さまざまなプログラミング言語で利用可能なSDKの詳細をご覧ください。

## デモ

Topicsを試してみませんか？[Momento Console](https://console.gomomento.com/topics)で無料でお試しいただけます。地域とキャッシュを選択し、トピック名を入力して、メッセージの送信すれば良いだけです。

## Momento TopicsについてのFAQ

<details>
  <summary>アイテムがパブリッシュされた後にアプリがトピックをサブスクライブした場合でも、そのアイテムをまだgetできますか？</summary>
いいえ。サブスクライバーは、トピックの履歴のアイテムにはアクセスできません。
</details>
