---
sidebar_position: 1
sidebar_label: Cloud Linter
title: Cloud Linter
description: Learn about the Momento Cloud Linter
pagination_next: null
hide_title: true
keywords:
  - momento
  - cache
  - caching
  - lint
  - cloud
  - cloud lint
  - cloud linter
  - cost
  - redis
  - serverless
---

# Cloud Linter とは?

[Cloud Linter](https://console.gomomento.com/caches)は、クラウドのフットプリントを自動的に検査し、一般的な非効率性をチェックするためのウェブサービスです。

クラウドインフラストラクチャを企業規模で運用することは、ガバナンスとコンプライアンスの課題です。Cloud Linterのような自動化ツールは、プラットフォームチームが大規模な監査を実施したり、製品チームがアーキテクチャを自己評価したりするのに役立ちます。小規模な開発チームにとっては、蓄積された専門知識の膨大なプールに即座にアクセスできます。

![Image of Momento console landing page](@site/static/img/cloud-linter/cloud-linter-diagram.png)

## How does it work?
Cloud Linterは、コード・リンターをモデルにしており、検出されるものは必ずしも間違っているわけではなく、疑わしいもの、コストがかかる可能性のあるものだけです。Momentoチームの数十年にわたるグローバル・スケールのインフラ運用の経験や、技術業界全体のデザイン・パターンやワークロード・データの可視性から得られた学習が組み込まれています。

Cloud Linterが設定と使用データに適用する分析は、最も実用的な洞察を表面化するように設計されています。ヒューリスティックは偽陽性（つまり悪い推奨）を減らすことに偏っており、エッジケースの機会を見逃すリスクがあります。Cloud Linterは、影響を実証するための最も明確な指標としてコストの最適化を優先しますが、たとえコストが増加するとしても、可用性やスケーラビリティなどの他の重要な指標を改善する提案をすることがあります。

## What's next?
Cloud Linterは生きているプロジェクトです。新しいルールや、より多くのリソースタイプのサポートが頻繁に追加されますので、最新のアップデートのために頻繁にここをチェックしてください！

## 免責事項
Cloud Linterは以下の特定のコントロールプレーンAPIを呼び出すためだけに設計されていることに注意してください。Cloud Linterは本番サービスのCPUやメモリに対してリソースを大量に消費するような操作は行いません。

Cloud Linterは、それぞれのコントロールプレーンAPIを介して以下のAWSサービスと相互作用することを意図しています：
- Amazon DynamoDB
- Amazon ElastiCache
- Amazon CloudWatch

オプションで以下のAWSサービスとやりとりできます：
- Amazon S3, `--enable-s3` オプションを使用する
- Amazon API Gateway, `--enable-api-gateway` オプションを使用する


ソフトウェアの使用は、以下のAPIコールと1秒あたりのトランザクション（TPS）に制限されています：

Elasticache:
- DescribeCacheClusters: 10 TPS
- DescribeServerlessCaches: 10 TPS

DynamoDB:
- ListTables: 10 TPS
- DescribeTable: 10 TPS
- DescribeTimeToLive: 1 TPS

CloudWatch:
- GetMetricData: 20 TPS

S3:
- ListBuckets
- ListBucketMetricsConfigurations: 10 TPS

API Gateway:
- GetRestApis: 10 TPS
- GetRestApi: 10 TPS

Cloud Linterは常にこれらの指定された制限内に収まるように設計されています。AWSのスロットリングやAWSリソースの正常な運用に支障をきたすようなAPIへのトラフィックを発生させないよう、細心の注意を払って作られています。
平均実行時間は通常15分ですが、これは処理されるデータ量によって大きく変わる可能性があることに注意してください。そのため、場合によっては1時間程度かかることもあります。

クラウドリンターの使用方法と制限の詳細については、https://docs.momentohq.com/cloud-linter のドキュメントを参照してください。

Cloud LinterはMomentoのサービス利用規約に準拠しています。Momentoのサービス規約の詳細については、以下のサービス規約のページを参照してください： https://www.gomomento.com/terms-of-service

Cloud Linterは常にこれらの指定された制限内に収まるように設計されています。AWSのスロットリングやAWSリソースの正常な運用に支障をきたすようなAPIへのトラフィックを発生させないよう、細心の注意を払って作られています。
平均実行時間は通常15分ですが、これは処理されるデータ量によって大きく変わる可能性があることに注意してください。そのため、場合によっては1時間程度かかることもあります。

Cloud LinterはMomentoの利用規約に準拠しています。詳しくは[利用規約](https://www.gomomento.com/terms-of-service)のページをご覧ください。
