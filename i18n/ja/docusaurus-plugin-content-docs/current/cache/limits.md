---
sidebar_position: 8
sidebar_label: Limits & Availability
title: Limits & Availability
pagination_next: null
description: Explore Momento Cache service limits, the default values, and how to get them changed if you need.
hide_title: true
---

# Momento Cacheのサービス制限

Momento Cache は、サービス・リソースに関して、自分自身と顧客を保護しようとしています。そのために、すべてのアカウント、キャッシュ、トピックにはサービス制限、または私たちが "ガードレール" と呼ぶもの (カーブの多い山道のようなもの) があります。このページでは、デフォルトのサービス制限の概要を説明します：

| Momento Cache limits                                                                                               | Value          |
|--------------------------------------------------------------------------------------------------------------------|----------------|
|  キャッシュあたりのAPIレート（データプレーン）                                                                                       | 100 operations/s |
| 顧客ごとのAPIレート（コントロールプレーン）                                                                              | 5 operations/s   |
| キャッシュあたりのスループット                                                                                               | 1MB/s          |
| 最大アイテムサイズ                                                                                                  | 1MB            |
| 最大キャッシュ数（アカウントごと）                                                                                      | 10             |
| 生存時間（TTL）                                                                                                 | 1 day          |
|[コレクション(CDT)](https://docs.momentohq.com/develop/datatypes#collection-data-types-cdts)要素のサイズ制限あたり | 128KB          |
| [APIキーまたはトークン](./develop/api-reference/auth.md)ごとのパーミッション(ハードリミット)                               | 10             |

# Region Availability

ご希望のプロバイダーや地域がリストにない場合は、[お問い合わせ](mailto:support@momentohq.com)までご連絡ください。

## Region Availability (AWS)

| Region Name          | Region         |
|----------------------|----------------|
| US East (N.Virginia) | us-east-1      |
| US East (Ohio)       | us-east-2      |
| US West (Oregon)     | us-west-2      |
| Europe (Ireland)     | eu-west-1      |
| Europe (Frankfurt)   | eu-central-1   |
| Asia (Mumbai)        | ap-south-1     |
| Asia (Tokyo)         | ap-northeast-1 |
| Asia (Singapore)     | ap-southeast-1 |

## ソフトな制限とサポート

このページの制限は、特に明記されていない限り、変更可能なソフトリミットです。制限の調整が必要な場合は、[Momento Support](mailto:support@momentohq.com) までご連絡ください。その際、ログインメールアドレス、変更するキャッシュの名前、キャッシュがあるクラウドとリージョン（例：AWS eu-west-1）、どのリミットを増やしたいかを明記してください。

## 操作

サービスの制限は、1秒間に実行される操作の数に基づいています。キャッシュ・データ・プレーンAPIの中には、1回のリクエストで複数の処理を実行できるものもあります。

マルチエレメント操作はより効率的であるため、これらのAPIのリミットコストは**2:1の比率**で割り引かれます。つまり、2つの要素ごとに1つの操作としてカウントされます。例えば、1つまたは2つの要素を追加する `SetAddElements` リクエストは1オペレーションかかりますが、3つまたは4つの要素では2オペレーションかかります。

以下の表は、すべてのキャッシュAPIについて、操作回数の計算方法を示しています。

| API Name                 | Multi-Element API | Operations                                                        |
| ------------------------ | ----              | ------------                                                      |
| Set                      |                   | 1                                                                 |
| Get                      |                   | 1                                                                 |
| Delete                   |                   | 1                                                                 |
| Increment                |                   | 1                                                                 |
| Ping                     |                   | 1                                                                 |
| ItemGetType              |                   | 1                                                                 |
| KeyExists                |                   | 1                                                                 |
| KeysExist                | ✅                | Number of keys in request/2                                       |
| SetIfNotExists           |                   | 1                                                                 |
| UpdateTtl                |                   | 1                                                                 |
| IncreaseTtl              |                   | 1                                                                 |
| DecreaseTtl              |                   | 1                                                                 |
| ItemGetTtl               |                   | 1                                                                 |
| DictionaryFetch          | ✅                | Number of fields in response/2, or 1 if dictionary is not found   |
| DictionaryGetField       |                   | 1                                                                 |
| DictionaryGetFields      | ✅                | Number of fields in request/2                                     |
| DictionaryIncrement      |                   | 1                                                                 |
| DictionaryRemoveField    |                   | 1                                                                 |
| DictionaryRemoveFields   | ✅                | Number of fields in request/2                                     |
| DictionarySetField       |                   | 1                                                                 |
| DictionarySetFields      | ✅                | Number of fields in request/2                                     |
| DictionaryLength         |                   | 1                                                                 |
| ListFetch                | ✅                | Number of elements in response/2, or 1 if list is not found       |
| ListConcatenateBack      | ✅                | Number of elements in request/2                                   |
| ListConcatenateFront     | ✅                | Number of elements in request/2                                   |
| ListLength               |                   | 1                                                                 |
| ListPopBack              |                   | 1                                                                 |
| ListPopFront             |                   | 1                                                                 |
| ListPushBack             |                   | 1                                                                 |
| ListPushFront            |                   | 1                                                                 |
| ListRemoveValue          |                   | 1                                                                 |
| ListRetain               |                   | 1                                                                 |
| SetAddElement            |                   | 1                                                                 |
| SetAddElements           | ✅                | Number of elements in request/2                                   |
| SetFetch                 | ✅                | Number of elements in response/2, or 1 if set is not found        |
| SetRemoveElement         |                   | 1                                                                 |
| SetRemoveElements        | ✅                | Number of elements in request/2                                   |
| SetContainsElement       |                   | 1                                                                 |
| SetContainsElements      | ✅                | Number of elements in request/2                                   |
| SetLength                |                   | 1                                                                 |
| SortedSetPutElement      |                   | 1                                                                 |
| SortedSetPutElements     | ✅                | Number of elements in request/2                                   |
| SortedSetFetchByRank     | ✅                | Number of elements in response/2, or 1 if sorted set is not found |
| SortedSetFetchByScore    | ✅                | Number of elements in response/2, or 1 if sorted set is not found |
| SortedSetGetScore        |                   | 1                                                                 |
| SortedSetGetScores       | ✅                | Number of elements in request/2                                   |
| SortedSetRemoveElement   |                   | 1                                                                 |
| SortedSetRemoveElements  | ✅                | Number of elements in request/2                                   |
| SortedSetGetRank         |                   | 1                                                                 |
| SortedSetIncrementScore  |                   | 1                                                                 |
| SortedSetLength          |                   | 1                                                                 |
| SortedSetLengthByScore   |                   | 1                                                                 |

:::note
アカウントに対して課金される操作の数をさらに減らすには、[read concern](./learn/how-it-works/read-concern) ヘッダーを `Express` に設定することを検討してください。こうすることで、課金される操作回数をデフォルト値の0.8倍に減らすことができ、頻繁にアクセスされるキーの待ち時間を減らすことができます。
:::
