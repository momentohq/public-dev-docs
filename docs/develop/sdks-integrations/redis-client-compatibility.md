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

:::info

Momento Cache and Momomento Topics do not support all of Redis' operations and datatypes. If a Redis operation is not supported by the Redis compatibility client, it will throw an error.

:::

## Comparison of Redis client and Redis compatibility client

Below is a side by side comparison of the redis client code on the left and Momento's Redis compatibility client on the right.
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
import {createClient, Momento} from 'momento-redis-client';

// Initialize Momento's client.
const redisClient = createClient(
  new Momento.CacheClient({
    configuration: Momento.Configurations.Laptop.v1(),
    credentialProvider: Momento.CredentialProvider.fromEnvironmentVariable({
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

  </TabItem>
</Tabs>

If there is a Redis operation the Redis compatibility client do not currently support, but you need. Please message [Momento Support](mailto:support@momentohq.com).