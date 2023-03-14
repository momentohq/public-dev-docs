---
sidebar_position: 4
sidebar_label: Topics (Pub/Sub)
title: Topics (Pub/sub) API reference
description: Learn how to interact with the API for pub/sub in Momento Serverless Cache.
slug: /develop/api-reference/topics
---

# Using the Momento Topics (pub/sub) API with Momento Serverless Cache
This page details the Momento API methods for Momento Topics, a high speed low drag serverless pub/sub feature.

## Topics methods

### PollForMessages
Polls for messages from a Topic. If the set item does not already exist, this method will create one.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | Name of the cache.                            |
| topicName         | String          | Name of the topic to publish to. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

### PublishMessages
Publishes a message to the Topic. If the set item does not already exist, this method will create one.

| Name            | Type            | Description                                   |
| --------------- | --------------- | --------------------------------------------- |
| topicClient       | String          | Name of the cache.                            |
| topicName         | String          | Name of the topic to publish to. |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

## TopicClient

Instead of the CacheClient used in most Momento Serverless Cache API calls, 