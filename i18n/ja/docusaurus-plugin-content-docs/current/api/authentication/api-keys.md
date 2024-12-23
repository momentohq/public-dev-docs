---
id: api-keys
title: API keys
sidebar_label: API keys
description: Learn what Momento API keys are, how to create them, and how they are used.
---

# API keys

APIキーは、プログラム的な使用*を目的とした、*長寿命の値である。これらのキーは、統合アプリケーションに特定のキャッシュやトピックへのアクセスを許可します。

API キーを作成する際、[Momento コンソール](https://console.gomomento.com/tokens) から 2 つのオプションが表示されます：

1. "スーパーユーザー"キーは、キャッシュの作成と削除、キャッシュ項目の設定と取得、トピックの公開と購読など、アカウント内のすべてにアクセスできるようにするキーです。
2. キャッシュ・アイテムの設定や取得、トピックの公開や購読など、データ操作のみに限定されたFGAC（Fine-Ggrained Access Control）キー。

:::info

Momento SDK を使用して"スーパーユーザー"API キーを作成することはできません。ただし、SDK を使用して、きめ細かなアクセス制御により特定の権限を持つ API キーを作成することはできます。

:::

## Creating an API key

API キーは Momento SDK から作成することも可能ですが、最もシンプルな方法は [Momento コンソール](https://console.gomomento.com/tokens) を使用することです。

### Step 1: Sign up or log into the Momento console

[Momentoコンソール](https://console.gomomento.com/tokens)にアクセスし、指示に従ってメールアドレス、Googleアカウント、またはGitHubアカウントでログインします。

![Image of Momento console landing page](@site/static/img/getting-started/console.png)

### Step 2: Generate your API key

コンソールで、[API Keys](https://console.gomomento.com/tokens)メニューオプションを選択します。

APIキーのページで、キャッシュが存在する場所に一致する情報を選択します：

1. Cloud provider
2. Region
3. Key Type
3. (Optional) Expiration date

![Image showing the fields to create a new API key](@site/static/img/getting-started/select-provider-region.png)

入力が完了したら、**Generate**ボタンをクリックしてAPIキーを作成します！

キーの値を直接コピーして安全な場所に保存するか、**Download JSON** ボタンをクリックしてキーと有効期限をお使いのマシンにダウンロードすることができます。

### Step 3: Secure it!

APIキーは長寿命であり、通常、保持者に高レベルのアクセスを許可する。このことを念頭に置いて、値を暗号化し、プレーンテキストの閲覧を防ぐ場所にAPIキーを安全に保管するようにしてください。

アプリケーションがクラウドでホストされている場合、キーを[AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)、[Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview)、[GCP Secret Manager](https://cloud.google.com/secret-manager)のようなサービスに保管し、そこから取り出すのがベストプラクティスです。

APIキーの保管は、あなたの実装と標準的なコーディングプラクティスによって異なりますが、すべてのアプリケーションで一貫していることが1つあります！

## Expiration

APIキーを作成する際、有効期限のないものと、一定時間後に失効するものを選択することができます。**有効期限のないキーを作成することはお勧めしません。**これは、キーが漏洩した場合のセキュリティリスクとなります。

Momentoコンソールには、有効期限の設定オプションがいくつか用意されています。有効期限が切れる前に新しいAPIキーを作成し、アプリケーションでローテーションすることを忘れないでください！

Momentoは自動APIキーローテーションラムダの例を提供しています[こちら](https://github.com/momentohq/auth-token-refresh-lambda)。

## Use cases

認証の使用期間が短く、権限スコープが限定されている場合は、[Momentoトークン](./tokens.mdx)の使用を検討してください。

APIキーは、以下のような状況に適しています：

* すべての使用はプログラム的でサーバーサイドである。
* 月/年単位でローテーションされるような長寿命の鍵でも構わない。
* 鍵は比較的広い権限を必要とする

きめ細かいアクセス制御によるAPIキーまたはトークンの権限管理の詳細については、[permissions page](./permissions.mdx)を参照してください。

始める準備はできましたか？[Momentoコンソール](https://console.gomomento.com/tokens)にアクセスして、APIキーを取得してください！
