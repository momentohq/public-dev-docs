---
title: Reference
description: "Lookup material for the Momento Valkey Operator: API schemas, status semantics, forced settings, labels, naming, and operator configuration."
sidebar_position: 1
---

# Reference

This section is lookup material for the Momento Valkey Operator: exact field schemas, enum values, injected settings, label keys, naming patterns, and configuration knobs. Come here when you know what you are looking for; for task-oriented walkthroughs, see the [platform team](../platform-guide/index.md) and [product team](../team-guide/index.md) guides.

All content in this section is verified against the generated `crds.json` for release v0.6.0.

## Pages

- **[API reference](api/index.md)** — one page per custom resource (`ValkeyImage`, `ValkeyConfig`, `ValkeyRole`, `ValkeyCluster`, `ValkeyNode`): field tables, validation rules, status schemas, printer columns, and worked examples.
- **[Cluster status](cluster-status.md)** — what each `ValkeyCluster` state means, how transitions happen, the `targetSpec` snapshot, and how to read `kubectl get` and `kubectl describe` output.
- **[Forced Valkey settings](forced-settings.md)** — the Valkey configuration directives the operator always injects into every node, the additional settings applied in TLS mode, and what happens to user-supplied settings.
- **[Labels, annotations, and naming](labels-annotations.md)** — the label taxonomy on operator-created resources, resource naming patterns, the reserved annotation prefix, and what is safe to build NetworkPolicies and monitoring selectors on.
- **[Operator configuration](operator-configuration.md)** — the `valkey-operator-config` ConfigMap, its environment variable mapping, and how to apply changes.
- **[Example manifests](examples.md)** — complete, runnable manifests for the common menu and cluster shapes, collected from across these docs.

## Conventions

- **API group and version.** Every custom resource uses `apiVersion: valkey.gomomento.com/v1alpha1`.
- **Field names** appear exactly as serialized in YAML (camelCase, for example `configRef`, `replicasPerShard`).
- **Enum values** are listed with their exact serialized casing. State and lifecycle values are PascalCase (`Creating`, `Active`); option values such as zone spread are camelCase (`bestEffort`, `required`).
- **Required** in a field table means the API server rejects a manifest that omits the field. **Validation** covers both schema constraints (types, ranges, item limits) and CEL admission rules; CEL rules are enforced at admission time, before the operator ever sees the object.
- **Examples** use the documentation-wide sample names: namespace `my-app`, cluster `my-cluster`, configs `standard` and `large`, image `valkey-9-0`.
- **Release pinning.** Version-specific artifacts reference release v0.6.0.
