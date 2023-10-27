---
sidebar_position: 10
title: API Keys
sidebar_label: API Keys
description: Momento API キーとは何か、その作成方法、使用方法について説明します。
---

# Momento API keys

![a technical illustration of API keys and their use to secure your application.](@site/static/img/api-keys-page.jpg)

API キーは、*プログラムでの使用を目的とした長期有効な値*です。 これらのキーは、アプリケーションに特定のキャッシュおよびトピックへのアクセスを許可します。 API キーを作成する場合、[Momento コンソール](https://console.gomomento.com/tokens) で 2 つのオプションが表示されます。

1. キャッシュの作成と削除、キャッシュ項目の設定と取得、トピックの公開と購読など、アカウント内のあらゆるものへのアクセスを許可する"super-user"キー。
2. キャッシュ項目の設定と取得、トピックのパブリッシュとサブスクライブなどのデータ操作のみに限定される、"fine-grained access control (FGAC)"キー。

:::info

Momento SDK を介して"super-user" API キーを作成することはできません。 ただし、"fine-grain access controlled(FGAC)" キーを作成することは*可能*です。 詳細については、[Auth API リファレンス ページ](./../api-reference/auth.md) をご覧ください。

:::

## API keyの作成

SDK 経由で API キーを作成することは確かに許可されていますが、通常は [Momento コンソール](https://console.gomomento.com/tokens) を使用することをお勧めします。 これにより、長期間有効なキーを視覚的に監視および維持できるため、アカウントに誤ってセキュリティホールが開いてしまうことがなくなります。

### ステップ 1: Momento コンソールにサインアップまたはログインします

[Momento コンソール](https://console.gomomento.com/tokens) に移動し、指示に従ってメールアドレス、Google アカウント、または GitHub アカウントでログインします。

![Image of Momento console landing page](@site/static/img/getting-started/console.png)

### ステップ 2: API keyの生成

コンソールで、[API キー](https://console.gomomento.com/tokens) メニューオプションを選択します。

APIキーページに移動したら、キャッシュが存在する場所に一致する情報を選択します。

1. クラウドプロバイダー
2. リージョン
3. キータイプ
3. (オプション) 有効期限

![Image showing the fields to create a new API key](@site/static/img/getting-started/select-provider-region.png)

完了したら、[**Generate**] ボタンをクリックして API キーを作成します。

キーの値を直接コピーして安全な場所に保存することも、**Download JSON** ボタンをクリックしてキーと有効期限をマシンにダウンロードすることもできます。

### ステップ 3: セキュアに

API キーは有効期間が長く、通常、所有者に高レベルのアクセスを許可します。 これを念頭に置いて、値を暗号化し、プレーンテキストの表示を防ぐ場所に API キーを安全に保存してください。

アプリケーションがクラウドでホストされている場合は、[AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)、[Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview)または、[GCP Secret Manager](https://cloud.google.com/secret-manager)などのサービスにキーを保存し、そこから取得することをお勧めします。

API キーの保存は実装と標準的なコーディング方法としてすべてのアプリケーションで一貫していることが 1 つあります。それは、*安全に保管する* ことです。

## 有効期限

API キーを作成するときは、無期限のキーを作成するか、一定の時間が経過すると有効期限が切れるキーを作成するかを選択できます。 **期限切れのないキーを作成することはお勧めしません**。 これは、キーが危険にさらされた場合にセキュリティ上のリスクになります。

Momento コンソールには、有効期限の範囲について事前に設定されたオプションがいくつか用意されており、独自の日付を選択することもできます。 機能停止を防ぐために、有効期限が切れる前に新しい API キーを作成し、アプリケーション内でローテーションすることを忘れないでください。

## ユースケース

認証に API キーを**使用しない**理由はたくさんありますが、API キーを使用する理由もいくつかあります。

* サーバーサイドで使用するようなケース
* 月ごとまたは年ごとにローテーションする必要がある、有効期間の長いキーを使用しても問題がないケース
* セッショントークンを作成する必要があるケース (これには「スーパーユーザー」トークンを使用する必要があります)

始める準備はできていますか? [Momento コンソール](https://console.gomomento.com/tokens) にアクセスして、API キーを取得してください。
