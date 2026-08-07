---
title: Frequently asked questions
description: Short answers to the questions evaluators and new users ask most, each linking to the page that covers the topic in full.
sidebar_position: 3
---

# Frequently asked questions

Short answers to the questions platform engineers ask when evaluating the Momento Valkey Operator, each with a pointer to the page that treats the topic fully. If you're starting from zero, the [overview](../index.md) and [glossary](../getting-started/glossary.md) are better entry points.

## Running an in-memory store on Kubernetes

### Is it safe to run an in-memory datastore on Kubernetes?

Yes, with the right expectations: durability comes from replication, failover, and zone placement, not from disks. Pods use ephemeral storage, so any single pod's data survives only as long as a replica holds a copy. [Data durability](../concepts/data-durability.md) states the exact loss semantics per failure event; size your `replicasPerShard` and placement accordingly.

### What exactly is lost when a pod dies?

It depends on the pod's role. A lost replica costs nothing; a lost primary with a surviving replica costs at most the writes in replication lag at the moment of failure; a lost primary with no replica costs that shard's entire dataset, and the operator recreates the shard empty. [Data durability](../concepts/data-durability.md) has the full table, and [Failure modes](../operations/failure-modes.md) covers what the operator does in each case.

### Why is there no backup or persistence option?

The operator runs Valkey as an in-memory tier by design: nothing is written to persistent volumes, so there is nothing to snapshot. If your workload cannot tolerate the loss semantics above, it needs a durable system of record behind the cache. For where the product is headed, see the [roadmap](../roadmap.md).

## The operator

### What happens if the operator itself goes down?

Your Valkey clusters keep serving traffic: the operator is not on the data path, and Valkey's own failover still protects shards that hold quorum. What stops is convergence, so scaling, upgrades, node replacement, and ACL and TLS propagation wait until the operator returns. [Failure modes](../operations/failure-modes.md) covers this row in detail, and [Monitoring](../platform-guide/monitoring.md) covers how to alert on it.

### Why does the operator manage bare pods instead of StatefulSets?

Cluster-topology-aware operations (replace-before-retire, exactly one failover per shard, topology-ordered replacement) need decisions that generic pod controllers can't express. The visible consequences (random pod name suffixes, `restartPolicy: Never`, no PodDisruptionBudgets) each have a documented stand-in. [Pod management](../concepts/pod-management.md) makes the full argument.

### Why are images, configs, and roles cluster-scoped resources?

Cluster scoping is the governance mechanism: the platform team holds write access to the menu, product teams get read-only visibility plus write access to `ValkeyCluster` in their own namespaces, and plain Kubernetes RBAC enforces the whole model with no admission webhooks or policy engine. [Resource model](../concepts/resource-model.md) explains the design; [Multi-tenancy and RBAC](../platform-guide/multi-tenancy-and-rbac.md) has the onboarding manifests.

### Does the operator call home or depend on any external service?

No. Every connection the operator makes stays inside the Kubernetes cluster: the API server, the Valkey pods it manages, and cluster DNS. It exposes no endpoints of its own. [Networking and ports](../security/networking.md) is the complete connection matrix.

### Can I run more than one cluster in a namespace?

Yes. `ValkeyCluster` is namespaced and nothing limits the count per namespace; each cluster gets its own Service, Secret, ConfigMaps, and nodes. See [Provisioning a cluster](../team-guide/provisioning.md).

## Day-2 operations

### Why can't I add TLS to an existing cluster?

The TLS choice is immutable after creation, enforced by schema validation: converting a running cluster between plaintext and TLS-only would require a coordinated restart of every node across a mode boundary the operator does not manage. Decide at provisioning time; [TLS](../security/tls.md) and [Provisioning](../team-guide/provisioning.md#create-time-decisions) both flag this.

### Why is Valkey 9 the version floor?

Shard rebalancing uses Valkey 9's atomic slot-migration commands, so scaling shards on an older image fails. The operator does not enforce the floor at admission; an older image bootstraps and then breaks at the first reshard. [Compatibility](compatibility.md) owns the version floors and their reasons.

### What actually happens during an engine upgrade?

Repointing a config at a new image rolls every referencing cluster, one shard at a time per cluster: a new-image replica joins, the primary fails over to it, and the old node retires. Expect one client-visible failover per shard. [Managing Valkey upgrades](../platform-guide/valkey-upgrades.md) covers pacing, blast radius, and the staged-rollout pattern.

### What if someone changes settings directly with CONFIG SET?

The operator neither detects nor reverts runtime config changes: a manual `CONFIG SET` lasts until the pod is next replaced, then silently disappears. The exception is ACLs, which the operator reconverges continuously, wiping manual ACL edits on its next pass. [Changing configuration](../team-guide/changing-configuration.md#manual-changes-on-live-nodes) states the full drift policy.

### How do I pause the operator during an incident?

There is no per-cluster pause. The only way to stop reconciliation is scaling the operator Deployment to zero, which halts convergence for the whole fleet while clusters keep serving. [Failure modes](../operations/failure-modes.md#halting-reconciliation-deliberately) covers when that fleet-wide trade-off is worth it.

### Why doesn't a dead pod restart?

Valkey pods run with `restartPolicy: Never`: a restarted container would rejoin with empty memory anyway, so the operator instead handles failover and replaces the pod as a new cluster member. [Pod management](../concepts/pod-management.md) explains the reasoning, and [Failure modes](../operations/failure-modes.md) shows the replacement flow per scenario.
