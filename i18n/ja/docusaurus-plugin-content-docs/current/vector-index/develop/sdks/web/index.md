---
sidebar_position: 2
title: Momento MVI JavaScript web SDK
pagination_prev: null
sidebar_label: JS Web
description: Information about the Momento MVI web SDK
---

import { SdkExampleCodeBlock } from "@site/src/components/SdkExampleCodeBlock";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleCodeBlock to SdkExampleCodeBlockImpl
import { SdkExampleCodeBlockImpl } from "@site/src/components/SdkExampleCodeBlockImpl";

# ブラウザ側で使用するMomento Web SDK for JavaScript

Momento は 2 つの JavaScript SDK を提供しています: [Node.js 用](./../nodejs/index.md) のものと他の Web アプリケーション用のものです。 2 つの SDK は同一の API を備えているため、`import`ステートメントを除いてコードは同じように見えますが、内部では、異なる JavaScript ランタイム環境で最適なパフォーマンスと互換性を実現するように構築されています。

<img src="/img/web.jpg" width="90%" alt="a picture of abstract web strung between node.js nodes." />

Node.js SDK はサーバー側のユースケースに最適です。 ただし、Momento Web SDK を使用すると、開発者はブラウザで実行され、Momento サービスと直接通信する JavaScriptのコードで作成できます。 これにより、ブラウザと Momento の間のVector Indexの呼び出しを仲介する独自の Web サービスを構築および運用する際の一般的なオーバーヘッドを回避できます。 また、Web トラフィックのホップが 1 つ少なくなることを意味するため、Web アプリケーションのパフォーマンスをさらに向上させることができます。 両方の長所を生かしたものです。

Web SDK は、他の Node.js 以外の JavaScript 環境でも使用できます。

Momento Web SDK は、npm パッケージ [`@gomomento/sdk-web`](https://www.npmjs.com/package/@gomomento/sdk-web) から入手できます。

ソース コードは GitHub にあります: [momentohq/client-sdk-javascript](https://github.com/momentohq/client-sdk-javascript)。

## 要件

- Momento authトークン(APIキー)が必要です。 [Momento Web コンソール](https://console.gomomento.com/) から発行できます。

## リソース

- [Momento Node.js チートシート](./../nodejs/cheat-sheet.md): このチートシートは Node.js SDK を対象としていますが、Web SDK API は完全な互換性があります。
- [Web SDK Examples](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/web/README.md): Web SDK の使用方法を示す実際のサンプル プロジェクト
- COMING SOON: 本番環境で使用するチップス: Web SDK での構成とエラー処理


## ブラウザで使用する用の web SDKの使い方

API 呼び出しは [Momento Node.js SDK と同一](./../nodejs/cheat-sheet.md) ですが、import/require ステートメントは npm からの `@gomomento/sdk-web` パッケージを消費します。 `@gomomento/sdk` (Node.js SDK) の代わりに。

Web SDK のインポート ステートメントの例を次に示します。

`import {CacheClient} from ‘@gomomento/sdk-web’;`

## ブラウザで使用するための認証情報

Web ブラウザを使用するアプリケーションが Momento サービスと通信するには、ブラウザに Momento authトークンを提供する必要があります。
推奨される方法は、ブラウザーセッションごとに有効期限が切れた資格情報を持つ Momento の使い捨てできるトークンを生成することです。 これにより、アプリはデータの侵害を心配することなくトークンを配布できるようになります。

ブラウザで使用する Momento の使い捨てできるトークンを作成するには、通常、["token vending machine"](https://www.gomomento.com/blog/introducing-the-momento-token-vending-machine) のコンポーネントが必要になります。 

token vending machineは、静的 Web サイトである HTTP エンドポイントを備えた [スタンドアロンなアプリケーション](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine) にすることができます。 

もしくは[Next.js チャット アプリの例](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine) のようにWeb アプリケーションのサーバー側に埋め込まれたコンポーネントで処理するパターンもできます。

どちらの場合も、Node.js SDK を使用して Momento `AuthClient` をインスタンス化し、[Momento コンソール](https://console.gomomento.com/) 経由で生成されたスーパー ユーザー スコープを持つ API キーを組み込む必要があります。

<SdkExampleCodeBlock language={'javascript'} snippetId={'API_InstantiateAuthClient'} />

次に、`generateDisposableToken` API を使用して、ブラウザー側で使い捨てられるトークンを作成します。
これらのトークンの有効期間はデフォルトでは短く、1 時間以内に期限切れになります。

<SdkExampleCodeBlock language={'javascript'} snippetId={'API_GenerateDisposableToken'} />

`DisposableTokenScope` や認可のための権限オブジェクトを含む Momento トークンの詳細については、[Auth API リファレンス](./../../api-reference/auth.md#generatedisposabletoken-api) を参照してください。

## FAQ

<details>
  <summary>ブラウザからのトラフィックは暗号化されていますか?</summary>
Momento サービスのすべてのトラフィックと同様、Web SDK は回線上で完全に暗号化されます。 さらに、SDK は TLS 1.2+ 暗号化を使用しています。
</details>
