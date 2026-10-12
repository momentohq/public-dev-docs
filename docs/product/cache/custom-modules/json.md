---
sidebar_label: JSON
title: JSON module
description: Native JSON documents, JSONPath queries, partial updates, and key Valkey JSON commands.
---

<!-- Projects: cache2/capabilities/custom-modules -->

# JSON module

Valkey JSON stores structured JSON documents and lets you read or change values by JSONPath.
Use it when your application needs to work with nested fields or update part of a document.

Confirm the module configuration and required commands with your account support representative
when arranging [deployment with Momento Cache](/product/cache/custom-modules#arrange-deployment).

## Features

- Store nested objects, arrays, and scalar values as native JSON.
- Select values with JSONPath, including wildcards, array selections, and filter expressions.
- Update individual values, increment numbers, and append array elements without replacing the entire document.

## Key commands

Use these Valkey JSON commands to identify the operations your application needs.

| Command | Purpose |
| --- | --- |
| [`JSON.SET`](https://valkey.io/commands/json.set/) | Set a document or replace a value at a JSONPath. |
| [`JSON.GET`](https://valkey.io/commands/json.get/) | Read serialized JSON from one or more paths. |
| [`JSON.MGET`](https://valkey.io/commands/json.mget/) | Read a path from multiple document keys. |
| [`JSON.DEL`](https://valkey.io/commands/json.del/) | Delete values at a path; the root path deletes the key. |
| [`JSON.NUMINCRBY`](https://valkey.io/commands/json.numincrby/) | Increment numeric values at a path. |
| [`JSON.ARRAPPEND`](https://valkey.io/commands/json.arrappend/) | Append values to arrays at a path. |
| [`JSON.ARRLEN`](https://valkey.io/commands/json.arrlen/) | Read array lengths at a path. |
| [`JSON.TYPE`](https://valkey.io/commands/json.type/) | Read the JSON value types at a path. |

## Further reading

- [Valkey JSON documentation](https://valkey.io/topics/valkey-json/): JSONPath syntax and module behavior.
- [Valkey command reference](https://valkey.io/commands/): complete JSON command syntax, arguments, and responses.
- [Search module](/product/cache/custom-modules/search): indexing and querying JSON documents.
