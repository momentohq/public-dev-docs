---
sidebar_position: 2
pagination_prev: null
sidebar_label: JS Web SDK
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
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleCodeBlock to SdkExampleCodeBlockImpl
import { SdkExampleCodeBlockImpl } from "@site/src/components/SdkExampleCodeBlockImpl";

# ブラウザ用のJavaScript Momento Web SDK

Momentoは2つのJavaScript SDKを提供しています; [1つはNode.js用](/sdks/nodejs)、もう1つはブラウザの他のWebアプリケーション用(このページ)です。2つのSDKは同じAPIを持っているので、`import`文以外は同じコードに見えますが、異なるJavaScript実行環境において最適なパフォーマンスと互換性を保つように作られています。

Node.js SDK はサーバーサイドでの使用に最適です。しかし、Momento Web SDKでは、開発者はブラウザで実行され、Momentoサービスと直接通信するJavaScriptコードを書くことができます。これにより、ブラウザとMomento間のキャッシュやPub/Subコールを仲介するために、独自のウェブサービスを構築・運用する一般的なオーバーヘッドを回避することができます。また、ウェブトラフィックのホップが1つ減るので、ブラウザアプリケーションのパフォーマンスをさらに向上させることができます。両方の長所を兼ね備えています！

WebSDKは、Node.js以外のJavaScript環境でも使用できます。

Momento web SDKはnpmパッケージ[`@gomento/sdk-web`](https://www.npmjs.com/package/@gomento/sdk-web)から入手できます。

ソースコードは GitHub にあります：[momentohq/client-sdk-javascript](https://github.com/momentohq/client-sdk-javascript)。

## 必要条件

- MomentoのAPIキーが必要です。[Momentoウェブコンソール](https://console.gomomento.com/)から取得できます。

## リソース

- [JavaScriptでMomento Cacheを始める](/sdks/nodejs/cache.mdx): このチートシートはNode.js SDKを対象としていますが、Web SDK APIは完全に互換性があります。
- [JavaScriptでMomento Topicsを始める](/sdks/nodejs/topics.mdx): このチートシートはNode.js SDKを対象としていますが、Web SDK APIは完全に互換性があります。
- [チャットアプリ：Next.js](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat): キャッシュとトピック名を入力することで、ブラウザ上でチャットができるダイナミックなアプリです。アプリケーションは、トピックにサブスクライブするために使用されるブラウザに、スコープが低く、短命な認証トークンを送信します。
- [チャットアプリ：Vite](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/vite-chat-app): ブラウザに認証トークンを提供するために、別のAPI（私たちの[Node.js token vending machine](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine)など）を必要とするチャットアプリの静的バージョン。
- [Web SDK Examples](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/web/README.md): Web SDKの使い方を説明するサンプルプロジェクトです。

## Momento Web SDKとMomento Topics

Momento Topicsは、ブラウザでのパブリッシャーとサブスクライバーの通信を大幅に簡素化します。従来、この開発者の例は、ウェブサイトに組み込まれたチャット アプリケーションです。ブラウザ用のクライアント コードだけでなく、すべての通信をルーティングするサーバー側のコードも構築する必要があります。

このサーバー側の複雑さは、Momento Web SDKにMomento Topicsを組み込むことで解消されます。開発者は、ブラウザから直接Momento Topicsを購読することができます。そして、Momento はトピックにメッセージが発行されたときにすべての通信を処理し、WebSocket 用のカスタムサーバーサイドインフラストラクチャは不要になります！

## ブラウザ用 Web SDK の使用

APIコールは[Momento Node.js SDK](/sdks/nodejs/cache.mdx)と同じですが、import/require文は(Node.js SDKである)`@gomento/sdk`の代わりに、npmから`@gomento/sdk-web`パッケージを消費します。

以下はweb SDKのimport文の例です：

`import {CacheClient} from ‘@gomomento/sdk-web’;`

## ブラウザ用認証情報

ブラウザアプリケーションが Momento サービスと通信するためには、ブラウザに Momento 認証トークンを提供する必要があります。
推奨される方法は、ブラウザセッションごとに有効期限付きのMomento使い捨てトークンを生成することです。これにより、データが漏洩する心配なく、アプリがトークンを配布できるようになります。

ブラウザで使用するMomento使い捨てトークンを作成するには、一般的に["token vending machine"](https://www.gomomento.com/blog/introducing-the-momento-token-vending-machine) コンポーネントが必要です。トークン自動販売機は、静的なWebサイトがアクセスできるHTTPエンドポイントを持つ[スタンドアロンアプリケーション](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine)にすることもできますし、[Next.jsチャットアプリの例](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/web/nextjs-chat/README.md)のように、Webアプリケーションのサーバーサイドに埋め込むこともできます。

いずれの場合も、Node.js SDK を使用して Momento `AuthClient` をインスタンス化し、[Momento Console](https://console.gomomento.com/) を介して生成された Super User スコープの API キーを提供します：

<SdkExampleCodeBlock language={'javascript'} snippetId={'API_InstantiateAuthClient'} />

次に、`generateDisposableToken` API を使用して使い捨てトークンを作成し、ブラウザに送信します。これらのトークンはデフォルトでは短命で、1時間以内に失効しなければならない。

<SdkExampleCodeBlock language={'javascript'} snippetId={'API_GenerateDisposableToken'} />

`DisposableTokenScope` や認可のためのパーミッションオブジェクトなど、Momento トークンの詳細については、[Auth API リファレンス](/cache/develop/api-reference/auth.md#generatedisposabletoken-api) を参照してください。

## FAQ

<details>
  <summary>ブラウザからのトラフィックは暗号化されていますか？</summary>
Momentoサービスのすべてのトラフィックと同様に、Web SDKは完全に暗号化されています。さらに、SDKはTLS 1.2+暗号化を使用しています。
</details>
