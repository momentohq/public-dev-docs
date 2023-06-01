---
sidebar_position: 1
sidebar_label: Cheat Sheet
sidebar_class_name: sidebar-item-go
title: Cheat Sheet for Go
description: Get started really quickly coding using Go with Momento Cache
pagination_next: null
---

# Cheat Sheet for Go with Momento Cache
If you need to get going quickly with Go and Momento Cache, this page contains the basic API calls you'll need. [Check the Go SDK page](https://github.com/momentohq/client-sdk-go) for this code in a full file format.

## Requirements

* [Go installed](https://go.dev/dl/)
* A Momento Auth Token. Generate one using the form on [Momento web site](https://www.gomomento.com/) or using the Momento CLI.

## Create project and install the Momento client library
If you don't already have a go module created, first run this command in your directory of choice.
```cli
# Add an environment variable with your Momento auth token.
export MOMENTO_AUTH_TOKEN=<auth token that was emailed to you>

# Create a new module directory
mkdir my-example-project
cd ./my-example-project

# Create a module with go.mod file in the directory.
# See https://go.dev/doc/modules/gomod-ref for full docs on go mod
go mod init example/my-example-project

# Then, run this to get the Momento SDK.
go get github.com/momentohq/client-sdk-go
```

## Copy and paste the code
To see the entire code sample to run, you can find that in [the Momento Go SDK repository](https://github.com/momentohq/client-sdk-go).

Let's step through what that code is doing though.

## Import libraries and connect to return a CacheClient object
This code sets up the main function, the necessary imports, and getting the momento auth token from the environment variables that each of the other functions will utilize.

```go
package main

import (
	"context"
	"log"
	"time"

	"github.com/momentohq/client-sdk-go/auth"
	"github.com/momentohq/client-sdk-go/config"
	"github.com/momentohq/client-sdk-go/momento"
	"github.com/momentohq/client-sdk-go/responses"

    // We use this module to generate random keys and data later
	"github.com/google/uuid"
)

func main() {
	ctx := context.Background()
	var credentialProvider, err = auth.NewEnvMomentoTokenProvider("MOMENTO_AUTH_TOKEN")
	if err != nil {
		panic(err)
	}

	const (
		cacheName             = "my-test-cache"
		itemDefaultTTLSeconds = 60
	)
```

## Create a new cache in Momento Cache
Use this function to create a new cache in your account.

```go
// Create Cache
_, err = client.CreateCache(ctx, &momento.CreateCacheRequest{
    CacheName: cacheName,
})
if err != nil {
    panic(err)
}
```

## Write an item to the cache
A simple example of doing a set operation. In the client.set call, the TTL it optional. If you did pass it in, this would override the default TTL value set with the client connection object.

```go
// Sets key with default TTL and gets value with that key
key := uuid.NewString()
value := uuid.NewString()
log.Printf("Setting key: %s, value: %s\n", key, value)
_, err = client.Set(ctx, &momento.SetRequest{
    CacheName: cacheName,
    Key:       momento.String(key),
    Value:     momento.String(value),
})
if err != nil {
    panic(err)
}
```

## Read an item from the cache
This is an example of a simple read operation to get an item from a cache.

```go
log.Printf("Getting key: %s\n", key)
resp, err := client.Get(ctx, &momento.GetRequest{
    CacheName: cacheName,
    Key:       momento.String(key),
})
if err != nil {
    panic(err)
}

// See if you got a cache hit or cache miss
switch r := resp.(type) {
case *responses.GetHit:
    log.Printf("Lookup resulted in cache HIT. value=%s\n", r.ValueString())
case *responses.GetMiss:
    log.Printf("Look up did not find a value key=%s", key)
}
```

## Running the code
Don't forget to copy and paste the [entire file](https://github.com/momentohq/client-sdk-go), then run this command to execute the code.

```cli
go run main.go
```

:::info
Beyond these basic API calls check out the [API reference page](/develop/api-reference/index.mdx) for more information on the full assortment of Momento API calls.

For more code examples, check out the [Momento Go SDK repo](https://github.com/momentohq/client-sdk-go/tree/main/examples).
:::
