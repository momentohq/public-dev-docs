---
title: Labels, annotations, and naming
description: The label taxonomy on operator-created resources, resource naming patterns, the reserved annotation prefix, and what selectors are safe to build on.
sidebar_position: 4
---

# Labels, annotations, and naming

This page catalogs the labels, annotations, names, and other identifying metadata the Momento Valkey Operator puts on the resources it creates. Use it to build NetworkPolicies, monitoring selectors, and dashboards on stable keys rather than observed behavior.

## Pod labels

Every Valkey pod carries these labels:

| Label | Value | Stability |
|---|---|---|
| `app.kubernetes.io/name` | `valkey` | Stable. Identifies all Valkey pods managed by the operator, across all clusters. |
| `app.kubernetes.io/instance` | `{cluster}` (the `ValkeyCluster` name) | Stable. Identifies the pods of one Valkey cluster. This is the selector the operator itself uses, and the selector on the cluster's Service. |
| `valkey.gomomento.com/shard-index` | `{n}` (operator-assigned integer) | Stable per node. A scheduling index used for topology spread; it is **not** the Valkey shard ID. |

## ValkeyNode labels

`valkey.gomomento.com/join-type` (`replica`, `primary`, or `shard`) appears on **`ValkeyNode` resources, not on Pods**: a `kubectl get pods` selector on it matches nothing. It records how a node joined the cluster (replacement replica, dead-primary replacement, or scale-out shard). Only the `shard` value is cleared when the join completes; `replica` and `primary` values persist on the `ValkeyNode` after the node is active, so treat the label as "how this node joined", not "whether it is still joining". Use `kubectl get valkeynodes -l valkey.gomomento.com/join-type=<value>` to query it.

### What to build on

- **NetworkPolicies and monitoring selectors**: use `app.kubernetes.io/name=valkey` to match all Valkey pods, and `app.kubernetes.io/instance={cluster}` to match one cluster's pods. Both are guaranteed on every Valkey pod.
- **Per-shard dashboards**: `valkey.gomomento.com/shard-index` groups a shard's primary and replicas for topology-spread purposes and is safe for grouping in dashboards, with the caveat that it is a scheduling index, not the runtime Valkey shard ID.
- **`valkey.gomomento.com/join-type`**: do not build policy on it; it lives on `ValkeyNode` resources, not Pods, and is not consistently removed after a join completes.

Example NetworkPolicy selector for one cluster:

```yaml
podSelector:
  matchLabels:
    app.kubernetes.io/name: valkey
    app.kubernetes.io/instance: my-cluster
```

:::note
The label guarantees above are documented for pods. Identify the other per-cluster resources (Service, Secret, ConfigMaps) by their naming patterns below rather than by labels.
:::

## Resource naming patterns

For a `ValkeyCluster` named `my-cluster`, the operator creates:

| Resource | Name pattern | Example |
|---|---|---|
| Headless Service | `{cluster}` | `my-cluster` |
| Operator auth Secret | `{cluster}-operator-auth` | `my-cluster-operator-auth` |
| ACL ConfigMap | `{cluster}-acl` | `my-cluster-acl` |
| `ValkeyNode` / Pod | `{cluster}-{random-suffix}` (5-character hex) | `my-cluster-1a4f2` |
| Per-node ConfigMap | `{node}-config` | `my-cluster-1a4f2-config` |

A `ValkeyNode`, its Pod, and the prefix of its ConfigMap share the same name. Pod names are random-suffixed rather than ordinal because the operator manages pods directly instead of through a StatefulSet; see [Pod management](../concepts/pod-management.md).

All of these resources are owner-referenced to the `ValkeyCluster` (directly or via their `ValkeyNode`), so deleting the cluster cascade-deletes everything.

:::warning
Never delete the `{cluster}-operator-auth` Secret. It holds the operator and replication credentials for the cluster and has no rotation mechanism; see [ACLs](../security/acls.md).
:::

## Reserved annotation prefix

The prefix `valkey.gomomento.com/` on annotations is reserved for the operator. The `ValkeyCluster` CRD rejects any `spec.podAnnotations` key under this prefix at admission time with the message that the prefix is reserved. All other `podAnnotations` keys pass through verbatim to every managed pod.

## Finalizers

The operator's finalizers also live under the reserved prefix:

| Finalizer | On |
|---|---|
| `valkey.gomomento.com/cleanup` | `ValkeyCluster` |
| `valkey.gomomento.com/node-cleanup` | `ValkeyNode` |

If a resource is stuck in `Terminating`, these finalizers are usually waiting on an operator that is down or was uninstalled first; see [Troubleshooting](../operations/troubleshooting.md) before considering manual removal.

## Built-in arm64 toleration

Every Valkey pod carries a toleration for `kubernetes.io/arch=arm64:NoSchedule`. This lets Valkey pods schedule onto tainted arm64 node pools without any per-cluster configuration; it is a no-op on Kubernetes clusters without such taints. It cannot be removed per cluster. See [Compatibility](../support/compatibility.md) for supported architectures.
