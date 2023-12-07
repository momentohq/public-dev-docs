---
sidebar_position: 6
title: Webhook API reference information
sidebar_label: Webhooks
description: Learn the Webhook API calls you need to know about and how to use them with Momento services.
---

# Webhook API リファレンス

<img src="/img/topics/webhooks-page.png" width="90%" alt="minified javascript code with the text 'Trigger the hook'" />

Webhookは、トピック上のメッセージを使うために追加された方法です。Webhook が作成されると、トピックにアタッチされます。このトピックにメッセージが公開されると、Webhook コールバック url に送信 http コールが POST されます。Webhookに関連付けられたエンドポイントは、MomentoがリクエストをPOSTできるように一般にアクセス可能でなければなりません。受信を確認するには、元のリクエストに対して空の HTTP 2xx レスポンスを返す必要があります。5 秒以内に確認が取れない場合は、メッセージを削除してタイムアウトとします。

:::note
Webhook に送信されたすべてのメッセージは、トピックへのサブスクリプションがあれば受信可能です。
:::

## Put Webhook API

指定された webhook で新しい webhook を生成します。

| Name      | Type                           | Description                       |
|-----------|--------------------------------|-----------------------------------|
| webhook   | [Webhook](#webhook-object) | The webhook object to be created. |

<details>
  <summary>Method response object</summary>

* Success
  - `secretString`: string - the signing secret for the webhook
* Error

詳しくは[レスポンスオブジェクト](https://docs.momentohq.com/topics/develop/api-reference/response-objects)を参照してください。

</details>

:::note

Webhook はリアルタイムの更新と通知に不可欠です。成功時に渡される `secretString` は、Webhook リクエストを検証するために必要なので、安全に保存してください。

:::

### 例

```javascript
const exampleWebhook: Webhook = {
  id: {
    cacheName: 'exampleCache',
    webhookName: 'exampleWebhook',
  },
  topicName: 'exampleTopic',
  destination: new PostUrlWebhookDestination('https://example.com/webhook'),
};

const result = await webhookClient.putWebhook(exampleWebhook);
if (result instanceof PutWebhook.Success) {
  console.log('Webhook created successfully. Secret:', result.secret);
} else {
  console.error('Error creating webhook:', result.error.message);
}
```

## List Webhook API

特定のキャッシュのWebhookの一覧を取得します。

| 名前   | タイプ   | 詳細                          |
|--------|--------|--------------------------------------|
| cache  | string | Webhookの一覧を表示するキャッシュの名前 |

<details>
  <summary>Method response object</summary>

* Success
  - `webhooks`: array of [Webhook](#webhook-object) - the list of webhooks for the specified cache.
* Error

詳しくは[レスポンスオブジェクト](https://docs.momentohq.com/topics/develop/api-reference/response-objects)を参照してください。

</details>

:::note

List Webhook API は、Webhook の最新リストを取得するために必要な頻度で呼び出すことができます。ただし、不要な API 呼び出しを減らし、パフォーマンスを向上させるために、結果をキャッシュすることを検討してください。

:::

### 例

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

指定した識別子のWebhookを削除します。

| 名前  | タイプ                           | 詳細                                           |
|-------|--------------------------------|-------------------------------------------------------|
| id    | [WebhookId](#webhookid-object) | 削除するWebhookの一意な識別子   |

<details>
  <summary>Method response object</summary>

* Success
  - No additional data on success.
* Error

詳しくは[レスポンスオブジェクト](https://docs.momentohq.com/topics/develop/api-reference/response-objects)を参照してください。
</details>

:::note

Webhook が削除されると、その Webhook はアクティブではなくなり、削除された Webhook への受信リクエストは無視されます。

:::

### 例

```javascript
const webhookId: WebhookId = {
  cacheName: 'exampleCache',
  webhookName: 'exampleWebhook',
};

const result = await webhookClient.deleteWebhook(webhookId);
if (result instanceof DeleteWebhook.Success) {
  console.log('Webhook deleted successfully');
} else {
  console.error('Error deleting webhook:', result.error.message);
}
```

## Get Webhook Secret API

特定のWebhookに関連付けられた秘密の文字列を取得します。

| 名前  | タイプ                           | 詳細                                           |
|-------|--------------------------------|-------------------------------------------------------|
| id    | [WebhookId](#webhookid-object) | シークレットを取得するWebhookの一意な識別子。   |

<details>
  <summary>Method response object</summary>

* Success
  - `secret`: string - the signing secret for the webhook.
  - `webhookName`: string - the name of the webhook.
  - `cacheName`: string - the name of the cache associated with the webhook.
* Error

詳しくは[レスポンスオブジェクト](https://docs.momentohq.com/topics/develop/api-reference/response-objects)を参照してください。

</details>

:::note

署名秘密は、受信するWebhookリクエストを検証するために不可欠です。取得したシークレットを安全に保管・管理するようにしてください。

:::

### 例

```javascript
const webhookId: WebhookId = {
  cacheName: 'exampleCache',
  webhookName: 'exampleWebhook',
};

const result = await webhookClient.getWebhookSecret(webhookId);
if (result instanceof GetWebhookSecret.Success) {
  console.log('Webhook secret retrieved successfully:', result.secret);
} else {
  console.error('Error retrieving webhook secret:', result.error.message);
}
```

## Webhook object

`Webhook` オブジェクトには、Webhook を作成するために必要な情報が含まれている。

| 名前      | タイプ                           | 詳細                                                                         |
|-----------|--------------------------------|-------------------------------------------------------------------------------------|
| id        | [WebhookId](#webhookid-object) | Webhookの一意な識別子。                                              |
| destination | [WebhookDestination](#webhookdestination-object) | webhookペイロードの送信先。パブリックアクセス可能でなければなりません。 |
| topicName | string | Webhook がサブスクライブされているトピックの名前。                           |

## WebhookId object

`WebhookId` オブジェクトはWebhookの一意な識別子を表す。

| 名前       | タイプ   | 詳細                                |
|------------|--------|--------------------------------------------|
| cacheName  | string | Webhookに関連付けられたキャッシュの名前。 |
| webhookName | string | Webhookの名前。                   |

## WebhookDestination object

`WebhookDestination` objectは、Webhook ペイロードの送信先に関する情報を保持します。

| 名前     | タイプ   | 詳細                       |
|----------|--------|-----------------------------------|
| postUrl  | string | HTTP POSTを使用してペイロードを送信するURL。 |

## FAQ

<details>
<summary>受信したWebhookリクエストを検証するには？</summary>

作成されたWebhookには、それぞれ固有の署名秘密が付与されます。この署名秘密を使って、このリクエストがMomentoから来たものかどうかを確認することができます。Momento が送信する各 HTTP リクエストには、`momento-signature` ヘッダが含まれます。この署名は、標準的な HMAC ハッシュを使って署名秘密とリクエスト本文を結合することで作成されます。

検証のステップ

1. リクエストから `momento-signature` ヘッダを取得し、Webhook の署名秘密鍵を取得します。(秘密鍵保管庫または環境変数に格納)。
2. HMAC SHA3-256を使用して、リクエストボディをハッシュ化します。
3. 計算された署名をリクエストの `momento-signature` ヘッダーと比較します。

```typescript
import * as crypto from 'crypto';

const didRequestComeFromMomento = (req: Request): boolean => {
  const hash = crypto.createHmac("SHA3-256", "the signing secret");
  const hashed = hash.update(req.rawBody).digest('hex');
  return hashed === req.headers['momento-signature'];
}
```

</details>

<details>
<summary>POSTのbody構造は？/summary>

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
<summary>Webhookのサブスクライブに失敗した場合はどうすればよいですか？</summary>

WebhookのURLが公開されていて有効であることを確認してください。よくある問題としては、間違ったキャッシュ名やトピック名、あるいは提供された `postUrl` の問題などがあります。

</details>

ここにない質問は、[私たちのDiscordサーバー](https://discord.gg/2c24SK6W)に連絡し、サポートチャンネルで私たちの専門家に質問してください。
