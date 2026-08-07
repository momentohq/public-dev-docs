---
title: Logging
description: "The operator's log contract: JSON structure, level control, what gets logged, Valkey node logs, and what is deliberately left to your platform."
sidebar_position: 8
---

# Logging

This page is the log contract for the Momento Valkey Operator and the Valkey pods it manages: where logs go, what each line contains, and how to control verbosity. It is written for platform teams wiring log pipelines and alerts. Logs are the operator's only observability surface (it exposes no metrics or health endpoint), so [Monitoring](monitoring.md) builds directly on this page.

## The contract

The operator writes structured JSON, one object per line, to container stdout. Nothing is written to files or volumes, and the operator ships no collection or retention: log storage is your platform's concern, handled by whatever node-level collector or pipeline your Kubernetes cluster already runs. `kubectl logs` works as it does for any container:

```bash
kubectl -n valkey-operator logs deployment/valkey-operator
```

Each line carries these top-level keys:

| Key | Contents |
|---|---|
| `timestamp` | Event time, RFC 3339 UTC |
| `level` | `ERROR`, `WARN`, `INFO`, `DEBUG`, or `TRACE` |
| `fields` | The event itself: `message` plus the event's structured fields (see below) |
| `target` | The emitting module path, such as `operator::controller::acl` |
| `span`, `spans` | Present when the event fires inside a reconcile: the object reference of the resource being reconciled, including its namespace |

Events identify their subject through structured fields, not message text: most reconcile-path events carry a `cluster_name` field, and per-pod events add `pod` or `node`. Filter on `fields.cluster_name` rather than grepping message strings:

```bash
kubectl -n valkey-operator logs deployment/valkey-operator \
  | jq 'select(.fields.cluster_name == "my-cluster")'
```

The namespace is **not** an event field. It appears only in the `span`/`spans` object reference, so if two namespaces host same-named clusters, disambiguate with the span data rather than `cluster_name` alone.

## Level control

Verbosity is set by the `RUST_LOG` environment variable on the operator Deployment. Both the release manifest and the Helm chart set it to `info`. The value feeds the filter directly, so standard directive syntax works, including per-module levels such as `info,operator=debug`. The variable is read once at startup: to change it, edit the Deployment's env and let the rollout restart the operator.

:::warning
Never remove `RUST_LOG`. With the variable unset, the operator logs nothing at any level, including errors: a misconfigured operator can exit without a single log line. Lower the level to `warn` if `info` is too verbose; do not unset it.
:::

## What gets logged

At `info`, expect a steady heartbeat plus one line per action taken:

- **Per-tick heartbeats.** Each cluster produces `ACL reconcile tick` and `TLS reconcile tick` lines every 30 seconds, and an `active tick` line (with shard and node counts) from the cluster's main loop. This steady rhythm is a health signal in itself: [Monitoring](monitoring.md) recommends alerting when it stops.
- **Actions.** One line per resource created or step taken: `creating Pod for node`, `creating headless Service`, `cluster meet issued`, `failover to up-to-date replica for rolling upgrade`, `cluster formed, transitioning to Active`.
- **Diagnostics you will search for.** Scheduling problems log `bootstrap blocked: pod cannot be scheduled` with the scheduler's own reason. Failover handling logs `primary unhealthy but replicas exist, waiting for auto-failover` and, when quorum is lost, `no quorum — issued TAKEOVER on replica`. TLS validation failures log `TLS Secret validation failed, setting cluster Invalid` with the same reason text that lands in `status.message`.
- **Retryable errors at `WARN`.** Best-effort paths log and retry rather than fail, for example `ACL LOAD failed, will retry next tick` and `reconcile error, requeuing`. A persistent stream of the same `WARN` line is a problem worth investigating; a single occurrence usually is not. [Troubleshooting](../operations/troubleshooting.md) maps the common ones to causes.
- **`ERROR` is rare**: invalid operator configuration at startup and internal invariant violations.

Two absences to plan around:

- **No startup banner.** The operator logs no version or "starting up" line; the first output is whatever reconcile activity occurs. Verify a rollout with `kubectl rollout status`, not by waiting for a boot message.
- **No Kubernetes Events.** The operator never emits Events, so `kubectl describe valkeycluster` shows none from the operator and event-based tooling sees nothing. Everything is in the log stream (and, for TLS validation failures, in `status.message`).

The operator never writes passwords into log messages; missing-credential conditions log key names only.

Two kinds of non-JSON output exist, both limited to startup: if the operator cannot construct its Kubernetes client it exits with a plain-text panic message on stderr, and an invalid `RUST_LOG` directive prints a plain-text `ignoring ...` warning on stderr before logging initializes.

## Valkey node logs

Valkey pods are single-container with no sidecars. The operator sets neither `logfile` nor `loglevel`, so `valkey-server` writes its native plain-text log to container stdout at Valkey's default level. Collect it with the same node-level pipeline as any workload:

```bash
kubectl -n my-app logs my-cluster-8c04d
```

You can raise or lower node verbosity by setting `loglevel` in a `ValkeyConfig`'s `valkey` map. Do not set `logfile`: it would redirect node logs into the container's ephemeral filesystem, invisible to `kubectl logs` and lost with the pod.

Because Valkey pods run with `restartPolicy: Never` and are replaced rather than restarted, a failed pod's logs survive only as long as your cluster retains logs for terminated pods. If you rely on post-incident log review, make sure your collector captures Valkey namespaces continuously; by the time you investigate, the pod that mattered may already be replaced. `kubectl logs --previous` does not apply here (there is no restarted container, only new pods with new names).
