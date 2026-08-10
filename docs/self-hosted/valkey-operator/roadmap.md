---
title: Roadmap
description: Direction for the Momento Valkey Operator, explicitly non-contractual; everything else in these docs describes shipped behavior.
sidebar_position: 11
---

# Roadmap

:::note
This page describes direction for the Momento Valkey Operator, not committed features or dates. Everything else in these docs describes behavior the operator ships today.
:::

## Central governance service

Today, the image allowlist and configuration menu live entirely as `ValkeyImage` and `ValkeyConfig` custom resources that the platform team manages by hand in each Kubernetes cluster. The direction under consideration is a Momento-managed control plane the operator would query at runtime for allowlisted images and configuration constraints, alongside fleet-wide observability that aggregates cluster state across every Kubernetes cluster running the operator, not just the one it's deployed in. For a platform team running the operator across many Kubernetes clusters, this would mean defining policy once centrally instead of keeping cluster-scoped custom resources in sync across every cluster by hand.

## Metrics export from the operator

The operator emits structured logs and `ValkeyCluster` status today; no metrics endpoint exists (see [Monitoring](platform-guide/monitoring.md)). Direction under consideration includes native metrics export from the operator itself, covering reconciliation activity and cluster health, without requiring a platform team to stand up their own exporter. This would give platform teams a standard scrape target for operator-level observability instead of relying solely on logs and periodic status polling.

## Namespace-level policy constraints

Today, governance stops at the menu: a product team can pick any published config and provision any number of clusters from it, with no finer-grained limits. Under consideration are per-namespace or per-team constraints layered on top of the existing menu: restricting a team to a subset of configs, or capping shard count or cluster count per namespace. This would let a platform team express quota-style policy without resorting to external admission tooling.

## Backup and restore

The operator provisions no persistent storage today, and there is no backup or restore facility (see [Data durability](concepts/data-durability.md)). Backup and restore support, aimed at cache warm-up scenarios rather than durable primary storage, is under investigation. This would give platform teams a way to pre-populate a newly created or recovered cluster instead of relying entirely on client-side re-hydration after a data-loss event.

## Broader engine-version support for slot migration

Shard scaling relies on server-side slot-migration commands available starting in Valkey 9; today that is the operator's version floor for resharding (see [Compatibility](support/compatibility.md)). Broader engine-version support for slot migration, covering older Valkey releases through a different migration mechanism, is a direction under consideration. This would let platform teams run the operator's scaling features against a wider range of already-deployed Valkey versions instead of first upgrading the engine.
