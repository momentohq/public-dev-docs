---
sidebar_position: 3
sidebar_label: Getting Started
title: Getting Started
pagination_prev: null
pagination_next: null
description: Jump in and get started quickly using Momento Cache with your SDK of choice.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting started with Momento Cache

If you're looking to jump in and get started with Momento Cache with an SDK, you've come to the right place.

If you want to quickly get a feel for the Momento Cache experience without installing any software? You can do so right here [in your browser](#try-our-cli-and-an-sdk-in-your-browser).

## Step 1: Create your API key

Follow our [step-by-step instructions](./develop/authentication/api-keys.md) to create an API key via the [Momento console](https://console.gomomento.com). Come back here when you have your key.

## Step 2: Store it

There are multiple places you can store the API key you just created. For this simple example, we'll store it in an environment variable, but the best practice is to store it in a secure location like AWS Secrets Manager or GCP Secret Manager.

## Step 3: Grab the SDK, create a cache, and read/write data

<Tabs>
   <TabItem value="node" label="Node.js" default>

Install the Momento SDK and dotenv in your project directory

```cli
npm install @gomomento/sdk
npm install dotenv
```

**Create a .env file**

Create a .env file in the directory to hold your Momento API key and the TTL (in seconds) you want to use by default.

```cli
export MOMENTO_API_KEY=<your key here>
export MOMENTO_TTL_SECONDS=300
```

Copy this code to a file test.js

```javascript
// Declare the Momento SDK library
const { CacheGet, CacheSet, Configurations, ListCaches, CreateCache,
  CacheClient, CredentialProvider } = require('@gomomento/sdk');

// Declate the dotenv library
const dotenv = require('dotenv');

// Defines name of cache to use.
const CACHE_NAME = 'demo-cache';

// Run the config function to bring in the .env file
dotenv.config();

// Creates the Momento cache client object
async function createCacheClient() {
  return CacheClient.create({
    configuration: Configurations.Laptop.v1(),
    credentialProvider: CredentialProvider.fromEnvironmentVariable({
      environmentVariableName: 'MOMENTO_API_KEY',
    }),
    defaultTtlSeconds: 600,
  });
}

// Create a new cache
async function createCache(client) {
  const createCacheResponse = await client.createCache(CACHE_NAME);
  if (createCacheResponse instanceof CreateCache.Success) {
    console.log('Cache created.');
  } else if (createCacheResponse instanceof CreateCache.AlreadyExists) {
    console.log('Cache already exists');
  } else if (createCacheResponse instanceof CreateCache.Error) {
    throw createCacheResponse.innerException();
  }
}

// List all caches in Momento for this account.
async function listCaches(client) {
  const listResponse = await client.listCaches(client);
  if (listResponse instanceof ListCaches.Error) {
    console.log('Error listing caches: ', listResponse.message());
  } else if (listResponse instanceof ListCaches.Success) {
    console.log('Found caches:');
    listResponse.getCaches().forEach(cacheInfo => {
      console.log(' -',cacheInfo.getName());
    });
  } else {
    throw new Error('Unrecognized response: ', listResponse.toString());
  }
}

// A function to write to the cache
async function writeToCache(client, cacheName, key, data) {
  const setResponse = await client.set(cacheName, key, data);
  if (setResponse instanceof CacheSet.Success) {
    console.log('Key stored successfully!');
  } else if (setResponse instanceof CacheSet.Error) {
    console.log('Error setting key: ', setResponse.toString());
  } else {
    console.log('Some other error: ', setResponse.toString());
  }
}

// A function to read scalar items from the cache
async function readFromCache(client, cacheName, key) {
  const readResponse = await client.get(cacheName, key);
  if (readResponse instanceof CacheGet.Hit) {
    console.log('Cache hit: ', readResponse.valueString());
  } else if (readResponse instanceof CacheGet.Miss) {
    console.log('Cache miss');
  } else if (readResponse instanceof CacheGet.Error) {
    console.log('Error: ', readResponse.message());
  }
}

// A simple function that calls all functions in order. You probably want more error handling.
async function run() {
  const cacheClient = await createCacheClient();

  await createCache(cacheClient);

  await listCaches(cacheClient);

  await writeToCache(cacheClient, CACHE_NAME, "code", "12345");
  await readFromCache(cacheClient, CACHE_NAME, "code");
}

run();
```

Run code

```cli
node test.js
```

The output should look something like this:

```cli
[2023-05-21T00:56:37.819Z] INFO (Momento: CacheClient): Creating Momento CacheClient
[2023-05-21T00:56:37.831Z] INFO (Momento: ControlClient): Creating cache: demo-cache
Cache created.
Found caches:
 - demo-cache
Key stored successfully!
Cache hit:  12345
```

   </TabItem>
</Tabs>


## Installing the Momento CLI

You can also install the Momento CLI locally (Linux, Windows, Mac) if desired. The latest version of the CLI and instructions for installation and usage is available in [this repo](https://github.com/momentohq/momento-cli).

## All Momento SDKs

We currently have the following SDK languages available:

- [Node.js](/sdks/nodejs)
- [JavaScript Web SDK](/sdks/web)
- [Python](/sdks/python)
- [.NET](/sdks/dotnet)
- [Go](/sdks/go)
- [PHP](/sdks/php)
- [Java](/sdks/java)
- [Kotlin](/sdks/kotlin)
- [Rust](/sdks/rust)
- [Ruby](/sdks/ruby)
- [Elixir](/sdks/elixir)
- [Swift](/sdks/swift)
- [Dart](/sdks/dart)

## FAQ

<details>
  <summary>Does Momento deploy any resources into my cloud account?</summary>
No, it does not. Momento Cache is a fully managed, API-based, serverless service that you call from within your application code.
</details>
