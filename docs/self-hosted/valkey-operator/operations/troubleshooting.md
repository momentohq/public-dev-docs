---
title: Troubleshooting
description: Symptom-first diagnosis and remediation for common Momento Valkey Operator problems, from stuck states to authentication failures.
sidebar_position: 6
---

<!-- Projects: self-hosted-operator-operations, self-hosted-operator-capabilities -->

# Troubleshooting

This page diagnoses and resolves the problems you are most likely to hit operating the Momento Valkey Operator: stuck cluster states, pods that won't schedule, TLS and ACL failures, and an unhealthy operator. It is written for the on-call engineer who needs to go from symptom to fix. For the theory behind failure recovery, see [Failure modes](failure-modes.md); for the full state machine, see [Cluster status](../reference/cluster-status.md).

## Read the situation first

Before working a specific symptom below, gather the same four signals every time:

```bash
# Cluster state and explanatory message
kubectl get valkeycluster -n my-app

# Full status, conditions, message, and events
kubectl describe valkeycluster my-cluster -n my-app

# Per-node lifecycle: Joining / Active / Leaving
kubectl get valkeynodes -n my-app

# Operator logs: structured JSON, filtered by RUST_LOG
kubectl -n valkey-operator logs deployment/valkey-operator
```

The STATE column shows Creating, Active, Updating, Invalid, or Failed. Inspect status.message for the cause of running-cluster problems or creation failure, and status.conditions for certificate-expiry warnings. Autoscaling decisions also produce Kubernetes Events. Operator logs provide additional diagnostics; see [Logging](../platform-guide/logging.md) and [Cluster status](../reference/cluster-status.md).

## Cluster stuck in Creating

For a cluster that remains Creating, check references and pod scheduling. An unpullable image can also leave pods in ImagePullBackOff. If the state becomes Failed, follow the creation-failure procedure below.

| Cause | How to confirm | Fix |
|---|---|---|
| Referenced `ValkeyImage` or `ValkeyConfig` is missing, or the `baseRef` inheritance chain is broken | `kubectl get valkeyconfig <name>` / `kubectl get valkeyimage <name>` returns not found; operator logs (never `status.message`) show the resolution error verbatim: `ValkeyConfig "<name>" not found`, `ValkeyImage "<name>" not found`, `no image_ref in config chain ending at "<name>"`, or `config inheritance depth exceeds 10 (cycle?)` | Create the missing resource. References are resolved fresh on every reconcile; you do not need to recreate the `ValkeyCluster` once the missing `ValkeyImage` or `ValkeyConfig` exists. |
| Pods are unschedulable: resource requests too large for available capacity, or placement constraints unsatisfiable | `kubectl get pods -n my-app` shows pods `Pending`; `kubectl describe pod <pod> -n my-app` events show scheduling failures | Resize node capacity, reduce the config's `resources`, or relax `placement` (zones, `nodeSelector`, `zoneSpread: required`). See [Zone-aware placement](zone-aware-placement.md) and [Sizing](sizing.md). |
| Pods are rejected by Pod Security admission: the namespace enforces the `restricted` Pod Security Standard, and Valkey pods carry no `securityContext` (no `runAsNonRoot` declaration) | `kubectl get pods -n my-app` shows no pods created, or events / `kubectl describe namespace my-app` show a `violates PodSecurity` admission rejection; check the namespace's `pod-security.kubernetes.io/enforce` label | Relabel or exempt the namespace to `privileged` or `baseline` enforcement. See [Prerequisites](../getting-started/prerequisites.md) for the compatibility statement. |

## A wedged bootstrap can't be fixed by editing

The cluster spec is frozen while Creating; edits are rejected at admission until Active. External fixes, such as creating a missing referenced config or adding node capacity, can unblock bootstrap. If the creation spec itself is wrong, delete and recreate the cluster with the corrected spec.

## Cluster shows Failed

Failed is a terminal creation failure. Read status.message for the cause. Common causes include a missing or invalid TLS Secret and an image whose binary is below the supported Valkey 9.0.1 floor.

