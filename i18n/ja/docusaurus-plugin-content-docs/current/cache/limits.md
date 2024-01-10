---
sidebar_position: 8
sidebar_label: Service Limits
title: Service Limits
pagination_next: null
<<<<<<< HEAD:i18n/ja/docusaurus-plugin-content-docs/current/cache/manage/limits.md
description: Explore Momento Cache service limits, the default values, and how to get them changed if you need.
=======
description: Explore Momento Cache  service limits, the default values, and how to get them changed if you need.
hide_title: true
>>>>>>> main:i18n/ja/docusaurus-plugin-content-docs/current/cache/limits.md
---

# Momento Cacheのサービスリミット

Momento Cache は、サービスリソースに関して自社と顧客の保護に努めています。 これを行うために、すべてのアカウント、キャッシュ、トピックにはサービス制限、つまり「ガードレール」と呼ばれるものが設定されており、操作を可能な限りスムーズに適切に実行し続けることができます。 このページでは、デフォルトのサービス制限の概要を説明します。

| Momento Cache リミット         | リミット値          |
|--------------------------------------------------------------------------------------------------------------------|----------------|
| キャッシュあたりのAPIレート（データプレーン）           | 100 requests/s |
| 顧客ごとのAPIレート（コントロールプレーン）|5リクエスト/秒  |
| キャッシュあたりのスループット|1MB/秒          |
| アイテムの最大サイズ|1MB           |
| 最大キャッシュ数（アカウントあたり）|10             |
| 生存時間（TTL）|1日          |
| [コレクション(CDT)](https://docs.momentohq.com/develop/datatypes#collection-data-types-cdts)ごとの要素サイズ制限|128KB          |
| [APIキーまたはトークン](./develop/api-reference/auth.md)ごとのパーミッション (ハードリミット) | 10             |

## ソフトリミットとサポート

このページの制限は、特に指定がない限り変更できるソフト制限です。 制限の調整が必要な場合は、[Momento サポート](mailto:support@momentohq.com) までご連絡ください。 ログインメールアドレス、変更するキャッシュの名前、キャッシュが配置されているクラウド + リージョン (例: AWS eu-west-1)、およびリストのどの制限を増やしたいかを含めてご連絡いただけると幸いです。

## 操作

サービス制限は、1 秒あたりに実行される操作の数に基づいています。 一部のキャッシュデータプレーン API は、1 つのリクエストで複数の操作を実行できます。

複数要素の操作はより効率的であるため、これらの API の制限コストは **2:1 の比率**で割り引かれます。 これは、2 つの要素ごとにリミッターに対する 1 つの操作としてカウントされることを意味します。 たとえば、1 つまたは 2 つの要素を追加する `SetAddElements' リクエストには 1 回の操作が必要ですが、3 つまたは 4 つの要素がある場合は 2 回の操作が必要になります。

次の表は、すべてのキャッシュ API の操作数がどのように計算されるかを示しています。


| API Name                 | Multi-Element API | Operations                                                        |
| ------------------------ | ----              | ------------                                                      |
| Set                      |                   | 1                                                                 |
| Get                      |                   | 1                                                                 |
| Delete                   |                   | 1                                                                 |
| Increment                |                   | 1                                                                 |
| Ping                     |                   | 1                                                                 |
| ItemGetType              |                   | 1                                                                 |
| KeyExists                |                   | 1                                                                 |
| KeysExist                | ✅                | リクエスト内のキーの数/2                                      |
| SetIfNotExists           |                   | 1                                                                 |
| UpdateTtl                |                   | 1                                                                 |
| IncreaseTtl              |                   | 1                                                                 |
| DecreaseTtl              |                   | 1                                                                 |
| ItemGetTtl               |                   | 1                                                                 |
| DictionaryFetch          | ✅                | レスポンスにあるフィールドの数/2、またはdictionaryが見つからない場合は 1   |
| DictionaryGetField       |                   | 1                                                                 |
| DictionaryGetFields      | ✅                | リクエストにあるフィールドの数/2                                     |
| DictionaryIncrement      |                   | 1                                                                 |
| DictionaryRemoveField    |                   | 1                                                                 |
| DictionaryRemoveFields   | ✅                | リクエストにあるフィールドの数/2                                      |
| DictionarySetField       |                   | 1                                                                 |
| DictionarySetFields      | ✅                | リクエストにあるフィールドの数/2                                      |
| DictionaryLength         |                   | 1                                                                 |
| ListFetch                | ✅                | レスポンスにある要素の数/2、またはリストが見つからない場合は 1      |
| ListConcatenateBack      | ✅                | リクエストにある要素の数/2                                   |
| ListConcatenateFront     | ✅                | リクエストにある要素の数/2                                   |
| ListLength               |                   | 1                                                                 |
| ListPopBack              |                   | 1                                                                 |
| ListPopFront             |                   | 1                                                                 |
| ListPushBack             |                   | 1                                                                 |
| ListPushFront            |                   | 1                                                                 |
| ListRemoveValue          |                   | 1                                                                 |
| ListRetain               |                   | 1                                                                 |
| SetAddElement            |                   | 1                                                                 |
| SetAddElements           | ✅                | リクエストにある要素の数/2                                   |
| SetFetch                 | ✅                | レスポンスにある要素の数/2、またはセットが見つからない場合は 1       |
| SetRemoveElement         |                   | 1                                                                 |
| SetRemoveElements        | ✅                | リクエストにある要素の数/2                                   |
| SetContainsElement       |                   | 1                                                                 |
| SetContainsElements      | ✅                | リクエストにある要素の数/2                                   |
| SetLength                |                   | 1                                                                 |
| SortedSetPutElement      |                   | 1                                                                 |
| SortedSetPutElements     | ✅                | リクエストにある要素の数/2                                   |
| SortedSetFetchByRank     | ✅                | レスポンス内の要素の数/2、またはソートされたセットが見つからない場合は 1 |
| SortedSetFetchByScore    | ✅                | レスポンス内の要素の数/2、またはソートされたセットが見つからない場合は 1 |
| SortedSetGetScore        |                   | 1                                                                 |
| SortedSetGetScores       | ✅                | リクエストにある要素の数/2                                   |
| SortedSetRemoveElement   |                   | 1                                                                 |
| SortedSetRemoveElements  | ✅                | リクエストにある要素の数/2                                   |
| SortedSetGetRank         |                   | 1                                                                 |
| SortedSetIncrementScore  |                   | 1                                                                 |
| SortedSetLength          |                   | 1                                                                 |
| SortedSetLengthByScore   |                   | 1                                                                 |
