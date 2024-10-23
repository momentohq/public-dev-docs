---
sidebar_position: 7
title: HTTP API for Momento Topics
sidebar_label: HTTP API
description: Discover the HTTP API for edge computing services to access pub/sub services.
---

# MomentoトピックのHTTP APIリファレンス

Momentoは、私たちの[SDK](../)を使用できないアプリケーションや、curlやfetchのようなものを使用したいアプリケーションのためにHTTP APIインターフェイスを提供します。例えば、[Cloudflare Workers](https://workers.cloudflare.com/)、[Fastly Compute@Edge](https://www.fastly.com/products/edge-compute)などのエッジコンピュートサービスにデプロイする場合、このAPIはあなたのためにあります。その他のアプリケーションは、[Momento's SDK clients](../) を使用する必要があります。

私たちの[Postmanの公開ワークスペース](https://www.postman.com/gomomento/workspace/momento-http-api/api/662743a0-471a-41a1-b446-5db596164a00).でもOpen API Specificationを見ることができます。

:::tip[Info]

Momentoはリージョンベースのサービスで、世界中でご利用いただけます。ご希望の地域がない場合は、ご相談ください。サポートまでご連絡ください](mailto:support@momentohq.com)。

:::

## Authentication

各リクエストには、[Momento コンソール](https://console.gomomento.com/tokens) または [ホスティングしているトークン「自動販売機」マイクロサービス](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine) を介して生成された API キーまたは Momento 認証トークンが必要です。Momento auth トークンは、Momento サービスへのアクセスを制御し、有効期限を設定したり、特定のリソースへのアクセスを許可/制限することができます。

トークンは、リクエストの2つの場所のいずれかで指定される：

* An `Authorization` header
* A `token` query parameter

:::info[Tip]

ヘッダーとクエリーパラメーターの両方が提供される場合、 *リクエストは`400 Bad Request`で失敗すします。*

:::

## Publish

トピックにメッセージを公開する。

### Request

- Path: /topics/\{cacheName\}/\{topicName\}
- HTTP Method: POST

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                                 |
|---------------------|-----------|-----------------|---------------------------------------------|
| cacheName           | yes       | URL-safe string | トピックを含むキャッシュの名前 |
| topicName           | yes       | URL-safe string | 公開するトピックの名前         |

#### Query Parameters

| Parameter&nbsp;name | Required? | Type                 | Description                                                                                           |
|---------------------|-----------|----------------------|-------------------------------------------------------------------------------------------------------|
| `token`             | no**      | URL-safe&nbsp;string | リクエストの認証/認可に使用する Momento 認証トークン (文字列形式) |

#### Headers

| Header&nbsp;name | Required? | Description                                                                                                          |
|------------------|-----------|----------------------------------------------------------------------------------------------------------------------|
| `Authorization`  | no**      | 文字列形式の Momento auth トークンは、リクエストの認証/認可に使用されます                  |
| `Content-Type`   | yes       | プレーンテキストデータ（UTF-8）を公開するには `text/plain` を指定する。バイナリデータを公開するには、`application/octet-stream` を指定します |

#### Body

HTTP POSTリクエストの本文には、トピックに公開する値を含める必要があります。公開できるのは
テキストデータかバイナリデータのどちらかを公開できます。公開するデータのタイプを指定するには、上記の [ヘッダー](#Headers) のセクションで説明した `Content-Type` ヘッダーを使用します。

### Responses

#### Success

*Status Code: 204 No Content*

- メッセージは指定されたトピックに正常に公開されました

#### Error

*Status code: 400 Bad Request*
- このエラータイプは通常、リクエストの指定が正しくないことを示す。詳細はメッセージ本文を参照のこと。

*Status code: 401 Unauthorized*
- このエラータイプは通常、渡された Momento 認証トークンが無効か期限切れであることを示します。詳細はメッセージの本文を参照してください。

*Status code: 403 Forbidden*
- このエラータイプは通常、渡された Momento 認証トークンが、試行したリソースへの必要なアクセスを許可していないことを示します。詳細はメッセージの本文を参照してください。

*Status code: 404 Not Found*
- 「Cache Not Found」は、指定されたキャッシュが存在しないことを示す。

*Status code: 429 Too Many Requests*
- このエラー タイプは通常、アカウントの上限を超えたことを示します。詳細についてはメッセージ本文を参照するか、Momento サポートに連絡して限度額の引き上げを依頼してください。

*Status code: 500 Internal Server Error*
- このエラータイプは通常、サービスに問題が発生していることを示します。Momentoサポートにお問い合わせください。

### Examples

以下は、`hello world!` という値を *us-east-1* リージョンの *my-cache* キャッシュの *example* トピックに発行する例です。

#### Publish with token query parameter

`curl -X POST -d 'hello world!' "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example?token=<token>"`

#### Publish with Authorization header

`curl -X POST -H "Authorization: <token>" -d 'hello world!' "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example"`

## Subscribe

長いポーリングによってトピックを購読し、メッセージが公開されるのを待ちます。

### Request

- Path: /topics/\{cacheName\}/\{topicName\}
- HTTP Method: GET

#### Path parameters

| Parameter&nbsp;name | Required? | Type            | Description                                 |
|---------------------|-----------|-----------------|---------------------------------------------|
| cacheName           | yes       | URL-safe string | トピックを含むキャッシュの名前 |
| topicName           | yes       | URL-safe string | 購読するトピックの名前        |

#### Query parameters

| Parameter&nbsp;name | Required? | Type                 | Description                                                                                           |
|---------------------|-----------|----------------------|-------------------------------------------------------------------------------------------------------|
| `token`             | no**      | URL-safe&nbsp;string | リクエストの認証/認可に使用する Momento 認証トークン (文字列形式) |
| `sequence_number`   | no        | Integer              | 最後に受信したメッセージを指定するオプションのパラメータ。メッセージが順番に受信されるようにするか、または不連続を検出する |

#### Headers

| Header&nbsp;name | Required? | Description                                                                                                          |
|------------------|-----------|----------------------------------------------------------------------------------------------------------------------|
| `Authorization`  | no**      | 文字列形式の Momento auth トークンは、リクエストの認証/認可に使用されます|

#### Responses

### Success

*Status code: 200 OK*

- サブスクリプションは成功し、メッセージが返されました。応答はメッセージとそのシーケンス番号を持つ JSON オブジェクトを含みます。メッセージシーケンスにギャップがあった場合、不連続メッセージが含まれます。

### Error

*Status code: 401 Unauthorized*
- このエラータイプは通常、渡されたMomento認証トークンが無効か期限切れであることを示します。詳細はメッセージの本文を参照してください。

*Status code: 403 Forbidden*
- このエラータイプは通常、渡された Momento 認証トークンが、試行したリソースへの必要なアクセスを許可していないことを示します。詳細はメッセージの本文を参照してください。

*Status code: 404 Not Found*
- 「Cache Not Found" は、指定されたキャッシュまたはトピックが存在しないことを示します。

*Status code: 429 Too Many Requests*
- このエラー タイプは通常、アカウントの上限を超えたことを示します。詳細については、メッセージ本文を参照するか、Momento サポートに連絡して上限の引き上げを要求してください。

*Status code: 500 Internal Server Error*
- このエラータイプは通常、サービスに問題が発生していることを示します。Momentoサポートにお問い合わせください。

### Examples

#### Request with no sequence number

このリクエストはヘッダーとしてauthを含みます。

`curl -X GET -H "Authorization: <token>" "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/my-topic"`

**Response**

```json
{
  "items": [
    {
      "item": {
        "topic_sequence_number": 0,
        "value": {
          "text": "hello world"
        }
      }
    }
  ]
}
```

#### Request with a sequence number provided

このリクエストには、クエリーパラメーターとしてauthが含まれています。

`curl -X GET "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/my-topic?token=<token>&sequence_number=100"`

**Response**

```json
{
  "items": [
    {
      "discontinuity": {
        "last_topic_sequence": 100,
        "new_topic_sequence": 104
      }
    },
    {
      "item": {
        "topic_sequence_number": 104,
        "value": {
          "text": "hello world"
        }
      }
    }
  ]
}

```