Correct the prerequisite, then delete and recreate the cluster to retry. For TLS, the Secret must exist and be valid before creation. Failed does not recover through an in-place spec edit.

## Cluster shows Invalid

Invalid is a recoverable problem on an already running cluster, commonly a broken or expired TLS Secret. It is never entered during creation. Read status.message, repair or rotate the Secret, and the cluster returns to Active automatically. See [TLS](../security/tls.md) for Secret requirements and rotation.

## TLS clients fail or a certificate is nearing expiry

Inspect CertificateExpiringSoon in status.conditions. It becomes True within 30 days of expiry while the cluster remains Active. An expired or broken Secret on a running cluster can cause Invalid.

Check the certificate's expiry:

```bash
kubectl get secret <tls-secret-name> -n my-app -o jsonpath='{.data.tls\.crt}' | base64 -d | openssl x509 -noout -enddate
```

Rotate the leaf certificate by updating tls.crt and tls.key in the Secret. Verify that clients use the correct CA bundle and hostname. See [TLS](../security/tls.md) for rotation and cert-manager renewal, and [Monitoring](../platform-guide/monitoring.md) for alerting.

## Pods stuck Pending

Pods that stay `Pending` on an otherwise-`Active` cluster (during scale-out, a rolling change, or a placement change) indicate the scheduler cannot satisfy a constraint:

- **`zoneSpread: required`** with insufficient capacity in one or more target zones.
- **`placement.nodeSelector`** matching no nodes.

```bash
kubectl get pods -n my-app
kubectl describe pod <pending-pod> -n my-app   # scheduler events name the unsatisfied constraint
```

Existing pods keep serving: a stuck `Pending` replacement does not take down the shard it's replacing. The operator does not retry with different constraints; it waits. Once matching capacity appears (a node joins, an autoscaler adds capacity, `nodeSelector` labels are added to nodes), scheduling and the rollout resume on their own. If you run a cluster autoscaler, confirm it is configured to act on this workload's pending pods. See [Zone-aware placement](zone-aware-placement.md).

