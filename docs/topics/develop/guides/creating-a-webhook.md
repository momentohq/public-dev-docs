---
sidebar_position: 6
sidebar_label: Creating a webhook
title: Creating a webhook
description: Learn how to create a webhook using the Momento Console
pagination_next: null
---

### Creating the Momento webhook

To complete step one of setting up the webhook, log into the [Momento console](https://console.gomomento.com). Navigate to the [cache list](https://console.gomomento.com/caches) on the left navigation bar and select the cache that will publish to the webhook.

To create the webhook, a few simple details need to be supplied.

![Webhook Creation](@site/static/img/topics/creating_webhook.jpg)

The three fields presented are important for different reasons.

-   **Webhook Name**: Human-readable name for the webhook.
-   **Topic Name**: Topic that will trigger the webhook when published.
-   **Webhook Destination**: Endpoint URL of the webhook to POST to.
