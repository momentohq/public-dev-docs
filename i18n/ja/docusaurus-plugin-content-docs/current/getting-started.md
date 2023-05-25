---
sidebar_position: 3
sidebar_label: はじめてみる
sidebar_class_name: sidebar-item-getting-started
title: はじめてみる
pagination_prev: null
pagination_next: null
description: SDK を選んで、Momento Cache と Momento Topics をすぐに使い始めてみましょう。
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Momento Cache と Momento Topics をはじめてみる

もし Momento Cache を SDK から使ってみる方法をお探しでしたら、ここはあなたにうってつけの場所です。

もし何もインストールせずに Momento Cache の体験を手早くしてみたい場合には、こちらから[ブラウザ内で](#cli-と-sdk-をブラウザで試してみる)試してみることもできます。

## ステップ 1: Momento コンソールにサインアップしてログインする

[Momento コンソールに行き](https://console.gomomento.com/)、手順に従ってメールアドレス、Google アカウント、または GitHub アカウントでログインします。

![image](/img/getting-started/console.png)

## ステップ 2: Momento コンソールで認証トークンを作成する

コンソール上で、メニューを開きトークンを選択します。

![image of console menu](/img/getting-started/auth-token.gif)

Token ページ上で、1. クラウドプロバイダーを選択し、2. ドロップダウンリストから利用可能なリージョンを選び、3. トークンの有効期限を設定し、そして 4. "トークンを生成する"
ボタンをクリックします。

![image](/img/getting-started/select-provider-region.png)

下の方にスクロールすると、灰色の箱の中にトークンがあります。下のスクリーンショットではトークンにぼかしが入っていますが、本来は見ることができます。コピーアイコンをクリックして、トークンをクリップボードにコピーします。

![image](/img/getting-started/generated-token.jpg)

## ステップ 3: 認証トークンを保存する

Momento の認証に使うために、この認証トークンを保存できる場所がいつくかあります。今回の単純な例では、認証トークンを環境変数に保存しますが、AWS Secrets Manager や GCP
Secret Manager の様なところに認証トークンを保存するのがベストプラクティスです。

## ステップ 4: SDK を入れて、キャッシュを作成し、データを読み書きする

<Tabs>
   <TabItem value="node" label="Node.js" default>

Momento SDK と dotenv をプロジェクトのディレクトリでインストールします

```cli
npm install @gomomento/sdk
npm install dotenv
```

**.env ファイルを作成する**

Momento 認証トークンと、デフォルトの TTL (秒) を設定するために、 .env ファイルをディレクトリ上に作成します。

```cli
export MOMENTO_AUTH_TOKEN=<your Momento token here>
export MOMENTO_TTL_SECONDS=300
```

以下のコードを test.js というファイルにコピーします。

```javascript
// Declare the Momento SDK library
const {
    CacheGet, CacheSet, Configurations, ListCaches, CreateCache,
    CacheClient, CredentialProvider
} = require('@gomomento/sdk');

// Declate the dotenv library
const dotenv = require('dotenv');

// Defines name of cache to use.
const CACHE_NAME = 'demo-cache';

// Run the config function to bring in the .env file
dotenv.config();

// Creates the Momento cache client object
async function createCacheClient() {
    return new CacheClient({
        configuration: Configurations.Laptop.v1(),
        credentialProvider: CredentialProvider.fromEnvironmentVariable({
            environmentVariableName: 'MOMENTO_AUTH_TOKEN',
        }),
        defaultTtlSeconds: 600,
    });
}

// Create a new cache
async function createCache(client) {
    const createCacheResponse = await client.createCache(CACHE_NAME);
    if (createCacheResponse instanceof CreateCache.Success) {
        console.log('Cache created.');
    } else if (createCacheResponse instanceof CreateCache.AlreadyExists) {
        console.log('Cache already exists');
    } else if (createCacheResponse instanceof CreateCache.Error) {
        throw createCacheResponse.innerException();
    }
}

// List all caches in Momento for this account.
async function listCaches(client) {
    const listResponse = await client.listCaches(client);
    if (listResponse instanceof ListCaches.Error) {
        console.log('Error listing caches: ', listResponse.message());
    } else if (listResponse instanceof ListCaches.Success) {
        console.log('Found caches:');
        listResponse.getCaches().forEach(cacheInfo => {
            console.log(' -', cacheInfo.getName());
        });
    } else {
        throw new Error('Unrecognized response: ', listResponse.toString());
    }
}

// A function to write to the cache
async function writeToCache(client, cacheName, key, data) {
    const setResponse = await client.set(cacheName, key, data);
    if (setResponse instanceof CacheSet.Success) {
        console.log('Key stored successfully!');
    } else if (setResponse instanceof CacheSet.Error) {
        console.log('Error setting key: ', setResponse.toString());
    } else {
        console.log('Some other error: ', setResponse.toString());
    }
}

// A function to read scalar items from the cache
async function readFromCache(client, cacheName, key) {
    const readResponse = await client.get(cacheName, key);
    if (readResponse instanceof CacheGet.Hit) {
        console.log('Cache hit: ', readResponse.valueString());
    } else if (readResponse instanceof CacheGet.Miss) {
        console.log('Cache miss');
    } else if (readResponse instanceof CacheGet.Error) {
        console.log('Error: ', readResponse.message());
    }
}

// A simple function that calls all functions in order. You probably want more error handling.
async function run() {
    const cacheClient = await createCacheClient();

    await createCache(cacheClient);

    await listCaches(cacheClient);

    await writeToCache(cacheClient, CACHE_NAME, "code", "12345");
    await readFromCache(cacheClient, CACHE_NAME, "code");
}

run();
```

コードを実行します。

```cli
node test.js
```

出力は以下の様なものになります:

```cli
[2023-05-21T00:56:37.819Z] INFO (Momento: CacheClient): Creating Momento CacheClient
[2023-05-21T00:56:37.831Z] INFO (Momento: ControlClient): Creating cache: demo-cache
Cache created.
Found caches:
 - demo-cache
Key stored successfully!
Cache hit:  12345
```

   </TabItem>
</Tabs>

## CLI と SDK をブラウザ上で試してみる

Momento Cache をブラウザ上で今すぐに試してみることができます。ソフトウェアのインストールは必要ありません！

:::note
Momento Cache はフルマネージドで、API ベースの、サーバーレスサービスです。皆さんの (AWS、GCP、Azure、等) のアカウントには何もデプロイされません。
:::

<br />

まず、無料の認証トークンをリクエストし、CLI に設定し、 `set` と `get` コマンドをあなたのキャッシュに対して実行してみます。以下を立ち上げて下さい。

[![image](/img/cli_lab.png)](https://play.instruqt.com/embed/momento/tracks/sandbox-container-1challenge?token=em_54kTDywfWaG95-rC&finish_btn_target=_top&finish_btn_text=Return+to+Docs&finish_btn_url=https%3A%2F%2Fdocs.momentohq.com%2Fgetting-started#try-our-cli-and-an-sdk-in-your-browser)

<br />
<br />

次に、認証トークンとキャッシュを使って、Node.js SDK を使った JavaScript のアプリケーションを作成し実行してみます。以下を立ち上げて下さい。

[![image](/img/sdk_lab.png)](https://play.instruqt.com/embed/momento/tracks/momento-nodejs-demo?token=em_f8PM8Aob-mHIfOTT&finish_btn_target=_top&finish_btn_text=Return+to+Docs&finish_btn_url=https%3A%2F%2Fdocs.momentohq.com%2Fgetting-started#try-our-cli-and-an-sdk-in-your-browser)

<br />
<br />

Momento Topics も試してみたいですか？このデモでは、一方の画面でトピックのメッセージをサブスクライブし、もう一方の画面ではそのトピックにメッセージをパブリッシュすることができます。以下を立ち上げて下さい。

[![image](/img/topics_lab.png)](https://play.instruqt.com/embed/momento/tracks/topics-on-the-momento-cli?token=em_Q_mgzhVtWtP5B_jj&finish_btn_target=_top&finish_btn_text=Return+to+Docs&finish_btn_url=https%3A%2F%2Fdocs.momentohq.com%2Fgetting-started#try-our-cli-and-an-sdk-in-your-browser)

<br />
<br />

## Momento CLIのインストール

CLIをローカル(Linux, Windows, Mac)にインストールすることも可能です。[こちらのリポ](https://github.com/momentohq/momento-cli)
より最新のCLIやインストール方法また使用方法などを確認できます。

## Momento SDK 一覧

現在、以下の言語の SDK が利用可能です。各レポジトリで、詳細な手順と利用例をご確認下さい。

- [Node.js](/develop/sdks/nodejs)
- [JavaScript Web SDK](/develop/sdks/web)
- [Python](/develop/sdks/python)
- [.NET](/develop/sdks/dotnet)
- [Go](/develop/sdks/go)
- [PHP](/develop/sdks/php)
- [Java](/develop/sdks/java)
- [Rust](/develop/sdks/rust)
- [Ruby](/develop/sdks/ruby)

## FAQ

<details>
  <summary>Momento は私のクラウドアカウントに何かしらのリソースをデプロイしますか？</summary>
いいえ、しません。Momento Cache はフルマネージドで、API ベースの、サーバーレスサービスであり、皆さんのアプリケーションコードから呼び出して使います。
</details>
