---
sidebar_position: 4
sidebar_class_name: sidebar-item-develop-ttl
sidebar_label: Expiring data with TTL
title: Expiring data with Time to Live (TTL) in Momento Serverless Cache
description: Learn about expiring data from a cache using Time to Live (TTL) in Momento Serverless Cache
slug: /develop/expire-data-with-ttl
---

# Expire data with Time-to-Live (TTL) in Momento Serverless Cache

This document provides an overview of Momento Serverless Cache’s time-to-live (TTL) functionality. TTL allows items to expire automatically from the cache after a specified number of seconds.

Note: The service handles TTL expiry and does not consume any bandwidth for metering in your monthly transfer cost.

## Expire items after a specified number of seconds
The TTL value is the number of seconds from when Momento Serverless Cache writes the item to storage until the item expires from the cache. For example, if you set an item’s TTL value to 900 seconds (15 minutes), the item will expire 15 minutes after insertion into the cache.

## How to set TTL in Momento Serverless Cache
There are three locations to set a TTL value:
1. You must set a default TTL value when creating a cache client object in a Momento SDK. However, any SET operation using that object can omit the TTL value and will use that default value.

    ```
    const MY_DEFAULT_TTL = 60; // This value is in seconds
    const momento = new SimpleCacheClient(authToken, MY_DEFAULT_TTL);
    ```


2. Optionally, in a SET operation, you can override the default value created with the SimpleCacheClient object. If you do not include a value for TTL in this SET operation, the value used to create the cache client object is used.

    ```
    await momento.set(CACHE_NAME, 'key', 'my value', 40)
    // The number 40 is the TTL value in seconds for this item to expire.
    ```

3. If you’re using the CLI when you run the command `momento configure`, it writes a configuration file (~/.momento/config) and stores a value you specify for a default TTL in that file. If you write an item with the CLI from that same user and don’t specify a TTL in the SET operation, the CLI will use the value from that configuration file.

    Note: Unless you copy the configuration file with your application, that file and its contents are unique to the location where you ran the `momento configure` command.