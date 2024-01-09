---
sidebar_position: 10
title: API Keys
sidebar_label: API Keys
description: Learn what Momento API keys are, how to create them, and how they are used.
---

# Momento API keys

APIキーは、*プログラム的な使用を目的とした長寿命の値*です。これらのキーは、統合アプリケーションに特定のキャッシュやトピックへのアクセスを許可します。

:::tip

`APIキー`を使うべきか、`トークン`を使うべきか迷っていますか？詳しくは[認証](./index.mdx)のページをご覧ください！

:::

APIキーを作成する際、[Momentoコンソール](https://console.gomomento.com/tokens)から2つのオプションが表示されます：

1. 「スーパーユーザー」キーは、キャッシュの作成と削除、キャッシュ項目の設定と取得、トピックの公開と購読など、アカウント内のすべてにアクセスできるようにするキーです。
2. fine-grained access control (FGAC) キーはキャッシュ・アイテムの設定と取得、トピックの公開と購読など、データ操作を制限するような使い方をするキーです。

:::info

Momento SDK を使用して「スーパーユーザー」API キーを作成することはできません。
ただし、SDK を使用して、きめ細かなアクセス制御を行い、特定の権限を持つ API キーを作成することはできます！詳細は [Auth API リファレンスページ](./../api-reference/auth.md) を参照してください。

:::

## API key生成する

API キーは Momento SDK から作成することも可能ですが、最もシンプルな方法は [Momento コンソール](https://console.gomomento.com/tokens) を使用することです。

### ステップ 1: サインアップするか、Momentoコンソールにログインする

[Momentoコンソール](https://console.gomomento.com/tokens)にアクセスし、指示に従ってメールアドレス、Googleアカウント、またはGitHubアカウントでログインします。

![Image of Momento console landing page](@site/static/img/getting-started/console.png)

### ステップ 2: APIキーを生成する

コンソールで、[API Keys](https://console.gomomento.com/tokens)メニューオプションを選択します。

APIキーのページで、キャッシュが存在する場所に一致する情報を選択します：
1. クラウドプロバイダー
2. リージョン
3. キータイプ
4. (オプション) 有効期限

![Image showing the fields to create a new API key](@site/static/img/getting-started/select-provider-region.png)

入力が完了したら、**Generate**ボタンをクリックしてAPIキーを作成します！

キーの値を直接コピーして安全な場所に保存するか、**Download JSON** ボタンをクリックしてキーと有効期限をお使いのマシンにダウンロードすることができます。

### ステップ 3: セキュアに

APIキーは長寿命であり、通常、保持者に高レベルのアクセスを許可します。
このことを念頭に置いて、値を暗号化し、プレーンテキストの閲覧を防ぐ場所にAPIキーを安全に保管するようにしてください。

アプリケーションがクラウドでホストされている場合、キーを[AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)、[Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview)、[GCP Secret Manager](https://cloud.google.com/secret-manager)のようなサービスに保管し、そこから取り出すのがベストプラクティスです。

APIキーの保管は、あなたの実装と標準的なコーディングプラクティスによって異なりますが、すべてのアプリケーションで一貫していることが1つあります！


## 有効期限

APIキーを作成する際、有効期限のないものと、一定期間後に失効するものを選択することができます。有効期限のないキーを作成することはお勧めしません。これは、キーが漏洩した場合のセキュリティリスクとなります。

Momentoコンソールには、有効期限の設定オプションがいくつか用意されています。有効期限が切れる前に新しい API キーを作成し、アプリケーションでローテーションすることを忘れないでください！

## ユースケース

認証の使用期間が短く、権限スコープが限定されている場合は、[Momentoトークン](./tokens.md)の使用を検討してください。

APIキーは、以下のような状況に適しています：

* すべての利用がプログラム的でサーバサイドである。
* 月/年単位でローテーションされるような長寿命のキーでも構わない。
* 比較的幅広いパーミッションが必要な場合

APIキーまたはトークンのパーミッション管理に関する詳細は、[permissions page](./permissions.md)を参照してください。
始める準備はできましたか？[Momentoコンソール](https://console.gomomento.com/tokens)にアクセスして、APIキーを取得してください！
