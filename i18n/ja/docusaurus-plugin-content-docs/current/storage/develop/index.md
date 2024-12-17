---
sidebar_position: 6
sidebar_label: Develop
title: Developing applications with Momento SDKs
description: Learn the core concepts for getting started with the Momento SDKs.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Developing applications with Momento SDKs

ようこそ このページでは、MomentoのすべてのSDKでMomentoクライアントをアセンブルするために必要な一般的な構成に関する情報を提供します。このページでは、Momentoの認証情報（APIキーと呼ばれます）の提供方法、クライアントの設定方法、エラー処理と本番環境への準備に関する基本的な情報について説明します。
## Constructing a Storage Client

`StorageClient` は、Momento のサービスとやり取りする際に使用するメインのオブジェクトである。インスタンスを作成するには、 `CredentialProvider` と `Configuration` を渡す必要があります。

以下に `StorageClient` の作成例を示します：

<SdkExampleTabs snippetId={'API_Storage_InstantiateClient'} />

## Instantiating credential providers using Momento API keys

Momentoクライアントをインスタンス化する際に、Momento APIキーを提供する必要があります。まだ持っていない場合は、[Momento Web Console](https://console.gomomento.com/) から取得できます。トークンを取得したら、`CredentialProvider` のインスタンスを作成する際に Momento SDK にトークンを渡す。環境変数または文字列から `CredentialProvider` オブジェクトを作成するための便利なファクトリメソッドが用意されています。以下は、環境変数から `CredentialProvider` のインスタンスを生成する方法の例です：

<SdkExampleTabs snippetId={'API_CredentialProviderFromEnvVar'} />

Momentoの認証トークンを[AWS Secret Manager](https://aws.amazon.com/secrets-manager/)や[GCP Secret Manager](https://cloud.google.com/secret-manager)などのシークレットマネージャやローカルの設定ファイルに保存している場合は、まずそこから認証情報を取得し、次のように文字列から`CredentialProvider`をインスタンス化する必要があります：

<SdkExampleTabs snippetId={'API_CredentialProviderFromString'} />

AWS Secrets Managerから認証情報を取得する方法の例については、[Retrieving a Momento auth token from AWS Secrets Manager](/cache/integrations/aws-secrets-manager) を参照してください。

詳細については、[APIリファレンス](./develop/api-reference)ページや、使用している特定の[SDK](/platform/sdks)のドキュメントを参照してください。
