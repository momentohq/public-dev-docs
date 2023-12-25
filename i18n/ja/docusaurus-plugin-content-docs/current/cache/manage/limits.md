---
sidebar_position: 4
sidebar_label: Service Limits
title: Service limits
pagination_next: null
description: Explore Momento Cache  service limits, the default values, and how to get them changed if you need.
---

# Momento Cacheのサービス制限

Momento CacheとMomento Topicsは、サービスリソースに関して、自社と顧客を保護しようとしています。そのため、すべてのアカウント、キャッシュ、トピックにはサービス制限、または私たちが "ガードレール" と呼んでいるもの (カーブの多い山道のようなもの) があり、オペレーションを可能な限り円滑に実行できるようにしています。このページでは、デフォルトのサービス制限の概要を説明します：

| Momento Cache limits                                                                                               | Value          |
|--------------------------------------------------------------------------------------------------------------------|----------------|
| キャッシュあたりのAPIレート（データプレーン）                                                                                   | 100 requests/s |
| 顧客ごとのAPIレート（コントロールプレーン）|5リクエスト/秒  |
| キャッシュあたりのスループット|1MB/秒          |
| アイテムの最大サイズ|1MB           |
| 最大キャッシュ数（アカウントあたり）|10             |
| 生存時間（TTL）|1日          |
| [コレクション(CDT)](https://docs.momentohq.com/develop/datatypes#collection-data-types-cdts)ごとの要素サイズ制限|128KB          |
| [APIキーまたはトークン](./../develop/api-reference/auth.md)ごとのパーミッション (ハードリミット) | 10             |

## ソフト制限とサポート

このページの制限は、特に明記されていない限り、変更可能なソフトリミットです。制限の調整が必要な場合は、[Momento Support](mailto:support@momentohq.com) までご連絡ください。その際、ログインメールアドレス、変更するキャッシュの名前、キャッシュがあるクラウドとリージョン（例：AWS eu-west-1）、どのリミットを増やしたいかを明記してください。

## 操作
サービス制限は、1秒間に実行される操作の数に基づいています。キャッシュ・データ・プレーンAPIの中には、1回のリクエストで複数の処理を実行できるものがあります。バッチ操作はより効率的であるため、これらのAPIの制限コストは2:1の比率で割り引かれます。つまり、2つの要素ごとに1つの操作としてリミッターにカウントされます。例えば、1つまたは2つの要素を追加する`SetAddElements`リクエストは1つのオペレーションを要しますが、3つまたは4つの要素では2つのオペレーションを要します。

以下の表は、すべてのキャッシュAPIについて、操作回数の計算方法を示しています。

| API                      | 操作                                                     |
| ------------------------ | ------------                                                    |
| Set                      | 1                                                               |
| Get                      | 1                                                               |
| Delete                   | 1                                                               |
| Increment                | 1                                                               |
| Ping                     | 1                                                               |
| ItemGetType              | 1                                                               |
| KeyExists                | 1                                                               |
| KeysExist                | リクエストに含まれるキーの数                                       |
| SetIfNotExists           | 1                                                               |
| UpdateTtl                | 1                                                               |
| IncreaseTtl              | 1                                                               |
| DecreaseTtl              | 1                                                               |
| ItemGetTtl               | 1                                                               |
| DictionaryFetch          | レスポンスに含まれるフィールドの数、もしくは見つからない場合1   |
| DictionaryGetField       | 1                                                               |
| DictionaryGetFields      | リクエストに含まれるフィールドの数                                     |
| DictionaryIncrement      | 1                                                               |
| DictionaryRemoveField    | 1                                                               |
| DictionaryRemoveFields   | リクエストに含まれるフィールドの数                                       |
| DictionarySetField       | 1                                                               |
| DictionarySetFields      | リクエストに含まれるフィールドの数                                        |
| DictionaryLength         | 1                                                               |
| ListFetch                | レスポンスに含まれるエレメントの数、もしくは見つからない場合1       |
| ListConcatenateBack      | リクエストに含まれるエレメントの数                                   |
| ListConcatenateFront     | リクエストに含まれるエレメントの数   |
| ListLength               | 1                                                               |
| ListPopBack              | 1                                                               |
| ListPopFront             | 1                                                               |
| ListPushBack             | 1                                                               |
| ListPushFront            | 1                                                               |
| ListRemoveValue          | 1                                                               |
| ListRetain               | 1                                                               |
| SetAddElement            | 1                                                               |
| SetAddElements           | リクエストに含まれるエレメントの数                                     |
| SetFetch                 | レスポンスに含まれるエレメントの数、もしくは見つからない場合1        |
| SetRemoveElement         | 1                                                               |
| SetRemoveElements        | リクエストに含まれるエレメントの数                                    |
| SetContainsElement       | 1                                                               |
| SetContainsElements      | リクエストに含まれるエレメントの数                                    |
| SetLength                | 1                                                               |
| SortedSetPutElement      | 1                                                               |
| SortedSetPutElements     |リクエストに含まれるエレメントの数                                     |
| SortedSetFetchByRank     | レスポンスに含まれるエレメントの数、もしくは見つからない場合1 |
| SortedSetFetchByScore    | レスポンスに含まれるエレメントの数、もしくは見つからない場合1 |
| SortedSetGetScore        | 1                                                               |
