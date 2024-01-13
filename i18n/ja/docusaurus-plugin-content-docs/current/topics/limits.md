---
sidebar_position: 4
sidebar_label: Service Limits
title: Service Limits for Momento Topics
pagination_next: null
description: Explore Momento Topic's service limits, the default values, and how to get them changed if you need.
hide_title: true
---

# Momentoトピック/ウェブフックのサービス制限

このページの制限は、特に明記されていない限り、変更可能なソフトリミットです。制限の調整が必要な場合は、[Momento Support](mailto:support@momentohq.com) までご連絡ください。その際、ログインメールアドレス、変更するキャッシュの名前、キャッシュがあるクラウドとリージョン（例：AWS eu-west-1）、どのリミットを増やしたいかを明記してください。

| Momento Topics limits | Value                      |
|-----------------------|----------------------------|
| Subscribers per cache | 100                        |
| Message size          | 4KiB per published message |
| Throughput per cache  | 10 publish requests/sec    |

トピックの制限に加えて、ウェブフックに適用される追加の制限がいくつかあります。

| Webhooks limits        | Value            |
|------------------------|------------------|
| Number of Webhooks     | 10               |
| Throughput per webhook | 5 requests/sec   |
| Request Timeout        | 5 seconds        |
| Name                   | 128 characters   |
| URL                    | 1024 characters  |
:::info

トピックとWebhookはMomento Cacheを利用するため、すべての[Cache limits](/cache/limits)が適用されます。

:::

## ソフトな制限とサポート

このページの制限は、特に明記されていない限り、変更可能なソフトリミットです。制限の調整が必要な場合は、[Momento Support](mailto:support@momentohq.com) までご連絡ください。その際、ログインメールアドレス、変更するキャッシュの名前、キャッシュがあるクラウドとリージョン（例：AWS eu-west-1）、どのリミットを増やしたいかを明記してください。
