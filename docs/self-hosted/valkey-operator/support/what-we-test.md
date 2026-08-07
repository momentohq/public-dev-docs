---
title: What we test
description: The behaviors the operator's test suites verify, on real clusters and in simulation, and the things the suites deliberately do not cover.
sidebar_position: 4
---

# What we test

This page states which operator behaviors are verified by automated tests, and which are not. It exists so you can calibrate the claims in these docs: [Compatibility](compatibility.md) distinguishes supported from tested, and this page is the "tested" side of that line, including its limits.

## How the operator is tested

Two test tiers back the behaviors below:

- **Simulation tests** run the operator's real reconciliation code against a simulated Kubernetes API and a simulated Valkey cluster. They verify convergence: that repeated reconciliation drives the cluster from a starting state to the declared goal state. Convergence bounds are reconcile counts, not wall-clock time, so no timing promise follows from them.
- **Integration tests** run against a real Kubernetes cluster with real Valkey pods, and assert outcomes through the Kubernetes API and `valkey-cli` against the running nodes.

Where a behavior below is marked **real-cluster**, it is verified end to end on the integration tier; the rest is simulation-verified. Behaviors covered by both tiers are the ones these docs state with the most confidence.

## Verified behaviors

Nearly every scenario below asserts the same safety invariant at convergence: all 16384 hash slots assigned. Whatever the disturbance, the suite verifies the operator drives the cluster back to full slot coverage.

### Bootstrap

- Clusters across a matrix of one to four shards and zero to two replicas per shard reach `Active` with full slot coverage, the exact expected node count, and every node a full member. **Real-cluster** for representative shapes, including healthy replication on every primary.
- Spec edits made while a cluster is still `Creating` are deferred, not lost: bootstrap completes with its snapshotted spec, then the edit is applied. See [Reconciliation](../concepts/reconciliation.md).

### Scaling

- Scaling out converges to an evenly balanced slot distribution across the new shard count, not merely "the new shard got some slots". **Real-cluster** for several shapes.
- Scaling in converges to the target shard count with all 16384 slots still covered and evenly rebalanced, and every surplus node fully removed. **Real-cluster**, including scaling down to a single shard. (The sequential-drain mechanism itself is a design claim; see the ordering gap below.)
- Replica counts scale up and down to the exact target on every shard, including from and to zero replicas. **Real-cluster.**

### Rolling upgrades

- Changing a cluster's image rolls every node to the new image with no net change in node count and no reshuffling of which nodes belong to which shard. **Real-cluster** for a patch-level Valkey upgrade.

### Failure recovery

- All four failure quadrants recover on **real clusters**: primary loss with and without a surviving replica, each with and without cluster quorum. Where Valkey's own failover can act, the operator waits for it; where it cannot (no quorum, or no replica), the operator forces promotion or replaces the node. Each quadrant is exercised two ways, by deleting the pod and by killing the Valkey process in place. See [Failure modes](../operations/failure-modes.md) for what each quadrant means for your data.
- Faults injected mid-scale-out, mid-scale-in, and mid-upgrade do not wedge the operator: the in-flight change still converges.

### Placement

- `nodeSelector` passes through to pods verbatim; `zoneSpread: required` emits the documented pair of topology spread constraints, and Kubernetes accepts them. **Real-cluster.**
- Unsatisfiable placement fails safe: the pod sits `Pending` rather than the operator forcing or abandoning anything. **Real-cluster.**
- Changing `zones` or `nodeSelector` replaces every pod (verified by node identity, not just state); changing `zoneSpread` replaces none. See [Zone-aware placement](../operations/zone-aware-placement.md).

### TLS

- A TLS-only cluster bootstraps and serves; a plaintext connection to it is rejected. **Real-cluster.**
- A missing TLS Secret puts the cluster in `Invalid`, and the cluster recovers to `Active` on its own once a valid Secret exists, without recreating the resource. **Real-cluster.**
- Full CA-plus-leaf rotation using the documented CA-bundle procedure completes with zero pod restarts and the cluster reachable over TLS at every asserted checkpoint (continuous request success is not measured; see the availability gap below). **Real-cluster.** See [TLS](../security/tls.md).

### ACLs

- The rendered ACL semantics documented in [ACLs](../security/acls.md) are asserted directly: a permissive default user with zero bindings, default user disabled the moment bindings exist, and the two system users always present.
- ACL changes reach every node individually (ACLs are per-node state, and the suite deliberately checks each node) and bound credentials actually authenticate. **Real-cluster.** A dead node not blocking the rollout for the rest, with the laggard catching up after recovery, is simulation-verified.

### Pod annotations

- `podAnnotations` edits apply to existing pods in place, and reconciliation is additive: annotations set by other controllers survive. **Real-cluster** for creation-time passthrough.

## What the suites do not cover

Read these as the boundary of test-backed confidence. Where these docs make claims in these areas, the claims come from design and code inspection, not from tests, and the relevant pages say so.

- **Data survival.** No test writes keys and verifies they survive resharding, failover, or upgrade; assertions are about topology and slot coverage. The suites also confirm the expected loss case: a primary lost with no replica comes back as an empty replacement. [Data durability](../concepts/data-durability.md) owns the loss semantics.
- **Client-observed availability.** "Zero pod restarts" and "converges to healthy" are asserted; continuous request success and failover duration are never measured. No wall-clock behavior is test-backed.
- **In-flight ordering.** End states are asserted; interim invariants (one shard disrupted at a time, replacement joins before retirement) are design claims, not test assertions.
- **Partition and crash scenarios.** Network partitions, simultaneous multi-node failures, and operator restarts mid-workflow are not simulated; nodes in tests are only ever alive or dead.
- **Real multi-zone distribution.** Zone spread is verified as emitted constraints accepted by Kubernetes, not as observed pod distribution across a real multi-zone cluster.
- **Scale.** Verified shapes are small (up to four shards, up to two replicas per shard). Larger topologies and many-cluster fleets are outside the suite.
- **Negative security cases.** No test verifies that a bound ACL user is denied outside its grants, or exercises malformed or wrong-SAN certificates beyond the missing-Secret case.
- **Version skew.** Image swaps in tests are patch-level; downgrades and rollback mid-upgrade are untested, as [Managing Valkey upgrades](../platform-guide/valkey-upgrades.md) discloses.

If a behavior you depend on falls in this list, treat it as a question for [your support channel](getting-support.md) rather than an implied guarantee.
