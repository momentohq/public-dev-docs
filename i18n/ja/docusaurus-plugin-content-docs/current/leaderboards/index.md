---
sidebar_position: 1
sidebar_class_name: sidebar-item-overview
sidebar_label: Momento Leaderboards
title: Momento Leaderboards Documentation
description: Learn about Momento's purpose-built Leaderboard API
pagination_next: null
---

## Momento Leaderboardsとは？

Momento Leaderboardsは、数千万件のアイテムと迅速なingestion/querying/updatesをサポートするサーバーレスのリーダーボードサービスです。多くのデータベースは、ソートされたセットや範囲クエリのような汎用的なデータ構造によってリーダーボードを近似していますが、Momento Leaderboardは、迅速かつ簡単にアプリケーションに統合できるファーストクラスの本格的なサービスです。

:::info

Leaderboard itemsのTTLはデフォルトで7日間です。パーシステンス（TTL無制限）については、[contact form](https://www.gomomento.com/contact-us)、[Discord](https://discord.com/invite/3HkAKjUZGq)、または support@momentohq.com までご連絡ください。

:::


## Momento Leaderboardsを始める

### ステップ 1: Momento API key と cacheを作成します

[Momento コンソール](https://console.gomomento.com/tokens)にアクセスし、指示に従ってメールアドレス、Googleアカウント、またはGitHubアカウントでログインします。

[Momento コンソールのランディングページの画像](@site/static/img/getting-started/console.png)

Create Cache ボタンをクリックし、Momento Leaderboards で使用するクラウドプロバイダーとリージョンを使用してキャッシュを作成します。

[Momentoコンソールのキャッシュ作成フォームの画像](@site/static/img/console-create-cache-form.png)

次に、[ステップバイステップの手順](https://docs.momentohq.com/cache/develop/authentication/api-keys) に従って、[Momento コンソール](https://console.gomomento.com) から API キーを作成します。

### ステップ 2: Momento Leaderboardsの作成

```javascript
// 新しいリーダーボードクライアントを作成します。
// 好きなだけleaderboardsを作成できます。
const client = new PreviewLeaderboardClient({
  configuration: LeaderboardConfigurations.Laptop.v1(),
  credentialProvider: CredentialProvider.fromEnvironmentVariable({
    environmentVariableName: 'MOMENTO_API_KEY',
  }),
});

// 与えられたキャッシュとリーダーボード名で新しいリーダーボードを作成する。
const leaderboard = client.leaderboard('my-cache', 'my-leaderboard');
```

### ステップ 3: 要素をUpsert, fetch, そして removeする

利用可能な各リーダーボードAPIに関するドキュメントは、[APIリファレンス](./develop/api-reference/index.md)ページを参照してください。

各APIの呼び出し方の例を含む実行可能なプログラムについては、[Node.js example](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/leaderboard.ts)をチェックしてください。

# Momento Leaderboardsの言語サポート
[言語サポートページ](./develop/language-support/language-support.md)で、さまざまなプログラミング言語で利用可能なSDKの詳細をご覧ください。


## Momento Leaderboardsに関するよくある質問

<details>
  <summary>Momento LeaderboardsとSorted Setの違いは何ですか？</summary>
  Momento Leaderboardsは、より効率的なメモリフットプリントを持ち、数千万レコードのスケールを可能にし、
  APIは特にゲームのユースケースを念頭に構築されました。
</details>

<details>
  <summary>Momento Leaderboardsアイテムの有効期限はありますか？</summary>
  MomentoのLeaderboardsアイテムには、デフォルトで7日間のTTLが設定されています。リーダーボードアイテムのデフォルトのTTLが機能しない場合は、support@momentohq.com、制限の解除についてご相談ください。
</details>
