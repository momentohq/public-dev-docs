---
title: Glossary
description: Definitions of the Valkey terms and operator vocabulary used throughout these docs, including the three meanings of the word "cluster".
sidebar_position: 5
---

# Glossary

This page defines the Valkey terms and the operator's own vocabulary that the rest of these docs use. It serves two readers: Kubernetes engineers who haven't run Valkey before, and Valkey engineers meeting this operator's resource model for the first time. Kubernetes fundamentals (pods, custom resources, controllers, RBAC) are assumed throughout these docs and aren't defined here.

## Three meanings of "cluster"

The word "cluster" names three different things in any conversation about this operator. These docs always distinguish them:

- **Valkey cluster.** The sharded Valkey deployment itself: a set of Valkey nodes that split the keyspace and replicate within shards. This is the thing that serves your traffic.
- **Kubernetes cluster.** The Kubernetes environment everything runs in. Always written fully qualified in these docs, never bare "cluster".
- **`ValkeyCluster`.** The namespaced custom resource a product team creates to declare a Valkey cluster. Code-formatted, exact casing. See the [`ValkeyCluster` API reference](../reference/api/valkeycluster.md).

## Valkey terms

- **node.** One member of a Valkey cluster: a single Valkey process. The operator runs each node as one pod and tracks it with a [`ValkeyNode`](../reference/api/valkeynode.md) resource. A machine in the Kubernetes cluster is always "Kubernetes node".
- **shard.** A primary and its replicas, together owning a range of hash slots. A `ValkeyCluster`'s `shards` field sets how many shards exist; see [Scaling a cluster](../team-guide/scaling.md).
- **hash slot.** One of the 16384 buckets the keyspace is divided into. Every key hashes to exactly one slot, and every slot is owned by exactly one shard. Scaling and rebalancing move slots between shards; the operator treats "all 16384 slots assigned" as the invariant a healthy cluster converges on. See [Reconciliation](../concepts/reconciliation.md).
- **primary and replica.** The two roles within a shard. The primary serves writes for the shard's slots; replicas replicate it and stand by for promotion. These docs never use the terms master or slave.
- **failover.** Promotion of a replica to primary after the primary is lost. Depending on the failure, this is Valkey's own election or an operator-forced takeover; [Failure modes](../operations/failure-modes.md) covers every case.
- **cluster bus.** The node-to-node channel on port `16379` that carries topology gossip and failure detection, separate from the client port `6379`. Application clients never use it. See [Connecting to your cluster](../team-guide/connecting.md).
- **cluster-aware client.** A client library that speaks the Valkey cluster protocol: it maintains a map of slot ownership, follows redirects, and refreshes its view when topology changes. Connecting with anything less breaks; [Connecting to your cluster](../team-guide/connecting.md) explains why.
- **`MOVED` redirect.** The response a node returns when a client asks it for a key whose slot lives on a different shard, naming the node that owns it. Cluster-aware clients follow these automatically.
- **ACL.** Valkey's access control lists: named users with permissions over commands and key patterns. The operator manages ACLs declaratively; see [ACLs](../security/acls.md).

## Operator terms

- **the operator.** The Momento Valkey Operator: the controllers that turn the custom resources below into running Valkey clusters and keep them converged. [Architecture](../concepts/architecture.md) describes its runtime shape.
- **the menu.** The cluster-scoped resources the platform team curates and product teams consume by reference: [`ValkeyImage`](../reference/api/valkeyimage.md) (allowlisted engine images), [`ValkeyConfig`](../reference/api/valkeyconfig.md) (named configuration profiles), and [`ValkeyRole`](../reference/api/valkeyrole.md) (reusable ACL permission sets). Cluster scoping is what makes the menu a governance mechanism; see [Resource model](../concepts/resource-model.md).
- **platform team and product team.** The two personas the operator is built around. The platform team installs the operator and owns the menu; product teams create `ValkeyCluster` resources in their own namespaces. The split is enforced by Kubernetes RBAC, not by a policy engine; see [Multi-tenancy and RBAC](../platform-guide/multi-tenancy-and-rbac.md).
- **reconciliation tick.** One pass of a control loop comparing desired state against observed state. The cluster loop takes at most one cluster-changing action per tick, which is why changes roll out as a sequence of small observable steps. See [Reconciliation](../concepts/reconciliation.md).
- **`targetSpec`.** The snapshot of a cluster's spec that the operator is currently driving toward. Spec edits made while a transition is in progress are deferred until the current target is reached. See [Cluster status](../reference/cluster-status.md).
- **cluster states.** The `state` printer column of a `ValkeyCluster`: `Creating`, `Active`, or `Invalid` in practice, with `Updating` reserved in the schema but not reported. [Cluster status](../reference/cluster-status.md) defines each.
- **node lifecycle.** The join/leave progression of a `ValkeyNode`: `Joining` (being added to the Valkey cluster), `Active` (full member), `Leaving` (being drained and retired). Watching lifecycles is the practical way to observe a bootstrap or a rolling replacement; see the [`ValkeyNode` API reference](../reference/api/valkeynode.md).
- **forced settings.** Valkey configuration directives the operator injects into every node's rendered config, overriding any user-supplied value, because the cluster doesn't function without them. The exact list is in [Forced Valkey settings](../reference/forced-settings.md).
- **zone spread.** The per-shard topology spread constraint that spreads a shard's nodes across availability zones, strictly or best-effort depending on the configured mode. Configured through `placement`; see [Zone-aware placement](../operations/zone-aware-placement.md).

## Where to go next

- **New to Valkey?** Read [Data durability](../concepts/data-durability.md) first: it states the in-memory storage model and its consequences plainly. Then [Connecting to your cluster](../team-guide/connecting.md) for how clients are expected to behave.
- **New to the operator's model?** [Resource model](../concepts/resource-model.md) explains the five resources and the governance split; [Reconciliation](../concepts/reconciliation.md) explains how changes actually happen.
- **Ready to try it?** The [quickstart](quickstart.md) has you running a sharded cluster in roughly 20 minutes.
