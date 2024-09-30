---
sidebar_position: 20
title: Best practices for async processing with Momento Topics
sidebar_label: Running background tasks
description: Learn best practices around using Momento Topics and webhooks to process data asynchronously in your event-driven architectures.
keywords:
 - topics
 - webhooks
 - eda
 - momento
 - event-driven architecture
 - Step Functions
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Use Momento Topics to process data asynchronously

With [Momento Topics](../), you can subscribe to messages on a topic, as well as publish messages to a different topic. [Webhooks](../webhooks/overview) allow you to connect these topics to stateless consumers, which can then process these events asynchronously. Whether this is aggregating events by `topic_id`, saving each event to a database, or using the payload to trigger a Step function workflow, webhooks give you the flexibility to process these events how you want to.

The key to asynchronously processing these events is to use _multiple_ topics. An inbound topic, which the webhook listens to, and a single, or multiple, outbound topics which publish the processed data.

![Architecture](@site/static/img/topics/patterns/asynchronous-processing.png)

In this diagram, `Topic 1` is the `inbound` topic, and `Topic 2` is the `outbound` topic.

## Pre-requisites
1. A public-facing endpoint to receive webhook events. This endpoint must accept POST requests and be able to receive inbound calls from Momento. More detail about the structure of this event is [described here](../webhooks/overview#example-event).

## Getting Started
1. [Create a cache in the Momento console](https://console.gomomento.com/caches/create)
2. [Create a webhook](/topics/webhooks/creating-a-webhook) for the cache. Assign the webhook destination to the public facing endpoint.
3. Add code to the webhook to process the incoming messages. For example, if your webhook is implemented as an AWS Lambda function behind an API Gateway, then here is some very simple code that processes the incoming message, converts it to upper case, and then publishes it to the outbound topic:


```
<SdkExampleCodeBlock language={'javascript'} file={'examples/nodejs/webhooks/doc-example-files/webhook-lambda-handler.ts'} />
```

4. On the client side, add a subscriber to this new `topic 2`

<SdkExampleTabs snippetId={'API_TopicSubscribe'} />

5. Begin publishing messages to the topic that the webhook is listening to. You can use the [Momento SDK](/topics/api-reference) to publish to the topic.

<SdkExampleTabs snippetId={'API_TopicPublish'} />

6. The subscriber to `topic 2` should now be receiving the uppercase messages, and logging the messages to the console!

And that is it! This is an extremely basic example of string conversion, but this pattern holds true for more advanced asynchronous processing, such as saving state to a db or publishing messages to a queue. This topics pattern allows for clients to be completely agnostic of the downstream consumer, if the load for the application outgrows an environment such as API Gateway + Lambda function, you can easily replace it with containers or EC2 instances. For a more complete example of using webhooks for event processing, checkout our EventBridge [example](/topics/integrations/lambda-handler), and our [blog post](https://www.gomomento.com/blog/how-to-use-webhooks-and-momento-topics-to-build-a-multi-language-chat-app) about using this pattern to create a multi-language chat application.
