---
sidebar_position: 6
title: Best practices for async processing with Momento Topics
sidebar_label: Running background tasks
description: Learn best practices around using Momento Topics and webhooks to process data asynchronously in your event-driven architectures.
keywords:
 - topics
 - webhooks
 - eda
 - momento
 - event-driven architecture
 - Step Functions
---

# Momento トピックを使用してデータを非同期に処理する

[Momento Topics](../)を使用すると、トピック上のメッセージを購読したり、別のトピックにメッセージを公開したりできます。[Webhooks](../webhooks/overview)を使うと、これらのトピックをステートレスコンシューマーに接続し、非同期にイベントを処理することができます。イベントを `topic_id` で集約したり、各イベントをデータベースに保存したり、ペイロードを使用して Step 関数のワークフローをトリガーしたり、Webhook を使用することで、これらのイベントを好きなように処理する柔軟性が得られます。

これらのイベントを非同期に処理する鍵は、複数のトピックを使うことです。ウェブフックがリッスンするインバウンドトピックと、処理されたデータを公開する単一または複数のアウトバウンドトピックです。

![Architecture](@site/static/img/topics/patterns/asynchronous-processing.png)

この図では、`Topic 1` が `受信`トピックで、`Topic 2` が `送信`トピックです。

## 前提条件
1. Webhook イベントを受信するための公開エンドポイント。このエンドポイントは POST リクエストを受け入れ、Momento からの着信コールを受け取ることができる必要があります。このイベントの構造の詳細については、[こちら](../webhooks/overview#example-event) を参照してください。

## はじめに
1. [Momentoコンソールでキャッシュを作成する](https://console.gomomento.com/caches/create)
2. [ウェブフックを作成する](/topics/webhooks/creating-a-webhook) をキャッシュに割り当てます。ウェブフックの宛先を公開エンドポイントに割り当てます。
3. 受信メッセージを処理するコードを webhook に追加します。例えば、あなたの webhook が API Gateway の背後にある AWS Lambda 関数として実装されている場合、以下は受信メッセージを処理し、大文字に変換し、送信トピックに発行する非常に単純なコードです：
```typescript
import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult 
} from "aws-lambda/trigger/api-gateway-proxy";

import {TopicClient, CredentialProvider} from '@gomomento/sdk';


interface MomentoWebhookEvent {
    cache: string;
    topic: string;
    event_timestamp: number;
    publish_timestamp: number;
    topic_sequence_number: number;
    token_id: string;
    text: string;
}

const momento = new TopicClient({
    credentialProvider: CredentialProvider.fromString('<the api key>'),
})

export const lambdaHandler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {  
    const webhookEvent: WebhookEvent = JSON.parse(event.body);
    // simply take the current message, uppercase it, and publish to a new topic
    await momento.publish(webhookEvent.cache, "topic 2", webhookEvent.text.toUpperCase());
    return {
        statusCode: 200,
        body: JSON.stringify({status : "success"})
    }
}
```
4. クライアント側で、この新しい`topic 2`にサブスクライバを追加する。
```typescript
const result = await topicClient.subscribe(cacheName, 'topic 2', {
    onError: () => {
        console.error('Received an error from the topic');
        return;
    },
    onItem: (item: TopicItem) => {
        console.log(`Received uppercase text on topic 'topic-b': ${item.value().toString()}`);
        return;
    },
});
```
5. Webhookがリッスンしているトピックへのメッセージのパブリッシュを開始します。トピックへの発行には、[Momento SDK](/topics/develop/api-reference) を使用します。
```typescript
import {TopicPublish} from '@gomomento/sdk';
const publishResponse = await topicClient.publish(cacheName, 'topic 1', 'a value');
if (publishResponse instanceof TopicPublish.Success) {
    console.log('Value published successfully!');
} else {
    console.log(`Error publishing value: ${publishResponse.toString()}`);
}
```
6. これで `topic 2` のサブスクライバーは大文字のメッセージを受信し、コンソールにメッセージをロギングするはずです！

これで終わりです！これは文字列変換の極めて基本的な例だが、このパターンは、DBへの状態保存やキューへのメッセージ発行など、より高度な非同期処理にも当てはまります。アプリケーションの負荷がAPI Gateway + Lambda関数のような環境を超えた場合、コンテナやEC2インスタンスに簡単に置き換えることができます。イベント処理にWebhookを使用する、より完全な例については、私たちのEventBridge [example](/topics/integrations/lambda-handler)や、このパターンを使用して多言語のチャットアプリケーションを作成する[blog post](https://www.gomomento.com/blog/how-to-use-webhooks-and-momento-topics-to-build-a-multi-language-chat-app)をチェックしてください。
