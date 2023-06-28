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

# Momento Cache とともに Momento Topics（pub/sub）API を使用する
Momento Topics は、分散型アプリケーションの各部分間でリアルタイム通信を可能にするメッセージングパターンです。トピックの値をパブリッシュ(プロデュース)し、トピックからサブスクライブ(コンシューム)することを可能にします。このページでは、Momento Topics で操作するための Momento API メソッドについて詳しく説明します。

詳細は[Momento Topics](./../../introduction/momento-topics.md)をご覧ください。

## Topics のメソッド

### Subscribe
このメソッドでは、ステートフルな接続を用いて新しい値を受け取るためにトピックをサブスクライブします。

| 名前            | 型            | 説明                                   |
| --------------- | --------------- | --------------------------------------------- |
| キャッシュ名       | String          | トピックが存在するキャッシュの名前     |
| トピック名       | String          | サブスクライブするトピックの名前           |

<Tabs>
  <TabItem value="golang" label="Go" default>
    これが <a href="https://github.com/momentohq/client-sdk-go/blob/main/examples/pubsub-example/main.go#L26">サンプルコード</a>です。
  </TabItem>
  <TabItem value="nodejs" label="Node.js" default>
    Coming soon.
  </TabItem>
</Tabs>

<details>
  <summary>メソッドのレスポンスオブジェクト</summary>

* Success - サブスクリプションオブジェクトを返します。
* Error

具体的な情報については[レスポンスオブジェクト](./response-objects.md)をご覧ください。

返されたサブスクリプションオブジェクトをforループに置くと、新しい値がトピックに公開される時にコードにイベントが送信されます。

</details>

<SdkExampleTabs snippetId={'API_TopicSubscribe'} />

### Publish
メッセージをトピックにパブリッシュします。

| 名前            | 型            | 説明                                   |
| --------------- | --------------- | --------------------------------------------- |
| キャッシュ名       | String          | トピックが存在するキャッシュの名前     |
| トピック名       | String          | 値をパブリッシュするトピック名    |
| 値           | String / bytes  | 　トピックにパブリッシュする値                |

<Tabs>
  <TabItem value="golang" label="Go" default>
    こちらが<a href="https://github.com/momentohq/client-sdk-go/blob/main/examples/pubsub-example/main.go#L95">サンプルコード</a>です。
  </TabItem>
  <TabItem value="nodejs" label="Node.js" default>
    Coming soon.
  </TabItem>
</Tabs>

<details>
  <summary>メソッドのレスポンスオブジェクト</summary>

* Success
* Error

具体的な情報については[レスポンスオブジェクト](./response-objects.md)をご覧ください。

</details>

<SdkExampleTabs snippetId={'API_TopicPublish'} />

## TopicClient

ほとんどの Momento Cache API コールでは CacheClient を使用していますが、Topics については TopicClient オブジェクトを使用します。

<SdkExampleTabs snippetId={'API_InstantiateTopicClient'} />
