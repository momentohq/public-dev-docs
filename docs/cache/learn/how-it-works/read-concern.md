---
sidebar_position: 4
sidebar_label: Read Concern
title: How to use Read Concern
description: Learn about the `ReadConcern` option for Cache Clients, and how it can be used to guarantee consistency and save costs
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# What is Read Concern?

By default, a Momento Cache follows an eventual consistency model. That is, if you write a value from the cache, and then quickly read it back within a small fraction of a second, there is a slim, but possible chance that the response will not reflect the most recently updated value. Momento clients provide a configuration option `ReadConcern`, which can be used to tune this behavior. The `ReadConcern` configuration can be modified to tune the level of consistency and responsiveness that your system requires. It can be modified accordingly:


| Read Concern | Operation Count Multiplier           | Default |
|--------------|-----------------|---------|
| Balanced     | 1x              | Yes     |
| Consistent   | 6x              | No      |

:::note

Since this configuration is specified at the client level, it will be used for all api calls from that client. If there are only a few api calls that require read consistency, it is best to create 2 separate clients, one for a `Consistent` `ReadConcern`, and another for a `Balanced` `ReadConcern`. This way, only the consistent read requests will incur the 6x operations count multiplier.
:::

An example of instantiating a new client with a `Consistent` `ReadConcern` is shown below:

<SdkExampleTabs snippetId={'API_InstantiateCacheClientWithReadConcern'} />
