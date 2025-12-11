---
sidebar_position: 10
sidebar_label: Deno
title: Integrating Momento Cache with Deno
description: Learn to deploy a Deno project that uses Momento Cache
---

[Deno](https://deno.land/)は、セキュアなデフォルトを備えたJavaScript、TypeScript、WebAssemblyランタイムであり、[Deno Deploy](https://deno.com/deploy)は、それらに対応するサーバーレス・エッジワーカー・プラットフォームです。

このチュートリアルでは、[JavaScript Web SDK](https://github.com/momentohq/client-sdk-javascript) の 2 つの [例](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/deno) を見ていきます。このチュートリアルでは、Web SDKまたはHTTP APIを介してMomento Cacheと対話し、データを取得、設定、および削除するDenoプロジェクトを作成します。

## Momento Web SDK と HTTP API の違い

DenoでMomento Cacheを使用する際に、どちらかを選択する理由がいくつかあります。

- HTTP API は軽量で、Deno が必要とする以上の依存関係は必要なく、標準の `fetch` HTTP クライアントメソッドを使用することができます。しかし、これは `get`、`set`、`delete` といった Momento API の基本的なサブセットを提供するだけであり、現在のところクラウドプロバイダーとして AWS を使用している場合にのみ利用可能です。

- Web SDKの方が重く、SDKへの依存関係を追加する必要があります。しかし、Momento API（DictionariesやSortedSetsのようなコレクション、Momento Topicsへのパブリッシュ機能を含む）を完全にサポートしています。また、完全な TypeScript/JavaScript API を備えており、Momento とやり取りするコードをより簡単に書くことができます。これにより、Worker を開発する際の時間と労力を節約することができます。

- さらに、Deno Deploy はまだ [npm specifiers](https://deno.land/manual@v1.36.1/node/npm_specifiers) をサポートしていません。今のところ、Deno Deploy を使用して公開できるのは HTTP API の例のみです。

## 前提条件

このアプリをデプロイして実行するには、以下のものが必要です：

- [GitHub](https://github.com/)、[GitLab](https://gitlab.com)、[Bitbucket](https://bitbucket.org/)などのGitプロバイダーのアカウント。
- [Deno Deploy](https://deno.com/deploy)アカウント。
- 個人リポジトリにある[Momento JavaScript SDK](https://github.com/momentohq/client-sdk-javascript)のコピーまたはフォーク。

### Momento のセットアップ

Git プロバイダーのアカウントに Momento JavaScript SDK のコピーまたはフォークがあれば、[Momento コンソール](https://console.gomomento.com) を使って Momento 側を設定する準備が整います。コンソールにアカウントを作成するには、メールアドレスを入力するか、既存の Google または GitHub アカウントをリンクします。コンソールにログインしたら、ページの右上にある `Create Cache` ボタンをクリックします：

![Create Cache button](/img/console-create-cache.png)

AWSを使って`worker`というキャッシュを作成する。現在、Momento HTTP APIはAWSでのみサポートされていますが、サポートされているAWSリージョンであればどのリージョンでもキャッシュを作成することができます。

![Create cache form](/img/console-create-worker-cache-form.png)

`Create`ボタンを押すと、利用可能なキャッシュのリストに新しい`worker`キャッシュが表示されます。

![New cache](/img/console-caches-worker.png)

キャッシュを作成した地域もキャッシュのリストに表示されていることに注意してください。次のステップでMomento API Keyを生成する際に、同じ地域を選択する必要があります。

[tokens](https://console.gomomento.com/tokens)ページに移動し、キャッシュの作成に使用したクラウドプロバイダとリージョンを選択します。キャッシュはすでに作成されているので、Worker にキャッシュからの読み込みとキャッシュへの書き込みを許可し、キャッシュの作成や削除のようなコントロールプレーン操作は許可しない、きめの細かいトークンを使います。これは特に、コントロールプレーンとデータプレーンの操作のセキュリティを別々に管理したい場合に便利です。

`Fine-Grained Access Token` トークンタイプを選択し、ドロップダウンから `Cache Name` として `worker` を選択し、`Role Type` として `readwrite` を選択します。スーパーユーザトークン `Super User Token` はコントロールプレーンの操作管理に使用します。Momento 認証の詳細については [こちら](/cache/authentication) を参照してください。Generate API Key` ボタンを押します。

![Generate token](/img/fgac-worker-auth.png)

`API Key` と `HTTP Endpoint` をコピーし、安全な場所に保存します。後で、Deno Deploy のデプロイを設定するために使用する必要があります。

![Generated token](/img/http-endpoint-auth-token.png)

### Deno の環境セットアップ

[Deno Deploy](https://deno.com/deploy)アカウントを作成したら、Deno側を設定する準備が整いました。

まず、[Denoコンソール](https://dash.deno.com/account#access-tokens)で個人アクセストークンを作成します。このトークンは安全な場所に保存してください。

次に、["Projects "ページ](https://dash.deno.com/projects)に移動して、"New Project "をクリックし、"get started with an empty project using deployctl "というリンクをクリックします。プロジェクト名は、"lucky-spider-92 "のように、いくつかの文字列と数字にします。

第三に、お好みの方法で[deno](https://deno.land/manual@v1.36.1/getting_started/installation)をインストールします。

第四に、コマンドラインからDenoプロジェクトをデプロイするための[`deployctl`](https://deno.com/deploy/docs/deployctl)をインストールすします。

```
deno install --allow-all --no-check -r -f https://deno.land/x/deploy/deployctl.ts
```

また、PATHに`deployctl`を追加する必要があるかもしれません：

```
export PATH="/Users/<your-username>/.deno/bin:$PATH"
```

## Momento HTTP API を利用する

まず、deno HTTP API example ディレクトリに移動します：

```
cd client-sdk-javascript/examples/deno/http-api
```

`.env` ファイルを作成し、Momento Cache の名前、対応するきめ細かいアクセストークン、トークンに関連付けられた HTTP エンドポイントを指定します。

```
MOMENTO_API_KEY="<your-api-key>"
MOMENTO_CACHE_NAME="<your-cache-name>"
MOMENTO_HTTP_ENDPOINT="<your-http-endpoint>"
```

ローカルでプログラムを実行し、ブラウザで http://localhost:8000 にアクセスして確認します。

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

デプロイの準備ができたら、プロジェクト名と Deno Deploy アクセストークンを入力し、以下のコマンドを使用します：

```
deployctl deploy --project="<your-project-name>" --token="<your-deno-token>" index.ts
```

このコマンドは、`.env` ファイルを含む、現在のディレクトリのすべてのファイルをアップロードします。必要であれば、代わりに Deno Deploy コンソールを使用して [環境変数](https://deno.com/deploy/docs/environment-variables) を設定できます。deployctl` コマンドの詳細については、[こちら](https://deno.com/deploy/docs/deployctl) を参照してください。

デプロイされたプロジェクトは、[https://lucky-spider-92.deno.dev/](https://lucky-spider-92.deno.dev/)のように、プロジェクト名で始まるURLに公開されます。このURLは、あなたが作ったものを見せるために、他の人と簡単に共有することができます！

## Momento Web SDK を利用する

まず、deno Web SDK example ディレクトリに移動します：

```
cd client-sdk-javascript/examples/deno/web-sdk
```

`.env`ファイルを作成し、Momento Cacheの名前とそれに対応するきめ細かいアクセストークンを指定します。

```
MOMENTO_API_KEY="<your-api-key>"
MOMENTO_CACHE_NAME="<your-cache-name>"
```

ローカルでプログラムを実行し、ブラウザで http://localhost:8000 にアクセスして確認します。

```
deno task start
```

[コード例](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/deno/web-sdk/index.ts) は、Momento CacheClient をインスタンス化し、キャッシュにアイテムを設定し、それを取得し、削除し、基本的なレスポンスを返します。

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

デプロイの準備ができたら、Denoの[デプロイガイド](https://deno.land/manual@v1.36.1/advanced/deploying_deno)の1つに従ってください。Deno Deployはまだnpm指定子をサポートしていないので、この例だけではそこにデプロイできません。

## まとめ

この簡単なチュートリアルで、DenoとDeno Deployを使用したMomento搭載アプリケーションのデプロイがいかにシンプルで簡単かをご理解いただけたと思います。さらに[サンプルコード](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/deno)をご覧ください。また、Momento Cacheのシンプルさを楽しんでいただければ幸いです。インフラストラクチャを管理し、プロビジョニングする必要がないため、稼働を開始することができます。
