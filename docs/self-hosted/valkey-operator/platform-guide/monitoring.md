---
title: Monitoring
description: Operator logs, cluster state, the label taxonomy for dashboards, what to alert on, and how to get Valkey-level metrics today.
sidebar_position: 7
---

<!-- Projects: self-hosted-operator-operations, self-hosted-operator-capabilities -->

# Monitoring

This guide covers observing the Momento Valkey Operator and the clusters it manages: the operator's own logs, the per-cluster state signal, and the label taxonomy for building dashboards and alerts. It also covers utilization samples in ValkeyNode status and collecting Valkey metrics for external dashboards.

## Operator logs

The operator emits structured JSON logs to stdout. Log verbosity is controlled by the `RUST_LOG` environment variable on the operator Deployment (`info` by default):

```bash
kubectl -n valkey-operator logs deployment/valkey-operator
```

Because the logs are JSON, pipe them into whatever log pipeline you already run (a sidecar, a node-level collector, or `kubectl logs -f | jq`) rather than parsing them ad hoc. [Logging](logging.md) is the full contract: the JSON structure, the fields that identify clusters and pods, what gets logged at each level, and Valkey node logs. See [Operator configuration](../reference/operator-configuration.md) for how `RUST_LOG` is wired to the Deployment.

## Cluster state

Each `ValkeyCluster`'s `status.state` and `status.message` are the primary health signal:

```bash
kubectl get valkeyclusters -A -w
```

state is one of Creating, Active, Updating, Invalid, or Failed. status.message explains recoverable running-cluster problems and terminal creation failures. See [Cluster status](../reference/cluster-status.md) for the status fields and inspection commands.

## Watching ValkeyNode lifecycle

`ValkeyNode` resources are the operator's internal record of each cluster member, and reading them is useful for watching a transition (a scale-out, an upgrade, a failure recovery) happen step by step:

```bash
kubectl get valkeynodes -n <namespace> -w
```

Nodes appear with `Joining` lifecycle, flip to `Active` once they finish joining the cluster, and briefly show `Leaving` on their way out. See [Reconciliation](../concepts/reconciliation.md) for what drives each transition.

## Building dashboards on labels

Every Valkey pod carries a stable set of labels (`app.kubernetes.io/name=valkey`, `app.kubernetes.io/instance={cluster}`, and a shard index) that are safe to build dashboards, NetworkPolicies, and alert rules on. See [Labels and annotations](../reference/labels-annotations.md) for the complete taxonomy and which labels are stable versus transient.

## What to alert on

Monitor these fleet-level signals:

- **`state` not `Active` for longer than your normal roll or bootstrap takes.** A cluster stuck in `Creating` or `Invalid` past the time a routine change normally needs is worth paging on. See [Troubleshooting](../operations/troubleshooting.md) for the common causes.
- **CertificateExpiringSoon is True.** Rotate TLS certificates before expiry; the condition becomes True within 30 days of expiry.
- **Pod churn on a cluster.** Repeated replacement of members in the same shard, outside of a change you initiated, points at an underlying failure (a bad node, a resource limit being hit, an unschedulable placement) rather than routine self-healing.
- **The operator Deployment itself not available.** See below.

## Monitoring the operator itself

The operator exposes no liveness or readiness probe, no health endpoint, and no metrics port: there is nothing to scrape or poll on the operator process directly. Monitor it the same way you monitor any critical, unprobed Deployment:

- **Alert on Deployment availability:** `kubectl -n valkey-operator get deployment valkey-operator` reporting fewer available replicas than desired (normally one) means the operator is down. Because it runs a single replica with no leader election, "down" means no reconciliation is happening anywhere in the fleet. See [Failure modes](../operations/failure-modes.md) for what that does and does not affect.
- **Alert on log flow stopping.** A running pod that has stopped emitting logs (no reconciliation activity across any cluster) is a secondary signal that the process is wedged even though the Deployment reports Ready.

## Valkey-level metrics

The operator samples node utilization every 30 seconds and publishes it in ValkeyNode status for [autoscaling](../team-guide/autoscaling.md). Scaling decisions also appear as Kubernetes Events on the cluster. This status interface is separate from a Prometheus scrape endpoint. Valkey pods have no metrics endpoint added by the operator. To collect Valkey-level metrics today, deploy your own standalone exporter as a separate Deployment, pointed at the cluster's headless Service:

```text
{cluster}.{namespace}.svc.cluster.local:6379
```

Authenticate the exporter with a dedicated ACL user scoped to read-only monitoring commands, rather than reusing an application credential. See [ACLs](../security/acls.md) for how to bind one. The exporter Deployment, its own annotations, and its scrape configuration are entirely yours to manage. `spec.podAnnotations` on the `ValkeyCluster` is for your own customer-owned tooling that needs annotations on the Valkey pods themselves (service-mesh injection and similar), not a mechanism for exposing metrics from those pods.

:::note
Built-in metrics export is on the roadmap but not available today. See [Roadmap](../roadmap.md).
:::

## Certificate expiry

Alert on CertificateExpiringSoon in each TLS cluster's status.conditions. It becomes True within 30 days of expiry while the cluster remains Active. A broken or expired Secret on a running cluster can cause Invalid. See [TLS](../security/tls.md) for the validation the operator does perform and how expiry is handled if you use cert-manager.
