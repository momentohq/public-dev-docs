---
sidebar_position: 6
sidebar_label: Sequelize
title: Integrate Momento With Sequelize ORM
description: Supercharge your sequelize backed databases with Momento cache
---

# SequelizeでバックアップしたデータベースとMomentoをインテグレーションする

[Sequelize](https://sequelize.org/)は、Oracle、Postgres、MySQL、MariaDB、SQLite、SQL Serverなどでよく使われているORMです。

このチュートリアルでは、[Momento sequelize モデルキャッシュラッパー](https://github.com/momentohq/momento-sequelize-cache) について説明します。このチュートリアルでは、[Momento sequelize モデルキャッシュラッパー]() を紹介します。このチュートリアルが終わるころには、最小限のコード変更で、sequelize でバックアップされた ORM データベースをシームレスにキャッシュできるようになっていることでしょう。

## 前提条件

アプリでMomentoとSequelizeを使用するには、次のものが必要です：

- Node バージョン 16 以上がマシンにインストールされていること https://nodejs.org/en/download
- [Momento console](https://console.gomomento.com)を使ってMomento側を設定する。メールアドレスを入力するか、既存の Google または GitHub アカウントをリンクすることで、コンソールでアカウントを作成できます。コンソールにログインしたら、ページの右上にある `Create Cache` ボタンをクリックします：

![Create Cache button](/img/console-create-cache.png)

`model-cache`というキャッシュを作成します。キャッシュはAWSかGCPの好きなクラウドプロバイダーに、好きなリージョンで作成できます。
![Create cache form](/img/console-create-cache-model-cache.png)

`Create` ボタンを押すと、利用可能なキャッシュのリストに新しい `model-cache` キャッシュが表示されます。

キャッシュを作成した地域もキャッシュのリストに表示されていることに注意してください。次のステップで Momento 認証トークンを生成するときに、同じリージョンを選択する必要があります。[tokens](https://console.gomomento.com/tokens)ページに移動し、キャッシュの作成に使用したクラウドプロバイダとリージョンを選択し、`Super User Token` トークンタイプを選択し、`Generate Token` ボタンをクリックします。

![Generate token](/img/console-generate-api-key.png)

この`Api Key`をコピーし、安全な場所に保存します。後でアプリケーションを実行する際に、環境変数として追加する必要があります。

![Generated token](/img/console-api-key-result.png)

## ラッパーをアプリケーションに組み込む

Momentoラッパーをあなたのsequelizeアプリケーションにインテグレーションするには、まずラッパーの最新リリースをインストールしましょう。

```bash
npm install @gomomento-poc/momento-sequelize-cache
```

これで、必要なインポートを追加し、Sequelize モデルを `wrap` して、読み取り専用キャッシュとして Momento にバックアップさせる準備が整いました。
Sequelizeでバックアップされたデータベースの上にMomentoラッパーを作成するには、Momentoクライアントを作成し、ファクトリメソッドに渡します。コピーした `ApiKey` を環境変数 `MOMENTO_API_KEY` としてエクスポートすることを忘れないでください。

```typescript
import { Configurations, CredentialProvider } from "@gomomento/sdk";
import { modelCacheFactory, MomentoClientGenerator} from "@gomomento-poc/momento-sequelize-cache";

const momentoClient = MomentoClientGenerator.getInstance({
        configuration: Configurations.Laptop.latest(),
        credentialProvider: CredentialProvider.fromEnvironmentVariable({environmentVariableName: 'MOMENTO_API_KEY'}),
        defaultTtlSeconds: 60,    
});

const modelCache = await modelCacheFactory(momentoClient);
```

`modelCache` オブジェクトには `wrap` メソッドが用意されており、既存の Sequelize モデルをラップすることができます。その時点から、ラップされたオブジェクトは Sequelize モデルオブジェクトと同じ使い慣れた API を提供します。たとえば、（`User` モデルから）主キーで User を取得するには、次のようにします：

```typescript
await modelCache.wrap(User).findByPk(1);
```

この呼び出しは、read-aside cachingのライフサイクルをオーケストレーションします。キャッシュの取得を優先し、キャッシュに失敗した場合は Sequelize データベースに頼り、その後のリクエストのためにキャッシュを更新します。様々なクエリでサンプルを実行することで、すぐに始めることができます。

## 例

もっと多くの機能を試してみたいですか？私たちの[examples](https://github.com/momentohq/momento-sequelize-cache/tree/main/examples)をフォークして、exampleを実行することでも始めることができます：

```bash
git clone https://github.com/momentohq/momento-sequelize-cache
cd examples
npm install
MOMENTO_API_KEY="yourApiKey" npm run basic
```

この例では、`findByPk`、`findOne`、`count`、`findAll` など、ラッパーがサポートするさまざまな Sequelize オペレーションを示します。また、クエリをキャッシュできる異なるテーブル間の `join` も示します。

## 結論

read-aside cachingは、アプリケーションのパフォーマンスを大幅に向上させることができます。データ検索が高速化されるだけでなく、プライマリデータストアの負荷も軽減されるため、開発者とエンドユーザーの両方にメリットがあります。Momento が Sequelize アプリケーションを強化することで、スピードと効率の調和の取れたブレンドが実現します。
