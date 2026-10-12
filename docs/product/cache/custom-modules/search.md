---
sidebar_label: Search
title: Search module
description: Full-text, tag, numeric, and vector search over Valkey Hashes and JSON documents, with key Search commands.
---

<!-- Projects: cache2/capabilities/custom-modules -->

# Search module

Valkey Search indexes fields from Hashes or [JSON documents](/product/cache/custom-modules/json).
Use it for full-text search, attribute filtering, vector similarity, and aggregations.

Confirm the module configuration and required commands with your account support representative
when arranging [deployment with Momento Cache](/product/cache/custom-modules#arrange-deployment).

## Features

- Search text, match tags, and filter numeric ranges.
- Combine search predicates to narrow results by multiple attributes.
- Filter, sort, group, and summarize results with aggregation pipelines.

## Vector search

Search also provides vector indexing and similarity queries for embeddings and semantic retrieval.
Choose HNSW for approximate nearest-neighbor search or FLAT for exact search.
Combine vector queries with attribute filters to narrow the candidate set.

Vector search uses the same Search module as text and attribute search.

## Key commands

Use these Valkey Search commands to identify the operations your application needs.

| Command | Purpose |
| --- | --- |
| [`FT.CREATE`](https://valkey.io/commands/ft.create/) | Create an index and define its fields. |
| [`FT.SEARCH`](https://valkey.io/commands/ft.search/) | Query an index, including vector similarity and filters. |
| [`FT.AGGREGATE`](https://valkey.io/commands/ft.aggregate/) | Filter, sort, group, and summarize query results. |
| [`FT.INFO`](https://valkey.io/commands/ft.info/) | Inspect an index and its statistics. |
| [`FT._LIST`](https://valkey.io/commands/ft._list/) | List indexes. |
| [`FT.DROPINDEX`](https://valkey.io/commands/ft.dropindex/) | Remove an index. |

## Further reading

- [Valkey Search overview](https://valkey.io/topics/search/): index behavior and supported query types.
- [FT.CREATE reference](https://valkey.io/commands/ft.create/): field schemas and vector index options.
- [FT.SEARCH reference](https://valkey.io/commands/ft.search/): query syntax and result options.
- [FT.AGGREGATE reference](https://valkey.io/commands/ft.aggregate/): aggregation stages and reducers.
