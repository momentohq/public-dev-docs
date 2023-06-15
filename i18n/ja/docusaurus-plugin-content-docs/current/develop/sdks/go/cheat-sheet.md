---
sidebar_position: 1
sidebar_label: チートシート
sidebar_class_name: sidebar-item-go
title: Go のためのチートシート
description: Momento Cache を Go を使ってすぐにコードを書き始めましょう
pagination_next: null
---

# Momento Cache を Go で使うためのチートシート
このページでは、Momento Cache を Go で素早く使ってみたい方のために必要となる基礎的な API 呼出しを解説しています。このコードのファイル全体は[Go SDK のページをご確認下さい](https://github.com/momentohq/client-sdk-go)。

## 必要条件

* [Go をインストールする](https://go.dev/dl/)
* Momento 認証トークンが必要。[Momento ウェブサイト](https://www.gomomento.com/)のフォーム、又は Momento CLI を使って作成可能です。

## プロジェクトを作成して、Momento クライアントライブラリをインストールする
まだ go module を作成していなければ、お好きなディレクトリ上でまず以下のコマンドを実行します。
```cli
# Add an environment variable with your Momento auth token.
export MOMENTO_AUTH_TOKEN=<auth token that was emailed to you>

# Create a new module directory
mkdir my-example-project
cd ./my-example-project

# Create a module with go.mod file in the directory.
# See https://go.dev/doc/modules/gomod-ref for full docs on go mod
go mod init example/my-example-project

# Then, run this to get the Momento SDK.
go get github.com/momentohq/client-sdk-go
```

## コードをコピー＆ペーストする
実行するコード例の全体像を見るには、[Momento Go SDK レポジトリ](https://github.com/momentohq/client-sdk-go)をご確認下さい。

このコードが実際に何をしているのかを、一つずつ見ていきましょう。

## ライブラリをインポートして、CacheClient オブジェクトを返却して接続する
このコードで、必要なインポート、そしてそれぞれの他の関数が利用する Momento 認証トークンを環境変数から取得して、メイン関数をセットアップします。

```go
package main

import (
	"context"
	"log"
	"time"

	"github.com/momentohq/client-sdk-go/auth"
	"github.com/momentohq/client-sdk-go/config"
	"github.com/momentohq/client-sdk-go/momento"
	"github.com/momentohq/client-sdk-go/responses"

    // We use this module to generate random keys and data later
	"github.com/google/uuid"
)

func main() {
	ctx := context.Background()
	var credentialProvider, err = auth.NewEnvMomentoTokenProvider("MOMENTO_AUTH_TOKEN")
	if err != nil {
		panic(err)
	}

	const (
		cacheName             = "my-test-cache"
		itemDefaultTTLSeconds = 60
	)
```

## Momento Cache に新しいキャッシュを作成する
この関数を使ってアカウント内に新しいキャッシュを作成します。

```go
// Create Cache
_, err = client.CreateCache(ctx, &momento.CreateCacheRequest{
    CacheName: cacheName,
})
if err != nil {
    panic(err)
}
```

## 項目をキャッシュに書き込む
書込み操作を行うシンプルな例です。client.set 呼出しでは、TTL はオプショナルです。もし TTL を渡すと、クライアント接続オブジェクトに設定されたデフォルトの TTL 値が上書きされます。

```go
// Sets key with default TTL and gets value with that key
key := uuid.NewString()
value := uuid.NewString()
log.Printf("Setting key: %s, value: %s\n", key, value)
_, err = client.Set(ctx, &momento.SetRequest{
    CacheName: cacheName,
    Key:       momento.String(key),
    Value:     momento.String(value),
})
if err != nil {
    panic(err)
}
```

## キャッシュから項目を読み出す
これは、キャッシュから項目を取得するためのシンプルな読み出し操作です。

```go
log.Printf("Getting key: %s\n", key)
resp, err := client.Get(ctx, &momento.GetRequest{
    CacheName: cacheName,
    Key:       momento.String(key),
})
if err != nil {
    panic(err)
}

// See if you got a cache hit or cache miss
switch r := resp.(type) {
case *responses.GetHit:
    log.Printf("Lookup resulted in cache HIT. value=%s\n", r.ValueString())
case *responses.GetMiss:
    log.Printf("Look up did not find a value key=%s", key)
}
```

## コードを実行する
[全ファイル](https://github.com/momentohq/client-sdk-go)をコピー＆ペーストするのを忘れないでください。そうしたら、コードを実行するために以下のコマンドを実行します。

```cli
go run main.go
```

:::info
これらの API 呼出し以上のものは、[API リファレンスページ](/develop/api-reference/index.mdx)で Momento API 呼出しの全種類の詳しい情報をご確認下さい。

さらなるコード例は、[Momento Go SDK レポジトリ](https://github.com/momentohq/client-sdk-go/tree/main/examples)をご確認下さい。
:::
