---
title: ValkeyCluster
description: Reference for the ValkeyCluster custom resource, the product team's interface for provisioning a Valkey cluster.
sidebar_position: 5
---

# ValkeyCluster

`ValkeyCluster` is the product team's interface for provisioning a Valkey cluster with the Momento Valkey Operator. It selects a [`ValkeyConfig`](valkeyconfig.md) from the platform team's menu and declares topology, placement, TLS, ACL bindings, and pod annotations. For the provisioning workflow, see [Provisioning](../../team-guide/provisioning.md).

## Resource metadata

| | |
|---|---|
| API group/version | `valkey.gomomento.com/v1alpha1` |
| Kind | `ValkeyCluster` |
| Plural | `valkeyclusters` |
| Scope | Namespaced |

## Spec

An admission rule on the spec as a whole enforces TLS immutability on updates: the `tls` field must be present on both the old and new spec, or absent from both. In practice, you cannot enable TLS on a cluster created without it, and you cannot disable TLS on a cluster created with it. Only the `secretRef` inside `tls` may change, for certificate rotation. See [TLS](../../security/tls.md).

| Field | Type | Required | Default | Validation | Description |
|---|---|---|---|---|---|
| `configRef` | string | Yes | — | none | Name of a `ValkeyConfig` on the platform menu. The named config (and the `ValkeyImage` it resolves to) must exist for the cluster to progress. |
| `shards` | integer | Yes | — | Minimum 1. | Number of shards (hash-slot ranges). Changing this triggers slot rebalancing: see [Scaling](../../team-guide/scaling.md). |
| `replicasPerShard` | integer | Yes | — | Minimum 0. | Number of replicas per shard, **not counting the primary**. `replicasPerShard: 1` yields two nodes per shard. |
| `acl` | array of [`AclBinding`](#aclbinding) | No | — | Max 64 entries. Admission rule: no two entries may share a `username` ("duplicate username in ACL bindings"). | Per-cluster ACL user bindings. Additive to the config-level bindings, but cannot reuse a username defined at the config level. See [ACLs](../../security/acls.md). |
| `placement` | object ([`Placement`](#placement)) | No | — | none | Zone and node-pool placement constraints for the cluster's pods. |
| `tls` | object ([`Tls`](#tls)) | No | — | Presence is immutable (admission rule above). | TLS configuration. When set, the cluster runs TLS-only: the plaintext port is disabled (`port 0`) and TLS is served on 6379. |
| `podAnnotations` | map of string to string | No | — | Admission rule: no key may start with `valkey.gomomento.com/` (that prefix is reserved by the operator). | Annotations applied verbatim to every managed pod. See [podAnnotations behavior](#podannotations-behavior). |

### podAnnotations behavior

Use `podAnnotations` for tooling that reads pod annotations, such as service-mesh sidecar injection or your own scrape configuration on customer-deployed components. The operator applies the map verbatim to every pod it manages.

Changes propagate as follows:

- **Adding a key or changing a value** is patched onto running pods in place. No pods are replaced.
- **Removing a key** does not remove the annotation from running pods. The removal takes effect on each pod as it is next replaced for other reasons.

:::note
`kubectl explain valkeycluster.spec.podAnnotations` currently shows outdated description text claiming that existing pods keep their original annotations. The behavior above (in-place patching of additions and edits) is correct.
:::

### Tls

Appears in: [`spec.tls`](#spec).

| Field | Type | Required | Default | Validation | Description |
|---|---|---|---|---|---|
| `secretRef` | string | Yes | — | none | Name of a [`kubernetes.io/tls` Secret](https://kubernetes.io/docs/concepts/configuration/secret/#tls-secrets) in the same namespace as the cluster. Mutable: point it at a new Secret (or update the Secret in place) to rotate certificates. |

The referenced Secret must contain `tls.crt`, `tls.key`, and `ca.crt`, and the certificate's SANs must include both `{cluster}.{namespace}.svc.cluster.local` and `*.{cluster}.{namespace}.svc.cluster.local`. A Secret that fails validation puts the cluster into the `Invalid` state with detail in `status.message`. Requirements, rotation, and a cert-manager walkthrough: [TLS](../../security/tls.md).

### Placement

Appears in: [`spec.placement`](#spec).

| Field | Type | Required | Default | Validation | Description |
|---|---|---|---|---|---|
| `zones` | array of string | No | — | none | Availability zones requiring per-shard coverage. When set, a hard [node affinity](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity) restricts pods to these zones, and a per-shard [topology spread constraint](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/) distributes each shard's nodes across them. Full spread requires each shard to have at least as many nodes as there are zones. |
| `zoneSpread` | string (enum) | No | Operator-wide default (`bestEffort` as shipped) | One of `bestEffort`, `required`. | Enforcement mode for the per-shard zone spread constraint. `bestEffort` schedules pods even when spreading is not possible; `required` leaves pods Pending until a valid zone placement exists. When unset, the cluster inherits the operator's configured default: see [Operator configuration](../operator-configuration.md). |
| `nodeSelector` | map of string to string | No | — | none | Node labels passed through verbatim to each pod's [`nodeSelector`](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector). Use to pin the cluster to a node pool. Composes with `zones`: Kubernetes requires a pod to satisfy both. |

Changing `zones` or `nodeSelector` on a running cluster triggers a rolling replacement onto the new placement; changing `zoneSpread` affects only pods created afterward. See [Zone-aware placement](../../operations/zone-aware-placement.md).

### AclBinding

Appears in: [`spec.acl`](#spec) on this resource, and in `spec.acl` on [`ValkeyConfig`](valkeyconfig.md#aclbinding).

A user-to-permissions binding for Valkey ACLs.

| Field | Type | Required | Default | Validation | Description |
|---|---|---|---|---|---|
| `username` | string | Yes | — | Max length 128. Admission rules: must be non-empty and contain only letters, digits, hyphens, and underscores (`^[a-zA-Z0-9_-]+$`); must not start with `_momento_`, which is reserved for the operator's system users. | The Valkey username the binding creates. |
| `passwordHashes` | array of string | Yes | — | 1–8 entries. Admission rule: each entry must be exactly 64 lowercase hexadecimal characters (a SHA-256 digest). | SHA-256 hashes of the user's passwords. Do not include Valkey's `#` prefix: the operator adds it. Multiple hashes enable rotation: add the new hash, update clients, then remove the old hash. |
| `permissions` | array of [`Permission`](#permission) | Yes | — | 1–16 entries. Admission rule: at least one entry is required. | The first entry becomes the user's root permissions; each additional entry becomes an ACL selector scoped to its own key and channel patterns. |

### Permission

Appears in: [`AclBinding.permissions`](#aclbinding).

| Field | Type | Required | Default | Validation | Description |
|---|---|---|---|---|---|
| `roleRef` | string | Yes | — | Max length 253. | Name of a [`ValkeyRole`](valkeyrole.md) supplying command and category permissions. |
| `keys` | array of [`KeyPattern`](#keypattern) | Yes | — | Max 16 entries. | Key access patterns. Required: no default-open behavior exists. |
| `channels` | array of string | No | — | Max 16 entries, each max length 128. Admission rule: patterns must not contain control characters, spaces, or quotes. | Pub/Sub channel patterns. Do not include the `&` prefix: the operator adds it. Omit for no channel access. |

### KeyPattern

Appears in: [`Permission.keys`](#permission).

| Field | Type | Required | Default | Validation | Description |
|---|---|---|---|---|---|
| `pattern` | string | Yes | — | Max length 256. Admission rule: must not contain control characters, spaces, or quotes. | Key glob pattern, for example `myapp:*`. Do not include the `~` prefix: the operator adds the prefix that matches the access mode. |
| `access` | string (enum) | No | `readwrite` | One of `read`, `write`, `readwrite`. | Access mode for keys matching the pattern: `read` grants read-only access, `write` grants write-only access, `readwrite` grants both. |

## Status

`ValkeyCluster` has a status subresource. For state semantics and transitions in depth, see [Cluster status](../cluster-status.md).

| Field | Type | Description |
|---|---|---|
| `state` | string (enum) | High-level lifecycle state. One of `Creating` (default), `Active`, `Updating`, `Invalid`: see below. |
| `targetSpec` | object (same shape as [`spec`](#spec)) | Snapshot of the spec the operator is working toward, taken when a transition starts and cleared when the cluster reaches `Active`. Bootstrap drives its **topology** (`shards`, `replicasPerShard`) from this snapshot rather than the live spec, so topology edits made during a transition are deferred until it completes; other fields are read live but only shape nodes not yet created. See [Cluster status](../cluster-status.md#targetspec-snapshot-semantics). |
| `nodes` | array of string | Schema-reserved; not populated in the current release. Use `kubectl get valkeynodes` to list members. See [Cluster status](../cluster-status.md). |
| `message` | string | Human-readable detail for the current state, populated when `state` is `Invalid`. |

States:

| Value | Meaning |
|---|---|
| `Creating` | The operator is bootstrapping the Valkey cluster toward `targetSpec`. |
| `Active` | The cluster matches its spec and is serving. |
| `Updating` | Reserved. This value is defined in the schema but is not currently reported; running clusters show `Active` while changes roll out. |
| `Invalid` | The spec references something invalid (for example, a TLS Secret that fails validation). `message` carries the detail. Reconciliation resumes automatically once the problem is corrected. |

The status does not include a Kubernetes `conditions` array; `state` and `message` carry the health signal.

## Printer columns

`kubectl get valkeyclusters` shows:

| Column | Source |
|---|---|
| `Config` | `.spec.configRef` |
| `Shards` | `.spec.shards` |
| `Replicas` | `.spec.replicasPerShard` |
| `State` | `.status.state` |

## References and referenced by

- References a [`ValkeyConfig`](valkeyconfig.md) via `spec.configRef`, [`ValkeyRole`](valkeyrole.md) resources via `spec.acl[].permissions[].roleRef`, and a TLS Secret via `spec.tls.secretRef`.
- The operator creates one [`ValkeyNode`](valkeynode.md) per cluster member, owned by the `ValkeyCluster` and linked back through `ValkeyNode.spec.clusterName`. See [Architecture](../../concepts/architecture.md) for the full ownership chain.

## Example

A three-shard TLS-enabled cluster with one replica per shard, a cluster-level ACL user, and zone-aware placement:

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
  acl:
    - username: team-batch
      passwordHashes:
        - <sha256-hex-of-password>
      permissions:
        - roleRef: app-readwrite
          keys:
            - pattern: "batch:*"
              access: readwrite
        - roleRef: app-readwrite
          keys:
            - pattern: "metrics:*"
              access: read
  placement:
    zones:
      - us-east-1a
      - us-east-1b
    zoneSpread: required
  tls:
    secretRef: my-cluster-tls
  podAnnotations:
    example.com/inject-sidecar: "false"
```

The first `permissions` entry gives `team-batch` root permissions on `batch:*`; the second becomes a selector granting read-only access to `metrics:*`.
