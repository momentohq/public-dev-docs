---
sidebar_position: 2
title: API Caching Pattern
sidebar_label: API Caching
description: Learn how to use Momento Cache to boost performance of applications using the WolframAlpha API
keywords:
 - cache
 - momento
 - read-aside
 - wolframalpha
 - api caching
 - api
---

# Use Momento Cache to cache results from an API

Remote calls to an API can be slow and expensive. Depending on the access pattern, it can be desirable to store results in a cache to improve your application's latency and availability.

With [Momento Cache](../), you can easily cache results from an API in a highly-available and scalable remote cache.

## Getting Started

In this example we will build an application that can give us a string description of the current weather of the given place. We will use the WolframAlpha API in this example to show you how we can cache the results of an API.

Weather data is relatively static over short periods, making it an ideal candidate for caching. Additionally the WolframAlpha API can be slow to respond due to its computational model. You can expect latency of around 700ms for the WolframAlpha API versus the latency of less than 5ms for the Momento GET API.

1. [Create a cache in the Momento console](https://console.gomomento.com/caches/create)
2. [Obtain an API Key (AppId) from WolframAlpha](https://developer.wolframalpha.com)
3. To call the WolframAlpha API to retrieve a string description of the current weather, you can create a client, `WeatherDescriptionClient`, that does the following:
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
4. Recall that this scenario is well-suited for caching. We can cache the results using [Momento JavaScript SDK](/platform/sdks).
For code reusability, we use [the Decorator pattern](https://en.wikipedia.org/wiki/Decorator_pattern) to wrap `CachingWeatherDescriptionClient` around an abstract `WeatherDescriptionClient` that we have created in an earlier step. Note that this requires no code-change to the existing `WolframWeatherDescriptionClient`.
```typescript
import {CacheClient, CacheGet} from '@gomomento/sdk';

// This is the name of the distributed cache that we will use
// to store weather results for different cities.
// This cache must be created beforehand.
const CACHE_NAME = 'weather-descriptions';

// Weather data is highly cacheable since it is not likely to change rapidly.
// Here we can configure the TTL for how long we want to cache the weather data for.
const WEATHER_CACHE_TTL_SECONDS = 300;

// This is an inline distributed cache.
// Results are served from the cache whenever possible.
// On a cache miss, the actual service is called, then
// the result will be populated into the cache automatically.
export class CachingWeatherDescriptionClient
  implements WeatherDescriptionClient
{
  delegate: WeatherDescriptionClient;
  momentoCacheClient: IMomentoCache;

  constructor(
    delegate: WeatherDescriptionClient,
    momentoCacheClient: CacheClient
  ) {
    this.delegate = delegate;
    this.momentoCacheClient = momentoCacheClient.cache(CACHE_NAME);
  }

  // With our Momento Cache, we need to establish a keyspace to make sure
  // that two different cities do not map to the same key.
  // In this demo we simply use the string name of the city.
  cacheKey(city: City): string {
    const cityName = City[city];
    return cityName;
  }

  // Asynchronously stores the result into cache to not impact
  // the critical path of the application.
  // For more comprehensive error handling,
  // you may add .then() method to Promise<CacheSet.Response>.
  populateCacheWithResult(city: City, result: string) {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.momentoCacheClient.set(this.cacheKey(city), result, {
      ttl: WEATHER_CACHE_TTL_SECONDS,
    });
  }

  async getWeatherDescription(city: City): Promise<string> {
    const getResponse = await this.momentoCacheClient.get(this.cacheKey(city));

    const weatherDescription = getResponse.value();
    if (!weatherDescription) {
      // If the weather is not in the cache, call actual client,
      // and populate the cache.
      const response = await this.delegate.getWeatherDescription(city);
      this.populateCacheWithResult(city, response);
      return response;
    }

    return weatherDescription;
  }
}
```
5. By using the Decorator Pattern, we can easily compose `CachingWeatherDescriptionClient` and `WolframWeatherDescriptionClient` together to create a new client that does read-aside caching, i.e. if a result is in the cache, return the result, otherwise fallback to retrieving the result from the remote API.
This is an example code that leverages Momento Cache to cache results of the WolframAlpha API into a remote cache:
```typescript
import {CacheClient, CredentialProvider} from '@gomomento/sdk';

async function main() {
  const momentoClient = await CacheClient.create({
    credentialProvider: CredentialProvider.fromEnvVar('MOMENTO_API_KEY'),
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

That is it! This is a simple example of how to cache an API result. Here are a few more things that you can tweak further to adapt Momento Cache to your exact use-case:
1. You can further leverage the Decorator pattern to add more functionality without modifying the existing code. For example you can add a Decorator for metrics/logging so that you get instrumentation on error rates and cache hit rates.
2. TTL (how long items get to live in a cache) can be adjusted on a per-item basis to fit your use-case. For example, in our earlier code, we could've made the TTLs different for different cities.
3. You can cache more than just Strings into Momento Cache. In our earlier example we cache strings but Momento Cache can also accept byte arrays. This allows you to cache an arbitrary object in your application, provided that you implement your own custom serialization/deserialization.

## See More
```mdx-code-block
import { CardGrid } from '@site/src/components/CardGrid';
import { LinkCard } from '@site/src/components/LinkCard';

<CardGrid>
  <LinkCard
    title="6 common caching strategies"
    link="https://www.gomomento.com/blog/6-common-caching-design-patterns-to-execute-your-caching-strategy"
    description="Learn more about other types of caching strategies"
    />
  <LinkCard
    title="Using Momento to cache chatbot calls"
    link="https://www.gomomento.com/resources/case-studies/cydas-people-takes-momento-cache-to-prod-for-their-chatgpt-ai-powered-chatbot-in-just-two-hours"
    description="See how CYDAS used Momento to cache calls to LangChain to build a chatbot"
    />
</CardGrid>
```
