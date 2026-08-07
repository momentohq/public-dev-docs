---
title: Concepts
description: "How the Momento Valkey Operator is designed: its resource model, runtime architecture, reconciliation behavior, pod management, and data durability model."
sidebar_position: 1
---

# Concepts

This section explains how the Momento Valkey Operator works and why it is designed the way it is. Read it when you want to understand the system. For step-by-step instructions, use the [platform team guide](../platform-guide/index.md) and [product team guide](../team-guide/index.md).

The pages build on each other, but each stands alone:

- **[Resource model](resource-model.md)** — the five custom resources, why the model is split into a cluster-scoped "menu" (images, configs, roles) and namespaced clusters, and how that split gives platform teams governance through nothing more than Kubernetes RBAC. Start here.
- **[Architecture](architecture.md)** — the runtime picture: a single operator deployment running four independent control loops, the chain of Kubernetes objects it creates and owns, how clients discover cluster topology, and what the operator deliberately does not manage.
- **[Reconciliation](reconciliation.md)** — the cluster state machine, the `targetSpec` snapshot semantics, and the one-action-per-tick model that makes every change observable and bounded in blast radius. Owns the canonical table of which spec changes trigger a rolling replacement.
- **[Pod management](pod-management.md)** — why the operator manages bare pods directly instead of using StatefulSets or Deployments, and what an experienced Kubernetes user will notice as a result.
- **[Data durability](data-durability.md)** — the storage model stated plainly: Valkey data is in-memory, and durability comes from replication, failover, and placement, not from disks. Read this before making availability promises to your users.

:::note
Concepts pages describe behavior; they do not walk through tasks. Where a task exists, the page links to the relevant guide.
:::
