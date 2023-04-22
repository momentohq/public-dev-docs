---
sidebar_position: 3
sidebar_label: Getting Started
sidebar_class_name: sidebar-item-getting-started
title: Getting Started
pagination_prev: null
pagination_next: null
description: Jump in and get started quickly using Momento Cache with your SDK of choice or CLI.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started with Momento Cache
If you're looking to jump in and get started with Momento Cache with an SDK or CLI, you've come to the right place. Want to quickly get a feel for the Momento experience without installing any software? You can do so right here [in your browser](#try-our-cli-and-an-sdk-in-your-browser). Or, if you're ready to setup your development environment and get to building your own applications with Momento you can follow the [simple instructions below](#install-the-momento-command-line-interface-cli).

## Step 1: Sign up and log into the Momento console
[Go to the Momento Console](https://console.gomomento.com/) and follow the instructions to login with your email address, Google account, or GitHub account.

![image](/img/getting-started/console.png)

## Step 2: Create an authentication token in the Momento console
In the console, open the menu and select Token.

![image of console menu](/img/getting-started/auth-token.gif)

On the token page, select your 1/ cloud provider, 2/ an available Region from the drop down list, and 3/ hit the "Generate Token" button.

![image](/img/getting-started/select-provider-region.png)

Scroll down and you will see your token in a grey box. The token in the screenshot has been blurred out, but yours won't be. Click on the copy icon to copy the token to your clipboard.

![image](/img/getting-started/generated-token.png)

## Step 3: Store auth token
There are multiple places you can store the auth token used to authenticate with Momento. For this simple example, we'll store the auth token in an environment variable, but best practice is to store the auth token in something like AWS Secrets Manager or GCP Secret Manager.

## Step 4: Create a cache
<Tabs>
   <TabItem value="node" label="Node.js" default>

Install the Momento SDK and dotenv in your project directory

```cli
npm install @gomomento/sdk
nom install dotenv
```

**Create a .env file**

Create a .env file in the directory to hold your Momento auth token and the TTL (in seconds) you want to use by default.

```cli
export MOMENTO_AUTH_TOKEN=<your Momento token here>
export MOMENTO_TTL_SECONDS=300
```

Copy this code to a file test.js

```javascript
// Declare the Momento SDK library
const { CacheGet, CacheSet, Configurations, ListCaches, 
  CacheClient, CredentialProvider } = require('@gomomento/sdk');

// Declate the dotenv library
const dotenv = require('dotenv');

// Defines name of cache to use.
const CACHE_NAME = 'demo-cache';

// Run the config function to bring in the .env file
dotenv.config();

// Creates the Momento cache client object
async function createCacheClient() {
  return new CacheClient({
    configuration: Configurations.Laptop.v1(),
    credentialProvider: CredentialProvider.fromEnvironmentVariable({
      environmentVariableName: 'MOMENTO_AUTH_TOKEN',
    }),
    defaultTtlSeconds: 600,
  });
}

// List all cache in Momento for this account.
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
  const fileResponse = await client.get(cacheName, key);
  if (fileResponse instanceof CacheGet.Hit) {
    console.log('cache hit: ', fileResponse.valueString());
  } else if (fileResponse instanceof CacheGet.Miss) {
    console.log('cache miss');
  } else if (fileResponse instanceof CacheGet.Error) {
    console.log('Error: ', fileResponse.message());
  }
}

// A simple function that calls all functions in order. You probably want more error handling.
async function run() {
  const cacheClient = await createCacheClient();

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

   </TabItem>
</Tabs>