---
sidebar_position: 8
sidebar_label: Valkey
title: Talking to Valkey from a Function
description: Use the Valkey host interface for cluster commands from inside a Momento Function
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - valkey
  - redis
  - vector
  - host interface
  - serverless
---

# Talking to Valkey from a Function

:::tip
This extension is under construction!
:::


The [`momento-functions-valkey`](/functions/core-concepts/host-interfaces) crate lets your Function reach a Valkey cluster through a host-pooled connection. The shape is the same as any other Momento Functions host interface: you import the crate, call host interfaces, and the host handles the connection.

## Add the dependency

```toml
[dependencies]
momento-functions-bytes      = { version = "0" }
momento-functions-guest-web  = { version = "0" }
momento-functions-valkey     = { version = "0" }
```

## What you can do

Use the Valkey host interface when you have a Valkey cluster registered with Momento. You can do just about any request/reply command to your cluster.

If you have extensions in your cluster, like the vector extension, you should be able to call the request/reply commands via this interface.
