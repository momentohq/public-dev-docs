---
sidebar_label: Isolation
title: Isolation
description: Momento Cache isolates workloads at the Capacity Pool boundary.
unlisted: true
---

<!-- Projects: cache2/concepts/capacity-pool, cache2/concepts/database, cache2/capabilities/sizing-and-isolation-guidance -->

# Isolation

Momento Cache isolates workloads at the [Capacity Pool](/product/cache/concepts/capacity-pool) boundary. A pool is
dedicated to your account and does not share capacity with other tenants, so there are no
cross-tenant noisy neighbors at the pool level.

## Isolation is per pool, not per database

[Databases](/product/cache/concepts/database) on the same pool share that pool's compute and memory. They are
therefore subject to noisy-neighbor effects from each other. A Database that drives heavy load
can affect others on the same pool.

Plan your layout accordingly:

- Put workloads that must have sufficient resources onto **dedicated pools**.
- Pack workloads that tolerate sharing onto **one pool** to use its capacity efficiently.

## Guidance

- Use a dedicated pool for a latency-sensitive or business-critical workload.
- Group development, test, and low-traffic workloads onto a shared pool to control cost.
- Size a shared pool for the sum of its Databases' peaks, with headroom.
