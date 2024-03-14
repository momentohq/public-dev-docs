---
sidebar_position: 4
sidebar_label: Read Concern
title: How to use Read Concern
description: Learn about the `ReadConcern` option for Cache Clients, and how it can be used to guarantee consistency and save costs
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Read Concern とは何ですか?

デフォルトでは、Momentoキャッシュは最終一貫性モデルに従います。つまり、キャッシュから値を書き込んだ後、わずかな秒数でそれを読み返した場合、 レスポンスに直近に更新された値が反映されない可能性があります。Momento クライアントには `ReadConcern` という設定オプションが用意されており、これを使用してこの動作を調整することができます。`ReadConcern` 設定は、システムが必要とする一貫性と応答性のレベルを調整するために変更することができます。適宜変更して活用してください：


| Read Concern | Operation Count Multiplier           | Default |
|--------------|-----------------|---------|
| Express      | 0.8x            | No      |
| Balanced     | 1x              | Yes     |
| Consistent   | 6x              | No      |

:::note

Since this configuration is specified at the client level, it will be used for all api calls from that client. If there are only a few api calls that require read consistency, it is best to create 2 separate clients, one for a `Consistent` `ReadConcern`, and another for a `Balanced` or `Express` `ReadConcern`. This way, only the consistent read requests will incur the 6x operations count multiplier.
:::

An example of instantiating a new client with a `Consistent` `ReadConcern` is shown below:

<SdkExampleTabs snippetId={'API_InstantiateCacheClientWithReadConcern'} />
