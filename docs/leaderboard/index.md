---
sidebar_position: 1
sidebar_class_name: sidebar-item-overview
sidebar_label: Momento Leaderboard
title: Momento Leaderboard Documentation
description: Learn about Momento's purpose-built Leaderboard API
pagination_next: null
---

## What is Momento Leaderboard?

Momento Leaderboard is a purpose-built leaderboard that supports tens of millions of items and rapid ingestion/querying/updates. While many databases approximate leaderboards via general purpose data structures like sorted set or range queries, Momento Leaderboard is a first-class, full-fledged service that you can quickly and easily integrate with your application. 

## Getting Started with Momento Leaderboard

### Step 1: Create your Momento API key and cache

Go to the [Momento console](https://console.gomomento.com/tokens) and follow the instructions to log in with your email
address, Google account, or GitHub account.

![Image of Momento console landing page](@site/static/img/getting-started/console.png)

Click on the Create Cache button and create a cache using the cloud provider and region you want to use for your Momento Leaderboard.

![Image of Momento console Create Cache form](@site/static/img/console-create-cache-form.png)

Then create an API key via the [Momento console](https://console.gomomento.com) on the Generate API Key screen by selecting the [API Keys](https://console.gomomento.com/tokens) menu option.

Once on the API key page, select the information that matches where your caches live:

1. Cloud provider - AWS
2. Region - us-west-2
3. Key Type - Super User
4. (Optional) Expiration date

![Image showing the fields to create a new API key](@site/static/img/getting-started/select-provider-region-us-west-2.png)

### Step 3: Create a Momento Leaderboard

```javascript
// Create a new leaderboard client, which you can use to create
// as many leaderboards as you wish
const client = new PreviewLeaderboardClient({
  configuration: LeaderboardConfigurations.Laptop.v1(),
  credentialProvider: CredentialProvider.fromEnvironmentVariable({
    environmentVariableName: 'MOMENTO_API_KEY',
  }),
});

// Create a new leaderboard with the given cache and leaderboard name
const leaderboard = client.leaderboard('my-cache', 'my-leaderboard');
```

### Step 4: Upsert, fetch, and remove elements

Check out the [Node.js example](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/leaderboard.ts) for code samples of how to call each API.

See the [API reference section for Leaderboard](./develop/api-reference/index.md) for more information.

## Frequently asked questions about Momento Topics

<details>
  <summary>What's the difference between Momento Leaderboard and Redis Sorted Sets?</summary>
  Momento Leaderboard has a much more efficient memory footprint, allowing us to scale to tens of millions of records. 
  Additionally, we will soon offer more purpose-built APIs for leaderboards, like competition ranking.
</details>

<details>
  <summary>Do Momento Leaderboard items expire?</summary>
  No, Momento Leaderboard items have no TTL.
</details>