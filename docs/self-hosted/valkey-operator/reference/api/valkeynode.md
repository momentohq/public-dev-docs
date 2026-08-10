---
title: ValkeyNode
description: Reference for the ValkeyNode custom resource, the operator-internal representation of a single Valkey cluster member.
sidebar_position: 6
---

# ValkeyNode

`ValkeyNode` represents a single member (one pod) of a Valkey cluster managed by the Momento Valkey Operator. The operator creates, mutates, and deletes these resources itself; they are documented here because you will see them with `kubectl` and they are useful for observing cluster transitions.

:::info
`ValkeyNode` is operator-internal and read-only for users. Do not create, edit, or delete `ValkeyNode` resources. To change a node's configuration, change the owning [`ValkeyCluster`](valkeycluster.md) or its [`ValkeyConfig`](valkeyconfig.md): the operator replaces nodes to converge on the change.
:::

## Resource metadata

| | |
|---|---|
| API group/version | `valkey.gomomento.com/v1alpha1` |
| Kind | `ValkeyNode` |
| Plural | `valkeynodes` |
| Scope | Namespaced |

Each `ValkeyNode` is owned by a `ValkeyCluster` and is deleted with it. The node's name (`{cluster}` plus a random suffix) is also the name of the pod and configuration ConfigMap the operator creates for it.

## Spec

The spec is immutable by design: the operator never updates a node's configuration in place. When a node becomes outdated (a new image, changed resources or Valkey settings, or changed placement), the operator creates a replacement `ValkeyNode` and retires the old one. The single exception is `lifecycle`, the one mutable field, which the operator moves through the join/leave process.

| Field | Type | Required | Default | Validation | Description |
|---|---|---|---|---|---|
| `clusterName` | string | Yes | — | none | Name of the owning [`ValkeyCluster`](valkeycluster.md). |
| `image` | string | Yes | — | none | Container image as `repository:tag`, already resolved from the config's `ValkeyImage`, not a reference. |
| `cpu` | string | No | — | none | CPU request and limit, copied from the resolved config. |
| `memory` | string | No | — | none | Memory request and limit, copied from the resolved config. |
| `valkeySettings` | map of string to string | No | `{}` | none | Valkey configuration key-value pairs with the operator's [forced settings](../forced-settings.md) baked in. |
| `shardIndex` | integer | Yes | — | Minimum 0. | Operator-assigned scheduling index, propagated as a pod label so topology spread constraints keep each shard's nodes on separate hosts and across zones. Not the Valkey shard ID. |
| `tlsSecret` | string | No | — | none | Name of the TLS Secret mounted at `/etc/valkey/tls/`. Set when the owning cluster has TLS enabled. |
| `placement` | object (same shape as [`ValkeyCluster` `Placement`](valkeycluster.md#placement)) | No | — | none | Placement constraints copied from the owning cluster when the node is created. A later change to the cluster's `zones` or `nodeSelector` makes existing nodes outdated, driving a rolling replacement onto the new placement. |
| `lifecycle` | string (enum) | No | `Active` | One of `Active`, `Joining`, `Leaving`. | The one mutable field: where this node is in the cluster join/leave process. `Joining`: being added to the Valkey cluster; `Active`: a full member; `Leaving`: being drained and retired. |

Watching lifecycles is a practical way to observe a bootstrap or rolling replacement:

```bash
kubectl get valkeynodes -n my-app -w
```

```text
NAME               CLUSTER      IMAGE                LIFECYCLE
my-cluster-3f9a1   my-cluster   valkey/valkey:9.0.0   Active
my-cluster-8c04d   my-cluster   valkey/valkey:9.0.0   Joining
my-cluster-b52e7   my-cluster   valkey/valkey:9.0.0   Leaving
```

## Status

`ValkeyNode` has no status subresource. It is the only one of the five resources without one. Observe node health through the pod of the same name and the owning cluster's status.

## Printer columns

`kubectl get valkeynodes` shows:

| Column | Source |
|---|---|
| `Cluster` | `.spec.clusterName` |
| `Image` | `.spec.image` |
| `Lifecycle` | `.spec.lifecycle` |

## References and referenced by

- References its owning [`ValkeyCluster`](valkeycluster.md) via `spec.clusterName` (and an owner reference), and a TLS Secret via `spec.tlsSecret` when TLS is enabled.
- Owns the pod and the node ConfigMap that carry its name.
- Referenced by no user-facing resource.

## Example

A `ValkeyNode` as created by the operator for the TLS-enabled cluster `my-cluster` (shown for reading, not for applying):

```yaml
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyNode
metadata:
  name: my-cluster-3f9a1
  namespace: my-app
  # ownerReferences to the ValkeyCluster omitted
spec:
  clusterName: my-cluster
  image: valkey/valkey:9.0.0
  cpu: "1"
  memory: "2Gi"
  shardIndex: 0
  tlsSecret: my-cluster-tls
  placement:
    zones:
      - us-east-1a
      - us-east-1b
    zoneSpread: required
  valkeySettings:
    cluster-enabled: "yes"
    maxmemory: "1500mb"
    # ... remaining settings from the resolved config plus forced settings
  lifecycle: Active
```
