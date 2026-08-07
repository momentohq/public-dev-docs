---
title: For product teams
description: How product teams provision, connect to, scale, and reconfigure Valkey clusters through the ValkeyCluster resource.
sidebar_position: 1
---

# For product teams

This section is for developers on a product team who consume Valkey clusters from a platform their organization runs. You interact with exactly one resource, `ValkeyCluster`, in your own namespace. The Momento Valkey Operator does everything else: forming the cluster, keeping it healthy, and carrying out the changes you request.

## What you own, what the platform handles

Your platform team curates a menu of approved building blocks and installs and runs the operator. You pick from that menu and declare the Valkey cluster you want; the operator reconciles your `ValkeyCluster` into a running cluster.

| Concern | Who owns it |
|---|---|
| `ValkeyCluster` resources in your namespace: creating, scaling, reconfiguring, deleting | You |
| ACL users bound on your clusters, and your applications' connection and retry logic | You |
| The config menu (`ValkeyConfig`), image allowlist (`ValkeyImage`), and reusable ACL roles (`ValkeyRole`) | Platform team |
| Installing, upgrading, and configuring the operator | Platform team |
| Cluster bootstrap, slot assignment, failover, rebalancing, rolling replacements | The operator |

You can read the menu resources to see what is on offer (cluster-scoped, so visible from any namespace), but you cannot create or edit them. If you need a new image version, a different resource profile, or a new ACL role, ask your platform team.

## Guides in this section

- [Provisioning a cluster](provisioning.md) — discover the config menu, apply a `ValkeyCluster`, watch it move from `Creating` to `Active`, read its status with `kubectl get`/`describe`, understand what your RBAC grants allow, and delete a cluster cleanly. Covers the decisions you make once, at creation time: TLS in particular cannot be added later.
- [Connecting to your cluster](connecting.md) — the DNS endpoint your clients use, why a cluster-aware client is required, how to connect over TLS, how to authenticate with an ACL user, and how to handle the brief write failures a failover causes.
- [Scaling](scaling.md) — grow or shrink the cluster by editing `spec.shards` and `spec.replicasPerShard`, what to expect while the operator rebalances slots, and why an edit made during `Creating` won't fix a bad initial spec.
- [Changing configuration](changing-configuration.md) — switch to a different `ValkeyConfig`, edit pod annotations, and change placement, and which of those changes replace pods, which apply in place, and which affect only future pods.

For the exact meaning of every status field and state you might see in `kubectl` output, keep [Cluster status](../reference/cluster-status.md) at hand. If a cluster looks stuck, start with [Troubleshooting](../operations/troubleshooting.md).
