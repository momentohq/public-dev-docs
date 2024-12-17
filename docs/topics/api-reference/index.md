---
sidebar_position: 2
sidebar_label: API Reference
title: Topics API reference
description: Learn how to interact programmatically with the Momento Topics API.
keywords:
  - momento
  - topics
  - pubsub
  - pub/sub
  - eda
  - event-driven architecture
  - serverless
  - resources
  - api
  - docs
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Using the Momento Topics API

Momento Topics is a messaging pattern enabling real-time communication between parts of a distributed application. It enables you to publish (produce) values to a topic and subscribe (consume) from a topic. This page details the Momento API methods for interacting with Momento Topics.

## TopicClient

Momento Topics API calls are made using a `TopicClient` object.

<SdkExampleTabs snippetId={'API_InstantiateTopicClient'} />

## Topics methods

### Subscribe
This method subscribes to a topic to receive subscription events with a stateful connection.

Depending on the language, you may use a callback function or an iterator to receive new subscription events, such as items, heartbeats, and discontinuities:
- Items include a string or byte message, topic sequence number, and a unique token identifier if one is present ([learn more](https://www.gomomento.com/blog/momento-topics-just-got-more-secure-introducing-embedded-token-identifiers)).
- Heartbeats indicate that the connection is still active.
- Discontinuities indicate that there was an interruption in the subscription and some messages may have been skipped.


| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache where the topic exists.     |
| topicName       | String          | Name of the topic to subscribe to.            |


<details>
  <summary>Method response object</summary>

* Success - Returns a [subscription](./response-objects.md#subscription) object.
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_TopicSubscribe'} />

### Publish
Publishes a message to a topic.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache where the topic exists.     |
| topicName       | String          | Name of the topic to publish the value to.    |
| value           | String / bytes  | Value to publish to the topic.                |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_TopicPublish'} />

## Example apps using Momento Topics APIs

A growing list of example apps using the Momento Topics.

- [A serverless item publishing microservice](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/lambda-examples/topics-microservice) This microservice is written in TypeScript and runs on AWS using API Gateway, a Lambda function, and Momento Topics. It can be used by any of your other services (with the correct security on API Gateway) to publish messages to various topics that are then subscribed to by other applications. You pass into this API a `topicName` and `topicValue` and this service publishes the value to that topic.
