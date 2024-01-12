---
sidebar_position: 7
title: Auth API リファレンス
sidebar_label: Auth
description: Auth API の呼び出しを学び、それらを Momento サービスでどのように使用するかについて理解しましょう。
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Auth API reference

auth APIは、[Momento auth tokens](./../authentication/index.mdx) として知られる Momento サービスのauthトークンを作成し管理します。トークンは、1つ以上のキャッシュやトピックへのアクセスを許可するために、1つまたは複数の権限を持つように設定することができます。

<img src="/img/momento-auth-tokens.png" width="60%"/>

## GenerateApiKey API

権限と有効期限を指定することで新しい Momento API keyを生成します。

| 名前            | 型                       | 説明                                                                                                                                                                             |
| --------------- |----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| scope           | [TokenScope](#tokenscope)  | 新しいトークンに付与する権限です。事前に組み立てられたTokenScopeオブジェクトがSDKによって提供されています。                                                                                       |
| expiresIn       | Number \| ExpiresIn object | トークンが失効するまでの秒数、またはExpiresIn.never()、ExpiresIn.minutes()、ExpiresIn.hours()メソッドを呼び出すことで期間を表すExpiresInオブジェクトです。 |

<details>
  <summary>Method response object</summary>

* Success
  - `apiKey`: string - 新しいAPI key
  - `refreshToken`: string - 有効期限前にトークンを更新するために、[RefreshAuthToken API](#refreshapikey-api)と共に使用できるリフレッシュトークン
  - `expiresAt`: Timestamp - トークンが失効するタイムスタンプ
* Error

具体的な情報については[レスポンスオブジェクト](./response-objects.md)をご覧ください。

</details>

:::note

Momento のコントロールプレーン API にアクセスするためのトークンは、[Momento console](https://console.gomomento.com/)を使用してのみ生成できます。

:::

<SdkExampleTabs snippetId={'API_GenerateApiKey'} />

## RefreshApiKey API

既存の有効な Momento APIキーを更新します。新しいAPIキーは、元のAPIキーと同じ権限と有効期間を持ちます。

| 名前            | 型            | 説明                                   |
| --------------- | --------------- | --------------------------------------------- |
| refreshToken    | String          | 現在のAPIキーのリフレッシュトークンで、これは `GenerateApiKey` の元の呼び出しから取得されます。 |

<details>
  <summary>Method response object</summary>

* Success
  - `apiKey`: string - 新しいAPIキー
  - `refreshToken`: string - 有効期限前にトークンを更新するために、[RefreshAuthToken API](#refreshapikey-api) と共に使用できるリフレッシュトークン
  - `expiresAt`: Timestamp - トークンが失効するタイムスタンプ
* Error

具体的な情報については[レスポンスオブジェクト](./response-objects.md)をご覧ください。

</details>

<SdkExampleTabs snippetId={'API_RefreshApiKey'} />

## TokenScope objects
| 名前            | 型                                      | 説明                                  |
| --------------- |-------------------------------------------| -------------------------------------------- |
| permissions           | List <[Permission](#permission-objects)\> | 新しいトークンに付与する権限です。|

TokenScope は [permission objects](#permission-objects)のリストです。リストには、[CachePermission](#cachepermission)型または [TopicPermission](#topicpermission)型の権限が含まれ、[最大で十](./../../limits.md)のパーミッションオブジェクトを含むことができます。権限はMomento データプレーンAPI（例えば get、set など）へのアクセスのみを許可します。複数のパーミッションオブジェクトでauthトークンが作成されると、どの一致するパーミッションでもアクセスが許可されます。例えば、次の二つのパーミッションオブジェクトで単一のトークンが作成された場合：

1. アカウントの全てのキャッシュに対して読み書きアクセスを許可するパーミッションオブジェクト
2. キャッシュ `foo` への読み取り専用アクセスを許可するパーミッションオブジェクト

この場合、最初のパーミッションにより、キャッシュ`foo`に対してデータ操作API（例えば `set`、`delete`、`DictionarySetFields`など）の使用を許可するトークンになります。

## Permission objects

これらのオブジェクトは、キャッシュまたはトピック情報に関する具体的なロールを定義し、その後 [TokenScope](#tokenscope) に割り当てられます。

### CachePermission
キャッシュに対する権限を定義する [TokenScope](#tokenscope) オブジェクトの一部分。

| 名前            | 型                  | 説明                                                                                                      |
| --------------- |-----------------------|------------------------------------------------------------------------------------------------------------------|
| role           | ReadOnly \| ReadWrite | パーミッションにより付与されるアクセスの種類。                                                                    |
| cache          | `AllCaches` \| `CacheName` | `CacheName` オブジェクトや `AllCaches` 組み込み値を使用して、パーミッションを選択したキャッシュ名に制限することができます。 |

ロールについては、`CacheRole.ReadOnly` を使用すると、CacheSelector で定義されたキャッシュのすべてのデータ読取りAPI（例：`get`、`DictionaryGetField`など）にアクセスできます。`CacheRole.ReadWrite` を使用すると、CacheSelector で定義されたキャッシュのすべての読み書きデータプレーンAPIへのアクセスが可能となります。カスタムロールはサポートされていません。

キャッシュについては、値は組み込みの `AllCaches` またはこのパーミッションが対象とするキャッシュの名前を含む文字列値にすることができます。

### TopicPermission
トークンの権限を定義する [TokenScope](#tokenscope) オブジェクトの一部分。

| 名前            | 型                             | 説明                                                                                                                                                                                                            |
| --------------- |----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| role           | SubscribeOnly \| PublishSubscribe | パーミッションにより付与されるアクセスの種類。                                                                                                                                                                          |
| cache          | `AllCaches` \| `CacheName`       | `CacheName` オブジェクトを使用してパーミッションを選択したキャッシュ名に制限したり、`AllCaches` 組み込み値を使用してアカウント内のすべてのキャッシュに制限することができます。                                                           |
| topic          | `AllTopics` \| `TopicName`       | `TopicName` オブジェクトを使用してパーミッションを選択したトピック名に制限したり、`AllTopics` 組み込み値を使用して上記キャッシュ内のすべてのトピックに制限することができます。 |

ロールについては、`TopicRole.PublishSubscribe` と `TopicRole.SubscribeOnly` の2つの管理ロールを割り当てることができます。カスタムロールはサポートされていません。SubscribeOnly ロールを使用すると、トピックへのサブスクライブのみが許可されます。一方、PublishSubscribe ロールを使用すると、トピックへのパブリッシュとサブスクライブが許可されます。

キャッシュについては、そのキャッシュの名前空間内のトピックのみがパーミッションによって許可されます。これは組み込みの `AllCaches` 値に設定するか、特定のキャッシュの名前を指定する文字列に設定できます。

トピックについては、これは組み込みの `AllTopics` 値に設定でき、これはキャッシュで定義されたキャッシュ内のすべてのトピックへのアクセスを提供します。また、特定のトピック名を持つ文字列にすることもできます。

#### TopicScope examples
これは、CachePermissions のみで TokenScope を作成する例です。

```javascript
const CachePermissions = {
    permissions: [
        {
            role: CacheRole.ReadWrite, // Managed role
            cache: "MyCache" // grants access to a specific cache
        },
        {
            role: CacheRole.ReadOnly, // Managed role
            cache: AllCaches // Built-in value for access to all caches in the account.
        },
    ],
};
```

これは、TopicPermissions のみで TokenScope を作成する例です。

```javascript
const TopicsPermissions = {
    permissions: [
      {
        role: TopicRole.PublishSubscribe, // Managed role
        cache: 'the-great-wall', // grants access to a specific cache
        topic: 'highlights', // grants access to a specific topic
      },
      {
        role: TopicRole.SubscribeOnly, // Built-in role
        cache: AllCaches, // This is a built-in value for access to all caches in the account
        topic: AllTopics, // This is a built-in value for access to all topic in the listed cache(s).
      },
    ],
};
```

:::tip

ここで答えられていない質問がある場合は、[私たちのDiscordサーバー](https://discord.gg/2c24SK6W)に参加し、サポートチャンネルで専門家に質問してください

:::

## FAQ

<details>
<summary>キャッシュまたはトピックのパーミッションに対してカスタムロールを作成することは可能ですか？</summary>

いいえ。各パーミッションについては、上記に列挙した管理されたロールのみをサポートしています。

</details>

<details>
<summary>これらのトークンは、Momento コントロールプレーン API へのアクセスを制御しますか？</summary>

[GenerateAuthToken](#generateauthtoken) API で生成されたアクセストークンは、Momento のデータプレーンAPIへのアクセスだけを制御します。Momento のコントロールプレーンAPIへのアクセスのためのトークンは、[Momento console](https://console.gomomento.com/) を使用して生成する必要があります。

</details>

<details>
<summary>書き込み専用またはパブリッシュ専用のパーミッションを持つことは可能ですか？</summary>

We do not support 'write only' or 'publish only' permissions. If this is something you need, please [contact us](mailto:support@momentohq.com) and let's discuss your needs.

"書き込み専用"や"パブリッシュ専用"のパーミッションはサポートしていません。これが必要な場合は、[お問い合わせください](mailto:support@momentohq.com)、あなたのニーズについて話し合いましょう。

</details>