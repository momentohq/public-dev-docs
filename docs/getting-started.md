---
sidebar_position: 3
sidebar_label: Getting Started
sidebar_class_name: sidebar-item-getting-started
title: Getting Started
pagination_prev: null
pagination_next: null
description: Jump in and get started quickly using Momento Cache and Momento Topics with your SDK of choice.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started with Momento Cache and Momento Topics

TESTING SOME DYNAMICALLY INJECTED EXAMPLE CODE:

```javascript
%%%example:typescript:code:ListCaches%%%
```

%%%example:go:description:Logging%%% %%%example:go:code:Logging%%%


If you're looking to jump in and get started with Momento Cache with an SDK, you've come to the right place.

If you want to quickly get a feel for the Momento Cache experience without installing any software? You can do so right here [in your browser](#try-our-cli-and-an-sdk-in-your-browser).

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

## Step 4: Grab the SDK, create a cache, and read/write data

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
  return new CacheClient({
    configuration: Configurations.Laptop.v1(),
    credentialProvider: CredentialProvider.fromEnvironmentVariable({
      environmentVariableName: 'MOMENTO_AUTH_TOKEN',
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
    console.log('Cache hit: ', fileResponse.valueString());
  } else if (fileResponse instanceof CacheGet.Miss) {
    console.log('Cache miss');
  } else if (fileResponse instanceof CacheGet.Error) {
    console.log('Error: ', fileResponse.message());
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

## Try our CLI and an SDK in your browser

You can try out Momento Cache today, right in your browser. No software installation required!

:::note
Momento Cache is a fully-managed, API-based, serverless service. It does not deploy any resources in your (AWS, GCP, Azure, etm.) accounts.
:::

<br />

First, request your free auth token, create a cache, configure your CLI, and start running `set` and `get` commands on your cache. Launch below.

<a href="https://play.instruqt.com/embed/momento/tracks/sandbox-container-1challenge?token=em_54kTDywfWaG95-rC&finish_btn_target=_top&finish_btn_text=Return+to+Docs&finish_btn_url=https%3A%2F%2Fdocs.momentohq.com%2Fgetting-started#try-our-cli-and-an-sdk-in-your-browser" target="_top"><img src="/img/cli_lab.png" alt="CLI lab" /></a>

<br />
<br />

Then, use the auth token and cache you just created to run a JavaScript application using our Node.js SDK. Launch below.

<a href="https://play.instruqt.com/embed/momento/tracks/momento-nodejs-demo?token=em_f8PM8Aob-mHIfOTT&finish_btn_target=_top&finish_btn_text=Return+to+Docs&finish_btn_url=https%3A%2F%2Fdocs.momentohq.com%2Fgetting-started#try-our-cli-and-an-sdk-in-your-browser" target="_top"><img src="/img/sdk_lab.png" alt="SDK lab" /></a>

<br />
<br />

Want to experiment with Momento Topics? This demo lets you subscribe to Topic messages in one pane, while publishing
messages to the topic in a second pane! Launch below.

<a href="https://play.instruqt.com/embed/momento/tracks/topics-on-the-momento-cli?token=em_Q_mgzhVtWtP5B_jj&finish_btn_target=_top&finish_btn_text=Return+to+Docs&finish_btn_url=https%3A%2F%2Fdocs.momentohq.com%2Fgetting-started#try-our-cli-and-an-sdk-in-your-browser" target="_top"><img src="/img/topics_lab.png" alt="Topics lab" /></a>

<br />
<br />


## All Momento SDKs

We currently have the following SDK's languages available. Check out each repo for detailed instructions and usage examples.

- [Go](https://github.com/momentohq/client-sdk-go)
- [Java](https://github.com/momentohq/client-sdk-java)
- [Node.js](https://github.com/momentohq/client-sdk-nodejs)
- [Python](https://github.com/momentohq/client-sdk-python)
- [.NET](https://github.com/momentohq/client-sdk-dotnet)
- [Rust](https://github.com/momentohq/client-sdk-rust)
- [PHP](https://github.com/momentohq/client-sdk-php)
- [Ruby](https://github.com/momentohq/client-sdk-ruby)

## FAQ
<details>
  <summary>Does Momento deploy any resources into my cloud account?</summary>
No it does not. Momento Cache is a fully-managed, API-based, serverless service that you call from within your application code.
</details>
