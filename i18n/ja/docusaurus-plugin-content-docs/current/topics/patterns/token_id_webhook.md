---
sidebar_position: 30
title: Leverage Momento Topics, webhooks, and tokens in your event-driven architectures
sidebar_label: Identifying unique resources
description: Learn best practices around using Momento Topics, webhooks, and tokens to process unique resources in your event-driven architectures.
keywords:
 - topics
 - webhooks
 - eda
 - momento
 - event-driven architecture
---

import { SdkExampleCodeBlock } from "@site/src/components/SdkExampleCodeBlock";
import { SdkExampleCodeBlockImpl } from "@site/src/components/SdkExampleCodeBlockImpl";

# イベント駆動型アーキテクチャでMomentoトピック、Webhook、トークンを活用する

[Momento Topics](../)を使用すると、トピック上のメッセージを購読し、別のトピックにメッセージを公開することができます。[Webhooks](../webhooks/overview)は、これらのトピックに発行されたメッセージに応答してトリガーされるHTTPコールバックとして機能し、ステートレスコンシューマーとして動作します。[トークン](../../cache/develop/authentication/tokens)は、システムとやりとりするユーザーやサービスに、短時間のセッション・トークンを提供するように設計されています。各トークンに一意の識別子 (`token_id`) を埋め込むことで、リソースへの安全で追跡可能なアクセスを保証します。

ここで重要なのは、Topics を使って短命のトークンを付与することで、ユーザー間のリアルタイムなコミュニケーションを促進できることです。これらのトークンにはユーザー情報 (`token_id`) を埋め込むことができ、メッセージが公開されると、Webhook コールバックを介して Momento キャッシュなどの共有リソースにアクセスするために活用することができます。例えば、`token_id` を使ってユーザーを特定することで、Momento キャッシュに保存されたユーザー情報にアクセスし、ユーザー体験をパーソナライズすることができます。情報を埋め込むことで、2つの大きな利点が得られます：
- セキュリティを強化し、ユーザーのなりすましを防ぐ。
- トークン自体にユーザー情報が埋め込まれているため、データ転送コストが削減される。

![Architecture](@site/static/img/topics/patterns/token-id-webhook.png)

## はじめに
1. [Momentoコンソールでキャッシュを作成する](https://console.gomomento.com/caches/create)
2. [ウェブフックを作成する](/topics/webhooks/creating-a-webhook) をキャッシュに追加します。Webhook の宛先を公開エンドポイントに割り当てます。このエンドポイントは POST リクエストを受け入れ、Momento からの着信コールを受け取ることができる必要があります。このイベントの構造の詳細については、[こちら](../webhooks/overview#example-event) を参照してください。
3. インフラを作成します。例えば、以下はウェブフックエンドポイントのラムダ関数URLを作成するサンプルコードです。また
また、AWS secrets manager に Momento 認証トークンを保存します。

<SdkExampleCodeBlock language={'javascript'} file={'examples/nodejs/aws/lambda-examples/webhooks/infrastructure/lib/momento-webhook-stack.ts'} />

4. Webhook にコードを追加して、受信メッセージを処理します。以下は、Webhook ペイロードからユーザの `token_id` を抽出し、Momento キャッシュに保存されたリソースにアクセスする Webhook ラムダハンドラのサンプルコードです。また、Webhook の呼び出し元が本当に Momento であることを、署名の秘密を通して確認します。

<SdkExampleCodeBlock language={'javascript'} file={'examples/nodejs/aws/lambda-examples/webhooks/lambda/webhook-handler/handler.ts'} />

5. 最後に、トークンを生成してトピックにユーザー・メッセージを公開するサンプル・コードを以下に示す。現実の世界では
これらは理想的には別々のマイクロサービスに住みわけることになります。

<SdkExampleCodeBlock language={'javascript'} file={'examples/nodejs/aws/lambda-examples/webhooks/lambda/service-topics/handler.ts'} />

## See More
- Momentoトピック、ウェブフック、トークンを統合することで、セキュアでステートレスな非同期システムを作成できます。この規約は、多言語チャットアプリ、オンラインポーリング、イベント駆動型システムなど、さまざまなユースケースに適用できます。

```mdx-code-block
import { CardGrid } from '@site/src/components/CardGrid';
import { LinkCard } from '@site/src/components/LinkCard';

<CardGrid>
  <LinkCard
    title="Multi-language chat app"
    link="https://github.com/momentohq/moderated-chat/"
    description="Explore the source code of our live-translation chat app using webhooks."
    />
  <LinkCard
    title="Use webhooks with API Gateway + Lambda"
    link="https://www.gomomento.com/blog/how-to-use-webhooks-and-momento-topics-to-build-a-multi-language-chat-app"
    description="Learn how to integrate Momento webhooks with Amazon API Gateway and Lambda functions"
    />
</CardGrid>
```
