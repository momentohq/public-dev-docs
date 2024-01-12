---
sidebar_position: 7
title: HTTP API
sidebar_label: HTTP API
description: サーバーレス・キャッシングやPub/Subサービスにアクセスするための、エッジ・コンピューティング・サービス用HTTP APIについて
---

# キャッシュとエッジコンピュートサービスのためのHTTP API

Momentoは、[SDK](/develop)を使用できないアプリケーションのためにHTTP APIインターフェースを提供しています。例えば、[Cloudflare Workers](https://workers.cloudflare.com/)や[Fastly Compute@Edge](https://www.fastly.com/products/edge-compute)などのエッジコンピュートサービスにデプロイする場合、このAPIを使用します。その他のアプリケーションは[Momento's SDK clients](/develop)を使用する必要があります。

クエリは `https://<environment>/cache/{yourCacheName}` エンドポイントにHTTP リクエストを送ることで実行されます。

:::note

このドキュメントでは、HTTP リクエスト構文の実装方法については説明しません。

:::

## 認証

各接続には、[Momento コンソール](https://console.gomomento.com/tokens) または [ホスティングしているトークン自動生成マイクロサービス](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine) を介して生成された Momento 認証トークンが必要です。Momento 認証トークンは、Momento サービスへのアクセスを制御し、有効期限を設定したり、特定のリソースへのアクセスを許可/制限することができます。

## アクセス

HTTP API にアクセスするには、キャッシュが存在し、Momento 認証トークンを持っているリージョンで、以下のエンドポイントのいずれかを使用します。

|   | AWS リージョン     | エンドポイント                                       |
|---|----------------|------------------------------------------------------|
| 1 | us-west-2      | api.cache.cell-4-us-west-2-1.prod.a.momentohq.com    |
| 2 | us-east-1      | api.cache.cell-us-east-1-1.prod.a.momentohq.com      |
| 3 | us-east-2      | https://api.cache.cell-1-us-east-2-1.prod.a.momentohq.com    |
| 4 | ap-northeast-1 | https://api.cache.cell-ap-northeast-1-1.prod.a.momentohq.com |
| 5 | eu-west-1      | https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com    |
| 6 | ap-south-1     | https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com   |

ご希望のリージョンがない場合は、[サポート](mailto:support@momentohq.com)までご連絡してください。

## Get メソッド
キャッシュからスカラー値を取得します。
### Request

- Path: /cache/{cacheName}
- HTTP Method: GET

#### Path Parameters

| パラメータ名 | 必須 | タイプ            | 説明                          |
|---------------------|-----------|-----------------|--------------------------------------|
| cacheName           | yes       | URL-safe string | 操作するキャッシュの名前を指定します。 |

#### Query Parameters

| パラメータ名 | 必須 | タイプ  　　　　| 説明 　　　　　　　　　　　　　　　　　|
|---------------------|-----------|----------------------------------------------|-------------------------------------------------------------------------------------------------------|
| key  | no**      | URL-safe&nbsp;string  | キャッシュから取得するキー。   |
| key_base64          | no**      | Base64&nbsp;URL-encoded&nbsp;binary&nbsp;key | キャッシュから取得するキーを指定します。  |
| token               | no***     | URL-safe string                              | リクエストの認証/認可に使用する Momento 認証トークン (文字列形式)を指定します。 |

** キャッシュにアクセスするキーを指定する必要があります。これは、URLセーフ文字列を指定するkey queryパラメータか、Base64でURLエンコードされたキーを指定するkey_base64パラメータのどちらかになります。

*** リクエストの認証/認可に使用する Momento 認証トークンを指定する必要があります。これは、トークンクエリパラメータか Authorization ヘッダで指定します。

#### Header Parameters
| パラメータ名 | 必須 | タイプ  　　　　| 説明 　　　　　　　　　　　　　　　　　|
|------------------|-----------|----------------------|----------------------------------------------------------------------------------------------------|
| Authorization    | no***     | URL-safe&nbsp;string | 文字列形式の Momento 認証トークンは、リクエストの認証/認可に使用されます。 |

*** リクエストの認証/認可に使用する Momento 認証トークンを指定する必要があります。これは、トークンクエリパラメータか Authorization ヘッダで指定します。

### Response
#### Hit
*ステータスコード: 200 OK*

- Content-Type: octet-stream
- Body: 指定したキーに格納されているバイナリ値。

#### Miss
*ステータスコード: 404 Not Found*

- "Key Not Found" は、そのキーがキャッシュに存在しないことを示し、"Cache Not Found" は、指定されたキャッシュが存在しないことを示します。

#### Error

*ステータスコード: 400 Bad Request*
- このエラータイプは通常、リクエストの指定が正しくないことを示します。詳細はメッセージ本文を参照してください。

*ステータスコード: 401 Unauthorized*
- このエラータイプは通常、渡された Momento 認証トークンが無効か期限切れであることを示します。詳細はメッセージの本文を参照してください。

*ステータスコード: 403 Forbidden*
- このエラータイプは通常、渡された Momento 認証トークンが、試行したリソースへの必要なアクセスを許可していないことを示します。詳細はメッセージの本文を参照してください。

*ステータスコード: 429 Too Many Requests*
- このエラータイプは通常、アカウントの上限を超えたことを示します。詳細はメッセージの本文を参照するか、Momento サポートに連絡して限度額の引き上げを依頼してください。

*ステータスコード: 500 Internal Server Error*
- このエラータイプは通常、サービスに問題が発生していることを示します。Momentoサポートにお問い合わせしてください。

## Set Method
キャッシュにスカラー値を設定します。

### Request
- Path: /cache/{cacheName}
- HTTP Method: PUT

#### Body
- Content-Type: octet-stream
- リクエストのボディは、指定されたキーのキャッシュに格納されるバイナリ値を含むようにします。

#### Path Parameters
| パラメータ名 | 必須 | タイプ  　　　　| 説明 　　　　　　　　　　　　　　　　　|
|---------------------|-----------|-----------------|--------------------------------------|
| cacheName           | yes       | URL-safe string | 操作するキャッシュの名前を指定します。 |

#### Query Parameters

| パラメータ名 | 必須 | タイプ  　　　　| 説明 　　　　　　　　　　　　　　　　　|
|---------------------|-----------|----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| key                 | no**      | URL-safe&nbsp;string  | キャッシュから取得するキーを指定します。 |
| key_base64          | no**      | Base64&nbsp;URL-encoded&nbsp;binary&nbsp;key | キャッシュから取得するキーを指定します。 |
| token               | no***     | URL-safe&nbsp;string | リクエストの認証/認可に使われる Momento 認証トークン (文字列形式)を指定します。 |
| ttl_seconds         | yes       | Integer | キーに設定するTTLを秒単位で指定します。TTLの詳細については、[Expire Data with Time-to-Live](/learn/how-it-works/expire-data-with-ttl)を参照してください。 |

** キャッシュにアクセスするキーを指定する必要があります。これは、URLセーフ文字列を指定するkey queryパラメータか、Base64でURLエンコードされたキーを指定するkey_base64パラメータのどちらかになります。

*** リクエストの認証/認可に使用する Momento 認証トークンを指定する必要があります。これは、トークンクエリパラメータか Authorization ヘッダで指定します。

#### Header Parameters
| パラメータ名 | 必須 | タイプ  　　　　| 説明 　　　　　　　　　　　　　　　　　|
|------------------|-----------|----------------------|----------------------------------------------------------------------------------------------------|
| Authorization    | no***     | URL-safe&nbsp;string | 文字列形式の Momento 認証トークンは、リクエストの認証/認可に使用されます。 |

*** リクエストの認証/認可に使用する Momento 認証トークンを指定する必要があります。これは、トークンクエリパラメータか Authorization ヘッダで指定します。

### Response
#### Ok

*ステータスコード: 204 No Content*

- キーと値のペアはキャッシュに保存されたが、コンテンツは返されなかったことを示します。

#### Error
*ステータスコード: 400 Bad Request*
- このエラータイプは通常、リクエストの指定が正しくないことを示します。詳細はメッセージ本文を参照してください。

*ステータスコード: 401 Unauthorized*

- このエラータイプは通常、渡された Momento 認証トークンが無効か期限切れであることを示します。詳細はメッセージの本文を参照してください。

*ステータスコード: 403 Forbidden*

- このエラータイプは通常、渡された Momento 認証トークンが、試行したリソースへの必要なアクセスを許可していないことを示します。詳細はメッセージの本文をご覧ください。

*ステータスコード: 401 Unauthorized*

- このエラータイプは通常、渡された Momento 認証トークンが無効か期限切れであることを示します。詳細はメッセージの本文を参照してください。

*ステータスコード: 403 Forbidden*

- このエラータイプは通常、渡された Momento 認証トークンが、試行したリソースへの必要なアクセスを許可していないことを示します。詳細はメッセージの本文をご覧ください。

*ステータスコード: 404 Not Found*
- "Cache Not Found"は、指定されたキャッシュが存在しないことを示します。

*ステータスコード: 429 Too Many Requests*
- このエラータイプは通常、アカウントの上限を超えたことを示します。詳細についてはメッセージ本文を参照するか、Momento サポートに連絡して限度額の引き上げを依頼してください。

*ステータスコード: 500 Internal Server Error*
- このエラータイプは通常、サービスに問題が発生していることを示します。Momentoサポートにお問い合わせください。

## Delete Method
キャッシュからスカラー値を削除します。
### Request

- Path: /cache/{cacheName}
- HTTP Method: DELETE
#### Path Parameters
| パラメータ名 | 必須 | タイプ  　　　　| 説明 　　　　　　　　　　　　　　　　　|
|---------------------|-----------|-----------------|--------------------------------------|
| cacheName           | yes       | URL-safe string | 操作するキャッシュの名前を指定します。 |

#### Query Parameters
| パラメータ名 | 必須 | タイプ  　　　　| 説明 　　　　　　　　　　　　　　　　　|
|---------------------|-----------|----------------------------------------------|-------------------------------------------------------------------------------------------------------|
| key                 | no**      | URL-safe&nbsp;string  | キャッシュから取得するキーを指定します。 |
| key_base64          | no**      | Base64&nbsp;URL-encoded&nbsp;binary&nbsp;key | キャッシュから取得するキーを指定します。 |
| token               | no***     | URL-safe&nbsp;string  | リクエストの認証/認可に使用する Momento 認証トークン (文字列形式)を指定します。 |

** キャッシュにアクセスするキーを指定する必要があります。これは、URLセーフ文字列を指定するkey queryパラメータか、Base64でURLエンコードされたキーを指定するkey_base64パラメータのどちらかになります。

*** リクエストの認証/認可に使用する Momento 認証トークンを指定する必要があります。これは、トークンクエリパラメータか Authorization ヘッダで指定します。

#### Header Parameters
| パラメータ名 | 必須 | タイプ  　　　　| 説明 　　　　　　　　　　　　　　　　　|
|------------------|-----------|----------------------|----------------------------------------------------------------------------------------------------|
| Authorization    | no***     | URL-safe&nbsp;string | 文字列形式の Momento auth トークンは、リクエストの認証/認可に使用されます。 |

*** リクエストの認証/認可に使用する Momento 認証トークンを指定する必要があります。これは、トークンクエリパラメータか Authorization ヘッダで指定します。

### Response
#### Ok

*ステータスコード: 204 No Content*

- キーと値のペアはキャッシュに保存されたが、コンテンツは返されなかったことを示します。

#### Error
*ステータスコード: 400 Bad Request*
- このエラータイプは通常、リクエストの指定が正しくないことを示します。詳細はメッセージ本文を参照してください。

*ステータスコード: 401 Unauthorized*
- このエラータイプは通常、渡された Momento 認証トークンが無効か期限切れであることを示します。詳細はメッセージの本文を参照してください。

*ステータスコード: 403 Forbidden*
- このエラータイプは通常、渡された Momento 認証トークンが、試行したリソースへの必要なアクセスを許可していないことを示します。詳細はメッセージの本文をご覧ください。

*ステータスコード: 401 Unauthorized*
- このエラータイプは通常、渡された Momento 認証トークンが無効か期限切れであることを示します。詳細はメッセージの本文を参照してください。

*ステータスコード: 403 Forbidden*
- このエラータイプは通常、渡された Momento 認証トークンが、試行したリソースへの必要なアクセスを許可していないことを示します。詳細はメッセージの本文をご覧ください。

*ステータスコード: 404 Not Found*
- "Cache Not Found"は、指定されたキャッシュが存在しないことを示します。

*ステータスコード: 429 Too Many Requests*
- このエラータイプは通常、アカウントの上限を超えたことを示します。詳細についてはメッセージ本文を参照するか、Momento サポートに連絡して限度額の引き上げを依頼してください。

*ステータスコード: 500 Internal Server Error*
- このエラータイプは通常、サービスに問題が発生していることを示します。Momentoサポートにお問い合わせください。

## curl の例
### Put
URL-safe Key、トークンをクエリパラメータとして指定する場合：

`curl -X PUT -d 'example value' "https://api.cache.<endpoint>/cache/default-cache?key=example_key&ttl_seconds=300&token=<token>"`

Base64 キー、ヘッダーとしてのトークンを指定する場合：
`curl -X PUT -H "Authorization: <token>" -d 'example value' "https://api.cache.<endpoint>/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk&ttl_seconds=300"`

### Get
URL-safe Key、トークンをクエリパラメータとして指定する場合：

`curl "https://api.cache.<endpoint>/cache/default-cache?key=example_key&token=<token>"`

Base64 キー、ヘッダーとしてのトークンを指定する場合：

`curl -H "Authorization: <token>" "https://api.cache.<endpoint>/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk"`

### Delete
URL-safe Key、トークンをクエリパラメータとして指定する場合：

`curl -X DELETE "https://api.cache.<endpoint>/cache/default-cache?key=example_key&token=<token>"`

Base64 キー、ヘッダーとしてのトークンを指定する場合：

`curl -X DELETE -H "Authorization: <token>" "https://api.cache.<endpoint>/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk"`
