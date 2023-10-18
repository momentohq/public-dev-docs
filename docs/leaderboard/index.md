---
sidebar_position: 1
sidebar_class_name: sidebar-item-overview
sidebar_label: Momento Leaderboard
title: Momento Leaderboard Documentation
description: Learn about Momento's purpose-built Leaderboard API
pagination_next: null
---

## What is Momento Leaderboard?

Momento Leaderboards is a purpose-built leaderboard service that supports tens of millions of items and rapid ingestion/querying/updates. While many databases approximate leaderboards via general purpose data structures like sorted set or range queries, Momento Leaderboards is a first-class, full-fledged service that you can quickly and easily integrate with your application.

:::info

Momento Leaderboards is currently in beta, and leaderboard items will have a 7-day TTL by default. For  persistence (unlimited TTL), please contact our team through the [contact form](https://www.gomomento.com/contact-us), on [Discord](https://discord.com/invite/3HkAKjUZGq), or by emailing support@momentohq.com. 

:::


## Getting Started with Momento Leaderboard

### Step 1: Create your Momento API key and cache

Go to the [Momento console](https://console.gomomento.com/tokens) and follow the instructions to log in with your email address, Google account, or GitHub account.

![Image of Momento console landing page](@site/static/img/getting-started/console.png)

Click on the Create Cache button and create a cache using the cloud provider and region you want to use for your Momento Leaderboard.

![Image of Momento console Create Cache form](@site/static/img/console-create-cache-form.png)

Then follow our [step-by-step instructions](https://docs.momentohq.com/cache/develop/authentication/api-keys) to create an API key via the [Momento console](https://console.gomomento.com). 

### Step 2: Create a Momento Leaderboard

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

### Step 3: Upsert, fetch, and remove elements

See the [API reference](./develop/api-reference/index.md) page for documentation on each available leaderboard API.

Check out the [Node.js example](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/leaderboard.ts) for a runnable program that includes examples of how to call each API.

## Frequently asked questions about Momento Leaderboards

<details>
  <summary>What's the difference between Momento Leaderboards and Momento Cache Sorted Sets?</summary>
  Momento Leaderboards have a much more efficient memory footprint, allowing us to scale to tens of millions of elements, and the APIs were built with gaming use cases specifically in mind.
</details>

<details>
  <summary>Do Momento Leaderboards items expire?</summary>
  No, Momento Leaderboards items have no TTL.
</details>