---
title: Compatibility
description: The canonical version floors, supported architectures, and release artifact locations for the Momento Valkey Operator.
sidebar_position: 2
---

<!-- Projects: self-hosted-operator-operations, self-hosted-operator-capabilities -->

# Compatibility

This page is the canonical source for version and platform support for the Momento Valkey Operator. Other pages that mention version requirements ([Prerequisites](../getting-started/prerequisites.md) among them) summarize and link back here.

## Version floors

| Requirement | Minimum | Why |
|---|---|---|
| Operator | v0.9.0 | |
| Kubernetes | 1.27+ | `matchLabelKeys` in topology spread constraints for per-shard placement. |
| Valkey (in any `ValkeyImage` you register) | 9.0.1+ | Atomic slot migration for shard scaling. |
| Architecture | amd64 or arm64 | |

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

These version floors derive from specific mechanisms (the Kubernetes scheduling feature per-shard placement depends on, and the Valkey server commands shard scaling depends on), not from a certification matrix run against named Kubernetes distributions. The operator targets CNCF-conformant Kubernetes distributions meeting the Kubernetes floor. Valkey images must declare a full MAJOR.MINOR.PATCH version of at least 9.0.1, and the running binary must meet that floor. An unsupported binary causes cluster creation to report Failed with an explanation. [What we test](what-we-test.md) retains the historical v0.6.0 coverage snapshot; it does not establish a new test audit for v0.9.0. If you hit behavior that looks version-related, check both floors before filing a report. See [Getting support](getting-support.md).
