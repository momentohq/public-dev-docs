---
title: Provisioning a cluster
description: Discover the config menu, apply a ValkeyCluster, watch it reach Active, and understand what your RBAC grants allow.
sidebar_position: 2
---

# Provisioning a cluster

This guide walks through provisioning a Valkey cluster with the Momento Valkey Operator as a product team: finding out what your platform team has made available, applying a `ValkeyCluster`, and watching it come up. It also covers the decisions you need to get right before you apply it, because a few of them can't be changed afterward.

## Discover the menu

Your platform team curates the building blocks you provision from: `ValkeyConfig` (resource and Valkey-setting profiles), `ValkeyImage` (allowed Valkey versions), and `ValkeyRole` (reusable ACL permission sets). All three are cluster-scoped, so they're visible from any namespace, and your access to them is read-only.

List the configs on offer:

```bash
kubectl get valkeyconfigs
```

```text
NAME       IMAGEREF     BASEREF
standard   valkey-9-0
large      valkey-9-0   standard
```

Inspect a config to see what it resolves to before you commit to it:

```bash
kubectl describe valkeyconfig standard
```

The value you put in `configRef` is the `metadata.name` of one of these: `standard` in the example above. If you need a profile that isn't on the menu, or a Valkey version that isn't allowlisted, ask your platform team. You cannot create `ValkeyConfig` or `ValkeyImage` resources yourself.

## Apply a ValkeyCluster

`ValkeyCluster` is namespaced; create it in the namespace where your application runs:

```yaml
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyCluster
metadata:
  name: my-cluster
  namespace: my-app
spec:
  configRef: standard
  shards: 3
  replicasPerShard: 1
```

```bash
kubectl apply -f my-cluster.yaml
```

`configRef` must name a `ValkeyConfig` your platform team has published. `shards` and `replicasPerShard` set the initial topology: you can change both later; see [Scaling](scaling.md).

## States you'll observe

Watch the cluster come up:

```bash
kubectl -n my-app get valkeycluster my-cluster -w
```

A new cluster starts in `Creating` while the operator forms the topology: creating nodes, assigning hash slots, attaching replicas. It moves to `Active` once the cluster is fully formed and serving. You might also see `Invalid` if a referenced TLS Secret fails validation; the operator recovers automatically once the Secret is fixed. For the full state definitions and transition rules, see [Cluster status](../reference/cluster-status.md).

## Reading cluster status

Check the cluster's status:

```bash
kubectl -n my-app get valkeycluster my-cluster
```

```text
NAME         CONFIG     SHARDS   REPLICAS   STATE
my-cluster   standard   3        1          Active
```

`kubectl describe` shows the full spec and status:

```bash
kubectl -n my-app describe valkeycluster my-cluster
```

```text
Name:         my-cluster
Namespace:    my-app
API Version:  valkey.gomomento.com/v1alpha1
Kind:         ValkeyCluster
Spec:
  Config Ref:          standard
  Replicas Per Shard:  1
  Shards:              3
Status:
  State:  Active
```

The status carries no pod list; to see the members backing the cluster, list the operator-internal `ValkeyNode` resources, which also show per-node lifecycle (`Joining`, `Active`, `Leaving`). Names carry a random suffix rather than an ordinal (`-0`, `-1`) because the operator manages pods directly:

```bash
kubectl -n my-app get valkeynodes
```

```text
NAME               CLUSTER      IMAGE                LIFECYCLE
my-cluster-1a2b3   my-cluster   valkey/valkey:9.0.0  Active
my-cluster-4c5d6   my-cluster   valkey/valkey:9.0.0  Active
my-cluster-7e8f9   my-cluster   valkey/valkey:9.0.0  Joining
```

`ValkeyNode` is read-only for product teams, useful for observing bootstrap and rollout progress, but not something you create or edit directly.

## RBAC reality

Your platform team grants you namespaced create/read/update/delete access to `valkeyclusters`, plus read access to `valkeynodes`, in your own namespace. Access to the menu resources (`valkeyimages`, `valkeyconfigs`, `valkeyroles`) is cluster-wide but read-only. In practice this means:

- You can provision, scale, reconfigure, and delete any number of `ValkeyCluster` resources in your namespace.
- You can inspect the menu to decide what to reference, but you cannot register a new image, publish a new config, or define a new role. Those go through your platform team.
- You have no direct access to the Pods, Services, ConfigMaps, or Secrets the operator creates on your cluster's behalf. Day-to-day state is visible through `ValkeyCluster` status and the `ValkeyNode` resources, but some failures surface only in operator logs your platform team can read; see [Troubleshooting](../operations/troubleshooting.md).

## Deletion

Delete the cluster:

```bash
kubectl -n my-app delete valkeycluster my-cluster
```

Deleting a `ValkeyCluster` tears down everything it owns: every `ValkeyNode`, pod, per-node ConfigMap, the ACL ConfigMap, the auth Secret, and the headless Service. Nothing is left orphaned in your namespace. Deletion is finalizer-backed and scoped entirely to the cluster's namespace; it never touches another team's resources or the platform-level menu.

:::warning
Finalizer cleanup requires a running operator. If the operator is down when you delete a cluster, the resource sits in `Terminating` until the operator comes back. See the stuck-`Terminating` entry in [Troubleshooting](../operations/troubleshooting.md).
:::

## Create-time decisions

A few fields are worth getting right before you apply the cluster, because they're expensive or impossible to change afterward.

**TLS.** Set `spec.tls.secretRef` to encrypt client traffic, replication, and the cluster bus from the start.

:::warning
TLS presence is immutable. You cannot add TLS to a cluster that was created without it, or remove it from one that has it. Only the referenced Secret (for certificate rotation) can change. If you might need TLS, enable it at creation. See [TLS](../security/tls.md).
:::

**Placement.** `spec.placement` controls which availability zones and node pools your cluster's pods land on, and how strictly each shard is spread across zones. It can be changed later, but a change to `zones` or `nodeSelector` triggers a rolling replacement of every pod. That's worth setting deliberately up front for anything beyond a dev cluster. See [Zone-aware placement](../operations/zone-aware-placement.md).

**ACLs.** `spec.acl` binds users to your cluster, additive to anything your platform team has bound at the config level. Until you bind at least one user, the cluster's `default` user is fully open to any client that can reach it on the network. That's worth deciding deliberately rather than by omission. See [ACLs](../security/acls.md).
