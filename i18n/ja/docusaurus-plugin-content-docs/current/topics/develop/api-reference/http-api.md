---
sidebar_position: 7
title: HTTP API for Momento Topics
sidebar_label: HTTP API
description: Discover the HTTP API for edge computing services to access pub/sub services.
---

# MomentoトピックのHTTP APIリファレンス

Momentoは、私たちの[SDK](../)を使用できないアプリケーションや、curlやfetchのようなものを使用したいアプリケーションのためにHTTP APIインターフェイスを提供します。例えば、[Cloudflare Workers](https://workers.cloudflare.com/)、[Fastly Compute@Edge](https://www.fastly.com/products/edge-compute)などのエッジコンピュートサービスにデプロイする場合、このAPIはあなたのためにあります。その他のアプリケーションは、[Momento's SDK clients](../) を使用する必要があります。

私たちの[Postmanの公開ワークスペース](https://www.postman.com/gomomento/workspace/momento-http-api/api/662743a0-471a-41a1-b446-5db596164a00/definition/4765b18e-ba84-4802-9795-ecce9c408062?view=documentation)でもOpen API Specificationを見ることができます。

:::note

このドキュメントでは、HTTPリクエスト構文の実装方法については説明しません。

:::

## 認証

各接続には、[Momento コンソール](https://console.gomomento.com/tokens) または [ホスティングしているトークン "自動販売機" マイクロサービス](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine) を介して生成された Momento 認証トークンが必要です。Momento auth トークンは、Momento サービスへのアクセスを制御し、有効期限を設定したり、特定のリソースへのアクセスを許可/制限することができます。

## リージョン

Momento HTTP API にアクセスするには、API トークンとキャッシュのリージョンで以下のエンドポイントのいずれかを使用します。ご希望の地域がない場合は、[サポートまでご連絡ください](mailto:support@momentohq.com)。

| AWS Region     | Endpoints                                                    |
|----------------|--------------------------------------------------------------|
| us-west-2      | https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com    |
| us-east-1      | https://api.cache.cell-us-east-1-1.prod.a.momentohq.com      |
| us-east-2      | https://api.cache.cell-1-us-east-2-1.prod.a.momentohq.com    |
| ap-northeast-1 | https://api.cache.cell-ap-northeast-1-1.prod.a.momentohq.com |
| ap-southeast-1 | https://api.cache.cell-1-ap-southeast-1-1.prod.a.momentohq.com|
| eu-west-1      | https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com    |
| eu-central-1   | https://api.cache.cell-1-eu-central-1-1.prod.a.momentohq.com |
| ap-south-1     | https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com   |

## Publish

トピックにメッセージを公開する。

### Request

- Path: /topics/\{cacheName\}/\{topicName\}
- HTTP Method: POST

#### Body

- Content-Type: octet-stream
- リクエストのボディには、トピックに公開するバイナリ値を含める。

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                                 |
|---------------------|-----------|-----------------|---------------------------------------------|
| cacheName           | yes       | URL-safe string | トピックを含むキャッシュの名前 |
| topicName           | yes       | URL-safe string | 公開するトピックの名前         |

#### Query Parameters

| Parameter&nbsp;name | Required? | Type                | Description                                                                                         |
|---------------------|-----------|---------------------|-----------------------------------------------------------------------------------------------------|
| token               | no**     | URL-safe&nbsp;string | リクエストの認証/認可に使用する Momento 認証トークン (文字列形式)|

*** リクエストの認証/認可に使用する Momento auth トークンを指定する必要があります。これは、トークンクエリパラメータか Authorization ヘッダで指定します。

#### Headers

| Header&nbsp;name | Required? | Type                 | Description                                                                                        |
|------------------|-----------|----------------------|----------------------------------------------------------------------------------------------------|
| Authorization    | no**     | URL-safe&nbsp;string | 文字列形式の Momento auth トークンは、リクエストの認証/認可に使用されます |

** リクエストの認証/認可に使用する Momento auth トークンを指定する必要があります。これは、トークンクエリパラメータか Authorization ヘッダで指定します。

## Responses

### Success

*Status Code: 204 No Content*

- メッセージは指定されたトピックに正常に公開されました

### Error

*Status Code: 400 Bad Request*
- このエラータイプは通常、リクエストの指定が正しくないことを示す。詳細はメッセージ本文を参照のこと。

*Status Code: 401 Unauthorized*
- このエラータイプは通常、渡された Momento 認証トークンが無効か期限切れであることを示します。詳細はメッセージの本文を参照してください。

*Status Code: 403 Forbidden*
- このエラータイプは通常、渡された Momento 認証トークンが、試行したリソースへの必要なアクセスを許可していないことを示します。詳細はメッセージの本文を参照してください。

*Status Code: 404 Not Found*
- 「Cache Not Found」は、指定されたキャッシュが存在しないことを示す。

*Status Code: 429 Too Many Requests*
- このエラー タイプは通常、アカウントの上限を超えたことを示します。詳細についてはメッセージ本文を参照するか、Momento サポートに連絡して限度額の引き上げを依頼してください。

*Status Code: 500 Internal Server Error*
- このエラータイプは通常、サービスに問題が発生していることを示します。Momentoサポートにお問い合わせください。

## サンプル

### Publish

以下は、`hello world!` という値を *us-east-1* リージョンの *my-cache* キャッシュの *example* トピックに発行する例です。

クエリ・パラメータで指定されたトークン:

`curl -X POST -d 'hello world!' "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example?token=<token>"`

*Authorization*ヘッダーとして提供されるトークン:

`curl -X POST -H "Authorization: <token>" -d 'hello world!' "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example"`
