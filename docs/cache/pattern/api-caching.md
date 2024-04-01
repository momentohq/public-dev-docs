---
sidebar_position: 10
title: Read-aside API Caching
sidebar_label: Read-aside API Caching
description: Learn best practices around using Momento Cache to cache results from an external API
---

# Use Momento Cache to cache results from an API

Remote calls to an API can be slow and expensive. Depending on the access pattern, it can be desirable to cache results in a cache to improve your application's latency and availability.

With [Momento Cache](../), you can easily cache results from an API in a highly-available and scalable remote cache.

## Getting Started

In this example we will build an application that can give us a string description of the current weather of the given place. We will use WolframAlpha API in this example to show you how we can cache the results of an API.

1. [Create a cache in the Momento console](https://console.gomomento.com/caches/create)
2. [Obtain an API Key (AppId) from WolframAlpha](https://developer.wolframalpha.com)
3. To call WolframAlpha API to retrieve a string description of the current weather, you can create a client, `WeatherDescriptionClient`, that does the following:
```typescript
import {City, WeatherDescriptionClient} from './weather-description-client';

// We list only selected cities for brevity.
export enum City {
  NewYork,
  LosAngeles,
  Chicago,
  Houston,
  Phoenix,
}

export interface WeatherDescriptionClient {
  getWeatherDescription(city: City): Promise<string>;
}

export class WolframWeatherDescriptionClient
  implements WeatherDescriptionClient
{
  secretAppId: string;
  constructor() {
    const envSecretAppId = process.env['WOLFRAM_APP_ID'];
    if (!envSecretAppId) {
      throw new Error('Must provide WOLFRAM_APP_ID env variable');
    }
    this.secretAppId = envSecretAppId;
  }

  async getWeatherDescription(city: City): Promise<string> {
    const cityName = City[city];
    const url = `https://api.wolframalpha.com/v1/result?appid=${this.secretAppId}&i=Weather for ${cityName}`;
    const response = await fetch(url);
    if (response.ok) {
      return await response.text();
    } else {
      const errorString = await response.text();
      throw new Error(`Wolfram returned an error: ${errorString}`);
    }
  }
}
```
4. Since the weather is unlikely to change that frequently for a particular city, and since a call to a remote API can be expensive, we can cache the results using [Momento Javascript SDK](../../sdks).
For code reusability, we use the Decorator Pattern to wrap `CachingWeatherDescriptionClient` around an abstract `WeatherDescriptionClient` that we have created in an earlier step. Note that this requires no code-change to the existing `WolframWeatherDescriptionClient`.
```typescript
import {CacheClient, CacheGet} from '@gomomento/sdk';

// This is the name of the distributed Cache that we will use
// to store weather results for different cities.
// This Cache must be created beforehand.
const CACHE_NAME = 'weather-descriptions';

// Weather data is highly cacheable since it is not likely to change rapidly.
// Here we can configure the TTL for how long we want to cache the weather data for.
const WEATHER_CACHE_TTL_SECONDS = 300;

// This is an inline distributed Cache.
// Results are served from the Cache whenever possible.
// On a Cache miss, the actual service is called, then
// the result will be populated into the Cache automatically.
export class CachingWeatherDescriptionClient
  implements WeatherDescriptionClient
{
  delegate: WeatherDescriptionClient;
  momentoCacheClient: CacheClient;
  constructor(
    delegate: WeatherDescriptionClient,
    momentoCacheClient: CacheClient
  ) {
    this.delegate = delegate;
    this.momentoCacheClient = momentoCacheClient;
  }

  // With our Momento Cache, we need to establish a keyspace to make sure
  // that two different cities do not map to the same key.
  // In this demo we simply use the string name of the city.
  cacheKey(city: City): string {
    const cityName = City[city];
    return cityName;
  }

  async populateCacheWithResult(city: City, result: string) {
    await this.momentoCacheClient.set(CACHE_NAME, this.cacheKey(city), result, {
      ttl: WEATHER_CACHE_TTL_SECONDS,
    });
  }

  async getWeatherDescription(city: City): Promise<string> {
    const getResponse = await this.momentoCacheClient.get(
      CACHE_NAME,
      this.cacheKey(city)
    );

    if (getResponse instanceof CacheGet.Hit) {
      // If the weather is in the Cache, return the result from the Cache.
      return getResponse.valueString();
    } else if (getResponse instanceof CacheGet.Miss) {
      // If the weather is not in the Cache, call actual client,
      // and populate the Cache.
      const response = await this.delegate.getWeatherDescription(city);
      await this.populateCacheWithResult(city, response);
      return response;
    } else if (getResponse instanceof CacheGet.Error) {
      // If there is an error, simply fallback to calling the actual client.
      return await this.delegate.getWeatherDescription(city);
    } else {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`unrecognized getResponse ${getResponse}`);
    }
  }
}
```
5. By using the Decorator Pattern, we can easily compose `CachingWeatherDescriptionClient` and `WolframWeatherDescriptionClient` together to create a new client that does read-side caching, i.e. if a result is the cache, return the result, otherwise fallback to retrieving the result from the remote API.
This is an example code that leverages Momento Cache to cache results of WolframAlpha API into a remote cache:
```typescript
import {CacheClient, Configurations, CredentialProvider} from '@gomomento/sdk';

async function main() {
  const momentoClient = await CacheClient.create({
    configuration: Configurations.Laptop.v1(),
    credentialProvider: CredentialProvider.fromEnvironmentVariable({
      environmentVariableName: 'MOMENTO_API_KEY',
    }),
    defaultTtlSeconds: 60,
  });
  const wolframWeatherClient = new WolframWeatherDescriptionClient();
  const cachingWeatherClient = new CachingWeatherDescriptionClient(
    wolframWeatherClient,
    momentoClient
  );

  const response = await cachingWeatherClient.getWeatherDescription(
    City.Phoenix
  );

  // As of this writing the weather in Arizona is:
  // "The weather in Phoenix, Arizona, currently includes no precipitation with clear skies, a wind speed of 9 miles per hour and a temperature of 78 degrees Fahrenheit"
  console.log(`${response}`);
}

```

That is it! This is a simple example of how to cache an API result. Here's a few more things that you can tweak further to adapt Momento Cache to your exact use-case:
1. You can further leverage the Decorator pattern to add more functionality without modifying the existing code. For example you can add a Decorator for metrics/logging so that you get instrumentation on error rates and cache hit rates.
2. TTL (how long items get to live in a cache) can be adjusted on a per-item basis to fit your use-case. For example, in our earlier code, we could've made the TTLs different for different cities.
3. You can cache more than just Strings into Momento Cache. In our earlier example we cache strings but Momento Cache can also accept byte arrays. This allows you to cache an arbitrary object in your application, provided that you implement your own custom serialization/deserialization.