---
title: Forced Valkey settings
description: The Valkey configuration directives the operator always injects, the additional TLS-mode settings, and how they interact with user-supplied settings.
sidebar_position: 3
---

# Forced Valkey settings

The Momento Valkey Operator injects a fixed set of Valkey configuration directives into every node it creates, regardless of what the `valkey` map in the resolved `ValkeyConfig` specifies. This page lists every injected setting and its value, so platform teams know exactly which parts of the node configuration are operator-owned.

Forced settings are applied last during configuration resolution, so a user-supplied value for any of these keys never takes effect. They are baked into each node's rendered configuration file at node creation time; because node specs are immutable, a change to any effective Valkey setting rolls the cluster onto replacement nodes; see the [change-impact table](../concepts/reconciliation.md).

## Base settings (always injected)

| Setting | Value | Why it is forced |
|---|---|---|
| `cluster-enabled` | `yes` | The operator manages Valkey exclusively in cluster mode; every managed node must participate in the cluster protocol. |
| `cluster-node-timeout` | `5000` | Fixes the failure-detection window at 5 seconds. The operator's failover handling is built around this value; a user-tuned timeout would change failover behavior underneath it. |
| `cluster-config-file` | `/var/lib/valkey/nodes.conf` | Pins the cluster state file to the node's data volume, where the operator expects it. |
| `dir` | `/var/lib/valkey` | Fixes the working directory to the node's data volume. |
| `port` | `6379` | The client port must match the per-cluster Service, the liveness probe, and the operator's own connections. (Superseded in TLS mode; see below.) |
| `bind` | `0.0.0.0` | Nodes must accept connections on their pod IP so clients, cluster peers, and the operator can reach them. |
| `protected-mode` | `no` | Protected mode rejects non-loopback connections, which would break all pod-network access. ACLs provide access control instead. |
| `aclfile` | `/etc/valkey/acl/users.acl` | Points Valkey at the ACL file the operator renders and mounts from the cluster's ACL ConfigMap. |
| `primaryuser` | `_momento_repl` | Replicas authenticate to their primary as the operator-managed replication user. See [ACLs](../security/acls.md) for the system users. |

## Dynamically managed: primaryauth

In addition to the fixed table above, the operator injects `primaryauth <replication-password>` into every node's configuration file when it renders the node's ConfigMap. The value is the replication password generated in the cluster's `{cluster}-operator-auth` Secret, and it appears in **plaintext** in each node's `{node}-config` ConfigMap. Read access to ConfigMaps in a cluster's namespace is therefore credential-equivalent; see [RBAC](../security/rbac.md).

## TLS-mode settings

When `spec.tls` is set on a `ValkeyCluster`, the operator additionally injects the following into every node. These are applied after the base settings, so `port 0` overrides the forced `port 6379`: the plaintext port is closed and the cluster is TLS-only.

| Setting | Value | Why it is set |
|---|---|---|
| `port` | `0` | Closes the plaintext client port entirely; a TLS cluster accepts no unencrypted connections. |
| `tls-port` | `6379` | Serves TLS on the standard port, so Service definitions and client configuration keep the same port number. |
| `tls-cluster` | `yes` | Encrypts the cluster bus (node-to-node gossip and topology traffic). |
| `tls-replication` | `yes` | Encrypts replication traffic between primaries and replicas. |
| `tls-cert-file` | `/etc/valkey/tls/tls.crt` | Certificate from the mounted TLS Secret. |
| `tls-key-file` | `/etc/valkey/tls/tls.key` | Private key from the mounted TLS Secret. |
| `tls-ca-cert-file` | `/etc/valkey/tls/ca.crt` | CA bundle from the mounted TLS Secret; used to verify peers and replication connections. |
| `tls-auth-clients` | `no` | Clients are not required to present certificates (no mutual TLS); clients authenticate with ACL credentials. |
| `cluster-announce-hostname` | `{pod}.{cluster}.{namespace}.svc.cluster.local` | Each node announces its per-pod DNS name, which the required wildcard SAN covers, so hostname verification succeeds. |
| `cluster-preferred-endpoint-type` | `hostname` | Cluster-aware clients receive hostnames rather than pod IPs in redirects, keeping TLS verification intact. |

See [TLS](../security/tls.md) for the Secret shape and SAN requirements these settings depend on.

## Everything else passes through

:::info
The operator does **not** validate or reject any other Valkey setting. Two consequences:

- If you specify a value for one of the forced settings above, it is **silently overridden**: there is no error, no event, and no status message. The forced value wins.
- Any other key in the `valkey` map (including unknown, mistyped, or dangerous directives such as `requirepass` or raw `user` lines) passes through to the node's configuration file **unchecked**. A bad directive can prevent nodes from starting or silently undermine the cluster's authentication and ACL model.

Platform teams should treat the `valkey` map in curated `ValkeyConfig` resources as production configuration and review it accordingly.
:::

## Enforcement is at render time, not runtime

Forced settings are injected when a node's configuration file is rendered, and that file is read once, at process start. The operator does not monitor or re-assert settings on running nodes: a client with ACL access to `CONFIG SET` can change any setting on a live node, forced or not, and the change stands until that pod is replaced. The one exception is the TLS certificate paths, which the TLS controller re-issues periodically as part of certificate reload. See [Changing configuration](../team-guide/changing-configuration.md#manual-changes-on-live-nodes) for the full manual-drift policy, and [ACLs](../security/acls.md) for restricting which users can run `CONFIG SET` at all.
