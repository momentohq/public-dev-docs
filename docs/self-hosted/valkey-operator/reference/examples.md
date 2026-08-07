---
title: Example manifests
description: Complete, runnable manifests for the common shapes of menu resources and clusters, collected from across these docs in one place.
sidebar_position: 6
---

# Example manifests

Complete manifests for the shapes you'll create most often, collected in one place so you can start from a working example instead of assembling fields from reference tables. Each sample states its prerequisites; all of them use the same names as the rest of these docs (namespace `my-app`, cluster `my-cluster`, configs `standard` and `large`, image `valkey-9-0`).

:::note
These samples are starting points for demonstration and experimentation, not production configurations. Before production, work through the [security hardening checklist](../security/index.md#hardening-checklist) and [Sizing](../operations/sizing.md), and adjust names, sizes, zones, and credentials to your environment.
:::

## Platform menu

These are cluster-scoped and platform-team-owned; see [Curating images and configs](../platform-guide/curating-images-and-configs.md) for the design guidance behind them.

### Image allowlist entry

No prerequisites. Registers one runnable image; without a `ValkeyImage`, no config can reference the image and no cluster can run it.

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

### Base config

Requires the `valkey-9-0` image above. A complete menu item: image, resources, and engine settings. Always set `resources` in curated configs; a config without them produces BestEffort pods, first evicted under node pressure.

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

### Size variant via baseRef

Requires the `standard` config above. Overrides sizing and inherits everything else, including the image and the per-key `valkey` map merge (`maxmemory-policy` survives from the base).

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

### Reusable ACL role

No prerequisites. A named permission set that bindings on configs and clusters reference; see [ACLs](../security/acls.md).

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

## Clusters

These are namespaced and product-team-owned; see [Provisioning a cluster](../team-guide/provisioning.md) for the walkthrough.

### Minimal cluster

Requires a published config (`standard` above) and the `my-app` namespace. Three shards, one replica each: six nodes.

```yaml
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyCluster
metadata:
  name: my-cluster
  namespace: my-app
spec:
  configRef: standard
  shards: 3
  replicasPerShard: 1
```

### Zone-aware cluster

Requires nodes labeled with the listed zones and, for the `nodeSelector`, a `node-pool: valkey` node label. Pins pods to three zones, enforces per-shard zone spread, and restricts scheduling to a dedicated pool; see [Zone-aware placement](../operations/zone-aware-placement.md) for what each field does and what happens when placement is unsatisfiable.

```yaml
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyCluster
metadata:
  name: my-cluster
  namespace: my-app
spec:
  configRef: standard
  shards: 3
  replicasPerShard: 1
  placement:
    zones:
      - us-east-1a
      - us-east-1b
      - us-east-1c
    zoneSpread: required
    nodeSelector:
      node-pool: valkey
```

### TLS-only cluster

Requires a `kubernetes.io/tls` Secret named `my-cluster-tls` in `my-app` with `tls.crt`, `tls.key`, and `ca.crt`, with the SANs [TLS](../security/tls.md) specifies. TLS is immutable after creation: decide here, not later.

```yaml
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyCluster
metadata:
  name: my-cluster
  namespace: my-app
spec:
  configRef: standard
  shards: 3
  replicasPerShard: 1
  tls:
    secretRef: my-cluster-tls
```

With cert-manager, this Certificate produces a compliant Secret (it assumes an existing Issuer named `valkey-ca-issuer`; see the [cert-manager walkthrough](../security/tls.md#provisioning-certificates-with-cert-manager) for the Issuer and the reasoning):

```yaml
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: my-cluster-tls
  namespace: my-app
spec:
  secretName: my-cluster-tls
  duration: 2160h      # 90d
  renewBefore: 360h    # 15d
  privateKey:
    algorithm: ECDSA
    size: 256
    rotationPolicy: Always
  usages:
    - server auth
    - client auth
  dnsNames:
    - my-cluster.my-app.svc.cluster.local
    - "*.my-cluster.my-app.svc.cluster.local"
  issuerRef:
    name: valkey-ca-issuer
    kind: Issuer
    group: cert-manager.io
```

### Cluster with an ACL user

Requires the `read-write` role above. Binds one application user scoped to its own key prefix. The moment this binding exists, the permissive `default` user is disabled; every client needs credentials from then on. Generate the hash with `echo -n '<password>' | sha256sum`.

```yaml
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyCluster
metadata:
  name: my-cluster
  namespace: my-app
spec:
  configRef: standard
  shards: 3
  replicasPerShard: 1
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

## Where the other manifests live

Some worked manifests stay on their task pages, where the surrounding procedure matters as much as the YAML:

- [Multi-tenancy and RBAC](../platform-guide/multi-tenancy-and-rbac.md) — the complete tenant-onboarding bundle: namespace, Role, RoleBinding, ClusterRole, and ClusterRoleBinding.
- [Networking and ports](../security/networking.md#networkpolicies) — a worked NetworkPolicy for namespaces that host clusters.
- [Benchmarking](../operations/benchmarking.md) — in-cluster benchmark Job manifests, including TLS and ACL variants.
- [Installation](../getting-started/installation.md) — the release artifacts (`crds.json`, `operator.yaml`) that install the operator itself.
