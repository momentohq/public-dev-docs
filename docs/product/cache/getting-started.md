---
sidebar_label: Getting started
title: Getting started with Momento Cache
description: Provision a Capacity Pool, create a Database, and connect a Valkey client to Momento Cache.
---

<!-- Projects: cache2/capabilities/onboarding-flow, cache2/concepts/capacity-pool, cache2/concepts/database, cache2/concepts/managed-autoscaling, cache2/concepts/capacity-pool-lifecycle-and-diagnostics, cache2/capabilities/valkey-compatibility, cache2/interfaces/data-plane-connection, cross-product/authentication, cache2/interfaces/momento-cli, cache2/interfaces/console -->

# Getting started

:::note[Preview]
Momento Cache (Cluster and Flex) is available in limited preview. Complete the
[preview access workflow](#request-preview-access) before starting the quickstart.
:::

## Request preview access

1. Set up [AWS Marketplace billing](/platform/how-to/aws-marketplace-billing).
2. Email [Momento Support](mailto:support@momentohq.com) with the subject
   **[ACCESS] enable Momento Cache**. Include your
   [Momento Account ID](/platform/how-to/locate-account-id).

Allow one or more business days for the request to be processed.

This quickstart takes you from nothing to running Valkey commands against a managed Database in
Momento Cache. You will use the Momento CLI for each management operation, then retrieve the
connection endpoint from the console.

You need:

- A Momento account with access to the Momento Cache limited preview.
- The [Momento CLI](https://github.com/momentohq/momento-cli#installation).
- `valkey-cli` (or `redis-cli`).
- Valid availability-zone IDs for the region where you will create the Pool.

## 1. Configure a CLI profile

In the Momento console, create or retrieve an API key and copy the endpoint identifier for the
region where you want to create the Pool. The console is the authority for this identifier; do not
derive it from a copied hostname table. If your account is not enabled, complete the
[preview access workflow](#request-preview-access) before continuing.

Configure a named CLI profile and enter the API key and endpoint identifier when prompted:

```sh
momento configure --profile cache-quickstart
```

The commands below use that profile. You can choose a different profile name.

## 2. Create a Capacity Pool

Create a Flex Pool with capacity and replication bounds. The example uses two US East (N. Virginia)
availability-zone IDs; replace them with valid AZ IDs for the region selected by your profile.

```sh
momento preview pool create \
  --profile cache-quickstart \
  --name quickstart-pool \
  --capacity-gib 32..128 \
  --replicas-per-shard 1..2 \
  --zones use1-az1,use1-az2
```

This is a **Flex (managed)** Pool: Momento selects and automatically resizes the underlying topology
within those bounds. To create a **Cluster (explicit)** Pool instead, provide `--instance-type` and
`--shard-count`, and pass a single value to `--replicas-per-shard`. See
[Momento CLI (preview)](/product/cache/manage/cli#create-a-capacity-pool).

Provisioning runs in the background. Check the lifecycle status until it is `active`:

```sh
momento preview pool get-status \
  --profile cache-quickstart \
  --name quickstart-pool
```

If provisioning is blocked, view diagnostics:

```sh
momento preview pool describe \
  --profile cache-quickstart \
  --name quickstart-pool
```

The service keeps retrying an accepted configuration; see [Manage Capacity Pools](/product/cache/manage/pools#read-diagnostics).

## 3. Create a Database

Once the Pool is `active`, create a Database on it:

```sh
momento preview database create \
  --profile cache-quickstart \
  --name quickstart-db \
  --pool-name quickstart-pool
```

Database creation is immediate because the Pool's capacity already exists.

## 4. Get your connection details

In the limited-preview console, open **Capacity Pools**, select your Pool, and open its
**Databases** tab. Copy the account-visible RESP endpoint shown there. The console is the
authoritative source for the endpoint; do not construct it from a region or cell name.

The Database CLI and panel do not vend a credential. Use the API key you created through Key Management,
or another appropriate Momento credential, as the password and treat it as a secret.

Your connection details are:

- **Host:** the region's RESP endpoint
- **Port:** `6379` (default) with TLS
- **Username:** your Database name
- **Password:** your Momento API key or token

## 5. Connect and run a command

```sh
valkey-cli --tls \
  -h <resp-endpoint> \
  --user quickstart-db \
  --pass $MOMENTO_API_KEY

> SET greeting "hello"
OK
> GET greeting
"hello"
```

You are now reading and writing against a managed Valkey Database.

## 6. Clean up

Delete the Database before its Pool:

```sh
momento preview database delete \
  --profile cache-quickstart \
  --name quickstart-db

momento preview pool delete \
  --profile cache-quickstart \
  --name quickstart-pool
```

## Next steps

- Learn the model: [Capacity Pool](/product/cache/concepts/capacity-pool) and [Database](/product/cache/concepts/database).
- Manage both resources: [Momento CLI (preview)](/product/cache/manage/cli).
- Check which commands are available: [Valkey compatibility](/product/cache/concepts/valkey-compatibility).
- Use the lower-level contract: [control-plane API reference](/product/cache/api-reference/capacity-pool).
