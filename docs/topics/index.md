---
sidebar_position: 1
sidebar_label: Overview
title: Topics
pagination_prev: null
description: Learn about Momento Topics, a high-speed, low-drag serverless pub/sub (publish/subscribe) messaging pattern for real-time application communication.
hide_title: true
keywords:
  - momento
  - topics
  - event-driven architecture
  - eda
  - websockets
  - real-time
  - serverless
---

# What is Momento Topics?

Momento Topics is a high-speed, low-drag serverless pub/sub (publish/subscribe) messaging pattern that allows for real-time communication between parts of a distributed system. It enables your apps to subscribe to *topics*, or dedicated channels, to receive items sent by your app’s publishers. As the Momento Topics service is serverless, there is no infrastructure to create or manage and no pub/sub topic to instantiate. When you publish an item to a topic, if it does not exist yet, the topic is created. As Topics utilizes Momento Cache, there is no scaling configuration either.

## How does Momento Topics work?

Momento Topics is a serverless service that enables efficient real-time communication between different parts of a distributed system. The pub/sub service promotes a decoupled architecture, where publishers (producers) send items to specific topics without needing to know the identities or locations of the subscribers (consumers). Subscribers listen for items on one or more topics of interest, receiving all items published to those topics by the publishers.

This topic-based communication allows for effective routing and filtering, as subscribers only receive items relevant to their subscribed topics, enabling them to focus on these specific topics. This approach simplifies the implementation of real-time applications, such as chat systems, notifications, or data streaming.

Momento Topics operates on a fire-and-forget messaging model, which means that once an item is published, it is immediately sent to all current subscribers of the topic and then discarded. There is no built-in item persistence or delivery guarantees. Consequently, Momento Topics is most suitable for applications where low latency is crucial and occasional item loss can be tolerated.

:::note

As Momento Topics uses Momento Cache as its backend, you either use an existing cache or create a new cache in Momento Cache, then call the [Momento Topics publish and subscribe API](/topics/api-reference).

:::

## Where can I use Momento Topics?

You can think of Topics almost like a managed WebSocket service that handles channels and connections for you, with one upside - it connects everything!

![A diagram showing service-to-service, service-to-browser, and browser-to-browser connectivity with Topics](@site/static/img/topics-connections.png)

### Connect from browsers and mobile apps

You can both publish and subscribe to Topics in a browser, or on iOS or Android devices using our front-end SDKs. When publishing data to a Topic, all subscribers will receive the data, meaning you can connect browsers together without building any server-side infrastructure!

* [Momento Web SDK](/platform/sdks/web/index.md) (for JavaScript browser apps)
* [Momento Swift SDK](/platform/sdks/swift/index.md) (for native iOS apps)
* [Momento Kotlin SDK](/platform/sdks/kotlin/index.md) (for native Android apps)
* [Momento Dart SDK](/platform/sdks/dart/index.md) (for Flutter apps)

### Connect from servers

You can also publish and subscribe to Topics in your backend services. Here are SDKs that support server-side development:

* [Momento Node.js SDK](/platform/sdks/nodejs/index.md)
* [Momento Go SDK](/platform/sdks/go/index.md)
* [Momento Java SDK](/platform/sdks/java/index.md)
* [Momento Kotlin SDK](/platform/sdks/kotlin/index.md)
* [Momento Python SDK](/platform/sdks/python/index.md)
* [Momento .NET SDK](/platform/sdks/dotnet/index.md)

:::note

As a heads up, Momento Topics requires a stateful connection for subscribers, so it's not the best match for serverless functions like Lambda or Cloudflare workers. However, if you're looking to publish data, that's completely stateless and works perfectly in a function!

:::

## Examples

- [A serverless item publishing microservice](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/lambda-examples/topics-microservice) This microservice is written in TypeScript and runs on AWS using API Gateway, a Lambda function, and Momento Topics. It can be used by any of your other services (with the correct security on API Gateway) to publish messages to various topics that are then subscribed to by other applications. You pass into this API a `topicName` and `topicValue` and this service publishes the value to that topic.

- [Using topics inside a Next.js chat application](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat) This application is written in TypeScript using the Next.js framework. A user selects a chatroom to join, using a cache and topic name. There is an API that distributes low-scope, short-lived tokens to the front end, which the browser uses to subscribe to the topic. When the token expires, the frontend calls the API to get a new token and resubscribes to the topic automatically. There is a [static version](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/vite-chat-app) of this application as well, which requires an API available to vend tokens to the front end.

## Blog posts

- [Introducing Momento Topics](https://www.gomomento.com/blog/momento-just-got-more-powerful-introducing-topics) - A simply priced, fully serverless event messaging system ready for massive scale.
- [Event routing with Momento Topics](https://www.gomomento.com/blog/build-on-momento-event-routing-with-momento-topics) - Find out how simple it is to introduce events into your architecture with Momento Topics.
- [Why are WebSockets so Hard?](https://www.gomomento.com/blog/why-are-websockets-so-hard) - A look into what makes WebSockets so difficult and how Momento Topics solves them.

## API calls for Momento Topics

See [API reference page for Topics](/topics/api-reference).

## Language support for Momento Topics
Learn more about the SDKs available for different programming languages on our [Language Support Page](./develop/language-support/language-support.md).


## Demo

Interested in taking Topics out for a spin? You can try it out for free directly in the [Momento Console](https://console.gomomento.com/topics). Select your region and cache, enter a topic name, and start sending messages!

## Frequently asked questions about Momento Topics

<details>
  <summary>If an app subscribes to a topic after an item has been published, will it still get that item?</summary>
No. A subscriber does not have access to historical items on a Topic.
</details>
