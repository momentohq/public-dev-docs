---
sidebar_label: Limits
title: Service limits
description: Default Capacity Pool and Database limits for Momento Cache.
---

<!-- Projects: cache2/constraints/service-limits, cache2/concepts/capacity-and-usage -->

# Service limits

Momento Cache applies the following default limits during limited preview:

| Scope | Default limit |
| --- | ---: |
| Total Capacity Pool capacity per account | 500 GiB |
| Databases per account | 100 |
| Databases per Capacity Pool | 100 |

Contact Momento if you need an increase to an account limit. A limit error identifies the
configured limit and the capacity or Database count involved.

## Capacity limit and usage

The 500 GiB limit is an admission limit on Pool capacity. Pool capacity is the configured Valkey
`maxmemory` on each primary shard multiplied by the number of primary shards. Replicas do not add
Pool capacity.

Admission capacity is not billable usage. Momento Cache (Flex) usage includes deployed
`maxmemory` on primary and replica nodes. Momento Cache (Cluster) usage is based on deployed
instance types and counts. See [Provisioning and sizing](/product/cache/concepts/provisioning-and-sizing)
for the capacity and usage model.

If a Pool create or capacity-increasing update would exceed the account limit, reduce the requested
capacity or contact Momento about an increase. If a Database create would exceed either Database
limit, remove an unused Database or contact Momento about an account-limit increase.
