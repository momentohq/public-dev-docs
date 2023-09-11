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

<img src="/img/topics-api.jpg" width="100%" alt="An image showing the movement of lots of data, messages published, moved to where they need to go quickly and accurately." />

詳細は[Momento Topics](./../../introduction/momento-topics.md)をご覧ください。

## Topics のメソッド

### Subscribe
このメソッドでは、ステートフルな接続を用いて新しい値を受け取るためにトピックをサブスクライブします。

| 名前            | 型            | 説明                                   |
| --------------- | --------------- | --------------------------------------------- |
| cacheName       | String          | トピックが存在するキャッシュの名前     |
| topicName       | String          | サブスクライブするトピックの名前           |

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
| cacheName       | String          | トピックが存在するキャッシュの名前     |
| topicName       | String          | 値をパブリッシュするトピック名    |
| value           | String / bytes  | 　トピックにパブリッシュする値                |

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

## Example apps using Momento Topics APIs

A growing list of example apps using the Momento Topics.

Momento Topicsを使用したアプリの例が続々と増えています。

- [サーバーレスで作成されたアイテムをパブリッシュするマイクロサービス](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/lambda-examples/topics-microservice) このマイクロサービスはTypeScriptで書かれ、API Gateway、Lambda関数、Momento Topicsを使ってAWS上で実行される。(API Gateway上で適切なセキュリティが設定されていれば）他のサービスでも利用することができ、様々なトピックにメッセージを発行して他のアプリケーションから購読させることができます。この API に `topicName` と `topicValue` を渡すと、このサービスはその値をトピックにパブリッシュします。