**During a genuine zone outage**, waiting for capacity in the dead zone can mean waiting out the outage. If `spec.placement.zones` pins the cluster to a zone that is down, you can remove the affected zone from the list to let replacement pods schedule into the surviving zones: this is a placement change, so it triggers the standard rolling replacement, and you can restore the zone list after the outage the same way. See [Zone-aware placement](zone-aware-placement.md#zone-outage-behavior).

## ACL user cannot authenticate

Work through these in order:

| Check | Detail |
|---|---|
| Password hash format | `passwordHashes` entries must be the SHA-256 hash of the password, exactly 64 lowercase hex characters, with no `#` prefix; the operator adds it. |
| Propagation timing | ACL changes reach nodes in two stages: kubelet propagates the updated ConfigMap into the pod volume (typically up to about a minute), then the separate ACL controller's 30-second tick issues `ACL LOAD` on each pod. Wait for both stages before concluding a binding "didn't take." |
| Default user disabled | The moment **any** ACL binding exists anywhere in the cluster's config chain or `spec.acl`, the `default` user is disabled. If your client authenticates as `default` with no credentials, it breaks as soon as the first binding lands; see [ACLs](../security/acls.md). |
| Invalid `roleRef` | A binding's `permissions[].roleRef` naming a `ValkeyRole` that doesn't exist blocks reconciliation for the **entire cluster**, not just that binding. This surfaces **only in operator logs** (never in `status.message`), verbatim: `ValkeyRole "<role>" not found (referenced by user "<username>")`. Duplicate usernames across merged bindings log `duplicate username "<username>" in merged ACL bindings`. |

Fix the hash, wait out the two propagation stages, bind `default` explicitly if you need unauthenticated access, or create the missing `ValkeyRole`.

## Rolling change (upgrade or placement change) stalled

A rolling change (image upgrade, `configRef` change, resource change, or `placement.zones`/`nodeSelector` change) proceeds one shard at a time by design: this bounds blast radius but means a stall on one shard blocks the rest of the fleet-wide rollout from that cluster's perspective.

1. Check for a `Pending` replacement pod: the [Pods stuck Pending](#pods-stuck-pending) section above is the most common cause.
2. Identify which shard is in progress: `kubectl get valkeynodes -n my-app`; a node in `Joining` or `Leaving` lifecycle marks the shard currently being replaced. Nodes on shards not yet reached stay `Active` and unchanged.
3. Resolve the blocking condition on that shard (usually a scheduling constraint); the rollout resumes automatically once the shard completes and moves to the next.

## Cluster stuck Terminating

A `ValkeyCluster` (or `ValkeyNode`) stuck in `Terminating` is waiting on its finalizer: `valkey.gomomento.com/cleanup` on the cluster, `valkey.gomomento.com/node-cleanup` on nodes. Finalizer removal requires the operator to be running and watching the resource.

**Most common cause:** the operator was uninstalled (or scaled to zero) before the cluster was deleted. **Fix:** restore the operator, and deletion completes on its own. See [Uninstall](uninstall.md) for the correct teardown order.

If the operator was fully uninstalled, reinstall it from the release artifacts (the Deployment no longer exists, so scaling it does nothing):

```bash
kubectl apply -f https://github.com/momentohq/valkey-operator/releases/download/v0.9.0/operator.yaml
kubectl -n valkey-operator rollout status deployment/valkey-operator
```

If it was only scaled to zero, the Deployment still exists; scale it back up:

```bash
kubectl -n valkey-operator get deployment valkey-operator
kubectl -n valkey-operator scale deployment/valkey-operator --replicas=1
```

:::warning
Manually removing the finalizer (`kubectl patch valkeycluster my-cluster -n my-app --type merge -p '{"metadata":{"finalizers":[]}}'`) is a last resort. It unblocks the Kubernetes delete immediately, but the cluster's pods, Services, ConfigMaps, and Secrets are **not** cleaned up by cascade-delete alone in every case and may be orphaned. Only do this if the operator genuinely cannot be restored, and follow it by manually deleting any leftover resources labeled for that cluster; see [Labels and annotations](../reference/labels-annotations.md).
:::

## Operator not running or CrashLoopBackOff

The operator validates its own configuration at startup and exits immediately (deliberately) if it's invalid, rather than running with a guessed default. The most common cause is an invalid value in the `valkey-operator-config` ConfigMap.

```bash
kubectl -n valkey-operator get pods
kubectl -n valkey-operator logs deployment/valkey-operator
```

A startup failure logs the specific invalid value before exiting. Fix the ConfigMap and restart:

```bash
kubectl -n valkey-operator patch configmap valkey-operator-config \
  --type merge -p '{"data":{"defaultZoneSpread":"bestEffort"}}'
kubectl -n valkey-operator rollout restart deployment/valkey-operator
kubectl -n valkey-operator rollout status deployment/valkey-operator
```

Existing Valkey clusters keep serving traffic while the operator is down; nothing is lost, but no reconciliation happens until it's healthy again. See [Operator configuration](../reference/operator-configuration.md) and [Failure modes](failure-modes.md).

## Collecting diagnostics for support

Before contacting support, capture the following. All of it is plain `kubectl`:

```bash
# Operator logs (structured JSON)
kubectl -n valkey-operator logs deployment/valkey-operator > operator-logs.txt

# Full cluster spec, status, and events
kubectl get valkeycluster -n my-app -o yaml > valkeycluster.yaml

# Node-level state
kubectl get valkeynodes -n my-app -o yaml > valkeynodes.yaml

# Pod status and scheduling events
kubectl get pods -n my-app -o wide > pods.txt
kubectl get events -n my-app > events.txt

# Operator process configuration
kubectl get configmap valkey-operator-config -n valkey-operator -o yaml > operator-config.yaml
```

See [Getting support](../support/getting-support.md) for how to open a case and what to attach.
