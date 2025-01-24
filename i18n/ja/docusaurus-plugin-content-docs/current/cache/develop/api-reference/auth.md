---
sidebar_position: 7
title: Auth API reference information
sidebar_label: Auth
description: Learn the Auth API calls you need to know about and how to use them with Momento services.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Auth API reference

認証 API は、Momento サービスの API キーとトークンを作成および管理します。これらの認証メカニズムは、1つ以上のキャッシュやトピックへのアクセスを許可するために、1つ以上のパーミッションを持つようにスコープすることができます。

<img src="/img/momento-auth-tokens.png" width="60%"/>

## AuthClient Methods

---

<div class='row'>

 <div class='col col--4' style={{paddingRight: '20px'}}>

   ### GenerateApiKey

指定した権限と有効期限を持つ新しい Momento 認証トークンを生成します。

        #### Parameters
        ----------------
        - **scope** - [*PermissionScope*](#permissionscope-objects): 新しいトークンに付与するパーミッション。PermissionScopeオブジェクトはSDKによって提供されます。
        - **expiresIn** - *ExpiresIn object*: ExpiresIn.never()`メソッド、`ExpiresIn.minutes()`メソッド、`ExpiresIn.hours()`メソッドを呼び出すことで、トークンが期限切れになるまでの秒数、またはその期間を表すExpiresInオブジェクト。

  #### Returns
        ----------------
        次のいずれか:
        - **Success**:
            - `authToken` - *String*:  新しい認証トークン
            - `refreshToken` - *String - [RefreshApiKey API](#refreshapikey)で使用できるリフレッシュトークンで、トークンの有効期限が切れる前にリフレッシュします
            - `endpoint`- *String - Momento クライアントがリクエストを行う際に使用する HTTP エンドポイント
            - `expiresAt`- *ExpiresAt object*: - トークンの有効期限が切れるタイムスタンプ

        - **Error**:
            - 詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

</div>

 <div class='col col--8'>

        <SdkExampleTabs snippetId={'API_GenerateApiKey'} />

  </div>

</div>

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### RefreshApiKey

        既存の未使用のMomento APIキーをリフレッシュします。元のAPIキーと同じ権限と有効期限を持つ新しいAPIキーを生成します。

        #### Parameters
        ----------------
        - **refreshToken** - *String*: 元のAPIキーが生成されたときに提供されたリフレッシュ・トークン

        #### Returns
        ----------------
        One of the following:
        - **Success**:
            - `apiKey` - *String* :  新しい認証トークン
            - `refreshToken`- *String*:  [RefreshApiKey API](#refreshapikey)で使用できるリフレッシュトークンで、トークンの有効期限が切れる前にリフレッシュします。
            - `endpoint`- *String*: - Momento クライアントがリクエストを行う際に使用する HTTP エンドポイント
            - `expiresAt`- *ExpiresAt object*: - トークンの有効期限が切れるタイムスタンプ

        - **Error**:
            - 詳しくは[レスポンスオブジェクト](./response-objects.md)を参照

    </div>

    <div class='col col--8'>

        <SdkExampleTabs snippetId={'API_RefreshApiKey'} />

    </div>

</div>

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### GenerateDisposableToken

        指定した権限と有効期限を持つ、使い捨ての Momento 認証トークンを生成します。
        使い捨てトークンは、通常の Momento 認証トークンとは以下の点で異なります。:
          - トークンはコンソールで生成することはできず、プログラムによってのみ生成することができます。generateDisposableToken` API 呼び出しに使用するトークンは、Momento コンソールから生成したスーパーユーザースコープのトークンでなければなりません。
          - 有効期限は1時間以内です。
          - これらはリフレッシュできないため、リフレッシュ・トークンは付属しません。
          - パーミッションは、DisposableTokenScopeオブジェクトを使って指定します。

        #### Parameters
        ----------------
        - **scope** - [*DisposableTokenScope*](#disposabletokenscope-objects):新しい使い捨てトークンに付与する権限。SDK は、あらかじめ DisposableTokenScope オブジェクトを用意しています。
        - **expiresIn** -*ExpiresIn object*: トークンが失効するまでの秒数、または ExpiresIn.minutes() メソッドや ExpiresIn.hours(1) メソッドを呼び出して期間を表す ExpiresIn オブジェクト。使い捨てトークンは1時間以内に失効しなければなりません。

        #### Optional Parameters
        ----------------
        - **tokenId** - *String*: どのメッセージがどの使い捨てトークンで発行されたかを識別するための文字列。
        
        #### Returns
        ----------------
        以下のいずれかです:
        - **Success**:
            - `authToken`- *String*: - 新しい使い捨て認証トークン
            - `endpoint`- *String*: - Momento クライアントがリクエストを行う際に使用する HTTP エンドポイント。
            - `expiresAt`- *ExpiresAt object*: - トークンの有効期限が切れるタイムスタンプ

        - **Error**:
            - 詳しくは[レスポンスオブジェクト](./response-objects.md)を参照。

     </div>

      <div class='col col--8'>

          <SdkExampleTabs snippetId={'API_GenerateDisposableToken'} />

      </div>

</div>

---

## PermissionScope objects
### PermissionScope
| Name            | Type                                      | Description                                  |
| --------------- |-------------------------------------------| -------------------------------------------- |
| permissions     | List \<[Permission](#permission-objects)\> | 新しいトークンに付与するパーミッション   |

TokenScopeは[パーミッション・オブジェクト](#permission-objects)のリストです。このリストには、[CachePermission](#cachepermission) 型または [TopicPermission](#topicpermission) 型のパーミッションを含めることができ、[最大10個](/cache/manage/limits) のパーミッションオブジェクトを含めることができます。パーミッションは Momento データプレーン API (`get` や `set` など) へのアクセスのみを許可する。複数のパーミッションオブジェクトを持つ認証トークンが作成された場合、一致するパーミッションがアクセスを許可します。たとえば、1 つのトークンに 2 つのパーミッションオブジェクトを設定した場合、次のようになります：

1. アカウントのすべてのキャッシュへの ReadWrite アクセスを許可する権限オブジェクト。
2. キャッシュ `foo` に対する ReadOnly アクセスを許可するパーミッションオブジェクト。

この場合でも、トークンはキャッシュ `foo` に対してデータ操作 API (`set`、`delete`、`DictionarySetFields` など) を使用することができます。

### Permission objects

これらのオブジェクトはキャッシュやトピック情報を持つ特定のロールを定義し、[PermissionScope](#permissionscope-objects)に割り当てられます。

### CachePermission
A component of a [PermissionScope](#permissionscope-objects) object that defines permissions for a cache.

| Name            | Type                 | Description                                                                                                      |
| --------------- |----------------------|------------------------------------------------------------------------------------------------------------------|
| role           | ReadOnly&nbsp;&nbsp;\|&nbsp;&nbsp;ReadWrite&nbsp;&nbsp;\|&nbsp;&nbsp;WriteOnly | アクセス許可の種類                                                                    |
| cache          | `AllCaches`&nbsp;&nbsp;\|&nbsp;&nbsp;`CacheName` | パーミッションは `CacheName` オブジェクトまたは `AllCaches` 組み込みの値を使用して、セレクトキャッシュの名前で制限することができます|

ロールの場合、`CacheRole.ReadOnly` を使用すると、CacheSelector で定義されたキャッシュ上のすべての読み取りデータプレーン API (`get`、`DictionaryGetField` など) にアクセスできるようになります。`CacheRole.ReadWrite` を使用すると、CacheSelector で定義されたキャッシュ上のすべての読み取りデータプレーン API および書き込みデータプレーン API にアクセスできるようになります。`CacheRole.WriteOnly` を使用すると、CacheSelector で定義されたキャッシュのすべての書き込みデータプレーン API にアクセスできるようになります。`CacheRole.WriteOnly` は、`SetIf*` のような条件付き書き込みを意味する API や、コレクションの更新状態に関する情報を返す API (`ListPushBack` は新しい長さを返すなど) には使用できません。カスタムロールはサポートされていません。

キャッシュの場合、値は組み込みの `AllCaches` か、このパーミッションのキャッシュ名を含む文字列となります。

#### PermissionScope example for a CachePermission object
これは、CachePermissions だけで PermissionScope を作成する例です。

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
---
### TopicPermission
トークンのパーミッションを定義する[PermissionScope](#permissionscope-objects)オブジェクトのコンポーネント。

| Name            | Type                            | Description                                                                                                                                                                                                            |
| --------------- |---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| role           | SubscribeOnly&nbsp;\|&nbsp;PublishSubscribe&nbsp;&nbsp;\|&nbsp;&nbsp;PublishOnly | アクセス許可の種類                                                                                                                                                                          |
| cache          | `AllCaches`&nbsp;&nbsp;\|&nbsp;&nbsp;`CacheName` | パーミッションは `CacheName` オブジェクトを使用して選択したキャッシュに制限することも、`AllCaches` 組み込み値を使用してアカウント内のすべてのキャッシュに制限することもできます。                                                         |
| topic          | `AllTopics`&nbsp;&nbsp;\|&nbsp;&nbsp;`TopicName`       | パーミッションは `TopicName` オブジェクトを使用して選択したトピックに制限することも、 `AllTopics` 組み込み値を使用して上記のキャッシュ内のすべてのトピックに制限することもできます |

ロールには、`TopicRole.PublishSubscribe`、`TopicRole.SubscribeOnly`、`TopicRole.PublishOnly`の3つの管理ロールがあります。カスタムロールはサポートされていません。SubscribeOnlyロールを使用するとトピックの購読のみが可能になり、PublishSubscribeロールを使用するとトピックの発行と購読が可能になり、PublishOnlyロールを使用するとトピックの発行のみが可能になります。
キャッシュでは、そのキャッシュの名前空間内のトピックのみがパーミッションによって許可されます。これは組み込みの `AllCaches` 値またはキャッシュを指定する文字列に設定することができます。

トピックには、組み込みの `AllTopics` 値を設定することができます。これは、cache で定義されているキャッシュ内のすべてのトピックにアクセスできるようにするもので、特定のトピック名を文字列で指定することもできます。

#### TopicPermissionオブジェクトのTokenScopeの例

これは、TopicPermissions だけで PermissionScope を作成する例です。

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

## DisposableTokenScope objects

| Name            | Type                                      | Description                                  |
| --------------- |-------------------------------------------| -------------------------------------------- |
| permissions           | List \<[DisposableTokenCachePermission](#disposabletokencachepermissions)&nbsp;&nbsp;\|&nbsp;&nbsp;[Permission](#permission-objects)\> | 新しいトークンに付与するパーミッション|

DisposableTokenScope オブジェクトは、[CachePermission](#cachepermission)、[TopicPermission](#topicpermission)、または [DisposableTokenCachePermission](#disposabletokencachepermissions) タイプのパーミッション・オブジェクトを受け入れます。

### DisposableTokenCachePermissions

DisposableTokenCachePermission は CachePermission を拡張したもので、CachePermission と同じフィールドを持ちますが、`item` フィールドが追加されています。

例えば、キーまたはキープレフィックスを表す文字列に `item` を設定すると、特定のキーまたはプレフィックスで始まるキーのセットのみにアクセスを制限できます。別の方法として、`item` を AllCacheItems に設定すると、通常の CachePermission と同じパーミッションのセットが作成されます。

| Name            | Type                 | Description                                                                                                      |
| --------------- |----------------------|------------------------------------------------------------------------------------------------------------------|
| role           | ReadOnly&nbsp;&nbsp;\|&nbsp;&nbsp;ReadWrite&nbsp;&nbsp;\|&nbsp;&nbsp;WriteOnly | アクセス許可の種類                                                               |
| cache          | `AllCaches`&nbsp;&nbsp;\|&nbsp;&nbsp;`CacheName` | パーミッションは `CacheName` オブジェクトまたは `AllCaches` 組み込みの値を使用して、セレクトキャッシュの名前で制限することができます。 |
| item          | `AllCacheItems`&nbsp;&nbsp;\|&nbsp;&nbsp;`Key`&nbsp;&nbsp;\|&nbsp;&nbsp;`KeyPrefix` | パーミッションは、`Key` または `KeyPrefix` オブジェクト、あるいは `AllCachesItems` 組み込みの値を使用して、名前によるキャッシュアイテムの選択を制限することができます |

ロールの場合、`CacheRole.ReadOnly` を使用すると、CacheSelector で定義されたキャッシュ上のすべての読み取りデータプレーン API (`get`、`DictionaryGetField` など) にアクセスできるようになります。`CacheRole.ReadWrite` を使用すると、CacheSelector で定義されたキャッシュ上のすべての読み取りデータプレーン API および書き込みデータプレーン API にアクセスできるようになります。`CacheRole.WriteOnly` を使用すると、CacheSelector で定義されたキャッシュのすべての書き込みデータプレーン API にアクセスできるようになります。`CacheRole.WriteOnly` は、`SetIf*` のような条件付き書き込みを意味する API や、コレクションの更新状態に関する情報を返す API (`ListPushBack` は新しい長さを返すなど) には使用できません。カスタムロールはサポートされていません。

キャッシュの場合、値は組み込みの `AllCaches` か、このパーミッションのキャッシュ名を含む文字列となります。

item の場合、値は組み込みの `AllCacheItems` か、このパーミッションが対象とするキャッシュアイテムのキーまたはキープレフィックスを含む文字列となります。

#### Example DisposableTokenScope object

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
---
## FAQ

<details>
    <summary>キャッシュやトピックのパーミッションにカスタムロールを作成できますか?</summary>

   各権限について、上記の管理された役割のみをサポートしています。

</details>

<details>
    <summary>これらのトークンは、MomentoのコントロールプレーンAPIへのアクセスを制御しますか</summary>？

    [GenerateApiKey](#generateapikey-api)APIで生成されたアクセストークンは、MomentoのデータプレーンAPIへのアクセスのみを制御します。Momento のコントロールプレーン API にアクセスするためのトークンは、[Momento console](https://console.gomomento.com/) を使用して生成する必要があります。

</details>

:::tip

ここで答えられない質問があれば、[私たちのDiscordサーバー](https://discord.gg/3HkAKjUZGq)に飛び、サポートチャンネルで私たちの専門家に質問してください。

:::
