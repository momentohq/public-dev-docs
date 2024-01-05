---
sidebar_position: 4
sidebar_label: Service Limits
title: Service limits
pagination_next: null
description: Explore Momento Cache service limits, the default values, and how to get them changed if you need.
---

# Service Limits for Momento Cache

Momento Cache seeks to protect itself and its customers when it comes to service resources. To do this, every account, cache, and topic has service limits, or what we call "guardrails" (like a curvy mountain road) to help keep operations running how they should and as smoothly as possible. This page outlines the default service limits:

| Momento Cache limits                                                                                               | Value          |
|--------------------------------------------------------------------------------------------------------------------|----------------|
| API rate per cache (data plane)                                                                                    | 100 operations/s |
| API rate per customer (control plane)                                                                              | 5 operations/s   |
| Throughput per cache                                                                                               | 1MB/s          |
| Maximum item size                                                                                                  | 1MB            |
| Max cache count (per account)                                                                                      | 10             |
| Time to live (TTL)                                                                                                 | 1 day          |
| Per [collection (CDT)](https://docs.momentohq.com/develop/datatypes#collection-data-types-cdts) element size limit | 128KB          |
| Permissions per [API key or token](./../develop/api-reference/auth.md)  (hard limit)                               | 10             |

## Soft limits and support

The limits on this page are soft limits that can be altered unless specifically denoted. If you need limits adjusted, please reach out to [Momento Support](mailto:support@momentohq.com). Please include your login email, the name of the cache(s) to be altered, the cloud+region the cache is located in (e.g. AWS eu-west-1), and which limits from the list you’d like increased.

## Operations

Service limits are based on the number of operations performed per second. Some cache data plane APIs can perform multiple operations in a single request.

Since multi-element operations are more efficient, the limit cost of these APIs is discounted at a **2:1 ratio**. This means every two elements will count as one operation towards the limiter. For example, a `SetAddElements` request adding one or two elements costs one operation, but with three or four elements it costs two operations, etc.

The below table describes how the number of operations is calculated for all cache APIs.

| API Name                 | Multi-Element API | Operations                                                        |
| ------------------------ | ----              | ------------                                                      |
| Set                      |                   | 1                                                                 |
| Get                      |                   | 1                                                                 |
| Delete                   |                   | 1                                                                 |
| Increment                |                   | 1                                                                 |
| Ping                     |                   | 1                                                                 |
| ItemGetType              |                   | 1                                                                 |
| KeyExists                |                   | 1                                                                 |
| KeysExist                | ✅                | Number of keys in request/2                                       |
| SetIfNotExists           |                   | 1                                                                 |
| UpdateTtl                |                   | 1                                                                 |
| IncreaseTtl              |                   | 1                                                                 |
| DecreaseTtl              |                   | 1                                                                 |
| ItemGetTtl               |                   | 1                                                                 |
| DictionaryFetch          | ✅                | Number of fields in response/2, or 1 if dictionary is not found   |
| DictionaryGetField       |                   | 1                                                                 |
| DictionaryGetFields      | ✅                | Number of fields in request/2                                     |
| DictionaryIncrement      |                   | 1                                                                 |
| DictionaryRemoveField    |                   | 1                                                                 |
| DictionaryRemoveFields   | ✅                | Number of fields in request/2                                     |
| DictionarySetField       |                   | 1                                                                 |
| DictionarySetFields      | ✅                | Number of fields in request/2                                     |
| DictionaryLength         |                   | 1                                                                 |
| ListFetch                | ✅                | Number of elements in response/2, or 1 if list is not found       |
| ListConcatenateBack      | ✅                | Number of elements in request/2                                   |
| ListConcatenateFront     | ✅                | Number of elements in request/2                                   |
| ListLength               |                   | 1                                                                 |
| ListPopBack              |                   | 1                                                                 |
| ListPopFront             |                   | 1                                                                 |
| ListPushBack             |                   | 1                                                                 |
| ListPushFront            |                   | 1                                                                 |
| ListRemoveValue          |                   | 1                                                                 |
| ListRetain               |                   | 1                                                                 |
| SetAddElement            |                   | 1                                                                 |
| SetAddElements           | ✅                | Number of elements in request/2                                   |
| SetFetch                 | ✅                | Number of elements in response/2, or 1 if set is not found        |
| SetRemoveElement         |                   | 1                                                                 |
| SetRemoveElements        | ✅                | Number of elements in request/2                                   |
| SetContainsElement       |                   | 1                                                                 |
| SetContainsElements      | ✅                | Number of elements in request/2                                   |
| SetLength                |                   | 1                                                                 |
| SortedSetPutElement      |                   | 1                                                                 |
| SortedSetPutElements     | ✅                | Number of elements in request/2                                   |
| SortedSetFetchByRank     | ✅                | Number of elements in response/2, or 1 if sorted set is not found |
| SortedSetFetchByScore    | ✅                | Number of elements in response/2, or 1 if sorted set is not found |
| SortedSetGetScore        |                   | 1                                                                 |
| SortedSetGetScores       | ✅                | Number of elements in request/2                                   |
| SortedSetRemoveElement   |                   | 1                                                                 |
| SortedSetRemoveElements  | ✅                | Number of elements in request/2                                   |
| SortedSetGetRank         |                   | 1                                                                 |
| SortedSetIncrementScore  |                   | 1                                                                 |
| SortedSetLength          |                   | 1                                                                 |
| SortedSetLengthByScore   |                   | 1                                                                 |
