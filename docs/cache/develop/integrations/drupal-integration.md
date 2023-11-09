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

In this guide we'll install and configure the Drupal integration module, `momento_cache`, to serve as the cache backend for our Drupal CMS.

See the [Momento Drupal cache integration repository](https://github.com/momentohq/drupal-cache) for more information.

## Prerequisites

* A Momento API token is required. You can generate one using [the Momento Console](https://console.gomomento.com).
* A Momento cache to serve as your Drupal caching backend. You can create a cache to use in [the Momento Console](https://console.gomomento.com). **You must create the cache before using the module.** If the cache doesn't exist, errors are written to the Drupal dblog as well as the logfile configured in your settings, if you have specified one.
* PHP 7.4 or higher.
* Drupal 9.4 or higher.
* The [gRPC PHP extension](https://github.com/grpc/grpc/blob/master/src/php/README.md).
* [Composer](https://getcomposer.org/doc/00-intro.md) PHP dependency manager.

### Drupal and Momento Rate Limiting

Momento's free tier limits accounts' transactions per second (TPS) and throughput (KiBps), and requests that exceed those limits are throttled. Drupal's usage of the cache backend is significantly higher than the default limits, so prior to using the integration please reach out to support@momentohq.com to raise your account limits. You can check the Drupal dblog and/or the logfile you configure in the settings (instructions below) for rate limiting error messages.

## Installing and Configuring the Momento Cache Drupal Module

The `momento_cache` module is installed in the usual Drupal way. From your Drupal installation's root directory, use composer to pull in the module: `composer require 'momentohq/drupal_cache:0.5.0`. Then enable the module using the Drupal admin interface or using `drush en momento_cache`.

The next step is to configure the module in your `settings.php` file. If you're planning to use Momento as your global caching backend, add the following: 

`$settings['cache']['default'] = 'cache.backend.momento_cache';` 

You may also choose to use Momento for specific cache bins instead. For example, to cache the contents of the `render` bin using Momento, you would add:

`$settings['cache']['bins']['render'] = 'cache.backend.momento_cache'`.

Next, add the settings necessary to authenticate with Momento and specify your cache name:

```php
$settings['momento_cache']['api_token'] = '<YOUR_MOMENTO_TOKEN>';
$settings['momento_cache']['cache_name'] = '<YOUR_CACHE_NAME>';
```

Replace <YOUR_MOMENTO_TOKEN> with the API key you generated in the console. You may also use an environment variable named MOMENTO_API_TOKEN to pass your API token to the Momento cache backend. If both are supplied, the settings file takes precedence. Replace <YOUR_CACHE_NAME> with the name of the underlying Momento cache you created earlier. You may also use an environment variable named MOMENTO_CACHE_NAME to pass this value. If both are supplied, the settings file takes precedence.

You may also optionally provide the path to a log file (make sure it's writable by Drupal) for tracking the module's caching operations and how long each operation is taking:

`$settings['momento_cache']['logfile'] = '<YOUR_LOG_FILE_PATH>';`

**Please be aware** that this file will grow quickly over time, so if you choose to enable it long-term, you should probably use logrotate or some similar utility to keep it from growing out of control. If you choose not to specify a logfile, errors will still be logged to Drupal's dblog in the `momento_cache` type category.



