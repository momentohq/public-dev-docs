---
title: Pod management
description: Why the Momento Valkey Operator manages pods directly instead of through StatefulSets or Deployments, and what that looks like in your Kubernetes cluster.
sidebar_position: 5
---

# Pod management

The Momento Valkey Operator creates and manages bare pods directly: there is no StatefulSet or Deployment underneath a Valkey cluster. This page explains why, and walks through the things an experienced Kubernetes user will notice about operator-managed pods, each of which is intentional.

## Why not a StatefulSet

Generic workload controllers reconcile a pod count against a pod template. The unit of correctness for a Valkey cluster is different: it is the cluster topology (which node is a primary, which shard it belongs to, whether its replicas are in sync). Managing that safely requires semantics no generic controller can express:

- **Topology-aware replacement order.** Which pod to replace next, and when, depends on the live topology: shard membership, primary or replica role, replication sync state. Ordinal order or template-hash order is meaningless here.
- **Replace before retire.** When a node must be replaced, the operator first creates its successor, joins it to the shard, and waits for it to sync; only then does the old node leave. A controller that deletes a pod and recreates it in place cannot provide this overlap.
- **Exactly one client-visible failover per shard during a roll.** Replacing a primary requires a deliberate, coordinated failover at a moment the operator chooses, after the promoted replica has caught up. See [Reconciliation](reconciliation.md) for the rolling-replacement procedure.

Instead of a workload controller, each Valkey cluster member is modeled as a `ValkeyNode` resource: an operator-internal, read-only-to-you record that owns exactly one pod and one ConfigMap, with an explicit lifecycle (`Joining` → `Active` → `Leaving`). Membership changes are always expressed as lifecycle transitions on these resources, which makes every step of a transition observable with `kubectl`.

## What you will notice

### Random pod names

Pods (and their `ValkeyNode` resources) are named `{cluster}-{random-suffix}`, not `{cluster}-0`, `{cluster}-1`. Identity does not live in the pod name; it lives in the `ValkeyNode` resource and the Valkey cluster topology. A replaced member gets a new name; a changing pod name is normal and expected. To locate pods, use the labels instead: `app.kubernetes.io/instance={cluster}` selects a cluster's pods, and `valkey.gomomento.com/shard-index` identifies the shard.

### restartPolicy: Never

A dead pod is evidence. If the kubelet restarted a crashed Valkey process in place, the operator would have to reverse-engineer what happened from the outside. Instead, a pod that dies stays dead, the operator observes it, and replaces the member through the `ValkeyNode` lifecycle, failing over first if the dead member was a primary. Every state transition in the Valkey cluster is therefore deliberate: taken by the operator or by the Valkey cluster protocol itself, never by the kubelet.

### Liveness-only probes

Pods carry a liveness probe (an authenticated ping, or a TCP check on TLS clusters) and **no readiness probe**. This is deliberate: readiness gates Service endpoints, but clients of a Valkey cluster do not load-balance through Service endpoints; they discover topology through the cluster protocol, which has its own gossip-based view of node health. A readiness gate would remove a node from DNS while the cluster protocol still routes to it (or the reverse), presenting two conflicting health views. The liveness probe exists only to turn a hung server into a dead pod, which, per the previous point, is exactly the signal the operator acts on.

### No PodDisruptionBudgets

The operator creates no PDBs. What stands in for them:

- **Replicas**: with `replicasPerShard` ≥ 1, a shard survives losing a member.
- **Zone and host spread**: per-shard topology spread constraints keep a shard's members off the same Kubernetes node and zone, so one machine or zone rarely takes out a whole shard.
- **The operator's own pacing**: one action per tick, one shard in motion at a time.

Nothing, however, blocks a drain from evicting several Valkey pods at once. For Kubernetes node drains and Kubernetes upgrades, pace the work and let the operator recover between steps. See [Kubernetes maintenance](../platform-guide/kubernetes-maintenance.md).

### Built-in arm64 toleration

Every Valkey pod carries a toleration for `kubernetes.io/arch=arm64:NoSchedule`. If your platform taints arm64 Kubernetes node pools expecting only explicitly opted-in workloads, be aware that Valkey pods can schedule onto those pools whenever their placement constraints otherwise allow it. Use `placement.nodeSelector` or `placement.zones` to steer pods where you want them. See [Zone-aware placement](../operations/zone-aware-placement.md).

### Ephemeral storage only

Pods request no PersistentVolumeClaims; the data directory is an `emptyDir` that dies with the pod. This is a property of the storage model, not an accident. See [Data durability](data-durability.md).

## How drains and evictions look to the operator

An eviction (from a Kubernetes node drain, autoscaler scale-down, or resource pressure) deletes the pod, and `restartPolicy: Never` means nothing brings it back in place. From the operator's point of view this is indistinguishable from any other pod death:

1. The member disappears; the operator (and the Valkey cluster's own gossip) notice.
2. If the dead member was a primary, a replica is promoted: by Valkey's automatic failover when quorum holds, or forced by the operator when it does not.
3. The dead member is forgotten from the topology, and a replacement node is created, joins the shard, syncs, and activates.

The full event-by-event behavior, including the no-replica cases, is cataloged in [Failure modes](../operations/failure-modes.md).
