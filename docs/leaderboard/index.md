---
sidebar_position: 1
sidebar_class_name: sidebar-item-overview
sidebar_label: Momento Leaderboard
title: Momento Leaderboard Documentation
description: Learn about Momento's purpose-built Leaderboard API
pagination_next: null
---

##









##

###











###

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

###





##

<details>
  <summary>What's the difference between Momento Leaderboard and Redis Sorted Sets?</summary>
  Momento Leaderboard has a much more efficient memory footprint, allowing us to scale to tens of millions of records, and the APIs were built with gaming use cases specifically in mind.
</details>

<details>
  <summary>Do Momento Leaderboard items expire?</summary>
  No, Momento Leaderboard items have no TTL.
</details>