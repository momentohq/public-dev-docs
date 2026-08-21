---
sidebar_label: Valkey compatibility
title: Valkey compatibility
description: Supported and unsupported Valkey commands and protocol details for Momento Cache.
---

<!-- Projects: cache2/capabilities/valkey-compatibility, cache2/constraints/database-fgac -->

# Valkey compatibility

:::note
The supported command set is configured per Database. Confirm the canonical published list
before relying on this page.
:::

Connect to Momento Cache with standard Valkey and Redis clients over RESP. The
[shared gateway](/product/cache/concepts/connectivity-and-gateway) supports a specific
set of commands. Unsupported commands are rejected with the RESP error `-Command not allowed`.
Check this page to verify compatibility before migrating a workload.

This allowlist is separate from credential permissions. An allowlisted, modeled command that the
credential cannot run returns
`-NOPERM this user has no permissions to run the '<command>' command`. Parser-unknown commands can
instead return the ordinary Valkey unknown-command response. See
[Database command permissions](/product/cache/security#database-command-permissions).

Momento Cache runs Valkey 9.1.1 in production. The gateway's supported-command contract below,
not the upstream version alone, determines compatibility.

## Supported

The service supports all common Valkey data types and operations:

- Strings, including counters and range operations.
- Hashes, including per-field TTLs.
- Lists (non-blocking), sets, and sorted sets, including type-specific scans.
- Bitmaps, geo reads, and HyperLogLog.
- Streams (non-blocking).
- Server-side scripting (`EVAL`, `EVALSHA`, `FCALL`, `FUNCTION`, `SCRIPT`).
- Key management such as `DEL`, `EXPIRE`, `TTL`, `TYPE`, `UNLINK`.

## Not supported

The following feature families are not available:

- **Transactions:** `MULTI`, `EXEC`, `DISCARD`, `WATCH`, `UNWATCH`.
- **Pub/Sub:** `SUBSCRIBE`, `PUBLISH`, and related commands, and keyspace notifications.
- **Blocking commands:** `BLPOP`, `BRPOP`, `BLMOVE`, `WAIT`, and blocking `XREAD`.
- **Database switching:** `SELECT`. One connection serves one Database (see below).
- **Cursor and cross-key operations:** `SCAN` (use `HSCAN`, `SSCAN`, `ZSCAN` instead), `SORT`,
  `RENAME`, `COPY`, `RANDOMKEY`, and most cross-key `*STORE` writes.
- **Client naming:** `CLIENT` name commands and `HELLO ... SETNAME`.

## Protocol

Connections start in RESP2. Switch to RESP3 per connection with `HELLO 3`. RESP3 works with
some limitations. Attribute responses are not supported, and a few response types convert
approximately.

## Authentication

Authenticate with `AUTH <username> <password>`, where the username is your Database name and
the password is a Momento API token. The Database is bound to the connection by the username.
The `SELECT` command is not supported. See [Connectivity and the gateway](/product/cache/concepts/connectivity-and-gateway).
