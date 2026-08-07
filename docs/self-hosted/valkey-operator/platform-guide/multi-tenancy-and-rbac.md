---
title: Multi-tenancy and RBAC
description: Complete manifests to onboard a product team onto the Momento Valkey Operator using plain Kubernetes RBAC, no admission webhooks required.
sidebar_position: 3
---

# Multi-tenancy and RBAC

This guide onboards a product team onto the Momento Valkey Operator using nothing but standard Kubernetes RBAC objects. No admission webhook or external policy engine is involved: the governance model is the resource split itself (cluster-scoped menu, namespaced clusters) enforced by ordinary `Role`/`ClusterRole` grants. The manifests below onboard one team, `checkout-team`, onto its own namespace.

## 1. The team's namespace

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: checkout-team
```

Every `ValkeyCluster` the team creates lives in this namespace. A namespace can hold any number of `ValkeyCluster` resources: there is no one-cluster-per-namespace restriction.

## 2. Cluster CRUD, namespaced

Grant full control over `ValkeyCluster` and read access to the operator-internal `ValkeyNode`, scoped to the team's namespace with an ordinary `Role` and `RoleBinding`:

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: checkout-team-clusters
  namespace: checkout-team
rules:
  - apiGroups: ["valkey.gomomento.com"]
    resources: ["valkeyclusters"]
    verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
  - apiGroups: ["valkey.gomomento.com"]
    resources: ["valkeynodes"]
    verbs: ["get", "list", "watch"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: checkout-team-clusters
  namespace: checkout-team
subjects:
  - kind: Group
    name: checkout-team-engineers
    apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: checkout-team-clusters
  apiGroup: rbac.authorization.k8s.io
```

Substitute the `Group` subject for whatever your cluster uses to identify the team: a `User`, or a `ServiceAccount` with its own `namespace` field. Because this is a `Role`/`RoleBinding` pair, not a `ClusterRole`/`ClusterRoleBinding`, the grant is confined to the `checkout-team` namespace: the team cannot touch `ValkeyCluster` or `ValkeyNode` resources anywhere else.

## 3. Read-only menu access, cluster-wide

`ValkeyImage`, `ValkeyConfig`, and `ValkeyRole` are cluster-scoped resources, so no `RoleBinding` can grant access to them: a `RoleBinding` only ever grants within its own namespace. Read access requires a `ClusterRole` bound with a `ClusterRoleBinding`:

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: valkey-menu-reader
rules:
  - apiGroups: ["valkey.gomomento.com"]
    resources: ["valkeyimages", "valkeyconfigs", "valkeyroles"]
    verbs: ["get", "list", "watch"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: checkout-team-menu-reader
subjects:
  - kind: Group
    name: checkout-team-engineers
    apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: ClusterRole
  name: valkey-menu-reader
  apiGroup: rbac.authorization.k8s.io
```

`valkey-menu-reader` is a single shared `ClusterRole`. Define it once and bind it to every team with a separate `ClusterRoleBinding` per team (as above), or list multiple teams' subjects on one `ClusterRoleBinding` if that fits your RBAC conventions better. Either way, the grant is read-only: `get`/`list`/`watch`, never `create`/`update`/`delete`.

## Why this is governance without admission webhooks

The two bindings above are the entire tenancy model:

- The **namespaced** `Role` gives the team full self-service control over their own `ValkeyCluster` resources (create, scale, reconfigure, delete) with no platform-team involvement per cluster.
- The **cluster-scoped read** grant lets the team see the full menu (which images and configs exist) but grants no path to create or modify one.

Because `ValkeyCluster.spec` can only reference menu resources by name (there is no field for an inline image, an inline resource size, or an inline Valkey setting), a team with exactly these two grants cannot put anything into service that the platform team has not published to the menu. No admission webhook has to intercept and validate the spec; the schema and the RBAC split do that work between them. See [Resource model](../concepts/resource-model.md) for the full reasoning behind the split.

## What tenants can and cannot do

With the grants above, `checkout-team` can:

- Create, scale, reconfigure, and delete any number of `ValkeyCluster` resources in the `checkout-team` namespace.
- Read the full catalog of `ValkeyImage`, `ValkeyConfig`, and `ValkeyRole` resources to see what is available.
- Read `ValkeyNode` resources in their namespace to observe cluster member lifecycle.

They cannot:

- Create, edit, or delete a `ValkeyImage`, `ValkeyConfig`, or `ValkeyRole`: the menu is platform-team-owned.
- See or affect `ValkeyCluster` or `ValkeyNode` resources in any other team's namespace: the `RoleBinding` in step 2 is namespace-scoped by construction.
- Reach pods, Services, ConfigMaps, or Secrets directly: nothing in these manifests grants core-resource access. Only the operator's own service account has that; see [RBAC](../security/rbac.md) for what it grants and why.

Repeat steps 1 to 3 (with a new namespace and subject) for each additional team; the shared `valkey-menu-reader` `ClusterRole` from step 3 does not need to be recreated.
