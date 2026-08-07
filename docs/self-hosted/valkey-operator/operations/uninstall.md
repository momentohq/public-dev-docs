---
title: Uninstall
description: The ordered teardown procedure for removing the Momento Valkey Operator and its CRDs, and how to verify nothing is left behind.
sidebar_position: 7
---

# Uninstall

This page removes the Momento Valkey Operator from a Kubernetes cluster: Valkey clusters, then the operator, then the CRDs, in that order. The order matters: reversing it leaves resources stuck. It is written for platform teams decommissioning the operator entirely; to remove one Valkey cluster and keep the operator, delete only that `ValkeyCluster`.

## Match your installed version before you start

The commands below reference release manifest URLs pinned to a version. Use the URLs for the version you actually installed, not necessarily the latest release. An operator manifest from a different version than your CRDs can leave the CRD schema and the running operator's expectations out of sync during teardown.

Check the deployed image tag:

```bash
kubectl -n valkey-operator get deployment valkey-operator \
  -o jsonpath='{.spec.template.spec.containers[0].image}'
```

The tag in the output (for example, `gomomento/valkey-operator:v0.6.0`) tells you which release's `crds.json` and `operator.yaml` to reference throughout this page.

## 1. Delete all ValkeyClusters first

```bash
kubectl delete valkeycluster --all -A
```

Deleting a `ValkeyCluster` triggers the operator's cleanup finalizer, which relies on Kubernetes cascade-delete of everything owned by the cluster: its `ValkeyNode` resources, their Pods and ConfigMaps, the headless Service, the operator auth Secret, and the ACL ConfigMap. That finalizer only clears with the operator running and reconciling. Wait for the clusters to actually disappear before moving on:

```bash
kubectl get valkeycluster -A
```

Confirm the list is empty (or contains only clusters you intend to keep on a different operator installation) before proceeding. If a cluster stays `Terminating`, do not continue to the next step: the operator must still be running to finish the cleanup. See the [stuck-`Terminating` entry in Troubleshooting](troubleshooting.md#cluster-stuck-terminating) if it doesn't clear.

## 2. Delete the operator

```bash
kubectl delete -f https://github.com/momentohq/valkey-operator/releases/download/v0.6.0/operator.yaml
```

Use the manifest URL matching the version you installed. This removes the operator's Deployment, ServiceAccount, ClusterRole, ClusterRoleBinding, ConfigMap, and namespace.

## 3. Delete the CRDs

```bash
kubectl delete -f https://github.com/momentohq/valkey-operator/releases/download/v0.6.0/crds.json
```

:::warning
Deleting a CustomResourceDefinition cascades deletion of every custom resource of that kind, cluster-wide. If any `ValkeyCluster` (on this or another operator installation sharing the same CRDs) still exists at this point, deleting the CRDs deletes it too, bypassing the finalizer-driven cleanup from step 1. Confirm step 1 is complete across every namespace you care about before running this.
:::

This removes all five CRDs: `ValkeyImage`, `ValkeyConfig`, `ValkeyRole`, `ValkeyCluster`, and `ValkeyNode`.

## Verify cleanup

Confirm nothing tagged for the operator or its clusters remains:

```bash
kubectl get crd | grep valkey.gomomento.com   # expect no output
kubectl get namespace valkey-operator          # expect NotFound
kubectl get pods -A -l app.kubernetes.io/name=valkey   # expect no output
```

The pod label `app.kubernetes.io/name=valkey` is guaranteed on every Valkey pod the operator ever created, so an empty result here is strong evidence step 1 completed everywhere. Services, ConfigMaps, and Secrets belonging to a cluster follow naming patterns rather than a shared label (`{cluster}`, `{cluster}-operator-auth`, `{cluster}-acl`, `{node}-config`). See [Labels and annotations](../reference/labels-annotations.md) for the full taxonomy if you need to search a namespace by hand for anything a partially-completed finalizer left orphaned.

## Wrong order

If you deleted the operator or the CRDs before deleting your `ValkeyCluster` resources, see [Cluster stuck Terminating](troubleshooting.md#cluster-stuck-terminating): the fix is to restore the operator so cleanup can complete, not to force-delete resources by hand.
