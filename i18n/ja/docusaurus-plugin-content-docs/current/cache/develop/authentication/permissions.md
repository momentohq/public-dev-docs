---
sidebar_position: 30
title: Permissions and access control
sidebar_label: Permissions
description: Learn about the permissions available when creating your API keys and tokens to control access to Momento resources.
pagination_next: null
---

# パーミッションとアクセス制御

自分のリソースにアクセスできなくなるまでは、楽しいことばかりだ。自分のリソースにアクセスするといえば、それこそ私たちがここで話したいことだ。*人々がアクセスすべきでないものにアクセスするのを阻止することだ。*

注意点として、Momento には 2 つの主要な認証形式があります：

* [API keys](./api-keys.md): 長寿命で耐久性があり、プログラム的に使用できるもの
* [Tokens](./tokens.md): 個人（ユーザーまたはデバイス）による一時的な使用のための、短命で限定された範囲で利用可能なもの

APIキーは[Momentoコンソール](https://console.gomomento.com/tokens)で直接作成できますが、トークンはプログラムで作成する必要があります。ここでは、アクセスコントロールを使ってAPIキーやトークンの権限を制限する場合のオプションについて説明します。

## 範囲

API キーを作成する際には `PermissionScope` オブジェクトを作成します。トークンを作成する際には `TokenScope` オブジェクトを作成します。これらのオブジェクトはほとんど同じだが、1つだけ大きな違いがあります。まず、類似点からみていきます。

### ロール

Momento には、スコープオブジェクトを作成するときに使用する、あらかじめ作成されたロールが用意されています。👇

#### Cache roles

* *readwrite* - キャッシュデータへのフルアクセスを提供します。
* *writeonly* - 書き込み操作（`set`、`sortedSetIncrementScore`、`listPopFront` など）へのアクセスを提供します。
* *readonly* - 読み込み操作 (`get`、`dictionaryFetch`、`setFetch` など) のみへのアクセスを提供します。これらは非破壊的な操作です。

#### Topic roles

* *publishsubscribe* - トピックデータへのフルアクセスを提供します。
* *publishonly* - 書き込み操作のみへのアクセスを提供します。(`publish`)
* *subscribeonly* - 読み取り操作のみへのアクセスを提供します。 (`subscribe`)

### Cache

信じられないかもしれませんが、キャッシュ*と*トピックのパーミッションを作成する際には、キャッシュ名を指定する必要があります。トピックは技術的にはキャッシュそのものを使用しませんが、一種の名前空間としてキャッシュを使用します。そのため、スコープを構築する際には、何があってもキャッシュ名を指定する必要があります。

キャッシュの名前を文字列として指定するか、SDK からインポートした値を使用できます。トピック名も同様です。

#### Cache Examples

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

or

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

#### Topic examples

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

or

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

### 項目レベルの制限

これまで説明してきたことはすべて、APIキーとトークンの両方に適用されます。しかしここで、トークン特有の制限について説明する必要があります： アクセス制御のための**項目レベルの制限**についてです。

キャッシュへのアクセスを許可する場合、個々のキーや特定のプレフィックスで始まるキーにアクセスを制限することができます。ユーザーをキャッシュ内の2つの特定のキーに制限するパーミッション・セットの例を見てみましょう。

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

これは、`mappings`キーへの*read only*アクセスと、*demo*キャッシュ内の`hits`キーへの*read and write*アクセスを明示的に許可することになります。複数のキーに対して同じロールを付与したい場合は、上記と同様にパーミッションセットを作成し、必要なロールを指定します。1つのパーミッションに複数のキーを渡すことはできません。

キーの範囲にアクセス権を与えたい場合は、プレフィックスを使用することもできます。プレフィックスとは、特定の文字列で始まるすべてのキーにアクセス権を与えるという意味です。マルチテナントのシステムで、テナントIDを含む形式でキャッシュキーを持っていたとしましょう。特定のテナントのすべてのキーへの読み取りアクセスを許可する権限セットを作成するには、次のようにします：

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

このパーミッション・セットで生成されたトークンの利用者は、`MYTENANTID-`で始まるキーからの読み取りが許可されます。異なるテナントIDで始まるキーから読み込もうとすると、認証エラーが返されます。

