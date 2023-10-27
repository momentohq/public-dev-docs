---
sidebar_position: 1
sidebar_class_name: sidebar-item-overview
sidebar_label: Momento Leaderboards
title: Momento Leaderboards Documentation
description: Momento の専用Leaderboards API について学ぶ
pagination_next: null
---

## Momento Leaderboardsとは何か?

Momento Leaderboards は、数千万のアイテムと迅速な取り込み/クエリ/更新をサポートするサーバーレスリーダーボードサービスです。 多くのデータベースは、ソートされたセットや範囲クエリなどの汎用データ構造を介してリーダーボードに近似しますが、Momento Leaderboard は、アプリケーションに迅速かつ簡単に統合できる一流の本格的なサービスです。

:::info

リーダーボード項目には、デフォルトで 7 日間の TTL が設定されます。 永続化 (無制限の TTL) については、[Discord](https://discord.com/invite/3HkAKjUZGq) か[お問い合わせフォーム](https://www.gomomento.com/contact-us) を通じて当社チームにご連絡ください。 またはsupport@momentohq.comに電子メールを送信してください。

:::


## Momento Leaderboardsを始める

### ステップ 1: Create your Momento API key and cache

[Momento コンソール](https://console.gomomento.com/tokens) に移動し、指示に従ってメール アドレス、Google アカウント、または GitHub アカウントでログインします。

![Momento コンソールのランディング ページの画像](@site/static/img/getting-started/console.png)

[キャッシュの作成] ボタンをクリックし、Momento Leaderboards に使用するクラウド プロバイダーとリージョンを使用してキャッシュを作成します。

![Image of Momento console Create Cache form](@site/static/img/console-create-cache-form.png)

次に、[ステップバイステップの手順](https://docs.momentohq.com/cache/develop/authentication/api-keys) に従って、[Momento コンソール](https://console.gomomento.com)からAPIキーを作成します。

### ステップ 2: Momento Leaderboardsを作成

```javascript
// Create a new leaderboard client, which you can use to create
// as many leaderboards as you wish
const client = new PreviewLeaderboardClient({
  configuration: LeaderboardConfigurations.Laptop.v1(),
  credentialProvider: CredentialProvider.fromEnvironmentVariable({
    environmentVariableName: 'MOMENTO_API_KEY',
  }),
});

// Create a new leaderboard with the given cache and leaderboard name
const leaderboard = client.leaderboard('my-cache', 'my-leaderboard');
```

### ステップ 3: 要素のUpsert, fetch, and remove

利用可能な各リーダーボード API のドキュメントについては、[API リファレンス](./develop/api-reference/index.md) ページを参照してください。

実行可能なプログラムについては、[Node.js の例](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/leaderboard.ts) を確認してください。 各APIを呼び出します。

## Momento Leaderboardsに関するよくある質問

<details>
  <summary>Momento Leaderboardsとソートセットの違いは何ですか??</summary>
　Momento Leaderboards はメモリ使用量がはるかに効率的で、数千万レコードまで拡張でき、API は特にゲームのユースケースを念頭に置いて構築されています。　
</details>

<details>
  <summary>Momento Leaderboardsのアイテムには有効期限がありますか?</summary>
　Momento Leaderboardsアイテムには、デフォルトで 7 日間の TTL が設定されています。 リーダーボード項目のデフォルト TTL が機能しない場合は、support@momentohq.com に連絡して、制限の削除について相談してください。
</details>
