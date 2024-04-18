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

[Cloud Linter](https://console.gomomento.com/caches) is a web service that you can use to automatically inspect your cloud footprint for common inefficiencies.

Cloud Linter is modeled after a code linter, in the sense that nothing it detects is necessarily wrong, just questionable and potentially costly. It incorporates learnings from the Momento team's collective decades of experience operating global-scale infrastructure, as well as our visibility into design patterns and workload data from across the tech industry.

Operating cloud infrastructure at enterprise scale is a challenge in governance and compliance. Automated tools such as Cloud Linter empower a platform team to conduct large-scale audits or a product team to self-assess their architecture. For smaller development teams, it provides instant access to a tremendous pool of accumulated expertise.

The [rules](./rules/index) that Cloud Linter applies to your configuration and usage data are designed to surface the most actionable insights. Heuristics are biased towards reducing false positives (ie, bad recommendations), at the risk of missing some edge-case opportunities. We encourage you to further explore the documentation for each rule in order to understand and apply the underlying principles more broadly.

Cloud Linter favors cost optimization as the clearest metric for demonstrating impact. However, we recognize that the ultimate goal is to deliver a world-class experience to customers. Hence, some rules may offer suggestions that improve other crucial metrics, such as availability and scalability, even if that would increase cost.

Cloud Linter is a living project. New rules and support for more resource types will be added frequently, so check back here often for the latest updates!
