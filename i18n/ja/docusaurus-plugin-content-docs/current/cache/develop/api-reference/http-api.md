---
sidebar_position: 7
title: HTTP API reference for Momento Cache
sidebar_label: HTTP API
description: Discover the HTTP API for edge computing services to access serverless caching.
---

# Momento Cache の HTTP API リファレンス

Momentoは、私たちの[SDK](../)を使用できないアプリケーションや、curlやfetchのようなものを使用したいアプリケーションのためにHTTP APIインターフェイスを提供します。例えば、[Cloudflare Workers](https://workers.cloudflare.com/)、[Fastly Compute@Edge](https://www.fastly.com/products/edge-compute)などのエッジコンピュートサービスにデプロイする場合、このAPIはあなたのためにあります。その他のアプリケーションは、[Momento's SDK clients](../) を使用する必要があります。

私たちの[Postmanの公開ワークスペース](https://www.postman.com/gomomento/workspace/momento-http-api/api/662743a0-471a-41a1-b446-5db596164a00/definition/4765b18e-ba84-4802-9795-ecce9c408062?view=documentation)でもOpen API Specificationを見ることができます。

:::tip[Info]

Momentoプラットフォームは、各地域に固有のエンドポイントを持つ地域ベースです。サポートされている地域とそのエンドポイントのリストを表示するには、[ここをクリック](/platform/regions).

:::

## 認証

各接続には、[Momento コンソール](https://console.gomomento.com/tokens) または [ホスティングしているトークン "自動販売機" マイクロサービス](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine) を介して生成された Momento 認証トークンが必要です。Momento auth トークンは、Momento サービスへのアクセスを制御し、有効期限を設定したり、特定のリソースへのアクセスを許可/制限することができます。

## 値の取得

キャッシュからスカラー値を取得する。

### Request

- Path: /cache/\{cacheName\}
- HTTP Method: GET

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                          |
|---------------------|-----------|-----------------|--------------------------------------|
| cacheName           | yes       | URL-safe string | 操作するキャッシュの名前。 |

#### Query Parameters

| Parameter&nbsp;name | Required? | Type                                         | Description                                                                                           |
|---------------------|-----------|----------------------------------------------|-------------------------------------------------------------------------------------------------------|
| key                 | no**      | URL-safe&nbsp;string                         | キャッシュから取得するキー。                                                                  |
| key_base64          | no**      | Base64&nbsp;URL-encoded&nbsp;binary&nbsp;key | キャッシュから取得するキー。                                                                    |
| token               | no***     | URL-safe string                              | リクエストの認証/認可に使用する Momento 認証トークン (文字列形式)。 |

** キャッシュにアクセスするキーを指定する必要があります。これは、URLセーフ文字列を指定するkey queryパラメータか、Base64でURLエンコードされたキーを指定するkey_base64パラメータのどちらかになります。

*** リクエストの認証/認可に使用する Momento auth トークンを指定する必要があります。これは、トークンクエリパラメータか Authorization ヘッダで指定します。

#### Headers

| Header&nbsp;name | Required? | Type                 | Description                                                                                        |
|------------------|-----------|----------------------|----------------------------------------------------------------------------------------------------|
| Authorization    | no***     | URL-safe&nbsp;string | 文字列形式の Momento auth トークンは、リクエストの認証/認可に使用されます。 |

*** リクエストの認証/認可に使用する Momento auth トークンを指定する必要があります。これは、トークンクエリパラメータか Authorization ヘッダで指定します。

### Responses

#### Hit

*Status Code: 200 OK*

- Content-Type: octet-stream
- Body: 指定したキーに格納されているバイナリ値。

#### Miss

*Status Code: 404 Not Found*

- 「キーが見つかりません」は、そのキーがキャッシュに存在しないことを示し、「キャッシュが見つかりません」は、指定されたキャッシュが存在しないことを示します。

#### Error

*Status Code: 400 Bad Request*
- このエラータイプは通常、リクエストの指定が正しくないことを示します。詳細はメッセージ本文を参照ください。

*Status Code: 401 Unauthorized*
- このエラータイプは通常、渡された Momento 認証トークンが無効か期限切れであることを示します。詳細はメッセージ本文を参照ください。

*Status Code: 403 Forbidden*
- このエラータイプは通常、渡された Momento 認証トークンが、試行したリソースへの必要なアクセスを許可していないことを示します。詳細はメッセージ本文を参照ください。

*Status Code: 429 Too Many Requests*
- このエラータイプは通常、アカウントの上限を超えたことを示します。詳細はメッセージの本文を参照するか、Momento サポートに連絡して限度額の引き上げを依頼してください。

*Status Code: 500 Internal Server Error*
- このエラータイプは通常、サービスに問題が発生していることを示します。Momentoサポートにお問い合わせください。

## Set Value

キャッシュにスカラー値を設定します。

### Request

- Path: /cache/\{cacheName\}
- HTTP Method: PUT

#### Body

- Content-Type: octet-stream
- リクエストのボディは、指定されたキーのキャッシュに格納されるバイナリ値を含むべきです。

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                          |
|---------------------|-----------|-----------------|--------------------------------------|
| cacheName           | yes       | URL-safe string | 操作するキャッシュの名前 |

#### Query Parameters

| Parameter&nbsp;name | Required? | Type                                         | Description                                                                                                                                       |
|---------------------|-----------|----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| key                 | no**      | URL-safe&nbsp;string                         | キャッシュから取得するキー。                                                                                                               |
| key_base64          | no**      | Base64&nbsp;URL-encoded&nbsp;binary&nbsp;key | キャッシュから取得するキー。                                                                                                               |
| token               | no***     | URL-safe&nbsp;string                         | リクエストの認証/認可に使用する Momento 認証トークン (文字列形式)。                                             |
| ttl_seconds         | yes       | Integer                                      | キーに設定するTTLを秒単位で指定する。TTLについては、[Expire Data with Time-to-Live](../../learn/how-it-works/expire-data-with-ttl)を参照ください。 |

** キャッシュにアクセスするキーを指定する必要があります。これは、URLセーフ文字列を指定するkey queryパラメータか、Base64でURLエンコードされたキーを指定するkey_base64パラメータのどちらかになります。

*** リクエストの認証/認可に使用する Momento auth トークンを指定する必要があります。これは、トークンクエリパラメータか Authorization ヘッダで指定します。

#### Headers

| Header&nbsp;name | Required? | Type                 | Description                                                                                        |
|------------------|-----------|----------------------|----------------------------------------------------------------------------------------------------|
| Authorization    | no***     | URL-safe&nbsp;string | 文字列形式の Momento auth トークンは、リクエストの認証/認可に使用されます。 |

*** リクエストの認証/認可に使用する Momento auth トークンを指定する必要があります。これは、トークンクエリパラメータか Authorization ヘッダで指定します。

### Responses

#### Ok

*Status Code: 204 No Content*

- キーと値のペアはキャッシュに保存されたが、コンテンツは返されなかった（設計上の仕様）。

#### Error

*Status Code: 400 Bad Request*
- このエラータイプは通常、リクエストの指定が正しくないことを示します。詳細はメッセージ本文を参照してください。

*Status Code: 401 Unauthorized*
- このエラータイプは通常、渡された Momento 認証トークンが無効か期限切れであることを示します。詳細はメッセージの本文を参照してください。

*Status Code: 403 Forbidden*
- このエラータイプは通常、渡された Momento 認証トークンが、試行したリソースへの必要なアクセスを許可していないことを示します。詳細はメッセージの本文を参照してください。

*Status Code: 404 Not Found*
- 「Cache Not Found」は、指定されたキャッシュが存在しないことを示します。

*Status Code: 429 Too Many Requests*
- このエラー タイプは通常、アカウントの上限を超えたことを示します。詳細についてはメッセージ本文を参照するか、Momento サポートに連絡して限度額の引き上げを依頼してください。

*Status Code: 500 Internal Server Error*
- このエラータイプは通常、サービスに問題が発生していることを示します。Momentoサポートにお問い合わせください。

## Delete Value

キャッシュからスカラー値を削除します。

### Request

- Path: /cache/\{cacheName\}
- HTTP Method: DELETE

#### Path Parameters

| Parameter&nbsp;name | Required? | Type            | Description                          |
|---------------------|-----------|-----------------|--------------------------------------|
| cacheName           | yes       | URL-safe string | 操作するキャッシュの名前 |

#### Query Parameters

| Parameter&nbsp;name | Required? | Type                                         | Description                                                                                           |
|---------------------|-----------|----------------------------------------------|-------------------------------------------------------------------------------------------------------|
| key                 | no**      | URL-safe&nbsp;string                         | キャッシュから取得するキー                                                                   |
| key_base64          | no**      | Base64&nbsp;URL-encoded&nbsp;binary&nbsp;key | キャッシュから取得するキー                                                                  |
| token               | no***     | URL-safe&nbsp;string                         | リクエストの認証/認可に使用する Momento 認証トークン (文字列形式) |

** キャッシュにアクセスするキーを指定する必要があります。これは、URLセーフ文字列を指定するkey queryパラメータか、Base64でURLエンコードされたキーを指定するkey_base64パラメータのどちらかになります。

*** リクエストの認証/認可に使用する Momento auth トークンを指定する必要があります。これは、トークンクエリパラメータか Authorization ヘッダで指定します。

#### Headers

| Header&nbsp;name | Required? | Type                 | Description                                                                                        |
|------------------|-----------|----------------------|----------------------------------------------------------------------------------------------------|
| Authorization    | no***     | URL-safe&nbsp;string | 文字列形式の Momento auth トークンは、リクエストの認証/認可に使用されます。 |

*** リクエストの認証/認可に使用する Momento auth トークンを指定する必要があります。これは、トークンクエリパラメータか Authorization ヘッダで指定します。

### Responses

#### Ok

*Status Code: 204 No Content*

- キーと値のペアはキャッシュに保存されたが、コンテンツは返されなかった（設計上の正しい動作です）。

#### Error

*Status Code: 400 Bad Request*
- このエラータイプは通常、リクエストの指定が正しくないことを示します。詳細はメッセージ本文を参照してください。

*Status Code: 401 Unauthorized*
- このエラータイプは通常、渡された Momento 認証トークンが無効か期限切れであることを示します。詳細はメッセージの本文を参照してください。

*Status Code: 403 Forbidden*
- このエラータイプは通常、渡された Momento 認証トークンが、試行したリソースへの必要なアクセスを許可していないことを示します。詳細はメッセージの本文を参照してください。

*Status Code: 404 Not Found*
- 「Cache Not Found」は、指定されたキャッシュが存在しないことを示します。

*Status Code: 429 Too Many Requests*
- このエラー タイプは通常、アカウントの上限を超えたことを示します。詳細についてはメッセージ本文を参照するか、Momento サポートに連絡して限度額の引き上げを依頼してください。

*Status Code: 500 Internal Server Error*
- このエラータイプは通常、サービスに問題が発生していることを示します。Momentoサポートにお問い合わせください。

## Examples

### Put

以下は、*ap-south-1* リージョンの *default-cache* キャッシュに、*example_key* のキーと *example value* の値を持つ項目を設定する、curl コマンドの例です：

URLセーフキー、クエリパラメータで指定されたトークン:

`curl -X PUT -d 'example value' "https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com/cache/default-cache?key=example_key&ttl_seconds=300&token=<token>"`

Base64 Key, token as *Authorization* header:
`curl -X PUT -H "Authorization: <token>" -d 'example value' "https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk&ttl_seconds=300"`

### Get

以下は、*eu-west-1*地域の*default-cache*キャッシュ内の*example_key*というキーを持つ項目を取得するcurlコマンドの例です：

URLセーフキー、クエリパラメータで指定されたトークン

`curl "https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com/cache/default-cache?key=example_key&token=<token>"`

Base64キー、*Authorization*ヘッダーとして提供されるトークン：

`curl -H "Authorization: <token>" "https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk"`

### Delete

以下は、*us-west-2*地域の*default-cache*キャッシュ内の*example_key*というキーを持つ項目を削除するcurlコマンドの例です：

URLセーフキー、クエリパラメータで指定されたトークン:

`curl -X DELETE "https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com/cache/default-cache?key=example_key&token=<token>"`

Base64キー、*Authorization*ヘッダーとして提供されるトークン:

`curl -X DELETE -H "Authorization: <token>" "https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk"`
