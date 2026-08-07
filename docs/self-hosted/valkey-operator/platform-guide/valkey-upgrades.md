---
title: Managing Valkey upgrades
description: How registering a new image and repointing a config rolls the fleet, what a rolling upgrade looks like per shard, and how to stage a fleet-wide rollout.
sidebar_position: 4
---

# Managing Valkey upgrades

This guide covers upgrading (and downgrading) the Valkey engine version across a fleet managed by the Momento Valkey Operator. It covers how a version change propagates from a `ValkeyConfig` to every cluster that uses it, what a rolling upgrade looks like at the shard level, and how to control the blast radius of a fleet-wide change.

## Trigger a fleet upgrade

No per-cluster upgrade action exists. An upgrade is a menu change: register the new image, then repoint the config's `imageRef` at it.

```yaml
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyImage
metadata:
  name: valkey-9-0-1
spec:
  repository: valkey/valkey
  tag: "9.0.1"
  version: "9.0.1"
```

```bash
kubectl patch valkeyconfig standard \
  --type merge -p '{"spec": {"imageRef": "valkey-9-0-1"}}'
```

:::info
Every `ValkeyCluster` that resolves to `standard` (directly, or through a `baseRef` chain) starts rolling immediately, and **all of them roll concurrently**. No fleet-level sequencing exists: the operator does not stagger clusters, wait for one to finish before starting the next, or offer a canary step at the config level. Each cluster paces its own roll one shard at a time, but every cluster referencing the config begins at once. Plan the blast radius of a config change with this in mind. See [Staged rollout](#staged-rollout) below if a simultaneous fleet-wide roll is not what you want.
:::

## What a roll looks like per shard

Within each cluster, the operator upgrades strictly one shard at a time, replacing before it retires:

1. A new node running the up-to-date image joins the shard as a replica.
2. Once the shard has more replicas than its target, an outdated replica is retired.
3. If the primary itself is outdated, the operator issues exactly one failover onto an up-to-date replica: a clean handoff that waits for replication sync before promoting.
4. Another up-to-date replica joins, putting the shard over its replica target again with the demoted former primary as the excess.
5. The demoted, now-outdated former primary is retired as the excess replica.

A node is only ever retired while the shard is above its replica target, so the shard never dips below its configured replica count at any point in the sequence.

The cluster reports `Active` throughout: there is no `Updating` state you will observe. The full change-impact table, including which other spec changes trigger this same rolling-replacement mechanism, lives in [Reconciliation](../concepts/reconciliation.md); this page covers the image-upgrade case specifically.

## Client impact

Each shard experiences exactly one failover during its roll: the same event a primary-pod failure would cause, not a series of them. Writes to that shard fail for the duration of the failover; other shards are unaffected. A cluster-aware client handles the failover through its normal topology refresh, the same mechanism it uses for any primary change. See [Connecting to your cluster](../team-guide/connecting.md) for client requirements and retry guidance.

## Staged rollout

Because repointing a shared config rolls every referencing cluster at once, the recommended way to control an upgrade's pace is to stage it through configs rather than through the operator:

1. Duplicate the config under a new name (for example, `standard` becomes `standard-v2`) pointing at the new image, leaving the original `standard` untouched.
2. Migrate clusters gradually by editing each `ValkeyCluster.spec.configRef` from `standard` to `standard-v2`, one team, one cluster, or one batch at a time, on whatever schedule you choose.
3. Once every cluster has moved, retire the old config, or repoint `standard` at the new image and drop `standard-v2` for the next round.

This gives you a canary and a rollback point that repointing `imageRef` in place cannot. At any moment, some clusters are on the old image and some are on the new one, under your control, rather than the entire fleet moving together.

## Monitoring a roll

Watch the same signals as any rolling replacement:

- `kubectl get valkeynodes -n <namespace>`: new nodes appear with `Joining` lifecycle, then flip to `Active`; outdated nodes disappear as they are retired.
- `kubectl get valkeycluster -n <namespace> -w`: the cluster's node list and printer columns update as the roll proceeds; state stays `Active`.
- Pod image column: confirm pods are coming up on the new image.

See [Cluster status](../reference/cluster-status.md) for status field semantics and [Labels and annotations](../reference/labels-annotations.md) for the labels you can use to build a dashboard across the fleet. [Monitoring](monitoring.md) covers fleet-wide observability in depth.

## Downgrading

Downgrading uses the identical mechanism in reverse: register a `ValkeyImage` for the older version and repoint the config at it. The same per-shard procedure, concurrency behavior, and staged-rollout option all apply.

:::warning
Downgrade paths are not routinely exercised in practice: most fleets move forward only. Treat a downgrade as you would any under-tested operation: stage it (see above) rather than repointing a widely-shared config directly, and verify the target version behaves as expected on a non-critical cluster first. The engine version floor is firm regardless of direction: never downgrade below Valkey 9, since resharding depends on slot-migration commands introduced in that version, and older engines do not support them.
:::
