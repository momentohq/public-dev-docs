---
sidebar_position: 4
sidebar_label: Service Limits
title: Service limits
pagination_next: null
description: Explore Momento Cache service limits, the default values, and how to get them changed if you need.
---

# Momento Cacheのサービス制限



| Momento Cacheの制限                                                                                      | 値                |
| ----------------------------------------------------------------------------------------------------- | ---------------- |
| キャッシュあたりのAPIレート（データプレーン）                                                                              | 100 operations/s |
| 顧客ごとのAPIレート（コントロールプレーン）                                                                               | 5 operations/s   |
| キャッシュあたりのスループット                                                                                       | 1MB/s            |
| 最大アイテム・サイズ                                                                                            | 1MB              |
| 最大キャッシュ数（アカウントあたり）                                                                                    | 10               |
| ライブ時間 (TTL)                                                                                           | 1日               |
| 1件あたりの [コレクション (CDT)](https://docs.momentohq.com/develop/datatypes#collection-data-types-cdts)要素サイズ制限 | 128KB            |
| パーミッション [APIキーまたはトークン](./../develop/api-reference/auth.md)  (ハードリミット）                                 | 10               |

## ソフトリミットとサポート

このページに記載されている制限は、特に明記されていない限り、変更可能なソフトな制限です。制限の調整が必要な場合は、[Momento サポートまで](mailto:support@momentohq.com)ご連絡ください。その際、ログインメールアドレス、変更するキャッシュの名前、キャッシュのあるクラウド+リージョン（例：AWS eu-west-1）、制限の追加を希望する制限を明記してください。

##







| API Name                | Multi-Element API | Operations                                                        |
| ----------------------- | ----------------- | ----------------------------------------------------------------- |
| Set                     |                   | 1                                                                 |
| Get                     |                   | 1                                                                 |
| Delete                  |                   | 1                                                                 |
| Increment               |                   | 1                                                                 |
| Ping                    |                   | 1                                                                 |
| ItemGetType             |                   | 1                                                                 |
| KeyExists               |                   | 1                                                                 |
| KeysExist               | ✅                 | Number of keys in request/2                                       |
| SetIfNotExists          |                   | 1                                                                 |
| UpdateTtl               |                   | 1                                                                 |
| IncreaseTtl             |                   | 1                                                                 |
| DecreaseTtl             |                   | 1                                                                 |
| ItemGetTtl              |                   | 1                                                                 |
| DictionaryFetch         | ✅                 | Number of fields in response/2, or 1 if dictionary is not found   |
| DictionaryGetField      |                   | 1                                                                 |
| DictionaryGetFields     | ✅                 | Number of fields in request/2                                     |
| DictionaryIncrement     |                   | 1                                                                 |
| DictionaryRemoveField   |                   | 1                                                                 |
| DictionaryRemoveFields  | ✅                 | Number of fields in request/2                                     |
| DictionarySetField      |                   | 1                                                                 |
| DictionarySetFields     | ✅                 | Number of fields in request/2                                     |
| DictionaryLength        |                   | 1                                                                 |
| ListFetch               | ✅                 | Number of elements in response/2, or 1 if list is not found       |
| ListConcatenateBack     | ✅                 | Number of elements in request/2                                   |
| ListConcatenateFront    | ✅                 | Number of elements in request/2                                   |
| ListLength              |                   | 1                                                                 |
| ListPopBack             |                   | 1                                                                 |
| ListPopFront            |                   | 1                                                                 |
| ListPushBack            |                   | 1                                                                 |
| ListPushFront           |                   | 1                                                                 |
| ListRemoveValue         |                   | 1                                                                 |
| ListRetain              |                   | 1                                                                 |
| SetAddElement           |                   | 1                                                                 |
| SetAddElements          | ✅                 | Number of elements in request/2                                   |
| SetFetch                | ✅                 | Number of elements in response/2, or 1 if set is not found        |
| SetRemoveElement        |                   | 1                                                                 |
| SetRemoveElements       | ✅                 | Number of elements in request/2                                   |
| SetContainsElement      |                   | 1                                                                 |
| SetContainsElements     | ✅                 | Number of elements in request/2                                   |
| SetLength               |                   | 1                                                                 |
| SortedSetPutElement     |                   | 1                                                                 |
| SortedSetPutElements    | ✅                 | Number of elements in request/2                                   |
| SortedSetFetchByRank    | ✅                 | Number of elements in response/2, or 1 if sorted set is not found |
| SortedSetFetchByScore   | ✅                 | Number of elements in response/2, or 1 if sorted set is not found |
| SortedSetGetScore       |                   | 1                                                                 |
| SortedSetGetScores      | ✅                 | Number of elements in request/2                                   |
| SortedSetRemoveElement  |                   | 1                                                                 |
| SortedSetRemoveElements | ✅                 | Number of elements in request/2                                   |
| SortedSetGetRank        |                   | 1                                                                 |
| SortedSetIncrementScore |                   | 1                                                                 |
| SortedSetLength         |                   | 1                                                                 |
| SortedSetLengthByScore  |                   | 1                                                                 |
