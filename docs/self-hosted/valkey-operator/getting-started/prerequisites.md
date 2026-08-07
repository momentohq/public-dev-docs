---
title: Prerequisites
description: Version floors, access requirements, optional dependencies, and Pod Security Standard compatibility to check before installing the Momento Valkey Operator.
sidebar_position: 2
---

# Prerequisites

This page lists what your Kubernetes cluster and access level need to provide before you install the Momento Valkey Operator. It is a reference. For the install steps themselves, go to [Installation](installation.md).

## Version floors

| Requirement | Minimum |
|---|---|
| Kubernetes | 1.27+ |
| Valkey (in any `ValkeyImage` you register) | 9+ |
| Architecture | amd64 or arm64 |

[Compatibility](../support/compatibility.md) is the canonical source for version and architecture support, including why these floors apply and what is tested versus merely supported. Treat the table above as a summary, not the authority.

## Access required to install

Installing the operator creates cluster-scoped objects: the CRDs themselves, a ClusterRole, and a ClusterRoleBinding, in addition to a namespace, ServiceAccount, ConfigMap, and Deployment. You need `cluster-admin` (or an equivalent role with create/update on `customresourcedefinitions`, `clusterroles`, and `clusterrolebindings`) to run the install. Provisioning a `ValkeyCluster` afterward needs no cluster-scoped access; see [Multi-tenancy and RBAC](../platform-guide/multi-tenancy-and-rbac.md) for the narrower grant product teams need.

## Optional dependencies

| Dependency | Needed for | Required? |
|---|---|---|
| cert-manager | Issuing and rotating the TLS Secret a `ValkeyCluster` references via `spec.tls.secretRef` | No. The operator consumes a `kubernetes.io/tls` Secret in the shape it expects, however that Secret is produced. cert-manager is the recommended way to produce and rotate it; see [TLS](../security/tls.md). |

## What the operator does not need

- **PersistentVolumes or PersistentVolumeClaims.** Valkey clusters managed by the operator are in-memory; the operator provisions none. Do not reserve storage classes or PV capacity for this workload. See [Data durability](../concepts/data-durability.md) for the full storage model and loss semantics.
- **A service mesh.** The operator has no service-mesh integration and does not require one. If your platform runs one, it composes independently of anything the operator manages.
- **Admission webhooks.** All validation the operator relies on is expressed as CRD schema rules (CEL and OpenAPI), not a webhook. Nothing to install or keep available for the operator's own correctness.

## Pod Security Standards

Neither the operator's own pods nor the Valkey pods it creates set a `securityContext`. No field on `ValkeyCluster`, `ValkeyConfig`, or the operator installation adds one. The operator's own image is distroless with no `USER` directive and runs as root. Valkey pods run whichever image you register. Because the operator launches `valkey-server` directly rather than through the image's entrypoint script, any privilege drop that script would normally perform is bypassed.

As shipped, the operator and the clusters it manages are **incompatible with the `restricted` Pod Security Standard**. A namespace with `restricted` enforcement rejects both the operator's pods and any Valkey pods at admission. Install the operator, and provision Valkey clusters, into namespaces enforcing `privileged` or `baseline` at most. If pods are being rejected at creation, see [Troubleshooting](../operations/troubleshooting.md).
