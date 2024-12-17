---
sidebar_position: 4
sidebar_label: Read Concern
title: How to use Read Concern
description: Learn about the `ReadConcern` option for Cache Clients, and how it can be used to guarantee consistency and save costs
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Read Concern とは何ですか?

デフォルトでは、Momentoキャッシュは最終一貫性モデルに従います。つまり、キャッシュから値を書き込んだ後、わずかな秒数でそれを読み返した場合、 レスポンスに直近に更新された値が反映されない可能性があります。Momento クライアントには `ReadConcern` という設定オプションが用意されており、これを使用してこの動作を調整することができます。`ReadConcern` 設定は、システムが必要とする一貫性と応答性のレベルを調整するために変更することができます。適宜変更して活用してください：


| Read Concern | 動作回数の係数          | Default |
|--------------|-----------------|---------|
| Balanced     | 1x              | Yes     |
| Consistent   | 6x              | No      |

:::note

この設定はクライアントレベルで指定されるので、そのクライアントからのすべてのapiコールに使用されます。読み込みの一貫性が必要な api 呼び出しが数件しかない場合は、2 つのクライアントを作成するのが最善です。1 つは `Consistent` `ReadConcern` 用、もう 1 つは `Balanced` `ReadConcern` 用です。こうすることで、一貫性のある読み取りのリクエストにのみ 6 倍の操作回数乗数が発生します。
:::

以下は `Consistent` `ReadConcern` を持つ新しいクライアントをインスタンス化する例です：

<SdkExampleTabs snippetId={'API_InstantiateCacheClientWithReadConcern'} />
