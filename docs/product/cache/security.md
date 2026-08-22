---
sidebar_label: Security
title: Security
description: Transport security and credential management for Momento Cache — TLS connections, API keys, and connection credentials.
---

<!-- Projects: cache2/concepts/shared-gateway, cache2/constraints/database-fgac, cross-product/authentication, cross-product/roles-and-permissions -->

# Security

Momento Cache has two credentialed surfaces: the **control plane**, where you manage Capacity Pools and
Databases, and the **data plane**, where clients connect to a Database and run commands. Both are reached
over TLS and both authenticate with Momento credentials. This page covers transport security and how to
manage the credentials that reach each surface.

Authentication and authorization are a cross-product concern. This page covers what applies to Momento
Cache; the full credential and permission model lives under
[Platform · Authentication](/platform/authentication).

## Transport security

All client traffic reaches a Database through the [shared gateway](/product/cache/concepts/connectivity-and-gateway),
which terminates TLS at the edge:

- Clients connect on port `6379` with TLS enabled. The port is configurable, but TLS is always in force.
- TLS is terminated at the gateway. The gateway does not require client certificates, so there is no
  mutual-TLS setup: a client presents its credential with the Valkey `AUTH` command over the encrypted
  connection.
- Configure the client for **standalone** mode, not cluster mode. The gateway presents the backing
  cluster as a single node.

Control-plane API calls are likewise made over HTTPS to the region endpoint. See
[Connect a client](/product/cache/connect/clients) for per-client connection examples.

## Credentials

Two kinds of credential reach the two surfaces:

- **Control-plane requests** send a Momento API Key in the `Authorization` header. Generate a key in the
  [Momento console](https://console.gomomento.com/key). The key authenticates every Capacity Pool and
  Database management call.
- **Data-plane connections** authenticate with `AUTH <username> <password>`, where the **username is the
  Database name** and the **password is a Momento API token**. The username fixes the Database for the
  connection; there is no `SELECT` to switch Databases on an open connection.

Both surfaces accept the same family of Momento credentials, described next.

## Database command permissions

A credential can grant read, write, or read-and-write command access to every Database or to one
named Database. The exact Database permission JSON and system-role grants are documented in
[Roles and permissions](/platform/authentication/roles-and-permissions#momento-cache-database-permissions).
Database permissions do not support key or key-prefix selectors.

The gateway checks two separate boundaries when you run a command:

1. The Database command allowlist determines whether Momento Cache supports the command. A command
   outside the allowlist returns `-Command not allowed`.
2. For an allowlisted, modeled command, the credential must have the required Database permission.
   A permission denial returns
   `-NOPERM this user has no permissions to run the '<command>' command`.

Read commands require `read`, write commands require `write`, and commands classified as both
require both permissions in one matching named-Database or all-Databases rule. A no-keyspace
command still requires a rule that matches the connected Database.

Authentication binds the connection to the Database named in the `AUTH` username. Authorization
evaluates the credential against that same Database; it does not switch the connection to a
different Database.

## Managing credentials

Momento supports two credential types, which differ in lifetime and in how you manage them:

- **API keys** are long-lived credentials. Modern Global API Keys are issued centrally, are valid in every
  region, and are individually trackable and revocable. Each key is bound to a role that determines what it
  can do.
- **Disposable tokens** are short-lived credentials that carry their permissions inline and must expire.
  Use them to hand a narrowly-scoped, self-expiring credential to a client rather than distributing a
  long-lived key.

You can list your outstanding API keys, inspect an individual key, and revoke a key. Revoking a key stops
it from authenticating. Key management is a control-plane operation; see
[Platform · Authentication](/platform/authentication/api-keys) for the full key lifecycle, and
[roles and permissions](/platform/authentication/roles-and-permissions) for how a credential's role
determines its access.

### Recommended practices

- Give each application its own credential so you can revoke one without disrupting the others.
- Prefer short-lived disposable tokens for clients you cannot fully trust, and reserve long-lived API keys
  for backend services and automation.
- Store credentials in a secret manager rather than in source control or images, and rotate them on a
  regular schedule by issuing a replacement and revoking the old credential.
