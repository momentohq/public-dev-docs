---
sidebar_position: 11
sidebar_label: Amazon EventBridge
title: Momento + Amazon EventBridge
description: Trigger async events in Momento directly with Amazon EventBridge!
---

AWSでイベントドリブンアーキテクチャを構築している方なら、[Amazon EventBridge](https://aws.amazon.com/eventbridge/)を知っているでしょう。このサーバーレスイベントバスサービスは、イベントのフィルタリング、変換、ルーティング、配信を堅牢なエラー処理と高可用性で支援します。これをMomentoで直接使えたら最高だと思いませんか？

:::tip

このページでは、EventBridgeとMomentoを接続するための汎用パターンを紹介します。

より具体的な例としては、[DynamoDB-Momento EventBridge Demo](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/aws/eventbridge)をご覧ください！
このプロジェクトでは、DynamoDB StreamsとAWS EventBridgeを使ってMomentoにライトスルーキャッシュを作成する方法を紹介します。
このアプリを使うと、DynamoDBテーブルのアイテムを作成・更新・削除し、その変更をリアルタイムにキャッシュ/トピックに反映させることができます。

:::

Momentoの[HTTP API](../develop/api-reference/http-api.md)と[Amazon EventBridge API Destinations](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html)を使うことで、ワークフローで`PutEvents`を呼び出すだけで非同期イベントをトリガーすることができます。

![Diagram of compute resources triggering an event that calls Momento](@site/static/img/eventbridge_destinations.png)

1. コンピュートサービスが EventBridge の `PutEvents` API を呼び出す。
2. EventBridgeは、イベントの内容に基づいて、イベントを[ルール](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-rules.html)にルーティングする。
3. Qualifying ルールは APIを呼び出す。
4. APIは[AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)から認証トークンを検索する。
5. イベントペイロードは変換され、Momento HTTP APIを呼び出す。

このワークフローのイベントベースの性質を考えると、*それは非同期処理*であり、あなたのコードは続行する前に完了を待つことはないです。何かがうまくいかなかったり、APIがエラーを返したりした場合、メッセージは[dead letter queue](https://aws.amazon.com/what-is/dead-letter-queue/)に配送されます。

## Tl;dr
このボタン[[スタック起動ボタン](@site/static/img/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?stackName=momento-api&templateURL=https://momento-developers.s3.amazonaws.com/api-destinations.yaml)をクリックすることで、EventBridgeリソースをアカウントに直接デプロイできます。

## AWSへデプロイ

上記の*Launch stack*ボタンを押すと、AWSのCloudFormationコンソールへのタブが開きます。[Momento Console](https://console.gomomento.com/tokens)から作成できます。このスタックをデプロイしたいリージョンでスーパーユーザートークンを作成できます。トークンを生成したら、コンソールに戻ってプロパティを入力してください。これはあなたに代わって Secrets Manager に安全に保存されます。

オプションで、ルールがトリガーされるEventBridgeイベントバス名を指定できます。デフォルトのイベントバスが自動的に入力されますが、既存のイベントバスを使用することもできます。有効なバス名を指定しないと、デプロイは失敗します。

![CloudFormation UI with deployment parameters configured](@site/static/img/eb-destination-ui.png)

2つのパラメータを入力し、*Create stack*を押すと、リソースが自動的にデプロイされます。*MomentoはAWSのようにリージョンベースであり、認証トークンは特定のリージョンをターゲットにしています。HTTP API の場合、使用したいリージョンに応じて [異なるベース URL](../api-reference/http-api.md#regions) をヒットする必要があります。私たちが提供するクイックスタートは、デプロイ時に適切なベースURLを決定するので、考える必要はありません👍

これは、MomentoがサポートするAWSリージョンでのみ機能します。

* us-east-1
* us-west-2
* ap-northeast-1
* ap-south-1
* eu-west-1

### リソース

デプロイされたスタックは、AWSアカウントに以下のリソースを作成します：

* 1x [EventBridge Connection](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_Connection.html) - Momento への接続情報を保存します。
* 3x EventBridge API Destinations - *Cache Item Set*、*Cache Item Delete*、*Topic Publish* 。
* 3x EventBridge Rules - APIコールをトリガーするためのルール。
* 1x IAM Role - ルールがトリガーされたときに、EventBridgeがデスティネーションを呼び出すことを許可します。
* 1x SQS キュー - 配信失敗時のデッドレターキュー用

生のCloudFormationテンプレートを見たい場合は、[ここをクリック](https://momento-developers.s3.amazonaws.com/api-destinations.yaml)。

## APIコールのトリガー

現在、この統合では、*Cache Item Set*、*Cache Item Delete*、*Topic Publish*の 3 つの API 呼び出しをサポートしています。これらのルールを呼び出すには、構成されたイベント・バスにイベントを配置する必要があります。

### キャッシュ項目の設定

キャッシュアイテムを設定するには、以下の情報を含むイベントをパブリッシュします。：

**Detail Type**: *cacheSet*

**Payload**
```jsonc
{
  "cacheName": "<your cache name>",
  "key": "<cache item key>",
  "key_base64": "<cache item key base-64 encoded>",
  "message": "<value to save to the cache item>",
  "ttl": 60 // time to live in seconds 
}
```

すべての値は必須で、キャッシュ名はあなたのアカウントで利用可能な有効な既存のキャッシュでなければなりません。キャッシュを持っていない場合は、[ここで作成](https://console.gomomento.com) することができます。

*注意 -* `key` プロパティと `key_base64` プロパティは互いに排他的です。両方を指定した場合 (またはどちらも指定しなかった場合)、キャッシュアイテムは設定されません。

### キャッシュアイテムの削除

キャッシュアイテムは自動的に期限切れになりますが、手動で削除する必要がある場合は、以下のイベントを使用できます：

**Detail Type**: *cacheDelete*

**Payload**
```jsonc
{
  "cacheName": "<your cache name>",
  "key": "<cache item key>",
  "key_base64": "<cache item key base-64 encoded>"
}
```

繰り返しますが、`key` プロパティと `key_base64` プロパティは互いに排他的です。両方を指定するとエラーとなり、キャッシュアイテムは削除されません。

### トピックへのパブリッシュ

以下のイベントを使えば、（Authトークンで制限されていない限り）どのトピックにも公開できる：

**Detail Type**: *topicPublish*

**Payload**

```jsonc
{
  "cacheName": "<your cache name>",
  "topicName": "<your topic name>",
  "message": "<value to publish to the topic>"
}
```

## 想定される使用例

EventBridge経由でキャッシュアイテムの更新やトピックへのパブリッシュができるようになると、さまざまなユースケースが考えられます：

* EventBridgeパイプを使用して、DynamoDBストリームからキャッシュ・アイテムを自動的に更新または削除します。
* ステップ関数ワークフローを使用して、ユーザ・インターフェースのエンド・ユーザにステータスの更新を直接送信。
* すでにEventBridgeを使用しているファンアウト操作からのキャッシュアイテムの更新

## 例

以下は、AWS SDK v3 for JavaScript を使用して、デフォルトのイベントバス上の EventBridge イベントを経由してキャッシュにアイテムを保存する例です：

```javascript
const events = new EventBridgeClient(config);
await events.send(new PutEventsCommand({
  Entries: [
    {
      Source: 'demo',
      DetailType: 'cacheSet',
      Detail: JSON.stringify({
        cacheName: 'my-cache',
        key: 'test-key',
        message: 'hello world!',
        ttl: 300
      })
    }
  ]
}));
```

このコードが実行されると、デフォルトのイベントバスにイベントをパブリッシュし、*Cache Item Set*ルールをトリガーしてAPIを呼び出し、`my-cache`キャッシュに5分間（300秒間）*hello world!*という値でキャッシュアイテムをセットする。

## 試してみよう！

このインテグレーションは、私たちのHTTP APIがより多くの機能を得るにつれて成長し続けます。いつでもここに戻ってきて、[スタックを AWS アカウントにデプロイ](https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?stackName=momento-api&templateURL=https://momento-developers.s3.amazonaws.com/api-destinations.yaml) して、アップデートされたバージョンを自動的に取得することができます。

スタックをアカウントにデプロイする際に問題がある場合や、他の地域のサポートをご希望の場合は、お気軽に[Discord](https://discord.com/invite/3HkAKjUZGq)までご連絡ください。
