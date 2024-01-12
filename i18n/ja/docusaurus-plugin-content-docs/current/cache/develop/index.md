---
sidebar_position: 4
sidebar_label: Develop
title: Developing applications with Momento SDKs
description: Learn the core concepts for getting started with the Momento SDKs.
---

import{ SdkExampleTabs }from "@site/src/components/SdkExampleTabs";// このインポートは、使用されていないように見えても必要です。inject-example-code-snippet// プラグインは、SdkExampleTabs のインスタンスを SdkExampleTabsImplimport{ SdkExampleTabsImpl }from "@site/src/components/SdkExampleTabsImpl" に変換します；

# Momento SDKを使用したアプリケーションの開発



## キャッシュクライアントの構築

`CacheClient`は、Momento サービスとやり取りするコードで使用するメイン・オブジェクトです。インスタンスを作成するには、`CredentialProvider`、`Configuration`、およびデフォルトの TTL (time to live) 値を渡す必要があります。デフォルトの TTL は、その`CacheClient`を使用するアイテムがキャッシュから削除されるまでの保存期間を決定します。`Set`操作を実行する場合、その操作に固有のこの TTL 値をオーバーライドできます。詳細は、「[Momento Cache の TTL (Time-to-Live) によるデータの有効期限](./learn/how-it-works/expire-data-with-ttl)」を参照してください。

`CacheClient の`構築方法の例を示します：

\<SdkExampleTabs{'API_InstantiateCacheClient'}/>を参照してください。

##



\<SdkExampleTabs{'API_CredentialProviderFromEnvVar'}/>を使用します。

[AWSシークレットマネージャ](https://aws.amazon.com/secrets-manager/)、[GCPシークレットマネージャ](https://cloud.google.com/secret-manager)、ローカル設定ファイルなどのシークレットマネージャにMomento認証トークンを保存している場合は、まずそこから認証情報を取得し、次のように文字列から`CredentialProviderを`インスタンス化する必要があります：

\<SdkExampleTabsのsnippetId={'API_CredentialProviderFromString'}/>。

AWS Secrets Manager から認証情報を取得する例については、「[AWS Secrets Manager から Momento 認証トークンを取得する](./develop/integrations/aws-secrets-manager)」を参照してください。

Momento 認証に関する一般的な情報は、[認証のページを](./develop/authentication)参照ください。

さらに詳しい情報は、[レスポンスオブジェクトの](./develop/api-reference/response-objects)ページや SDK のドキュメント (左ナビの`Develop ->``SDKs`) を参照してください。
