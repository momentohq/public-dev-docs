---
sidebar_label: Reliability
title: Momento Cache reliability
description: Conditions for high availability through replication and multi-AZ placement.
---

<!-- Projects: cache2/concepts/capacity-pool, cache2/concepts/provisioning-modes, cache2/concepts/capacity-pool-lifecycle-and-diagnostics, cache2/capabilities/sizing-and-isolation-guidance -->

# Reliability

A Capacity Pool is capable of high availability (HA) when it has at least one replica per shard
and spans at least two availability zones. A zero-replica or single-zone Pool is not HA. HA is
configuration guidance, not a service guarantee, API setting, or one exact topology.

## Replication

Each shard in a [Capacity Pool](/product/cache/concepts/capacity-pool) can have zero, one, or more replica
nodes in addition to the active primary node. At least one healthy replica per shard makes the
Pool capable of failing over when a primary node is lost.

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

Changes to a Pool's configuration, including instance-type upgrades, use a rolling,
make-before-break update. The service works one shard at a time, bringing up a replacement and
waiting for it to become healthy before removing the old node. This design preserves healthy
capacity during the update without making a no-disruption guarantee.
