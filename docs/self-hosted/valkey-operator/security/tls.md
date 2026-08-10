---
title: TLS
description: Enable TLS at cluster creation, the required Secret shape, certificate rotation, expiry monitoring, and a cert-manager walkthrough.
sidebar_position: 2
---

# TLS

This page covers enabling and operating TLS on a Valkey cluster managed by the Momento Valkey Operator: the Secret shape the operator expects, what TLS-only mode enforces, how validation and rotation work, and how to provision the certificate with cert-manager. It is written for platform and product-team engineers configuring a cluster for encrypted traffic.

## Enable TLS at cluster creation

Set `spec.tls.secretRef` on the `ValkeyCluster` to the name of a `kubernetes.io/tls` Secret in the same namespace:

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

:::warning
Whether `spec.tls` is set is immutable after creation. You cannot add TLS to a cluster created without it, and you cannot remove TLS from a cluster created with it: the CRD rejects the change at admission. Decide at creation time; if you need to change your mind, create a new cluster. Only `tls.secretRef` itself can change afterward, which is how certificate rotation works (below).
:::

## Secret shape

The Secret referenced by `spec.tls.secretRef` must be type `kubernetes.io/tls` and contain:

| Key | Contents |
|---|---|
| `tls.crt` | The leaf certificate, valid PEM and a valid X.509 certificate. |
| `tls.key` | The private key matching `tls.crt`. |
| `ca.crt` | The CA bundle used to verify peer certificates on replication and the cluster bus. |

The certificate's SANs must include exactly:

- `{cluster}.{namespace}.svc.cluster.local`, for example `my-cluster.my-app.svc.cluster.local`
- `*.{cluster}.{namespace}.svc.cluster.local`: the wildcard, covering the per-pod DNS names each node announces in TLS mode

## What TLS-only mode enforces

When `spec.tls` is set, every node runs TLS-only: the plaintext port is closed (`port 0`), and client traffic, replication, and the cluster bus are all encrypted. Clients are not required to present certificates: there is no mutual TLS on the client connection, only ACL-based authentication. The full list of settings the operator forces in TLS mode, and why, is in [Forced Valkey settings](../reference/forced-settings.md).

## Validation on every reconcile

The operator validates the referenced Secret on every reconcile, in any cluster state, not only at creation. It checks that the Secret exists and has data, that all three keys are present, that `tls.crt` parses as PEM/X.509, and that its SANs cover both required names. Any failure sets the cluster to `Invalid` with the exact reason in `status.message`; the operator takes no topology actions while `Invalid` but keeps re-checking the Secret. Once validation passes again, the cluster recovers to `Active` automatically: no action on the `ValkeyCluster` resource itself is needed. See [Cluster status](../reference/cluster-status.md) for the full state model.

## Rotating the leaf certificate

Update the Secret's data in place. Do not change `tls.secretRef` unless you are also renaming the Secret. Rotation then reaches every node in two stages: kubelet propagates the updated Secret content into each pod's mounted volume (typically up to about a minute), and the TLS reload controller, which ticks every 30 seconds, issues a configuration reload once it sees the new files on disk. No pod restart is needed: nodes reload their certificate in place, and established connections are not expected to be affected since the reload changes only which certificate is presented to new connections.

## Rotating the CA

Rotating the CA needs an overlap step, because the operator (and each node, when verifying peers) trusts only what is currently in `ca.crt`:

1. Update `ca.crt` in the Secret to contain **both** the old and the new CA certificates, bundled together, alongside the new leaf in `tls.crt`/`tls.key` signed by the new CA.
2. Wait for the two-stage propagation above to reach every node.
3. Once every node is confirmed on the new leaf, update `ca.crt` again to contain only the new CA, removing the old one.

Skipping the bundle step and rotating straight to a new CA breaks verification for any node that has not yet picked up the new certificate, because it no longer trusts what its peers are presenting.

## Certificate expiry

:::warning
Certificate expiry is a warn-only condition. An expired certificate does **not** move the cluster to `Invalid`: the cluster stays `Active` and continues to be managed normally, while client connections that depend on the expired certificate fail. The operator does not alert on approaching or past expiry.
:::

You are responsible for monitoring certificate expiry and rotating before it happens. If you provision the Secret with cert-manager, its renewal cycle covers this automatically. See the walkthrough below. Otherwise, wire certificate expiry into your own alerting; see [Monitoring](../platform-guide/monitoring.md).

## Provisioning certificates with cert-manager

The operator consumes a `kubernetes.io/tls` Secret in the shape above but does not create or renew it. cert-manager is the recommended way to produce and rotate that Secret: it issues the certificate, writes it into a Secret in the right shape, and renews it before expiry, and the operator reloads each renewal across the cluster with no restart. This requires cert-manager installed in the Kubernetes cluster.

