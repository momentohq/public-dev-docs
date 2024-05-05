---
sidebar_position: 1
sidebar_label: Momento Leaderboards
title: Leaderboards
description: Learn about Momento's purpose-built Leaderboard API
pagination_next: null
hide_title: true
keywords:
  - momento
  - leaderboard
  - gaming
  - serverless
---

# Momento Leaderboardsとは？

Momento Leaderboardsは、数千万件のアイテムと迅速なインジェスト/クエリ/アップデートをサポートするサーバーレスのリーダーボード・サービスです。多くのデータベースは、ソートされたセットや範囲クエリのような汎用的なデータ構造によってリーダーボードを近似していますが、Momento Leaderboardは、迅速かつ簡単にアプリケーションに統合できるファーストクラスの本格的なサービスです。

:::info

リーダーボードアイテムのTTLはデフォルトで7日間です。パーシステンス（TTL無制限）については、[contact form](https://www.gomomento.com/contact-us)、[Discord](https://discord.com/invite/3HkAKjUZGq)、または support@momentohq.com までご連絡ください。

:::

:::info

Momento LeaderboardsとSorted Setの違いは何ですか？

Momento Leaderboardsは、より効率的なメモリフットプリントを持っており、数千万レコードまで拡張することができます。

:::


## Momentoリーダーボードを始める

### Step 1: Momento API キーとキャッシュを作成します。

[Momentoコンソール](https://console.gomomento.com/tokens)にアクセスし、指示に従ってメールアドレス、Googleアカウント、またはGitHubアカウントでログインします。

![Image of Momento console landing page](@site/static/img/getting-started/console.png)

[キャッシュを作成]ボタンをクリックし、Momentoリーダーボードに使用するクラウドプロバイダーとリージョンを使用してキャッシュを作成します。

![Image of Momento console Create Cache form](@site/static/img/console-create-cache-form.png)

次に、[ステップバイステップの手順](https://docs.momentohq.com/cache/authentication/api-keys)に従って、[Momentoコンソール](https://console.gomomento.com)からAPIキーを作成します。

### Step 2: Momento Leaderboards の作成

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

### Step 3: 要素のアップサート、フェッチ、削除

利用可能な各リーダーボードAPIのドキュメントについては、[APIリファレンス](/leaderboards/api-reference/index.mdx)ページを参照してください。

各APIの呼び出し方の例を含む実行可能なプログラムについては、[Node.js example](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/leaderboard.ts)をチェックしてください。


# Momento Leaderboards の言語サポート
[言語サポートページ](./language-support/language-support.md)で、さまざまなプログラミング言語で利用可能なSDKの詳細をご覧ください。


## Momento Leaderboardsに関するよくある質問

<details>
  <summary>Momento Leaderboardsアイテムの有効期限はありますか？</summary>
  Momentoのリーダーボードアイテムには、デフォルトで7日間のTTLが設定されています。リーダーボードアイテムのデフォルトのTTLが機能しない場合は、support@momentohq.com、制限の解除についてご相談ください。
</details>
