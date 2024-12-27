---
sidebar_position: 6
title: Webhook API reference information
sidebar_label: Webhooks
description: Learn the Webhook API calls you need to know about and how to use them with Momento services.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Webhook API reference

Webhookは、トピック上のメッセージを消費するための追加の方法を提供します。ウェブフックが作成されると、トピックにアタッチされます。
このトピックにメッセージが公開されると、アウトバウンド http コールが Webhook コールバック url に POST されます。この
Webhook に関連付けられたエンドポイントは、Momento がリクエストを POST できるようにパブリックにアクセスできる必要があります。リクエストを
受信を確認するには、元のリクエストに対して空の HTTP 2xx レスポンスを返す必要があります。もし5 秒以内に確認が取れない場合は、メッセージを削除してタイムアウトとします。

:::note
Webhook に送信されたすべてのメッセージは、トピックへのサブスクリプションがあれば受信可能です。
:::

## Put Webhook API

指定された webhook で新しい webhook を生成します。

| Name    | Type                       | Description                       |
|---------|----------------------------|-----------------------------------|
| webhook | [Webhook](#webhook-object) | 作成するウェブフック・オブジェクト |

<details>
  <summary>メソッド・レスポンス・オブジェクト</summary>

* Success
    - `secretString`: 文字列 - ウェブフックの署名用シークレット
* Error

具体的な情報は[レスポンスオブジェクト](/topics/api-reference/response-objects)を参照してください。

</details>

:::note

Webhookはリアルタイムの更新と通知に不可欠です。成功時に提供される `secretString` を安全に保存してください。

:::

### Example

```javascript
const webhookId: WebhookId = {
    cacheName: 'exampleCache',
    webhookName: 'exampleWebhook',
};

const result = await webhookClient.putWebhook(webhookId.cacheName, webhookId.webhookName, {
    destination: new PostUrlWebhookDestination('https://example.com/webhook'),
    topicName: 'exampleTopic',
});
if (result instanceof PutWebhook.Success) {
    console.log('Webhook created successfully. Secret:', result.secret);
} else {
    console.error('Error creating webhook:', result.error.message);
}
```

## List Webhook API

特定のキャッシュのウェブフックの一覧を取得します。

| Name  | Type   | Description                                 |
|-------|--------|---------------------------------------------|
| cache | string | The name of the cache to list webhooks for. |

<details>
  <summary>>メソッド・レスポンス・オブジェクト</summary>

* Success
    - `webhooks`: [Webhook](#webhook-object) の配列 - 指定したキャッシュのウェブフックのリスト
* Error

具体的な情報は[レスポンスオブジェクト](/topics/api-reference/response-objects)を参照してください。

</details>

:::note

リストウェブフックAPIは、最新のウェブフックのリストを取得するために必要な頻度で呼び出すことができます。しかし
不要な API 呼び出しを減らし、パフォーマンスを向上させるために、結果をキャッシュすることを検討してください。

:::

### Example

```javascript
const cacheName: string = 'exampleCache';

const result = await webhookClient.listWebhooks(cacheName);
if (result instanceof ListWebhooks.Success) {
    console.log('Webhooks retrieved successfully:', result.webhooks);
} else {
    console.error('Error retrieving webhooks:', result.error.message);
}
```

## Delete Webhook API

指定した識別子のウェブフックを削除します。

| Name | Type                           | Description                                         |
|------|--------------------------------|-----------------------------------------------------|
| id   | [WebhookId](#webhookid-object) | 削除するウェブフックの一意な識別子 |

<details>
  <summary>メソッド・レスポンス・オブジェクト</summary>

* Success
    - 成功の場合、追加データはありません。
* Error

具体的な情報は[レスポンスオブジェクト](/topics/api-reference/response-objects)を参照してください。

</details>

:::note

Webhook が削除されると、その Webhook はアクティブではなくなり、削除された Webhook への受信リクエストは無視されます。

:::

### Example

```javascript
const webhookId: WebhookId = {
    cacheName: 'exampleCache',
    webhookName: 'exampleWebhook',
};

const result = await webhookClient.deleteWebhook(webhookId.cacheName, webhookId.webhookName);
if (result instanceof DeleteWebhook.Success) {
    console.log('Webhook deleted successfully');
} else {
    console.error('Error deleting webhook:', result.error.message);
}
```

## Get Webhook Secret API

特定のウェブフックに関連付けられた秘密の文字列を取得します。

| Name | Type                           | Description                                                      |
|------|--------------------------------|------------------------------------------------------------------|
| id   | [WebhookId](#webhookid-object) | シークレットを取得するウェブフックの一意な識別子 |

<details>
  <summary>メソッド・レスポンス・オブジェクト</summary>

* Success
    - `secret`: 文字列 - ウェブフックの署名用シークレット
    - `webhookName`: string - ウェブフックの名前
    - `cacheName`: string - ウェブフックに関連付けられたキャッシュの名前
* Error

具体的な情報は[レスポンスオブジェクト](/topics/api-reference/response-objects)を参照してください。

</details>

:::note

署名シークレットは、受信するウェブフック・リクエストを検証するために不可欠です。取得した取得したシークレットを安全に保管・管理するようにしましょう。

:::

### Example

```javascript
const webhookId: WebhookId = {
    cacheName: 'exampleCache',
    webhookName: 'exampleWebhook',
};

const result = await webhookClient.getWebhookSecret(webhookId.cacheName, webhookId.webhookName);
if (result instanceof GetWebhookSecret.Success) {
    console.log('Webhook secret retrieved successfully:', result.secret);
} else {
    console.error('Error retrieving webhook secret:', result.error.message);
}
```

## Rotate Webhook Secret API

ウェブフックに使用されている署名秘密をローテーションします。秘密がローテーションされると、webhook のエンドポイントに送られるすべての新しい POST リクエストは、新しい秘密で署名された 'momento-signature' ヘッダを持つようになります。

| Name | Type                           | Description                                                    |
|------|--------------------------------|----------------------------------------------------------------|
| id   | [WebhookId](#webhookid-object) | シークレットをローテーションするウェブフックの一意な識別子 |

<details>
  <summary>メソッド・レスポンス・オブジェクト</summary>

* Success
    - `secret`: 文字列 - ウェブフックの新しい署名用シークレット
    - `webhookName`: 文字列 - ウェブフックの名前
    - `cacheName`: 文字列 - ウェブフックに関連付けられたキャッシュの名前
* Error

具体的な情報は[レスポンスオブジェクト](/topics/api-reference/response-objects)を参照してください。

</details>

:::note

シークレットのローテーションは元に戻せないので、以前のシークレットに対してリクエストを検証しているすべてのウェブフックを更新することが重要です。

:::

### Example

```javascript
const webhookId: WebhookId = {
    cacheName: 'exampleCache',
    webhookName: 'exampleWebhook',
};

const result = await webhookClient.rotateWebhookSecret(webhookId.cacheName, webhookId.webhookName);
if (result instanceof RotateWebhookSecret.Success) {
    console.log('Webhook secret rotated successfully:', result.secret);
} else {
    console.error('Error rotating webhook secret:', result.error.message);
}
```

## Webhook object

`Webhook` オブジェクトには、Webhook を作成するために必要な情報が含まれています。

| Name        | Type                                             | Description                                                                         |
|-------------|--------------------------------------------------|-------------------------------------------------------------------------------------|
| id          | [WebhookId](#webhookid-object)                   | ウェブフックの一意な識別子                                             |
| destination | [WebhookDestination](#webhookdestination-object) | ウェブフックペイロードの送信先。パブリックアクセス可能でなければなりません |
| topicName   | string                                           | Webhook が購読されているトピックの名前                          |

## WebhookId object

WebhookId` オブジェクトはウェブフックの一意な識別子を表します。

| Name        | Type   | Description                                        |
|-------------|--------|----------------------------------------------------|
| cacheName   | string | ウェブフックに関連付けられたキャッシュの名前 |
| webhookName | string | ウェブフックの名前                          |

## WebhookDestination object

`WebhookDestination` オブジェクトは、Webhook ペイロードの送信先に関する情報を保持します。

| Name    | Type   | Description                                                |
|---------|--------|------------------------------------------------------------|
| postUrl | string | HTTP POSTを使用してペイロードを送信するURL |

## FAQ

<details>
  <summary>受信したWebhookリクエストを検証するには？</summary>

  [ウェブフック・セキュリティページ](/topics/webhooks/security)をチェックしてください。
</details>

<details>
  <summary>ポストのボディ構造は？</summary>

  ```typescript
  {
      cache: string;
      topic: string;
      event_timestamp: number;
      publish_timestamp: number;
      topic_sequence_number: number;
      token_id: string; // is an empty string if the message was published with an api key that does not contain a token_id
      text: string; // this is the message that was published
  }
```

</details>

<details>
  <summary>Webhookのサブスクリプションに失敗した場合はどうすればよいですか？</summary>

  WebhookのURLが公開されており、有効であることを確認してください。よくある問題としては、間違ったキャッシュ名やトピック名、あるいは`postURL` の問題などです。

</details>

ここにない質問は、[Discordサーバー](https://discord.gg/3HkAKjUZGq)までご連絡ください。サポートチャンネルで専門家にお尋ねください。
