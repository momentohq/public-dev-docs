---
title: Cluster status
description: Cluster lifecycle states, creation failures, certificate expiry conditions, and autoscaling status.
sidebar_position: 2
---

<!-- Projects: self-hosted-operator-operations, self-hosted-operator-capabilities -->

# Cluster status

Use ValkeyCluster status to watch bootstrap, rolling changes, and recoverable problems. For symptom-driven fixes, see [Troubleshooting](../operations/troubleshooting.md).

## Status fields

| Field | Meaning |
|---|---|
| state | Overall cluster lifecycle state, defined below. |
| message | Explanation of a recoverable problem or creation failure. |
| conditions | Includes CertificateExpiringSoon for TLS clusters. |
| autoscaling.desiredShards | Current target shard count when autoscaling is enabled. |

Inspect the complete installed schema with kubectl explain valkeycluster.status --recursive.

## States

| State | Meaning |
|---|---|
| Creating | Bootstrap is in progress. The spec is frozen until Active; edits are rejected at admission. |
| Active | The cluster is formed and serving. |
| Updating | A rolling change, such as an upgrade, scale, or reshard, is in progress. |
| Invalid | A running cluster has a recoverable problem, commonly a broken or expired TLS Secret. status.message explains the cause. Correcting it returns the cluster to Active automatically. This state is never entered during creation. |
| Failed | Terminal creation failure, such as a missing or invalid TLS Secret or an image binary below the supported Valkey floor. status.message explains the cause. Correct the prerequisites, then delete and recreate the cluster to retry. |

## Spec edits during creation {#targetspec-snapshot-semantics}

The cluster spec is frozen while the state is Creating. Wait for Active before editing it. If a mistake in the creation spec prevents bootstrap, delete and recreate the cluster with the corrected spec. TLS Secrets must exist and be valid before you create a TLS-enabled cluster.

## Certificate expiry condition

TLS clusters publish CertificateExpiringSoon in status.conditions. The condition becomes True when the certificate is within 30 days of expiry; the cluster remains Active. Alert on this condition and rotate before expiry. A broken or expired Secret on an already running cluster can cause Invalid; repair or rotate it for automatic recovery. See [TLS](../security/tls.md).

## Autoscaling target

With autoscaling enabled, spec.shards is only the initial count. The target appears in status.autoscaling.desiredShards and the DESIRED SHARDS printer column. Adjust minShards/maxShards to control the range. Decisions produce Kubernetes Events; see [Autoscaling](../team-guide/autoscaling.md).

## Printer columns

| Column | Source | Meaning |
|---|---|---|
| CONFIG | .spec.configRef | Selected configuration profile. |
| SHARDS | .spec.shards | Requested shard count; initial count only when autoscaling is enabled. |
| REPLICAS | .spec.replicasPerShard | Replicas per shard, excluding the primary. |
| STATE | .status.state | Cluster lifecycle state. |
| DESIRED SHARDS | .status.autoscaling.desiredShards | Current autoscaling target. |

## Inspect status and node progress

```bash
# Overall state and printer columns
kubectl -n my-app get valkeyclusters

# Full status, message, conditions, and events
kubectl -n my-app describe valkeycluster my-cluster
kubectl -n my-app get valkeycluster my-cluster -o yaml

# Per-node lifecycle
kubectl -n my-app get valkeynodes -w

# Operator logs
kubectl -n valkey-operator logs deployment/valkey-operator
```

Node lifecycles show Joining, Active, or Leaving during bootstrap, scaling, and replacements. ValkeyNode is an internal resource; use it to observe progress rather than editing it. See [ValkeyNode](api/valkeynode.md).
