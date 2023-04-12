---
sidebar_position: 1
sidebar_class_name: sidebar-item-redis
sidebar_label: Redis compatibility client
pagination_prev: null
title: Redis compatibility client
description: Quickly switch from using Redis to Momento Cache with these drop in replacement client libraries
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Redis compatibility client for Momento Cache and Momento Topics
Do you have existing apps that use a Redis cache, but now you're trading up to Momento’s services? With Redis compatibility clients, there's no need to refactor your code. Instead, compatibility clients are a drop-in replacement for existing Redis clients. Change your client library to the compatibility client, change the connection information, and the core of your code stays the same.

This client facilitates you using Momento Cache as your cache engine for any node.js frameworks that support a redis-backed cache, such as [Express.js](https://github.com/expressjs/express). See the [examples section](https://github.com/momentohq/momento-node-redis-client#examples) for more info.

## Current Redis API Support
This library supports the most popular Redis APIs, but does not yet support all Redis APIs. We currently support the most common APIs related to string values (GET, SET, etc.) and hash values (HGETALL, HSET, etc.). We will be adding support for additional APIs in the future. If there is a particular API that you need support for, please drop by our [Discord](https://discord.com/invite/3HkAKjUZGq) or e-mail [Momento Support](mailto:support@momentohq.com) and let us know!

In the meantime, if you call a method from the `@redis/client` API that we do not yet support, you will get a `TypeError` letting you know that the method is not implemented yet.

## Comparison of Redis client and Redis compatibility client

Below is a side by side comparison of the redis client code on the left and Momento's Redis compatibility client on the right. To switch your existing `@redis/client` application to use Momento Cache, you only need to change the code where you construct your client object:
<Tabs>
  <TabItem value="nodejs" label="Node.js" default>

<table>
<tr>
  <td width="50%">With node-redis client</td>
  <td width="50%">With Momento's Redis compatibility client</td>
</tr>
<tr>
  <td width="50%" valign="top">

```javascript
// Import the redis module
import { createClient } from 'redis';

// Replace these values with your Redis server's details
const REDIS_HOST = 'my.redis-server.com';
const REDIS_PORT = 6379;
const REDIS_PASSWORD = 'mypasswd';

// Create a Redis client
const redisClient = redis.createClient({
    url: 'redis://${REDIS_HOST}:${REDIS_PORT}',
    password: REDIS_PASSWORD
});

```

</td>
<td width="50%">

```javascript
// Import the Momento redis compatibility client.
import {createClient, momento} from '@gomomento-poc/node-redis-client';

// Initialize Momento's client.
const redisClient = createClient(
  new momento.CacheClient({
    configuration: momento.Configurations.Laptop.v1(),
    credentialProvider: momento.CredentialProvider.fromEnvironmentVariable({
      environmentVariableName: 'MOMENTO_AUTH_TOKEN',
    }),
    defaultTtlSeconds: 60,
  }),
  'cache_name'
);

```

  </td>
</tr>
</table>

For more in-depth information, with example code, please see the [Momento Node.js Redis compatibility client on GitHub](https://github.com/momentohq/momento-node-redis-client#momento-nodejs-redis-client).
  </TabItem>
</Tabs>