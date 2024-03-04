---
sidebar_position: 4
sidebar_label: Read Concern
title: How to use Read Concern
description: Learn about the `ReadConcern` option for Cache Clients, and how it can be used to guarantee consistency and save costs
---

# What is Read Concern?

By default, a Momento Cache follows an eventual consistency model. That is, if you write a value from the cache, and then quickly read it back within a small fraction of a second, there is a slim, but possible chance that the response will not reflect the most recently updated value. Momento clients provide a configuration option `ReadConcern`, which can be used to configure this behavior. If a strongly consistent cache is necessary, or your system is flexible in regard to consistency, the read concern header can be modified accordingly:


| Read Concern                  | Cost Multiplier | Default |
|-------------------------------|-----------------|---------|
| Balanced                      | 1x              | Yes     |
| Consistent                    | 6x              | No      |
| Express                       | 0.8x            | No      |

:::note

Since this header is specified at the client level, it will be used for all api calls from that client. If there are only a few api calls that require read consistency, it is best to create 2 separate clients, one for a `Consistent` read concern, and another for a `Balanced` or `Expressed` read concern. This way, only the consistent read requests will incur the 6x cost multiplier. 
:::

An example of instantiating a new client with a `Consistent` read concern is shown below:

```go
context := context.Background()
credentialProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")
if err != nil {
    panic(err)
}
defaultTtl := time.Duration(9999)
eagerConnectTimeout := 30 * time.Second

client, err := momento.NewCacheClientWithEagerConnectTimeout(
    config.LaptopLatest().WithReadConcern(config.Consistent)
    credentialProvider,
    defaultTtl,
    eagerConnectTimeout,
)
```
