---
sidebar_position: 2
sidebar_label: Topics
title: Topics API reference
description: Learn how to interact programmatically with the Momento Topics API.
keywords:
  - momento
  - topics
  - pubsub
  - pub/sub
  - eda
  - event-driven architecture
  - serverless
  - resources
  - api
  - docs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Momento Topics（pub/sub）API を使用する

Momento Topics は、分散型アプリケーションの各部分間でリアルタイム通信を可能にするメッセージングパターンです。トピックの値をパブリッシュ(プロデュース)し、トピックからサブスクライブ(コンシューム)することを可能にします。このページでは、Momento Topics で操作するための Momento API メソッドについて詳しく説明します。

詳細は[Momento Topics](/topics)をご覧ください。

## Topics のメソッド

### Subscribe
このメソッドはステートフル接続でサブスクリプションイベントを受け取るためにトピックをサブスクライブします。

言語によっては、アイテム、ハートビート、不連続などの新しいサブスクリプションイベントを受け取るためにコールバック関数やイテレータを使用することができます。：
- アイテムは、文字列またはバイトメッセージ、トピックシーケンス番号、一意なトークン識別子があればそれを含みます([learn more](https://www.gomomento.com/blog/momento-topics-just-got-more-secure-introducing-embedded-token-identifiers))。
- ハートビートは接続がまだアクティブであることを示します。
- 不連続はサブスクリプションに中断があったことを示し、いくつかのメッセージはスキップされたかもしれません。

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

* Success - [subscription](./response-objects.md#subscription)オブジェクトを返します。
* Error

具体的な情報については[レスポンスオブジェクト](/topics/api-reference/response-objects)をご覧ください。

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

具体的な情報については[レスポンスオブジェクト](/topics/api-reference/response-objects)をご覧ください。

</details>

<SdkExampleTabs snippetId={'API_TopicPublish'} />

## TopicClient

ほとんどの Momento Cache API コールでは CacheClient を使用していますが、Topics については TopicClient オブジェクトを使用します。

<SdkExampleTabs snippetId={'API_InstantiateTopicClient'} />

## Example apps using Momento Topics APIs

A growing list of example apps using the Momento Topics.

Momento Topicsを使用したアプリの例が続々と増えています。

- [サーバーレスで作成されたアイテムをパブリッシュするマイクロサービス](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/lambda-examples/topics-microservice) このマイクロサービスはTypeScriptで書かれ、API Gateway、Lambda関数、Momento Topicsを使ってAWS上で実行される。(API Gateway上で適切なセキュリティが設定されていれば）他のサービスでも利用することができ、様々なトピックにメッセージを発行して他のアプリケーションから購読させることができます。この API に `topicName` と `topicValue` を渡すと、このサービスはその値をトピックにパブリッシュします。
