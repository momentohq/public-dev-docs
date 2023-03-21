---
sidebar_position: 1
sidebar_label: Python
sidebar_class_name: sidebar-item-python-cheat-sheet
title: Cheat Sheet for Python + Momento Serverless Cache
description: Everything to get you going with coding using Python and Momento Serverless Cache
---

# Cheat Sheet for Python with Momento Serverless Cache
If you need to get going quickly with Python and Momento Serverless Cache, here are the basic API calls you'll need. When you need them, check out the [API reference page](../../api-reference/index.mdx) for more information on the full assortment of Momento API calls.

If you combine all of the functions on this page into one python file, you'd have a central collection of functions you can import and call from other python code. In addition, if you are putting this into production, you might look to replace the print() calls with ones using the logging library (`import logging`) in python.

## Import libraries and connect to return a CacheClient object
```python
from datetime import timedelta
from momento import CacheClient, Configurations, CredentialProvider
from momento.responses import CacheGet, CacheSet, CreateCache, ListCaches, CacheIncrement

import os

  def client():
    momento_auth_token = CredentialProvider.from_environment_variable('MOMENTO_AUTH_TOKEN')
    ttl  = timedelta(int(os.getenv('MOMENTO_TTL_SECONDS')))
    config = {
      'configuration': Configurations.Laptop.v1(),
      'credential_provider': momento_auth_token,
      'default_ttl':  ttl
    }
    return CacheClient(**config)
```

## Create a new cache in Momento Serverless Cache
Use this function to create a new cache in your account
```python
  def create_cache(cache_name):
    with MomentoCounter.client() as client:
      resp = client.create_cache(cache_name)
      match resp:
        case CreateCache.Success():
            print("Cache created.")
        case CreateCache.Error() as error:
            print(f"Error incrementing value: {error.message}")
        case _ as error:
            print(f"Unreachable with {error.message}")
```

## Get list of existing caches in your account
In this example, we use the client function above to get a client object and then use it to list all of the cache's for this account.
```python
  def list_caches() -> None:
      print("Listing caches:")
      with MomentoCounter.client() as client:
        list_caches_response = client.list_caches()
        match list_caches_response:
            case ListCaches.Success() as success:
                for cache_info in success.caches:
                    print(f"- {cache_info.name!r}")
            case ListCaches.Error() as error:
                print(f"Error creating cache: {error.message}")
            case _:
                print("Unreachable")
        print("")
```
## Write an item to a cache
A simple example of doing a set operation. In the client.set call, you could pass a fourth value, the TTL and this would override the default TTL value set with the client connection object.
```python
  def set(cache_name, key, value):
    with MomentoCounter.client() as client:
      resp = client.set(cache_name,key,value)
      match resp:
        case CacheSet.Success():
            pass
        case CacheSet.Error() as error:
            print(f"Error incrementing value: {error.message}")
        case _:
            print("Unreachable")
```

## Read an item from a cache
This is an example of a simple read operation to get an item from a cache.
```python
  def get(cache_name, key):
    cache_name = os.getenv('MOMENTO_CACHE_NAME')
    with MomentoCounter.client() as client:
      resp = client.get(cache_name, key)
      if isinstance(resp, CacheGet.Hit):
        return resp.value_string
      elif isinstance(resp, CacheGet.Miss):
        raise ValueError("There is a cache miss. That key does not exist in this cache.", cache_name, "key_name : " + key)
      elif isinstance(resp, CacheGet.Error):
        raise resp.inner_exception
```
## Increment the value of an item in a cache
An example of incrementing a value in a key. You can pass in any number
```python
  def incr(cache_name, key, value:int = 1):
    with MomentoCounter.client() as client:
      resp = client.increment(cache_name,key,value)
      match resp:
        case CacheIncrement.Success():
            pass
        case CacheIncrement.Error() as error:
            print(f"Error incrementing value: {error.message}")
        case _:
            print("Unreachable")
```
