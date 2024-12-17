---
sidebar_position: 2
title: Momento JavaScript web SDK
pagination_prev: null
sidebar_label: JS Web SDK
description: Momento web SDK に関する情報です。
---

import { SdkExampleCodeBlock } from "@site/src/components/SdkExampleCodeBlock";
import { SdkExampleCodeBlockImpl } from "@site/src/components/SdkExampleCodeBlockImpl";

# Momento web SDK for JavaScript をブラウザ上で

Momento は 2つの JavaScript SDK を提供しています。[1つは Node.js 用](../nodejs/index.md)で、もう一つがウェブアプリケーション用です。2つの SDK は同一の API を持っているので、`import` ステートメントを除けばコードは同じに見えると思いますが、裏側では異なる JavaScript 実行環境に対してパフォーマンス最適化や互換性を求めて構築されています。

Node.js SDK はサーバーサイドのユースケースに最適です。一方、Momento web SDK はブラウザ上で実行され Momento のサービスと直接通信する JavaScript コードを書くことを可能にしてくれます。これによってブラウザと Momento の間でキャッシュやパブ/サブの呼出しを仲介するウェブサービスを自身で構築したり運用する典型的なオーバーヘッドを回避することができます。これはまた、ウェブトラフィックにおいて1ホップ減らせることを意味するので、ブラウザアプリケーションはより良いパフォーマンスさえも得られます。両方の意味でお得です！

また、web SDK は Node.js 以外の JavaScript 環境でも利用可能です。

Momento web SDK は [`@gomomento/sdk-web`](https://www.npmjs.com/package/@gomomento/sdk-web) で npm パッケージとして利用可能です。

ソースコードは GitHub 上の [momentohq/client-sdk-javascript](https://github.com/momentohq/client-sdk-javascript) にあります。

## 必要条件

- Momento API Keyは必要です。[Momento Web コンソール](https://console.gomomento.com/)で取得可能です。

## リソース

- [Momento Node.js チートシート](../nodejs/cheat-sheet.mdx): このチートシートは Node.js SDK をターゲットにしていますが、web SDK API は完全に互換性があります。
- [チャットアプリの例](https://github.com/momentohq/example-chat-app): web SDK を使って作られた完全機能のチャットアプリケーションです！
  ![チャットスクリーンショット](@site/static/img/web-sdk-chat-app.png)
- [Web SDK の例](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/web/README.md): web SDK をどの様に使うかを示した動作可能なプロジェクトの例です。
- まもなく: コードを本番環境に持っていく: web SDK での設定とエラーハンドリング

## Momento web SDK と Momento Topics

Momento Topics を使えばブラウザ内でのパブリッシャーとサブスクライバーの通信をとても簡素化してくれます。伝統的には、ウェブサイトに埋め込まれたチャットアプリケーションの開発者を例とすると、ブラウザのためのクライアントコードだけでなく、全ての通信をルーティングするためのサーバーサイドのコードも開発する必要があります。

Momento Topics を Momento web SDK 使って組み込むことでサーバーサイドの複雑さを取り除くことができます。開発者はブラウザから直接 Momento Topics をサブスクライブすることができます。トピックにメッセージがパブリッシュされれば、Momento が全ての通信の面倒をみてくれて、WebSocket のためのサーバーサイドのインフラを作る必要性をなくしてくれます。

## ブラウザで web SDK を使う

API 呼出しは [Momento Node.js SDK と同一](../nodejs/cheat-sheet.mdx)ですが、, import/require ステートメントは Node.js SDK の `@gomomento/sdk` の代わりに `@gomomento/sdk-web` パッケージを npm から使います。

こちらが、web SDK の import ステートメントの例です:

`import {CacheClient} from ‘@gomomento/sdk-web’;`

## ブラウザのための認証情報

ブラウザアプリケーションが Momento サービスと通信するために、Momento 認証トークンをブラウザに渡す必要があります。推奨としては、Momento 認証トークンをブラウザセッション毎に期限切れになるようにすると良いです。こうすることで、データが危険に晒されることを心配せずに、アプリケーションでトークンを配布可能にします。

ブラウザで利用するための Momento 認証トークンを作成するためには、一般的には Node.js SDK の様な他の Momento SDK を使ったウェブアプリケーションを立てることになります。まず、Momento `AuthClient` を生成する必要があります:

<SdkExampleCodeBlock language={'javascript'} snippetId={'API_InstantiateAuthClient'} />

そうしたら、`generateApiKey` API を使って、ブラウザに提供するトークンを作成します:

<SdkExampleCodeBlock language={'javascript'} snippetId={'API_GenerateApiKey'} />

他にも、認可のための `PermissionScope` や、期限切れのトークンをどうやってリフレッシュするか、などを含めた Momento 認証トークンに関する情報は、[Momento 認証トークンを使う](../../authentication/index.mdx)をご覧下さい。

## よくある質問

<details>
  <summary>ブラウザからのトラフィックは暗号化されていますか？</summary>
Momento サービスの全てのトラフィックと同様に、web SDK は経路上は全て暗号化されています。加えると、SDK は TLS 1.2+ 暗号化を利用しています。
</details>
