---
title: Quickstart
description: A hands-on tutorial that provisions, connects to, scales, and tears down a Valkey cluster using the Momento Valkey Operator.
sidebar_position: 4
---

# Quickstart

This tutorial takes you from an installed Momento Valkey Operator to a running, connected, scaled Valkey cluster. It assumes you have completed [Installation](installation.md) and have `cluster-admin` access to the Kubernetes cluster, and it takes roughly 15 to 20 minutes.

:::note
This tutorial has you play both personas. Steps 1 and 2 (registering an image and a config) are platform-team work: curating what teams are allowed to run. Step 3 onward is product-team work: provisioning and using a cluster from that menu. In production these are separated by RBAC; see [Resource model](../concepts/resource-model.md) and [Multi-tenancy and RBAC](../platform-guide/multi-tenancy-and-rbac.md).
:::

## 1. Register a Valkey image

`ValkeyImage` is the allowlist of container images clusters are permitted to run. Register Valkey 9.0.0:

```bash
kubectl apply -f - <<'EOF'
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyImage
metadata:
  name: valkey-9-0
spec:
  repository: valkey/valkey
  tag: "9.0.0"
  version: "9.0.0"
EOF
```

```bash
kubectl get valkeyimage valkey-9-0
```

## 2. Create a config

`ValkeyConfig` bundles an image reference, resource sizing, and Valkey settings into a named profile that clusters reference by name. Create a profile called `standard`:

```bash
kubectl apply -f - <<'EOF'
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyConfig
metadata:
  name: standard
spec:
  imageRef: valkey-9-0
  resources:
    cpu: "1"
    memory: 2Gi
  valkey:
    maxmemory: "1500mb"
    maxmemory-policy: "allkeys-lru"
EOF
```

```bash
kubectl get valkeyconfig standard
```

## 3. Provision a cluster

Create the namespace your application lives in, then a `ValkeyCluster` inside it, referencing the `standard` config:

```bash
kubectl create namespace my-app
```

```bash
kubectl apply -f - <<'EOF'
apiVersion: valkey.gomomento.com/v1alpha1
kind: ValkeyCluster
metadata:
  name: my-cluster
  namespace: my-app
spec:
  configRef: standard
  shards: 3
  replicasPerShard: 1
EOF
```

## 4. Watch it come up

```bash
kubectl -n my-app get valkeycluster -w
```

The `STATE` column starts at `Creating`. Bootstrapping a three-shard, one-replica-per-shard cluster means bringing up six Valkey nodes (`shards × (1 + replicasPerShard)`), meeting them into a cluster, and assigning hash slots. Once that finishes, `STATE` flips to `Active`. Press Ctrl+C to stop watching. (`Creating` and `Active` are two of several states a `ValkeyCluster` can report; see [Cluster status](../reference/cluster-status.md) for the full set and what each means.)

While it converges (or once it's `Active`), look at what the operator built. Each Valkey cluster member is represented by a `ValkeyNode`, and each `ValkeyNode` owns exactly one pod:

```bash
kubectl -n my-app get valkeynodes
kubectl -n my-app get pods -l app.kubernetes.io/instance=my-cluster
```

You should see six `ValkeyNode` resources, each with a random-suffixed name like `my-cluster-1a4f2`, and a matching pod for each (not ordinal names like `my-cluster-0`), because the operator manages pods directly rather than through a StatefulSet.

## 5. Connect and run some commands

The operator creates one headless Service per cluster, named after the cluster, reachable at `{cluster}.{namespace}.svc.cluster.local`. Run `valkey-cli` from a throwaway pod inside the Kubernetes cluster, in cluster mode (`-c`, so the client follows slot redirects across nodes):

```bash
kubectl -n my-app run valkey-cli --rm -it --restart=Never \
  --image valkey/valkey:9.0 \
  -- valkey-cli -c -h my-cluster.my-app.svc.cluster.local
```

At the prompt:

```text
my-cluster.my-app.svc.cluster.local:6379> PING
PONG
my-cluster.my-app.svc.cluster.local:6379> SET hello world
OK
my-cluster.my-app.svc.cluster.local:6379> GET hello
"world"
```

Exit with `exit` or Ctrl+D; the `--rm` flag deletes the pod on exit.

## 6. Scale out a shard

Increase `shards` from 3 to 4:

```bash
kubectl -n my-app patch valkeycluster my-cluster \
  --type merge -p '{"spec": {"shards": 4}}'
```

Watch it again:

```bash
kubectl -n my-app get valkeycluster -w
```

`STATE` stays `Active` throughout (scaling is a live operation, not a separate state), and the `SHARDS` column shows the updated desired count immediately, since it reflects the spec. The real progress signal is the node list: the operator brings up the added shard's nodes and migrates a share of the existing hash slots onto them so all four shards end up balanced. Meanwhile, existing shards keep serving. Watch the nodes converge:

```bash
kubectl -n my-app get valkeynodes -w
```

Once four shards' worth of nodes are `Active`, confirm the updated node count:

```bash
kubectl -n my-app get valkeynodes
```

You should now see eight `ValkeyNode` resources (four shards × two nodes each).

## 7. Clean up

Delete the cluster:

```bash
kubectl -n my-app delete valkeycluster my-cluster
```

This cascades: the Service, the auth Secret, the ACL ConfigMap, and every `ValkeyNode` (and its pod and ConfigMap) go with it. The namespace `my-app`, the `standard` `ValkeyConfig`, and the `valkey-9-0` `ValkeyImage` are **not** deleted: they're independent, cluster-scoped (or, for the namespace, unrelated) resources, and stay available for the next cluster you provision.

## Where to go next

- **Platform engineers**: build out a real menu in [Curating images and configs](../platform-guide/curating-images-and-configs.md), then onboard teams with [Multi-tenancy and RBAC](../platform-guide/multi-tenancy-and-rbac.md).
- **Product-team developers**: read [Provisioning a cluster](../team-guide/provisioning.md) for the decisions you make at creation time (TLS, placement, ACLs), and [Connecting to a cluster](../team-guide/connecting.md) for client configuration beyond `valkey-cli`.
- **Both personas**: this cluster ran with no ACL bindings, so its `default` user was wide open to anything that could reach it on the network (fine for a quickstart, not for production). Read [ACLs](../security/acls.md) and [TLS](../security/tls.md) before going further.
