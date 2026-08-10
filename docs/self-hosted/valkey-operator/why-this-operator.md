---
title: Why this operator
description: The top factual benefits of the Momento Valkey Operator, grounded in shipped behavior.
sidebar_position: 2
---

# Why this operator

This page states the Momento Valkey Operator's top benefits factually, each grounded in behavior documented elsewhere in these docs. It does not compare against named products; where useful, it anchors a claim against typical expectations for operators of stateful systems on Kubernetes.

## Governance is built into the resource model, not bolted on

Many operators for stateful systems leave governance to whatever the platform team can construct externally: admission webhooks, a separate policy engine, or process discipline. This operator's governance is the resource model itself: an allowlist of permitted images, a curated menu of configuration profiles, and reusable ACL role definitions all live as cluster-scoped custom resources, readable by every namespace but writable only by the platform team. A product team's `ValkeyCluster` can only ever reference what the platform team has already published: there is no field where an unapproved image or setting could go. No admission webhook is required for this to hold. See [Resource model](concepts/resource-model.md).

## Direct pod management for topology-aware operations

Generic Kubernetes workload controllers reconcile a pod count against a template; they have no concept of shard membership, primary/replica role, or replication sync state. This operator manages pods directly so it can express operations that require that awareness: replacing a node only after its successor has joined and synced, and performing exactly one coordinated failover per shard during a rolling change, never more, never as a side effect of an unrelated pod restart. See [Pod management](concepts/pod-management.md).

## Explicit, deliberate engine versioning

Every image a cluster can run comes from the platform team's allowlist, and nothing in the operator initiates an engine upgrade on its own. A cluster moves to a different image only when what its config resolves to changes: the platform team repoints a `ValkeyConfig`'s `imageRef` or edits a registered `ValkeyImage`, or a product team switches its cluster to a different config from the approved menu. Every one of those is an explicit, auditable Kubernetes resource change made by a person; none happens automatically. See [Managing Valkey upgrades](platform-guide/valkey-upgrades.md).

## No cap on clusters per namespace

A namespace can hold any number of `ValkeyCluster` resources. Product teams are free to organize clusters (one per application, one per environment, or any other scheme) without the operator itself imposing a one-cluster-per-namespace ceiling, which is a real constraint some operators for stateful systems apply. See [Provisioning a cluster](team-guide/provisioning.md).

## TLS-only mode and structured ACLs

A Valkey cluster can run TLS-only, encrypting client traffic, replication, and the cluster bus, with the plaintext port closed entirely. Access control is expressed structurally (reusable permission roles, key-pattern scoping, and password-hash rotation) rather than as hand-assembled ACL strings a platform team has to get right by hand on every cluster. See [Security](security/index.md).

## Zone-aware placement with hard per-shard guarantees

With required zone spread, every shard's members are guaranteed to land across distinct availability zones (a hard constraint enforced by Kubernetes scheduling, not a best-effort preference), so a single zone failure cannot, by construction, take out both a shard's primary and all its replicas. See [Zone-aware placement](operations/zone-aware-placement.md).

## Predictable, observable reconciliation

Where many controllers reconcile by re-evaluating and applying a full desired state, this operator takes at most one corrective action per reconciliation pass, then requeues. A cluster's formation is snapshotted into `status.targetSpec`, and every node's join/leave progress is visible through its `ValkeyNode` resource, so a platform team can watch a change happen step by step rather than treating the operator as a black box. This bounds the blast radius of any single mistake or fault to one small step. See [Reconciliation](concepts/reconciliation.md).

## An honest operations story

Operators for stateful systems on Kubernetes often stay quiet about what happens to data when things go wrong, leaving teams to discover the answer during an incident. This operator's documentation states the storage model plainly: Valkey clusters are in-memory, and durability comes from replication, failover, and placement, not from disks. Exactly which failure events lose data, and which don't, is written down rather than implied. For a team evaluating a system that will hold production data, that itself is a benefit: what you read here is what you will observe in production, with no gap between the two. See [Data durability](concepts/data-durability.md).
