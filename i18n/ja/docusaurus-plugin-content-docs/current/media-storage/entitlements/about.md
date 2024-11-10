---
sidebar_position: 1
sidebar_label: About
title: Entitlements
description: Learn about media entitlements and how to use them with Momento Media Storage
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

# Momento Media Storageのエンタイトルメント

エンタイトルメントとは、サブスクリプション、地域、視聴権に基づいてユーザがアクセスできるコンテンツを制御する認可メカニズムです。エンタイトルメントを効率的に管理することで、**セキュア**、**パーソナライズ**、**オーソライズ**された**コンテンツ配信が可能になります。Momentoは、リアルタイムで動的にエンタイトルメントを管理、配布、実施する低レイテンシーでスケーラブルなパターンを実装し、権利とアクセスを保護しながらスムーズなコンテンツ配信を実現します。

## エンタイトルメントとは何か？

エンタイトルメント（Entitlements）は、ユーザーが特定のメディアコンテンツを閲覧するためのパーミッションと権利を定義します。これらのパーミッションは以下に基づいています：

** 購読層**（プレミアムと無料の比較）
** 地理的位置**（地域制限）
** ユーザーID**（ログインユーザーと匿名ユーザー）
** デバイスの制限**（モバイルデバイスのみでのアクセス）
** 期間限定アクセス**（特定のコンテンツへのレンタルまたは期間限定アクセス）

:::info
エンタイトルメントは、重要な質問に答えます： *このユーザーは、このデバイスで、この時間に、このコンテンツにアクセスできますか？*
:::

## アクセス制限の種類

エンタイトルメントは、ユースケースに応じて様々な要素に基づくことができます。以下は一般的な例です。

### サブスクリプション・ベース

ユーザーの洲部スクリプションレベルによって、ストリーミングできるビデオライブラリや特定のタイトルが決まります。例えば、プレミアム・ユーザーのみが4Kストリームや独占コンテンツにアクセスできます。

### 地理的制限

コンテンツは、ライセンス契約により、視聴者の地域によって制限されます。例えば、あるコンテンツは米国では視聴可能だが、欧州ではブロックされています。

### デバイスの制限

特定のコンテンツは、特定のデバイスでしか利用できないかもしれません。例えば、あるメディア・サービスがモバイル限定のオファーを提供したり、VRに特化した体験を提供したりすることができます。

### 時間指定アクセス

ライブイベントや、視聴後に視聴期限が切れるペイ・パー・ビューなど、期間限定で利用できるコンテンツもあります。

## Momento Media Storageでエンタイトルメントを効率的に管理

特に、ユーザーデータ、ロケーション、デバイス、およびコンテンツメタデータに依存する複雑なロジックを含む場合、エンタイトルメントチェックは、多くの場合、リソースを消費します。Momentoを使用すると、エンタイトルメントデータをキャッシュし、最小限の遅延でリアルタイムの権限チェックを処理することにより、このオーバーヘッドを劇的に削減できます。

## エンタイトルメント・ストレージにMomento Cacheを使用する

Momento Cacheは、ブラウザ、メディアサーバー、認証メカニズムなど、どこからでもアクセス可能な超低遅延キャッシュです。ユーザーの最初のエンタイトルメント計算が実行された後、それをキャッシュに保存することで、視聴者に可能な限り最速のエクスペリエンスを提供できます。

Momento Cacheは非常に高速であるだけでなく、1秒間に数百万トランザクション（TPS）まで自動的にスケールするため、ストレスの多い高需要のイベント時にインフラ管理の負担がかかりません。この即時の弾力性により、アプリケーションのミッションクリティカルなコンポーネントにおけるトラフィックのボトルネックを防ぐことができます。

Momento Cacheは、複数のデータタイプを自由に使用できるため、アクセス制御用のエンタイトルメント・データを柔軟に保存およびフェッチできます。

### エンタイトルメント・オブジェクトの例

以下のエンタイトルメント・オブジェクトの例を考えてみましょう。


```json
{
  "subscription_level": "premium",
  "region": "US",
  "device_restriction": "none",
  "valid_from": "2024-10-01T00:00:00Z",
  "valid_until": "2024-12-31T23:59:59Z",
  "allowed_content": ["movie_id_123", "series_id_456"]
}

```

このオブジェクトにはユーザーに関する情報が含まれており、様々な方法でアクセスチェックに使用することができます。このデータを効率的に保存するかどうかは、実行時にどのようにエンタイトルメントを評価するかによって決まります。

### データをDictionary型として保存する


