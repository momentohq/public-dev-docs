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

import { SdkExampleCodeBlock } from "@site/src/components/SdkExampleCodeBlock";
import { SdkExampleCodeBlockImpl } from "@site/src/components/SdkExampleCodeBlockImpl";

# 数値リーダーボードIDを任意の文字列にマッピングする方法

Momento Leaderboardsの要素は、プレイヤー識別子、セッション識別子、ブラウザ識別子、またはその他の使用したい識別子を表すことができる符号なし64ビット番号によって一意に識別されます。つまり、プレイヤーが2つのIDを持っていない限り、1人のプレイヤーに対して2つのスコアを持つことはできません！

場合によっては、そのIDを他の情報、たとえば選手の名前などと関連付けて、より人間にわかりやすいリーダーボード表示にしたいこともあるでしょう。
以下のように、辞書を使って文字列とIDを変換することができます。

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

例題が実行されると、このようにリーダーボードが出力されます：

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
