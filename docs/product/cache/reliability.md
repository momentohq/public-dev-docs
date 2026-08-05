---
sidebar_label: Reliability
title: Momento Cache reliability
description: How Momento Cache delivers high availability through replication, multi-AZ placement, and managed operation.
unlisted: true
---

<!-- Projects: cache2/concepts/capacity-pool, cache2/concepts/provisioning-modes, cache2/capabilities/sizing-and-isolation-guidance -->

# Reliability

Momento Cache operates your Valkey Capacity Pool as a managed, replicated cluster, delivering
high availability with zero maintenance. This page describes how the service achieves reliable
performance and what you can configure.

## Replication

Each shard in a [Capacity Pool](/product/cache/concepts/capacity-pool) can have zero, one, or more replica
nodes in addition to the active primary node. Set `replicas_per_shard` to at least one in
production so that the data in a shard will survive the loss of a node.

## Multi-AZ placement

Use multiple availability zones for production deployments. You configure which zones a
[Capacity Pool](/product/cache/concepts/capacity-pool) can use, while Momento automatically distributes
Valkey nodes across those zones. Choose two or more availability zones in production so that
the pool survives the loss of a single zone.

## Managed operation

The Momento Cache control plane manages the underlying cluster based on your specified
configuration. It automatically provisions and replaces nodes, including promotion of a
replica when a primary is lost (failover). Momento automatically applies CVE patches and
version upgrades so that you never have to worry about being out of date.

## Automatic Rolling Updates

Changes to a pool's configuration, including instance-type upgrades, are applied as a rolling
update. The service replaces nodes one at a time, bringing up the new node and waiting for it
to become healthy before removing the old node, so that the pool continues serving without
disruptions.
