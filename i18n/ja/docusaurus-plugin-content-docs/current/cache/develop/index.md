---
sidebar_position: 4
sidebar_label: Develop
title: Developing applications with Momento SDKs
description: Learn the core concepts for getting started with the Momento SDKs.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Momento SDKを使用したアプリケーションの開発

ようこそ！ このページでは、MomentoのすべてのSDKでMomentoクライアントを設定するために必要な一般的な構成に関する情報を提供します。このページでは、Momentoの認証情報（APIキーと呼ばれます）の提供方法、クライアントの設定方法、エラー処理と本番環境への準備に関する基本的な情報について説明します。

## キャッシュクライアントの構築

`CacheClient` は、Momento サービスとやり取りする際に使用するメインのオブジェクトです。
インスタンスを作成するには、`CredentialProvider` と `Configuration`、そしてデフォルトの TTL (time to live) 値を渡す必要があります。デフォルトの TTL は、その `CacheClient` を使用しているアイテムがキャッシュから削除されるまでの保存期間を決定します。`Set` オペレーションを実行する場合、そのオペレーション固有の TTL 値をオーバーライドすることができます。
詳細は [Momento Cache における Time-to-Live (TTL) によるデータの有効期限](./learn/how-it-works/expire-data-with-ttl) を参照してください。

以下に `CacheClient` の作成例を示します：

<SdkExampleTabs snippetId={'API_InstantiateCacheClient'} />

## Momento API キーを使用してクレデンシャルプロバイダをインスタンス化する

Momentoクライアントをインスタンス化する際に、Momento APIキーを提供する必要があります。まだ持っていない場合は、[Momento Web Console](https://console.gomomento.com/) から取得できます。トークンを取得したら、`CredentialProvider` のインスタンスを作成する際に Momento SDK にトークンを渡します。環境変数または文字列から `CredentialProvider` オブジェクトを作成するための便利なファクトリメソッドが用意されている。以下は、環境変数から `CredentialProvider` のインスタンスを生成する方法の例である：

<SdkExampleTabs snippetId={'API_CredentialProviderFromEnvVar'} />

Momentoの認証トークンを[AWS Secret Manager](https://aws.amazon.com/secrets-manager/)や[GCP Secret Manager](https://cloud.google.com/secret-manager)などのシークレットマネージャやローカルの設定ファイルに保存している場合は、まずそこから認証情報を取得し、次のように文字列から`CredentialProvider`をインスタンス化する必要があります：

<SdkExampleTabs snippetId={'API_CredentialProviderFromString'} />

AWS Secrets Manager から認証情報を取得する例については、[Retrieving a Momento auth token from AWS Secrets Manager](./develop/integrations/aws-secrets-manager) を参照してください。

Momento 認証に関する一般的な情報は、[認証ページ](./develop/authentication) を参照してください。

さらに詳しい情報は、[レスポンスオブジェクト](./develop/api-reference/response-objects) ページや、使用している SDK のドキュメント (左ナビの `Develop`->`SDKs`) を参照してください。
