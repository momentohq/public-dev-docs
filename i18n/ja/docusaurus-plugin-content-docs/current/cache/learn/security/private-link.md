---
sidebar_position: 1
sidebar_label: PrivateLink Connectivity
title: PrivateLink connectivity with Momento services
description: Learn how to add AWS PrivateLink to Momento Cache and Topics services.
pagination_next: null
pagination_prev: null
---

# Momento CacheおよびMomento TopicsとAWS PrivateLinkの接続性

Momentoは、顧客がMomento CacheとMomento Topicsに接続する際に、デフォルトでセキュアなパブリックエンドポイントを提示します。これは、プライベートVPCにデプロイされていないアプリには最適です。しかし、コンプライアンス要件を満たしたり、ネットワーク・トラフィックの帯域幅コストを削減したりするために、VPCエンドポイントからMomentoにアクセスする必要がある顧客もいます。このようなお客様のために、MomentoはAmazon Web Services（AWS）でホストされているお客様への[AWS PrivateLink](https://aws.amazon.com/privatelink/)接続を提供しています。

![PrivateLink Diagram](/img/vpc-diagram.jpeg)

PrivateLink接続は、Momentoのサービスへの[Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)エンドポイントを作成する機能を提供します。一度設定すると、Momentoとのすべての通信はプライベートIPアドレス空間を経由します。このセキュリティ機能を必要とするお客様にとって、この接続パターンには2つの重要な利点があります：
* Momentoのサービスと通信するためのNATゲートウェイインスタンスにお金を払う必要はありません。
* トラフィックが公衆インターネットを経由しないため、セキュリティ態勢が強化される。

この機能が必要な場合は、[Momento サポート](mailto:support@momentohq.com?subject=PrivateLink) までご連絡ください。
