---
sidebar_label: Connectivity and the gateway
title: Connectivity and the gateway
description: Connect to a Database through the managed gateway with a standard Valkey client.
---

<!-- Projects: cache2/concepts/shared-gateway, cache2/capabilities/valkey-compatibility -->

# Connectivity and the gateway

You connect to a [Database](/product/cache/concepts/database) with a standard Valkey or Redis client. You do not
connect to Valkey nodes directly; traffic flows through a managed **gateway** in front of
your [Capacity Pool](/product/cache/concepts/capacity-pool).

## The connection gateway

Clients connect through a gateway rather than directly to Valkey nodes. This lets the service
manage connections and routing on your behalf, while shielding the backend from excess traffic
and churn. The gateway also provides a stable endpoint that masks topology changes within the
Valkey cluster.

The gateway offloads a variety of traffic responsibilities from the Valkey cluster, such as
connection pooling, routing, rate limiting, public TLS termination, HTTP request translation,
auth, and more. This helps to efficiently scale a Valkey cluster to millions of clients and
millions of RPS.

## Connecting to a Database

Point your preferred client at the pool's gateway endpoint over TLS and authenticate:

- **Username** is the Database name.
- **Password** is a Momento API token (created in the console).

```sh
valkey-cli -h <gateway-endpoint> -p 6379 --tls \
  --user <database-name> --pass <momento-api-token>
```

Always use a client configured for standalone valkey, not cluster mode. The gateway masks
underlying cluster topology, presenting it as if it were a single standalone node.

One connection serves exactly one Database specified by the username. RESP database
commands like `SELECT` are not supported. To use a different Database, open a connection with
that Database's name as the username and an API token with appropriate permissions.

Connections always start with RESP2. You can switch to RESP3 per connection with `HELLO 3`.

## Supported commands

Momento Cache supports a specific set of Valkey commands. Before you port a
workload, check [Valkey compatibility](/product/cache/concepts/valkey-compatibility) for the supported command set
and the feature families that are not available, such as transactions, pub/sub, and
blocking commands.
