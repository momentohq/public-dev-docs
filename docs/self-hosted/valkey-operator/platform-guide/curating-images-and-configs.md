---
title: Curating images and configs
description: "How to build the platform menu: register allowlisted images, author base and variant configs with baseRef inheritance, and size resources safely."
sidebar_position: 2
---

<!-- Projects: self-hosted-operator-operations, self-hosted-operator-capabilities -->

# Curating images and configs

This guide walks through building the menu product teams choose from with the Momento Valkey Operator. It covers registering allowlisted Valkey images with `ValkeyImage`, and authoring a `ValkeyConfig` catalog, including base-and-variant configs via `baseRef`. It is for platform teams; product teams only read what you publish here.

## Register an allowlisted image

A `ValkeyImage` is not a convenience alias; it is the allowlist. If no `ValkeyImage` exists for a given image, no `ValkeyConfig` can reference it, and no cluster can run it.

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

Apply one `ValkeyImage` per version you are willing to run.

### What the operator validates, and what it trusts

The image must be registered, and its version must be full MAJOR.MINOR.PATCH and at least 9.0.1. Older declared versions are rejected at admission. The operator also checks the running binary against the floor before a node joins; an unsupported binary causes creation to report Failed.

Register exact, pinned tags of images you have verified meet the [Valkey version floor](../support/compatibility.md). Avoid mutable tags such as latest, which can change the binary on the next pod replacement.

The operator also sets no `imagePullPolicy` and no `imagePullSecrets` on the pods, so kubelet defaults apply. If your images live in a private registry, supply pull credentials through the tenant namespace's default ServiceAccount or your nodes' registry configuration.

A ValkeyImage referenced by a ValkeyConfig is protected from deletion. A delete request marks it for deletion, but release waits until the last referencing config is gone. Migrate clusters to replacement configs and retire the old configs before retiring their image.

## Author a base config

A `ValkeyConfig` bundles an image reference, resource sizing, Valkey settings, and platform-level ACL bindings into a named menu item:

```yaml
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyConfig
metadata:
  name: standard
spec:
  imageRef: valkey-9-0
  resources:
    cpu: "1"
    memory: "2Gi"
  valkey:
    maxmemory: "1500mb"
    maxmemory-policy: "allkeys-lru"
```

Product teams reference this by name in `ValkeyCluster.spec.configRef`; they cannot set an image, a resource size, or a Valkey setting directly. See [Resource model](../concepts/resource-model.md) for why the split exists.

## Build variants with baseRef

Use `baseRef` to derive size or purpose variants from a common base without repeating settings:

```yaml
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyConfig
metadata:
  name: large
spec:
  baseRef: standard
  resources:
    cpu: "4"
    memory: "16Gi"
  valkey:
    maxmemory: "12gb"
```

Resolution follows a fixed set of rules, walked from the selected config toward its root:

- **Whole-field overrides.** `imageRef`, `resources.cpu`, and `resources.memory` are replaced outright by whichever config in the chain sets them first, walking child to parent. `large` above sets both `cpu` and `memory`; a variant that only set `memory` would keep the base's `cpu`.
- **`imageRef` can come entirely from the base.** A derived config does not need to set `imageRef` at all: `large` inherits `valkey-9-0` from `standard`. It must be set somewhere in the chain, or resolution fails and every cluster using the config stops progressing.
- **The `valkey` map merges per key.** `large` overrides `maxmemory` but keeps `maxmemory-policy: allkeys-lru` from `standard`, because it never sets that key. This is the one field that merges rather than replaces: unset keys survive from the parent.
- **`acl` replaces, it does not merge.** The first config in the chain that sets `acl` supplies the complete binding list for every config below it. A variant that sets its own `acl` block replaces the base's bindings entirely, not adds to them; a variant that omits `acl` inherits the base's bindings unchanged. See [ACLs](../security/acls.md) for how these compose with cluster-level bindings.
- **Chains resolve up to 10 configs deep.** A longer chain (including an accidental cycle) fails resolution.

Config resolution runs on every reconcile, not once at admission: editing a base config or the image it points to re-resolves every config and cluster downstream of it. See [Managing Valkey upgrades](valkey-upgrades.md) for what that means when the change is an image bump.

## Resources vs. maxmemory headroom

`resources.cpu` and `resources.memory` set both the request and the limit on the Valkey container. Leave headroom between `resources.memory` and the `valkey.maxmemory` setting: Valkey needs memory beyond the keyspace for connection buffers, replication backlogs, and fork-based persistence operations. A pod that hits its memory limit is killed outright rather than gracefully degraded. See [Sizing](../operations/sizing.md) for concrete headroom guidance and the risk of omitting `resources` entirely.

## What curated configs cannot override

A fixed set of Valkey settings (cluster mode, the client port, file paths, replication identity, and more) is injected by the operator after your config resolves. It always wins over anything in the `valkey` map. Design your menu around this: don't spend menu space trying to set `cluster-enabled` or `port`. Authentication directives (including requirepass and primaryauth), ACL directives (aclfile and user), TLS directives (tls-*), and include are rejected at admission. Review other ordinary Valkey settings before publishing a config. See [Forced settings](../reference/forced-settings.md) for the exact list.

## Menu design patterns

Two patterns cover most fleets:

- **T-shirt sizes.** Publish a base config with shared settings, then thin variants that only override `resources`: `standard` and `large` above are the minimal version of this. Add more sizes as needed; each is a few lines of `baseRef` and a resource override.
- **Dev vs. prod menus.** Maintain separate config trees per environment class rather than one config shared across dev and prod namespaces: a dev tree with smaller resources and a permissive `maxmemory-policy`, and a prod tree with production sizing and ACLs bound at the config level. Since `ValkeyConfig` is cluster-scoped, both trees live side by side. A namespace's RBAC does not restrict which configs it can read, only whether it can act on that read (see [Multi-tenancy and RBAC](multi-tenancy-and-rbac.md)). Naming conventions, for example `dev-standard` and `prod-standard`, are what keep the menu legible, not access control.

Keep the menu small. Every config you publish is something product teams can select immediately and something you commit to keeping current. See [Managing Valkey upgrades](valkey-upgrades.md) for what changing a widely-referenced config triggers.
