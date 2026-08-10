---
title: Getting started
description: "Install the Momento Valkey Operator and run your first Valkey cluster: prerequisites, installation, and a hands-on quickstart."
sidebar_position: 1
---

# Getting started

This section takes you from an empty Kubernetes cluster to a running, sharded Valkey cluster managed by the Momento Valkey Operator. It is written for both personas: the platform team evaluating or installing the operator, and product teams who want to see a cluster working end to end.

Work through the first three pages in order:

- **[Prerequisites](prerequisites.md)** — version floors, required access, optional dependencies, and what the operator deliberately does not need. Includes a Pod Security Standards note you should read before choosing namespaces.
- **[Installation](installation.md)** — install the CRDs and the operator from the v0.6.0 release artifacts, understand what lands in your Kubernetes cluster, and verify the rollout.
- **[Quickstart](quickstart.md)** — the hands-on tutorial: register an image, define a config, provision a three-shard Valkey cluster, connect to it, scale it to four shards, and tear it down.
- **[Glossary](glossary.md)** — the Valkey terms and operator vocabulary these docs use, including the three meanings of the word "cluster". Keep it open in a tab if either Valkey or this operator is new to you.

Expect the prerequisites and installation pages to take a few minutes each; the quickstart is roughly 15 to 20 minutes at the keyboard, depending mostly on how fast your Kubernetes cluster pulls images and schedules pods.

:::note
The quickstart has you play both personas: registering menu resources as the platform team, then provisioning a cluster as a product team. In production these roles are separated by RBAC; see [Resource model](../concepts/resource-model.md).
:::

## Where to go next

- **Platform engineers**: after installing, curate your image and config menu in [Curating images and configs](../platform-guide/curating-images-and-configs.md) and onboard teams with [Multi-tenancy and RBAC](../platform-guide/multi-tenancy-and-rbac.md).
- **Product-team developers**: once the platform team has published a menu, start at [Provisioning a cluster](../team-guide/provisioning.md) and [Connecting to a cluster](../team-guide/connecting.md).
- **Still evaluating?** Read [Why this operator](../why-this-operator.md) and the [Concepts](../concepts/index.md) section, especially [Data durability](../concepts/data-durability.md), which states the in-memory storage model plainly.
