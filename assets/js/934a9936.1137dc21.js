"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,u=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(u,i(i({ref:t},h),{},{components:n})):a.createElement(u,i({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5085:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7294);const r="card_Yy4i",o="cardLink_tPnZ",i="cardContent_l93Q",c="cardTitle_gz5m",s="cardDescription_RQFX",l="cardBody_MLn8",h=e=>{let{title:t,description:n,link:h,icon:p,variation:m="normal"}=e,d="",u="";if("dense"===m.toLowerCase())d="0",u="15em";return a.createElement("div",{className:r,style:{width:u}},a.createElement("a",{href:h,target:"_blank",className:o},a.createElement("div",{className:l},p&&a.createElement("img",{src:p,height:"32px",width:"32px"}),a.createElement("div",{className:i},a.createElement("h3",{className:c},t),a.createElement("p",{className:s,style:{marginBottom:d}},n)))))}},1171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var a=n(7462),r=(n(7294),n(3905)),o=n(5085);const i={sidebar_position:2,title:"API Caching Pattern",sidebar_label:"API Caching",description:"Learn how to use Momento Cache to boost performance of applications using the WolframAlpha API",keywords:["cache","momento","read-aside","wolframalpha","api caching","api"]},c="Use Momento Cache to cache results from an API",s={unversionedId:"cache/patterns/api-caching",id:"cache/patterns/api-caching",title:"API Caching Pattern",description:"Learn how to use Momento Cache to boost performance of applications using the WolframAlpha API",source:"@site/docs/cache/patterns/api-caching.md",sourceDirName:"cache/patterns",slug:"/cache/patterns/api-caching",permalink:"/cache/patterns/api-caching",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/patterns/api-caching.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"API Caching Pattern",sidebar_label:"API Caching",description:"Learn how to use Momento Cache to boost performance of applications using the WolframAlpha API",keywords:["cache","momento","read-aside","wolframalpha","api caching","api"]},sidebar:"tutorialSidebar",previous:{title:"Database Caching",permalink:"/cache/patterns/database-caching"},next:{title:"Develop",permalink:"/cache/develop/"}},l={},h=[{value:"Getting Started",id:"getting-started",level:2},{value:"See More",id:"see-more",level:2}],p={toc:h};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-momento-cache-to-cache-results-from-an-api"},"Use Momento Cache to cache results from an API"),(0,r.kt)("p",null,"Remote calls to an API can be slow and expensive. Depending on the access pattern, it can be desirable to store results in a cache to improve your application's latency and availability."),(0,r.kt)("p",null,"With ",(0,r.kt)("a",{parentName:"p",href:"../"},"Momento Cache"),", you can easily cache results from an API in a highly-available and scalable remote cache."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"In this example we will build an application that can give us a string description of the current weather of the given place. We will use the WolframAlpha API in this example to show you how we can cache the results of an API."),(0,r.kt)("p",null,"Weather data is relatively static over short periods, making it an ideal candidate for caching. Additionally the WolframAlpha API can be slow to respond due to its computational model. You can expect latency of around 700ms for the WolframAlpha API versus the latency of less than 5ms for the Momento GET API."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://console.gomomento.com/caches/create"},"Create a cache in the Momento console")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://developer.wolframalpha.com"},"Obtain an API Key (AppId) from WolframAlpha")),(0,r.kt)("li",{parentName:"ol"},"To call the WolframAlpha API to retrieve a string description of the current weather, you can create a client, ",(0,r.kt)("inlineCode",{parentName:"li"},"WeatherDescriptionClient"),", that does the following:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {City, WeatherDescriptionClient} from './weather-description-client';\n\n// We list only selected cities for brevity.\nexport enum City {\n  NewYork,\n  LosAngeles,\n  Chicago,\n  Houston,\n  Phoenix,\n}\n\nexport interface WeatherDescriptionClient {\n  getWeatherDescription(city: City): Promise<string>;\n}\n\nexport class WolframWeatherDescriptionClient\n  implements WeatherDescriptionClient\n{\n  secretAppId: string;\n  constructor() {\n    const envSecretAppId = process.env['WOLFRAM_APP_ID'];\n    if (!envSecretAppId) {\n      throw new Error('Must provide WOLFRAM_APP_ID env variable');\n    }\n    this.secretAppId = envSecretAppId;\n  }\n\n  async getWeatherDescription(city: City): Promise<string> {\n    const cityName = City[city];\n    const url = `https://api.wolframalpha.com/v1/result?appid=${this.secretAppId}&i=Weather for ${cityName}`;\n    const response = await fetch(url);\n    if (response.ok) {\n      return await response.text();\n    } else {\n      const errorString = await response.text();\n      throw new Error(`Wolfram returned an error: ${errorString}`);\n    }\n  }\n}\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Recall that this scenario is well-suited for caching. We can cache the results using ",(0,r.kt)("a",{parentName:"li",href:"../../sdks"},"Momento JavaScript SDK"),".\nFor code reusability, we use ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Decorator_pattern"},"the Decorator pattern")," to wrap ",(0,r.kt)("inlineCode",{parentName:"li"},"CachingWeatherDescriptionClient")," around an abstract ",(0,r.kt)("inlineCode",{parentName:"li"},"WeatherDescriptionClient")," that we have created in an earlier step. Note that this requires no code-change to the existing ",(0,r.kt)("inlineCode",{parentName:"li"},"WolframWeatherDescriptionClient"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {CacheClient, CacheGet} from '@gomomento/sdk';\n\n// This is the name of the distributed cache that we will use\n// to store weather results for different cities.\n// This cache must be created beforehand.\nconst CACHE_NAME = 'weather-descriptions';\n\n// Weather data is highly cacheable since it is not likely to change rapidly.\n// Here we can configure the TTL for how long we want to cache the weather data for.\nconst WEATHER_CACHE_TTL_SECONDS = 300;\n\n// This is an inline distributed cache.\n// Results are served from the cache whenever possible.\n// On a cache miss, the actual service is called, then\n// the result will be populated into the cache automatically.\nexport class CachingWeatherDescriptionClient\n  implements WeatherDescriptionClient\n{\n  delegate: WeatherDescriptionClient;\n  momentoCacheClient: IMomentoCache;\n\n  constructor(\n    delegate: WeatherDescriptionClient,\n    momentoCacheClient: CacheClient\n  ) {\n    this.delegate = delegate;\n    this.momentoCacheClient = momentoCacheClient.cache(CACHE_NAME);\n  }\n\n  // With our Momento Cache, we need to establish a keyspace to make sure\n  // that two different cities do not map to the same key.\n  // In this demo we simply use the string name of the city.\n  cacheKey(city: City): string {\n    const cityName = City[city];\n    return cityName;\n  }\n\n  // Asynchronously stores the result into cache to not impact\n  // the critical path of the application.\n  // For more comprehensive error handling,\n  // you may add .then() method to Promise<CacheSet.Response>.\n  populateCacheWithResult(city: City, result: string) {\n    // eslint-disable-next-line @typescript-eslint/no-floating-promises\n    this.momentoCacheClient.set(this.cacheKey(city), result, {\n      ttl: WEATHER_CACHE_TTL_SECONDS,\n    });\n  }\n\n  async getWeatherDescription(city: City): Promise<string> {\n    const getResponse = await this.momentoCacheClient.get(this.cacheKey(city));\n\n    const weatherDescription = getResponse.value();\n    if (!weatherDescription) {\n      // If the weather is not in the cache, call actual client,\n      // and populate the cache.\n      const response = await this.delegate.getWeatherDescription(city);\n      this.populateCacheWithResult(city, response);\n      return response;\n    }\n\n    return weatherDescription;\n  }\n}\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"By using the Decorator Pattern, we can easily compose ",(0,r.kt)("inlineCode",{parentName:"li"},"CachingWeatherDescriptionClient")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"WolframWeatherDescriptionClient")," together to create a new client that does read-aside caching, i.e. if a result is in the cache, return the result, otherwise fallback to retrieving the result from the remote API.\nThis is an example code that leverages Momento Cache to cache results of the WolframAlpha API into a remote cache:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {CacheClient, CredentialProvider} from '@gomomento/sdk';\n\nasync function main() {\n  const momentoClient = await CacheClient.create({\n    credentialProvider: CredentialProvider.fromEnvVar('MOMENTO_API_KEY'),\n    defaultTtlSeconds: 60,\n  });\n  const wolframWeatherClient = new WolframWeatherDescriptionClient();\n  const cachingWeatherClient = new CachingWeatherDescriptionClient(\n    wolframWeatherClient,\n    momentoClient\n  );\n\n  const response = await cachingWeatherClient.getWeatherDescription(\n    City.Phoenix\n  );\n\n  // As of this writing the weather in Arizona is:\n  // \"The weather in Phoenix, Arizona, currently includes no precipitation with clear skies, a wind speed of 9 miles per hour and a temperature of 78 degrees Fahrenheit\"\n  console.log(`${response}`);\n}\n\n")),(0,r.kt)("p",null,"That is it! This is a simple example of how to cache an API result. Here are a few more things that you can tweak further to adapt Momento Cache to your exact use-case:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can further leverage the Decorator pattern to add more functionality without modifying the existing code. For example you can add a Decorator for metrics/logging so that you get instrumentation on error rates and cache hit rates."),(0,r.kt)("li",{parentName:"ol"},"TTL (how long items get to live in a cache) can be adjusted on a per-item basis to fit your use-case. For example, in our earlier code, we could've made the TTLs different for different cities."),(0,r.kt)("li",{parentName:"ol"},"You can cache more than just Strings into Momento Cache. In our earlier example we cache strings but Momento Cache can also accept byte arrays. This allows you to cache an arbitrary object in your application, provided that you implement your own custom serialization/deserialization.")),(0,r.kt)("h2",{id:"see-more"},"See More"),(0,r.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"20px",marginBottom:"20px"}},(0,r.kt)(o.Z,{title:"6 common caching strategies",link:"https://www.gomomento.com/blog/6-common-caching-design-patterns-to-execute-your-caching-strategy",description:"Learn more about other types of caching strategies",mdxType:"ReferenceCard"}),(0,r.kt)(o.Z,{title:"Using Momento to cache chatbot calls",link:"https://www.gomomento.com/resources/case-studies/cydas-people-takes-momento-cache-to-prod-for-their-chatgpt-ai-powered-chatbot-in-just-two-hours",description:"See how CYDAS used Momento to cache calls to LangChain to build a chatbot",mdxType:"ReferenceCard"})))}m.isMDXComponent=!0}}]);