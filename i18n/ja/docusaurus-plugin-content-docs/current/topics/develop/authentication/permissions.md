---
sidebar_position: 30
title: Permissions
sidebar_label: Permissions
description: APIキーとトークンを作成する際に利用可能な権限について説明します。
---

# Permissions

自分のリソースにアクセスできなくなるまでは、楽しいことばかりです。リソースにアクセスするといえば、まさにここで話すことでもあります。

注意点として、Momentoでは主に2つの認証方法があります：

* [API キー](./api-keys.md): プログラムで使用するための、長寿命で耐久性があります。
* [トークン](./tokens.md): 個人 (ユーザーまたはデバイス) が一時的に使用する、短命で限定された範囲のものです。

APIキーは[Momento コンソール](https://console.gomomento.com/tokens)で直接作成できますが、トークンはプログラムで作成する必要があります。
APIキーやトークンの権限を制限する際のオプションについてをここでは説明します。

## Scope

API キーを作成する際には `PermissionScope` オブジェクトを作成します。
トークンを作成する際には `PermissionScope` オブジェクトを作成します。これらのオブジェクトはほとんど同じですが、1つだけ大きな違いがあります。
まず、類似点です。

### Roles

Momento には、スコープオブジェクトを作成する際に使用する、事前に作成されたロールが用意されています 。👇

#### Cache roles

* *readwrite* - キャッシュデータへのフルアクセスを提供します。
* *writeonly* - 書き込み操作のみにアクセスできます(`set`、`sortedSetIncrementScore`、`listPopFront` など)。
* *readonly* - 読み込み操作 (`get`, `dictionaryFetch`, `setFetch` など) のみにアクセスできます。これらは非破壊的な操作です。

#### Topic roles

* *publishsubscribe* - トピックデータへのフルアクセスを提供します。
* *publishonly* - 書き込み操作 (`publish`) のみにアクセスできます。
* *subscribeonly* - 読み取り操作 (`subscribe`) のみにアクセスできます。

### Cache

信じられないかもしれませんが、キャッシュとトピックのパーミッションを作成する際には、キャッシュ名を指定する必要があります。
トピックは技術的にはキャッシュそのものを使用しませんが、一種の名前空間としてキャッシュを使用します。
そのため、スコープを構築する際には、どのような場合でもキャッシュ名を指定する必要があります。

キャッシュ名は文字列で指定するか、SDKからインポートした値を使用します。トピック名も同様です。

#### キャッシュの例

```json
{
  "permissions": [
    {
      "role": "readonly",
      "cache": "demo"
    }
  ]
}
```

もしくは

```JavaScript
import { AllCaches } from '@gomomento/sdk';

const scope = {
  permissions: [
    {
      role: 'readonly',
      cache: AllCaches
    }
  ]
};
```

#### トピックの例

```json
{
  "permissions": [
    {
      "role": "readonly",
      "cache": "demo",
      "topic": "test"
    }
  ]
}
```

もしくは

```JavaScript
import { AllCaches, AllTopics } from '@gomomento/sdk';

const scope = {
  permissions: [
    {
      role: 'readonly',
      cache: AllCaches,
      topic: AllTopics
    }
  ]
};
```

### アイテムレベルの制限

これまで説明してきたことはすべて、APIキーとトークンの両方に適用されます。
しかしここで、トークン特有の制限について説明する必要があります。： **アイテムレベルの制限**です。

キャッシュへのアクセスを許可するとき、個々のキーや特定のプレフィックスで始まるキーにアクセスを制限することができます。
キャッシュ内の特定の2つのキーにユーザーを制限するパーミッションをセットする例を見てみましょう。

```json
{
  "permissions": [
    {
      "role": "readonly",
      "cache": "demo",
      "item": {
        "key": "mappings"
      }
    },
    {
      "role": "readwrite",
      "cache": "demo",
      "item": {
        "key": "hits"
      }
    },
  ]
}
```

これは、`mappings`キーへ*read only*でアクセスし、*demo*キャッシュ内の`hits`キーへ*read and write*でアクセスすることを明示的に許可することになります。
複数のキーに対して同じロールを付与したい場合は、上記と同様にパーミッションのセットを作成し、必要なロールを指定します。1つのパーミッションに複数のキーを渡すことはできません。

キーの範囲でアクセスを許可したい場合は、プレフィックスを使用することもできます。プレフィックスとは、特定の文字列で始まるすべてのキーにアクセスを許可するという意味です。マルチテナントのシステムで、テナントIDを含む形式でキャッシュキーを持っていたとしましょう。特定のテナントのすべてのキーへの読み取りアクセスを許可する権限セットを作成するには、次のようにします：

```json
{
  "permissions": [
    {
      "role": "readonly",
      "cache": "demo",
      "item": {
        "keyPrefix": "MYTENANTID-"
      }
    }
  ]
}
```

この権限セットで生成されたトークンの利用者は、`MYTENANTID-`で始まるキーからの読み取りが許可されます。異なるテナントIDで始まるキーから読み込もうとすると、認証エラーになります。

