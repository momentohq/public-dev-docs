from datetime import timedelta
from momento import CacheClient, Configurations, CredentialProvider
from momento.responses import CacheGet, CacheSet, CreateCache, ListCaches, CacheIncrement

import os

cache_name = "default_cache"

# A function that creates the CacheClient connection and returns it.
# It gets values from environment variables, but you could get them from
# a programatic encrypted data manager like AWS Secrets Manager.
def create_client():
  momento_auth_token = CredentialProvider.from_environment_variable('MOMENTO_API_KEY')
  ttl  = timedelta(seconds=int(os.getenv('MOMENTO_TTL_SECONDS', '600')))
  config = {
    'configuration': Configurations.Laptop.v1(),
    'credential_provider': momento_auth_token,
    'default_ttl':  ttl
  }
  return CacheClient.create(**config)

# A function to create a new cache.
def create_cache(client, cache_name: str) -> None:
  resp = client.create_cache(cache_name)
  match resp:
    case CreateCache.Success():
        print("Cache created.")
    case CreateCache.Error() as error:
        print(f"Error creating cache: {error.message}")
    case _ as error:
        print(f"Unreachable with {error.message}")

# A function that lists the caches for this account.
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

# A function to write an item to the cache.
def set(client, cache_name, key, value, ttl=None):
  resp = client.set(cache_name, key, value, ttl)
  match resp:
    case CacheSet.Success():
        pass
    case CacheSet.Error() as error:
        print(f"Error setting value: {error.message}")
    case _:
        print("Unreachable")

# A function to get an item from the cache.
def get(client, cache_name, key):
  resp = client.get(cache_name, key)
  match resp:
    case CacheGet.Hit():
        print("value is " + resp.value_string)
    case CacheGet.Miss() as error:
        print(f"Error getting key: {error.message}")
    case _:
        print("Unreachable")

# A function to increment the value of a key.
def incr(client, cache_name, key, value:int = 1):
  resp = client.increment(cache_name, key, value)
  match resp:
    case CacheIncrement.Success():
        pass
    case CacheIncrement.Error() as error:
        print(f"Error incrementing value: {error.message}")
    case _:
        print("Unreachable")

# Call all of the functions to interact with Momento Cache
with create_client() as client:

   create_cache(client, cache_name)

   list_caches(client)

   set(client, cache_name, "test", "12345")

   get(client, cache_name, "test")

   incr(client, cache_name, "test2")

   get(client, cache_name, "test2")
