---
title: Operations
description: "Day-2 operations for Valkey clusters managed by the Momento Valkey Operator: failure behavior, placement, sizing, benchmarking, troubleshooting, and uninstall."
sidebar_position: 1
---

# Operations

This section is the day-2 reference for running Valkey clusters on the Momento Valkey Operator in production: what happens when things fail, how to place and size clusters, how to validate performance, and how to diagnose problems. It assumes a cluster is already provisioned; for first-time setup, see [Getting started](../getting-started/index.md) and the [platform](../platform-guide/index.md) and [product](../team-guide/index.md) team guides.

- **[Failure modes](failure-modes.md)** — the flagship page. How a Valkey cluster behaves, automatically, when a replica dies, a primary dies with or without quorum or replicas, a Kubernetes node or zone is lost, or the operator itself goes down. Read this before you need it.
- **[Zone-aware placement](zone-aware-placement.md)** — how `placement.zones`, `nodeSelector`, and `zoneSpread` control where pods land, what changing placement does to a live cluster, and how placement interacts with a cluster autoscaler.
- **[Sizing](sizing.md)** — setting `resources` in a `ValkeyConfig` so pods get Guaranteed quality of service, leaving `maxmemory` headroom, and choosing when to scale up versus out.
- **[Benchmarking](benchmarking.md)** — validating throughput and latency against an operator-provisioned cluster with standard Valkey tooling, in-cluster, including TLS and ACL variants.
- **[Troubleshooting](troubleshooting.md)** — symptom-first diagnosis: stuck `Creating`, `Invalid` clusters, pods stuck `Pending`, ACL authentication failures, stalled rolling upgrades, stuck `Terminating`, and what to collect before contacting support.
- **[Uninstall](uninstall.md)** — the order to remove clusters, the operator, and CRDs, and how to verify nothing is left behind.

:::note
[Failure modes](failure-modes.md) and [Data durability](../concepts/data-durability.md) cover related ground from different angles: failure modes describes the operator's automatic response to each event, while data durability states the storage model and exactly which events lose data. Read them together before setting availability expectations for a cluster.
:::
