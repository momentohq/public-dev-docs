---
sidebar_position: 1
title: Mapping leaderboard IDs to strings
sidebar_label: Mapping leaderboard IDs to strings
description: Learn how to map numeric leaderboard IDs to arbitrary strings.
keywords:
  - momento
  - leaderboard
  - gaming
  - serverless
---

# How to map numeric leaderboard IDs to arbitrary strings

Momento Leaderboards elements are uniquely identified by an unsigned 64-bit number that can represent a player identifier, session identifier, browser identifier or any other kind of identifier you want to use. An id can only appear in a leaderboard one time, meaning you can't have two scores for one player unless that player has two ids!

In some cases, you may want to associate that ID with some other information, such as a player's name, for a more human-friendly leaderboard display.
You can use a dictionary to convert between the string and ID representations as shown below.

```typescript
import {
  PreviewLeaderboardClient,
  LeaderboardConfigurations,
  CredentialProvider,
  CacheClient,
  Configurations,
  CreateCache,
  LeaderboardDelete,
  LeaderboardFetch,
  LeaderboardOrder,
  LeaderboardUpsert,
} from '@gomomento/sdk';

async function main() {
  // 1. Create a CacheClient to connect to Momento
  const cacheClient = await CacheClient.create({
    configuration: Configurations.Laptop.v1(),
    credentialProvider: CredentialProvider.fromEnvironmentVariable({
      environmentVariableName: 'MOMENTO_API_KEY',
    }),
    defaultTtlSeconds: 60,
  });

  // 2. Create a cache for the leaderboard to live in
  const createCacheResponse = await cacheClient.createCache('my-cache');
  if (createCacheResponse instanceof CreateCache.AlreadyExists) {
    console.log('cache already exists');
  } else if (createCacheResponse instanceof CreateCache.Error) {
    throw createCacheResponse.innerException();
  }

  // 3. Create a Leaderboard client
  const client = new PreviewLeaderboardClient({
    configuration: LeaderboardConfigurations.Laptop.v1(),
    credentialProvider: CredentialProvider.fromEnvironmentVariable({
      environmentVariableName: 'MOMENTO_API_KEY',
    }),
  });

  // 4. Create a leaderboard with given cache and leaderboard names
  const leaderboard = client.leaderboard('my-cache', 'my-leaderboard');

  // 5. Create a mapping between element IDs and arbitrary strings
  const id2name: Record<number, string> = {
    123: 'Alice',
    456: 'Bob',
    789: 'Charlie',
    1234: 'David',
    5678: 'Eve',
  };

  // 6. Upsert the elements along with some scores
  let upsertElements: Record<number, number> = {}
  for (const id of Object.keys(id2name)) {
    upsertElements[Number(id)] = Math.floor(Math.random() * 1000);
  }
  const upsertResponse = await leaderboard.upsert(upsertElements);
  if (upsertResponse instanceof LeaderboardUpsert.Success) {
    console.log('Upsert success!');
  } else if (upsertResponse instanceof LeaderboardUpsert.Error) {
    console.log('Upsert error:', upsertResponse.message());
  }

  // 7. Fetch the top 5 elements in the leaderboard and print scores and corresponding strings
  const fetchResponse = await leaderboard.fetchByRank(0, 5, { order: LeaderboardOrder.Descending });
  if (fetchResponse instanceof LeaderboardFetch.Success) {
    const elements = fetchResponse.values();
    console.log('------------Top 5 Leaderboard-------------');
    console.log('------------------------------------------');
    for (const element of elements) {
      console.log(`${id2name[element.id]}: ${element.score}`);
    }
    console.log('------------------------------------------');
  } else if (fetchResponse instanceof LeaderboardFetch.Error) {
    console.log('Fetch error:', fetchResponse.message());
  }

  // 8. Delete the entire leaderboard when done.
  // Leaderboard items have a default 7-day TTL so make sure to clean up
  // all unnecessary elements when no longer needed.
  const deleteResp = await leaderboard.delete();
  if (deleteResp instanceof LeaderboardDelete.Success) {
    console.log('Delete leaderboard success');
  } else if (deleteResp instanceof LeaderboardDelete.Error) {
    console.log('Delete leaderboard error:', deleteResp.message());
  }
}

main()
  .then(() => {
    console.log('Leaderboard example completed!');
    exit();
  })
  .catch((e: Error) => {
    console.error(`Uncaught exception while running example: ${e.message}`);
    throw e;
  });
```

When the example runs, you'll see a leaderboard printed out like this:
```
------------Top 5 Leaderboard-------------
------------------------------------------
Bob: 772
Charlie: 685
David: 483
Alice: 450
Eve: 13
------------------------------------------
```