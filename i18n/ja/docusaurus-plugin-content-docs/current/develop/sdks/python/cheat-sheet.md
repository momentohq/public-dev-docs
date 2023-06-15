---
sidebar_position: 1
sidebar_label: チートシート
sidebar_class_name: sidebar-item-python-cheat-sheet
title: Python + Momento Cache のためのチートシート
description: Python と Momento Cache を使ってコーディングするための全て
---

# Momento Cache を Python で使うためのチートシート
このページでは、Momento Cache を Python で素早く使ってみたい方のために必要となる基礎的な API 呼出しを解説しています。

:::tip

もしこのページにある全ての関数を1つの python ファイルにまとめた場合、それが他の python コードからインポートして呼び出すことができる関数の集合として使うことができます。加えて、もしこのコードを本番環境で利用する場合には、print() 呼出しを python のロギングライブラリ (`import logging`) に置き換えることになるでしょう。[こちらをクリックして](../../../../../../../static/code/cheat-sheets/MomentoBasics.py)全ての関数を持ったクラスファイルもご確認下さい。

:::

## ライブラリをインポートして、CacheClient オブジェクトを返却して接続する
このコードで、必要なインポート、そしてそれぞれの他の関数が呼び出す必要のある CacheClient を生成して、メイン関数をセットアップします。

```python
from datetime import timedelta
from momento import CacheClient, Configurations, CredentialProvider
from momento.responses import CacheGet, CacheSet, CreateCache, ListCaches, CacheIncrement

import os

def create_client():
  momento_auth_token = CredentialProvider.from_environment_variable('MOMENTO_AUTH_TOKEN')
  ttl  = timedelta(seconds=int(os.getenv('MOMENTO_TTL_SECONDS', '600')))
  config = {
    'configuration': Configurations.Laptop.v1(),
    'credential_provider': momento_auth_token,
    'default_ttl':  ttl
  }
  return CacheClient(**config)
```

## Momento Cache に新しいキャッシュを作成する
この関数を使ってアカウント内に新しいキャッシュを作成します。
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

## アカウント内の既存のキャッシュをリストする
この例では、上で作った client 関数を使ってクライアントオブジェクトを使い、このアカウントにある全てのキャッシュをリストするために使っています。
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
## 項目をキャッシュに書き込む
書込み操作を行うシンプルな例です。client.set 呼出しでは、TTL はオプショナルです。もし TTL を渡すと、クライアント接続オブジェクトに設定されたデフォルトの TTL 値が上書きされます。
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

## キャッシュから項目を読み出す
これは、キャッシュから項目を取得するためのシンプルな読み出し操作です。
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

## キャッシュ内の項目の値を増加する
キーに対する値を増加させる例です。正または負の整数を渡すことができます。
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
これらの API 呼出し以上のものは、[API リファレンスページ](/develop/api-reference/index.mdx)で Momento API 呼出しの全種類の詳しい情報をご確認下さい。
:::

## 利用に関する覚書
これらの関数では、まず CacheClient オブジェクトを返す `create_client()` を呼び出します。そしてそのオブジェクトを後続の関数に渡します。この方法では、Momento への複数の呼出しに対して CacheClient を再利用するので、より効率の良い呼出しになります。[こちらクリックして](../../../../../../../static/code/cheat-sheets/MomentoBasics.py)全ての関数を持ったクラスファイルもご確認下さい。