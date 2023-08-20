---
sidebar_position: 4
sidebar_label: Momento の認証トークン
title: Momento の認証トークンを使用する
description: 有効期限がある認証トークンを使用してアプリケーションのセキュリティを強化する方法について学ぶ
pagination_next: null
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Momento の認証トークンを使用する

アプリケーションから Momento のサービスにアクセスするには、Momento の認証トークンが必要です。認証トークンは Momento が生成する英数字の文字列で、あなたのアカウントと選択したクラウドプロバイダのリージョンに固有のものです。認証トークンを作成する際、2種類の有効期限を設定できます：

1. 有効期限のない認証トークン。これは開発/テスト環境でのみ使用すべきです。
2. 有効期限があり、定期的なローテーションが必要な認証トークン。有効期限は、7、30、60、90 日、あるいは特定の暦日を選択できるカスタムで設定できます。有効期限がある認証トークンは、本番環境におけるベストプラクティスと考えられています。このページではその方法を説明します。

:::info
有効期限がある認証トークンを使用することに加えて、[AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)や[GCP Secret Manager](https://cloud.google.com/secret-manager)のようなサービスに認証トークンを保存するのがベストプラクティスです。[AWS Secrets Manager から Momento の認証トークンを取得する方法](/develop/integrations/aws-secrets-manager)を参照してください。
:::

## 有効期限があるトークンの生成

### ステップ 1: サインアップするか、Momento コンソールにログインする
[Momento コンソール](https://console.gomomento.com/tokens)にアクセスし、指示に従ってメールアドレス、Googleアカウント、またはGitHubアカウントでログインします。

![image](/img/getting-started/console.png)

### ステップ 2: Momento 認証トークンを生成する
コンソールでメニューを開き、token を選択する。

![image of console menu](/img/getting-started/auth-token.gif)

トークンページで、1/ クラウド・プロバイダーを選択し、2/ 利用可能なリージョンをドロップダウンリストから選択し、3/ トークンの有効期限を選択し、4/ "Generate Token "ボタンを押す。

![image](/img/getting-started/select-provider-region.png)

下にスクロールすると、グレーのボックスにトークンが表示されます。スクリーンショットのトークンはぼかされていますが、あなたのトークンはぼかされていません。ボックスには3つのフィールドがあります：
1. Auth Token: アプリケーションが Momento にアクセスするための実際の認証トークンです。このトークンは、指定した期間が経過すると失効します。
2. Refresh Token: 現在のトークンの有効期限が切れる前に、プログラムで新しい認証トークンを取得したい場合は、このリフレッシュトークンが必要です。
3. 有効期限：現在の認証トークンの有効期限が切れる日時を表示します。

![image](/img/getting-started/generated-token.jpg)

### ステップ 3: Momento の認証トークンを保存する
Momento をすぐに試したい場合は、認証トークンの横にあるコピーアイコンをクリックしてトークンをクリップボードにコピーし、Momento SDK に設定してください。また、"Download JSON" ボタンをクリックして、認証トークンとリフレッシュトークンの両方を保存することをお勧めします。トークンはパスワードのようなものなので、[AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)や[GCP Secret Manager](https://cloud.google.com/secret-manager)のような安全な場所に保存し、そこから取り出すのがベストプラクティスです。

### ステップ 4: トークン更新の自動化

有効期限切れのトークンをリフレッシュするには、Momento の `AuthClient` と `refreshAuthToken` API を使います。

`AuthClient` のインスタンスを作成する：

<SdkExampleTabs snippetId={'API_InstantiateAuthClient'} />

`refreshAuthToken` API を使用する：

<SdkExampleTabs snippetId={'API_RefreshAuthToken'} />

アプリケーションを本番環境で動かそうとすると、認証トークンを定期的に更新する自動化スクリプトが必要になります。AWSで実行している場合は、AWS Lambda でこれを行う関数をスケジューリングします。GCP の場合は、Google Cloud Functions が最適なソリューションになるでしょう。AWS Lambda を使った例として、AWS Secrets Manager に保存されたトークンを自動的にリフレッシュする[1クリックでデプロイできるラムダ関数の例](https://github.com/momentohq/auth-token-refresh-lambda)をご覧ください。

:::note
Lambda 関数や Google Cloud Function、その他の自動化スクリプトが認証トークンをリフレッシュする間、アプリケーションは AWS Secrets Manager（またはトークンを保存している場所）を定期的にチェックし、トークンをローカルにキャッシュしている場合は新しくリフレッシュされたトークンを確認する必要があります！
:::

## トークンのスコープ

Momento 認証トークンには関連付けられた `TokenScope` があり、Momento リソースへのアクセスレベルを制御します。以下に利用可能な `TokenScope` の一覧を示します：

- `SuperUser`: これらのトークンはすべてのコントロールプレーンとデータプレーンの操作にフルアクセスができます。また、[`generateAuthToken`](/develop/api-reference#generateauthtoken) API を使って新しいトークンを生成することもできます。`SuperUser` トークンを作成する唯一の方法は、[Momento コンソール](https://console.gomomento.com) を使用することです。
- `AllDataReadWrite`: これらのトークンはすべてのデータプレーン操作に対する完全な読み書きアクセス権を持つが、コントロールプレーン操作に対するアクセス権は持ちません。これらのトークンはあらゆるキャッシュの読み書きと、あらゆるトピックのパブリッシュとサブスクライブに使用できます。キャッシュの作成や削除、新しい Momento 認証トークンの生成には使用できません。`AllDataReadWrite` トークンは [`generateAuthToken`](/develop/api-reference#generateauthtoken) API で生成されます。

質問やフィードバックがある場合は、私たちの[Discordコミュニティ](https://discord.gg/GDStRczm)に参加するか、[Momentoサポート](mailto:support@momentohq.com)までお問い合わせください。
