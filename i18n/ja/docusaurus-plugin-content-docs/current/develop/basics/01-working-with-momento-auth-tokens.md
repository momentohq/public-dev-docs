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

# Momento authトークンを使用する

<img src="/img/pile-of-tokens.jpg" width="90%" alt="a technical illustration of a bank vault representing security, authorization, and authentication." />

アプリケーションからMomentoのサービスにアクセスするには、Momentoのauthトークンが必要です。authトークンは Momento が生成する英数字の文字列で、あなたのアカウントと選択したクラウドプロバイダのリージョンに固有のものです。authトークンを作成する際には、次の 2 種類のトークンを設定できます：

1. アカウント内のすべてのリソースとAPI（データプレーンとコントロールプレーンの両方）へのアクセスを許可するスーパーユーザートークン。
2. A fine-grained access control (FGAC) tokenは、データプレーンAPIへのアクセス権のみを持ち、必要に応じてシングルキャッシュやトピックレベルへのアクセスを制限するように設定できます。

プログラムによる Momento authトークンの作成、管理、更新のための Momento auth API の使用については、[authトークン](/develop/api-reference/auth-tokens.md) を参照してください。

<iframe width="560" height="315" src="https://www.youtube.com/embed/F32zTUBkWzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## トークンの有効期限

トークンは、作成時に設定した N 時間後に失効するように設定できます。Momento authトークンには、2 種類の有効期限があります：

- 有効期限のないauthトークン。これは開発/テスト環境でのみ使用することを推奨しています。
- 有効期限があり、定期的なローテーションが必要なauthトークン。有効期限は7日、30日、60日、90日、あるいはカスタムで設定できます。期限切れのauthトークンは、本番環境におけるベストプラクティスと考えられています。このページではその方法を説明します。

:::info
期限切れのauthトークンを使用することに加えて、[AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)や[GCP Secret Manager](https://cloud.google.com/secret-manager)のようなサービスにauthトークンを保存するのがベストプラクティスです。[AWS Secrets ManagerからMomentoのauthトークンを取得する](/develop/integrations/aws-secrets-manager)を参照してください。
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

- `SuperUser`： このトークンのスコープでは、すべてのコントロールプレーンとデータプレーンの操作にフルアクセスできます。`SuperUser` スコープを持つトークンは、[`generateAuthToken`](/develop/api-reference#generateauthtoken) API を使って新しいトークンを生成することもできます。`SuperUser` スコープのトークンは [Momento webコンソール](https://console.gomomento.com) でのみ作成することができます。
- Fine-grained access control (FGAC): このトークンのスコープでは、トークンによって付与されるアクセスをより正確に制御することができます。トークンが1つまたは複数のキャッシュやトピックへのアクセスを許可するかどうかを制御できます。FGACスコープを持つトークンは、データプレーン操作にのみ使用できます。[Momento Webコンソール](https://console.gomomento.com)、または[Momento auth API](/develop/api-reference/auth-tokens.md)から作成できます。

質問やフィードバックがある場合は、私たちの[Discordコミュニティ](https://discord.gg/GDStRczm)に参加するか、[Momentoサポート](mailto:support@momentohq.com)までお問い合わせください。
