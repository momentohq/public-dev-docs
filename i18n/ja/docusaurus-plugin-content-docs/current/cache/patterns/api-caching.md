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

# Momento Cacheを使用してAPIからの結果をキャッシュする

APIへのリモート・コールは遅くて高くつくことがあります。アクセス・パターンによっては、アプリケーションのレイテンシーと可用性を向上させるために、結果をキャッシュに保存することが望ましい場合もあります。

[Momento Cache](../)を使用すると、APIからの結果を可用性と拡張性の高いリモートキャッシュに簡単にキャッシュできます。

## はじめに

この例題では，与えられた場所の現在の天気を文字列で説明するアプリケーションを構築します．この例ではWolframAlpha APIを使って，APIの結果をキャッシュする方法をお見せします．

気象データは短期間では比較的静的であるため，キャッシュには理想的です．さらに，WolframAlpha APIはその計算モデルのため，応答が遅くなることがあります．WolframAlpha APIの待ち時間は約700msであるのに対し，Momento GET APIの待ち時間は5ms未満です．

1. [Momentoコンソールでキャッシュを作成する](https://console.gomomento.com/caches/create)
2. [WolframAlphaからAPIキー（AppId）を取得する](https://developer.wolframalpha.com)
3. WolframAlpha APIを呼び出して現在の天気に関する文字列の説明を取得するには，次のようなクライアント `WeatherDescriptionClient` を作成します．
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
4. このシナリオがキャッシュに適していることを思い出してください。[Momento JavaScript SDK](/platform/sdks)を使って結果をキャッシュすることができます。
コードの再利用性を高めるために、[Decorator パターン](https://en.wikipedia.org/wiki/Decorator_pattern) を使用して、`WeatherDescriptionClient` を抽象化した `WeatherDescriptionClient` の周りに `CachingWeatherDescriptionClient` をラップします。この場合、既存の `WolframWeatherDescriptionClient` のコード変更は必要ないことに注意してください。
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
5. Decorator パターンを使うことで、`CachingWeatherDescriptionClient` と `WolframWeatherDescriptionClient` を組み合わせて、Read-Aside Caching を行う新しいクライアントを簡単に作ることができます。
これは，WolframAlpha APIの結果をリモートキャッシュにキャッシュするためにMomento Cacheを利用するサンプルコードです．
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

以上です！これはAPI結果をキャッシュする方法の簡単な例です。さらに、Momento Cacheをあなたのユースケースに適合させるために、さらに微調整できることがいくつかあります：
1. Decoratorパターンをさらに活用すれば、既存のコードを変更することなく、より多くの機能を追加することができます。例えば、エラー・レートやキャッシュ・ヒット・レートに関するインスツルメンテーションを得るために、メトリクス／ロギング用のDecoratorを追加することができます。
2. TTL（アイテムがキャッシュに保存される期間）は、ユースケースに合わせてアイテムごとに調整することができます。例えば、先ほどのコードでは、都市ごとにTTLを変えることができました。
3. Momento Cache にキャッシュできるのは、文字列だけではありません。先ほどの例では文字列をキャッシュしていましたが、 Momento Cache はバイト配列も受け付けることができます。このため、独自のシリアライズ/デシリアライズを実装すれば、任意のオブジェクトをキャッシュすることができます。

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
