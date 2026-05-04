---
sidebar_position: 7
sidebar_label: Topics
title: Publishing to Momento Topics
description: Publish messages to Momento Topics from inside a Function
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - topics
  - pubsub
  - host interface
  - serverless
---

# Publishing to Momento Topics

The [`momento-functions-topic`](/functions/core-concepts/host-interfaces) crate lets your Function publish messages to [Momento Topics](/topics).

## Add the dependency

```toml
[dependencies]
momento-functions-bytes      = { version = "0" }
momento-functions-guest-web  = { version = "0" }
momento-functions-topic      = { version = "0" }
```

## Publishing

```rust
use momento_functions_bytes::Data;
use momento_functions_guest_web::{WebResult, invoke};
use momento_functions_topic as topic;

invoke!(notify);
fn notify(payload: Data) -> WebResult<&'static str> {
    topic::publish_bytes("notifications", payload)?;
    Ok("ok")
}
```

The first argument is the topic name. The second is the message body. Use `topic::publish` when the body is a string (`Into<String>`), and `topic::publish_bytes` when it's binary (`Into<Data>`). Subscribers receive the messages from a single publisher in order, but ordering across publishers is not guaranteed.

## Common patterns

### Fan-out notifications

A single inbound request needs to notify many subscribers — chat presence, leaderboards, viewer counts. Publish once and let every subscriber pull the message. The [device heartbeat pattern in media-storage](/media-storage/concurrency/devices) is a complete example of this style.

### Structured logging

Pointing the [logging host interface](/functions/capabilities/logging) at a topic is a Topics publish under the hood. You can subscribe with any Topics consumer to tail the stream.

## What topics is not

* **Not durable.** Topics is a pub/sub bus, not a queue. Subscribers that aren't connected when a message is published won't see it.
* **Not ordered globally.** Each subscriber sees messages from a single publisher in order, but interleavings across publishers are not guaranteed. However, each subscriber will always see the same message order as every other subscriber, whatever the order worked out to be.
