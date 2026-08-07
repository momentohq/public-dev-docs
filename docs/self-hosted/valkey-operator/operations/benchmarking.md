---
title: Benchmarking
description: Validate throughput and latency against an operator-provisioned Valkey cluster using standard Valkey benchmarking tools.
sidebar_position: 5
---

# Benchmarking

This page shows how to run reproducible performance validation against a Valkey cluster provisioned by the Momento Valkey Operator, using standard Valkey tooling from inside your Kubernetes cluster. It does not make performance claims on the operator's behalf. Throughput and latency depend on your node shape, config, network, and workload, and you should measure your own cluster rather than trust a number from elsewhere.

## Run valkey-benchmark as a Kubernetes Job

`valkey-benchmark` ships in the standard Valkey image and speaks the cluster protocol with `--cluster`, so it follows slot redirects the same way a cluster-aware client does. Run it as a Job in the cluster's namespace, pointed at the headless Service:

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: valkey-bench
  namespace: my-app
spec:
  template:
    spec:
      restartPolicy: Never
      containers:
        - name: valkey-benchmark
          image: valkey/valkey:9.0
          command:
            - valkey-benchmark
            - -h
            - my-cluster.my-app.svc.cluster.local
            - -p
            - "6379"
            - --cluster
            - -c
            - "50"
            - -n
            - "1000000"
            - -t
            - set,get
  backoffLimit: 0
```

Adjust `-c` (client connections) and `-n` (requests) to the load you want to generate, and `-t` to the command mix you care about. `kubectl logs job/valkey-bench -n my-app` shows the results; delete the Job (`kubectl delete job valkey-bench -n my-app`) before rerunning.

### TLS clusters

Against a TLS-only cluster, add `--tls` and point `--cacert` at the cluster's CA certificate, mounted from the same Secret the cluster itself validates against:

```yaml
      containers:
        - name: valkey-benchmark
          image: valkey/valkey:9.0
          command:
            - valkey-benchmark
            - -h
            - my-cluster.my-app.svc.cluster.local
            - -p
            - "6379"
            - --cluster
            - --tls
            - --cacert
            - /etc/valkey/tls/ca.crt
            - -c
            - "50"
            - -n
            - "1000000"
          volumeMounts:
            - name: tls-certs
              mountPath: /etc/valkey/tls
              readOnly: true
      volumes:
        - name: tls-certs
          secret:
            secretName: my-cluster-tls
```

### ACL-protected clusters

If the cluster has ACL bindings, authenticate as a dedicated benchmark user rather than reusing an application credential. Bind a `bench` user scoped to a throwaway key pattern so benchmark traffic is trivially distinguishable from and isolated from production keys. See [ACLs](../security/acls.md) for creating the binding. Pass its credentials with `--user` and `--pass`:

```yaml
            - valkey-benchmark
            - -h
            - my-cluster.my-app.svc.cluster.local
            - -p
            - "6379"
            - --cluster
            - --user
            - bench
            - --pass
            - <bench-user-password>
            - -c
            - "50"
            - -n
            - "1000000"
```

`--tls`/`--cacert` and `--user`/`--pass` combine for a cluster that runs both.

## memtier_benchmark as an alternative

`memtier_benchmark` is a general-purpose load generator for the Valkey wire protocol, with richer workload shaping (key-space distributions, pipelining, mixed read/write ratios) than `valkey-benchmark` offers. It is not part of the Valkey image, so run it from its own container image. The connection, TLS, and ACL flags are conceptually the same as above, with different spellings on `memtier_benchmark`'s command line. Either tool works against an operator-provisioned cluster the same way: the operator has no benchmarking-specific behavior to accommodate.

## What to measure

- **Throughput at a target p99 latency**, not throughput alone. Raise concurrency until p99 crosses your acceptable threshold, and report the throughput at that point: an unbounded-latency throughput number is rarely the number that matters for a production SLA.
- **Per-shard scaling.** Run the same benchmark before and after changing `shards` on the cluster (see [Scaling](../team-guide/scaling.md)). Because slots and their keys distribute evenly across shards and each shard is served independently, headline throughput is expected to grow close to linearly with shard count for a workload that spreads across the key space. This is a property of Valkey cluster mode generally, not a number the operator guarantees. A workload concentrated on a few hot keys will not show this, regardless of shard count.

## Pitfalls

- **Benchmark pod placement and zone locality.** A benchmark pod scheduled in a different zone from the shard it's hitting adds cross-zone network latency to every result, which shows up as worse p99 than clients will actually see in a same-zone deployment. Either accept that as representative of your real client placement, or pin the benchmark Job with `nodeSelector`/affinity to land alongside the cluster.
- **Don't benchmark through a single connection.** A cluster's aggregate throughput comes from parallel client connections spread across shards; `-c 1` measures one connection's round-trip latency, not the cluster's capacity. Use enough connections (`-c`) to actually exercise every shard concurrently.
- **Warm up before measuring.** The first requests against a freshly bootstrapped or freshly scaled cluster pay one-time costs (connection establishment across every shard, cluster-topology discovery, cold caches at any layer below Valkey). Run a short unmeasured warm-up pass, or discard the first portion of a long run, before recording numbers you intend to compare.
