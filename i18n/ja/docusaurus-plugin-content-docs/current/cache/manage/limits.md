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
