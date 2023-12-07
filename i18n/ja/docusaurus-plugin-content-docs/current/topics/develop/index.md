---
sidebar_position: 4
sidebar_label: Develop
sidebar_class_name: "sidebar-item-api-reference"
title: Developing applications with Momento SDKs
description: Learn the core concepts for getting started with the Momento SDKs.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Momento SDKを使用したアプリケーションの開発

ようこそ！ このページでは、すべてのSDKでMomentoクライアントを設定するために必要な一般的な構成に関する情報を提供します。このページでは、Momento の認証情報 (auth トークンと呼ばれます) の提供方法、クライアントの設定方法、エラー処理と本番環境への対応に関する基本的な情報を説明します。

<img src="/img/city.jpg" width="90%" alt="a technical illustration on a white background depicting the intersection of speed, ease of use, and security." />

## Topics クライアントの構築

`TopicClient` は、Momento のサービスとやり取りする際に使用するメインのオブジェクトです。
インスタンスを作成するには、`CredentialProvider` と `Configuration`、そしてデフォルトの TTL (time to live) 値を渡す必要があります。
デフォルトの TTL は、`CacheClient` を使用したアイテムがキャッシュから削除されるまでのキャッシュ保存期間を決定します。

以下は `TopicClient` の作成例です。：

<SdkExampleTabs snippetId={'API_InstantiateTopicClient'} />

## Momento API キーを使用してクレデンシャル プロバイダをインスタンス化する

Momento クライアントをインスタンス化する際に、Momento APIキーを提供する必要があります。まだ持っていない場合は、[Momento Web Console](https://console.gomomento.com/) から取得できます。トークンを取得したら、`CredentialProvider` のインスタンスを作成する際に Momento SDK にトークンを渡します。環境変数または文字列から `CredentialProvider` オブジェクトを作成するための便利なファクトリメソッドが用意されています。
以下は、環境変数から `CredentialProvider` のインスタンスを生成する方法の例になります。：

<SdkExampleTabs snippetId={'API_CredentialProviderFromEnvVar'} />

[AWS Secret Manager](https://aws.amazon.com/secrets-manager/)、[GCP Secret Manager](https://cloud.google.com/secret-manager)、またはローカルの設定ファイルなどのシークレットマネージャにMomento APIキーを保存している場合は、まずそこから認証情報を取得し、次のように文字列から`CredentialProvider`をインスタンス化する必要があります：

<SdkExampleTabs snippetId={'API_CredentialProviderFromString'} />

AWS Secrets Manager から認証情報を取得する例については、[Retrieving a Momento auth token from AWS Secrets Manager](./develop/integrations/aws-secrets-manager) を参照してください。

Momento 認証に関する一般的な情報は、[認証ページ](./develop/authentication) を参照してください。

さらに詳しい情報は、[レスポンスオブジェクト](./develop/api-reference/response-objects) ページや、使用している SDK のドキュメント (左ナビの `Develop`->`SDKs`) を参照してください。
