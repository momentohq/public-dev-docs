---
sidebar_position: 15
sidebar_label: Running as a sidecar
title: Sidecar Configuration
description: Learn how to configure Momento Proxy as a sidecar in your container environment.
---

# Running Momento Proxy as a sidecar with Memcached

Running Momento Proxy as a sidecar is the best way to ensure low-latency performance in production environments. By running the proxy with your application-meaning in the same service group or pod-you avoid the extra network hop and can access Momento over `localhost` for optimal speed.

## What is a sidecar?

A sidecar is a container that runs alongside your main application within the same service group (in Docker Compose) or pod (in Kubernetes). It shares the same network namespace, so your application can communicate with the proxy over `localhost` with no additional routing.

This setup is for performance-critical environments where *every millisecond counts*.

## Running with Docker Compose

Below is how you can configure Momento Proxy to run as a sidecar using Docker Compose:

:::info[Note]

 In Docker Compose, each container runs in its own network namespace. That means localhost refers to the container itself, not the proxy. Instead, your application should connect to the proxy using the service name defined in the Compose file—like `proxy:11211` for Memcached.

:::

```yaml
version: '3.8'
services:
  app:
    image: my-app-image
    depends_on:
      - proxy
    environment:
      - MEMCACHED_HOST=proxy
  proxy:
    image: gomomento/momento-proxy
    ports:
      - "11211:11211"
      - "9999:9999"
    environment:
      - MOMENTO_AUTHENTICATION=your_api_key
```

Your application can connect to `proxy:11211` for to proxy your Memcached calls to Momento!

## Running with Kubernetes

Here's how to configure Momento Proxy as a sidecar container within a Kubernetes Pod:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app-pod
spec:
  containers:
    - name: app
      image: my-app-image
      ports:
        - containerPort: 8080
    - name: momento-proxy
      image: gomomento/momento-proxy
      env:
        - name: MOMENTO_AUTHENTICATION
          valueFrom:
            secretKeyRef:
              name: momento-auth
              key: token
      ports:
        - containerPort: 11211
        - containerPort: 9999
```

This allows your application to send Memcached-compatible commands to `localhost:11211` and have them translated and forwarded to Momento Cache.

## Calling the sidecar in your code

Once the proxy is running as a sidecar, all you need to do is point your existing cache client to `localhost` (or `proxy` if using Docker Compose). Here's a simple example in Java using the [SpyMemcached](https://github.com/couchbase/spymemcached) client:

```java
import net.spy.memcached.MemcachedClient;
import java.net.InetSocketAddress;

public class App {
    public static void main(String[] args) throws Exception {
        // If running in Kubernetes, use localhost. In Docker Compose, use "proxy".
        MemcachedClient client = new MemcachedClient(
            new InetSocketAddress("localhost", 11211)
        );

        client.set("foo", 3600, "bar").get();
        Object value = client.get("foo");

        System.out.println("Value for key 'foo': " + value);
    }
}
```

💡 With this, all your `get` and `set` calls to Memcached are now being proxied to Momento Cache!
