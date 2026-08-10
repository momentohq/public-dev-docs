---
title: API reference overview
description: The five custom resources served by the Momento Valkey Operator, with conventions for reading the per-resource reference pages.
sidebar_position: 1
---

# API reference overview

This section documents every custom resource served by the Momento Valkey Operator: each field, its type, defaults, and the validation the API server enforces. It describes the API shipped with operator release v0.6.0.

All five resources belong to API group and version `valkey.gomomento.com/v1alpha1`. None define short names, so use the full resource name with `kubectl` (for example, `kubectl get valkeyclusters`).

## The five resources

| Kind | Scope | Who touches it | Purpose |
|---|---|---|---|
| [`ValkeyImage`](valkeyimage.md) | Cluster | Platform team | Allowlist entry for a permitted Valkey container image. |
| [`ValkeyConfig`](valkeyconfig.md) | Cluster | Platform team | A menu item defining how Valkey nodes are configured (image, resources, settings, platform ACLs), with inheritance via `baseRef`. |
| [`ValkeyRole`](valkeyrole.md) | Cluster | Platform team | Reusable set of Valkey ACL command and category permissions, referenced from ACL bindings. |
| [`ValkeyCluster`](valkeycluster.md) | Namespaced | Product team | The provisioning interface: picks a config from the menu and declares topology, placement, TLS, and per-cluster ACLs. |
| [`ValkeyNode`](valkeynode.md) | Namespaced | Operator only (read-only for users) | Operator-internal representation of a single Valkey cluster member. |

For an explanation of why the API is split this way and how the cluster-scoped menu resources implement governance, see [Resource model](../../concepts/resource-model.md).

## Conventions on these pages

- **Required**: `Yes` means the API server rejects a manifest that omits the field. `No` means the field is optional.
- **Default**: the value applied when the field is omitted, where the schema defines one. `—` means no default: an omitted optional field is absent.
- **Validation**: constraints the API server enforces at admission: enum values (shown with their exact serialized casing), numeric ranges, length limits, and admission rules (Kubernetes validation expressions) described in plain language. A manifest that violates any of them is rejected on create or update.
- **Nested types**: object-valued fields are documented in their own sub-sections, with an "Appears in" line listing every field that uses them.
- Field names are the exact serialized names you write in YAML. Casing matters: for example `configRef`, not `configref`.
