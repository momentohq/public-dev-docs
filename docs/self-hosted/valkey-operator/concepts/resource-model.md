---
title: Resource model
description: The five custom resources of the Momento Valkey Operator, why the model splits a cluster-scoped menu from namespaced clusters, and how references resolve between them.
sidebar_position: 2
---

# Resource model

This page explains the five custom resources the Momento Valkey Operator installs, why the model is split the way it is, and how the split turns ordinary Kubernetes RBAC into a governance mechanism. It is for both personas: platform teams own most of these resources; product teams interact with exactly one.

## Five resources, one API group

All five resources live in the API group `valkey.gomomento.com/v1alpha1`. Four are user-facing; one is operator-internal.

| Kind | Scope | Purpose |
|---|---|---|
| `ValkeyImage` | Cluster | Allowlist entry for a permitted Valkey container image |
| `ValkeyConfig` | Cluster | A curated configuration "menu item" (image, resources, Valkey settings, platform ACLs), with inheritance via `baseRef` |
| `ValkeyRole` | Cluster | Reusable ACL permission template (command and category rules) |
| `ValkeyCluster` | Namespaced | A product team's request for a Valkey cluster: config choice plus topology |
| `ValkeyNode` | Namespaced | Operator-internal record of a single Valkey cluster member; read-only for users |

Full field-by-field schemas live in the API reference: [`ValkeyImage`](../reference/api/valkeyimage.md), [`ValkeyConfig`](../reference/api/valkeyconfig.md), [`ValkeyRole`](../reference/api/valkeyrole.md), [`ValkeyCluster`](../reference/api/valkeycluster.md), [`ValkeyNode`](../reference/api/valkeynode.md).

## Why the model is split this way

A single "cluster" resource with an image field would work mechanically, but it would leave the platform team with no control point: any team could run any image with any configuration. The operator's model separates *what is allowed* (cluster-scoped, platform-owned) from *what is requested* (namespaced, team-owned).

### ValkeyImage, the allowlist

A `ValkeyImage` names a container image (`repository` + `tag`) and the Valkey version it provides. It is not a convenience alias; it is an allowlist. Every Valkey cluster's configuration must ultimately resolve to a `ValkeyImage` by name, and the operator resolves that reference on every reconcile. If no `ValkeyImage` with that name exists, resolution fails and the Valkey cluster cannot run. Removing an image from the allowlist therefore blocks new use of it; adding one is the only way to permit it.

Because the reference is by name and resolved live, upgrades are also governed here: repointing a config at a new `ValkeyImage` rolls every Valkey cluster that references it. See [Managing Valkey upgrades](../platform-guide/valkey-upgrades.md).

### ValkeyConfig, the curated menu

A `ValkeyConfig` bundles everything about *how* a Valkey node runs: which allowlisted image (`imageRef`), CPU and memory, Valkey settings, and platform-level ACL bindings. Platform teams publish a small menu of these (for example `standard` and `large`) and product teams pick from it by name. Product teams never set an image, resource size, or engine setting directly; they can only choose a menu item.

Configs compose through `baseRef`: a config can inherit from another config and override selectively. Fields set on the child win; the `valkey` settings map merges per key (a child key overrides that key, unrelated base keys survive); ACL bindings are the exception: a config that sets `acl` replaces its base's bindings entirely rather than merging. Chains resolve up to 10 levels deep. This lets a platform team maintain one base config and publish size variants that differ only in resources:

```yaml
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyImage
metadata:
  name: valkey-9-0
spec:
  repository: valkey/valkey
  tag: 9.0.0
  version: 9.0.0
---
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyConfig
metadata:
  name: standard
spec:
  imageRef: valkey-9-0
  resources:
    cpu: "1"
    memory: 2Gi
  valkey:
    maxmemory: "1500mb"
    maxmemory-policy: allkeys-lru
---
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyConfig
metadata:
  name: large
spec:
  baseRef: standard        # inherits image and settings from `standard`
  resources:
    cpu: "4"
    memory: 16Gi
  valkey:
    maxmemory: "12gb"      # overrides this one key; other keys inherited
```

The operator force-injects a small set of cluster-critical settings (cluster mode, ports, file paths, replication identity) into every node regardless of what a config specifies. See [Forced settings](../reference/forced-settings.md). Authoring guidance, including the merge rules and memory headroom, is in [Curating images and configs](../platform-guide/curating-images-and-configs.md).

### ValkeyRole, reusable permission templates

A `ValkeyRole` captures a reusable set of Valkey ACL command and category permissions, for example, a `cache-readwrite` role or a `metrics-readonly` role. Roles deliberately contain *only* command permissions. Everything identity- and data-scoped (usernames, password hashes, key patterns, channel patterns) is specified at the binding site: in a `ValkeyConfig` (platform-level bindings applied to every cluster using that config) or in a `ValkeyCluster` (per-cluster bindings). One role can therefore serve many teams, each binding it to their own users and key spaces. The full model is described in [ACLs](../security/acls.md).

