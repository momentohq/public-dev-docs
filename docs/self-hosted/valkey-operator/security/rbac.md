---
title: RBAC
description: The operator's ClusterRole grants, what tenants receive, how to restrict further, and the secret-access implications a security review needs.
sidebar_position: 4
---

# RBAC

This page is reference material on Kubernetes RBAC as it applies to the Momento Valkey Operator: exactly what the operator's own ClusterRole grants, what a tenant (product team) receives, how to restrict access further, and what that access implies for secret exposure. It is written for security reviewers and platform teams who need the precise grant surface, not just the summary in [Security model](index.md).

## What the operator's ClusterRole grants

The operator runs under a single ServiceAccount bound to one ClusterRole via a ClusterRoleBinding, cluster-wide:

| API group | Resources | Verbs |
|---|---|---|
| `valkey.gomomento.com` | all resources (`valkeyimages`, `valkeyconfigs`, `valkeyroles`, `valkeyclusters`, `valkeynodes`) | all |
| `valkey.gomomento.com` | all `*/status` subresources | all |
| `` (core) | `pods` | all |
| `` (core) | `services` | all |
| `` (core) | `configmaps` | all |
| `` (core) | `secrets` | all |

These grants are not namespace-scoped. No per-namespace or per-cluster restriction exists anywhere in the shipped RBAC objects.

**Why it is this broad**: the operator is a single Deployment that reconciles every `ValkeyCluster` in every namespace. For each one it creates and owns a headless Service, an auth Secret, ACL and per-node ConfigMaps, and bare Pods. Kubernetes RBAC has no mechanism to scope a `ClusterRole` bound via `ClusterRoleBinding` to only the resources a controller happens to own: granting "manage Services, ConfigMaps, Secrets, and Pods for any Valkey cluster, in any namespace" is expressed as "manage Services, ConfigMaps, Secrets, and Pods, full stop."

**What a reviewer should conclude**: a compromise of the operator's ServiceAccount (its token, or the Deployment's ability to run arbitrary code) is a cluster-wide compromise of every Pod, Service, ConfigMap, and Secret in the Kubernetes cluster, not only Valkey-related ones. Treat the `valkey-operator` namespace, the operator's ServiceAccount token, and who can exec into or read logs from the operator Pod as high-value targets, and scope access to them accordingly (separate approval path, restricted `exec`/`get secrets` RBAC on the `valkey-operator` namespace, audit logging on the ServiceAccount's token use).

## What tenants get

A product team onboarded to use the operator receives two separate grants, deliberately split by scope:

| Grant | Binding type | Resources | Verbs | Scope |
|---|---|---|---|---|
| Cluster management | `RoleBinding`, in the team's namespace | `valkeyclusters` | get, list, watch, create, update, patch, delete | Namespaced: the team's own namespace only |
| Node visibility | Same `RoleBinding` | `valkeynodes` | get, list, watch | Namespaced: read-only |
| Menu visibility | `ClusterRoleBinding` | `valkeyimages`, `valkeyconfigs`, `valkeyroles` | get, list, watch | Cluster-wide, read-only |

The cluster-management grant is a `RoleBinding` (not a `ClusterRoleBinding`) specifically so the team's write access to `valkeyclusters` cannot reach any namespace but its own. The menu grant must be a `ClusterRoleBinding` because `ValkeyImage`, `ValkeyConfig`, and `ValkeyRole` are cluster-scoped resources (a namespaced `RoleBinding` cannot grant access to them at all), but the verbs are read-only, so a team can see the platform's menu without being able to change it.

Product teams receive **no** direct grant on `pods`, `services`, `configmaps`, or `secrets`. Only the operator's own ServiceAccount has that. This is deliberate: see [secret-access implications](#secret-access-implications) below for why.

## Restricting further

The grants above are a starting point, not a ceiling:

- **Narrow the menu grant's audience.** The menu `ClusterRoleBinding` is inherently cluster-wide because the resources it covers are cluster-scoped, but you control who it is bound to. Bind it only to the identity groups that need to discover available images and configs, rather than to all authenticated users.
- **Keep cluster and node access namespaced.** The `RoleBinding` pattern above already prevents a team from seeing or touching `valkeyclusters`/`valkeynodes` outside its own namespace. Do not substitute a `ClusterRoleBinding` for convenience: that reintroduces cross-namespace visibility the namespaced pattern is designed to avoid.
- **Do not extend tenant RBAC to core resources.** A team that can `get`/`list` `configmaps` or `secrets` in its own namespace gains implicit access to cluster credentials. See below. If a team needs to inspect a running cluster, prefer read-only visibility through the `ValkeyCluster`/`ValkeyNode` status fields (see [Cluster status](../reference/cluster-status.md)) over granting core-resource access.

See [Multi-tenancy and RBAC](../platform-guide/multi-tenancy-and-rbac.md) for the complete manifests used to onboard a team with this pattern.

## Secret-access implications

The operator's core-resource grants mean it routinely reads and writes secret material on tenants' behalf:

- It **reads** the customer-provided TLS Secret referenced by `spec.tls.secretRef` on every reconcile, to validate it and mount it into pods.
- It **creates** the `{cluster}-operator-auth` Secret containing the generated operator and replication passwords, and reads it continuously to authenticate its own connections and render ACL password hashes.

:::info
The replication password is also rendered in **plaintext** as `primaryauth` in every node's `{node}-config` ConfigMap: this is how Valkey itself consumes replication credentials; there is no hashed alternative. As a direct consequence, **`get`/`list` access to ConfigMaps in a namespace that hosts Valkey clusters is credential-equivalent to Secret access** in that namespace. When you scope RBAC (for tenants, for CI systems, for any principal), treat ConfigMap read access in Valkey namespaces with the same care you would give Secret read access. This is the same disclosure made in [Security model](index.md#secret-material-inventory) and in [ACLs](acls.md#system-users); it belongs wherever RBAC decisions get made.
:::
