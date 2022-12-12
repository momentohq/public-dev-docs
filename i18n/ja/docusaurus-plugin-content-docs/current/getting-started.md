---
sidebar_position: 3
sidebar_class_name: sidebar-item-getting-started
sidebar_label: まずはじめに
title: Momento サーバーレスキャッシュサービスをはじめてみる
description: SDK またはCLI を使って、Momento サーバーレスキャッシュをすぐに使い始めてみましょう。
---

# Momento サーバーレスキャッシュをはじめてみる

SDK または CLI を使って Momento サーバーレスキャッシュをすぐに使い始める方法をお探しでしたら、ここから始めましょう。サービスにアクセスする方法は以下の様に複数あります。

## CLI をブラウザ上で試してみる

私たちの CLI ツールをブラウザ上で今試してみることができます。何のソフトウェアもインストールする必要はありません！

[Momento サーバーレスキャッシュを試してみる](https://www.gomomento.com/try-momento-for-free)に行って、
ブラウザ内の shell セッションで直接 Momento CLI のコマンドを実験してみることができます。
無料の認証トークンを作成し、キャッシュを作成し、そのキャッシュ上で`set` や`get` コマンドを実行してみることができます。
試してみるのに数分もかかりません！

## Momento command line interface (CLI) をインストールする

[ブラウザ上で実行する](#cli-をブラウザ上で試してみる)のではなく自身のマシン上で CLI を実行してみたい場合には、こちらに沿って各オペレーティングシステムごとの
方法でインストールしてください:

**macOS - [Homebrew](https://brew.sh/)を利用**

```
brew tap momentohq/tap
brew install momento-cli
```

**Linux**

1. 最新の Linux 用 tar.gz ファイルをこちらからダウンロード: [https://github.com/momentohq/momento-cli/releases/latest](https://github.com/momentohq/momento-cli/releases/latest)
2. `momento-cli-X.X.X.linux_x86_64.tar.gz` を解凍
3. `./momento` を実行パスに移動する

**Windows**

1. 最新の Windows 用 zip ファイルをこちらからダウンロード: [https://github.com/momentohq/momento-cli/releases/latest](https://github.com/momentohq/momento-cli/releases/latest)
1. `momento-cli-X.X.X.windows_x86_64.zip` を解凍
1. 解凍された `.exe` ファイルを実行する

CLI が正しくインストールされたかを確認するには、ヘルプコマンドを実行してみます:

```
$ momento --help
momento 0.12.8
CLI for Momento APIs

USAGE:
    momento [OPTIONS] <SUBCOMMAND>

OPTIONS:
    -h, --help       Print help information
    -V, --version    Print version information
        --verbose

SUBCOMMANDS:
    account      Manage Accounts
    cache        Cache Operations
    configure    Configure Momento Credentials
    help         Print this message or the help of the given subcommand(s)
```

### 認証トークンを取得する

[Momento における認証は認証トークンによって行われますが](./learn/how-it-works#authentication-token)、コマンドラインを使って直接 Momento サーバーレスキャッシュにサインアップすることができます。

認証トークンは Momento サーバーレスキャッシュの特定のリージョンに紐づいています。`account` コマンドをご希望のクラウドプロバイダーとリージョンを指定しながら使うと、各リージョン用の認証トークンを生成することができます:

#### AWS [利用可能リージョンは us-west-2, us-east-1, ap-northeast-1]

```console
momento account signup aws --email <TYPE_YOUR_EMAIL_HERE> --region <TYPE_DESIRED_REGION>
```

#### GCP [利用可能リージョンは us-east1, ap-northeast1]

```console
momento account signup gcp --email <TYPE_YOUR_EMAIL_HERE> --region <TYPE_DESIRED_REGION>
```

#### Azure (まもなく対応) もしご興味があれば[お問い合わせ下さい](mailto:support@momentohq.com)

```console
momento account signup azure --email <TYPE_YOUR_EMAIL_HERE> --region <TYPE_DESIRED_REGION>
```

`<TYPE_YOUR_EMAIL_HERE>` をご自身の実際の E メールアドレスで置き換えるのを忘れないようにしてください。

_注: もしお使いのクラウドプロバイダーで使いたいリージョンが利用可能でない場合は、それを追加することに関してぜひ私たちに[お問い合わせください](mailto:support@momentohq.com)。_

## Momento CLI を設定する

Momento から認証トークンが E メールで送られてきます。そうしたら、`momento configure` コマンドを使って、ローカルの CLI がそのトークンを使うように設定することができます:

```
$ momento configure
Token: // < Enter token from email here.
Default Cache [default-cache]: my-first-cache // Name of cache to use on CLI by default.
Default TTL Seconds [600]: 30 // Sets the default TTL for cache entries. For demostration purposes we are setting this lower right now.
[2022-03-31T15:31:25Z INFO  momento::commands::cache::cache_cli] creating cache...
[2022-03-31T15:31:33Z INFO  momento::commands::configure::configure_cli] default cache successfully created
```

これでもうあなたの Momento サーバーレスキャッシュは稼働しています！続いて、Momento サーバーレスキャッシュにデータをキャッシュするためにどうやって Momento CLI を使うかを見ていきましょう。

## データをいくつかキャッシュしてみる

Momento CLI の`cache` コマンドは Momento サーバーレスキャッシュと対話するのに使われます。実際にいくつかのコマンドを見てみましょう。

まず、`set` サブコマンドを使ってデフォルトの Momento サーバーレスキャッシュにアイテムを 1 つ保存することができます:

```
$ momento cache set --key test --value value
[2022-03-31T15:45:17Z INFO  momento::commands::cache::cache_cli] setting key: test into cache: my-first-cache
[2022-03-31T15:45:18Z INFO  momento::commands::cache::cache_cli] set success
```

そうしたら、そのキーを`get` サブコマンドを使って取り出すことができます:

```
$ momento cache get --key test
[2022-03-31T15:45:25Z INFO  momento::commands::cache::cache_cli] getting key: test from cache: my-first-cache
value
```

キャッシュを設定する際に、デフォルトの Time to Live (TTL) を 30 秒に設定しています。もし 30 秒待ってからキャッシュを取り出してみると、アイテムが消えているでしょう:

```
$ sleep 30 // wait for item to expire
$ momento cache get --key test
[2022-03-31T15:46:02Z INFO  momento::commands::cache::cache_cli] getting key: test from cache: my-first-cache
[2022-03-31T15:46:03Z INFO  momento::commands::cache::cache_cli] cache miss
```

これらが Momento CLI を使った標準的な`get` と`set` の[データプレーン操作](./learn/how-it-works#data-plane-performant-cache-interactions)になります。

また、Momento CLI を使って[コントロールプレーン操作](./learn/how-it-works#control-plane-simple-efficient-cache-management)、例えばキャッシュを作成したり、削除したり、利用可能なキャッシュ一覧を見たりすることもできます。

`cache` コマンドの利用可能な全てのサブコマンドは `momento cache --help` をターミナルで実行すると見ることができます:

```
$ momento cache --help
momento-cache
Cache Operations

USAGE:
    momento cache [OPTIONS] <SUBCOMMAND>

OPTIONS:
    -h, --help       Print help information
        --verbose

SUBCOMMANDS:
    create    Creates a Momento Cache
    delete    Deletes the cache
    get       Gets item from the cache
    help      Print this message or the help of the given subcommand(s)
    list      Lists all momento caches
    set       Stores a given item in cache
```

さらに、デフォルトの設定値以外のコマンドオプション、例えば異なるリージョン、キャッシュ名、TTL などを指定することもできます。

サブコマンドの全てのパラメータについての詳しい情報は `momento cache $SUBCOMMAND --help` を実行して学ぶことができます。

## 次のステップ

CLI は基本の Momento API を試して理解するのには良いですが、ほとんどのキャッシュの仕事はアプリケーション上で行われます。それらには、Momento SDK を使うことができます。

現在、以下の言語で SDK が利用可能です。各レポジトリを確認して、詳細な手順と利用例をご確認ください。

- [Go](https://github.com/momentohq/client-sdk-go)
- [Java](https://github.com/momentohq/client-sdk-java)
- [JavaScript](https://github.com/momentohq/client-sdk-javascript)
- [Python](https://github.com/momentohq/client-sdk-python)
- [.NET](https://github.com/momentohq/client-sdk-dotnet)
- [Rust](https://github.com/momentohq/client-sdk-rust)
- [PHP](https://github.com/momentohq/client-sdk-php)
