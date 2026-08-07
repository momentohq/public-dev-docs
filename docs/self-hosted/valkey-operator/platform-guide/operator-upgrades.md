---
title: Upgrading the operator
description: Apply new release artifacts, what happens to running clusters while the operator restarts, and how to roll back.
sidebar_position: 5
---

# Upgrading the operator

This guide covers upgrading the Momento Valkey Operator itself (the controller Deployment and its CRDs) as opposed to upgrading the Valkey engine version running inside your clusters (see [Managing Valkey upgrades](valkey-upgrades.md)).

## Apply the new release

Apply the new release's CRDs and operator manifest, then confirm the rollout completes:

```bash
kubectl apply -f https://github.com/momentohq/valkey-operator/releases/download/v0.6.0/crds.json
kubectl apply -f https://github.com/momentohq/valkey-operator/releases/download/v0.6.0/operator.yaml
kubectl -n valkey-operator rollout status deployment/valkey-operator
```

This is the same procedure as a fresh install (see [Installation](../getting-started/installation.md)): applying CRDs is always safe to repeat, and `kubectl apply` on the Deployment manifest updates it in place.

## While the operator restarts

The operator is a single-replica Deployment with no leader election (see below), so an upgrade briefly stops reconciliation while the old pod terminates and the new one starts. Nothing breaks during that window:

- **Running clusters keep serving.** The data plane (Valkey pods, replication, client connections, and Valkey's own automatic failover) is entirely independent of the operator. See [Reconciliation](../concepts/reconciliation.md) and [Failure modes](../operations/failure-modes.md) for why: the operator holds no in-memory state between reconciliation passes, so it has nothing to lose by disappearing.
- **Pending changes queue, they do not fail.** Any spec edit, scale, or upgrade in flight when the operator goes down waits. When the new operator pod starts, it rediscovers actual state from scratch and resumes converging every cluster toward its current spec, including edits made while it was down.

No special ordering requirement exists between CRDs and the Deployment beyond applying both; the operator does not need to be down to apply a new CRD schema.

## Rolling back

Rolling back is the same operation with the previous release's artifacts:

```bash
kubectl apply -f https://github.com/momentohq/valkey-operator/releases/download/<previous-version>/operator.yaml
```

:::warning
Reapplying an older `operator.yaml` does not revert the CRD schema: `kubectl apply`-ing CRDs only ever adds or changes fields, it never removes them, so the newer CRD schema stays installed even after you roll the operator Deployment back. If any `ValkeyCluster`, `ValkeyConfig`, or other resource was created or edited using a spec field the new release introduced, the older operator binary was not built to understand that field. Confirm what changed between the two CRD versions before rolling back a Deployment that has already seen newer resources, and treat rollback as a last resort rather than a routine operation.
:::

## Single-replica deployment

The operator runs as a Deployment with exactly one replica and no leader election: a second replica would not add high availability, since the operator's design already tolerates being down (see above). Kubernetes's default rolling-update behavior for a one-replica Deployment briefly has zero available replicas during the swap (or, depending on your `maxUnavailable`/`maxSurge` settings, briefly two). Either way, reconciliation pauses for that window and resumes once the new pod is Ready. Monitor the upgrade the same way you monitor operator health day to day. See [Monitoring](monitoring.md).
