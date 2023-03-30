---
sidebar_position: 2
sidebar_label: PHP
sidebar_class_name: sidebar-item-php-cheat-sheet
title: Cheat Sheet for PHP + Momento Cache
description: Everything to get you going with coding using PHP and Momento Cache
---

# Cheat Sheet for PHP with Momento Cache
If you need to get going quickly with PHP and Momento Cache, this page contains the basic API calls you'll need.

## Requirements
* A Momento Auth Token is required, you can generate one using the Momento CLI
* At least PHP 8.0
* The grpc PHP extension. See the gRPC docs section on installing the extension.

## Import libraries and connect to return a CacheClient object
This code sets up the class with the necessary imports, the class definition, and the CacheClient instantiation that each of the other functions will need to call.

```php

```

## Create a new cache in Momento Cache
Use this function to create a new cache in your account.
```php

```

## Get list of existing caches in your account
In this example, we use the client function above to get a client object and then use it to list all of the caches for this account.
```php

```
## Write an item to a cache
A simple example of doing a set operation. In the client.set call, the TTL it optional. If you did pass it in, this would override the default TTL value set with the client connection object.
```php

```

## Read an item from a cache
This is an example of a simple read operation to get an item from a cache.
```php

```

## Increment the value of an item in a cache
An example of incrementing a value in a key. You can pass in a positive or negative integer.
```php

```

:::info
Beyond these basic API calls check out the [API reference page](../../api-reference/index.mdx) for more information on the full assortment of Momento API calls.
:::