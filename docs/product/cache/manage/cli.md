---
sidebar_label: Momento CLI (preview)
title: Manage Momento Cache with the CLI (preview)
description: Preview CLI commands for creating, inspecting, updating, listing, and deleting Momento Cache Capacity Pools and Databases.
---

<!-- Projects: cache2/interfaces/momento-cli, cache2/interfaces/console, cache2/concepts/capacity-pool, cache2/concepts/database, cache2/concepts/provisioning-modes -->

# Manage Momento Cache with the CLI

:::note[Preview]
The `momento preview pool` and `momento preview database` command groups are in preview. Their names,
arguments, and output may change. Momento Cache (Cluster and Flex) is available in limited preview;
[sign in or sign up in the console](https://console.gomomento.com/) and select **Request access**.
:::

Use the Momento CLI for common Capacity Pool and Database lifecycle operations. The commands target
one region through the endpoint identifier in your selected profile.

## Install and configure

Install the CLI using the instructions in the
[Momento CLI repository](https://github.com/momentohq/momento-cli#installation).

In the Momento console, create or retrieve an API key and copy the endpoint identifier for the
region you want to manage. The console is the authority for endpoint identifiers. If the endpoint
identifier is not visible, request preview access in the console rather than constructing a
hostname from a static list.

Save the API key and endpoint identifier in a named profile:

```sh
momento configure --profile cache-preview
```

The examples below pass `--profile cache-preview`. You may instead use the default profile, or pass
`--api-key` and `--endpoint` directly; avoid exposing secrets in shell history.

## Choose a management surface

| Workflow | CLI (preview) | Console (limited preview) |
| --- | --- | --- |
| Create a Cluster or Flex Pool | Yes | Yes |
| List Pools across regions | One selected region | Aggregates configured regions |
| Inspect Pool status and configuration | `describe` | Overview with configuration and diagnostics |
| Update a Pool | Yes | Yes |
| Read Pool metrics | Not available | Point-in-time Metrics tab |
| Create, list, and delete Databases | Yes | Yes, within a Pool |
| Describe one Database | Yes | Pool-scoped row; no standalone page |
| Copy the RESP endpoint | Not available | Databases tab |
| Delete a non-empty Pool | Rejected | Rejected |

Use the CLI for the common management path. Use the console when you need an aggregated regional
view, diagnostics, point-in-time metrics, or the RESP endpoint. The
[HTTP API references](/product/cache/api-reference/capacity-pool) document the lower-level surface,
including Database Describe and the metrics scrape that the CLI does not expose.

## Capacity Pool commands

### Create a Capacity Pool

Create a **Cluster (explicit)** Pool by specifying the instance type, shard count, one fixed replica
count, and availability-zone IDs:

```sh
momento preview pool create \
  --profile cache-preview \
  --name orders-cluster \
  --instance-type r7g.xlarge \
  --shard-count 3 \
  --replicas-per-shard 1 \
  --zones use1-az1,use1-az2
```

Create a **Flex (managed)** Pool by specifying capacity and replication bounds:

```sh
momento preview pool create \
  --profile cache-preview \
  --name orders-flex \
  --capacity-gib 32..128 \
  --replicas-per-shard 1..2 \
  --zones use1-az1,use1-az2
```

`--zones` accepts one or more AZ IDs as separate values or a comma-delimited list. These are IDs
such as `use1-az1`, not account-specific names such as `us-east-1a`. Create prints the Pool name,
lifecycle status, and provisioning configuration.

### Inspect and list Capacity Pools

Inspect one Pool's status, configuration, and diagnostics:

```sh
momento preview pool describe \
  --profile cache-preview \
  --name orders-flex
```

List every Pool in the profile's selected region:

```sh
momento preview pool list --profile cache-preview
```

`describe` and `list` print provisioning, current and target Flex capacity where applicable, and
diagnostics. Current and target are settled and in-flight values of the same Pool-capacity
quantity. The CLI does not aggregate regions; select another endpoint/profile to inspect another
region.

### Update a Capacity Pool

Every update supplies the Pool's existing implementation mode. The mode is not a request to convert
the Pool.

Raise a Flex Pool's capacity ceiling:

```sh
momento preview pool update \
  --profile cache-preview \
  --name orders-flex \
  --mode flex \
  --capacity-gib 32..256
```

Change the shard count and replicas for a Cluster Pool:

```sh
momento preview pool update \
  --profile cache-preview \
  --name orders-cluster \
  --mode cluster \
  --shard-count 4 \
  --replicas-per-shard 2
```

An update requires at least one changed field. You can also replace the zone set with `--zones`.
Cluster-only fields are rejected with `--mode flex`; `--capacity-gib` is rejected with
`--mode cluster`. See [Manage Capacity Pools](/product/cache/manage/pools) for scaling guards and
diagnostics.

### Delete a Capacity Pool

Delete every Database pinned to the Pool first, then run:

```sh
momento preview pool delete \
  --profile cache-preview \
  --name orders-flex
```

The service rejects deletion while a Database remains. Accepted deletion is asynchronous and the
Pool enters `deleting` before it is removed.

## Database commands

### Create a Database

The target Pool must be `active`:

```sh
momento preview database create \
  --profile cache-preview \
  --name orders \
  --pool-name orders-flex
```

The CLI prints the Database name and backing Pool.

### List Databases

```sh
momento preview database list --profile cache-preview
```

The command lists the Database name and Pool for every Database in the selected region.

### Describe a Database

```sh
momento preview database describe \
  --profile cache-preview \
  --name orders
```

The command prints the Database name and backing Pool.

### Delete a Database

```sh
momento preview database delete \
  --profile cache-preview \
  --name orders
```

Deletion is synchronous in the control plane; underlying resource reclamation follows
asynchronously.
