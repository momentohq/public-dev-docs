---
title: Operator configuration
description: The valkey-operator-config ConfigMap, its environment variable mapping, the read-at-startup model, and how to apply changes.
sidebar_position: 5
---

# Operator configuration

This page documents the process-level configuration of the Momento Valkey Operator: the `valkey-operator-config` ConfigMap, how its keys reach the operator, and how to change them. It is for platform teams who own the operator installation.

The operator installation (`operator.yaml`) creates the ConfigMap `valkey-operator-config` in the `valkey-operator` namespace. The ConfigMap is optional: if it is absent, the operator runs with compiled-in defaults.

## Configuration keys

| Key | Values | Default | Effect |
|---|---|---|---|
| `defaultZoneSpread` | `bestEffort` \| `required` | `bestEffort` | The operator-wide default for zone spreading of Valkey pods, used by every `ValkeyCluster` that does not set `placement.zoneSpread` itself. `bestEffort` schedules pods even when zone spread cannot be satisfied; `required` leaves pods Pending until a valid zone placement exists. See [Zone-aware placement](../operations/zone-aware-placement.md). |

A per-cluster `placement.zoneSpread` always overrides this default. The value spellings are identical in the ConfigMap and in the `ValkeyCluster` field: exactly `bestEffort` or `required`.

## Environment variable mapping

The operator reads its settings from environment variables; the Deployment wires each ConfigMap key to its variable:

| ConfigMap key | Environment variable |
|---|---|
| `defaultZoneSpread` | `DEFAULT_ZONE_SPREAD` |

The Deployment marks the reference optional, which is why a missing ConfigMap or key falls back to the compiled default rather than blocking startup.

The Deployment also sets `RUST_LOG=info`, which controls the operator's JSON log verbosity. It is plain environment configuration, not a ConfigMap key. See [Monitoring](../platform-guide/monitoring.md).

## Changes require an operator restart

The operator reads configuration once at startup and holds it for the life of the process: there is deliberately no live reload. Changing the ConfigMap alone has no effect on a running operator. To apply a change, patch the ConfigMap and restart the operator Deployment:

```bash
kubectl patch configmap valkey-operator-config -n valkey-operator \
  --type merge -p '{"data":{"defaultZoneSpread":"required"}}'

kubectl rollout restart deployment/valkey-operator -n valkey-operator
kubectl rollout status deployment/valkey-operator -n valkey-operator
```

Running Valkey clusters keep serving traffic during the restart; reconciliation pauses briefly and resumes when the new operator pod is up.

:::note
A changed `defaultZoneSpread` affects only pods created after the restart. Existing pods keep the spread behavior they were scheduled with; the operator does not roll clusters for a zone-spread change. See [Zone-aware placement](../operations/zone-aware-placement.md).
:::

## Invalid values fail startup

If `DEFAULT_ZONE_SPREAD` is set to anything other than `bestEffort` or `required`, the operator logs the error and exits at startup, and the Deployment goes into a crash loop. This is deliberate fail-fast behavior: a misconfigured operator does not start, rather than running silently with a wrong or guessed default.

If you encounter this after a configuration change, fix the ConfigMap value and restart again:

```bash
kubectl logs deployment/valkey-operator -n valkey-operator
kubectl patch configmap valkey-operator-config -n valkey-operator \
  --type merge -p '{"data":{"defaultZoneSpread":"bestEffort"}}'
kubectl rollout restart deployment/valkey-operator -n valkey-operator
```

Existing Valkey clusters continue serving while the operator is down; no reconciliation (scaling, replacement, failover recovery) happens until it is healthy again. See [Failure modes](../operations/failure-modes.md).
