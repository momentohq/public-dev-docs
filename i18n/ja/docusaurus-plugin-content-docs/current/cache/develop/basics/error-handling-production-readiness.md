---
sidebar_position: 20
sidebar_label: SDK Error Handling
title: SDK error handling
description: Discover how to handle errors when using the Momento SDK.
pagination_next: null
---

import{ SdkExampleTabs }from "@site/src/components/SdkExampleTabs";// このインポートは、使用されていないように見えても必要です。inject-example-code-snippet// プラグインは、SdkExampleTabs のインスタンスを SdkExampleTabsImplimport{ SdkExampleTabsImpl }from "@site/src/components/SdkExampleTabsImpl" に変換します；

#





##



















<iframe width="560" height="315" src="https://www.youtube.com/embed/h9FiNCxlZso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

##



<img src="/img/sdk_retry_behavior.png" width="100%" alt="logic diagram depicting SDK retry behavior"/>

Momento SDKは、スロット付きリクエスト([制限超過](./../../limits/))を再試行しません。その他のエラーについては、要求された操作が [idempotent](https://en.wikipedia.org/wiki/Idempotence) でない場合、SDK は再試行しません。例えば、カウンターをインクリメントしているときにエラー応答を受け取った場合、SDKはあなたの代わりにリトライを行いません(これはオーバーカウントになる可能性があるため)。べきでない操作の場合、リトライするかどうかは開発者に選択させた方が安全です。
