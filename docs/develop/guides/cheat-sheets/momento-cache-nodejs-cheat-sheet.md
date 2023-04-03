---
sidebar_position: 3
sidebar_label: Node.js
sidebar_class_name: sidebar-item-nodejs
title: Cheat Sheet for Node.js + Momento Cache
description: Everything to get you going with coding using Node.js and Momento Cache
---

# Cheat Sheet for Node.js with Momento Cache
If you need to get going quickly with Node.js and Momento Cache, this page contains the basic API calls you'll need. [Check the node.js SDK page](https://github.com/momentohq/client-sdk-nodejs) for this code in a full file format.

## Install the Momento client library

Install the client library in an existing node.js project:

```cli
npm install @gomomento/sdk
```

## Import libraries and connect to return a CacheClient object
This code sets up the main function, the necessary imports,  and the CacheClient instantiation that each of the other functions will need to call.

```javascript
import {
  CacheGet,
  CreateCache,
  CacheSet,
  CacheClient,
  Configurations,
  CredentialProvider,
} from '@gomomento/sdk';

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

## Create a new cache in Momento Cache
Use this function to create a new cache in your account.

```javascript
  const createCacheResponse = await momento.createCache('cache');
  if (createCacheResponse instanceof CreateCache.AlreadyExists) {
    console.log('cache already exists');
  } else if (createCacheResponse instanceof CreateCache.Error) {
    throw createCacheResponse.innerException();
  }
```

## Write an item to a cache
A simple example of doing a set operation. In the client.set call, the TTL it optional. If you did pass it in, this would override the default TTL value set with the client connection object.

```javascript
console.log('Storing key=foo, value=FOO');
const setResponse = await momento.set('cache', 'foo', 'FOO');
if (setResponse instanceof CacheSet.Success) {
    console.log('Key stored successfully!');
} else {
    console.log(`Error setting key: ${setResponse.toString()}`);
}
```

## Read an item from a cache
This is an example of a simple read operation to get an item from a cache.

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

:::info
Beyond these basic API calls check out the [API reference page](../../api-reference/index.mdx) for more information on the full assortment of Momento API calls.
:::