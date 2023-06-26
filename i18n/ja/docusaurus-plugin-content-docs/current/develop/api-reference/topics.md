---
sidebar_position: 4
sidebar_label: Topics (Pub/Sub)
title: Topics (pub/sub) API リファレンス
description: Momento Topics pub/sub API とプログラムでやりとりする方法を学びます。
slug: /develop/api-reference/topics
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Momento Cache装備のMomento Topics（Pub/Sub) APIを使用
Momento Topicsは、分散型アプリケーションの各部分間でリアルタイム通信を可能にするメッセージングパターンです。トピックの値をパブリッシュ（生産）し、サブスクライブ（消費）します。このページでは、Momento Topics で送受信するための Momento API のメソッドについて詳しく説明します。

詳細は[Momento Topics](./../../introduction/momento-topics.md)をご覧ください。

## Topics のメソッド

### サブスクライブ
このメソッドでは、ステートフルな接続を用いて新しい値を受け取るためにトピックをサブスクライブします。

| 名前            | タイプ            | 説明                                   |
| --------------- | --------------- | --------------------------------------------- |
| キャッシュ名       | String          | トピックが存在するキャッシュの名前です。     |
| トピック名       | String          | サブスクライブするトピックの名前です。           |

<Tabs>
  <TabItem value="golang" label="Go" default>
    これが <a href="https://github.com/momentohq/client-sdk-go/blob/main/examples/pubsub-example/main.go#L26">サンプルコード</a>です。
  </TabItem>
  <TabItem value="nodejs" label="Node.js" default>
    Coming soon.
  </TabItem>
</Tabs>

<details>
  <summary>メソッド レスポンス オブジェクト</summary>

* 成功 - サブスクリプション オブジェクトを返します。
* エラー

具体的な情報については[レスポンスオブジェクト](./response-objects.md)をご覧ください。

返されたサブスクリプションオブジェクトをforループに入ると、新しい値がトピックに公開されるとイベントがコードに送信されます。

</details>

<SdkExampleTabs snippetId={'API_TopicSubscribe'} />

### パブリッシュ
メッセージをトピックにパブリッシュします。

| 名前            | タイプ            | 説明                                   |
| --------------- | --------------- | --------------------------------------------- |
| キャッシュ名       | String          | トピックが存在するキャッシュの名前です。     |
| トピック名       | String          | 値をパブリッシュするトピック名です、    |
| 値           | String / bytes  | 　トピックにパブリッシュする値です。                |

<Tabs>
  <TabItem value="golang" label="Go" default>
    こちらが<a href="https://github.com/momentohq/client-sdk-go/blob/main/examples/pubsub-example/main.go#L95">サンプルコード</a>です。
  </TabItem>
  <TabItem value="nodejs" label="Node.js" default>
    Coming soon.
  </TabItem>
</Tabs>

<details>
  <summary>メソッド レスポンス オブジェクト</summary>

* 成功
* 失敗

具体的な情報については[レスポンスオブジェクト](./response-objects.md)をご覧ください。

</details>

<SdkExampleTabs snippetId={'API_TopicPublish'} />

## TopicClient

ほとんどの Momento Cache API コールでは CacheClient を使用していますが、Topics については TopicClient オブジェクトを使用します。

<SdkExampleTabs snippetId={'API_InstantiateTopicClient'} />
