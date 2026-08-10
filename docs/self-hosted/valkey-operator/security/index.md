---
title: Security model
description: Trust boundaries, secret material, and pod security posture of the Momento Valkey Operator, with a hardening checklist.
sidebar_position: 1
---

# Security model

This page describes the security model of the Momento Valkey Operator: what the operator can touch, what secret material it creates and where that material lands, and the pod security posture it ships with. It is written for platform teams and security reviewers evaluating the operator for production use. The four companion pages cover practice: [TLS](tls.md), [ACLs](acls.md), [RBAC](rbac.md), and [Networking and ports](networking.md).

## Trust boundaries

The operator runs as a single Deployment (one replica) in the `valkey-operator` namespace under its own ServiceAccount. That ServiceAccount is bound to a ClusterRole granting:

| Scope | Resources | Verbs |
|---|---|---|
| `valkey.gomomento.com` API group | all resources and their `status` subresources | all |
| Core API group, **cluster-wide** | `pods`, `services`, `configmaps`, `secrets` | all |

The core grants are cluster-wide because the operator creates and owns pods, a headless Service, ConfigMaps, and Secrets for every Valkey cluster in any namespace. The consequence a reviewer should draw: **a compromise of the operator's ServiceAccount is a cluster-wide compromise of pods, services, ConfigMaps, and Secrets**, not only of Valkey-related resources, because Kubernetes RBAC cannot scope core-resource verbs to operator-owned objects. Restrict access to the `valkey-operator` namespace (and to the operator's ServiceAccount token) accordingly. The full rule listing and tenant-facing grants are in [RBAC](rbac.md).

Product teams, by contrast, need only namespaced write access to `valkeyclusters` (plus read access to `valkeynodes` and the cluster-scoped menu resources). They never need direct access to pods, Services, ConfigMaps, or Secrets; granting it undermines the model, as the secret-material inventory below explains.

### Per-cluster system users

For every Valkey cluster the operator provisions two reserved Valkey users, always appended last in the rendered ACL file so user-defined bindings cannot override them:

| User | Commands granted | Purpose |
|---|---|---|
| `_momento_operator` | `+cluster +acl\|load +ping +info +config\|set` | The operator's own connection for topology management, ACL loading, health checks, and TLS certificate reload |
| `_momento_repl` | `+psync +replconf +ping +cluster\|syncslots` | Replication authentication between primaries and replicas |

Both command sets are tightly scoped to what each function requires; neither user can read or write keys. The `_momento_` username prefix is reserved and rejected at admission for user-defined bindings. See [ACLs](acls.md) for details.

## Secret-material inventory

Three pieces of secret material exist per Valkey cluster. Know where each one lives before you design namespace RBAC.

| # | Material | Location | Contents | Lifecycle and exposure |
|---|---|---|---|---|
| 1 | Operator auth Secret | Secret `{cluster}-operator-auth` in the cluster's namespace | Two generated passwords (`operator-password`, `repl-password`), each 128 hex characters | Generated once at cluster creation and reused as-is thereafter. **No rotation mechanism exists.** Never delete this Secret while the cluster exists: the operator and replication authenticate with it, and it is not safely regenerable on a running cluster. It is owner-referenced to the `ValkeyCluster` and deleted with it. |
| 2 | TLS Secret | Customer-provided `kubernetes.io/tls` Secret named by `spec.tls.secretRef` | `tls.crt`, `tls.key`, `ca.crt` | You create and rotate it; the operator reads it, validates it every reconcile, and mounts it into every pod. See [TLS](tls.md). |
| 3 | Replication credential in ConfigMaps | Every node's `{node}-config` ConfigMap | The `repl-password` value rendered in **plaintext** as `primaryauth` in `valkey.conf` | Present for the life of each node. This is a deliberate consequence of how Valkey consumes `primaryauth`; there is no hashed alternative. |

:::info
Because of item 3, **read access to ConfigMaps in a cluster's namespace is credential-equivalent to holding the cluster's replication password**. Treat `get`/`list` on ConfigMaps in namespaces that host Valkey clusters with the same care as Secret read access when you design RBAC. The [RBAC](rbac.md) page repeats this disclosure with the grant tables.
:::

For completeness: the `{cluster}-acl` ConfigMap contains the rendered ACL file. It holds SHA-256 password hashes only, never plaintext user passwords, but hashes of low-entropy passwords are still offline-crackable, so it is not public material either.

## Pod security posture

The operator sets **no `securityContext`** on Valkey pods or on its own Deployment, and there is no field to add one in `ValkeyCluster` or `ValkeyConfig`. The operator's own image is distroless with no `USER` directive and runs as root. For Valkey pods the image is whatever you register in a `ValkeyImage`, so its user posture is yours to control. However, the operator starts `valkey-server` directly, bypassing the image's entrypoint script and any privilege drop it would normally perform. Without an explicit `runAsNonRoot` declaration, the pods fail `restricted` admission regardless of the image's actual user.

As shipped, the operator and the clusters it manages are **incompatible with the `restricted` Pod Security Standard**: namespaces enforcing `restricted` reject the pods (no `runAsNonRoot`, no seccomp profile, default capabilities). Plan for namespaces at `privileged` or `baseline` enforcement. See [Prerequisites](../getting-started/prerequisites.md) for the admission behavior you observe.

## Default-user semantics

With zero ACL bindings anywhere, the `default` user is fully permissive: a quickstart cluster is **open to any client that can reach it on the network**. The moment any binding exists, the `default` user is disabled unless explicitly bound, cutting off all unauthenticated clients. No intermediate state exists; the full semantics and rendered rules are in [ACLs](acls.md).

## Hardening checklist

Work through these before a production rollout:

1. **Enable TLS at creation**: TLS cannot be added to an existing cluster. Client traffic, replication, and the cluster bus are all encrypted, and the plaintext port is closed. [TLS](tls.md).
2. **Define ACL users and roles**: remove the permissive default user by binding at least one user, and scope key patterns per application. [ACLs](acls.md).
3. **Scope Kubernetes RBAC**: grant product teams only the namespaced cluster grants; treat ConfigMap and Secret read access in Valkey namespaces as credential access; restrict the operator namespace. [RBAC](rbac.md).
4. **Apply NetworkPolicies**: the operator creates none; network segmentation is your responsibility. [Networking and ports](networking.md) states the full connection matrix and gives a worked policy; [Labels and annotations](../reference/labels-annotations.md) states the guaranteed label set.
5. **Monitor certificate expiry**: the operator does not block or alert on an expiring certificate; an expired certificate leaves the cluster `Active` while clients fail to connect. [TLS](tls.md) and [Monitoring](../platform-guide/monitoring.md).
