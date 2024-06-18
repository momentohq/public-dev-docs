---
sidebar_position: 6
title: Webhook API reference information
sidebar_label: Webhooks
description: Learn the Webhook API calls you need to know about and how to use them with Momento services.
---

# Webhook API reference

Webhooks provide an additional way to consume messages on a topic. When a webhook is created, it gets attached to a
topic. When messages are published to this topic, an outbound http call gets POSTed to the webhook callback url. The
endpoint that is associated with the webhook must be publicly accessible for Momento to be able to POST requests. To
confirm receipt, your api should respond with an empty HTTP 2xx response to the original request. If confirmation is not
received within _5 seconds_, we drop the message and mark it as timed out.

:::note
All messages that are sent to the webhook are still available to be received with a subscription to the topic.
:::

## Put Webhook API

Generates a new webhook with the provided webhook.

| Name    | Type                       | Description                       |
|---------|----------------------------|-----------------------------------|
| webhook | [Webhook](#webhook-object) | The webhook object to be created. |

<details>
  <summary>Method response object</summary>

* Success
    - `secretString`: string - the signing secret for the webhook
* Error

See [response objects](https://docs.momentohq.com/topics/develop/api-reference/response-objects) for specific
information.

</details>

:::note

Webhooks are essential for real-time updates and notifications. Make sure to securely store the `secretString` provided
upon success, as it is required for validating incoming webhook requests.

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

Retrieves a list of webhooks for a specific cache.

| Name  | Type   | Description                                 |
|-------|--------|---------------------------------------------|
| cache | string | The name of the cache to list webhooks for. |

<details>
  <summary>Method response object</summary>

* Success
    - `webhooks`: array of [Webhook](#webhook-object) - the list of webhooks for the specified cache.
* Error

See [response objects](https://docs.momentohq.com/topics/develop/api-reference/response-objects) for specific
information.

</details>

:::note

The List Webhook API can be called as frequently as needed to retrieve the latest list of webhooks. However, consider
caching the results to reduce unnecessary API calls and improve performance.

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

| Name | Type                           | Description                                         |
|------|--------------------------------|-----------------------------------------------------|
| id   | [WebhookId](#webhookid-object) | The unique identifier of the webhook to be deleted. |

<details>
  <summary>Method response object</summary>

* Success
    - No additional data on success.
* Error

See [response objects](https://docs.momentohq.com/topics/develop/api-reference/response-objects) for specific
information.

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

const result = await webhookClient.deleteWebhook(webhookId.cacheName, webhookId.webhookName);
if (result instanceof DeleteWebhook.Success) {
    console.log('Webhook deleted successfully');
} else {
    console.error('Error deleting webhook:', result.error.message);
}
```

## Get Webhook Secret API

Retrieves the secret string associated with a specific webhook.

| Name | Type                           | Description                                                      |
|------|--------------------------------|------------------------------------------------------------------|
| id   | [WebhookId](#webhookid-object) | The unique identifier of the webhook to retrieve the secret for. |

<details>
  <summary>Method response object</summary>

* Success
    - `secret`: string - the signing secret for the webhook.
    - `webhookName`: string - the name of the webhook.
    - `cacheName`: string - the name of the cache associated with the webhook.
* Error

See [response objects](https://docs.momentohq.com/topics/develop/api-reference/response-objects) for specific
information.

</details>

:::note

The signing secret is essential for validating incoming webhook requests. Ensure to securely store and manage the
retrieved secret.

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

Rotates the signing secret used for the webhook. Once the secret is rotated, all new POST requests sent to the webhook
endpoint will have a 'momento-signature' header signed with the new secret.

| Name | Type                           | Description                                                    |
|------|--------------------------------|----------------------------------------------------------------|
| id   | [WebhookId](#webhookid-object) | The unique identifier of the webhook to rotate the secret for. |

<details>
  <summary>Method response object</summary>

* Success
    - `secret`: string - the new signing secret for the webhook.
    - `webhookName`: string - the name of the webhook.
    - `cacheName`: string - the name of the cache associated with the webhook.
* Error

See [response objects](https://docs.momentohq.com/topics/develop/api-reference/response-objects) for specific
information.

</details>

:::note

Secret rotation cannot be reverted, it is important to update all webhooks that are validating requests against a
previous secret.

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

The `Webhook` object contains the necessary information to create a webhook.

| Name        | Type                                             | Description                                                                         |
|-------------|--------------------------------------------------|-------------------------------------------------------------------------------------|
| id          | [WebhookId](#webhookid-object)                   | The unique identifier for the webhook.                                              |
| destination | [WebhookDestination](#webhookdestination-object) | The destination where the webhook payload will be sent. Must be publicy accessible. |
| topicName   | string                                           | The name of the topic to which the webhook is subscribed.                           |

## WebhookId object

The `WebhookId` object represents the unique identifier of a webhook.

| Name        | Type   | Description                                        |
|-------------|--------|----------------------------------------------------|
| cacheName   | string | The name of the cache associated with the webhook. |
| webhookName | string | The name of the webhook.                           |

## WebhookDestination object

The `WebhookDestination` object contains the information about where the webhook payload will be sent.

| Name    | Type   | Description                                                |
|---------|--------|------------------------------------------------------------|
| postUrl | string | The URL to which the payload will be sent using HTTP POST. |

## FAQ

<details>
<summary>How do I validate incoming webhook requests?</summary>
Check out our [webhook security page](../../webhooks/security.md) on validating inbound webhook requests.
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

Ensure that your webhook url is public and valid. Common issues include wrong cache or topic names, or issues with the
provided `postUrl`.

</details>

If you have any questions not answered here, please reach out on [our Discord server](https://discord.gg/3HkAKjUZGq) and
ask our experts in the support channel.
