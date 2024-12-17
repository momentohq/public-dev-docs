---
sidebar_position: 2
sidebar_label: AWS Secrets Manager
title: Momento + AWS Secrets Manager
description: Learn how to retrieve your Momento Auth Token in AWS Secrets Manager.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# AWS Secrets Manager から Momento 認証トークンを取得する

Momentoの認証トークンは安全に保管するのがベストプラクティスです。AWS を使用している場合は、[AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html) に認証トークンを安全に保存できます。これにより、正しい IAM 認証情報で実行されているコードのみが認証トークンを取得し、Momento Cache や Momento Topics にアクセスするために使用できるようになります。

:::info

Momento の `CacheClient` オブジェクトと `TopicClient` オブジェクトを可能な限り再利用するのと同様に、AWS Secrets Manager からの Momento 認証トークンも再利用する必要があります。そうしないと、Momento API を呼び出すたびに、AWS Secrets Manager との往復に時間とコストがかかることになります。コストを抑え、AWS Secrets Manager によるスロットリングを避けるには、この [AWS ブログ](https://aws.amazon.com/blogs/security/use-aws-secrets-manager-client-side-caching-libraries-to-improve-the-availability-and-latency-of-using-your-secrets/) にあるように、クライアントサイドで認証情報をキャッシュするのがベストです。

:::

## AWS Secrets Managerのエントリ

Momentoの認証トークンをAWS Secrets Managerに挿入するときは、このスクリーンショットのようにJSONを含まないプレーンテキストにします。(トークンはセキュリティのためにぼかしてあります)

![AWS Secrets Manager](/img/aws-secrets-manager.png)

## AWS Secrets Managerのコード例

<SdkExampleTabs snippetId={'API_retrieveAuthTokenFromSecretsManager'} />

## FAQ

<details>
  <summary>こうしなければなりませんか？</summary>

  Momentoの認証トークンを環境変数やファイルに保存することはできますが、AWS Secrets Managerなどに保存するよりも安全ではないため、ベストプラクティスではありません。

</details>
