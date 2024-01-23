---
sidebar_position: 1
sidebar_label: API Reference
title: Topics (pub/sub) API reference
description: Learn how to interact programmatically with Momento Topics pub/sub API.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Using the Momento Topics API
Momento Topics is a messaging pattern enabling real-time communication between parts of a distributed application. It enables you to publish (produce) values to a topic and subscribe (consume) from a topic. This page details the Momento API methods for interacting with Momento Topics.

## TopicClient

Momento Topics API calls are made using a `TopicClient` object.

<SdkExampleTabs snippetId={'API_InstantiateTopicClient'} />

## Topics methods

### Subscribe
This method subscribes to a topic to receive new values with a stateful connection.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache where the topic exists.     |
| topicName       | String          | Name of the topic to subscribe to.            |


<details>
  <summary>Method response object</summary>

* Success - Returns a subscription object.
* Error

See [response objects](./response-objects.md) for specific information.

With the returned subscription object, once put in a for loop, your code will receive an event when a new value is published to the Topic.

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
