---
sidebar_position: 8
sidebar_label: Cloudflare
title: Integrating Momento with your Cloudflare worker
description: Learn to deploy a Cloudflare worker that uses Momento HTTP API or Web SDK
---

[Cloudflare Workers](https://workers.cloudflare.com/)は、サーバーレスコードをデプロイして実行するための一般的なプラットフォームです。

このチュートリアルでは、当社の[JavaScript SDKから](https://github.com/momentohq/client-sdk-javascript)2つの[例を](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers)使用します。演習が終わる頃には、Momento Cache とやり取りしてデータを投入・取得する Cloudflare Worker が完成していることでしょう。

## 前提条件

このアプリをデプロイして実行するには、以下のものが必要です：

- [GitHub](https://github.com/)、[GitLab](https://gitlab.com)、[Bitbucket](https://bitbucket.org/) などの Git プロバイダーのアカウント。
- [Cloudflare](https://workers.cloudflare.com/)アカウント。
- 個人リポジトリにある[Momento JavaScript SDKの](https://github.com/momentohq/client-sdk-javascript)コピーまたはフォーク。

Cloudflare アカウントと、Git プロバイダーのアカウントに Momento JavaScript SDK のコピーまたはフォークがあれば、[Momento コンソールを使って](https://console.gomomento.com) Momento 側を設定する準備が整います。コンソールにアカウントを作成するには、メールアドレスを入力するか、既存の Google または GitHub アカウントをリンクします。コンソールにログインしたら、ページの右上にある`Create Cache`ボタンをクリックします：

![キャッシュ作成ボタン](/img/console-create-cache.png)

`Worker` というキャッシュを作成します。キャッシュはクラウドプロバイダー、AWS または GCP のいずれかを選択し、任意のリージョンに作成できます。

![キャッシュ作成フォーム](/img/console-create-worker-cache-form.png)

`作成`ボタンを押すと、利用可能なキャッシュのリストに新しい`Worker`キャッシュが表示されます。

![チャットキャッシュ](/img/console-caches-worker.png)

キャッシュを作成した地域もキャッシュのリストに表示されます。次のステップで Momento 認証トークンを生成するときに、同じ地域を選択する必要があります。[トークンの](https://console.gomomento.com/tokens)ページに移動し、キャッシュの作成に使用したクラウドプロバイダとリージョンを選択します。キャッシュはすでに作成されているので、ワーカーにキャッシュからの読み取りとキャッシュへの書き込みを許可する、きめ細かいトークンを使用します。これは特に、コントロールプレーンとデータプレーンの操作のセキュリティを別々に管理したい場合に便利です。



![トークンの生成](/img/fgac-worker-auth.png)



![生成されたトークン](/img/http-endpoint-auth-token.png)

## Cloudflare を使用したデプロイ

いよいよアプリケーションを設定し、Cloudflareアカウントにデプロイします。前述したように、リポジトリで利用可能な Momento JavaScript SDK のコピーが必要です。この例では、[オリジナルから](https://github.com/momentohq/client-sdk-javascript)フォークした GitHub リポジトリからデプロイします。

![Fork SDK リポジトリ](/img/github-fork-js-sdk.png)

このリポジトリには`cloudflare-workersの` `examples`ディレクトリがあります。さらに、Cloudflareワーカー内でMomentoを使用するための2種類のサンプルプロジェクトのサブディレクトリが含まれています：

- [HTTP-API](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers/http-api)- Cloudflare workers 上の HTTP API を使用して Momento キャッシュと対話する方法。
- [Web-SDK](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers/web-sdk)- Cloudflare ワーカー上で Web SDK を使用して Momento キャッシュと対話する方法。

Cloudflareワーカー内でMomentoとやりとりする際に、どちらかを選ぶ理由はいくつかあります。

- HTTP APIは軽量で、依存関係を追加する必要がなく、標準的な`フェッチ`HTTPクライアントメソッドを使用できます。ただし、`get`、`set`、`deleteなど`、Momento APIの基本的なサブセットしか提供しません。

- Web SDKはよりヘビーウェイトで、SDKへの依存関係を追加する必要があります。しかし、Momento API（DictionariesやSortedSetsのようなコレクション、Momento Topicsへのパブリッシュ機能を含む）をフルサポートしている。また、完全な TypeScript/JavaScript API を備えており、Momento とやり取りするコードをより簡単に書くことができる。これにより、Worker を開発する際の時間と労力を節約することができる。

Cloudflareは、ワーカーの開発と公開の設定にwrangler.tomlというファイルを使用します。Cloudflare の設定に関する詳細は、[同社のウェブサイトを](https://developers.cloudflare.com/workers/wrangler/configuration/)参照してください。

### Momento HTTP API を使う

まず、Cloudflare Worker で Momento の HTTP API を使用するために、関連するサンプルディレクトリに移動しましょう。

```bash
cd examples/cloudflare-workers/http-api
```

このディレクトリの`wrangler.toml`ファイルを更新し、キャッシュ名`worker`と先ほどコピーした HTTP エンドポイントを Momento コンソールに表示されるようにします。

```toml
name = "momento-cloudflare-worker-http"
main = "src/worker.ts"
compatibility_date = "2023-07-10"

[vars]
MOMENTO_REST_ENDPOINT = "https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com"
MOMENTO_CACHE_NAME = "worker"
```



```.vars
MOMENTO_API_KEY="<your token here>"
```

開発サーバーを起動します：

```bash
npm run start
```

ブラウザを[localhost:8787に開いて](http://localhost:8787)ください。この例のコードは、キャッシュ内のアイテムを設定し、それを取得し、JSONオブジェクトとして返します：

```typescript
    // setting a value into cache
    const setResp = await client.set(cache, key, value);
    console.log("setResp", setResp);

    // getting a value from cache
    const getResp = await client.get(cache, key)
    console.log("getResp", getResp);

    return new Response(JSON.stringify({ response: getResp }));
```

デプロイされた例は、[ここに](https://momento-cloudflare-worker-http.pratik-37c.workers.dev)あります。

このサンプルを自分の Cloudflare ワーカーにデプロイしたい場合は、Cloudflare アカウントに`MOMENTO_API_KEY`をシークレットとして追加してください：

```shell

npx wrangler secret put MOMENTO_API_KEY
> Enter a secret value: **************************
> 🌀 Creating the secret for the Worker "momento-cloudflare-worker-http"
> ✨ Success! Uploaded secret MOMENTO_API_KEY
```

次に`npm run de`ploy を実行します。Cloudflareアカウントにデプロイする前に、Cloudflareログインのプロンプトが表示されます。

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

### Momento Web SDKを使う

まず、CloudflareワーカーでMomentoのWeb SDKを使用するために、関連するサンプルディレクトリに移動しましょう。

```bash
cd examples/cloudflare-workers/web-sdk
```

このディレクトリの`wrangler.toml`ファイルをキャッシュ名`worker` で更新します。`HTTP エンド`ポイントは Web SDK が管理してくれるので、もう必要ないことに注意してください。

```toml
name = "momento-cloudflare-worker-http"
main = "src/worker.ts"
compatibility_date = "2023-07-10"

[vars]
MOMENTO_CACHE_NAME = "worker"
```



```.vars
MOMENTO_API_KEY="<your token here>"
```

開発サーバーを起動します：

```bash
npm run start
```

ブラウザを[localhost:8787に開いて](http://localhost:8787)ください。この例のコードは、キャッシュ内のアイテムを設定し、それを取得し、JSONオブジェクトとして返します：

```typescript
    // setting a value into cache
    await client.set(cache, key, value);

    // getting a value from cache
    const getResponse = await client.get(cache, key)

    return new Response(JSON.stringify({ response: getResponse.toString() }));
```

デプロイされた例は[ここに](https://momento-cloudflare-worker-web.pratik-37c.workers.dev/)あります。

このサンプルを自分の Cloudflare ワーカーにデプロイしたい場合は、Cloudflare アカウントに`MOMENTO_API_KEY`をシークレットとして追加してください：

```shell

npx wrangler secret put MOMENTO_API_KEY
> Enter a secret value: **************************
> 🌀 Creating the secret for the Worker "momento-cloudflare-worker-http"
> ✨ Success! Uploaded secret MOMENTO_API_KEY
```

次に`npm run de`ploy を実行します。Cloudflareアカウントにデプロイする前に、Cloudflareログインのプロンプトが表示されます。

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

この簡単なチュートリアルで、Cloudflare Workersを使ったMomento搭載アプリケーションのデプロイがいかにシンプルで簡単かをご理解いただけたと思います。もちろん、[例のコードにも](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers)自由に飛び込んでみてください。また、Momento Cache のシンプルさを楽しんでいただければと思います。
