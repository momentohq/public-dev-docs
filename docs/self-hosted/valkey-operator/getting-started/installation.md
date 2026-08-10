---
title: Installation
description: Install the Momento Valkey Operator from the v0.6.0 release artifacts, understand what it creates, and verify the rollout.
sidebar_position: 3
---

# Installation

This page installs the Momento Valkey Operator from the v0.6.0 GitHub release artifacts and verifies the rollout. It assumes the `cluster-admin` access described in [Prerequisites](prerequisites.md).

## 1. Apply the CRDs

```bash
kubectl apply -f https://github.com/momentohq/valkey-operator/releases/download/v0.6.0/crds.json
```

This registers all five custom resource definitions: `ValkeyImage`, `ValkeyConfig`, `ValkeyRole`, `ValkeyCluster`, and `ValkeyNode`.

## 2. Deploy the operator

```bash
kubectl apply -f https://github.com/momentohq/valkey-operator/releases/download/v0.6.0/operator.yaml
```

The operator image is pulled from Docker Hub at `gomomento/valkey-operator`.

## What this installs

`operator.yaml` creates:

| Object | Name | Notes |
|---|---|---|
| Namespace | `valkey-operator` | Holds every object below. |
| ServiceAccount | `valkey-operator` | Identity the operator Deployment runs as. |
| ClusterRole + ClusterRoleBinding | `valkey-operator` | Grants the operator the permissions it needs across all namespaces. See [RBAC](../security/rbac.md). |
| ConfigMap | `valkey-operator-config` | Optional process settings, only `defaultZoneSpread`. See [Operator configuration](../reference/operator-configuration.md). |
| Deployment | `valkey-operator` | Runs the operator container. |

The Deployment runs a **single replica with no leader election**; one replica is the entire concurrency control, by design. If that pod restarts or is briefly unavailable during an upgrade, reconciliation pauses, but no running Valkey cluster is affected. Valkey clusters serve traffic independently of the operator process. See [Architecture](../concepts/architecture.md) for why the stateless, single-replica design holds up in practice.

The operator container is a distroless image (no shell or package manager) running a single process. The manifest sets **no resource requests or limits and no probes** on the Deployment. If your platform requires them (for capacity planning, quota, or scheduling policy), add them to the Deployment after installing. The operator's footprint is that of a single lightweight control loop, and the docs make no specific sizing claim for it. For what to monitor on the operator itself, see [Monitoring](../platform-guide/monitoring.md).

## Verify the rollout

```bash
kubectl -n valkey-operator rollout status deployment/valkey-operator
```

This returns once the operator pod is `Running` and ready.

Confirm the CRDs registered:

```bash
kubectl get crd | grep valkey.gomomento.com
```

You should see five entries: `valkeyimages`, `valkeyconfigs`, `valkeyroles`, `valkeyclusters`, and `valkeynodes`, all under `valkey.gomomento.com`.

## Next steps

- Continue to the [Quickstart](quickstart.md) to provision your first Valkey cluster.
- Review [Operator configuration](../reference/operator-configuration.md) if you need to change `defaultZoneSpread` before teams start creating clusters.
- Bookmark [Operator upgrades](../platform-guide/operator-upgrades.md) for when the next release ships.
- Bookmark [Uninstall](../operations/uninstall.md) for the reverse procedure and the order it must run in.
