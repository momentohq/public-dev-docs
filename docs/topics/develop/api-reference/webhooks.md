---
sidebar_position: 6
title: Webhook API reference information
sidebar_label: Webhooks
description: Learn the Webhook API calls you need to know about and how to use them with Momento services.
---

# Webhook API reference

<img src="/img/topics/webhooks-page.png" width="90%" alt="minified javascript code with the text 'Trigger the hook'" />

Webhooks provide an additional way to consume messages on a topic. When a webhook is created, it gets attached to a topic. When messages are published to this topic, an outbound http call gets POSTed to the webhook callback url. The endpoint that is associated with the webhook must be publicly accessible for Momento to be able to POST requests. To confirm receipt, your api should respond with an empty HTTP 200 response to the original request. If confirmation is not received within _5 seconds_, we drop the message and mark it as timed out.  

:::note
All messages that are sent to the webhook are still available to be received with a subscription to the topic.
:::

## Put Webhook API

Generates a new webhook with the provided webhook.

| Name      | Type                           | Description                       |
|-----------|--------------------------------|-----------------------------------|
| webhook   | [Webhook](#webhook-object) | The webhook object to be created. |

<details>
  <summary>Method response object</summary>

* Success
  - `secretString`: string - the secret string for the webhook
* Error

See [response objects](https://docs.momentohq.com/topics/develop/api-reference/response-objects) for specific information.

</details>

:::note

Webhooks are essential for real-time updates and notifications. Make sure to securely store the `secretString` provided upon success, as it is required for validating incoming webhook requests.

:::

### Example
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

Retrieves a list of webhooks for a specific cache.

| Name   | Type   | Description                          |
|--------|--------|--------------------------------------|
| cache  | string | The name of the cache to list webhooks for. |

<details>
  <summary>Method response object</summary>

* Success
  - `webhooks`: array of [Webhook](#webhook-object) - the list of webhooks for the specified cache.
* Error

See [response objects](https://docs.momentohq.com/topics/develop/api-reference/response-objects) for specific information.

</details>

:::note

The List Webhook API can be called as frequently as needed to retrieve the latest list of webhooks. However, consider caching the results to reduce unnecessary API calls and improve performance.

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

Deletes a webhook with the specified identifier.

| Name  | Type                           | Description                                           |
|-------|--------------------------------|-------------------------------------------------------|
| id    | [WebhookId](#webhookid-object) | The unique identifier of the webhook to be deleted.    |

<details>
  <summary>Method response object</summary>

* Success
  - No additional data on success.
* Error

See [response objects](https://docs.momentohq.com/topics/develop/api-reference/response-objects) for specific information.

</details>

:::note

When a webhook is deleted, it will no longer be active, and incoming requests to the deleted webhook will be ignored.

:::

### Example
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

Retrieves the secret string associated with a specific webhook.

| Name  | Type                           | Description                                           |
|-------|--------------------------------|-------------------------------------------------------|
| id    | [WebhookId](#webhookid-object) | The unique identifier of the webhook to retrieve the secret for.    |

<details>
  <summary>Method response object</summary>

* Success
  - `secret`: string - the signing secret for the webhook.
  - `webhookName`: string - the name of the webhook.
  - `cacheName`: string - the name of the cache associated with the webhook.
* Error

See [response objects](https://docs.momentohq.com/topics/develop/api-reference/response-objects) for specific information.

</details>

:::note

The signing secret is essential for validating incoming webhook requests. Ensure to securely store and manage the retrieved secret.

:::

### Example
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

The `Webhook` object contains the necessary information to create a webhook.

| Name      | Type                           | Description                                                                         |
|-----------|--------------------------------|-------------------------------------------------------------------------------------|
| id        | [WebhookId](#webhookid-object) | The unique identifier for the webhook.                                              |
| destination | [WebhookDestination](#webhookdestination-object) | The destination where the webhook payload will be sent. Must be publicy accessible. |
| topicName | string | The name of the topic to which the webhook is subscribed.                           |

## WebhookId object

The `WebhookId` object represents the unique identifier of a webhook.

| Name       | Type   | Description                                |
|------------|--------|--------------------------------------------|
| cacheName  | string | The name of the cache associated with the webhook. |
| webhookName | string | The name of the webhook.                    |

## WebhookDestination object

The `WebhookDestination` object contains the information about where the webhook payload will be sent.

| Name     | Type   | Description                       |
|----------|--------|-----------------------------------|
| postUrl  | string | The URL to which the payload will be sent using HTTP POST. |

## FAQ

<details>
<summary>How do I validate incoming webhook requests?</summary>

Each webhook that gets created will get a unique signing secret. Using this signing secret, you can verify whether this request came from Momento. On each HTTP request that Momento sends, we include a `momento-signature` header. This signature is created by combining the the signing secret with the request body using a standard HMAC hash.

Steps to validate

1. Retrieve the `momento-signature` header from the request, as well as the signing secret for the webhook (stored in a secret vault or environment variable)
2. Using HMAC SHA3-256, hash the request body, using the signing secret associated with the webhook
3. Compare the computed signature to the `momento-signature` header on the request

</details>

<details>
<summary>What is the structure of the POST body?</summary>

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
<summary>What should I do if the webhook subscription fails?</summary>

Check the provided error response for details. Common issues include invalid cache or topic names, or issues with the provided `postUrl`.

</details>

If you have any questions not answered here, please reach out on [our Discord server](https://discord.gg/2c24SK6W) and ask our experts in the support channel.
