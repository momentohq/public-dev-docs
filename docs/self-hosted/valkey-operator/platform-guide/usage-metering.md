---
title: Usage metering
description: Understand the Operator memory meter, export billing records, and release retained records safely.
sidebar_position: 9
---

<!-- Projects: self-hosted-operator-operations, self-hosted-pricing -->

# Usage metering

The operator records each cluster's provisioned memory over time, in GB-hours, in a ValkeyMeteringRecord. Momento bills from these records. Export the records and send them in; nothing is transmitted automatically.

Records live in the operator's namespace, one per Valkey cluster, and remain after the cluster is deleted. See [`ValkeyMeteringRecord`](../reference/api/valkeymeteringrecord.md) for resource scope and lifecycle.

## How memory is determined

Each node is metered whether or not you set a memory limit. The first applicable memory source wins:

| Source | Used when |
|---|---|
| Reserved | The config sets `resources.memory`, the capacity reserved for the pod. |
| MaxMemory | No container memory limit is set, but the config sets maxmemory. |
| Observed | Neither is set, so peak observed memory is used. |
| Floor | The selected figure is below the per-node minimum of 100 MB, or the node has no measurements yet. |

The floor applies to the result from any of the preceding sources. This billing meter differs from the utilization denominator used for [autoscaling](../team-guide/autoscaling.md#utilization-measurements).

## Export records

Export all records from the default operator namespace:

```bash
kubectl get valkeymeteringrecords -n valkey-operator -o json > usage.json
```

Keep the export before releasing any record. A record for a deleted cluster cannot be reconstructed.

## Release retained records

Records hold a finalizer. Running kubectl delete on a record accepts the request but leaves deletion pending. After exporting it, confirm release with this annotation while the operator is running:

```bash
kubectl annotate valkeymeteringrecord <name> -n valkey-operator \
  valkey.gomomento.com/release=true
```

:::warning
Export before releasing a record. A deleted cluster's record has no source from which it can be recreated. Release records after deleting their clusters and before removing the operator; otherwise, active clusters can recreate records, or no controller remains to process the release.
:::

For the ordered procedure to remove the entire installation, see [Uninstall](../operations/uninstall.md).
