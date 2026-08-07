---
title: ACLs
description: The structured ACL model, where bindings live, password rules and rotation, key access patterns, default-user semantics, and the reserved system users.
sidebar_position: 3
---

# ACLs

This page covers Valkey access control on clusters managed by the Momento Valkey Operator: the structured permission model, where user bindings are declared, password and rotation rules, and the default-user behavior every reviewer should understand before relying on it. It is written for platform teams authoring roles and product teams binding users.

## The structured model

No raw ACL strings exist anywhere in the API. Two pieces compose into the rendered Valkey ACL:

- **`ValkeyRole`**: a named, reusable set of command permissions; allow/deny rules on command categories (`@read`, `@write`, `@admin`, and so on) and on individual commands or subcommands. A role carries no key patterns, channel patterns, or passwords; those are supplied where the role is bound.
- **`AclBinding`**: attaches a username and password hashes to one or more roles, each scoped to specific key patterns (and optionally channel patterns). Bindings live in the `acl` field of a `ValkeyConfig` or a `ValkeyCluster`.

```yaml
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyRole
metadata:
  name: read-write
spec:
  categories:
    - name: read
      access: allow
    - name: write
      access: allow
```

```yaml
# on a ValkeyCluster, spec.acl:
acl:
  - username: app-user
    passwordHashes:
      - <sha256-hex-of-password>
    permissions:
      - roleRef: read-write
        keys:
          - pattern: "myapp:*"
            access: readwrite
```

## Where bindings live

Bindings can be declared at two levels:

| Level | Field | Scope |
|---|---|---|
| Platform | `ValkeyConfig.spec.acl` | Applies to every `ValkeyCluster` that references this config via `configRef`. |
| Team | `ValkeyCluster.spec.acl` | Applies to this cluster only. |

Cluster-level bindings are **additive** to config-level bindings: a product team can bind additional users without touching the platform config. They cannot, however, redefine a username the config already binds: a cluster-level binding whose `username` collides with a config-level binding is an error, and the cluster's reconciliation fails until the collision is removed.

Config-level ACLs use **replace, not merge**, through the config inheritance chain. When a `ValkeyConfig` sets `baseRef` to inherit from another config, the first config in the chain that sets its own `acl` field wins in full: its bindings are not merged with the base's, they replace them. A config that omits `acl` entirely inherits its base's bindings unchanged.

## Users and passwords

Username rules, enforced at admission:

- Usernames must match `[a-zA-Z0-9_-]+` (non-empty, no other characters).
- The `_momento_` prefix is reserved for the operator's own system users (below) and rejected on any user-defined binding.

Password rules:

- `passwordHashes` takes SHA-256 hashes, lowercase hex, exactly 64 characters each, never a plaintext password. Do not include the `#` prefix Valkey's ACL syntax uses; the operator adds it when rendering.
- A binding can hold up to eight hashes, which exist specifically to support rotation without downtime.

:::info
No field anywhere in the API accepts a plaintext password. If you need a hash, compute it yourself (`sha256sum`, a language standard library, and so on) before writing the manifest.
:::

### Password rotation procedure

1. Add the new hash to `passwordHashes` alongside the existing one (a binding can hold up to eight).
2. Update your application's credentials to the new password once the binding has propagated (see [Propagation](#propagation) below).
3. Remove the old hash from `passwordHashes`.

Both hashes authenticate simultaneously while both are present, which is what makes the rollover non-disruptive.

## Key access patterns

Each entry in a permission's `keys` list carries a glob pattern and an access mode. The operator adds the Valkey ACL prefix for you. Do not include it in the pattern:

| `access` | Valkey ACL prefix | Meaning |
|---|---|---|
| `read` | `%R~` | Read-only access to matching keys. |
| `write` | `%W~` | Write-only access to matching keys. |
| `readwrite` | `~` | Full read/write access to matching keys. Default if `access` is omitted. |

`keys` is required on every permission entry: there is no default-open pattern. Channel patterns (for Pub/Sub) are optional and, when present, get the `&` prefix the same way.

## Permission semantics

A binding's `permissions` list can hold multiple entries, each referencing a `roleRef`:

- The **first** entry becomes the binding's root/base ACL permissions.
- Every **additional** entry becomes a parenthesized ACL selector, scoped to its own key and channel patterns: a way to grant a user broader command access on one key pattern and narrower access on another, all under one username.

## Default user

:::info
Whether the Valkey `default` user is open depends entirely on whether any ACL binding exists anywhere for the cluster, on the config or the cluster:

- **Zero bindings anywhere**: the `default` user is fully permissive (no password, all keys, all channels, all commands). This is the state of a freshly provisioned quickstart cluster: it is open to any client that can reach it on the network, with authentication providing no protection.
- **Any binding exists, anywhere, and none of them is named `default`**: the `default` user is disabled outright. Adding your **first** ACL user (even one scoped to a single application's keys) cuts off every unauthenticated client, including any tooling that was relying on the open default.

No intermediate, partially-restricted state exists for the default user. If you want the default user to remain usable alongside explicit bindings, bind it explicitly with its own restricted permissions.
:::

## System users

The operator provisions two reserved Valkey users on every cluster, appended after all user-defined bindings so they cannot be overridden:

| User | Commands | Purpose |
|---|---|---|
| `_momento_operator` | `+cluster +acl\|load +ping +info +config\|set` | The operator's own connection: topology commands, ACL reload, health checks, and TLS certificate reload. |
| `_momento_repl` | `+psync +replconf +ping +cluster\|syncslots` | Replication authentication between each primary and its replicas. |

Neither user can read or write application keys: their command sets are scoped to exactly what each function needs. Their password hashes are derived from the two passwords generated once into the `{cluster}-operator-auth` Secret at cluster creation.

:::warning
No rotation mechanism exists for the system users' passwords. Never delete the `{cluster}-operator-auth` Secret while the cluster exists: the operator and replication authenticate with the credentials in it, and it is not safely regenerable on a running cluster. See the [secret-material inventory](index.md#secret-material-inventory) for the full picture, including where the replication password also appears in plaintext.
:::

## Propagation

ACL changes reach nodes in two stages: kubelet propagates the updated ACL ConfigMap into each pod's mounted volume (typically up to about a minute), and a separate controller, ticking every 30 seconds, issues `ACL LOAD` on every running node once it sees the new file. `ACL LOAD` is atomic per node: if any rule in the file is invalid, that node keeps its previously loaded ACLs rather than applying a partial or broken set. A node that is temporarily unreachable does not block the rollout to the rest; it catches up on a later tick once it recovers.

## Invalid roleRef

Every `permissions[].roleRef` must name a `ValkeyRole` that exists. If it does not, the entire cluster's reconciliation fails: the operator cannot render the ACL ConfigMap without resolving every referenced role, so no other changes (scaling, upgrades, and so on) proceed either until the missing role is created or the reference is fixed. See [Troubleshooting](../operations/troubleshooting.md) for how this surfaces and how to recover.
