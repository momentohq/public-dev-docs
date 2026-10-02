---
title: Reconciliation
description: "How the Momento Valkey Operator changes things: cluster states, one action per tick, the repair priority order, and which spec changes replace pods."
sidebar_position: 4
---

<!-- Projects: self-hosted-operator-operations, self-hosted-operator-capabilities -->

# Reconciliation

This page explains how the Momento Valkey Operator turns a `ValkeyCluster` spec into a running Valkey cluster and keeps it that way: the states you can observe, how the operator paces changes, and (most importantly for day-2 operations) [what happens when you edit a live cluster's spec](#what-happens-when-you-change-the-spec). Read it before planning upgrades, scaling, or maintenance.

## The cluster state machine

A ValkeyCluster reports Creating during bootstrap, Active when formed, and Updating during a rolling change. Invalid marks a recoverable problem on a running cluster; Failed marks a terminal creation failure. [Cluster status](../reference/cluster-status.md) defines the states and recovery actions.

## Spec immutability during creation

Spec edits are rejected at admission until the cluster reaches Active. Correct external prerequisites, such as missing referenced resources, before retrying. A creation failure reported as Failed requires deletion and recreation after the cause is fixed. See [Troubleshooting](../operations/troubleshooting.md).

## One action per tick

The operator is stateless between reconciliation passes ("ticks"). Every tick, for each cluster, it:

1. Rediscovers actual state from scratch: the cluster's `ValkeyNode` resources, their pods, and the live Valkey topology as the nodes themselves report it.
2. Compares that against the desired spec.
3. Takes **at most one corrective action** (create one node, move one batch of slots, fail over one shard), then requeues and starts over.

Ticks are event-driven (edits to a `ValkeyCluster`, or to a `ValkeyConfig` or `ValkeyImage` it references, trigger reconciliation immediately) and otherwise re-run on short intervals: seconds while work is in flight. A tick that fails (for example, because a `configRef`, `imageRef`, or `roleRef` cannot be resolved) takes no partial action and is retried.

This design is deliberate:

- **Predictability.** Each state change is a single, small, well-defined step. No compound action is ever half-applied.
- **Bounded blast radius.** A wrong decision (or a badly timed failure) affects one node or one slot batch, not the whole Valkey cluster.
- **Observable progress.** You can watch a transition happen step by step through `ValkeyNode` resources, pod events, and the cluster's own topology commands.
- **Safe operator restarts.** Because no plan is held in memory, restarting or upgrading the operator mid-transition loses nothing. The next tick rediscovers reality and continues.

:::note
There is one documented exception: when the operator removes a dead member from the topology, it issues the forget command to every live node in the same tick. The cluster protocol does not gossip forgets, and a partially-forgotten node would be re-learned from peers that still remember it.
:::

## What the operator fixes first

When multiple things need attention, the first applicable action in a fixed priority order wins the tick. In plain language, the order is:

1. **Stability.** Restore a healthy primary to every shard: wait for Valkey's automatic failover when a replica and quorum exist, force a takeover when quorum is lost, or, when a failed primary has no replica, remove it and create a fresh, empty primary (a data-loss event; see [Data durability](data-durability.md)). Then forget departed members that are still in the topology, and restore each shard's replica count.
2. **Topology.** Complete the departure of any node marked as leaving, retire shards that have been drained of slots (scale-in), rebalance slots toward an even distribution, and add new shards (scale-out).
3. **Updates.** Roll outdated nodes to the current spec, one shard at a time (see below).
4. **Cleanup.** Remove excess replicas and terminate nodes that no longer belong to any shard.

Stability always preempts everything else: a Valkey cluster with an unhealthy primary is repaired before any scaling, rebalancing, or upgrade work continues. This is also how the operator avoids wedging when a failure lands mid-workflow: the failure is repaired first, then the interrupted work resumes from rediscovered state.

## What happens when you change the spec

:::info
This is the canonical change-impact table. Every field you can edit on a live `ValkeyCluster` falls into one of three categories: it triggers a **rolling pod replacement**, it applies **in place** to running pods, or it affects **only future pods**.
:::

| Spec change | Impact |
|---|---|
| Image: the resolved `ValkeyImage` changes (a `ValkeyConfig`'s `imageRef` is repointed, or the `ValkeyImage`'s repository/tag is edited) | **Rolling pod replacement.** Editing a menu resource rolls *every* cluster that references it. See [Valkey upgrades](../platform-guide/valkey-upgrades.md). |
| `resources` (cpu, memory) anywhere in the resolved config | **Rolling pod replacement.** |
| Any `valkey` setting anywhere in the config inheritance chain | **Rolling pod replacement.** |
| Switching the cluster's `configRef` to a different `ValkeyConfig` | **Rolling pod replacement** (if the resolved result differs). |
| `placement.zones` (compared as a set; reordering is not a change) | **Rolling pod replacement.** |
| `placement.nodeSelector` | **Rolling pod replacement.** |
| `podAnnotations` | **In place.** Added or changed annotations are patched onto live pods; *removals* take effect only when a pod is next replaced. |
| ACL changes (`spec.acl` bindings, config-level bindings, edits to a referenced `ValkeyRole`) | **In place.** The rendered ACL file is updated and reloaded on every node: no pod restarts. Changes reach nodes in two stages: kubelet volume propagation (typically up to about a minute) plus the ACL controller's 30-second pass. See [ACLs](../security/acls.md). |
| `tls.secretRef` rotation (new certificate material) | **In place.** Nodes re-read certificates from disk: no pod restarts. Same two-stage propagation as ACLs. See [TLS](../security/tls.md). |
| `placement.zoneSpread` | **Future pods only.** It is a scheduling preference baked into pods at creation; existing pods are not replaced or moved. |

Two related notes:

- `shards` and `replicasPerShard` are topology changes, not pod-template changes: the operator adds or removes nodes and rebalances slots rather than replacing existing pods. See [Scaling](../team-guide/scaling.md).
- TLS *presence* is immutable: you cannot enable or disable TLS on an existing cluster (admission rejects the edit). Only `tls.secretRef` may change.

### How a rolling replacement proceeds

When any node's spec is outdated, the operator rolls the Valkey cluster **strictly one shard at a time**, in a deterministic shard order. Within the shard, it replaces before it retires:

1. Create a new node with the up-to-date spec and join it to the shard as a replica.
2. Once the shard is over its replica target, retire an outdated replica.
3. If the primary is outdated, issue **exactly one** coordinated failover onto an up-to-date replica. The failover command performs a clean handoff: the replica is promoted only after it has caught up with the primary.
4. Retire the demoted, outdated former primary as an excess replica.

The result: clients see at most one failover per shard per roll, the shard never drops below its replica target because new capacity joins before old capacity leaves, and only one shard is in motion at any moment. A rolling change is represented by Updating; see [Cluster status](../reference/cluster-status.md).

## The bootstrap sequence

A new `ValkeyCluster` moves from `Creating` to `Active` through a fixed sequence, one step per tick:

1. **Begin creation.** The cluster spec is frozen until Active.
2. **Create nodes.** One `ValkeyNode` per tick, spread evenly across shard indices, until `shards × (1 + replicasPerShard)` exist. Each node brings up its own configuration and pod.
3. **Wait for pods.** Bootstrap does not proceed until every pod is running with an IP address. An unschedulable pod (for example, unsatisfiable placement) makes bootstrap wait: it logs the scheduler's reason and holds, rather than proceeding with a partial topology. See [Troubleshooting](../operations/troubleshooting.md) for stuck-`Creating` diagnosis.
4. **Cluster meet.** Nodes are introduced to the topology one per tick through a seed node, and any stale member from a previous incarnation is forgotten.
5. **Assign slots.** Slot assignment is gated on consensus: every node must agree on how many slots are currently assigned before the operator hands out more. It then assigns contiguous slot ranges to one designated primary per tick.
6. **Attach replicas.** One replica per tick is attached to the primary of its shard.
7. **Verify and activate.** Nodes flip from `Joining` to `Active` lifecycle, and the cluster is marked `Active` only when every node reports a healthy cluster view, **all 16384 slots are assigned**, the shard count matches the target, and every slot-holding primary has its full replica count. The cluster spec can then be edited.

Full slot coverage is the operator's universal invariant: bootstrap, scaling, upgrades, and failure recovery all converge on all 16384 slots assigned.

## Deletion

Deleting a ValkeyCluster tears down its serving resources. Its ValkeyMeteringRecord remains in the operator namespace for export and billing; see [Usage metering](../platform-guide/usage-metering.md). Finalizers (`valkey.gomomento.com/cleanup` on the cluster, `valkey.gomomento.com/node-cleanup` on each node) gate the deletion, and every dependent object (`ValkeyNode` resources, pods, per-node ConfigMaps, the ACL ConfigMap, the auth Secret, and the headless Service) carries an owner reference to the cluster, so Kubernetes garbage collection cascades the removal. Teardown is scoped to the cluster's namespace.

Deletion does not interact with the Valkey protocol: there is no flush or drain. Pods terminate with their resources, and because storage is ephemeral, the data is gone. See [Data durability](data-durability.md).

:::warning
Finalizers require a running operator to clear. If the operator is down (or was uninstalled before its clusters were deleted), a deleted `ValkeyCluster` sits in `Terminating` indefinitely. See the stuck-`Terminating` entry in [Troubleshooting](../operations/troubleshooting.md).
:::
