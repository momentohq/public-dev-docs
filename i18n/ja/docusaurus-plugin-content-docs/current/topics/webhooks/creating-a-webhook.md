---
sidebar_position: 2
sidebar_label: Getting Started
title: Creating a webhook
description: Learn how to create a webhook using the Momento Console
pagination_next: null
keywords:
  - topics
  - webhooks
  - eda
  - momento
  - event-driven architecture
---

# Momentoで最初のWebhookを作成する

Webhookを設定するステップ1を完了するには、[Momentoコンソール](https://console.gomomento.com)にログインします。左のナビゲーションバーの[キャッシュリスト](https://console.gomomento.com/caches)に移動し、Webhookに公開するキャッシュを選択します。

ウェブフックを作成するには、いくつかの簡単な情報を提供する必要があります。

![Webhook Creation](@site/static/img/topics/creating_webhook.jpg)

紹介した3つの分野が重要な理由はそれぞれ異なります。

-   **Webhook Name**: ウェブフックの人間が読める名前
-   **Topic Name**: 公開時にWebhookをトリガーするトピック
-   **Webhook Destination**: POSTするウェブフックのエンドポイントURL

次に、トピック `publish` のパーミッションを持つ、キャッシュ用の [Fine-Grained Access Key](https://console.gomomento.com/api-keys) を作成します。

![Token Creation](@site/static/img/topics/patterns/create-fine-grained-token.png)

このトークンを使って、トピックへの公開を開始できます。トピックへの公開には[Momento SDK](/topics/develop/api-reference)を使用します。
```typescript
import {TopicClient, TopicPublish, CredentialProvider} from '@gomomento/sdk';

const momento = new TopicClient({
    credentialProvider: CredentialProvider.fromString('<the api key>'),
});
const publishResponse = await momento.publish(cacheName, topicName, value);
if (publishResponse instanceof TopicPublish.Success) {
    console.log('Value published successfully!');
} else {
    console.log(`Error publishing value: ${publishResponse.toString()}`);
}
```

これで、Webhookエンドポイントが受信したイベントを確認できるはずです。このエンドポイントがイベントで何をするかは、あなた次第です！この Webhook は複数のキャッシュにまたがる複数のトピックをリッスンできることは注目に値します。topic`と`cache`はPOSTボディの一部として渡されるので、イベントはこれらの属性によって区別され、イベントがどのキャッシュ/トピックから来たかによって処理方法が異なります。
