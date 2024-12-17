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

# How to map numeric leaderboard IDs to arbitrary strings

Momento Leaderboards elements are uniquely identified by an unsigned 64-bit number that can represent a player identifier, session identifier, browser identifier or any other kind of identifier you want to use. An id can only appear in a leaderboard one time, meaning you can't have two scores for one player unless that player has two ids!

In some cases, you may want to associate that ID with some other information, such as a player's name, for a more human-friendly leaderboard display.
You can use a dictionary to convert between the string and ID representations as shown below.

<SdkExampleCodeBlock language={'javascript'} file={'examples/nodejs/cache/doc-example-files/leaderboard-ids.ts'} />

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
