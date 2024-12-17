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

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Create your first webhook in Momento

To complete step one of setting up the webhook, log into the [Momento console](https://console.gomomento.com). Navigate to the [cache list](https://console.gomomento.com/caches) on the left navigation bar and select the cache that will publish to the webhook.

To create the webhook, a few simple details need to be supplied.

![Webhook Creation](@site/static/img/topics/creating_webhook.jpg)

The three fields presented are important for different reasons.

-   **Webhook Name**: Human-readable name for the webhook.
-   **Topic Name**: Topic that will trigger the webhook when published.
-   **Webhook Destination**: Endpoint URL of the webhook to POST to.

Next, [create a Fine-Grained Access Key](https://console.gomomento.com/api-keys) for the cache, with topic `publish` permissions.

![Token Creation](@site/static/img/topics/patterns/create-fine-grained-token.png)

Using this token, you can now start publishing to the topic. You can use the [Momento SDK](/topics/api-reference) to publish to the topic.

<SdkExampleTabs snippetId={'API_TopicPublish'} />

You should now be able to see the events being received by your webhook endpoint. What this endpoint does with the events is up to you! It is worth noting that this Webhook can listen to multiple topics across multiple caches. Since the `topic` and `cache` come as part of the POST body, events can be distinguished by these attributes, and processed in differently depending on which Cache/Topic the event came from.
