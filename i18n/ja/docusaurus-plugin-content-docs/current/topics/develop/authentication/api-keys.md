---
sidebar_position: 10
title: API Keys
sidebar_label: API Keys
description: Momento API キーとは何か、どのように作成し、どのように使用するかを学びます。
---

# Momento API keys

APIキーは、プログラム的な使用を目的とした、長期間の利用できるものです。これらのキーは、統合されたアプリケーションに特定のキャッシュやトピックスへのアクセスを許可します。API キーを作成する際、[Momento コンソール](https://console.gomomento.com/tokens) から 2 つのオプションが表示されます：

1. "super-user"キーは、キャッシュの作成と削除、キャッシュ項目の設定と取得、トピックのパブリッシュとサブスクライブなど、アカウント内のすべてにアクセスできるようにするキーです。
2. "A fine-grained access control (FGAC)"キーは、キャッシュアイテムの設定と取得、トピックのパブリッシュとサブスクライブなど、データ操作のみに制限ができるキーです。

:::info

Momento SDKを使用して"super-user" APIキーを作成することはできません。しかし、"A fine-grained access control (FGAC)"キーを作成することは可能です！
詳しくは[Auth API reference page](/topics/api-reference/auth)をご覧ください。

:::

## APIキーを作成する

SDKを使用してAPIキーを作成することもできますが、一般的には[Momento コンソール](https://console.gomomento.com/tokens)を使用して作成することをお勧めします。このコンソールを使用することで、長期間使用するキーを視覚的に監視・管理することができ、誤ってアカウントのセキュリティホールを開けないようにすることができます。

### ステップ 1: サインアップするか、Momento コンソールにログインする

[Momento コンソール](https://console.gomomento.com/tokens)にアクセスし、指示に従ってメールアドレス、Googleアカウント、またはGitHubアカウントでログインします。

![Image of Momento console landing page](@site/static/img/getting-started/console.png)

### ステップ 2: API キーを作成する

コンソールで、[API Keys](https://console.gomomento.com/tokens)のメニューオプションを選択します。

APIキーのページで、キャッシュが存在する場所に一致する情報を選択します：

1. クラウドプロバイダー
2. リージョン
3. Key Type
3. (オプション) Expiration date

![Image showing the fields to create a new API key](@site/static/img/getting-started/select-provider-region.png)

入力が完了したら、**Generate**ボタンをクリックしてAPIキーを作成します！

キーの値を直接コピーして安全な場所に保存するか、**Download JSON** ボタンをクリックしてキーと有効期限をお使いのPCにダウンロードすることができます。

### ステップ 3: セキュアに!

APIキーは長期間有効であり、通常、高レベルのアクセスを許可します。このことを念頭に置き、APIキーは値を暗号化し、プレーンテキストの閲覧を防ぐ場所に安全に保管するようにしてください。

アプリケーションがクラウドでホストされている場合、[AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)、[Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview)、または[GCP Secret Manager](https://cloud.google.com/secret-manager)のようなサービスを使うことができます。

APIキーの保管は、あなたの実装と標準的なコーディングプラクティスによって異なりますが、すべてのアプリケーションで一貫していることが1つあります。**安全に保管してください！**

## 有効期限

APIキーを作成する際、有効期限のないものと、一定期間後に失効するものを選択することができます。**有効期限のないキーを作成することはお勧めしません。**
これは、キーが漏洩した場合のセキュリティリスクとなります。

Momento コンソールには、有効期限の設定オプションがいくつか用意されています。有効期限が切れる前に新しい API キーを作成し、アプリケーションでローテーションすることを忘れないでください！

## ユースケース

認証にAPIキーを**使わない**理由はたくさんありますが、使うべき理由もいくつかあります。

* すべての使い方がプログラム的でサーバーサイドで利用している。
* 月/年単位でローテーションされる、より長寿命なAPI キーでも構わない。
* セッショントークンを作成する必要がある。("super-user"を利用する必要がある場合)

体験してみる準備はできていますか？[Momento コンソール](https://console.gomomento.com/tokens)にアクセスして、APIキーを取得してください！
