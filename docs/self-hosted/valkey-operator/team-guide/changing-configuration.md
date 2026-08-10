---
title: Changing configuration
description: Switch a cluster's ValkeyConfig, edit pod annotations, and change placement, and which of those changes replace pods versus apply in place.
sidebar_position: 5
---

# Changing configuration

This guide covers the day-2 changes you make to a running `ValkeyCluster` beyond scaling, through the Momento Valkey Operator: switching configs, editing pod annotations, and changing placement. Each behaves differently: some roll every pod, some apply without disruption, and the [change-impact table in Reconciliation](../concepts/reconciliation.md#what-happens-when-you-change-the-spec) is the canonical reference for every field. This page covers only the fields you're most likely to touch.

## Switching configs

Point `spec.configRef` at a different `ValkeyConfig` from the menu, for example, to move to a larger resource profile:

```bash
kubectl -n my-app patch valkeycluster my-cluster --type merge -p '{"spec": {"configRef": "large"}}'
```

If the new config resolves to a different image, resource allocation, or Valkey setting than the current one, the operator carries out a rolling replacement. One shard at a time, it brings up a replacement node before retiring the old one, and performs exactly one failover per shard when the primary itself needs replacing. Existing shards keep serving throughout. See [Reconciliation](../concepts/reconciliation.md#how-a-rolling-replacement-proceeds) for the mechanics.

## Editing pod annotations

`spec.podAnnotations` is a map of annotations the operator applies to every pod in the cluster (useful for tooling that reads pod annotations, such as metrics scraping or sidecar injection):

```bash
kubectl -n my-app patch valkeycluster my-cluster --type merge -p '{
  "spec": {"podAnnotations": {"example.com/scrape": "true"}}
}'
```

Additions and changes are patched onto live pods in place: no rolling replacement, no restart. Removing a key from `spec.podAnnotations`, however, does not strip it from pods that are already running. The operator can't distinguish its own annotation from one added by another controller once it's on a live pod. A removal takes effect the next time that pod is replaced, for example, during a config change or upgrade.

Keys under the `valkey.gomomento.com/` prefix are reserved for the operator's own use; the API rejects them at apply time.

## Changing placement

`spec.placement.zones` and `spec.placement.nodeSelector` are hard scheduling constraints, so changing either one triggers a rolling replacement. The operator can't move a running pod between zones or node pools, only replace it with one scheduled correctly. This follows the same one-shard-at-a-time, replace-before-retire procedure as a config change.

`spec.placement.zoneSpread` is different. Changing it, in either direction, and regardless of whether the mode itself is a hard (`required`) or soft (`bestEffort`) scheduling constraint, does **not** replace any existing pods. The new mode only affects pods created afterward, during a later scale-up, config change, or replacement.

:::note
If the new placement is unsatisfiable (a `nodeSelector` no node matches, or a zone with no available capacity), the roll stalls safely. The replacement pod for the shard in progress sits `Pending`, and every other pod (including the one being replaced) keeps running and serving traffic. The rollout resumes on its own once a matching node becomes available, for example after your cluster autoscaler provisions one.
:::

For the full mechanics of zones, node selectors, and spread modes, see [Zone-aware placement](../operations/zone-aware-placement.md).

## Manual changes on live nodes

Declared configuration flows one way: from the resolved `ValkeyConfig` into a rendered config file that each node reads once, at process start. What happens if someone bypasses that and changes a live node directly depends on what they change:

- **`CONFIG SET` is neither detected nor reverted.** The operator never reads a node's live configuration; it compares declared specs against each other, not against running processes. A manual `CONFIG SET` therefore takes effect immediately and silently survives until that pod is next replaced (by a config change, upgrade, or failure recovery), at which point the replacement starts from the rendered config and the manual change vanishes. Nothing records that the drift ever existed.
- **`CONFIG REWRITE` cannot persist anything.** The config file is a read-only mount, so attempts to rewrite it fail; there is no path to make a runtime change permanent from inside the node.
- **Manual ACL changes are actively reverted.** Unlike ordinary settings, ACLs are reconverged continuously: on its next pass the ACL controller reloads every node's ACLs from the declared state, wiping any manual `ACL SETUSER` or `ACL DELUSER`. Manage users only through the spec; see [ACLs](../security/acls.md).

The practical rule: treat `CONFIG SET` on a managed node as a diagnostic tool with an unpredictable lifetime, never as a configuration mechanism. If a setting matters, put it in the `ValkeyConfig` (or ask your platform team to), where it survives replacements and applies to every node uniformly.

## The full change-impact picture

Config, placement, pod annotations, ACLs, and TLS rotation each have different impact: rolling replacement, in-place, or future-pods-only. Rather than duplicate that table here, see the canonical version in [Reconciliation](../concepts/reconciliation.md#what-happens-when-you-change-the-spec) before making a change you're unsure about.
