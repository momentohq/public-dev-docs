---
sidebar_position: 3
sidebar_label: AWS Secrets Manager
title: Momento + AWS Secrets Manager
description: Learn how to retrieve your Momento API Key in AWS Secrets Manager.
---

import{ SdkExampleTabs }from "@site/src/components/SdkExampleTabs";// このインポートは、使用されていないように見えても必要です。inject-example-code-snippet// プラグインは、SdkExampleTabs のインスタンスを SdkExampleTabsImplimport{ SdkExampleTabsImpl }from "@site/src/components/SdkExampleTabsImpl" に変換します；

#



:::info

Momento`CacheClientと` `TopicClient`オブジェクトを可能な限り再利用するのと同様に、AWS Secrets ManagerからMomento認証トークンも再利用する必要があります。そうしないと、AWS Secrets Manager への往復のために、Momento API 呼び出しのたびに時間とコストの両方が追加される危険性があります。コストを低く抑え、AWS Secrets Manager によるスロットリングを避けるには、この[AWS ブログで](https://aws.amazon.com/blogs/security/use-aws-secrets-manager-client-side-caching-libraries-to-improve-the-availability-and-latency-of-using-your-secrets/)詳しく説明されているように、クライアント側で認証情報をキャッシュするのが最善です。

:::

## AWS Secrets Manager のエントリ



![AWSシークレットマネージャー](/img/aws-secrets-manager.png)

## AWS Secrets Manager のコード例

\<SdkExampleTabs{'API_retrieveAuthTokenFromSecretsManager'}/>を参照してください。

## FAQ

<details>
 <summary>これを行う必要がありますか？</summary>
Momentoの認証トークンを環境変数やファイルに保存することもできますが、AWS Secrets Managerに保存するほど安全ではないので、ベストプラクティスではありません。
</details>
