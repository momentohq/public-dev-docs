---
sidebar_position: 4
sidebar_label: Service Limits
title: Service limits for Momento Topics
pagination_next: null
description: Explore Momento Topic's service limits, the default values, and how to get them changed if you need.
---

#



| Momento Topics limits | 値                          |
| --------------------- | -------------------------- |
| Subscribers per cache | 100                        |
| Message size          | 4KiB per published message |
| キャッシュあたりのスループット       | 10 publish requests/sec    |



| Webhooks limits        | 値               |
| ---------------------- | --------------- |
| Number of Webhooks     | 10              |
| Throughput per webhook | 5 requests/sec  |
| Request Timeout        | 5 seconds       |
| Name                   | 128 characters  |
| URL                    | 1024 characters |
| :::info                |                 |



:::

## ソフトリミットとサポート

このページに記載されている制限は、特に明記されていない限り、変更可能なソフトな制限です。制限の調整が必要な場合は、[Momento サポートまで](mailto:support@momentohq.com)ご連絡ください。その際、ログインメールアドレス、変更するキャッシュの名前、キャッシュのあるクラウド+リージョン（例：AWS eu-west-1）、制限の追加を希望する制限を明記してください。
