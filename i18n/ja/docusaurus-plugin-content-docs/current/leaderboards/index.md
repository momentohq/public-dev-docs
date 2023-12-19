---
sidebar_position: 1
sidebar_class_name: sidebar-item-overview
sidebar_label: Momento Leaderboards
title: Momento Leaderboards Documentation
description: Learn about Momento's purpose-built Leaderboard API
pagination_next: null
---

##



:::info



:::

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





#



##

<details>
  <summary>What's the difference between Momento Leaderboards and a Sorted Set?</summary>
  Momento Leaderboards has a much more efficient memory footprint, allowing us to scale to tens of millions of records, and the APIs were built with gaming use cases specifically in mind.
</details>

<details>
  <summary>Do Momento Leaderboards items expire?</summary>
  Momento Leaderboards items have a 7-day TTL by default. If the default TTL for leaderboard items doesn’t work for you, reach out to support@momentohq.com to discuss removing limits.
</details>
