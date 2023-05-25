---
sidebar_position: 1
sidebar_label: Cheat Sheet
sidebar_class_name: sidebar-item-python-cheat-sheet
title: Cheat Sheet for Python + Momento Cache
description: Everything to get you going with coding using Python and Momento Cache
---

# Cheat Sheet for Python with Momento Cache
If you need to get going quickly with Python and Momento Cache, this page contains the basic API calls you'll need.

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

def create_client():
  momento_auth_token = CredentialProvider.from_environment_variable('MOMENTO_AUTH_TOKEN')
  ttl  = timedelta(seconds=int(os.getenv('MOMENTO_TTL_SECONDS', '600')))
  config = {
    'configuration': Configurations.Laptop.v1(),
    'credential_provider': momento_auth_token,
    'default_ttl':  ttl
  }
  return CacheClient(**config)
```

## Create a new cache in Momento Cache
Use this function to create a new cache in your account.
```python
def create_cache(client, cache_name: str) -> None:
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
def list_caches(client) -> None:
    print("Listing caches:")
    list_caches_response = client.list_caches()
    match list_caches_response:
        case ListCaches.Success() as success:
            for cache_info in success.caches:
                print(f"- {cache_info.name!r}")
        case ListCaches.Error() as error:
            print(f"Error listing caches: {error.message}")
        case _:
            print("Unreachable")
    print("")
```
## Write an item to a cache
A simple example of doing a set operation. In the client.set call, the TTL it optional. If you did pass it in, this would override the default TTL value set with the client connection object.
```python
def set(client, cache_name, key, value, ttl=None):
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
def get(client, cache_name, key):
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
def incr(client, cache_name, key, value:int = 1):
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
Beyond these basic API calls check out the [API reference page](/develop/api-reference/index.mdx) for more information on the full assortment of Momento API calls.
:::

## Notes of usage
For any of these functions, call the `create_client()` function which returns a CacheClient object. Then pass that object into subsequent functions. This way, calls are more efficient as they reuse the CacheClient for multiple calls to Momento. [Click here](../../../../static/code/cheat-sheets/MomentoBasics.py) to see a file with all definitions in it.
