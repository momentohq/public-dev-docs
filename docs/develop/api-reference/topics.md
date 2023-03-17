---
sidebar_position: 4
sidebar_label: Topics (Pub/Sub)
title: Topics (pub/sub) API reference
description: Learn how to interact programmatically with Momento Topics pub/sub API.
slug: /develop/api-reference/topics
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Using the Momento Topics (pub/sub) API with Momento Serverless Cache
Momento Topics is a messaging pattern that allows for real-time communication between parts of a distributed application. It enables you to publish (produce) values to a topic, as well as subscribe (consume) from a topic. This page details the Momento API methods for interacting with Momento Topics.

## Topics methods

### Subscribe
This method subscribes to a topic to receive new values with a stateful connection.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache where the topic exists.     |
| topicName       | String          | Name of the topic to subscribe to.            |

<Tabs>
  <TabItem value="golang" label="Go" default>
    This is <a href="https://github.com/momentohq/client-sdk-go/blob/main/examples/pubsub-example/main.go#L26">example code</a>.
  </TabItem>
  <TabItem value="nodejs" label="Node.js" default>
    Coming soon.
  </TabItem>
</Tabs>

<details>
  <summary>Method response object</summary>

* Success - Returns a subscription object.
* Error

See [response objects](./response-objects.md) for specific information.

With the returned subscription object, once put in a for loop, your code will receive an event when a new value is published to the Topic.

</details>

### Publish
Publishes a message to a topic.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache where the topic exists.     |
| topicName       | String          | Name of the topic to publish the value to.    |
| value           | String / bytes  | Value to publish to the topic.                |

<Tabs>
  <TabItem value="golang" label="Go" default>
    This is <a href="https://github.com/momentohq/client-sdk-go/blob/main/examples/pubsub-example/main.go#L95">example code</a>.
  </TabItem>
  <TabItem value="nodejs" label="Node.js" default>
    Coming soon.
  </TabItem>
</Tabs>

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

## TopicClient

Instead of the CacheClient, as used in most Momento Serverless Cache API calls, for Topics you use a TopicClient object.