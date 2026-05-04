---
sidebar_position: 4
sidebar_label: AWS resources
title: Reaching AWS from a Function
description: Use AWS from inside a Momento Function
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - aws
  - s3
  - secrets manager
  - dynamodb
  - iam
  - serverless
---

# Reaching AWS from a Function

Momento Functions has first-class **AWS host interfaces** for commonly demanded AWS apis: S3, Secrets Manager, DynamoDB, and IAM federation. The host keeps warm AWS clients pooled outside your sandbox, so the per-call latency is dominated by AWS itself — you don't pay for SDK construction, or unconditional STS round trip on the hot path.

## AWS crates

| Crate | What it does |
|-------|--------------|
| [`momento-functions-aws-auth`](https://github.com/momentohq/functions/tree/main/aws-auth) | Resolve credentials by federating into one of your IAM roles |
| [`momento-functions-aws-s3`](https://github.com/momentohq/functions/tree/main/aws-s3) | GET and PUT objects in S3 |
| [`momento-functions-aws-secrets-manager`](https://github.com/momentohq/functions/tree/main/aws-secrets-manager) | Fetch (optionally cached) secrets from AWS Secrets Manager |
| [`momento-functions-aws-ddb`](https://github.com/momentohq/functions/tree/main/aws-ddb) | GetItem and PutItem for DynamoDB |

## Authentication: federation into your account

Functions don't run in your AWS account. To touch AWS resources, your Function asks the host to assume an IAM role you control:

```rust
use momento_functions_aws_auth::{Authorization, IamRole, provider};

let credentials = provider(
    &Authorization::Federated(IamRole {
        role_arn: "arn:aws:iam::123456789012:role/MomentoFunctionsAccess".to_string(),
    }),
    "us-west-2",
)?;
```

The role's trust policy must allow assumption from Momento's federation principal. Reach out to `support@momentohq.com` for the exact trust policy block — it's a one-time setup per role.

Once you have a `credentials` handle, pass it to whichever AWS client you need. The credentials are scoped to the invocation; nothing leaks to the next caller.

Oh yeah, we do also support explicit credentials to get you started with development. It's handy for kicking the tires, but please don't ship your production root AWS credentials in your Functions environment!

## S3: GET an object

```rust
use momento_functions_aws_s3::S3Client;
use momento_functions_bytes::encoding::Json;
use momento_functions_guest_web::{WebResponse, WebResult, invoke};
use serde::{Deserialize, Serialize};

#[derive(Deserialize)]
struct Request {
    role_arn: String,
    bucket: String,
    key: String,
}

#[derive(Deserialize)]
struct MyStructure {
    a_number: u32,
    a_string: String,
}

#[derive(Serialize)]
struct Response {
    message: String,
}

invoke!(s3_get);
fn s3_get(Json(request): Json<Request>) -> WebResult<WebResponse> {
    let credentials = provider(
        &Authorization::Federated(IamRole { role_arn: request.role_arn }),
        "us-west-2",
    )?;
    let client = S3Client::new(&credentials);

    match client.get(&request.bucket, &request.key) {
        Ok(Some(r)) => {
            let Json(value): Json<MyStructure> = r.body;
            Ok(WebResponse::new()
                .with_status(200)
                .with_body(Json(Response {
                    message: format!("got a_number={}, a_string={}", value.a_number, value.a_string),
                }))?)
        }
        Ok(None) => Ok(WebResponse::new().with_status(404).with_body("not found")?),
        Err(e) => Ok(WebResponse::new().with_status(500).with_body(format!("{e}"))?),
    }
}
```

`S3Client::get` returns `Option<Object<T>>` — `None` on a 404, `Some(_)` on a hit. The body is decoded by the same `Json<T>`/`Data` machinery you'd use anywhere else in Functions.

## Secrets Manager: fetch a secret

```rust
use std::time::Duration;
use momento_functions_aws_auth::{Authorization, IamRole, provider};
use momento_functions_aws_secrets_manager::{GetSecretValueRequest, SecretsManagerClient};

let credentials = provider(/* ... */)?;
let client = SecretsManagerClient::new(&credentials);
let secret: Vec<u8> = client.get_secret_value(
    GetSecretValueRequest::new("my-secret-id"),
    Duration::from_secs(60),
)?;
```

A common use is to fetch an API key from Secrets Manager once per invocation, then use it on an [outbound HTTP call](/functions/capabilities/http). You can control how long the host holds onto the secret and possibly reuses it for your function by setting the allowed_staleness argument.

:::warning[Note]
The IAM role's permissions are the *only* gate on what a Function can do in your AWS account. As always, scope the role tightly — read-only S3 access to a single bucket, one specific secret name, etc. — so a misbehaving Function can't reach further than it should.
:::
