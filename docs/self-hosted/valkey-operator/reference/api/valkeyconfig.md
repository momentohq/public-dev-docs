---
title: ValkeyConfig
description: Reference for the ValkeyConfig custom resource, the cluster-scoped configuration menu item with baseRef inheritance.
sidebar_position: 3
---

# ValkeyConfig

`ValkeyConfig` tells the Momento Valkey Operator how the nodes of a Valkey cluster are configured: which image they run, their resources, Valkey settings, and platform-level ACL bindings. Platform teams curate a menu of these cluster-scoped resources; product teams select one by name in `ValkeyCluster.spec.configRef`. See [Curating images and configs](../../platform-guide/curating-images-and-configs.md) for authoring guidance.

## Resource metadata

| | |
|---|---|
| API group/version | `valkey.gomomento.com/v1alpha1` |
| Kind | `ValkeyConfig` |
| Plural | `valkeyconfigs` |
| Scope | Cluster |

## Spec

All spec fields are optional, but a usable config must provide `imageRef` either directly or through its `baseRef` chain.

| Field | Type | Required | Default | Validation | Description |
|---|---|---|---|---|---|
| `imageRef` | string | No | — | none | Name of a [`ValkeyImage`](valkeyimage.md). If omitted, the base config referenced by `baseRef` (or a config further up the chain) must provide it. |
| `baseRef` | string | No | — | none | Name of another `ValkeyConfig` to inherit from. Fields set on this config override the base. See [Inheritance](#inheritance). |
| `resources` | object ([`ValkeyResources`](#valkeyresources)) | No | — | none | Resource requirements for each Valkey pod. |
| `valkey` | map of string to string | No | — | none | Valkey configuration key-value pairs, written into each node's configuration. Some cluster-critical settings are always injected by the operator and override values set here: see [Forced settings](../forced-settings.md). |
| `acl` | array of [`AclBinding`](#aclbinding) | No | — | Max 64 entries. Admission rule: no two entries may share a `username` ("duplicate username in ACL bindings"). | Platform-level ACL user bindings, applied to every cluster that uses this config. Cluster-level bindings are additive but cannot reuse usernames defined here. See [ACLs](../../security/acls.md). |

### Inheritance

`baseRef` builds configs by derivation: for example, a `large` config that inherits everything from `standard` and overrides only memory. Resolution follows these rules:

- The operator follows the `baseRef` chain from the selected config toward its root. The chain may be at most 10 configs deep; a longer chain (including any cycle) fails resolution, and clusters using the config do not progress.
- The child overrides the parent. `imageRef`, `resources.cpu`, and `resources.memory` are whole-field overrides: a value set on a derived config wins.
- The `valkey` map merges per key: keys set on the derived config win, and parent keys the child does not set survive.
- `acl` does **not** merge. The first config in the chain that sets `acl` supplies the complete binding list; setting `acl` on a derived config replaces the parent's bindings entirely. Omitting it inherits the parent's bindings.
- `imageRef` must be set somewhere in the chain, and the named `ValkeyImage` must exist.

Configs resolve at reconcile time, not at admission. Editing any config or image in a chain re-resolves every cluster that references it, which might trigger rolling replacements. See [Reconciliation](../../concepts/reconciliation.md) for which changes roll pods.

### ValkeyResources

Appears in: [`spec.resources`](#spec).

| Field | Type | Required | Default | Validation | Description |
|---|---|---|---|---|---|
| `cpu` | string | No | — | none | CPU request and limit for each Valkey pod, as a Kubernetes [quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), for example `"2"`. |
| `memory` | string | No | — | none | Memory request and limit for each Valkey pod, for example `"4Gi"`. |

Each value is applied as both the request and the limit of the Valkey container. Leave headroom between `memory` and the `maxmemory` Valkey setting. See [Sizing](../../operations/sizing.md).

### AclBinding

Appears in: [`spec.acl`](#spec) on this resource, and in `spec.acl` on [`ValkeyCluster`](valkeycluster.md#aclbinding).

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

`ValkeyConfig` has a status subresource, but it defines no fields today.

## Printer columns

`kubectl get valkeyconfigs` shows:

| Column | Source |
|---|---|
| `ImageRef` | `.spec.imageRef` |
| `BaseRef` | `.spec.baseRef` |

## References and referenced by

- References a [`ValkeyImage`](valkeyimage.md) via `spec.imageRef` and another `ValkeyConfig` via `spec.baseRef`.
- References [`ValkeyRole`](valkeyrole.md) resources via `spec.acl[].permissions[].roleRef`.
- Referenced by [`ValkeyCluster`](valkeycluster.md) via `spec.configRef`.

## Example

A base config and a derived variant:

```yaml
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyConfig
metadata:
  name: standard
spec:
  imageRef: valkey-9-0
  resources:
    cpu: "1"
    memory: "2Gi"
  valkey:
    maxmemory: "1500mb"
    maxmemory-policy: "allkeys-lru"
  acl:
    - username: app-user
      passwordHashes:
        - <sha256-hex-of-password>
      permissions:
        - roleRef: app-readwrite
          keys:
            - pattern: "myapp:*"
              access: readwrite
---
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyConfig
metadata:
  name: large
spec:
  baseRef: standard
  resources:
    cpu: "4"
    memory: "16Gi"
  valkey:
    maxmemory: "12gb"
```

`large` inherits `imageRef`, `maxmemory-policy`, and the `acl` bindings from `standard`, and overrides the resources and `maxmemory`. A variant that set only `resources.memory` would keep the base's `cpu`. Each resource field is overridden independently.
