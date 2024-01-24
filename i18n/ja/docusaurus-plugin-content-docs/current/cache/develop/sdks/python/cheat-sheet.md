---
sidebar_position: 1
sidebar_label: Cheat Sheet
title: Cheat Sheet for Python + Momento Cache
description: Everything to get you going with coding using Python and Momento Cache
---

# PythonとMomentoキャッシュのチートシート

PythonとMomento Cacheをすぐに使い始める必要がある場合、このページには必要な基本的なAPIコールが含まれています。

:::tip

このページのすべての関数を1つのpythonファイルにまとめると、他のpythonコードからインポートして呼び出すことができる関数の中心的なコレクションを持つことができます。さらに、このコードを本番で使用する場合、print() 呼び出しを python の logging ライブラリ (`import logging`) を使用したものに置き換えることができます。[ここをクリックしてください](@site/static/code/cheat-sheets/MomentoBasics.py)。

:::

## ライブラリをインポートして接続し、CacheClient オブジェクトを返します

このコードでは、必要なインポート、クラス定義、および他の各関数が呼び出す必要のある CacheClient インスタンス化を使用してクラスを設定します。

```python
from datetime import timedelta
from momento import CacheClient, Configurations, CredentialProvider
from momento.responses import CacheGet, CacheSet, CreateCache, ListCaches, CacheIncrement

import os

def create_client():
  momento_auth_token = CredentialProvider.from_environment_variable('MOMENTO_API_KEY')
  ttl  = timedelta(seconds=int(os.getenv('MOMENTO_TTL_SECONDS', '600')))
  config = {
    'configuration': Configurations.Laptop.v1(),
    'credential_provider': momento_auth_token,
    'default_ttl':  ttl
  }
  return CacheClient.create(**config)
```

## Momento Cacheに新しいキャッシュを作成する
この機能を使用して、アカウントに新しいキャッシュを作成します。
```python
def create_cache(client, cache_name: str) -> None:
  resp = client.create_cache(cache_name)
  match resp:
    case CreateCache.Success():
        print("Cache created.")
    case CreateCache.Error() as error:
        print(f"Error creating cache: {error.message}")
    case _ as error:
        print(f"Unreachable with {error.message}")
```

## アカウントに存在するキャッシュのリストを取得する
この例では、上記のclient関数を使ってclientオブジェクトを取得し、それを使ってこのアカウントのすべてのキャッシュをリストアップします。
```python
def list_caches(client) -> None:
    print("Listing caches:")
    list_caches_response = client.list_caches()
    match list_caches_response:
        case ListCaches.Success() as success:
            for cache_info in success.caches:
                print(f"- {cache_info.name!r}")
        case ListCaches.Error() as error:
            print(f"Error listing caches: {error.message}")
        case _:
            print("Unreachable")
    print("")
```
## キャッシュに項目を書き込む
セット操作の簡単な例。client.set呼び出しでは、TTLはオプションです。TTLを渡すと、クライアント接続オブジェクトで設定されたデフォルトのTTL値が上書きされます。
```python
def set(client, cache_name, key, value, ttl=None):
  resp = client.set(cache_name, key, value, ttl)
  match resp:
    case CacheSet.Success():
        pass
    case CacheSet.Error() as error:
        print(f"Error setting value: {error.message}")
    case _:
        print("Unreachable")
```

## キャッシュからアイテムを読み込む
これは、キャッシュから項目を取得する単純な読み取り操作の例です。
```python
def get(client, cache_name, key):
  resp = client.get(cache_name, key)
  match resp:
    case CacheGet.Hit():
        print("value is " + resp.value_string)
    case CacheGet.Miss() as error:
        print(f"Error getting key: {error.message}")
    case _:
        print("Unreachable")
```

## キャッシュ内の項目の値をインクリメントします
キーの値をインクリメントする例。正または負の整数を渡すことができます。
```python
def incr(client, cache_name, key, value:int = 1):
  resp = client.increment(cache_name, key, value)
  match resp:
    case CacheIncrement.Success():
        pass
    case CacheIncrement.Error() as error:
        print(f"Error incrementing value: {error.message}")
    case _:
        print("Unreachable")
```

:::info
これらの基本的なAPIコール以外にも、MomentoのAPIコールの詳細については、[APIリファレンスページ](./../../api-reference/index.mdx)をチェックしてください。
:::

## 使用上の注意事項
これらの関数では、CacheClient オブジェクトを返す関数 `create_client()` を呼び出します。その後、そのオブジェクトを後続の関数に渡します。こうすることで、Momento への複数の呼び出しで CacheClient を再利用するため、呼び出しがより効率的になります。[ここをクリック](@site/static/code/cheat-sheets/MomentoBasics.py)すると、すべての定義が含まれたファイルを見ることができます。
