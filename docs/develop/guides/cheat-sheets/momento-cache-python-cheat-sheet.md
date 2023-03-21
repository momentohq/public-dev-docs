---
sidebar_position: 1
sidebar_label: Python
sidebar_class_name: sidebar-item-python-cheat-sheet
title: Cheat Sheet for Python + Momento Serverless Cache
description: Everything to get you going with coding using Python and Momento Serverless Cache
---

# Cheat Sheet for Python with Momento Serverless Cache
If you need to get going quickly with Python and Momento Serverless Cache, this page contains the basic API calls you'll need.

:::tip

If you combine all of the functions on this page into one python file, you'd have a central collection of functions you can import and call from other python code. In addition, if you are using this code in production you might look to replace the print() calls with ones using the logging library (`import logging`) in python. [Click here](../../../../static/code/cheat-sheets/MomentoBasics.py) to see the class file with all definitions in it.

:::

## Import libraries and connect to return a CacheClient object
This code sets up the class with the necessary imports, the class definition, and the CacheClient instantiation that each of the other functions will need to call.

```python
from datetime import timedelta
from momento import CacheClient, Configurations, CredentialProvider
from momento.responses import CacheGet, CacheSet, CreateCache, ListCaches, CacheIncrement

import os

class MomentoBasics:
  def client():
    momento_auth_token = CredentialProvider.from_environment_variable('MOMENTO_AUTH_TOKEN')
    ttl  = timedelta(seconds=int(os.getenv('MOMENTO_TTL_SECONDS', '60')))
    config = {
      'configuration': Configurations.Laptop.v1(),
      'credential_provider': momento_auth_token,
      'default_ttl':  ttl
    }
    return CacheClient(**config)
```

## Create a new cache in Momento Serverless Cache
Use this function to create a new cache in your account.
```python
  def create_cache(cache_name) -> None:
    with MomentoBasics.client() as client:
      resp = client.create_cache(cache_name)
      match resp:
        case CreateCache.Success():
            print("Cache created.")
        case CreateCache.Error() as error:
            print(f"Error creating cache: {error.message}")
        case _ as error:
            print(f"Unreachable with {error.message}")
```

## Get list of existing caches in your account
In this example, we use the client function above to get a client object and then use it to list all of the caches for this account.
```python
  def list_caches() -> None:
      print("Listing caches:")
      with MomentoBasics.client() as client:
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
A simple example of doing a set operation. In the client.set call, the TTL it optional. If you did pass it in, this would override the default TTL value set with the client connection object.
```python
  def set(cache_name, key, value, ttl=None):
    with MomentoBasics.client() as client:
      resp = client.set(cache_name, key, value, ttl)
      match resp:
        case CacheSet.Success():
            pass
        case CacheSet.Error() as error:
            print(f"Error setting value: {error.message}")
        case _:
            print("Unreachable")
```

## Read an item from a cache
This is an example of a simple read operation to get an item from a cache.
```python
  def get(cache_name, key):
    with MomentoCounter.client() as client:
      resp = client.get(cache_name, key)
      match resp:
        case CacheGet.Hit():
            print("value is " + resp.value_string)
        case CacheGet.Miss() as error:
            print(f"Error getting key: {error.message}")
        case _:
            print("Unreachable")
```

## Increment the value of an item in a cache
An example of incrementing a value in a key. You can pass in a positive or negative integer.
```python
  def incr(cache_name, key, value:int = 1):
    with MomentoBasics.client() as client:
      resp = client.increment(cache_name, key, value)
      match resp:
        case CacheIncrement.Success():
            pass
        case CacheIncrement.Error() as error:
            print(f"Error incrementing value: {error.message}")
        case _:
            print("Unreachable")
```

:::info
Beyond these basic API calls check out the [API reference page](../../api-reference/index.mdx) for more information on the full assortment of Momento API calls.
:::

## Notes of further usage
It could be adventageous to reuse the CacheClient connection object across multiple API calls depending on how your app works. If this is something you want to do, then you should modify the client() function definition to return a CacheClient object like so:

```python
def client() -> CacheClient:
```

Then, modify the other function definitions to accept a CacheClient object as an argument, but also not instantiate its own object.