---
sidebar_position: 6
title: Best Practices for Async Process with Momento Topics
sidebar_label: Asynchronous Processing
description: Learn best practices around using Momento Topics and webhooks to process data asynchronously in your event-driven architectures
keywords:
 - topics
 - webhooks
 - eda
 - momento
 - event-driven architecture
 - step functions
---

# Use Momento Topics to process data asynchronously

With Momento Topics, you can subscribe to messages on a Topic, as well as publish messages to a new Topic. Webhooks allow you to connect these Topics to stateless consumers, which can then process these events asynchronously. Whether this is aggregating events by `topic_id`, saving each event to a database, or using the payload to trigger a step function, webhooks give you the flexibility to process these events how you want to. 

The key to asynchnously processing these events it to use _multiple_ topics. An inbound topic, which the Webhook listens to, and a single, or multiple, outbound topics which publish the processed data. For a more advanced use case, you can even send messages back to the publishing client via Topics.

![Architecture](@site/static/img/topics/patterns/asynchronous-processing.png)

## Pre-requisites
1. A public facing endpoint to receive webhook events. This endpoint must accept POST requests and be able to receive inbound calls from Momento. More detail about the structure of this event is [described here.](https://docs.momentohq.com/topics/webhooks/overview#example-event)

## Getting Started
1. [Create a cache in the Momento console](https://console.gomomento.com/caches/create)
2. [Create a webhook](/topics/webhooks/creating-a-webhook) for the cache. Assign the Webhook Destination to the public facing endpoint.
3. Add code to the Webhook to process the incoming messages
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
4. Add a subscriber to this new `topic 2`
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
5. Begin publishing messages to the Topic that the Webhook is listening to. You can use the [Momento SDK](/topics/develop/api-reference) to publish to the topic.
```typescript
import {TopicPublish} from '@gomomento/sdk';
const publishResponse = await topicClient.publish(cacheName, 'topic 1', 'a value');
if (publishResponse instanceof TopicPublish.Success) {
    console.log('Value published successfully!');
} else {
    console.log(`Error publishing value: ${publishResponse.toString()}`);
}
```
6. The subscriber to `topic 2` should now be receiving the uppercase messages, and logging the messages to the console!

And that is it! For a more complete example of using Webhooks for event processing, checkout our EventBridge [example](/topics/integrations/lambda-handler), and our [blog post](https://www.gomomento.com/blog/how-to-use-webhooks-and-momento-topics-to-build-a-multi-language-chat-app) about using this pattern to create a multi-language chat application.