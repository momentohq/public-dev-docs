---
sidebar_label: Roles and permissions
title: Roles and permissions
description: How Momento authorizes what a credential can do — permission sets, system roles, and custom roles.
---

<!-- Projects: cross-product/roles-and-permissions, cross-product/credential-authorization-binding, cache2/constraints/database-fgac -->

# Roles and permissions

Authorization in Momento rests on one primitive: a **permission set**. A permission set is either
**super-user** (full access) or an **explicit** list of rules across resource families — account
management, auth management, resource management, Cache, Topic, Store, and Function — each granting
Read, Write, or List (or Invoke) as applicable.

Every **role** wraps a permission set, and every credential ultimately resolves to one.

## System roles

The console offers three predefined **system roles**:

- **Owner** — full access to account, auth, and resource management (a super-user). An account
  always has at least one Owner.
- **Operator** — read/write to auth and resource management, read-only to account management. This
  is the default role for a member.
- **Viewer** — read-only across account, auth, and resource management.

## Custom roles

Beyond the three system roles, an account can define **custom roles** with a fine-grained permission
set combining any of the rule families above. Custom roles are account-scoped, must be uniquely
named, and cannot be super-user. They are managed through the platform APIs.

## How credentials bind permissions

The two credential types bind permissions differently:

- An **[API key](./api-keys.md)** references a **role** by id — a system role or a custom role — and
  inherits that role's permission set.
- A **[token](./tokens.md)** embeds a permission set **inline** and cannot reference a custom role.

This means you manage an API key's access by changing or reassigning its role, while a token's access
is fixed at the moment it is created.

## Momento Cache Database permissions

A Database rule grants command access to every Momento Cache Database or to one named Database.
The rule belongs inside the `rules` array of an explicit permission set.

Grant read and write access to every Database:

```json
{
  "type": "database",
  "permissions": ["read", "write"],
  "databases": "*"
}
```

Grant read-only access to one Database:

```json
{
  "type": "database",
  "permissions": ["read"],
  "databases": { "name": "orders" }
}
```

The `permissions` array contains `"read"`, `"write"`, or both. The `databases` selector is either
`"*"` or an object with exactly one `name`. Database rules do not have a key or key-prefix
selector.

The gateway classifies each modeled command as read, write, read/write, or no-keyspace. A read/write
command requires both permissions in one rule that matches the connected Database. A no-keyspace
command still requires a matching Database rule, but that command class does not require read or
write specifically.

The system roles apply these Database permissions:

- **Owner** is a super-user and has full Database access.
- **Operator** has read and write access to every Database.
- **Viewer** has read access to every Database.

Custom roles and fine-grained disposable tokens use the same Database rule shape. See
[Momento Cache security](/product/cache/security#database-command-permissions) for the connection
boundary and denial behavior.
