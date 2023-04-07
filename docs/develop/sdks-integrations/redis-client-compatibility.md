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
Do you have existing apps that use a Redis cache, but now you're trading up to Momento’s services? With Redis compatibility clients, there's no need to refactor your code. Instead, the compatibility clients are a drop-in replacement for existing redis clients. Change your client library to the compatibility client, change the connection information, and the core of your code stays the same.

## Code comparison of a Redis client and Redis compatibility client
<Tabs>
  <TabItem value="nodejs" label="Node.js" default>

<table>
<tr><td width="50%">With node-redis client</td><td width="50%">With Momento's Redis compatibility client</td></tr>
<tr><td width="50%" valign="top">

```node.js
// Import the redis module
import { createClient } from 'redis';

// Replace these values with your Redis server's details
const REDIS_HOST = 'my.redis-server.com';
const REDIS_PORT = 6379;
const REDIS_PASSWORD = '37*Daz743DdoKqLD';

// Create a Redis client
const redisClient = redis.createClient({
    url: 'redis://${REDIS_HOST}:${REDIS_PORT}',
    password: REDIS_PASSWORD
});

```

</td>
<td width="50%">

```node.js
// Import the Momento redis compatibility client.
import * as MomentoRedis from 'momento-redis-client';

// Initialize Momento's client.
import { CacheClient, Configurations, CredentialProvider, } from 'momento-redis-client/node_modules/@gomomento/sdk';

// Create the connection to the Momento Cache or Momento Topic
const redisClient = MomentoRedis.createClient(
  new CacheClient({
    configuration: Configurations.Laptop.v1(),
    credentialProvider: CredentialProvider.fromEnvironmentVariable({
      environmentVariableName: 'MOMENTO_AUTH_TOKEN',
    }),
    //set the TTL for items written with this connection to default to 60 secs.
    defaultTtlSeconds: 60,
  }),
  'cache'
);
```

</td></tr>
</table>

  </TabItem>

</Tabs>