[キャッシュ辞書](/cache/develop/basics/datatypes#dictionaries)を使用すると、個々の文字列や数値のプロパティを格納し、それらを一度に、またはサブセットとしてフェッチすることができます。これは、特定のコンテンツが厳密に地域ベースであったり、階層化されていたりする場合に、エンタイトルメントをチェックするきめ細かい方法を提供します。

辞書は、1つのコマンドでJSONオブジェクト全体を保存することができ、計算後にエンタイトルメントをキャッシュする迅速で簡単な方法を提供します。以下の例では、エンタイトルメント オブジェクト全体を認証サーバーに保存し、メディア プレーヤーのクライアントでサブスクリプション階層に基づいてアクセスを評価します。

```javascript
// Auth server
const entitlements = await calculateEntitlements(userId);
await cacheClient.dictionarySetFields(NAMESPACE, userId, entitlements);

// Client side media player
let subscriptionLevel = 'free';
const subscriptionResponse = await cacheClient.dictionaryGetField(NAMESPACE, userId, 'subscription_level');
if(subscriptionResponse.type == CacheDictionaryGetFieldResponse.Hit) {
  subscriptionLevel = subscriptionResponse.value();
}

const canView = subscriptionLevel === 'premium';
return canView;
```

この例では、メディアプレーヤーはentitlementsキャッシュアイテムから`subscription_level`プロパティのみをフェッチし、プレーヤーにロードされるデータ量を最小限に抑えています。

エンタイトルメントの評価がより複雑で、オブジェクト全体を必要とする場合は、代わりに単一の[辞書フェッチコマンド](/cache/develop/api-reference/dictionary-collections#dictionaryfetch)でフェッチできます。

### データをブロブとして保存する

エンタイトルメントをキャッシュ・ディクショナリとして格納する代わりに、それを*スカラ*キャッシュ・アイテムにブロブとして格納する方法がある。この基本的なオブジェクト格納メソッドは、データをバイナリ・データまたは文字列として格納します。

```javascript
// Auth server
const entitlements = await calculateEntitlements(userId);
await cacheClient.set(NAMESPACE, userId, entitlements);

// Client side media player
let entitlements;
const entitlementsResponse = await cacheClient.get(NAMESPACE, userId);
if(entitlementsResponse.type == CacheGet.Hit) {
  entitlements = entitlementsResponse.value():
}

const canView = await evaluate(entitlements);
return canView;
```

この例では、キャッシュからentitlementsオブジェクト全体をフェッチし、特定のビジネス要件に基づいて、より意味のある計算で評価します。

:::tip
スカラー値へのアクセスは、[Momento HTTP API](/cache/develop/api-reference/http-api)または[SDKの1つ](/platform/sdks)を介して行うことができ、インターネットにアクセスできるすべてのものにキャッシュデータへのアクセスを許可します。キャッシュ辞書には、Momento SDKからのみアクセスできます。
:::

## Momento 認証トークンでアクセスを制限する

エンタイトルメントにアプローチするもう一つの方法は、コンテンツへのアクセスを[session tokens](/cache/develop/authentication/tokens)に直接埋め込むことです。エンタイトルメントの計算が完了し、ユーザーがアクセスできるメディアのリストがわかったら、短命のトークンを使ってコンテンツへの明示的なアクセスを許可できます。

Momento Media Storageが[メディアオリジン](/media-storage/core-concepts/origin)として使用されている場合、要求に応じてコンテンツへのアクセスを制限するために、きめ細かいアクセス制御を使用することができます。

:::warning
メディアを配信するためにCDNを使用する場合、このアプローチは機能しません。このソリューションは、Momentoから直接コンテンツを取得するユースケースのためのものです。MomentoのIntelligent Gatewayは、提供された認証トークンに対してすべての受信リクエストを評価します。CDNは特定の視聴者のトークンをMomentoに転送しないため、この方法は有効ではありません。
:::

コンテンツが以下のような構造でMomento Media Storageに保存されているとします：

```text
/{ContentName}/playlist.m3u8
/{ContentName}/1080p/playlist.m3u8
/{ContentName}/1080p/segment1.ts
/{ContentName}/720p/playlist.m3u8
/{ContentName}/720p/segment1.ts
```

この構造は、[HLS](/media-storage/performance/adaptive-bitrates/hls) でエンコードされた、複数の解像度とビットレートを持つ動画を意味する。この特定のメディアのすべてのキーの先頭には、コンテンツ識別子が付きます。短命トークンを作成するとき、そのコンテンツのすべてのキーへの読み取り専用アクセスを許可することができます。

```javascript
const scope = {
  permissions: [ {
    role: 'readonly',
    cache: 'media',
    item: {
      keyPrefix: `/${ContentName}/`
    }
  }]
};

const token = authClient.generateDisposableToken(scope, ExpiresIn.hours(1), { tokenId: userId }):
```

この例では、コンテンツ名で始まるすべてのキーへの読み取り専用アクセスを許可するパーミッションスコープを作成し、暗黙的な識別のためにユーザーの ID を埋め込んだ、1 時間有効なトークンを Momento AuthClient で作成します。このトークンをメディア プレーヤに提供すると、オリジンから直接動画を取得できます。トークンで明示的に許可されていない動画を読み込もうとすると、`Unauthorized` 応答が返されます。
