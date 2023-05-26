---
sidebar_position: 3
sidebar_label: TypeScript+Node.js
sidebar_class_name: sidebar-item-nodejs
title: Cheat Sheet for TypeScript and Node.js
description: Get started really quickly coding using TypeScript and Node.js with Momento Cache
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cheat Sheet for Node.js with Momento Cache
If you need to get going quickly with Node.js + TypeScript and Momento Cache, this page contains the basic API calls you'll need. [Check the node.js SDK examples](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs) for this code in a full file format.

## Install the Momento client library

Install the client library in an existing node.js project:

```cli
npm install @gomomento/sdk
```

## Create a .env file
You'll need to create a .env file to hold your Momento Cache auth token and the TTL (in seconds) you want to use by default.

```
export MOMENTO_AUTH_TOKEN=<your Momento token here>
export MOMENTO_TTL_SECONDS=300
```

## Import libraries and connect to return a CacheClient object
This code sets up the main function, the necessary imports,  and the CacheClient instantiation that each of the other functions will need to call.

  <Tabs>
    <TabItem value="ts" label="TypeScript" default>

  ```typescript
  import {
    CacheGet,
    CreateCache,
    CacheSet,
    CacheClient,
    Configurations,
    CredentialProvider,
  } from '@gomomento/sdk';

  import dotenv from 'dotenv';

  dotenv.config();

  async function main() {
    const momento = new CacheClient({
      configuration: Configurations.Laptop.v1(),
      credentialProvider: CredentialProvider.fromEnvironmentVariable({
        environmentVariableName: 'MOMENTO_AUTH_TOKEN',
      }),
      defaultTtlSeconds: 60,
    });

  main()
    .then(() => {
      console.log('success!!');
    })
    .catch((e: Error) => {
      console.error(`Uncaught exception while running example: ${e.message}`);
      throw e;
    });
  ```

  </TabItem>
  <TabItem value="nodejs" label="Node.js" default>
    Coming soon.
  </TabItem>
</Tabs>

## Create a new cache in Momento Cache
Use this function to create a new cache in your account.

<Tabs>
  <TabItem value="ts" label="TypeScript" default>

  ```javascript
    const createCacheResponse = await momento.createCache('cache');
    if (createCacheResponse instanceof CreateCache.AlreadyExists) {
      console.log('cache already exists');
    } else if (createCacheResponse instanceof CreateCache.Error) {
      throw createCacheResponse.innerException();
    }
  ```

  </TabItem>
  <TabItem value="nodejs" label="Node.js" default>
    Coming soon.
  </TabItem>
</Tabs>

## List the names of existing caches in your account
A simple list of the names of caches for the account.

<Tabs>
  <TabItem value="ts" label="TypeScript" default>

  ```javascript
  console.log('Listing caches:');
  const listResponse = await momento.listCaches();
  if (listResponse instanceof ListCaches.Error) {
    console.log(`Error listing caches: ${listResponse.message()}`);
  } else if (listResponse instanceof ListCaches.Success) {
    console.log('Found caches:');
    listResponse.getCaches().forEach(cacheInfo => {
      console.log(`${cacheInfo.getName()}`);
    });
  } else {
    throw new Error(`Unrecognized response: ${listResponse.toString()}`);
  }
  ```

  </TabItem>
  <TabItem value="nodejs" label="Node.js" default>
    Coming soon.
  </TabItem>
</Tabs>

## Write an item to a cache
A simple example of doing a set operation. In the client.set call, the TTL it optional. If you did pass it in, this would override the default TTL value set with the client connection object.

<Tabs>
  <TabItem value="ts" label="TypeScript" default>

  ```javascript
  console.log('Storing key=foo, value=FOO');
  const setResponse = await momento.set('cache', 'foo', 'FOO');
  if (setResponse instanceof CacheSet.Success) {
      console.log('Key stored successfully!');
  } else {
      console.log(`Error setting key: ${setResponse.toString()}`);
  }
  ```

  </TabItem>
  <TabItem value="nodejs" label="Node.js" default>
    Coming soon.
  </TabItem>
</Tabs>



## Read an item from a cache
This is an example of a simple read operation to get an item from a cache.

<Tabs>
  <TabItem value="ts" label="TypeScript" default>

  ```javascript
    const getResponse = await momento.get('cache', 'foo');
    if (getResponse instanceof CacheGet.Hit) {
      console.log(`cache hit: ${getResponse.valueString()}`);
    } else if (getResponse instanceof CacheGet.Miss) {
      console.log('cache miss');
    } else if (getResponse instanceof CacheGet.Error) {
      console.log(`Error: ${getResponse.message()}`);
    }
  ```
  
  </TabItem>
  <TabItem value="js" label="JavaScript" default>
    Coming soon.
  </TabItem>
</Tabs>

## Running the code
If you download the [entire file](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/basic.ts), then run this command to execute the code.

```cli
npx ts-node basic.ts
```

:::info
Beyond these basic API calls check out the [API reference page](../../api-reference/index.mdx) for more information on the full assortment of Momento API calls.

Follow this link to see this same type of code but for [more advanced calls](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/advanced.ts). 
:::
