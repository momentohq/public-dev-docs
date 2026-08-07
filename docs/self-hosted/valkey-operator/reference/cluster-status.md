---
title: Cluster status
description: ValkeyCluster state semantics, transitions, the targetSpec snapshot, status fields, and how to read kubectl output.
sidebar_position: 2
---

# Cluster status

This page defines the `ValkeyCluster` status schema for the Momento Valkey Operator: what each state means, when transitions happen, and how to interpret `kubectl get` and `kubectl describe` output. It is reference material for anyone watching a cluster; for symptom-driven remediation, see [Troubleshooting](../operations/troubleshooting.md).

## Status fields

| Field | Type | Meaning |
|---|---|---|
| `state` | enum | Overall cluster state: `Creating`, `Active`, `Updating`, or `Invalid`. Defaults to `Creating`. |
| `targetSpec` | object (optional) | Snapshot of the spec the operator is currently working toward. Set when the cluster enters `Creating`; cleared when it reaches `Active`. |
| `nodes` | array of string | Schema-reserved for the names of the cluster's pods, but **not populated in the current release**: no code path writes it. List the cluster's members with `kubectl get valkeynodes` instead. |
| `message` | string (optional) | Human-readable detail for the current state. Populated when the state is `Invalid`; cleared on recovery. |

The status subresource has no `conditions` array; the single `state` value plus `message` is the complete signal.

## States

Values serialize exactly as shown (PascalCase).

| State | Meaning |
|---|---|
| `Creating` | The operator is bootstrapping the Valkey cluster: creating nodes, forming the cluster topology, assigning slots, and attaching replicas. A brand-new resource whose status has not been written yet is treated as `Creating`. |
| `Active` | The Valkey cluster is formed and serving. All ongoing management (scaling, rolling replacements, failover recovery) happens while the cluster reports `Active`. |
| `Updating` | Reserved. This value exists in the schema but is not reported by the current release; rolling replacements run entirely under `Active`. Treat it as equivalent to `Active` if you ever observe it. |
| `Invalid` | The spec references something the operator cannot accept. In the current release the only trigger is TLS Secret validation failure. `message` carries the exact reason. |

### Creating → Active

Bootstrap completes (and the state flips to `Active`) when every node reports a healthy cluster view, all 16384 hash slots are assigned, the shard count meets the target, and every slot-holding primary has at least `replicasPerShard` replicas. At that moment the operator also clears `targetSpec`.

### Any state → Invalid

When `spec.tls` is set, the operator validates the referenced TLS Secret on every reconcile, in any state. If validation fails (the Secret is missing, lacks one of `tls.crt`, `tls.key`, or `ca.crt`, the certificate is not valid PEM/X.509, or its SANs do not include both `{cluster}.{namespace}.svc.cluster.local` and the matching wildcard), the operator sets `state: Invalid` and writes the reason to `message`. While `Invalid`, the operator takes no topology actions; it keeps maintaining the cluster's Service, auth Secret, and ACL ConfigMap, and re-checks the Secret periodically.

:::note
An **expired** certificate does not make the cluster `Invalid`. Expiry is logged as a warning only: the cluster stays `Active` while client connections fail. See [TLS](../security/tls.md).
:::

### Invalid → Creating → Active (auto-recovery)

Recovery is automatic. Once validation passes again (for example, you fixed the Secret in place), the operator resets the state to `Creating` and clears `message`. A cluster that was previously formed passes through bootstrap as a no-op and returns to `Active` within a few reconcile ticks. No manual intervention on the `ValkeyCluster` resource is needed.

## targetSpec snapshot semantics

When a cluster enters `Creating`, the operator snapshots the spec into `status.targetSpec` and drives the bootstrap **topology** (the shard count and replicas per shard) from that snapshot, not from the live spec. Edits to `shards` or `replicasPerShard` made during the transition are deferred: they take effect only after the cluster reaches `Active`, at which point the snapshot is cleared and the live spec is reconciled normally. This prevents mid-formation topology changes from producing an inconsistent cluster.

Other spec fields are not part of the snapshot. References (`configRef`, and `imageRef` behind it) resolve fresh on every reconcile, and `placement`, `tls.secretRef`, and `acl` are read live, but each node's own spec is fixed at the moment that node is created, so a live edit shapes only nodes the bootstrap has not created yet. It does not repair a node already stuck under the old values, and it can leave a mid-bootstrap cluster with nodes built from two different configurations.

The practical consequence: **a spec mistake made at creation time generally cannot be corrected by editing the spec while the cluster is still `Creating`.** External fixes work (creating a missing `ValkeyConfig` or `ValkeyImage` unblocks bootstrap without a spec edit), but a wrong topology value, or an unsatisfiable `placement` already stamped onto stuck nodes, requires deleting and recreating the resource. See the [wedged bootstrap entry in Troubleshooting](../operations/troubleshooting.md).

## Printer columns

`kubectl get valkeyclusters` shows these columns:

| Column | Source | Meaning |
|---|---|---|
| `CONFIG` | `.spec.configRef` | The `ValkeyConfig` menu item the cluster uses. |
| `SHARDS` | `.spec.shards` | Desired number of shards (the spec value, not the currently formed count). |
| `REPLICAS` | `.spec.replicasPerShard` | Desired replicas per shard, not counting the primary. |
| `STATE` | `.status.state` | Current cluster state, as defined above. |

## Worked examples

A healthy three-shard cluster with one replica per shard:

```bash
kubectl get valkeyclusters -n my-app
```

```text
NAME         CONFIG     SHARDS   REPLICAS   STATE
my-cluster   standard   3        1          Active
```

`kubectl describe` shows the full spec and status, including the `targetSpec` snapshot during bootstrap:

```bash
kubectl describe valkeycluster my-cluster -n my-app
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
Events:   <none>
```

`status` carries no node list in the current release (the `nodes` field is schema-reserved; see the table above). List the cluster's members and their pod names with `kubectl get valkeynodes -n my-app`; pod names carry a random suffix rather than ordinal numbers (`-0`, `-1`) because the operator manages pods directly instead of using a StatefulSet; see [Pod management](../concepts/pod-management.md).

A cluster in `Invalid` after a TLS Secret validation failure (the message text is exact; [Troubleshooting](../operations/troubleshooting.md#cluster-shows-invalid) lists every variant):

```bash
kubectl get valkeycluster my-cluster -n my-app -o yaml
```

```yaml
status:
  state: Invalid
  message: TLS Secret "my-cluster-tls" missing required key "ca.crt"
```

For a node-level view during bootstrap, scaling, or replacements, list the operator-internal `ValkeyNode` resources; the `LIFECYCLE` column shows `Joining`, `Active`, or `Leaving` per node:

```bash
kubectl get valkeynodes -n my-app
```

```text
NAME               CLUSTER      IMAGE                 LIFECYCLE
my-cluster-1a4f2   my-cluster   valkey/valkey:9.0.0   Active
my-cluster-7c03d   my-cluster   valkey/valkey:9.0.0   Active
my-cluster-f31b9   my-cluster   valkey/valkey:9.0.0   Joining
```

`ValkeyNode` is read-only for users; see the [ValkeyNode API reference](api/valkeynode.md).
