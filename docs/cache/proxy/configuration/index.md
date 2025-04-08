---
sidebar_position: 10
sidebar_label: Configuration
title: Building Momento Proxy
description: Discover how to build, deploy, and run Momento Proxy in your environment.
---

# Configure Momento Proxy for your environment

Getting started with Momento Proxy is fast and straightforward. You can run it using [Docker](https://www.docker.com/) with only a [Momento API key](/cache/develop/authentication/api-keys) and a [configuration file](/cache/proxy/configuration/example).

<iframe width="560" height="315" src="https://www.youtube.com/embed/sdiqxGjA5HE?si=gEgkpgoI1L5Pacaz" title="Configure Momento Proxy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Prerequisites

- A valid [Momento API key](/cache/develop/authentication/api-keys).
- At least [one cache created](https://console.gomomento.com/caches/create) in your Momento account.

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

This starts the proxy with a [default configuration file](/cache/proxy/configuration/example).

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

## Verifying the proxy is working

Once the proxy is running, you can verify connectivity and functionality by testing the Memcached interface. Successful responses confirm that your application can communicate with Momento through the proxy.

### Memcached protocol (via telnet)

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

This confirms that your set and get operations are being processed by Momento through the proxy. You should see successful responses from Momento now! Ready to configure your application code? Learn [how to run the proxy as a sidecar](/cache/proxy/configuration/sidecar).


