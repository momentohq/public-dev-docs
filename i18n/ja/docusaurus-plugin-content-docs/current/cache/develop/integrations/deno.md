---
sidebar_position: 10
sidebar_label: Deno
title: Integrating Momento Cache with Deno
description: Learn to deploy a Deno project that uses Momento Cache
---

[Deno](https://deno.land/)はセキュアなデフォルトを持つJavaScript、TypeScript、WebAssemblyランタイムであり、[Deno Deploy](https://deno.com/deploy)はそれらに対応するサーバーレスエッジワーカープラットフォームです。

このチュートリアルでは、私たちの[JavaScript Web SDK](https://github.com/momentohq/client-sdk-javascript)から2つの[例](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/deno)を見ていきます。演習が終わる頃には、Web SDKまたはHTTP APIを通じてMomento Cacheと対話し、データを取得、設定、削除するDenoプロジェクトが出来上がっていることでしょう。

### Momento Web SDK vs HTTP API

DenoでMomento Cacheとやりとりする際に、どちらを選択すべきでしょうか。そのどちらもそれぞれのメリットがあります。

- HTTP API は軽量で、Deno が必要とする以上の依存関係を必要とせず、標準の `fetch` HTTP クライアントメソッドを使用することができます。ただし、`get`、`set`、`delete`といったMomento APIの基本的なサブセットしか提供されておらず、現在のところクラウドプロバイダーとしてAWSを使用している場合にのみ利用可能です。

- Web SDKはより重く、SDKへの依存関係を追加する必要があります。しかし、Momento APIをフルサポートしています（DictionariesやSortedSetsのようなコレクションや、Momento Topicsへのパブリッシュ機能を含む）。また、完全な TypeScript/JavaScript API を備えており、Momento とやり取りするコードをより簡単に書くことができる。これにより、Worker を開発する際の時間と労力を節約することができます。

- さらに、Deno Deploy はまだ [npm specifiers](https://deno.land/manual@v1.36.1/node/npm_specifiers) をサポートしていません。これは、私たちのサンプルが Web SDK とその依存関係を取り込む方法です。今のところ、Deno Deploy を使って公開できるのは HTTP API の例だけです。

## 前提条件

このアプリをデプロイして実行するには、以下のものが必要です：

- [GitHub](https://github.com/)、[GitLab](https://gitlab.com)、[Bitbucket](https://bitbucket.org/) などの Git プロバイダーのアカウント。
- [Deno Deploy](https://deno.com/deploy)のアカウント。
- 個人リポジトリ内の[Momento JavaScript SDK](https://github.com/momentohq/client-sdk-javascript)のコピーまたはフォーク。

### Momentoのセットアップ

Git プロバイダーのアカウントに Momento JavaScript SDK のコピーまたはフォークがあれば、[Momento コンソール](https://console.gomomento.com) を使って Momento 側を設定する準備が整います。コンソールにアカウントを作成するには、メールアドレスを入力するか、既存の Google または GitHub アカウントをリンクします。コンソールにログインしたら、ページの右上にある `Create Cache` ボタンをクリックします：

![Create Cache button](@site/static/img/console-create-cache.png)

AWSを使って`worker`というキャッシュを作成します。現在、Momento HTTP APIはAWSでのみサポートされていますが、サポートされているAWSリージョンであればどのリージョンでもキャッシュを作成することができます。

![Create cache form](@site/static/img/console-create-worker-cache-form.png)

`Create`ボタンを押すと、利用可能なキャッシュのリストに新しい`worker`キャッシュが表示されます。

![New cache](@site/static/img/console-caches-worker.png)

キャッシュを作成した地域もキャッシュのリストに表示されていることに注意してください。次のステップでMomento API Keyを生成する際に、同じリージョンを選択する必要があります。

[api-keys](https://console.gomomento.com/api-keys)ページに移動し、キャッシュの作成に使用したクラウドプロバイダとリージョンを選択します。キャッシュはすでに作成されているので、ワーカーにキャッシュからの読み込みとキャッシュへの書き込みを許可し、キャッシュの作成や削除などのコントロールプレーン操作を許可しない、 fine-grained Key を使用します。これは特に、コントロールプレーンとデータプレーンの操作のセキュリティを別々に管理したい場合に便利です。

`Fine-Grained Access Key` トークンタイプを選択し、ドロップダウンから `Cache Name` として `worker` を選択し、`Role Type` として `readwrite` を選択する。スーパーユーザトークン `Super User Key` はコントロールプレーンの操作管理に使用する。Momento 認証の詳細については [こちら](./../authentication/index.mdx) を参照してください。その後、`Generate API Key` ボタンを押します。

![Generate token](@site/static/img/fgac-worker-auth.png)

`API Key` と `HTTP Endpoint` をコピーし、安全な場所に保存します。後で、Deno Deploy のデプロイを設定するために使用する必要があります。

![Generated token](@site/static/img/http-endpoint-auth-token.png)

### DenoとDeno Deployのセットアップ

[Deno Deploy](https://deno.com/deploy)アカウントを作成したら、Deno側の設定を行います。

まず、[Deno コンソール](https://dash.deno.com/account#access-tokens) で個人アクセストークンを作成します。このトークンは安全な場所に保存してください。

次に、["Projects "ページ](https://dash.deno.com/projects)に移動し、"New Project "をクリックし、"get started with an empty project using deployctl "というリンクをクリックする。プロジェクト名は、"lucky-spider-92 "のように、いくつかの文字列と数字にします。

３つ目に、お好みの方法で [deno](https://deno.land/manual@v1.36.1/getting_started/installation) をインストールします。

４つ目に、コマンドラインからDenoプロジェクトをデプロイするための[`deployctl`](https://deno.com/deploy/docs/deployctl)をインストールします。

```
deno install --allow-all --no-check -r -f https://deno.land/x/deploy/deployctl.ts
```

また、PATHに`deployctl`を追加する必要があるかもしれない場合はPATHを通してください。

```
export PATH="/Users/<your-username>/.deno/bin:$PATH"
```

## Momento HTTP APIを使用する

まず、deno HTTP API example ディレクトリに移動します：

```
cd client-sdk-javascript/examples/deno/http-api
```

.env` ファイルを作成し、Momento Cache の名前、対応する fine-grained access Keyに関連付けられた HTTP エンドポイントを指定します。

```
MOMENTO_API_KEY="<your-api-key>"
MOMENTO_CACHE_NAME="<your-cache-name>"
MOMENTO_HTTP_ENDPOINT="<your-http-endpoint>"
```

ローカルでプログラムを実行し、ブラウザでhttp://localhost:8000にアクセスします。

```
deno task start
```

[サンプルコード](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/deno/http-api/index.ts) は、キャッシュにアイテムを設定し、それを取得し、削除し、HTML レスポンスを返します。
これは [`MomentoFetcher` クラス](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/deno/http-api/index.ts#L10) を使用しています。このクラスは、Momento HTTP API の基本的な取得呼び出しにエラー処理を追加する小さなラッパーです。
   
```typescript
  const momento = new MomentoFetcher(apiKey, endpoint)

  await momento.set(cacheName, key, value, 10)
  console.log(`Set the key-value pair in the cache ${cacheName}`)

  const getRespAfterSet = await momento.get(cacheName, key)
  console.log(`Fetching the key after setting the value: ${getRespAfterSet}`)

  await momento.delete(cacheName, key)
  console.log(`Deleted the key-value pair from the cache ${cacheName}`)

  return new Response(
    `Tested the Momento cache using: <br /> Key: ${key} | Value: ${value}`,
    {
      status: 200,
      headers: new Headers({
        'Content-Type': 'text/html; charset=utf-8',
      }),
    },
  )
```

デプロイの準備ができたら、プロジェクト名と Deno Deploy アクセストークンを入力し、以下のコマンドを使用します。

```
deployctl deploy --project="<your-project-name>" --token="<your-deno-token>" index.ts
```

このコマンドは、`.env` ファイルを含む、現在のディレクトリのすべてのファイルをアップロードします。必要であれば、代わりに Deno Deploy コンソールを使用して [環境変数](https://deno.com/deploy/docs/environment-variables) を設定できます。deployctl` コマンドの詳細については、[こちら](https://deno.com/deploy/docs/deployctl) を参照してください。

デプロイされたプロジェクトは、[https://lucky-spider-92.deno.dev/](https://lucky-spider-92.deno.dev/) のようなプロジェクト名で始まる URL に公開されます。このURLは、あなたがビルドしたものを示すために、他の人と簡単に共有することができます！

## Momento Web SDKの使用

まず、deno Web SDK example ディレクトリに移動します：

```
cd client-sdk-javascript/examples/deno/web-sdk
```

.env`ファイルを作成し、Momento Cacheの名前とそれに対応するfine-grained access keyを指定します。

```
MOMENTO_API_KEY="<your-api-key>"
MOMENTO_CACHE_NAME="<your-cache-name>"
```

ローカルでプログラムを実行し、ブラウザでhttp://localhost:8000にアクセスします。

```
deno task start
```

[コードの例](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/deno/web-sdk/index.ts) は、Momento CacheClient をインスタンス化し、キャッシュにアイテムを設定し、それを取得し、削除し、基本的なレスポンスを返します。

```typescript
  const momento = new CacheClient({
    configuration: Configurations.Browser.v1(),
    credentialProvider: CredentialProvider.fromString({
      apiKey: env['MOMENTO_API_TOKEN'],
    }),
    defaultTtlSeconds: 60,
  })

  const cacheName = env['MOMENTO_CACHE_NAME']

  console.log('Storing key=foo, value=FOO')
  const setResponse = await momento.set(cacheName, 'foo', 'FOO')
  const getResponse = await momento.get(cacheName, 'foo')
  const deleteResponse = await momento.delete(cacheName, 'foo')

  return new Response(getResponse.body, {
    status: getResponse.status,
    headers: {
      'content-type': 'application/json',
    },
  })
```

デプロイの準備ができたら、Denoの[デプロイガイド](https://deno.land/manual@v1.36.1/advanced/deploying_deno)に従ってください。Deno Deployはまだnpmをサポートしていないので、この例はそこにデプロイすることはできません。

## 結論

この簡単なチュートリアルで、DenoとDeno Deployを使用したMomento搭載アプリケーションのデプロイがいかにシンプルで簡単かをご理解いただけたと思います。興味がある方は[サンプルコード](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/deno)をご覧ください。また、Momento Cacheのシンプルさを楽しんでいただければ幸いです。インフラストラクチャを管理し、プロビジョニングする必要がないため、稼働を開始することができます。
