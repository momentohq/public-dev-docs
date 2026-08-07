---
title: Compatibility
description: The canonical version floors, supported architectures, and release artifact locations for the Momento Valkey Operator.
sidebar_position: 2
---

# Compatibility

This page is the canonical source for version and platform support for the Momento Valkey Operator. Other pages that mention version requirements ([Prerequisites](../getting-started/prerequisites.md) among them) summarize and link back here.

## Version floors

| Requirement | Minimum | Why |
|---|---|---|
| Operator | v0.6.0 | The version these docs describe. |
| Kubernetes | 1.27+ | Per-shard placement relies on `matchLabelKeys` in topology spread constraints, a scheduling feature enabled by default starting in Kubernetes 1.27. On an older Kubernetes cluster, per-shard spread silently does not work as documented. |
| Valkey (in any `ValkeyImage` you register) | 9+ | Shard scaling moves hash slots with the server-side slot-migration commands introduced in Valkey 9. This is also the practical floor for any image you allowlist: an older Valkey version can bootstrap a cluster, but resharding will fail against it. |
| Architecture | amd64 or arm64 | Both the operator image and the images you register can run on either architecture. |

:::note
Every Valkey pod the operator creates carries a built-in toleration for `kubernetes.io/arch=arm64:NoSchedule`, regardless of which architecture you actually run. If your platform taints arm64 node pools to keep workloads off them unless explicitly opted in, account for this. See [Labels, annotations, and naming](../reference/labels-annotations.md).
:::

## Release artifacts

| Artifact | Where |
|---|---|
| `crds.json` | Attached to each release on the [GitHub releases page](https://github.com/momentohq/valkey-operator/releases) |
| `operator.yaml` | Attached to each release on the same page |
| Operator container image | Docker Hub, `gomomento/valkey-operator`, tagged by release version (multi-arch: amd64 and arm64) |

See [Installation](../getting-started/installation.md) for how these artifacts fit together.

## Tested vs. supported

These version floors derive from specific mechanisms (the Kubernetes scheduling feature per-shard placement depends on, and the Valkey server commands shard scaling depends on), not from a certification matrix run against named Kubernetes distributions. The operator does not check or enforce these floors at runtime: it targets any Kubernetes cluster meeting the floor above, on any CNCF-conformant distribution, and any Valkey image meeting the Valkey version floor. [What we test](what-we-test.md) states exactly which behaviors the test suites verify, and on what kind of cluster. If you hit behavior that looks version-related, check both floors before filing a report. See [Getting support](getting-support.md).
