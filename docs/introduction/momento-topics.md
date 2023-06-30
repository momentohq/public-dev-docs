---
sidebar_position: 1
sidebar_label: Momento Topics
sidebar_class_name: sidebar-item-overview
title: What is Momento Topics?
pagination_prev: null
description: Learn about Momento Topics, a high-speed, low-drag serverless pub/sub (publish/subscribe) messaging pattern for real-time application communication.
---

# What is Momento Topics?

Momento Topics is a high-speed, low-drag serverless pub/sub (publish/subscribe) messaging pattern that allows for real-time communication between parts of a distributed system. Momento Topics allows your apps to subscribe to topics to receive items published to the topic by your app’s publishers. As the Momento Topics service is serverless, there is no infrastructure to create or manage and no pub/sub topic to instantiate. When you publish an item to a topic, if it does not exist yet, the topic is created. As Topics utilizes Momento Cache, there is no scaling either. You’re charged just for [the data transferred in and out](./../manage/pricing).

![An image of a fast moving city as Momento Topics](./../../static/img/topics-city.jpg)

## How does Momento Topics work?

Momento Topics (pub/sub) is a serverless service that enables efficient real-time communication between different parts of a distributed system. The pub/sub service promotes a decoupled architecture, where publishers (producers) send items to specific topics without needing to know the identities or locations of the subscribers (consumers). Subscribers listen for items on one or more topics of interest, receiving all items published to those topics by the publishers.

This topic-based communication allows for effective routing and filtering, as subscribers only receive items relevant to their subscribed topics, enabling them to focus on these specific topics. This approach simplifies the implementation of real-time applications, such as chat systems, notifications, or data streaming.

Momento Topics operates on a fire-and-forget messaging model, which means that once an item is published, it is immediately sent to all current subscribers of the topic and then discarded. There is no built-in item persistence or delivery guarantees. Consequently, Momento Topics is most suitable for applications where low latency is crucial, and occasional item loss can be tolerated.

:::note

As Momento Topics uses Momento Cache as its backend, you either use an existing cache or create a new cache in Momento Cache, then call the [Momento Topics publish and subscribe API](./../develop/api-reference/topics.md).

:::

## Examples

- [A serverless item publishing microservice](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/lambda-examples/topics-microservice) This micro application written in TypeScript runs on AWS using API Gateway, a Lambda function, and Momento Topics. The microservice can be used by any of your other services (with the correct security) to publish messages to various topics that are then subscribed to by other applications. You pass into this API a `topicName` and `topicValue` and this service publishes the value to that topic.

## API calls for Momento Topics
See [API reference page for Topics](./../develop/api-reference/topics.md).

<br />
<br />

If you'd like to try out Momento Topics, click for a free sandbox demo.
<a href="https://play.instruqt.com/embed/momento/tracks/topics-on-the-momento-cli?token=em_Q_mgzhVtWtP5B_jj&finish_btn_target=_top&finish_btn_text=Go+to+Docs&finish_btn_url=https%3A%2F%2Fdocs.momentohq.com%2Fdevelop%2Fapi-reference%2Ftopics"><img src="/img/topics-instruct.png" alt="Momento Topics lab" /></a>

## Frequently asked questions about Momento Topics (pub/sub)

<details>
  <summary>If an app subscribes to a topic after an item has been published, will it still get that item?</summary>
No. A subscriber does not have access to historical items on a Topic.
</details>
