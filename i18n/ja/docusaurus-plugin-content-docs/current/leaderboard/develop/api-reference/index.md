---
sidebar_position: 1
sidebar_label: API Reference
title: Leaderboards API reference
description: Learn how to interact programmatically with Momento Leaderboards API.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

## Using the Momento Leaderboards

Momento Leaderboards is a first-class service with purpose-built APIs that supports leaderboards with tens of millions of items and rapid ingestion/querying/updates.

## Leaderboard Client

To create and interact with leaderboards, you must first create a LeaderboardClient.

<SdkExampleTabs snippetId={'API_InstantiateLeaderboardClient'} />

Then you can create a leaderboard by specifying a cache and leaderboard name.

<SdkExampleTabs snippetId={'API_CreateLeaderboard'} />

## Leaderboard Methods

### Upsert elements

Inserts elements if they do not already exist in the leaderboard. Updates elements if they do already exist in the leaderboard. There are no partial failures; an upsert call will either succeed or fail.

The ID can be a player identifier, session identifier, browser identifier or any other kind of identifier you want to use for this scoreboard. The full unsigned 64 bit range is allowed here, between 0 and 2^63-1 inclusive. An id can only appear in a leaderboard one time, meaning you can't have two scores for one player unless that player has two ids!

| Name         | Type                | Description                                                    |
|--------------|---------------------|----------------------------------------------------------------|
| elements     | Map<number, number> | A Map or Record of elements (id,score pairs) to upsert.        |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_LeaderboardUpsert'} />

Upsert is implemented as a batched operation, so for large leaderboards, you can upsert in batches of up to 8192 elements. 

<SdkExampleTabs snippetId={'API_LeaderboardUpsertPagination'} />

### Fetch elements by score

Fetches elements that fall within the specified min and max scores. Elements with the same score will be returned in ascending order based on their ID.


| Name         | Type                | Description                                                       |
|--------------|---------------------|-------------------------------------------------------------------|
| minScore     | Optional[number]    | Inclusive lower bound for the score range. Defaults to `-inf`.    |
| maxScore     | Optional[number]    | Exclusive upper bound for the score range. Defaults to `+inf`.    |
| order        | Optional[Ascending / Descending]    | The order to fetch the elements in. Defaults to ascending, meaning 0 is the lowest-scoring rank.   |
| offset       | Optional[number]    | The number of elements to skip before returning the first element. Defaults to 0. Note: this is not the score of the first element to return, but the number of elements of the result set to skip before returning the first element.    |
| count        | Optional[number]    | The maximum number of elements to return. Defaults to 8192, which is the maximum that can be fetched per request.    |

<details>
  <summary>Method response object</summary>

* Success
    * values(): {`id`: number, `score`: number, `rank`: number}[]
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_LeaderboardFetchByScore'} />

FetchByScore is implemented as a batch operation, so for large leaderboards, you can fetch in batches of up to 8192 elements. You can page through multiple elements that fall within the requested score range using the `offset` parameter until you receive an empty list, which indicates the end of the requested elements. 

<SdkExampleTabs snippetId={'API_LeaderboardFetchByScorePagination'} />

### Fetch elements by rank

Fetches elements that fall within the specified min and max ranks.


| Name         | Type                | Description                                                                  |
|--------------|---------------------|------------------------------------------------------------------------------|
| startRank    | number    | Inclusive lower bound for the rank range. Defaults to 0.                     |
| endRank      | number    | Exclusive upper bound for the rank range. Defaults to `startRank` + 8192.    |
| order        | Optional[Ascending / Descending]    | The order to fetch the elements in. Defaults to ascending, meaning 0 is the lowest-scoring rank.   |

<details>
  <summary>Method response object</summary>

* Success
    * values(): {`id`: number, `score`: number, `rank`: number}[]
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_LeaderboardFetchByRank'} />

For large leaderboards, you will need to fetch in batches of up to 8192 elements.

<SdkExampleTabs snippetId={'API_LeaderboardFetchByRankPagination'} />

### Fetch elements by ID

Fetches elements given a list of element IDs. 


| Name         | Type                                | Description                                                  |
|--------------|-------------------------------------|--------------------------------------------------------------|
| ids          | Array<`number`>                       | The ids of the elements whose rank we are retrieving.        |
| order        | Optional[Ascending / Descending]    | The order to fetch the elements in. Defaults to ascending, meaning 0 is the lowest-scoring rank.   |

<details>
  <summary>Method response object</summary>

* Success
    * values(): {`id`: number, `score`: number, `rank`: number}[]
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_LeaderboardGetRank'} />

### Get leaderboard length

Gets the number of entries in the leaderboard. There are no parameters for this method; the leaderboard name is inferred from the `Leaderboard` object.

<details>
  <summary>Method response object</summary>

* Success
    * length(): number
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_LeaderboardLength'} />

### Remove elements

Removes elements with the specified IDs.

| Name             | Type   | Description                                                                                                                                            |
|------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| ids        | Array<`number`> | An Array of element IDs for the elements you want to remove.                                                                                                                              |

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_LeaderboardRemoveElements'} />

For large leaderboards, you will need to remove in batches of up to 8192 elements.

<SdkExampleTabs snippetId={'API_LeaderboardRemoveElementsPagination'} />

### Delete leaderboard

Deletes the leaderboard. There are no parameters for this method; the leaderboard name is inferred from the `Leaderboard` object.

<details>
  <summary>Method response object</summary>

* Success
* Error

See [response objects](./response-objects.md) for specific information.

</details>

<SdkExampleTabs snippetId={'API_LeaderboardDelete'} />
