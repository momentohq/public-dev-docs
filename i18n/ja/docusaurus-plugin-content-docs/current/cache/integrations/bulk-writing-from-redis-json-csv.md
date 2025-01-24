---
sidebar_position: 5
sidebar_label: Bulk data writing
title: Bulk data writing Redis, CSV, and JSON into Momento Cache
description: Learn to migrate heaps of data into Momento Cache smoothly.
---

# Redis、CSV、JSONなどからMomento Cacheへの効率的な一括書き込み

既存のソースから大量のデータをMomentoキャッシュに移行する必要がある場合、あなたは正しい場所にいます。ここで提案するパイプラインはRedisデータソースをサポートしていますが、CSV、JSON、Parquet、Memcacheなど他のデータソースにも拡張可能です。
Momentoは、抽出、検証、ロードを個別に、または合理化されたパイプラインを介して簡素化するバルク・ロード・ツールキットを提供します。
![diagram](/img/bulk-writing-diagram.svg)
上の図では、パイプラインがまずデータソースを共通のフォーマットである[JSON行(JSON-L)](https://jsonlines.org/)に正規化(抽出)するのがわかります。次に、Momento と互換性のないデータを特定するためのチェックが行われます。最後に、有効なデータがキャッシュにロードされます。
私たちはデータソースを追加するための貢献を奨励し、歓迎します。[Discord](https://discord.com/invite/3HkAKjUZGq)またはメール[Momento support](mailto:support@momentohq.com)で、特定のデータソースのサポートをリクエストすることもできます。


## ツールセット・ワークフローの設定
### 前提条件

Redisデータベースを読み込むためのツールセットを使用するには、Java 8またはそれ以上のバージョンがインストールされていることを確認してください。Windowsユーザーの場合は、さらにbashをインストールするか、Windows Subsystem for Linux（WSL）を使用してLinuxバージョンを実行する必要があります。

### インストール手順

1. 最新リリースをダウンロードするには、[リリースのページ](https://github.com/momentohq/momento-bulk-writer/releases)に移動
2. ランタイムはLinux、OSX、Windowsから選択可能
3. リリースを解凍し、任意のディレクトリに解凍
以下はLinuxの例です：

```cli
$ wget https://github.com/momentohq/momento-bulk-writer/releases/download/${version}/momento-bulk-writer-linux-x86.tgz
$ tar xzvf momento-bulk-writer-linux-x86.tgz
$ cd ./momento-bulk-writer-linux-x86
$ ./extract-rdb.sh -h
$ ./validate.sh -h
$ ./load.sh -h
```

## 使用ガイド

このセクションでは、RedisからMomentoへのデータパイプラインのためのツールセットを使用するためのステップバイステップのガイドを提供します。このプロセスには、Redis データベースを JSON 行に抽出し、JSON 行を検証し、最後に JSON 行を Momento にロードするという 3 つの重要なステップがあります。

### Redisデータベース（RDB）ファイルの取得

まず、[Amazon ElastiCacheのバックアップ](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-manual.html)か[既存のRedisインスタンスでBGSAVEを実行](https://redis.io/commands/bgsave/)してRDBファイルを取得する必要があります。

### Redisデータベースファイルの抽出と検証

`./redis`にRDBファイルのディレクトリがあり、その出力をカレントディレクトリに書き出したい場合は、以下のように`extract-rdb-and-validate.sh`スクリプトを使用します：

```cli
$ ./extract-rdb-and-validate.sh -s 1 -t 1 ./redis
```

このコマンドは `./redis` にある RDB ファイルを展開し、JSON lines フォーマットへ変換して、現在のディレクトリに書き出します。
`-s` と `-t` フラグは、それぞれキャッシュする最大 MiB と最大生存期間(TTL) の日数を設定します。
もし項目が サイズ上限 (5MB) または TTL 上限 (24 時間) 等の [Momento のサービス上限](/cache/manage/limits)を超える場合、
その項目は処理中にフラグが立ちます。

より詳しい情報については、[サービス上限](/cache/manage/limits)をご確認下さい。

### 出力の検査

カレントディレクトリには、いくつかの出力ファイルとディレクトリが含まれているはずです。重要な新しいディレクトリは `validate-strict` と `validate-lax` です。`validate-strict`にはRedisとMomento間の不一致のデータが含まれ、`validate-lax`にはより少ない基準のデータが含まれ、完全にサポートされていないデータのみをキャッチします。また、データ検証プロセスの詳細な検証レポートもあります。
レポートの詳細をいくつか紹介します：

`validate-strict`ディレクトリには、ソースデータ (Redis) と Momento Cache の間にミスマッチがあった場合のデータが格納されます：
- 最大アイテムサイズを超える
- TTLが最大TTLより大きい
- TTL がない (Momento Cache では必須)
- Momento Cache がサポートしていない型
これは、どのデータにTTLが欠けているかを把握し、どのTTLを適用すべきかを理解するのに役立ちます。特に、アプリケーション・ロジックのバグが原因である可能性のあるデータの異常値を特定するのに役立ちます。
対照的に、`validate-lax`ディレクトリには、以下に該当するデータが存在する場合のみデータが出力されます：
- Momentoの[最大アイテムサイズ](/cache/manage/limits)を超える
- Momento でサポートされていない型である。
`validate-lax`ディレクトリには、Momento Cacheへの読み込みがサポートされていないデータが含まれているため、手動で確認する必要がある。例えば、TTL が Momento の最大値よりも大きいもの、TTL が不足しているもの、既に期限切れのものなどは、対処してから Momento に読み込むことができます。

### Momento Cacheにデータをロードする

最後に、ロードスクリプトを使用して、検証済みのデータをMomentoにロードします。サンプルは以下です

```cli
$ ./load.sh -a $AUTH_TOKEN -c $CACHE -t 1 -n 10 ./validate-lax/valid.jsonl
```

このコマンドは `./validate-lax/valid.jsonl` にあるデータを、Momento の認証トークン `$AUTH_TOKEN` を使って、デフォルトの TTL を 1 日としてキャッシュ `$CACHE` にロードする。`n` フラグは Momento への同時リクエスト数を設定します。

### Momento Cacheのデータを検証する

オプションで、verify サブコマンドを使用して、Momento Cache 内のデータがディスク上のデータと一致していることを確認できます。これはサニティ・チェックであり、すでに有効期限が切れている項目を除いて成功するはずです。

```cli
$ ./bin/MomentoEtl verify -a $AUTH_TOKEN -c $CACHE -n 10 ./validate-lax/valid.jsonl
```

このツールは、ディスク上のアイテムとキャッシュ内のアイテムの違いを表示します。もし私たちが正しいことをしたのなら、エラー出力はないはずです。

### EC2インスタンスからの実行

このツールセットは、AWSの64GBのディスク容量を持つリージョン内のm6a.2xlarge EC2インスタンスでテストされた。まず、最適なレートを決定するために、同時リクエストのスイープを実行しました。
この強力なツールセットと、Momento Cacheへのデータ一括書き込みの利便性をお楽しみください。
