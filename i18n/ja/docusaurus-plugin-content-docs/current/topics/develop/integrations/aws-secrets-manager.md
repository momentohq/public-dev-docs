---
sidebar_position: 3
sidebar_label: AWS Secrets Manager
title: Momento + AWS Secrets Manager
description: AWS Secrets ManagerからMomento認証トークンを取得する方法を学ぶ。
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# AWS Secrets ManagerからMomento認証トークンを取得する
Momento認証トークンを安全に保存することがベストプラクティスです。AWSをご使用の場合は、Momento認証トークンを[AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)に安全に保存することができます。そして、正しいIAMクレデンシャルで実行されているコードのみがMomento認証トークンを取得し、そのトークンを使ってMomento CacheまたはMomento Topicsにアクセスできるようになります。

:::備考

可能であればMomentoの`CacheClient`と`TopicClient`オブジェクトを再利用した方がいいように、AWS Secrets Managerから取得したMomento認証トークンを使ってこれらのオブジェクトを再利用した方がよいです。再利用しなければ、AWS Secrets Managerへのラウンドトリップに対する各MomentoAPI呼び出しに対して、時間面と金銭面の両方から負担が増える危険性が生じます。負担を抑え、AWS Secrets Managerによって管理される可能性を排除するには、この[AWSブログ](https://aws.amazon.com/blogs/security/use-aws-secrets-manager-client-side-caching-libraries-to-improve-the-availability-and-latency-of-using-your-secrets/)で詳細にご説明させていただいた通り、クライアント側のクレデンシャルのキャッシュを使用するのがベストです。
:::

## AWS Secrets Managerへの入力

Momento認証トークンをAWS Secrets Managerへ入力する際は、下のスクリーンショットの通り、JSONを含まないプレーンテキストとして入力するようにしてください（セキュリティのためトークンにはぼかしを入れております）。

![AWS Secrets Manager](@site/static/img/aws-secrets-manager.png)

## AWS Secrets Managerのコード例

<SdkExampleTabs snippetId={'API_retrieveAuthTokenFromSecretsManager'} />

## よくある質問（FAQ）

<details>
  <summary>Momento認証トークンをAWS Secrets Managerに保存する必要がありますか？</summary>
いいえ、必要ありません。Momento認証トークンを環境変数またはファイルに保存できますが、AWS Secrets Manager等に保存するよりも安全性が低いため、ベストプラクティスではありません。
</details>
