---
sidebar_label: Reliability
title: Momento Cache reliability
description: Conditions for high availability through replication and multi-AZ placement.
---

<!-- Projects: cache2/concepts/capacity-pool, cache2/concepts/provisioning-modes, cache2/concepts/capacity-sizing-and-minima, cache2/concepts/capacity-pool-lifecycle-and-diagnostics, cache2/capabilities/sizing-and-isolation-guidance -->

# Reliability

A high-availability (HA) configuration should have at least one replica per shard and span
at least two availability zones. A high-availability configuration can still result in data
loss due to catastrophic events, such as a full region outage at the cloud service provider.

## Replication

Each shard in a [Capacity Pool](/product/cache/concepts/capacity-pool) can have zero, one, or more replica
nodes in addition to the active primary node. At least one healthy replica per shard makes the
Pool capable of failing over when a primary node becomes unavailable.

## Multi-AZ placement

You configure which availability zones a [Capacity Pool](/product/cache/concepts/capacity-pool) can
use, while Momento distributes Valkey nodes across those zones. At least two zones, together with
at least one replica per shard, make the Pool capable of tolerating a single-zone failure.

## Managed operation

The Momento Cache control plane manages the underlying cluster based on your specified
configuration. It automatically provisions and replaces nodes, including promotion of a
healthy replica when a primary is lost (failover). Momento also applies CVE patches and version
upgrades through managed rolling operations.

## Automatic Rolling Updates

Changing some configurations like instance type triggers a rolling update. The service works
one shard at a time, adding a healthy replacement before removing an old node. This approach
minimizes disruption during the change.
