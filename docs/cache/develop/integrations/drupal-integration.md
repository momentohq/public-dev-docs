---
sidebar_position: 12
sidebar_label: Drupal
title: Use Momento As Your Drupal Cache
description: Supercharge your Drupal cache by integrating with Momento 
pagination_next: null
---

# Integrating Momento Cache with Drupal

[Drupal](https://www.drupal.org) is a free and open-source content management framework built in PHP and is considered to be among the most stable, secure, and flexible content management solutions available. By default, Drupal uses a database—typically MySQL, MariaDB, or PostgreSQL—to cache the results of relatively expensive calculations. However, there is a problem with this approach: databases are, relatively speaking, slow. As a site’s need for scalability and performance increases, so do the advantages provided by a dedicated caching solution.

Drupal offers integrations with popular cache backends such as Redis and Memcached, but the advantages of these solutions comes at a cost. To use either technology, you’ll need to spend considerable time and effort provisioning and configuring server instances or clusters suitable to your workload. As your site’s caching demands change over time, ensuring that the caching infrastructure is neither under- nor over-provisioned is critical to manage cost and performance. **Momento Cache handles all of this for you**, scaling automatically to handle fluctuations in demand.

You can integrate Momento with your Drupal installation, enhancing caching capabilities seamlessly. This integration offers a cache backend tailored for Drupal caching operations, leveraging Momento's serverless caching solution. By adopting Momento, you eliminate the necessity of managing and maintaining your cache servers.

To begin utilizing this integration, follow these simple steps:

1. Download/Install the Momento module from [here](https://www.drupal.org/project/momento).
2. Follow the provided instructions in [README](https://git.drupalcode.org/project/momento/-/blob/1.0.x/README.md?ref_type=heads) to configure the Momento module according to your requirements.


