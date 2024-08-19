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

# What is Cloud Linter?

[Cloud Linter](https://console.gomomento.com/cloud-linter) is a web service that you can use to automatically inspect your cloud footprint for common inefficiencies.

Operating cloud infrastructure at enterprise scale is a challenge in governance and compliance. Automated tools such as Cloud Linter empower a platform team to conduct large-scale audits or a product team to self-assess their architecture. For smaller development teams, it provides instant access to a tremendous pool of accumulated expertise.

![Cloud Linter Diagram](@site/static/img/cloud-linter/cloud-linter-diagram.png)

## How does it work?
Cloud Linter is modeled after a code linter, in the sense that nothing it detects is necessarily wrong, just questionable and potentially costly. It incorporates learnings from the Momento team's collective decades of experience operating global-scale infrastructure, as well as our visibility into design patterns and workload data from across the tech industry.

The analysis that Cloud Linter applies to your configuration and usage data are designed to surface the most actionable insights. Heuristics are biased towards reducing false positives (ie, bad recommendations), at the risk of missing some edge-case opportunities. While Cloud Linter favors cost optimization as the clearest metric for demonstrating impact, it may offer suggestions that improve other crucial metrics, such as availability and scalability, even if that would increase cost.

## What's next?
Cloud Linter is a living project. Support for more resource types will be added frequently, so check back here often for the latest updates!

## Disclaimer
Please note that Cloud Linter is designed solely for the purpose of calling specific control plane APIs listed below. Cloud Linter does not perform any resource-intensive operations on production services' CPU and memory.

Cloud Linter is intended to interact with the following AWS services via their respective control plane APIs:
- Amazon DynamoDB
- Amazon ElastiCache
- Amazon CloudWatch

It can optionally interact with the following AWS services:
- Amazon S3, using the `--enable-s3` option
- Amazon API Gateway, using the `--enable-api-gateway` option

The usage of the software is limited to the following API calls and transactions per second (TPS):

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

Cloud Linter is designed to always stay within these specified limits. It's crafted with careful consideration to avoid generating any traffic to these APIs that could lead to AWS throttling or disrupt the normal operations of your AWS resources.
Please note that while the average running time typically spans 15 minutes, this can vary significantly based on the volume of data being processed. Therefore, the process may extend up to 1 hour in some cases.

Cloud Linter complies with Momento's Terms of Service. For further information, please refer to our [Terms of Service](https://www.gomomento.com/terms-of-service) page. 
