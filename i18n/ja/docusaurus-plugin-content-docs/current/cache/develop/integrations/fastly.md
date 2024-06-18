---
sidebar_position: 9
sidebar_label: Fastly
title: Integrating Momento Cache with Fastly Compute@Edge
description: Learn to deploy a Fastly Compute@Edge project that uses Momento Cache via HTTP API.
---

[Compute@Edge](https://www.fastly.com/products/edge-compute)は、サーバーレスにコードをデプロイして実行するためのFastlyのプラットフォームです。

このチュートリアルでは、[JavaScript SDK](https://github.com/momentohq/client-sdk-javascript) の [example](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/fastly-compute) を見ていきます。このチュートリアルでは、Fastly Compute@Edgeプロジェクトを作成し、HTTP APIを介してMomento Cacheと対話し、データの取得、設定、削除を行います。

HTTP API は軽量で、Fastly が要求する以上の依存関係を必要とせず、標準の `fetch` HTTP クライアントメソッドを使用することができます。ただし、`get`、`set`、`delete` などの Momento API の基本的なサブセットしか提供されておらず、現在のところ AWS をクラウドプロバイダーとして使用している場合にのみ利用可能です。

## 前提条件

このアプリをデプロイして実行するには、以下のものが必要です：

- [GitHub](https://github.com/)、[GitLab](https://gitlab.com)、[Bitbucket](https://bitbucket.org/)などのGitプロバイダーのアカウント。
- [Fastly](https://www.fastly.com/)のアカウント。
- 個人リポジトリにある [Momento JavaScript SDK](https://github.com/momentohq/client-sdk-javascript) のコピーまたはフォーク。

### Momentoをセットアップ

Git プロバイダーのアカウントに Momento JavaScript SDK のコピーまたはフォークがあれば、[Momento コンソール](https://console.gomomento.com) を使って Momento 側を設定する準備が整います。コンソールにアカウントを作成するには、メールアドレスを入力するか、既存の Google または GitHub アカウントをリンクします。コンソールにログインしたら、ページの右上にある `Create Cache` ボタンをクリックします：

![Create Cache button](@site/static/img/console-create-cache.png)

AWSを使って`worker`というキャッシュを作成します。現在、Momento HTTP APIはAWSでのみサポートされていますが、サポートされているAWSリージョンであればどのリージョンでもキャッシュを作成することができます。

![Create cache form](@site/static/img/console-create-worker-cache-form.png)

`Create`ボタンを押すと、利用可能なキャッシュのリストに新しい`worker`キャッシュが表示されます。

![New cache](@site/static/img/console-caches-worker.png)

キャッシュを作成した地域もキャッシュのリストに表示されていることに注意してください。次のステップでMomento APIキーを生成する際に、同じリージョンを選択していることを確認する必要があります。

[API keys](https://console.gomomento.com/api_keys)ページに移動し、キャッシュの作成に使用したクラウドプロバイダとリージョンを選択します。キャッシュはすでに作成されているので、ワーカーにキャッシュからの読み込みとキャッシュへの書き込みを許可し、キャッシュの作成や削除などのコントロールプレーン操作を許可しない、 fine-grained keyを使用します。これは特に、コントロールプレーンとデータプレーンの操作のセキュリティを別々に管理したい場合に便利です。

`Fine-Grained Access Key` キータイプを選択し、ドロップダウンリストから `Cache Name` として `worker` を選択し、`Role Type` として `readwrite` を選択する。`Super User Key` はコントロールプレーンの操作を管理するために使用します。Momento 認証の詳細については [こちら](../authentication/index.mdx) を参照してください。その後、`Generate API Key` ボタンを押します。

![Generate API Key](@site/static/img/fgac-worker-auth.png)

`API Key` と `HTTP Endpoint` をコピーして安全な場所に保存します。後でFastly Compute@Edgeのデプロイメントを構成するために使用する必要があります。

![Generated token](@site/static/img/http-endpoint-auth-token.png)

### Fastly のセットアップ

Fastlyアカウントを作成したら、[Fastlyコンソール](https://manage.fastly.com/services/all)を使ってFastly側の設定を行います。ログインしたら、右上のアカウント名をクリックし、「アカウント」を選択します。サイドバーの`Personal profile`セクションで、`API tokens`を選択します。右上の`Create Token`ボタンをクリックし、Fastlyの指示に従って[ユーザーAPIトークン](https://docs.fastly.com/en/guides/using-api-tokens#creating-api-tokens)を作成します。このAPIトークンは必ず安全な場所に保存してください。

次に、[Fastly CLI](https://developer.fastly.com/learning/compute/#install-the-fastly-cli)をインストールし、コマンドラインプロンプトに従って、先ほど作成したAPIトークンを提供します：

```bash
brew install fastly/tap/fastly
fastly profile create
```

## Fastlyへのデプロイ

次に、アプリケーションを設定し、Fastly アカウントにデプロイします。前述したように、リポジトリで利用可能な Momento JavaScript SDK のコピーが必要です。
この例では、[オリジナル](https://github.com/momentohq/client-sdk-javascript) からフォークした GitHub リポジトリからデプロイします。

![Fork SDK Repository](@site/static/img/github-fork-js-sdk.png)

このリポジトリには `examples` の下に `fastly-compute` というディレクトリがあり、Momento HTTP API を使って Momento Cache とやり取りするためのサンプルコードが含まれています。

Fastly Compute@Edgeは、`fastly.toml`というファイルを使用して、エッジコードのローカルおよびデプロイされた実行環境を設定します。Compute@Edgeの設定についての詳細は、[彼らのウェブサイト](https://developer.fastly.com/reference/compute/fastly-toml/)を参照してください。

まず、関連するexampleディレクトリに移動し、依存関係をインストールします:

```bash
cd client-sdk-javascript/examples/fastly-compute
npm install
```

次に、以下の内容の`secrets.json`ファイルを作成します：

```
{
    "MOMENTO_HTTP_ENDPOINT": "<YOUR-HTTP-ENDPOINT>",
    "MOMENTO_BACKEND": "<YOUR-MOMENTO-BACKEND-NAME>",
    "MOMENTO_CACHE": "<YOUR-CACHE-NAME>",
    "MOMENTO_API_KEY": "<YOUR-MOMENTO-API-KEY>"
}
```

変数 `MOMENTO_BACKEND` には任意の文字列を設定できます。HTTP エンドポイントが Momento Cache を作成したリージョンに対応していることを確認します。これは、Momento Console の `Generate API Key` の出力からコピーした HTTP エンドポイントの値です。

**Note***: 本番環境では、Momento APIキーは[Fastly Secret Store](https://developer.fastly.com/reference/api/services/resources/secret-store/)に保存する必要があります。しかし、これは現在ベータ版ユーザーに制限されている機能なので、この例ではAPIキーを`secrets.json`ファイルで指定された他の値と共に[Config Store](https://developer.fastly.com/reference/api/services/resources/config-store/)に保存します。

次に、`secrets.json` ファイルの内容が `fastly.toml` ファイルの内容と一致していることを確認します。

具体的には、HTTP エンドポイントとバックエンド名が `[local_server]` という見出しの下に記述されていることを確認します。ローカルの実行環境では、この見出しの下に提供された情報を使用して、開発中に適切なバックエンドと config ストアを localhost サーバーに設定します。


```
[local_server]

  [local_server.backends]

    [local_server.backends.<YOUR-MOMENTO-BACKEND-NAME>]
      url = "https://<YOUR-HTTP-ENDPOINT>"

  [local_server.config_stores]

    [local_server.config_stores.secrets]
      file = "secrets.json"
      format = "json"
```

最後に、`secrets.json` ファイルにある 4 つの変数が、`[setup]` の項目にコピーされていることを確認します。Fastly はこの見出しで提供された情報を使用して、実行環境に適切なバックエンドと設定ストアのリソースを作成し、初期化します。

```
[setup]

  [setup.backends]

    [setup.backends.<YOUR-MOMENTO-BACKEND-NAME>]
      address = "<YOUR-HTTP-ENDPOINT>"
      port = 443

  [setup.config_stores]

    [setup.config_stores.secrets]

      [setup.config_stores.secrets.items]

        [setup.config_stores.secrets.items.MOMENTO_BACKEND]
          value = "<YOUR-MOMENTO-BACKEND-NAME>"

        [setup.config_stores.secrets.items.MOMENTO_CACHE]
          value = "<YOUR-CACHE-NAME>"

        [setup.config_stores.secrets.items.MOMENTO_HTTP_ENDPOINT]
          value = "<YOUR-HTTP-ENDPOINT>"

        [setup.config_stores.secrets.items.MOMENTO_TOKEN]
          value = ""<YOUR-MOMENTO-API-KEY>""
```

次に、開発サーバーを起動し、[localhost:7676](http://localhost:7676)に移動して動作していることを確認します。

```bash
fastly compute serve
```

この例のコードでは、キャッシュにアイテムを設定し、それを取得し、削除し、HTML レスポンスを返します。
これは [`MomentoFetcher` class](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/fastly-compute/src/index.ts#L98) を使用しています。このクラスは、Momento HTTP API の基本的な取得呼び出しにエラー処理を追加する小さなラッパーです。
   
```typescript
    const momento = new MomentoFetcher(authToken, httpEndpoint, backend);

    const getResp = await momento.get(cacheName, key);
    console.log(`Fetching the key when the cache is empty: ${getResp}`);

    await momento.set(cacheName, key, value, 10);
    console.log(`Set the key-value pair in the cache ${cacheName}`);

    const getRespAfterSet = await momento.get(cacheName, key);
    console.log(`Fetching the key after setting the value: ${getRespAfterSet}`);

    await momento.delete(cacheName, key);
    console.log(`Deleted the key-value pair from the cache ${cacheName}`);

    return new Response(`Tested the Momento cache using: <br /> Key: ${key} | Value: ${value}`, {
      status: 200,
      headers: new Headers({'Content-Type': 'text/html; charset=utf-8'}),
    });
```

表示されるのは、一致するシンプルなテキストの応答です。：

![Fastly example response](@site/static/img/deployed-fastly-response.png)

Fastlyでプロジェクトを実行する準備ができたら、このコマンドを実行してビルドとデプロイを行います：

```bash
fastly compute publish
```

デプロイしたサービスのログを見たい場合は、`fastly.toml`があるのと同じディレクトリからログの尾行を有効にすることができます：

```bash
fastly log-tail
```

Fastlyへのデプロイに関する詳細は[こちら](https://developer.fastly.com/learning/compute/#deploy-to-a-fastly-service)を参照してください。また、Fastly Compute@Edgeプロジェクトのログとモニタリングに関する詳細は、[こちら](https://developer.fastly.com/learning/compute/testing/#live-log-monitoring-in-your-console)を参照してください。

## 結論

この簡単なチュートリアルで、Fastly Compute@Edgeを使ってMomentoを搭載したアプリケーションをデプロイすることがいかにシンプルで簡単であるかをご理解いただけたと思います。もちろん、[サンプルコード](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/fastly-compute) もご覧ください。インフラストラクチャを管理したりプロビジョニングしたりする必要がないので、Momento Cacheのシンプルさを楽しんでいただければと思います。
