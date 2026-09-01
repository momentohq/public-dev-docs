---
sidebar_label: Valkey compatibility
title: Valkey compatibility
description: Supported and unsupported Valkey commands and protocol details for Momento Cache.
---

<!-- Projects: cache2/capabilities/valkey-compatibility, cache2/constraints/database-fgac, cross-product/authentication -->

# Valkey compatibility

Connect to Momento Cache with standard Valkey and Redis clients over RESP. The
[shared gateway](/product/cache/concepts/connectivity-and-gateway) supports a specific
set of commands. Unsupported commands are rejected with the RESP error `-Command not allowed`.
Check this page to verify compatibility before migrating a workload.

This allowlist is separate from credential permissions. An allowlisted, modeled command that the
credential cannot run returns
`-NOPERM this user has no permissions to run the '<command>' command`. Parser-unknown commands can
instead return the ordinary Valkey unknown-command response. See
[Database command permissions](/product/cache/security#database-command-permissions).

Momento Cache runs Valkey 9. The gateway's supported-command contract below, not the upstream
version alone, determines compatibility.

## Supported

The service supports all common Valkey data types and operations:

- Strings, including counters and range operations.
- Hashes, including per-field TTLs.
- Lists (non-blocking), sets, and sorted sets, including type-specific scans.
- Bitmaps, geo reads, and HyperLogLog.
- Non-blocking streams.
- Key management such as `DEL`, `EXPIRE`, `TTL`, `TYPE`, `UNLINK`.

## Not supported

The following categorized list names common exclusions. It is not an exhaustive list of every
unsupported upstream Valkey command.

- **Transactions:** `MULTI`, `EXEC`, `DISCARD`, `WATCH`, `UNWATCH`.
- **Pub/Sub:** `SUBSCRIBE`, `PSUBSCRIBE`, `SSUBSCRIBE`, `PUBLISH`, `SPUBLISH`, `PUBSUB`,
  `UNSUBSCRIBE`, `PUNSUBSCRIBE`, `SUNSUBSCRIBE`.
- **Blocking commands:** `BLMOVE`, `BLMPOP`, `BLPOP`, `BRPOP`,
  `BRPOPLPUSH`, `BZMPOP`, `BZPOPMAX`, `BZPOPMIN`, `WAIT`, `WAITAOF`, `XREAD`, `XREADGROUP`.
- **Database switching:** `SELECT`. One connection serves one Database.
- **Scripting:** `EVAL`, `EVALSHA`, `EVAL_RO`, `EVALSHA_RO`, `FCALL`, `FCALL_RO`, `FUNCTION`,
  `SCRIPT`.
- **Other notable exclusions:** `SCAN`, `SORT`, `RENAME`, `RENAMENX`, `COPY`, `RANDOMKEY`,
  `CLIENT`, `SUNIONSTORE`, `SINTERSTORE`, `SDIFFSTORE`, `ZUNIONSTORE`, `ZINTERSTORE`, and
  `ZDIFFSTORE`. Use `HSCAN`, `SSCAN`, or `ZSCAN` instead of top-level `SCAN`.

## Protocol

Connections start in RESP2. Switch to RESP3 per connection with `HELLO 3`. RESP3 works with
some limitations. Attribute responses are not supported, and a few response types convert
approximately.

## Authentication

Authenticate with `AUTH <username> <password>`, where the username is your Database name and
the password is a Momento API token. The Database is bound to the connection by the username.
The `SELECT` command is not supported. See [Connectivity and the gateway](/product/cache/concepts/connectivity-and-gateway).
