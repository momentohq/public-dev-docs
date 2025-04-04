---
sidebar_position: 2
pagination_prev: null
sidebar_label: JS Web SDK
displayed_sidebar: platformSidebar
title: Get to know the Momento Web SDK
description: The Momento Web SDK allows you to create rich browser applications in TypeScript or JavaScript, and take advantage of caching and pub-sub features without the need for server-side infrastructure. Find resources and examples here!
keywords:
  - momento
  - cache
  - caching
  - topics
  - pubsub
  - pub/sub
  - eda
  - event-driven architecture
  - redis
  - serverless
  - sdk
  - sdks
  - api
  - typescript
  - javascript
  - nodejs
  - node.js
  - examples
  - resources
  - getting started
  - browser
  - web
---

import { SdkExampleCodeBlock } from "@site/src/components/SdkExampleCodeBlock";
import { SdkExampleCodeBlockImpl } from "@site/src/components/SdkExampleCodeBlockImpl";

# ブラウザでJavaScriptを使用するためのMomento Web SDK

Momentoは2つのJavaScript SDKを提供しています; [1つはNode.js用](/platform/sdks/nodejs)、もう1つはブラウザの他のWebアプリケーション用(このページ)です。2つのSDKは同じAPIを持っているので、`import`ステートメントを除いてコードは同じように見えますが、異なるJavaScript実行環境において最適なパフォーマンスと互換性を保つように作られています。

Node.js SDKはサーバーサイドでの使用に最適です。しかし、Momento Web SDKでは、開発者はブラウザで実行され、Momentoサービスと直接通信するJavaScriptコードを記述することができます。これにより、ブラウザとMomento間のキャッシュやPub/Subコールを仲介するために、独自のウェブサービスを構築・運用する一般的なオーバーヘッドを回避することができます。また、ウェブトラフィックのホップが1つ減るので、ブラウザアプリケーションのパフォーマンスをさらに向上させることができます。両方の長所を兼ね備えています！

また、Node.js以外のJavaScript環境でもWeb SDKを使用できます。

Momento web SDKはnpmパッケージ[`@gomento/sdk-web`](https://www.npmjs.com/package/@gomento/sdk-web)から利用できます。

ソースコードはGitHubにあります： [momentohq/client-sdk-javascript](https://github.com/momentohq/client-sdk-javascript)。

## 必要条件

- MomentoのAPIキーが必要です。[Momentoウェブコンソール](https://console.gomomento.com/)から取得できます。

## Resources

- [Getting started with Momento Cache in JavaScript](/platform/sdks/nodejs/cache.mdx): このチート・シートはNode.js SDKを対象としていますが、Web SDK APIは完全に互換性があります。
- [Getting started with Momento Topics in JavaScript](/platform/sdks/nodejs/topics.mdx): このチート・シートはNode.js SDKを対象としていますが、Web SDK APIは完全に互換性があります。
- [Chat app: Next.js](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat): は、キャッシュとトピック名を入力することで、ユーザーがブラウザ上でチャットを行うことを可能にするダイナミック・アプリである。このアプリケーションは、トピックを購読するために使用されるブラウザに、スコープが低く寿命の短い認証トークンを提供します。
- [Chat app: Vite](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/vite-chat-app): チャットアプリの静的バージョンは、ブラウザに認証トークンを提供するために別のAPI（私たちの[Node.jsトークン自動販売機](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine)など）を必要とします。
- [Web SDK Examples](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/web/README.md): ウェブSDKの使い方を説明するサンプルプロジェクト

## Momento web SDKとMomentoトピックス

Momento Topicsは、ブラウザでのパブリッシャーとサブスクライバーの通信を大幅に簡素化します。従来、この開発者の例は、ウェブサイトに組み込まれたチャット・アプリケーションです。ブラウザ用のクライアント・コードだけでなく、すべての通信をルーティングするためのサーバ・サイド・コードも構築することになります。

Momento Web SDKにMomento Topicsを組み込むことで、このサーバーサイドの複雑さが解消されます。開発者はブラウザから直接 Momento Topics を購読できます。そして、Momento は、トピックにメッセージが発行されたときのすべての通信を処理し、WebSocket 用のカスタムサーバーサイドインフラストラクチャを不要にします！

## ブラウザ用ウェブSDKの使用

APIコールは[Momento Node.js SDK](/platform/sdks/nodejs/cache.mdx)と同じですが、import/require文は(Node.js SDKである)`@gomento/sdk`の代わりに、npmから`@gomento/sdk-web`パッケージを消費します。

以下は、ウェブSDKのインポート文の例です：

`import {CacheClient} from ‘@gomomento/sdk-web’;`

## ブラウザ用認証情報

ブラウザアプリケーションが Momento サービスと通信するためには、ブラウザに Momento 認証トークンを提供する必要があります。
推奨される方法は、ブラウザセッションごとに有効期限付きのMomento使い捨てトークンを生成することです。これにより、データが漏えいする心配なく、トークンを配布することができます。

ブラウザで使用するMomento使い捨てトークンを作成するには、一般的に["トークン自動販売機"](https://www.gomomento.com/blog/introducing-the-momento-token-vending-machine)コンポーネントが必要です。トークン自動販売機は、静的なウェブサイトがアクセスできるHTTPエンドポイントを持つ[スタンドアロンアプリケーション](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine)にすることもできますし、[Next.jsチャットアプリの例](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/web/nextjs-chat/README.md)のように、ウェブアプリケーションのサーバーサイドに埋め込むこともできます。

いずれの場合も、Node.js SDK を使用して Momento `AuthClient` をインスタンス化し、[Momento Console](https://console.gomomento.com/) 経由で生成された Super User スコープの API キーを提供することになるでしょう：

<SdkExampleCodeBlock language={'javascript'} snippetId={'API_InstantiateAuthClient'} />

次に、`generateDisposableToken` API を使用して使い捨てトークンを作成し、ブラウザに送信します。これらのトークンはデフォルトでは短命で、1時間以内に失効しなければなりません。

<SdkExampleCodeBlock language={'javascript'} snippetId={'API_GenerateDisposableToken'} />

`DisposableTokenScope` や認可のためのパーミッションオブジェクトなど、Momento トークンの詳細については、[Auth API リファレンス](/cache/develop/api-reference/auth.md#generatedisposabletoken-api) を参照してください。

## FAQ

<details>
  <summary>ブラウザからのトラフィックは暗号化されていますか？</summary>

  Momentoサービスのすべてのトラフィックと同様に、Web SDKはワイヤ上で完全に暗号化されています。さらに、SDKはTLS 1.2+暗号化を使用しています。
</details>
