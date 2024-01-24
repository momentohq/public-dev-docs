---
sidebar_position: 8
sidebar_label: Cloudflare
title: MomentoとCloudflare workersとの統合
description: Momento HTTP APIまたはWeb SDKを使用するCloudflareワーカーのデプロイを学びます
pagination_next: null
---

[Cloudflare Workers](https://workers.cloudflare.com/)は、サーバーレスコードをデプロイして実行するための人気のプラットフォームです。

このチュートリアルでは、[JavaScript SDK](https://github.com/momentohq/client-sdk-javascript) の 2 つの [例](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers) を使用します。このチュートリアルを通して、Momento Cacheとやりとりしてデータを投入・取得するCloudflare Workersを作成することができます。

## 前提条件

このアプリをデプロイして実行するには、以下のものを用意する必要があります:

- [GitHub](https://github.com/)、[GitLab](https://gitlab.com)、[Bitbucket](https://bitbucket.org/)などのGitプロバイダーのアカウント。
- [Cloudflare](https://workers.cloudflare.com/)アカウント。
- momentoリポジトリにある[Momento JavaScript SDK](https://github.com/momentohq/client-sdk-javascript)のコピーまたはフォークしたもの。

Cloudflareアカウントを取得し、GitプロバイダーアカウントにMomento JavaScript SDKのコピーまたはフォークがあれば、[Momentoコンソール](https://console.gomomento.com)を使ってMomento側を設定する準備が整います。コンソールにアカウントを作成するには、メールアドレスを入力するか、既存の Google または GitHub アカウントをリンクします。コンソールにログインしたら、ページの右上にある `Create Cache` ボタンをクリックします：

![Create Cache button](@site/static/img/console-create-cache.png)

ここでは`worker`というキャッシュを作成します。キャッシュはAWSかGCPの好きなクラウドプロバイダーに、好きなリージョンで作成できます。

![Create cache form](@site/static/img/console-create-worker-cache-form.png)

`Create`ボタンを押すと、利用可能なキャッシュのリストに新しい`worker`キャッシュが表示されます。

![Chat cache](@site/static/img/console-caches-worker.png)

キャッシュを作成したリージョンもキャッシュのリストに表示されていることに注意してください。次のステップでMomento認証トークンを生成する際に、同じリージョンを選択する必要があります。[tokens](https://console.gomomento.com/tokens)ページに移動し、キャッシュの作成に使用したクラウドプロバイダとリージョンを選択します。キャッシュはすでに作成されているので、`worker` にキャッシュからの読み込みとキャッシュへの書き込みを許可し、削除などのコントロールプレーン操作を許可しない、きめの細かいトークンを使用します。これは特に、コントロールプレーンとデータプレーンの操作のセキュリティを別々に管理したい場合に便利です。

`Fine-Grained Access Token` トークンタイプを選択し、ドロップダウンから `Cache Name` として `worker` を選択し、`Role Type` として `readwrite` を選択します。スーパーユーザトークン `Super User Token` はコントロールプレーンの操作管理に使用します。Momento 認証についての詳細は [こちら](https://docs.momentohq.com/develop/basics/working-with-momento-auth-tokens) を参照してください。ここまでできたら`Generate Token` ボタンを押します。

![Generate token](@site/static/img/fgac-worker-auth.png)

`Auth Token` と `HTTP Endpoint` をコピーして安全な場所に保存します。後で `Cloudflare Workers` のデプロイを設定する際に、`Cloudflare Workers`で使用する環境変数として追加する必要があります。

![Generated token](@site/static/img/http-endpoint-auth-token.png)

## Cloudflareへのデプロイ

いよいよアプリケーションを設定し、Cloudflare アカウントにデプロイします。前述したように、 Momento JavaScript SDK リポジトリのコピーが必要です。
この例では、[オリジナル](https://github.com/momentohq/client-sdk-javascript) からフォークした GitHub リポジトリからデプロイします。

![Fork SDK Repository](@site/static/img/github-fork-js-sdk.png)

このリポジトリには `cloudflare workers` 用の `examples` ディレクトリがあります。さらに、Cloudflare ワーカー内で Momento を使用する 2 種類のサンプルプロジェクトのサブディレクトリがあります：

- [HTTP-API](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers/http-api) - Cloudflare workers上でHTTP APIを使用してMomentoキャッシュを利用する例です。
- [Web-SDK](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers/web-sdk) - Cloudflare workers上でWeb SDKを使用してMomentoキャッシュを利用する例です。

Cloudflare Workers内でMomentoとやり取りする際に、どちらかを選択します。
- HTTP-API を利用する場合は、依存関係を追加する必要はなく、標準の `fetch` HTTP クライアントメソッドを使用するだけです。しかし、その場合だと`get` や `set`、`delete` といった Momento API の基本的なサブセットしか利用できません。

- Web-SDK を利用する場合は、SDKへの依存関係を追加する必要があります。しかし、Momento APIを完全にサポートしています（DictionariesやSortedSetsのようなコレクションや、Momento Topicsへのパブリッシュ機能を含む）。また、TypeScript/JavaScript API を備えており、Momento とやり取りするコードをより簡単に書くことができる。これにより、Worker を開発する際の時間と労力を節約することができます。


Cloudflare は、wrangler.toml というファイルを使ってworkerの開発と公開を設定します。Cloudflareの設定に関する詳細は、[cloudflareのウェブサイト](https://developers.cloudflare.com/workers/wrangler/configuration/)を参照してください。

### Momento HTTP API を使ってみる

まず、Cloudflare workersでMomentoのHTTP APIを使用するために、関連するサンプルディレクトリに移動しましょう。

```bash
cd examples/cloudflare-workers/http-api
```

このディレクトリの `wrangler.toml` ファイルを、キャッシュ名 `worker` と先ほどコピーした Momento コンソールに表示されたHTTP エンドポイントを記載します。

```toml
name = "momento-cloudflare-worker-http"
main = "src/worker.ts"
compatibility_date = "2023-07-10"

[vars]
MOMENTO_REST_ENDPOINT = "https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com"
MOMENTO_CACHE_NAME = "worker"
```

exampleディレクトリの`.dev.vars`ファイルにMomentoの認証トークンを記載します。これはシークレットトークンなので、環境変数として保存せず、Cloudflareのシークレットとして保存します。

```.vars
MOMENTO_API_KEY="<your token here>"
```

開発サーバーを起動します：

```bash
npm run start
```

ブラウザで[localhost:8787](http://localhost:8787)を開きます。この例のコードは、キャッシュにアイテムを設定し、それを取得し、JSONオブジェクトとして返します：
   
```typescript
    // setting a value into cache
    const setResp = await client.set(cache, key, value);
    console.log("setResp", setResp);

    // getting a value from cache
    const getResp = await client.get(cache, key)
    console.log("getResp", getResp);

    return new Response(JSON.stringify({ response: getResp }));
```
デプロイされた例は [こちら](https://momento-cloudflare-worker-http.pratik-37c.workers.dev) にあります。

この例を自分の Cloudflare workers にデプロイしたい場合は、Cloudflare アカウントのシークレットとして `MOMENTO_API_KEY` を追加してください：

```shell

npx wrangler secret put MOMENTO_API_KEY
> Enter a secret value: **************************
> 🌀 Creating the secret for the Worker "momento-cloudflare-worker-http"
> ✨ Success! Uploaded secret MOMENTO_API_KEY
```

次に `npm run deploy` を実行します。Cloudflareアカウントにデプロイする前に、Cloudflareへのログインを求められます。

```bash
> shy-bush-898e@0.0.0 deploy
> wrangler deploy

 ⛅️ wrangler 3.2.0 (update available 3.5.0)
-----------------------------------------------------
Your worker has access to the following bindings:
- Vars:
  - MOMENTO_REST_ENDPOINT: "https://api.cache.cell-4-us-west-2-1...."
  - MOMENTO_CACHE_NAME: "worker"
Total Upload: 2.04 KiB / gzip: 0.69 KiB
Uploaded momento-cloudflare-worker-http (1.44 sec)
Published momento-cloudflare-worker-http (0.40 sec)
  https://momento-cloudflare-worker-http.pratik-37c.workers.dev
```

### Momento Web SDKを使ってみる


まず、Cloudflare workersでMomentoのWeb SDKを使用するために、関連するサンプルディレクトリに移動しましょう。

```bash
cd examples/cloudflare-workers/web-sdk
```

このディレクトリの `wrangler.toml` ファイルに `worker` というキャッシュ名を記載します。HTTP エンドポイントは Web SDK が管理してくれるので、もう必要ありません。

```toml
name = "momento-cloudflare-worker-http"
main = "src/worker.ts"
compatibility_date = "2023-07-10"

[vars]
MOMENTO_CACHE_NAME = "worker"
```

exampleディレクトリの`.dev.vars`ファイルにMomentoの認証トークンを記載します。これはシークレットトークンなので、環境変数として保存せず、Cloudflareのシークレットとして保存します。

```.vars
MOMENTO_API_KEY="<your token here>"
```

開発サーバーを起動します：

```bash
npm run start
```

ブラウザで[localhost:8787](http://localhost:8787)を開きます。この例のコードは、キャッシュにアイテムを設定し、それを取得し、JSONオブジェクトとして返します：

```typescript
    // setting a value into cache
    await client.set(cache, key, value);

    // getting a value from cache
    const getResponse = await client.get(cache, key)

    return new Response(JSON.stringify({ response: getResponse.toString() }));
```

デプロイされた例は [こちら](https://momento-cloudflare-worker-web.pratik-37c.workers.dev/) にあります。

この例を自分の Cloudflare workersにデプロイしたい場合は、Cloudflare アカウントのシークレットとして `MOMENTO_API_KEY` を追加してください：

```shell

npx wrangler secret put MOMENTO_API_KEY
> Enter a secret value: **************************
> 🌀 Creating the secret for the Worker "momento-cloudflare-worker-http"
> ✨ Success! Uploaded secret MOMENTO_API_KEY
```

次に `npm run deploy` を実行します。Cloudflareアカウントにデプロイする前に、Cloudflareへのログインを求められます。

```bash
> shy-bush-898e@0.0.0 deploy
> wrangler deploy

 ⛅️ wrangler 3.2.0 (update available 3.5.0)
-----------------------------------------------------
Your worker has access to the following bindings:
- Vars:
  - MOMENTO_CACHE_NAME: "worker"
Total Upload: 1673.43 KiB / gzip: 168.75 KiB
Uploaded momento-cloudflare-worker-web (2.46 sec)
Published momento-cloudflare-worker-web (0.30 sec)
  https://momento-cloudflare-worker-web.pratik-37c.workers.dev

```

## まとめ

この簡単なチュートリアルで、Cloudflare Workersを使ってMomentoを搭載したアプリケーションをデプロイすることがいかにシンプルで簡単であるかをご理解いただけたと思います。もちろん、[サンプルのコード](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers) もご自由にご覧ください。また、Momento Cacheのシンプルさを楽しんでいただければと思います。
