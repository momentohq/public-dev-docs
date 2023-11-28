---
sidebar_position: 6
title: Webhook API reference information
sidebar_label: Webhook API Reference
description: Learn the Webhook API calls you need to know about and how to use them with Momento services.
---

# Webhook API reference

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

See [response objects](./response-objects.md) for specific information.

</details>

:::note

Webhooks are essential for real-time updates and notifications. Make sure to securely store the `secretString` provided upon success, as it is required for validating incoming webhook requests.

:::

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

See [response objects](./response-objects.md) for specific information.

</details>

:::note

The List Webhook API can be called as frequently as needed to retrieve the latest list of webhooks. However, consider caching the results to reduce unnecessary API calls and improve performance.

:::

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

See [response objects](./response-objects.md) for specific information.

</details>

:::note

When a webhook is deleted, it will no longer be active, and incoming requests to the deleted webhook will be ignored.

:::

## Get Webhook Secret API

Retrieves the secret string associated with a specific webhook.

| Name  | Type                           | Description                                           |
|-------|--------------------------------|-------------------------------------------------------|
| id    | [WebhookId](#webhookid-object) | The unique identifier of the webhook to retrieve the secret for.    |

<details>
  <summary>Method response object</summary>

* Success
  - `secret`: string - the secret string for the webhook.
  - `webhookName`: string - the name of the webhook.
  - `cacheName`: string - the name of the cache associated with the webhook.
* Error

See [response objects](./response-objects.md) for specific information.

</details>

:::note

The secret string is essential for validating incoming webhook requests. Ensure to securely store and manage the retrieved secret.

:::


## Webhook object

The `Webhook` object contains the necessary information to create a webhook.

| Name      | Type                           | Description                       |
|-----------|--------------------------------|-----------------------------------|
| id        | [WebhookId](#webhookid-object) | The unique identifier for the webhook. |
| destination | [WebhookDestination](#webhookdestination-object) | The destination where the webhook payload will be sent. |
| topicName | string | The name of the topic to which the webhook is subscribed. |

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

Upon successful creation of a webhook, store the `secretString` returned. When receiving a webhook request, validate it by comparing the computed hash of the received payload and the stored `secretString`. This ensures the authenticity of the incoming data.

</details>

<details>
<summary>What should I do if the webhook subscription fails?</summary>

Check the provided error response for details. Common issues include invalid cache or topic names, or issues with the provided `postUrl`.

</details>

If you have any questions not answered here, please reach out on [our Discord server](https://discord.gg/2c24SK6W) and ask our experts in the support channel.
