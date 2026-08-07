---
title: Getting support
description: How to engage Momento support for the Valkey Operator, what to include in a report, and where release notes live.
sidebar_position: 5
---

# Getting support

This page covers how to get help with the Momento Valkey Operator, what to include when you do, and where to find release notes.

## How to engage support

Engage support for the Momento Valkey Operator through your Momento account team. For urgent production incidents, use the same channel and state the urgency explicitly: severity handling is part of your support arrangement with Momento, not something inferred from a report.

## What to attach

Before reaching out, gather diagnostics for the affected cluster: the `ValkeyCluster` resource and its status, the state of its `ValkeyNode` resources, operator logs covering the relevant time window, and any recent Kubernetes events for the cluster's pods. [Troubleshooting](../operations/troubleshooting.md) documents the exact commands to collect this diagnostic set: run through it first, both because it might resolve the issue directly and because its output is what a report should include.

Always include:

- The operator release version.
- The Kubernetes version and distribution.
- The affected cluster's spec (shards, replicas, placement, TLS/ACL configuration): the `ValkeyCluster` manifest itself is the easiest way to convey this.

## Release notes and artifacts

Release notes, and the `crds.json` and `operator.yaml` artifacts for every release, are published on the [GitHub releases page](https://github.com/momentohq/valkey-operator/releases). See [Compatibility](compatibility.md) for the full artifact and image list.
