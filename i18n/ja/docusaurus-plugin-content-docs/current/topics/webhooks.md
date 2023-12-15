---
sidebar_position: 3
sidebar_label: Webhooks
sidebar_class_name: "sidebar-item-webhooks-overview"
title: Webhooks Overview
pagination_prev: null
description: Learn about Webhooks, an event-driven mechanism to listen to Momento Topics
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![An image of a fast moving city as Momento Topics](@site/static/img/webhooks-overview.png)

## Webhooks とは何か？

Webhookは、ソースからデスティネーションに送信されるアウトバウンドHTTPリクエストです。Webhookは、リッスン対象のイベントが公開されると自動的にトリガーされます。
Webhookは、2つの異なるシステム間のイベントドリブンアーキテクチャを促進する重要なコンポーネントになります。

## Momento の Webhooks

Momentoでは、Webhookはトピックメッセージを消費する追加の方法を提供します。Webhook は特定のトピックをリッスンして作成されます。
そのトピックにメッセージが公開されると、Momento は Webhook の宛先に HTTP POST リクエストを送信します。

## Webhook はどこで使えますか？

Webhookには、送信元と送信先の2つの側面があります。MomentoはすべてのWebhookの送信元なので、送信先が残ります。送信先は、Momentoが呼び出すことができる任意のPOST URLです。MomentoがPOSTできるURLであれば、Webhookの送信先として有効です。

### Serverless Webhooks

API Gatewayで支えられたLambda/Step Functionを作成するか、Cloud Run関数を使用して、それをWebhookへのエントリポイントにすることができます。Webhookが発火すると、Lambda/Step Functionはレスポンスを処理し、データを適切に処理します。データをどのように処理するかは完全にあなた次第です！
Slackへの投稿、データレイクへの送信、データベースエントリーの更新など、可能性は無限大となります。

## 例

- [多言語のチャットアプリケーション](https://github.com/momentohq/moderated-chat/) このチャットアプリケーションを使用すると、ユーザーは自動的に複数の言語で通信することができます。ユーザーはどの言語ストリームを聴くかを選択できます。メッセージが送信されるたびに、それは私たちのサポートされている言語に翻訳され、ユーザーがサブスクライブしている言語は、彼らが受け取る言語です。Webhookは、Lambda関数によって支えられたAPI Gatewayエンドポイントであり、パブリッシュされたすべてのメッセージを受信し、それらを翻訳し、サポートされているすべての言語トピックにそれらをパブリッシュします。

## ブログ記事

- [Using Webhooks with API Gateway + Lambda](https://www.gomomento.com/blog/how-to-use-webhooks-and-momento-topics-to-build-a-multi-language-chat-app) - 初めてのWebhook設定入門

## WebhooksのAPIコール

[WebhooksのAPIリファレンスページ](./develop/api-reference/webhooks)を参照してください。
