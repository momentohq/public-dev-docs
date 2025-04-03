---
sidebar_position: 20
sidebar_label: Build and run
title: Building Momento Proxy
description: Discover how to build, deploy, and run Momento Proxy in your environment.
---

# Build and run Momento Proxy in your environment

Getting started with Momento Proxy is fast and straightforward. You can either run it using [Docker](https://www.docker.com/) or build it from source using [Cargo](https://doc.rust-lang.org/cargo/). All you need is a [Momento API key](/cache/develop/authentication/api-keys) and a configuration file.

## Prerequisites

- A valid [Momento API key](/cache/develop/authentication/api-keys).
- At least [one cache created](https://console.gomomento.com/caches/create) in your Momento account.
- [Rust toolchain](https://www.rust-lang.org/tools/install) if building from source.

## Running with Docker

You can pull and run the [Momento Proxy container](https://hub.docker.com/r/gomomento/momento-proxy) from Docker Hub:

```sh
docker pull gomomento/momento-proxy

docker run -d \
  -p 11211:11211 \
  -p 6379:6379 \
  -p 9999:9999 \
  -e MOMENTO_AUTHENTICATION=<YOUR_MOMENTO_API_KEY> \
  gomomento/momento-proxy
```

This starts the proxy with a [default configuration file](/cache/proxy/default-config).

To use a custom config, configure the `CONFIG` environment variable and the directory where your config file is located:

```sh
docker run -d \
  -p 11211:11211 \
  -p 6379:6379 \
  -p 9999:9999 \
  -e MOMENTO_AUTHENTICATION=<YOUR_MOMENTO_API_KEY> \
  -e CONFIG=my_custom_config.toml \
  -v /your/path/to/config:/app/config \
  gomomento/momento-proxy
```

> Ports:
> - `11211` for Memcached protocol
> - `6379` for Redis protocol
> - `9999` for admin/stats commands

## Verifying the Proxy is Working

Once the proxy is running, you can verify connectivity and functionality by testing the Memcached interface. Successful responses confirm that your application can communicate with Momento through the proxy.

### Memcached Protocol (via telnet)

Use telnet to test Memcached behavior:

``` bash
telnet localhost 11211
set foo 0 0 3
bar
get foo
```
You should see responses like:

```bash
STORED
VALUE foo 0 3
bar
END
```

This confirms that your set and get operations are being processed by Momento through the proxy. You should see successful responses from Momento now!

---

Next: [Java Example and Benchmarks](/docs/cache/momento-proxy/java-example)

