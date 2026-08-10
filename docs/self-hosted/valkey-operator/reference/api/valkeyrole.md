---
title: ValkeyRole
description: Reference for the ValkeyRole custom resource, a reusable set of Valkey ACL command and category permissions.
sidebar_position: 4
---

# ValkeyRole

`ValkeyRole` defines a reusable set of command and category permissions for the Valkey ACLs the Momento Valkey Operator manages. Roles contain only command-level rules; key patterns, channel patterns, and passwords are supplied where a role is bound: in the `acl` field of a [`ValkeyConfig`](valkeyconfig.md) or [`ValkeyCluster`](valkeycluster.md). Platform teams manage roles; see [ACLs](../../security/acls.md) for how roles, bindings, and users fit together.

## Resource metadata

| | |
|---|---|
| API group/version | `valkey.gomomento.com/v1alpha1` |
| Kind | `ValkeyRole` |
| Plural | `valkeyroles` |
| Scope | Cluster |

## Spec

| Field | Type | Required | Default | Validation | Description |
|---|---|---|---|---|---|
| `categories` | array of [`CategoryRule`](#categoryrule) | No | — | Max 64 entries. | Rules for Valkey command categories such as `all`, `read`, `admin`. Do not include the `@` prefix: the operator adds it. |
| `commands` | array of [`CommandRule`](#commandrule) | No | — | Max 256 entries. | Rules for individual Valkey commands. |

### CategoryRule

Appears in: [`spec.categories`](#spec).

| Field | Type | Required | Default | Validation | Description |
|---|---|---|---|---|---|
| `name` | string | Yes | — | Max length 64. Admission rule: must start with a letter and contain only letters, digits, hyphens, and underscores (`^[a-zA-Z][a-zA-Z0-9_-]*$`). | Category name without the `@` prefix, for example `all`, `read`, `admin`. |
| `access` | string (enum) | Yes | — | One of `allow`, `deny`. | Whether to allow or deny commands in this category. |

### CommandRule

Appears in: [`spec.commands`](#spec).

| Field | Type | Required | Default | Validation | Description |
|---|---|---|---|---|---|
| `name` | string | Yes | — | Max length 64. Admission rule: must start with a letter and match `^[a-zA-Z][a-zA-Z0-9_-]*$`. | Command name, for example `get`, `cluster`, `debug`. |
| `subcommand` | string | No | — | Max length 64. Admission rule: when present, must start with a letter and match `^[a-zA-Z][a-zA-Z0-9_-]*$`. | Optional subcommand: for example `info` to target `cluster\|info`. |
| `access` | string (enum) | Yes | — | One of `allow`, `deny`. | Whether to allow or deny this command. |

## Status

`ValkeyRole` has a status subresource, but it defines no fields today.

## Printer columns

`kubectl get valkeyroles` shows only the standard `Age` column (from `.metadata.creationTimestamp`).

## References and referenced by

- References no other resources.
- Referenced by ACL bindings on [`ValkeyConfig`](valkeyconfig.md) and [`ValkeyCluster`](valkeycluster.md) via `spec.acl[].permissions[].roleRef`.

## Example

A role granting read and write data access, permitting `cluster|info`, and explicitly denying `flushall`:

```yaml
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyRole
metadata:
  name: app-readwrite
spec:
  categories:
    - name: read
      access: allow
    - name: write
      access: allow
  commands:
    - name: cluster
      subcommand: info
      access: allow
    - name: flushall
      access: deny
```
