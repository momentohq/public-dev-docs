---
sidebar_label: Getting started
title: Getting started with Momento Cache
description: Provision a Capacity Pool, create a Database, and connect a Valkey client to Momento Cache.
---

<!-- Projects: cache2/capabilities/onboarding-flow, cache2/concepts/capacity-pool, cache2/concepts/database, cache2/capabilities/valkey-compatibility, cache2/interfaces/control-plane-api -->

# Getting started

:::note
This quickstart describes the intended experience for the redesigned console; some steps may
change as the console ships.
:::

This quickstart takes you from nothing to running Valkey commands against a managed Database in
Momento Cache. You will create a Capacity Pool, create a Database on it, and connect a client.

You need a Momento account and a terminal with `valkey-cli` (or `redis-cli`) installed.

## 1. Create a Capacity Pool

In the console, create a Capacity Pool. Choose a configuration preset rather than setting
every value by hand:

- A **Production** preset gives you a multi-AZ pool with a replica per shard, sized for real
  workloads.
- A **Dev/Test** preset gives you a smaller, cheaper pool for experimentation.

Pick a preset and a region, then create the pool. Provisioning runs in the background; the
pool shows a status of `creating` and then `active`. You can continue while it provisions.

If the pool reports a capacity diagnostic (for example, the chosen instance type is
temporarily unavailable in a zone), the console keeps retrying and offers alternatives such as
a different zone or instance type. See [Capacity Pool](/product/cache/concepts/capacity-pool).

## 2. Create a Database

Once the pool is `active`, create a Database on it. Name the Database and select the pool.
Creation is immediate, because the capacity already exists.

## 3. Get your connection details

Open the Database's connection panel. It shows the gateway endpoint and gives you a Momento
API token to use as your password. Copy the token; treat it as a secret.

Your connection details are:

- **Host:** the region's RESP endpoint
- **Port:** `6379` with TLS
- **Username:** your Database name
- **Password:** your Momento API token

## 4. Connect and run a command

```sh
valkey-cli -h <gateway-endpoint> -p 6379 --tls \
  --user <database-name> --pass <momento-api-token>

> SET greeting "hello"
OK
> GET greeting
"hello"
```

You are now reading and writing against a managed Valkey Database.

## Next steps

- Learn the model: [Capacity Pool](/product/cache/concepts/capacity-pool) and [Database](/product/cache/concepts/database).
- Check which commands are available: [Valkey compatibility](/product/cache/concepts/valkey-compatibility).
- Automate provisioning: [control-plane API reference](/product/cache/api-reference/capacity-pool).
