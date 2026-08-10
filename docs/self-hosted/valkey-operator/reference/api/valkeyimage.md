---
title: ValkeyImage
description: Reference for the ValkeyImage custom resource, the cluster-scoped allowlist of permitted Valkey container images.
sidebar_position: 2
---

# ValkeyImage

`ValkeyImage` registers a Valkey container image the Momento Valkey Operator is allowed to run. It is the allowlist: if no `ValkeyImage` exists for an image, no `ValkeyCluster` can use it. Platform teams manage these resources; see [Curating images and configs](../../platform-guide/curating-images-and-configs.md) for the workflow.

## Resource metadata

| | |
|---|---|
| API group/version | `valkey.gomomento.com/v1alpha1` |
| Kind | `ValkeyImage` |
| Plural | `valkeyimages` |
| Scope | Cluster |

## Spec

| Field | Type | Required | Default | Validation | Description |
|---|---|---|---|---|---|
| `repository` | string | Yes | — | none | Container image repository, for example `valkey/valkey`. |
| `tag` | string | Yes | — | none | Container image tag, for example `9.0.0`. |
| `version` | string | Yes | — | none | The Valkey version the image provides, for example `9.0.0`. |

The operator resolves a cluster's image at reconcile time by following `ValkeyCluster.spec.configRef` to a `ValkeyConfig`, then the config's `imageRef` to a `ValkeyImage`. If the referenced `ValkeyImage` does not exist, resolution fails and the cluster does not progress. This is where the allowlist is enforced.

:::note
Shard scaling uses server-side slot migration commands that require Valkey 9 or later. Unless a cluster will never be resharded, register Valkey 9+ images. See [Compatibility](../../support/compatibility.md).
:::

## Status

`ValkeyImage` has a status subresource, but it defines no fields today.

## Printer columns

`kubectl get valkeyimages` shows:

| Column | Source |
|---|---|
| `Repository` | `.spec.repository` |
| `Tag` | `.spec.tag` |
| `Version` | `.spec.version` |

## References and referenced by

- Referenced by [`ValkeyConfig`](valkeyconfig.md) via `spec.imageRef`. A config may also inherit its image from a base config's `imageRef`.
- References no other resources.

## Example

A `ValkeyImage` for the `valkey-9-0` image:

```yaml
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyImage
metadata:
  name: valkey-9-0
spec:
  repository: valkey/valkey
  tag: "9.0.0"
  version: "9.0.0"
```
