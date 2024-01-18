---
sidebar_position: 6
title: Asynchronous Processing
sidebar_label: Asynchronous Processing
description: Learn the how to use Topics and Webhooks to process data asynchronously
keywords:
 - topics
 - webhooks
 - eda
 - momento
 - event-driven architecture
 - step functions
---

# Asynchronous Processing with Momento

With Momento Topics, you can subscribe to messages on a Topic, as well as publish messages to a new Topic. Webhooks allow you to connect these Topics to stateless consumers, which can then process these events asynchronously. Whether this is aggregating events by `topic_id`, saving each event to a database, or using the payload to trigger a step function, webhooks give you the flexibility to process these events how you want to.

![Architecture](@site/static/img/topics/patterns/asynchronous-processing.png)

## Pre-requisites
1. A public facing endpoint to receive webhook events. This endpoint must accept POST requests, and be able to be receive inbound calls from Momento. The structure of the POST body will be of the format
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

## Getting Started
1. [Create Momento Cache](https://console.gomomento.com/caches/create)
2. [Create a webhook](/topics/develop/guides/creating-a-webhook) for the cache. Assign the Webhook Destination to the public facing endpoint.
3. [Create a Fine-Grained Access Key](https://console.gomomento.com/api-keys) for the cache, with topic `publish-subscribe` permissions.
![Token Creation](@site/static/img/topics/patterns/create-fine-grained-token.png)
4. Start publishing to the topic. You can use the [Momento SDK](/topics/develop/api-reference) to publish to the topic, with the api key that was just created.
```typescript
import {TopicClient, TopicPublish, CredentialProvider, TopicConfigurations} from '@gomomento/sdk';

const momento = new TopicClient({
    configuration: TopicConfigurations.Default.latest(),
    credentialProvider: CredentialProvider.fromString({
        apiKey: '<the api key>',
    }),
});
const publishResponse = await momento.publish(cacheName, topicName, value);
if (publishResponse instanceof TopicPublish.Success) {
    console.log('Value published successfully!');
} else {
    console.log(`Error publishing value: ${publishResponse.toString()}`);
}
```
5. You should now be able to see the events being received by your webhook endpoint. What this endpoint does with the events is up to you!

And that is it! Now even if you have no active subscribers to a Topic, you can still listen and process Topic events with the Webhook. It is worth noting that this Webhook can listen to multiple topics across multiple caches. Since the `topic` and `cache` come as part of the POST body, events can be distinguished by these attributes, and processed in differently depending on which Cache/Topic the event came from. For a more complete example of using Webhooks for event processing, checkout our EventBridge [example](/topics/integrations/lambda-handler), and our [blog post](https://www.gomomento.com/blog/how-to-use-webhooks-and-momento-topics-to-build-a-multi-language-chat-app) about using this pattern to create a multi-language chat application.