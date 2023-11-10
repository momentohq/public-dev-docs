"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8187],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(7462),r=a(7294),i=a(6010),l=a(2466),o=a(6550),s=a(1980),u=a(7392),c=a(12);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,u]=p({queryString:a,groupId:n}),[m,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),g=(()=>{const e=s??m;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var g=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),h=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(m(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:h},l,{className:(0,i.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function k(e){const t=(0,g.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},3043:(e,t,a)=>{a(7294)},7235:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(614),r=a(7294);const i=e=>{let{language:t,code:a}=e;return r.createElement(n.Z,{language:t},a)}},6663:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>b,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var n=a(7462),r=a(7294),i=a(3905);a(3043),a(7235);var l=a(4866),o=a(5162),s=a(614);const u=e=>{let{js:t,python:a,java:n,go:i,csharp:u,php:c,rust:m,ruby:h,elixir:d,cli:p}=e;return t||a||n||i||u||c||m||h||d||p?r.createElement(l.Z,null,t&&r.createElement(o.Z,{value:"js",label:"JavaScript"},r.createElement(s.Z,{language:"js"},t)),a&&r.createElement(o.Z,{value:"python",label:"Python"},r.createElement(s.Z,{language:"python"},a)),n&&r.createElement(o.Z,{value:"java",label:"Java"},r.createElement(s.Z,{language:"java"},n)),i&&r.createElement(o.Z,{value:"go",label:"Go"},r.createElement(s.Z,{language:"go"},i)),u&&r.createElement(o.Z,{value:"csharp",label:"C#"},r.createElement(s.Z,{language:"csharp"},u)),c&&r.createElement(o.Z,{value:"php",label:"PHP"},r.createElement(s.Z,{language:"php"},c)),m&&r.createElement(o.Z,{value:"rust",label:"Rust"},r.createElement(s.Z,{language:"rust"},m)),h&&r.createElement(o.Z,{value:"ruby",label:"Ruby"},r.createElement(s.Z,{language:"ruby"},h)),d&&r.createElement(o.Z,{value:"elixir",label:"Elixir"},r.createElement(s.Z,{language:"elixir"},d)),p&&r.createElement(o.Z,{value:"cli",label:"CLI"},r.createElement(s.Z,{language:"cli"},p))):null},c={sidebar_position:2,sidebar_label:"Build a Rate-limiter",title:"Implement a distributed rate-limiter using Momento",description:"Learn how you can implement a distributed rate-limiter using a centralized backend source, Momento."},m="Building a distributed and centralized rate-limiter using Momento",h={unversionedId:"cache/how-to/rate-limiter",id:"cache/how-to/rate-limiter",title:"Implement a distributed rate-limiter using Momento",description:"Learn how you can implement a distributed rate-limiter using a centralized backend source, Momento.",source:"@site/docs/cache/how-to/rate-limiter.mdx",sourceDirName:"cache/how-to",slug:"/cache/how-to/rate-limiter",permalink:"/cache/how-to/rate-limiter",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/how-to/rate-limiter.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Build a Rate-limiter",title:"Implement a distributed rate-limiter using Momento",description:"Learn how you can implement a distributed rate-limiter using a centralized backend source, Momento."},sidebar:"tutorialSidebar",previous:{title:"How To"},next:{title:"Learn"}},d={},p=[{value:"What is rate-limiting?",id:"what-is-rate-limiting",level:2},{value:"What\u2019s the use of rate-limiters?",id:"whats-the-use-of-rate-limiters",level:2},{value:"Using Momento to build a distributed rate-limiter",id:"using-momento-to-build-a-distributed-rate-limiter",level:2},{value:"We want more!",id:"we-want-more",level:2}],f={toc:p},g="wrapper";function b(e){let{components:t,...a}=e;return(0,i.kt)(g,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"building-a-distributed-and-centralized-rate-limiter-using-momento"},"Building a distributed and centralized rate-limiter using Momento"),(0,i.kt)("h2",{id:"what-is-rate-limiting"},"What is rate-limiting?"),(0,i.kt)("p",null,"Rate limiting is a strategy for limiting network traffic. It puts a cap on how often someone can repeat an action within a certain timeframe. Rate-limiting exists literally everywhere; whether you are looking at your Twitter news feed or streaming a live video, there\u2019s a non-zero chance that you are interacting with a rate-limiter. It is watching you, making decisions about your traffic, and rightfully stopping you if you start making too much noise."),(0,i.kt)("h2",{id:"whats-the-use-of-rate-limiters"},"What\u2019s the use of rate-limiters?"),(0,i.kt)("p",null,"The need for rate-limiting stems from the fundamental requirement to maintain the health and quality of any service. Without it, resources could easily become overwhelmed, leading to service degradation or outright failure. This is particularly important in distributed systems, web services, and multi-tenant applications where client requests can vary dramatically in volume and frequency. Rate-limiting ensures a fair distribution of resources, prevents abuse, and can even be a crucial component in defending against certain types of cyber-attacks, such as Distributed Denial of Service (DDoS) attacks."),(0,i.kt)("p",null,"Some common use-cases of rate-limiting includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"API Management: In a platform offering various APIs, rate-limiting is crucial to prevent a single user or service from monopolizing the bandwidth, ensuring that all users have equitable access to the resources.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"E-commerce Websites: During high-traffic events like Black Friday sales, rate-limiting can prevent the website from crashing by controlling the influx of user requests, thus providing a stable and fair shopping experience to all customers.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Online Gaming Servers: Rate-limiting can help in mitigating cheating by throttling the number of actions a player can perform in a given time, ensuring a level playing field and maintaining the game's integrity."))),(0,i.kt)("h2",{id:"using-momento-to-build-a-distributed-rate-limiter"},"Using Momento to build a distributed rate-limiter"),(0,i.kt)("p",null,"Let\u2019s imagine you want to create a distributed rate-limiter that could effectively manage transactions-per-minute (TPM) for individual users.\nOur approach utilizes Momento's ",(0,i.kt)("inlineCode",{parentName:"p"},"increment")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"updateTTL")," ",(0,i.kt)("a",{parentName:"p",href:"./../develop/api-reference"},"APIs"),". This method proves to be not only efficient but also highly accurate."),(0,i.kt)("p",null,"At the heart of our rate-limiter is a key mechanism that allows us to perform rate limiting based on user-per-minute granularity. The key is constructed using a combination of a user or entity and the current minute. This key plays a pivotal role in tracking and limiting the number of transactions a user can make in a given minute."),(0,i.kt)("p",null,"The rate limiter increments the value of the unique key for each user when they make a request, setting a time-to-live (TTL) for the first request of the minute to 60 seconds. This is important as we want our keys to expire as they are not meaningful after they have served their purpose for a given minute."),(0,i.kt)("p",null,"A flow of the rate-limiter looks like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Increment the value of ",(0,i.kt)("inlineCode",{parentName:"li"},"user_id-current_minute"),". If the returned value is 1, that indicates that this was the first request for the user for that given minute. Note that Momento's ",(0,i.kt)("inlineCode",{parentName:"li"},"increment")," API is guaranteed to be atomic. If this return value is 1, we set the TTL of that key using ",(0,i.kt)("inlineCode",{parentName:"li"},"updateTTL")," API to be 60 seconds."),(0,i.kt)("li",{parentName:"ul"},"If the value is less than the configured TPM limit for the rate limiter, we allow the request, or else, throttle it.")),(0,i.kt)("p",null,"Let's dive right into our implementation; pay attention to comments in this code where we explain the thought process."),(0,i.kt)(u,{js:"import {\n  CacheClient,\n  CacheIncrement,\n  CacheUpdateTtl,\n  Configurations,\n  CreateCache,\n  CredentialProvider,\n} from '@gomomento/sdk';\n\n// since our rate limiting buckets are per minute, we expire keys every minute\nexport const RATE_LIMITER_TTL_MILLIS = 60000;\n\nexport class MomentoRateLimiter {\n  _client: CacheClient;\n  _limit: number;\n  _cacheName: string;\n\n  constructor(client: CacheClient, limit: number, cacheName: string) {\n    this._client = client;\n    this._limit = limit;\n    this._cacheName = cacheName;\n  }\n\n  /**\n   * Generates a unique key for a user (baseKey) for the current minute. This key will server as the backend\n   * cache key where we will store the amount of calls that have been made by a user for a given minute.\n   * @param baseKey\n   */\n  generateMinuteKey(baseKey: string): string {\n    const currentDate = new Date();\n    const currentMinute = currentDate.getMinutes();\n    return `${baseKey}_${currentMinute}`;\n  }\n\n  public async isLimitExceeded(id: string): Promise<boolean> {\n    const currentMinuteKey = this.generateMinuteKey(id);\n    // we do not pass a TTL to this; we don't know if the key for this user was present or not\n    const resp = await this._client.increment(\n      this._cacheName,\n      currentMinuteKey\n    );\n\n    if (resp instanceof CacheIncrement.Success) {\n      if (resp.value() <= this._limit) {\n        // if returned value is 1, we know this was the first request in this minute for the given user. So\n        // we set the TTL for this minute's key to 60 seconds now.\n        if (resp.value() === 1) {\n          const updateTTLResp = await this._client.updateTtl(\n            this._cacheName,\n            currentMinuteKey,\n            RATE_LIMITER_TTL_MILLIS\n          );\n          if (!(updateTTLResp instanceof CacheUpdateTtl.Set)) {\n            console.error(\n              `Failed to update TTL; this minute's user requests might be overcounted, key: ${currentMinuteKey}`\n            );\n          }\n        }\n        return false;\n      }\n    } else if (resp instanceof CacheIncrement.Error) {\n      throw new Error(resp.message());\n    }\n\n    return true;\n  }\n}\n\nasync function main() {\n  const cacheClient = await CacheClient.create({\n    configuration: Configurations.Laptop.v1(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n      environmentVariableName: 'MOMENTO_API_KEY',\n    }),\n    defaultTtlSeconds: 60,\n  });\n\n  const tpmLimit = 1;\n  const cacheName = 'rate-limiter';\n\n  const createCacheResp = await cacheClient.createCache(cacheName);\n  if (createCacheResp instanceof CreateCache.Error) {\n    throw new Error(createCacheResp.message());\n  } else if (createCacheResp instanceof CreateCache.AlreadyExists) {\n    console.log(`${cacheName} cache already exists`);\n  }\n\n  const momentoRateLimier = new MomentoRateLimiter(\n    cacheClient,\n    tpmLimit,\n    cacheName\n  );\n\n  const limitExceeded = await momentoRateLimier.isLimitExceeded('user-id');\n  if (!limitExceeded) {\n    // do work for user\n    console.log('Successfully called work and request was allowed');\n  } else {\n    console.warn('Request was throttled');\n  }\n}\n\nmain()\n  .then()\n  .catch((err: Error) => console.error(err.message));\n",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleFileTabsImpl"}),(0,i.kt)("h2",{id:"we-want-more"},"We want more!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can quickly get started with our SDK examples to play around the Momento rate limiter, where you can also simulate contention and cause your rate-limiter to throttle requests.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/rate-limiter"},"Typescript")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.gomomento.com/blog/did-you-say-you-want-a-distributed-rate-limiter"},"Read our blog")," where we analyze different heuristics of the rate-limiter and also compare it with other approaches.")))}b.isMDXComponent=!0}}]);