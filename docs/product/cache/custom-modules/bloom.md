---
sidebar_label: Bloom
title: Bloom module
description: Probabilistic membership checks, false-positive tradeoffs, and key Valkey Bloom commands.
---

<!-- Projects: cache2/capabilities/custom-modules -->

# Bloom module

Valkey Bloom provides compact filters for probabilistic membership checks.
Use it to check whether an item might be present before consulting an exact data store.

Confirm the module configuration and required commands with your account support representative
when arranging [deployment with Momento Cache](/product/cache/custom-modules#arrange-deployment).

## Features

- Add individual items or batches to a filter.
- Check possible membership for one or more items.
- Configure the false-positive rate and initial capacity when creating a filter.

Scaling filters can expand as you add items. Non-scaling filters have a fixed capacity and reject
new item additions when full. Review capacity and scaling configuration with your support representative.

## Membership results and use cases

A negative membership result means the item is absent from that filter.
A positive result means the item might be present; false positives are possible.
Verify positive results against authoritative data whenever you need an exact membership decision.

Skip exact lookups on negative results only when the filter contains every relevant item from
your authoritative data store.
For duplicate screening, treat a positive result as a duplicate candidate and verify it in your
authoritative data store before discarding the item.

## Key commands

Use these Valkey Bloom commands to identify the operations your application needs.

| Command | Purpose |
| --- | --- |
| [`BF.RESERVE`](https://valkey.io/commands/bf.reserve/) | Create a filter with a chosen capacity and false-positive rate. |
| [`BF.ADD`](https://valkey.io/commands/bf.add/) | Add one item to a filter. |
| [`BF.MADD`](https://valkey.io/commands/bf.madd/) | Add multiple items to a filter. |
| [`BF.EXISTS`](https://valkey.io/commands/bf.exists/) | Check possible membership for one item. |
| [`BF.MEXISTS`](https://valkey.io/commands/bf.mexists/) | Check possible membership for multiple items. |
| [`BF.INSERT`](https://valkey.io/commands/bf.insert/) | Add items with filter-creation options. |
| [`BF.INFO`](https://valkey.io/commands/bf.info/) | Inspect filter properties and usage. |
| [`BF.CARD`](https://valkey.io/commands/bf.card/) | Read the number of items successfully added to a filter. |

## Further reading

- [Valkey Bloom overview](https://valkey.io/topics/bloomfilters/): membership semantics and filter behavior.
- [BF.RESERVE reference](https://valkey.io/commands/bf.reserve/): false-positive rate, capacity, and scaling options.
- [BF.EXISTS reference](https://valkey.io/commands/bf.exists/): membership results and false positives.
- [BF.INFO reference](https://valkey.io/commands/bf.info/): filter properties and usage.
