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

  def list_caches() -> None:
      print("Listing caches:")
      with MomentoBasics.client() as client:
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