**1. Bootstrap a private CA.** If you already run a cert-manager `Issuer`/`ClusterIssuer` backed by your own CA or an external PKI, use it and skip to step 2. Otherwise, create a one-time self-signed `Issuer` that signs a long-lived CA certificate, then a `CA` issuer that signs cluster leaf certificates from it:

```yaml
apiVersion: cert-manager.io/v1
kind: Issuer
metadata:
  name: selfsigned-bootstrap
  namespace: my-app
spec:
  selfSigned: {}
---
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: valkey-ca
  namespace: my-app
spec:
  isCA: true
  commonName: my-app-valkey-ca
  secretName: valkey-ca-keypair
  duration: 87600h    # 10y; keep the CA long-lived
  renewBefore: 720h
  privateKey:
    algorithm: ECDSA
    size: 256
  issuerRef:
    name: selfsigned-bootstrap
    kind: Issuer
    group: cert-manager.io
---
apiVersion: cert-manager.io/v1
kind: Issuer
metadata:
  name: valkey-ca-issuer
  namespace: my-app
spec:
  ca:
    secretName: valkey-ca-keypair
```

:::note
Use a private-CA issuer (`CA`, `SelfSigned`, or an internal PKI) rather than a public ACME issuer. The certificate's SANs are internal `*.svc.cluster.local` names, which a public ACME issuer cannot validate or issue for: there is no HTTP or DNS challenge it can complete inside the cluster. A private-CA issuer also populates `ca.crt` in the resulting Secret, which the operator needs to verify peer certificates on replication and the cluster bus; ACME issuers do not produce one.
:::

**2. Issue the cluster's leaf certificate.** Its `secretName` must match `spec.tls.secretRef` on the `ValkeyCluster`. Two fields are commonly misconfigured:

- `dnsNames` must list both required SANs exactly.
- `usages` should include both `server auth` and `client auth`. Each node serves TLS to clients and also opens TLS connections to its peers for replication and the cluster bus, so it is a TLS client as well as a server. This requirement follows from the operator's forced `tls-cluster` and `tls-replication` settings, which put every node in a client role toward its peers, not from anything the operator validates directly. The operator's own check is limited to Secret keys, PEM validity, and SANs (see [Validation on every reconcile](#validation-on-every-reconcile) above).

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

`rotationPolicy: Always` makes cert-manager issue a fresh key on every renewal rather than reusing the existing one: a stricter rotation posture appropriate for infrastructure credentials.

**3. Point the cluster at the Secret:**

```yaml
spec:
  tls:
    secretRef: my-cluster-tls
```

Renewal from here is automatic: cert-manager renews the leaf before expiry (per `renewBefore`) and rewrites the same Secret in place, and the operator reloads the new certificate on every node through the two-stage propagation described above, with no restart. Leaf renewal keeps the same CA, so no extra coordination is needed for routine renewals. Keep the CA itself long-lived so it does not need to rotate underneath a running cluster. To rotate the CA itself, follow the bundle procedure above.

## Verifying TLS end to end

Once the cluster is `Active`, prove the TLS setup works before pointing applications at it. From a pod inside the Kubernetes cluster, with the CA certificate available as `ca.crt`:

```bash
valkey-cli -h my-cluster.my-app.svc.cluster.local --tls --cacert ca.crt -p 6379 PING
```

Success prints:

```text
PONG
```

(If any ACL binding exists, add `--user` and `--pass`; an auth error at this point is an ACL problem, not a TLS problem.) Then confirm both failure directions behave, so you know encryption is actually enforced and verification is actually on:

1. **A plaintext connection must be rejected.** Run the same command without `--tls`. It must fail to get a `PONG`; the plaintext listener is closed (`port 0`), so anything other than an error means you are not talking to the cluster you think.
2. **Verification must be against the right CA.** Run the `--tls` command without `--cacert` (or against a different CA bundle). It must fail the handshake with a certificate verification error. If it succeeds, your client is not verifying the server certificate, and you lose the protection hostname verification provides during redirects.

Finally, check the certificate the nodes are actually serving, which matters after a rotation:

```bash
openssl s_client -connect my-cluster.my-app.svc.cluster.local:6379 \
  -servername my-cluster.my-app.svc.cluster.local -CAfile ca.crt </dev/null 2>/dev/null \
  | openssl x509 -noout -enddate -subject
```

The `notAfter` date tells you whether the rotation you just performed is what clients now receive. Wire this check into your expiry monitoring; recall that an expired certificate leaves the cluster `Active` while clients fail (see [Certificate expiry](#certificate-expiry)).
