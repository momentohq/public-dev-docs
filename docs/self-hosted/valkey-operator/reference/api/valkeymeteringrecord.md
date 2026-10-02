---
title: ValkeyMeteringRecord
description: The namespaced billing record written by the operator, its retention, export, and protected deletion.
sidebar_position: 7
---

<!-- Projects: self-hosted-operator-operations, self-hosted-pricing -->

# ValkeyMeteringRecord

`ValkeyMeteringRecord` records a cluster's provisioned memory over time for billing. The operator writes one record per Valkey cluster in its own namespace. Records survive deletion of the cluster they describe.

## Resource metadata

| Field | Value |
|---|---|
| API group/version | valkey.gomomento.com/v1alpha1 |
| Kind | `ValkeyMeteringRecord` |
| Plural | valkeymeteringrecords |
| Scope | Namespaced, in the operator's namespace |

## Inspect and export

```bash
kubectl get valkeymeteringrecords -n valkey-operator
kubectl get valkeymeteringrecords -n valkey-operator -o json > usage.json
```

For the schema installed in your cluster:

```bash
kubectl explain valkeymeteringrecord --recursive
```

## Lifecycle

The record accumulates memory usage in GB-hours. Nothing is transmitted automatically; export records and send them for billing.

A finalizer protects deletion. Export first, then set `valkey.gomomento.com/release=true` on the record while the operator is running. A record for a deleted cluster cannot be reconstructed. The complete memory-selection and release procedures are in [Usage metering](../../platform-guide/usage-metering.md).
