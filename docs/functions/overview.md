---
sidebar_position: 1
sidebar_label: Momento Functions
title: Momento Functions
description: Lightweight, fast, functions as a service
hide_title: true
keywords:
  - momento
  - functions
  - faas
  - workflow
  - lambda
  - runners
  - serverless
---

# Momento Functions

High-performance functions as a service built for general workflows, including [caching](/functions/patterns/caching), [LLM orchestration](/functions/patterns/orchestration), and [proxying](/functions/patterns/proxying). Momento's user-accessible auth means you can safely invoke Functions straight from your users' devices, with no application server in between. Your function is one `fetch()` or `POST` away.

Rather than containers-as-a-service or vms-as-a-service, Functions gives you a sandboxed webassembly environment per invocation. The execution model is similar to AWS Lambda, but you receive higher level tools. The SDK gives you convenient access to system calls that accelerate your applications. Like an HTTP system call that uses a connection pool outside of your webassembly invocation. This means neither your concurrency demand nor your external connection count materially affects your startup or execution times. If you're tired of cold start delays on other providers, give Functions a try! Each Function invocation is effectively a cold start, with a few microseconds of overhead versus the typical hundreds of milliseconds.

## What sets Momento Functions apart

Momento Functions uses constraints on feature breadth to make your functions fast, and predictable.

### Immediate startup

Every Function invocation is a new Function - it's basically a cold start. But cold starts in Functions use pre-compiled, pre-linked webassembly artifacts, and they start in microseconds. Cold starts on other providers routinely take hundreds of milliseconds, or more, due to their higher generality. If what you need fits in the feature set of Functions (hit us up if it doesn't! Maybe it can!), there is no faster way to run your Function.

### Traffic bursts are non-events

Sales, games, and social media can drive sudden bursts of traffic. With many providers, you'll see huge cold start latency, slow connection establishment, and throttling for concurrency. Functions are lightweight, and any Function receiving even a trickle of traffic is ready to burst to handle your needs.

### Easy development

The environment constraints on Functions make them simple to write. You write basic synchronous code, and the service handles concurrency. You don't select HTTP libraries, you just make an HTTP syscall. You might well imagine Functions as being batteries-included, but we only support AA batteries. Sometimes you need a 9 volt, but often AA's will suffice!

These constraints do not prevent you from freely using the cargo ecosystem though - you benefit from `serde` integration, `rand`, regular expressions, most of the standard library, and many other tools you can import from cargo. We really only constrain the places where you reach outside of your memory space!

Being part of the Momento platform, Functions have access to fine-grained auth including Momento disposable tokens and token metadata you provide. You can give user ids or small jsons to the disposable token generator, and vend these to your users' apps. Your users then can call your Function directly, which lets you skip writing a web api frontend and choosing a WAF, API gateway, reverse proxy, load balancer, and all the other infrastructure. You just upload your Function and it's ready to serve your needs.

### Reliability and high availability

A share-nothing, stateless implementation, functions run on our horizontally scalable router fleet. The execution model is ephemeral - so if you want to store anything, you have to do that during the Function handler. Functions is responsible for providing availability to execute, and you can choose how you want to store any artifacts!
