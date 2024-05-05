---
sidebar_position: 5
sidebar_label: データをまとめて書き込む
title: Redis、CSV、JSON、等から Momento Cache へ効率的にまとめて書き込む
description: 溜まったデータを Momento Cache へスムーズにマイグレーションする方法を学びましょう。
pagination_next: null
---

# Redis、CSV、JSON、等から Momento Cache へ効率的にまとめて書き込む

もし既存のデータソースから大量のデータを Momento Cache へマイグレーションする必要がある場合は、このドキュメントがうってつけの場所です。
ここでは Redis をデータソースとしたパイプラインを提案していますが、設計上は他のデータソース、例えば CSV、JSON、Parquet、そして Memcache 等に
拡張可能です。

Momento はまとめてロードするためのツールキットを提供しており、それを使えば、個別に、もしくはパイプラインでデータを展開、検証し、ロードする処理を
簡素化することができます。

![diagram](@site/static/img/bulk-writing-diagram.svg)

上の図で、パイプラインはデータソースを共通のフォーマット、[JSON lines (JSON-L)](https://jsonlines.org/) にデータを正規化(展開)していることが
わかります。次に、Momento と互換性のないデータを特定するためのチェック処理を実行します。最後に、正当なデータをキャッシュにロードします。

私たちは、他のデータソースを追加してくれる皆さんの貢献を心待ちにしています。または、特定のデータソースのサポートを、[Discord](https://discord.com/invite/3HkAKjUZGq)
又は　[Momento support](mailto:support@momentohq.com)　へのメールでリクエストすることもできます。

## ツールセットのワークフローを設定する

### 前提条件

Redis データベースから読み出すためにツールセットを使うには、Java 8 以上のバージョンがインストールされていることを確認してください。
Windows をご利用の方は、bash をインストールするか、もしくは Windows Subsystem for Linux (WSL) の Linux を利用する必要があります。

### インストールステップ

1. 最新版を[ダウンロードするために、リリースページ](https://github.com/momentohq/momento-bulk-writer/releases)へ行きます。
2. Linux、OSX、または Windows のランタイムから選択します。
3. リリースを解凍し、お好みのディレクトリへ untar します。

Linux での例は以下の様になります:

```cli
$ wget https://github.com/momentohq/momento-bulk-writer/releases/download/${version}/momento-bulk-writer-linux-x86.tgz
$ tar xzvf momento-bulk-writer-linux-x86.tgz
$ cd ./momento-bulk-writer-linux-x86
$ ./extract-rdb.sh -h
$ ./validate.sh -h
$ ./load.sh -h
```

## 利用ガイド

このセクションでは、Redis から Momento へのデータパイプラインのためのツールセットを使うためのステップバイステップのガイドを提供します。
このプロセスには3つの鍵となるステップがあります: Redis データベースから JSON lines への展開、JSON lines の検証、そして JSON lines を
Momento へロードするステップです。

### Redis データベース (RDB) ファイルの取得

まず始めに、RDB ファイルを取得するために、[Amazon ElastiCache でバックアップを取るか](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-manual.html)、
[既存の Redis インスタンス上で BGSAVE を実行する](https://redis.io/commands/bgsave/)必要があります。

### Redis データベースファイルを展開し検証する

RDB ファイルを `./redis` ディレクトリに配置して、出力を現在のディレクトリ上に書き込みたい場合、
`extract-rdb-and-validate.sh` スクリプトを以下の様に実行します:


```cli
$ ./extract-rdb-and-validate.sh -s 1 -t 1 ./redis
```

このコマンドは `./redis` にある RDB ファイルを展開し、JSON lines フォーマットへ変換して、現在のディレクトリに書き出します。
`-s` と `-t` フラグは、それぞれキャッシュする最大 MiB と最大生存期間(TTL) の日数を設定します。
もし項目が サイズ上限 (5MiB) または TTL 上限 (24 時間) 等の [Momento のサービス上限](./../../limits)を超える場合、
その項目は処理中にフラグが立ちます。

より詳しい情報については、[サービス上限](./../../limits)をご確認下さい。

### 出力を検定する

現在のディレクトリには、いくつかのファイルとディレクトリが生成されいてるはずです。重要なディレクトリは、
`validate-strict` と `validate-lax` になります。 `validate-strict` には Redis と Momento 間での不一致のあるデータが含まれ、
`validate-lax` には条件を満たさない、完全にサポート不可なデータが含まれます。他にも、データ検証プロセスの詳細なレポートもあります。

レポートのいくつかの詳細です:
`validate-strict` ディレクトリには、ソースデータ (Redis) と Momento Cache の間の不一致のデータがありますが、その条件としては以下の様なものです:

- 項目の最大サイズを超過している
- 最大 TTL より長い TTL が設定されている
- TTL の設定が欠けている (Momento Cache では必須)
- Momento Cache でサポートされていない型が使われている

これはどのデータに TTL が欠けていて、どんな TTL を設定するかを理解するのに役立ちます。お客様の中には、アプリケーションロジックのバグによって起こっているかもしれない、
彼らのデータの中の外れ値を探し出すのに役立った方もいます。

対照的に、`validate-lax` ディレクトリには、以下の様なデータが入っています:

- [Momento の項目の最大サイズ](./../../limits)を超えている
- Momento がサポートしていないデータ型

`validate-lax` には Momento Cache にロードできないデータが含まれていて、人手で確認する必要があります。
例えば、Momento の最大 TTL より長い TTLの項目、TTL が欠けている項目、または既に TTL が過ぎているもので、
何らかの処置をすることで Momento にロードできるようになる可能性があります。

### Momento Cache にデータをロードする

最後に、検証済のデータをロードスクリプトを利用して Momento に読み込みます。以下の様に実行してください:


```cli
$ ./load.sh -a $AUTH_TOKEN -c $CACHE -t 1 -n 10 ./validate-lax/valid.jsonl
```

このコマンドは `./validate-lax/valid.jsonl` にあるデータを、デフォルトで1日の TTL を付け、`$AUTH_TOKEN` に設定した Momento の認証トークを使いながら、
`$CACHE` に指定したキャッシュにロードしてくれます。`-n` フラグで Momento に行うリクエストの並列数を指定できます。

### Momento Cache のデータを検証する

必要であれば、Momento Cache の中にあるデータがディスク上のデータと一致するかを verify コマンドを使って検証することができます。
これはサニティーチェックで、期限切れの項目がほぼないので成功するはずです。

```cli
$ ./bin/MomentoEtl verify -a $AUTH_TOKEN -c $CACHE -n 10 ./validate-lax/valid.jsonl
```

このツールはディスク上の項目とキャッシュ内の差分を表示してくれます。もし正しく処理を実行していたら、エラーは何も出力されないはずです。

### EC2 インスタンスから実行する

このツールセットは、64GB のディスクを付けた、AWS の同一リージョン内の m6a.2xlarge EC2 インスタンス上でテストしています。
最適なレートを決めるために、最初にたくさんの並列リクエスト数でパフォーマンスを確認しました。

この強力なツールセットを使って、Momento Cache へデータをまとめて書き込む便利な機能を楽しんでみて下さい。