### ValkeyCluster, the product team's single touchpoint

A `ValkeyCluster` is the one resource a product team creates. It names a config from the menu and states topology and per-cluster choices:

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

Everything else (pods, ConfigMaps, Secrets, the Service, slot assignment, failover, rolling replacement) is derived from this spec by the operator. Product teams observe progress through the resource's status (`state`, `message`, node list); see [Cluster status](../reference/cluster-status.md) and [Provisioning a cluster](../team-guide/provisioning.md). A namespace can hold any number of `ValkeyCluster` resources.

### ValkeyNode, operator-internal

For each Valkey cluster member, the operator creates a `ValkeyNode` resource recording that node's fully resolved state: the exact image, resources, rendered settings, and placement. Its spec is immutable by design: when anything about a node needs to change, the operator creates a replacement node and retires the old one rather than mutating it in place. This is the mechanism behind rolling replacement (see [Reconciliation](reconciliation.md) and [Pod management](pod-management.md)).

You can see `ValkeyNode` resources with `kubectl get valkeynodes`, and reading them is useful for observing lifecycle transitions (`Joining`, `Active`, `Leaving`). Do not create or edit them; they exist for the operator, not for users.

## Scoping as the governance mechanism

The split between cluster-scoped and namespaced resources is not incidental; it is the entire governance model.

- `ValkeyImage`, `ValkeyConfig`, and `ValkeyRole` are **cluster-scoped**. Only the platform team holds write access to them; product teams get read-only access (a ClusterRoleBinding, since namespaced RoleBindings cannot grant access to cluster-scoped resources).
- `ValkeyCluster` is **namespaced**. Product teams get full CRUD on it within their own namespaces via an ordinary RoleBinding, and nothing outside them.

The result: a product team can provision as many Valkey clusters as they want, but only from images, configurations, and roles the platform team has published. No admission webhooks and no external policy engine are involved: enforcement is pure Kubernetes RBAC on resource scope, plus validation rules compiled into the CRD schemas themselves. A team without write access to the menu cannot put an unapproved image or setting into service, because there is no field on `ValkeyCluster` where one could go.

Complete onboarding manifests for this split are in [Multi-tenancy and RBAC](../platform-guide/multi-tenancy-and-rbac.md); what the operator's own service account can do is documented in [Operator RBAC](../security/rbac.md).

## How references resolve

References are plain names, resolved live by the operator on every reconcile: there is no admission-time existence check. A dangling reference (for example, a `configRef` naming a config that does not exist, or a config chain that never reaches a valid `imageRef`) blocks reconciliation of the affected Valkey cluster until the referenced resource appears:

```text
ValkeyCluster my-cluster (namespace: my-app)
    │
    │ spec.configRef
    ▼
ValkeyConfig large ── spec.baseRef ──▶ ValkeyConfig standard
    │                                       │
    │        spec.imageRef (first one found in the chain)
    └───────────────────┬───────────────────┘
                        ▼
              ValkeyImage valkey-9-0        ◀── allowlist: if this
                                                resource does not exist,
                                                the cluster cannot run

ACL bindings (ValkeyConfig.spec.acl and ValkeyCluster.spec.acl)
    │
    │ permissions[].roleRef
    ▼
ValkeyRole cache-readwrite                  ◀── command permissions;
                                                users, passwords, and key
                                                patterns stay at the binding
```

Because resolution is live, fixing a broken reference requires no change to the `ValkeyCluster` itself: creating the missing `ValkeyImage` or `ValkeyConfig` unblocks every cluster waiting on it on its next reconcile.

## Who touches what

| Resource | Platform team | Product team | The operator |
|---|---|---|---|
| `ValkeyImage` | create, update, delete | read (browse the allowlist) | reads to resolve images |
| `ValkeyConfig` | create, update, delete | read (browse the menu) | reads to resolve cluster configuration |
| `ValkeyRole` | create, update, delete | read | reads to render ACL files |
| `ValkeyCluster` | typically none (governs via the menu) | create, update, delete in own namespace | reads spec; writes status |
| `ValkeyNode` | read (troubleshooting) | read (observe lifecycle) | creates, updates lifecycle, deletes |

:::info
`ValkeyNode` is read-only for everyone except the operator. Manually editing or deleting one interferes with reconciliation in ways the operator does not expect.
:::

## Where to go next

- [Architecture](architecture.md) — the control loops that act on these resources and the Kubernetes objects they create.
- [Curating images and configs](../platform-guide/curating-images-and-configs.md) — building the menu (platform team).
- [Provisioning a cluster](../team-guide/provisioning.md) — consuming the menu (product team).
