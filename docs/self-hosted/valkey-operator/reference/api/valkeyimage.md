---
title: ValkeyImage
description: Reference for the ValkeyImage custom resource, the cluster-scoped allowlist of permitted Valkey container images.
sidebar_position: 2
---

<!-- Projects: self-hosted-operator-operations, self-hosted-operator-capabilities -->

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
| `tag` | string | Yes | — | none | Container image tag, for example `9.0.1`. |
| `version` | string | Yes | — | Full MAJOR.MINOR.PATCH, at least 9.0.1. | The Valkey version the image provides, for example `9.0.1`. Older declared versions are rejected at admission. |

The operator resolves a cluster's image at reconcile time by following `ValkeyCluster.spec.configRef` to a `ValkeyConfig`, then the config's `imageRef` to a `ValkeyImage`. If the referenced `ValkeyImage` does not exist, resolution fails and the cluster does not progress. This is where the allowlist is enforced.

The operator checks the running binary against the supported version floor before a node joins. An image containing an older binary causes provisioning to report Failed with a message, even if its declared version passes admission. See [Compatibility](../../support/compatibility.md).

A ValkeyImage referenced by a ValkeyConfig is protected from deletion. A delete request marks it for deletion; it is released only after the last referencing config is gone.

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
  tag: "9.0.1"
  version: "9.0.1"
```
