---
sidebar_position: 1
sidebar_label: Python
sidebar_class_name: sidebar-item-python-cheat-sheet
title: Cheat Sheet for Python + Momento Serverless Cache
description: Everything to get you going with coding using Python and Momento Serverless Cache
---

# Cheat Sheet for Python


## Connect to Momento Serverless Cache to return a CacheClient object
```python
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
## Get list of caches in your account
```python
  def list_caches() -> None:
    # Note, this function requires a Momento client instantiation like in client() above.
      print("Listing caches:")
      with MomentoCounter.client() as client:
        list_caches_response = client.list_caches()
        client.list_caches
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
test32
## Read an item from a cache
test45
## Increment the value of an item in a cache
test6
