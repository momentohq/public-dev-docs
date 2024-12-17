---
title: AWS PrivateLink Connectivity
sidebar_position: 1
sidebar_label: AWS PrivateLink
description: Learn how to securely connect to the Momento platform within your Amazon VPC using AWS PrivateLink for optimized security and cost efficiency.
hide_title: true
keywords:
  - Momento Cache
  - Momento Topics
  - Momento platform
  - AWS PrivateLink
  - VPC endpoint
  - secure connection
  - compliance
  - private IP
  - cloud network cost optimization
  - private access
  - Amazon VPC
  - secure infrastructure
  - reduce NAT gateway costs
  - network traffic savings
  - enterprise security
  - high-security cloud architecture
---

# AWS PrivateLinkとMomentoのプライベートアクセスオプションで安全に接続

Momentoは、セキュリティと柔軟性を優先し、成長に合わせて拡張する場合でも、コンプライアンスに合わせて最適化する場合でも、インフラストラクチャのニーズを満たします。Momentoは、プライベートVPCにデプロイされていないアプリケーションのために、デフォルトでセキュアな[パブリックエンドポイント](/platform/regions)を提供しています。しかし、VPC*内からのアクセスが必要なお客様には、[AWS PrivateLink](https://aws.amazon.com/privatelink/)を介してセキュアに接続するオプションを提供しています。

このオプションを使用すると、Amazon VPCからMomentoのサービスに直接プライベートな接続を確立することができます。

![PrivateLink Connectivity Diagram](/img/vpc-diagram.jpeg)

### なぜMomentoのAWS PrivateLinkを選ぶのか？

* **Optimized security** - お客様のデータはプライベートIP空間内に留まり、インターネットへの公開を排除することで高い安全性を確保します。
* **Cost efficiency** - PrivateLinkを経由してMomentoに直接ルーティングすることで、NATゲートウェイのコストをスキップし、ネットワークトラフィックにかかるクラウド費用を削減できます。

詳細なセットアップ手順、パターン、ベストプラクティスについては、[接続性パターンリポジトリ](https://github.com/momentohq/connectivity-patterns) を参照して、PrivateLink と Momento の統合を開始してください。
