---
sidebar_position: 1
sidebar_label: Python
sidebar_class_name: sidebar-item-python-cheat-sheet
title: Python + Momento Cache チートシート
description: Python で Momento Cache を使ってコーディングを始めるための全てがここにあります。
---

# Python + Momento Cache チートシート

このページでは、Python で Momento Cache を手早く始めてみたい時に必要となる基本的な API 呼出しを紹介しています。

:::tip

このページにある全ての関数を1つの python ファイルに入れれば、他の python コードからインポートして呼出しできる関数のコレクションができあがります。さらにこのコードを本番環境で使う場合には、 print() 呼出しをロギングライブラリ (`import logging`) に置き換えると良いでしょう。全ての定義を含むクラスファイルを見たければ、[こちらをクリックしてください。](../../../../../../../static/code/cheat-sheets/MomentoBasics.py)

:::

## ライブラリをインポートして、CacheClient オブジェクトを生成する

このコードでは必要なインポートを行い、クラス定義をして、他の関数から呼び出される CacheClient を生成しています。

```python
from datetime import timedelta
from momento import CacheClient, Configurations, CredentialProvider
from momento.responses import CacheGet, CacheSet, CreateCache, ListCaches, CacheIncrement

import os

class MomentoBasics:
  def client():
    momento_auth_token = CredentialProvider.from_environment_variable('MOMENTO_AUTH_TOKEN')
    ttl  = timedelta(seconds=int(os.getenv('MOMENTO_TTL_SECONDS', '60')))
    config = {
      'configuration': Configurations.Laptop.v1(),
      'credential_provider': momento_auth_token,
      'default_ttl':  ttl
    }
    return CacheClient(**config)
```

## Momento Cache に新しいキャッシュを作成する

この関数で、ご自身のアカウントに新しいキャッシュを作成できます。

```python
  def create_cache(cache_name) -> None:
    with MomentoBasics.client() as client:
      resp = client.create_cache(cache_name)
      match resp:
        case CreateCache.Success():
            print("Cache created.")
        case CreateCache.Error() as error:
            print(f"Error creating cache: {error.message}")
        case _ as error:
            print(f"Unreachable with {error.message}")
```

## アカウントにあるキャッシュの一覧を取得する

この例では、上の client 関数を使ってクライアントオブジェクトを取得し、アカウントにある全てのキャッシュを一覧するために使っています。

```python
  def list_caches() -> None:
      print("Listing caches:")
      with MomentoBasics.client() as client:
        list_caches_response = client.list_caches()
        match list_caches_response:
            case ListCaches.Success() as success:
                for cache_info in success.caches:
                    print(f"- {cache_info.name!r}")
            case ListCaches.Error() as error:
                print(f"Error creating cache: {error.message}")
            case _:
                print("Unreachable")
        print("")
```

## キャッシュに項目を書き込む

セット操作を行う単純な例です。 client.set 呼出しでは TTL をオプションで設定できます。もし指定すると、クライアントオブジェクトの持つデフォルト値ではなく指定した値が使われます。

```python
  def set(cache_name, key, value, ttl=None):
    with MomentoBasics.client() as client:
      resp = client.set(cache_name, key, value, ttl)
      match resp:
        case CacheSet.Success():
            pass
        case CacheSet.Error() as error:
            print(f"Error setting value: {error.message}")
        case _:
            print("Unreachable")
```

## キャッシュから項目を読みだす

こちらはキャッシュから項目を読み出す単純な例です。

```python
  def get(cache_name, key):
    with MomentoCounter.client() as client:
      resp = client.get(cache_name, key)
      match resp:
        case CacheGet.Hit():
            print("value is " + resp.value_string)
        case CacheGet.Miss() as error:
            print(f"Error getting key: {error.message}")
        case _:
            print("Unreachable")
```

## キャッシュにある項目の値を増減させる

キーに対応する値を増減させる例です。正もしくは負の整数を渡すことができます。

```python
  def incr(cache_name, key, value:int = 1):
    with MomentoBasics.client() as client:
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
これらの基礎的な API 呼出しに加えて、Momento API 呼出しの全ての一覧がある [API リファレンスページ](../../api-reference/index.mdx)もご覧下さい。
:::

## さらなる利用に向けて

アプリケーションの挙動によっては、複数の API 呼出しの間で CacheClient オブジェクトを再利用した方が良い場合があるでしょう。その様な場合には、 client() 関数の定義を以下の様に変えて、CacheClient オブジェクトを返す様にすると良いでしょう:

```python
def client() -> CacheClient:
```

そうしたら、他の関数定義も変更して、CacheClient オブジェクトを引数で受け取るようにし、自身でオブジェクトを生成しない様にしましょう。
