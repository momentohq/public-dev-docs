---
sidebar_position: 5
sidebar_label: Logging
title: Logging from a Function
description: Configure log destinations and levels for Momento Functions
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - logging
  - observability
  - cloudwatch
  - serverless
---

# Logging from a Function

Functions don't have stdout — the [WASI subset](/functions/core-concepts/architecture) implemented by Functions doesn't expose it. Instead, you configure log destinations through [`momento-functions-host-log`](/functions/core-concepts/host-interfaces) and emit messages through the standard `log` crate.

## Add the dependencies

```toml
[dependencies]
log                          = { version = "0.4" }
momento-functions-bytes      = { version = "0" }
momento-functions-guest-web  = { version = "0" }
momento-functions-host-log   = { version = "0" }
```

## Example

Send logs to a Momento Topic named after the Function:

```rust
use momento_functions_bytes::encoding::Json;
use momento_functions_guest_web::{WebEnvironment, WebResult, invoke};
use momento_functions_host_log::{LogDestination, configure_logs};

#[derive(serde::Deserialize, Debug)]
struct Request { name: String }

#[derive(serde::Serialize)]
struct Response { message: String }

invoke!(greet);
fn greet(Json(request): Json<Request>) -> WebResult<Json<Response>> {
    let env = WebEnvironment::load();
    configure_logs([LogDestination::topic(env.function_name()).into()])?;

    log::info!("Received request: {request:?}");

    Ok(Json(Response {
        message: format!("Hello, {}!", request.name),
    }))
}
```

You can subscribe to the topic from the momento CLI to tail the stream.

## Advanced configuration

For more control, use `LogConfiguration` to set per-destination log levels, separate system logs from application logs, and include CloudWatch:

```rust
use momento_functions_host_log::{LogConfiguration, LogDestination, configure_logs};

configure_logs([
    // System-only topic, separate stream from app logs
    LogConfiguration::new(LogDestination::topic(format!("{}-system-logs", env.function_name())))
        .with_log_level(log::LevelFilter::Off)
        .with_system_log_level(log::LevelFilter::Debug),

    // App-log topic at DEBUG, system logs only at ERROR+
    LogConfiguration::new(LogDestination::topic(env.function_name()))
        .with_log_level(log::LevelFilter::Debug)
        .with_system_log_level(log::LevelFilter::Error),

    // CloudWatch destination at default INFO for both
    LogConfiguration::new(LogDestination::cloudwatch(
        request.iam_role_arn.clone(),
        request.log_group_name.clone(),
    )),
])?;
```

The CloudWatch destination uses the same [IAM federation](/functions/capabilities/aws) as the other AWS host interfaces — your role needs `logs:CreateLogStream` and `logs:PutLogEvents` on the target log group. Reach out to `support@momentohq.com` for the trust policy.

## Log streams

Each destination can receive two kinds of records, with independent levels:

* **Function logs** (`with_log_level`) - Whatever your handler emits via `log::info!`, `log::debug!`, etc.
* **System logs** (`with_system_log_level`) - Records the host emits about your invocation: timing, errors at the host boundary, sandbox lifecycle.

Filtering them separately is useful in production: keep system logs at `Error` to keep volume down, but turn function logs to `Debug` while you're iterating.

## What to log

* **Errors with context** - Include the inputs that triggered the failure. The sandbox is gone after the invocation, so logs are your only post-mortem signal.
* **Upstream call results** - Timing and status of [outbound HTTP](/functions/capabilities/http) is convenient for debugging integration issues.
* **Don't log secrets.** API keys and `authorization` headers should never appear in logs.

## Reading logs

Topic destinations are subscribed to like any other Momento Topic — see [Topics](/topics) for a subscriber walkthrough. CloudWatch destinations land in the log group you specified and behave like any other CloudWatch log stream.
