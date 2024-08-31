---
sidebar_position: 2
sidebar_label: Security
title: Webhook Security
description: Learn how to secure your endpoint accepting webhook requests with request signatures and verification.
pagination_next: null
hide_title: true
keywords:
  - momento
  - webhooks
  - security
  - eda
  - event-driven architectures
  - serverless
---

# Secure your webhook endpoints

WebhookをMomentoに正常に接続した後、真正性を保証するために受信リクエストを検証することをお勧めします。エンドポイントは一般に公開されているため、送信者を保証することは悪意者から保護するために重要です。リクエストの真正性と完全性は、いくつかの方法で検証できます。

## Request signing

リクエスト署名は、メッセージの真正性と完全性を検証するためにソフトウェアシステムで使用されるセキュリティ対策です。公開する前に、Momento はリクエストの `momento-signature` ヘッダに含まれる署名で webhook イベントに署名します。この署名は、Webhook の [signing secret](#signing-secret) とイベントリクエストボディを使って真正性を確認します。これにより、サードパーティや悪意のある行為者からではなく、Momentoから発信されたイベントであることを確認できます。

### Verifying signatures with the Momento SDK

Momento [Node.js SDK](/platform/sdks/nodejs) には、署名を検証するためのネイティブ・サポートが含まれています。これは、署名を検証するために推奨される方法です。検証するには、生のリクエストボディ、署名、そしてあなたの署名シークレットを提供します。

```javascript
import express from 'express';
import { WebhookUtils } from '@gomomento/sdk';
const app = express();

app.post('/', (req, res) => {
    const response = WebhookUtils.validateWebhookRequest({
        body: req.rawBody,
        signature: req.headers['momento-signature'],
        signingSecret: process.env.SIGNING_SECRET
    });

    if (response === WebhookUtils.RequestValidation.VALID) {
        // Request is valid. Continue processing.
    } else {
        res.status(403).send('Signature invalid');
    }
});
```

### Verifying signatures manually

他の言語の場合、あるいは署名を自分で検証したい場合は、*HMAC SHA3-256*とあなたの署名秘密を使用して、受信リクエストを検証することができます。

```javascript
import * as crypto from 'crypto';

const didRequestComeFromMomento = (req, secret) => {
    const hash = crypto.createHmac("SHA3-256", secret);
    const hashed = hash.update(req.rawBody).digest('hex');
    return hashed === req.headers['momento-signature'];
};
```

## User Agent

デジタル署名に加えて、すべての webhook イベントは `User-Agent` ヘッダも受け取ります。このヘッダは、真正性を保証するために署名と組み合わせて使用したり、テストシナリオのためにワークフローを迂回させるために使用したりすることができます。このヘッダは静的な値で、メジャーバージョンのリリース時にのみ変更されます：

`Momento/1.0 (Webhooks; +https://docs.momentohq.com/topics/webhooks)`

バリューは以下の部分で構成されている：

* **Momento** - Indicates the origin is from Momento
* **1.0** - Major version number of the service
* **Webhooks** - States the specific origin from the request
* **+https://docs.momentohq.com/topics/webhooks** - Additional information about the webhook service can be found here

:::warning

着信リクエストの有効性を確認するために、この値のみを使用しないでくだ さい。このヘッダーは簡単になりすまされるので、それ自身で真正性を検証することを意図していません。

:::

### Running test scenarios

アプリを本番稼動させる前に、Webhookが正常に動作していることをテストしたいかもしれません。そこで、`User-Agent`ヘッダを使用してコードの実行を回避することができます。リクエストを作成し、[手動検証コード](#verifying-signatures-manually) を使って自分で署名し、異なる `User-Agent` ヘッダ値でエンドポイントに発行することで、ペイロードを検証した後に実行をショートカットすることができます。

```javascript
const MOMENTO_USER_AGENT = 'Momento/1.0 (Webhooks; +https://docs.momentohq.com/topics/webhooks)';
const TEST_USER_AGENT = 'Test Harness/PostmanRuntime';

app.post('/', (req, res) => {
    if(didRequestComeFromMomento(req, process.env.SIGNING_SECRET)){
        if(req.headers['User-Agent'] === MOMENTO_USER_AGENT){
            // Continue processing
        } else if (req.headers['User-Agent'] === TEST_USER_AGENT) {
            // This is a test request, return success
            res.status(200).send('Skipping execution');
        }
    } else {
        res.status(403).send('Signature invalid');
    }
});
```

## Signing secret

Momentoで新しいWebhookを作成すると、署名秘密が提供されます。このシークレット値を使用して、Momento からのイベントペイロードにデジタル署名を行い、リクエストの真正性を確認することができます。シークレットは、プログラムまたは [Momento コンソール](https://console.gomomento.com) から取得できます。

### Obtaining your signing secret programmatically

[putWebhook API](../develop/api-reference/webhooks#put-webhook-api)を使って新しいウェブフックを作成すると、成功したレスポンスの一部として署名シークレットを受け取ります。シークレットを紛失したり、リクエストの一部として保存し忘れた場合は、[getWebhookSecret API](../develop/api-reference/webhooks#get-webhook-secret-api)で現在の値を返します。

### Obtaining your signing secret via the Momento console

Momentoコンソールを使用したい場合は、いつでもWebhookに移動し、秘密の文字列の行の横にある*コピー*ボタンをクリックすることができます。

![Webhook detail page in the Momento Console](@site/static/img/webhook-secret-string.png)

ウェブフック詳細ページに移動するには、[キャッシュ一覧ページ](https://console.gomomento.com/caches)でご希望のキャッシュをクリックします。*Webhooks*メニュー・オプションに移動し、表示したいWebhookをクリックします。

:::tip
最初にウェブフックを作成すると、ウェブフック一覧ページに移動します。署名シークレットを取得するには、Webhookをクリックし、コピーボタンを押す必要があります。
:::

## Considerations

上記の検証情報は、受信リクエストの真正性を保証するために最低限必要なものです。しかし、Webhookを構築する際には、さらなるセキュリティのベストプラクティスも考慮する必要があります。

### Replay attacking

有効なウェブフック・イベントが悪意のある行為者によって傍受され、エンドポイントが送信者検証のみを実装している場合、*リプレイ攻撃*の影響を受けやすくなります。リプレイ攻撃は、悪意のある行為者がシステムに有効なリクエストを繰り返し送信し、システムに同じイベントを複数回処理させることで発生します。このような攻撃がシステムに害を与えないようにするには、イベントの年齢を検証することも考慮する。許容される年齢のしきい値より古いイベントは、自動的に破棄されます。

世代を決定するために、イベントの[publish_timestamp](./overview#publish_timestamp)プロパティを使用することができます。ベストプラクティスとして、*60秒*より古いイベントを拒否することを検討してください。

### Regularly rotate secrets

ウェブフック署名の秘密が漏洩した場合、リクエストの真正性を保証することはできません。エンドポイントの安全性を確保するために、定期的にシークレットをローテーションすることを検討してください。[rotateWebhookSecret API](../develop/api-reference/webhooks#rotate-webhook-secret-api)を使ってシークレットをローテーションできます。
