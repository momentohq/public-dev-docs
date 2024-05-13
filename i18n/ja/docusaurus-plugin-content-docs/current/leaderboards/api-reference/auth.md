---
sidebar_position: 2
title: Auth API reference information
sidebar_label: Auth
description: 知っておく必要がある Auth API 呼び出しと、それらを Momento サービスで使用する方法について学びます。
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Auth API リファレンス

Auth API は、Momento サービスの API キーとトークンを作成および管理します。これらの認証メカニズムは、1つ以上のキャッシュやトピックスへのアクセスを許可するために、1つ以上のパーミッションを持つようにスコープすることができます。

<img src="/img/momento-auth-tokens.png" width="60%"/>

## GenerateApiKey API

指定した権限と有効期限を持つ新しい Momento Auth トークンを生成します。

| 名前            | タイプ                      | 説明                                                                                                                                                                             |
| --------------- |---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| scope           | [TokenScope](#tokenscope-objects) | 新しいトークンに付与する権限。TokenScopeオブジェクトはSDKによって提供されます。                                                                                       |
| expiresIn       | Number&nbsp;&nbsp;\|&nbsp;&nbsp;ExpiresIn&nbsp;object | `ExpiresIn.never()`メソッド、`ExpiresIn.minutes()`メソッド、`ExpiresIn.hours()`メソッドを呼び出すことで、トークンが期限切れになるまでの秒数、またはその期間を表すExpiresInオブジェクト。 |

<details>
  <summary>Method response object</summary>

* Success
  - `authToken`: string - 新しいAuthトークン
  - `refreshToken`: string - [RefreshApiKey API](#refreshapikey-api) を使って、トークンの有効期限が切れる前にリフレッシュするためのトークン
  - `endpoint`: string - Momento クライアントがリクエストを行う際に使用する HTTP エンドポイント
  - `expiresAt`: Timestamp - トークンの有効期限が切れるタイムスタンプ
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

:::note

MomentoコントロールプレーンAPIにアクセスするためのトークンは、[Momentoコンソール](https://console.gomomento.com/)を使用してのみ生成できます。

:::

<SdkExampleTabs snippetId={'API_GenerateApiKey'} />

## RefreshApiKey API

既存の有効期限が切れていない Momento Authトークンをリフレッシュします。 元のトークンと同じ権限と有効期限を持つ新しいトークンを生成します。

| 名前            | タイプ            | 説明                                                       |
| --------------- | --------------- |----------------------------------------------------------|
| refreshToken    | String          | `GenerateApiKey` をコールした際に取得した、現在のAuthトークンの refreshToken。 |

<details>
  <summary>Method response object</summary>

* Success
  - `apiKey`: string - 新しいAuthトークン
  - `refreshToken`: string - [RefreshApiKey API](#refreshapikey-api)で使用するリフレッシュトークン。
  - `endpoint`: string - Momentoクライアントがリクエストを行う際に使用する HTTP エンドポイント。
  - `expiresAt`: Timestamp - トークンの有効期限が切れるタイムスタンプ
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_RefreshApiKey'} />

## TokenScope objects
| 名前            | タイプ                                      | 説明                                  |
| --------------- |-------------------------------------------| -------------------------------------------- |
| permissions           | List <[Permission](#permission-objects)\> | 新しいトークンに付与するパーミッション |

TokenScopeは、[パーミッションオブジェクト](#permission-objects)のリストです。このリストには、[CachePermission](#cachepermission) 型または [TopicPermission](#topicpermission) 型のパーミッションを含めることができ、最大 10 個のパーミッションオブジェクトを含めることができます。パーミッションは Momento データプレーン API (`get` や `set` など) へのアクセスのみを許可します。
複数のパーミッションオブジェクトを持つAuthトークンが作成された場合、一致するパーミッションがアクセスを許可します。たとえば、1 つのトークンに 2 つのパーミッションオブジェクトを設定した場合、次のようになります：

1. アカウントのすべてのキャッシュへの ReadWrite アクセスを許可するパーミッションオブジェクト
2. キャッシュ `foo` に対する ReadOnly アクセスを許可するパーミッションオブジェクト

この場合でも、トークンはキャッシュ `foo` に対してデータ操作 API (`set`、`delete`、`DictionarySetFields` など) を使用することができます。

## Permission objects

これらのオブジェクトはキャッシュやトピック情報を持つ特定のロールを定義し、[TokenScope](#tokenscope-objects)に割り当てられます。

### CachePermission
キャッシュのパーミッションを定義する [TokenScope](#tokenscope-objects) オブジェクトのコンポーネント

| 名前            | タイプ                 | 説明                                                                                                      |
| --------------- |----------------------|------------------------------------------------------------------------------------------------------------------|
| role           | ReadOnly&nbsp;&nbsp;\|&nbsp;&nbsp;ReadWrite&nbsp;&nbsp;\|&nbsp;&nbsp;WriteOnly | パーミッションによって許可されたアクセスのタイプ                                                                    |
| cache          | `AllCaches`&nbsp;&nbsp;\|&nbsp;&nbsp;`CacheName` | パーミッションは `CacheName` オブジェクトまたは `AllCaches` 組み込みの値を使用して、セレクトキャッシュの名前で制限することができます。 |

ロールの場合、`CacheRole.ReadOnly` を使用すると、CacheSelector で定義されたキャッシュ上のすべての読み取りデータプレーン API (`get`、`DictionaryGetField` など) にアクセスできるようになります。
`CacheRole.ReadWrite` を使用すると、CacheSelector で定義されたキャッシュ上のすべての読み取りデータプレーン API および書き込みデータプレーン API にアクセスできるようになります。
`CacheRole.WriteOnly` を使用すると、CacheSelector で定義されたキャッシュのすべての書き込みデータプレーン API にアクセスできるようになります。
`CacheRole.WriteOnly` は、`SetIfNotExists` のような条件付きの書き込みを意味する API や、`ListPushBack` が新しい長さを返すなど、コレクションの更新状態に関する情報を返す API には使用できません。カスタムロールはサポートされていません。

キャッシュの場合、値は組み込みの `AllCaches` か、このパーミッションのキャッシュ名を含む文字列となります。


#### CachePermission オブジェクトの TokenScope の例
これは、CachePermissions だけで TokenScope を作成する例です。

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

### TopicPermission
トークンのパーミッションを定義する[TokenScope](#tokenscope-objects)オブジェクトのコンポーネント

| 名前            | タイプ                            | 説明                                                                                                                                                                                                            |
| --------------- |---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| role           | SubscribeOnly&nbsp;\|&nbsp;PublishSubscribe&nbsp;&nbsp;\|&nbsp;&nbsp;PublishOnly | パーミッションによって許可されたアクセスのタイプ。                                                                                                                                                                          |
| cache          | `AllCaches`&nbsp;&nbsp;\|&nbsp;&nbsp;`CacheName` | パーミッションは `CacheName` オブジェクトを使用して選択したキャッシュに制限することも、`AllCaches` 組み込み値を使用してアカウント内のすべてのキャッシュに制限することもできます。                                                           |
| topic          | `AllTopics`&nbsp;&nbsp;\|&nbsp;&nbsp;`TopicName`       | パーミッションは `TopicName` オブジェクトを使用して選択したトピックに制限することも、 `AllTopics` 組み込み値を使用して上記のキャッシュ内のすべてのトピックに制限することもできます。 |

ロールには、`TopicRole.PublishSubscribe`、`TopicRole.SubscribeOnly`、`TopicRole.PublishOnly`の3つの管理ロールがあります。カスタムロールはサポートされていません。SubscribeOnlyロールを使用するとトピックの購読のみが可能になり、PublishSubscribeロールを使用するとトピックの発行と購読が可能になり、PublishOnlyロールを使用するとトピックの発行のみが可能になります。

キャッシュでは、そのキャッシュの名前空間内のトピックのみがパーミッションによって許可されます。
これは組み込みの `AllCaches` 値またはキャッシュを指定する文字列に設定することができます。

トピックには、組み込みの `AllTopics` 値を設定することができます。
これは、cache で定義されているキャッシュ内のすべてのトピックにアクセスできるようにするもので、特定のトピック名を文字列で指定することもできます。

#### TopicPermissionオブジェクトのTokenScopeの例

これは、TopicPermissions だけで TokenScope を作成する例です。

```javascript
const TopicsPermissions = {
    permissions: [
      {
        role: TopicRole.PublishSubscribe, // Managed role
        cache: 'the-great-wall', // grants access to a specific cache
        topic: 'highlights', // grants access to a specific topic
      },
      {
        role: TopicRole.SubscribeOnly, // Managed role
        cache: AllCaches, // This is a built-in value for access to all caches in the account
        topic: AllTopics, // This is a built-in value for access to all topic in the listed cache(s).
      },
    ],
};
```

## GenerateDisposableToken API

指定した権限と有効期限を持つ、使い捨ての Momento Authトークンを生成します。

使い捨てトークンは、通常の Momento 認証トークンとはいくつかの点で異なります：
- 使い捨てトークンはコンソールで生成することはできません。generateDisposableToken`APIコールに使用するトークンは、Momentoコンソールから生成したスーパーユーザースコープのトークンでなければなりません。
- トークンの有効期限は1時間です。
- リフレッシュはできないので、リフレッシュトークンは付属しません。
- パーミッションは DisposableTokenScope オブジェクトで指定します。

| 名前            | タイプ                      | 説明                                                                                                                                                                             |
| --------------- |---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| scope           | [DisposableTokenScope](#disposabletokenscope-objects) | 新しい使い捨てトークンに付与する権限。SDK は、あらかじめ DisposableTokenScope オブジェクトを用意しています。                                                                                       |
| expiresIn       | Number&nbsp;&nbsp;\|&nbsp;&nbsp;ExpiresIn&nbsp;object | トークンが失効するまでの秒数、または `ExpiresIn.minutes()` メソッドや `ExpiresIn.hours(1)` メソッドを呼び出して期間を指定した ExpiresIn オブジェクト。使い捨てトークンは1時間以内に失効しなければなりません。 |

<details>
  <summary>Method response object</summary>

* Success
  - `authToken`: string - 新しい使い捨てAuthトークン
  - `endpoint`: string - Momento クライアントがリクエストを行う際に使用する HTTP エンドポイント
  - `expiresAt`: Timestamp - トークンの有効期限が切れるタイムスタンプ
* Error

詳しくは[レスポンスオブジェクト](./response-objects.md)を参照してください。

</details>

<SdkExampleTabs snippetId={'API_GenerateDisposableToken'} />

### DisposableTokenScope objects

| 名前            | タイプ                                      | 説明                                  |
| --------------- |-------------------------------------------| -------------------------------------------- |
| permissions           | List <[DisposableTokenCachePermission](#disposabletokencachepermissions)&nbsp;&nbsp;\|&nbsp;&nbsp;[Permission](#permission-objects)\> | 新しいトークンに付与するパーミッション |

DisposableTokenScope オブジェクトは、[CachePermission](#cachepermission)、[TopicPermission](#topicpermission)、または [DisposableTokenCachePermission](#disposabletokencachepermissions) タイプのパーミッション・オブジェクトを受け入れます。

### DisposableTokenCachePermissions

DisposableTokenCachePermission は CachePermission を拡張したもので、CachePermission と同じフィールドを持ちますが、`item` フィールドが追加されています。

例えば、キーまたはキープレフィックスを表す文字列に `item` を設定すると、特定のキーまたはプレフィックスで始まるキーのセットのみにアクセスを制限できます。別の方法として、`item` を AllCacheItems に設定すると、通常の CachePermission と同じパーミッションのセットが作成されます。

| 名前            | タイプ                 | 説明                                                                                                      |
| --------------- |----------------------|------------------------------------------------------------------------------------------------------------------|
| role           | ReadOnly&nbsp;&nbsp;\|&nbsp;&nbsp;ReadWrite&nbsp;&nbsp;\|&nbsp;&nbsp;WriteOnly | パーミッションによって許可されるアクセスのタイプ                                                                    |
| cache          | `AllCaches`&nbsp;&nbsp;\|&nbsp;&nbsp;`CacheName` | パーミッションは `CacheName` オブジェクトまたは `AllCaches` 組み込みの値を使用して、セレクトキャッシュの名前で制限することができます。 |
| item          | `AllCacheItems`&nbsp;&nbsp;\|&nbsp;&nbsp;`Key`&nbsp;&nbsp;\|&nbsp;&nbsp;`KeyPrefix` | パーミッションは、`Key` または `KeyPrefix` オブジェクト、あるいは `AllCachesItems` 組み込みの値を使用して、名前によるキャッシュアイテムの選択を制限することができます。 |

ロールの場合、`CacheRole.ReadOnly` を使用すると、CacheSelector で定義されたキャッシュ上のすべての読み取りデータプレーン API (`get`、`DictionaryGetField` など) にアクセスできるようになります。
`CacheRole.ReadWrite` を使用すると、CacheSelector で定義されたキャッシュ上のすべての読み取りデータプレーン API および書き込みデータプレーン API にアクセスできるようになります。
`CacheRole.WriteOnly` を使用すると、CacheSelector で定義されたキャッシュのすべての書き込みデータプレーン API にアクセスできるようになります。
`CacheRole.WriteOnly` は、`SetIfNotExists` のような条件付きの書き込みを意味する API や、`ListPushBack` が新しい長さを返すなど、コレクションの更新状態に関する情報を返す API には使用できません。カスタムロールはサポートされていません。

キャッシュの場合、値は組み込みの `AllCaches` か、このパーミッションのキャッシュ名を含む文字列となります。

item の場合、値は組み込みの `AllCacheItems` か、このパーミッションが対象とするキャッシュアイテムのキーまたはキープレフィックスを含む文字列となります。

#### DisposableTokenScope オブジェクトの例

これは、3 種類のパーミッション・オブジェクトをすべて持つ DisposableTokenScope を作成する例です： CachePermission、TopicPermission、DisposableTokenCachePermission です。

```javascript
const exampleDisposableTokenPermission: DisposableTokenCachePermission = {
  role: CacheRole.WriteOnly,
  cache: "WriteCache",
  item: {
    keyPrefix: "WriteKey"
  }
};

const exampleCachePermission: CachePermission = {
  role: CacheRole.ReadOnly,
  cache: "ReadCache"
};

const exampleTopicPermission: TopicPermission = {
  role: TopicRole.PublishSubscribe,
  cache: "ReadWriteCache",
  topic: "MyTopic"
}

const exampleScope: DisposableTokenScope = {
    permissions: [
      exampleDisposableTokenPermission,
      exampleCachePermission,
      exampleTopicPermission,
    ],
};

// Then pass in the entire DisposableTokenScope object when
// you call generateDisposableToken
const tokenResponse = await authClient.generateDisposableToken(
  exampleScope,
  ExpiresIn.minutes(30)
);
```

## FAQ

<details>
<summary>キャッシュやトピックのパーミッションにカスタムロールを作成できますか?</summary>

各権限について、上記の管理された役割のみをサポートしています。

</details>

<details>
<summary>これらのトークンは、MomentoのコントロールプレーンAPIへのアクセスを制御しますか？</summary>

[GenerateApiKey](#generateauthtoken-api)APIで生成されたアクセストークンは、MomentoのデータプレーンAPIへのアクセスのみを制御します。Momento のコントロールプレーン API にアクセスするためのトークンは、[Momento console](https://console.gomomento.com/) を使用して生成する必要があります。

</details>

:::tip

ここで答えられない質問があれば、[私たちのDiscordサーバー](https://discord.gg/3HkAKjUZGq)に飛び、サポートチャンネルで私たちに質問してください。

:::
