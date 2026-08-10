---
title: For platform teams
description: What platform teams own when running the Momento Valkey Operator (installation, the config menu, tenancy, upgrades, and monitoring), with links to each guide.
sidebar_position: 1
---

# For platform teams

This section is for the team that installs and governs the Momento Valkey Operator. You run the operator itself, curate what product teams are allowed to provision, and own the operational surface (upgrades, maintenance, and monitoring) across every Valkey cluster in the fleet.

## Your job in this model

The operator splits ownership along the same line as its resource model: cluster-scoped resources are yours, namespaced `ValkeyCluster` resources belong to product teams (see [Resource model](../concepts/resource-model.md)). Concretely, you are responsible for:

- **Installing and upgrading the operator:** apply the release manifests, verify rollout, and keep the operator current.
- **Curating the menu:** publish the `ValkeyImage` allowlist and the `ValkeyConfig` catalog product teams choose from, so nothing runs that you have not approved.
- **Onboarding tenants:** grant each product team namespaced write access to `ValkeyCluster` and read-only access to the menu, using ordinary Kubernetes RBAC.
- **Owning fleet-wide upgrades:** Valkey engine upgrades happen by repointing configs at new images, which rolls every cluster that references them; you control the pace by how you stage that change.
- **Keeping the Kubernetes cluster healthy under the operator:** node drains, cluster-autoscaler behavior, and the absence of PodDisruptionBudgets all need operator-aware handling.
- **Monitoring the fleet:** the operator's own health, per-cluster state, and (if you need it) Valkey-level metrics via your own exporter.

## Guides in this section

- [Curating images and configs](curating-images-and-configs.md) — build the image allowlist and the config menu, including `baseRef` inheritance rules, resource sizing, and menu design patterns.
- [Multi-tenancy and RBAC](multi-tenancy-and-rbac.md) — copy-pasteable manifests to onboard a product team: a namespace, cluster CRUD, and read-only menu access.
- [Managing Valkey upgrades](valkey-upgrades.md) — how registering a new image and repointing a config rolls the fleet, what a roll looks like per shard, and the staged-rollout pattern for controlling blast radius.
- [Upgrading the operator](operator-upgrades.md) — apply new release artifacts, what happens to running clusters while the operator restarts, and how to roll back.
- [Kubernetes maintenance](kubernetes-maintenance.md) — how node drains and the cluster-autoscaler interact with the operator, and what stands in since there are no PodDisruptionBudgets.
- [Monitoring](monitoring.md) — operator logs, cluster state, label taxonomy for dashboards, what to alert on, and how to get Valkey-level metrics today.
- [Logging](logging.md) — the log contract: JSON structure and fields, `RUST_LOG` control, what gets logged, Valkey node logs, and what your platform must provide.

The operator's one fleet-wide process setting (the default `zoneSpread` mode applied to clusters that don't set their own) lives in the `valkey-operator-config` ConfigMap; see [Operator configuration](../reference/operator-configuration.md).

For the underlying mechanics these guides build on, see [Reconciliation](../concepts/reconciliation.md) and [Architecture](../concepts/architecture.md). For the security posture of the operator itself, start at [Security model](../security/index.md). For how the teams you onboard connect their applications, point them at [Connecting to your cluster](../team-guide/connecting.md).
