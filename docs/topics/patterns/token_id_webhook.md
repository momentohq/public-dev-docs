---
sidebar_position: 30
title: Leverage Momento Topics, webhooks, and tokens in your event-driven architectures
sidebar_label: Identifying unique resources
description: Learn best practices around using Momento Topics, webhooks, and tokens to process unique resources in your event-driven architectures.
keywords:
 - topics
 - webhooks
 - eda
 - momento
 - event-driven architecture
---

# Leverage Momento Topics, webhooks, and tokens in your event-driven architectures

With [Momento Topics](../), you can subscribe to messages on a topic and publish messages to a different topic. [Webhooks](../webhooks/overview) serve as HTTP callbacks triggered in response to messages published to these topics, acting as stateless consumers. [Tokens](../../cache/develop/authentication/tokens) are designed to provide short-lived session tokens for users and services interacting with a system. By embedding unique identifiers (`token_id`) in each token, they ensure secure and traceable access to resources.

The key here is that you can use Topics to facilitate real-time communication between users by granting them short-lived tokens. These tokens can be embedded with user information (`token_id`), which, when messages are published, can be leveraged to access shared resources like Momento caches via webhook callbacks. For instance, you can personalize user experiences by accessing their information stored in a Momento cache by identifying the user through the `token_id`. Embedding information provides two significant advantages:
- It enhances security and prevents a user from spoofing their identity.
- It reduces data transfer costs as the user information is embedded with the token itself.

![Architecture](@site/static/img/topics/patterns/token-id-webhook.png)

## Getting Started
1. [Create a cache in the Momento console](https://console.gomomento.com/caches/create)
2. [Create a webhook](/topics/webhooks/creating-a-webhook) for the cache. Assign the webhook destination to a public facing endpoint. This endpoint must accept POST requests and be able to receive inbound calls from Momento. More detail about the structure of this event is [described here](../webhooks/overview#example-event).
3. Create your infrastructure. For example, below is sample code that creates a lambda function URL for our webhook endpoint. It also stores
your Momento auth token in AWS secrets manager.

```
<SdkExampleCodeBlock language={'javascript'} file={'examples/nodejs/aws/lambda-examples/webhooks/infrastructure/lib/momento-webhook-stack.ts'} />
```

4. Add code to the webhook to process incoming messages. Below is sample code for the webhook lambda handler that extracts a user's `token_id` from the webhook payload, and access resources stored in Momento cache. It also verifies that the webhook caller is indeed Momento through the signing secret.


```
<SdkExampleCodeBlock language={'javascript'} file={'examples/nodejs/aws/lambda-examples/webhooks/lambda/webhook-handler/handler.ts'} />
```

5. Finally, below has sample code for generating the token and publishing user messages on a topic. In a real-world,
these would ideally live in separate micro-services.

```
<SdkExampleCodeBlock language={'javascript'} file={'examples/nodejs/aws/lambda-examples/webhooks/lambda/service-topics/handler.ts'} />
```

## See More
- By integrating Momento topics, webhooks, and tokens, you can create secure and stateless asynchronous systems. This convention can be applied to a variety of use-cases such as multi-language chat app, online polling, and event-driven systems.

```mdx-code-block
import { CardGrid } from '@site/src/components/CardGrid';
import { LinkCard } from '@site/src/components/LinkCard';

<CardGrid>
  <LinkCard
    title="Multi-language chat app"
    link="https://github.com/momentohq/moderated-chat/"
    description="Explore the source code of our live-translation chat app using webhooks."
    />
  <LinkCard
    title="Use webhooks with API Gateway + Lambda"
    link="https://www.gomomento.com/blog/how-to-use-webhooks-and-momento-topics-to-build-a-multi-language-chat-app"
    description="Learn how to integrate Momento webhooks with Amazon API Gateway and Lambda functions"
    />
</CardGrid>
```
