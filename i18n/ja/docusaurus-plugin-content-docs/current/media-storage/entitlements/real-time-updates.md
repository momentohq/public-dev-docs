---
sidebar_position: 2
sidebar_label: Real-time updates
title: Real-time entitlement updates
description: Learn how to keep entitlements in sync across all your media players
hide_title: true
keywords:
  - momento
  - media storage
  - zero buffer rate
  - zbr
  - streaming
  - live
  - elemental
  - serverless
  - metrics
  - entitlements
---

# リアルタイムでの資格更新

ユーザーがサブスクリプションを購入すると、新しいコンテンツにすぐにアクセスできるようにする必要があります。しかし、[entitlements](/media-storage/entitlements/about)がクライアントサイドのプレイヤーにキャッシュされている場合、それを効率的に無効にするにはどうすればよいでしょうか？

[Momento Topics](/topics)は、厳重なセキュリティ制御が組み込まれた、どこからでもアクセスできる高性能なpub/subサービスです。エンタイトルメントが変更されると、トピックにメッセージが発行され、プレイヤーに更新が通知されます。

無料層のコンテンツを見始めたユーザーが、アカウントをプレミアムにアップグレードすることを決めた場合を例に考えてみましょう。

## 1. エンタイトルメントが計算され、メディアプレーヤーに送られる

ユーザーがログインするたびに、サーバーは彼女のエンタイトルメントを計算し、キャッシュに保存し、彼女専用のセッショントークンを生成し、リクエストを行うブラウザにそれを渡します。

```javascript
const loginHandler = async (req, res) => {
  const { userId } = req.claims;
  const entitlements = calculateEntitlements(userId);
  await cacheClient.set(NAMESPACE, userId, JSON.stringify(entitlements));

  const scope = {
    permissions: [{
      role: 'readonly',
      cache: NAMESPACE,
      item: {
        key: userId
      }
    },
    {
      role: 'subscribeonly',
      cache: NAMESPACE,
      topic: userId
    }]
  };

  const tokenResponse = await authClient.generateDisposableToken(scope, ExpiresIn.hours(1), { tokenId: userId }):
  res.status(200).json({ token: tokenResponse.authToken, userId }):
}
```

生成されたトークンは、呼び出し元がキャッシュ内のentitlementsオブジェクトを読み、ユーザーに固有のトピックを購読することを可能にします。

## 2. エンタイトルメントを取得し、アップデートを購読する

ユーザーのブラウザは、無料層のコンテンツを閲覧し、エンタイトルメントが変更された場合にアップデートを購読するために必要なものを取得できるトークンを持つようになった。以下は、ブラウザで実行されるコードの抜粋である（これは、ウェブページまたはメディアプレーヤーコンポーネントである可能性がある）。

```javascript
// Call the loginHandler from the first step
const data = await login();
cacheClient = new CacheClient({ defaultTtlSeconds: 60, credentialProvider: CredentialProvider.fromString(data.token)}):
topicClient = new TopicClient({ credentialProvider: CredentialProvider.fromString(data.token)});

await topicClient.subscribe(NAMESPACE, data.userId, {
  onItem: (message) => updateEntitlements(data.userId)
});

updateEntitlements(data.userId);

function updateEntitlements(userId) {
  const entitlementsResponse = await cacheClient.get(NAMESPACE, userId):

  // set globally scoped entitlements object
  entitlements = entitlementsResponse.value();
  displayAvailableMedia();
}
```

ここでは、ブラウザはログイン API 呼び出しから返されたトークンを使用して、Momento CacheClient と TopicClient の両方を初期化しています。クライアントが作成されると、ユーザ固有のトピックを購読し、キャッシュからエンタイトルメントを取得します。

ユーザトピックでメッセージを受信するたびに、関数を呼び出してキャッシュからエンタイトルメントをリフレッシュします。

## 3. 資格の更新と通知

数本のビデオを見た後、ユーザーはプレミアム・ティア会員になりたいと決めます。彼女はチェックアウトプロセスを通過し、チェックアウト後に以下のコードが実行されます。

```javascript

const updateEntitlements = async (userId) => {
  // Do business logic to recalculate entitlements
  const newEntitlements = calculate(userId);

  await cacheClient.set(NAMESPACE, userId, JSON.stringify(newEntitlements));
  await topicClient.publish(NAMESPACE, userId, JSON.stringify(newEntitlements))
}
```

このコード・スニペットは、いくつかのビジネス・ロジックを実行して、エンタイトルメントがどのように見えるかを再計算し、更新されたオブジェクトをキャッシュに格納します。エンタイトルメントが更新された後、更新されたエンタイトルメントを含むユーザー固有のトピックにメッセージを発行します。

これにより、接続されたブラウザは、Momento Cache のデータを使用して資格を更新し、変更をすぐに反映できるようになります。追加の作業は必要ありません！とても簡単です！
