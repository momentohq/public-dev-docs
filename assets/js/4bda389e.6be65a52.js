"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7675],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>g});var i=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),h=function(e){var a=i.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},l=function(e){var a=h(e.components);return i.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},p=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=h(t),p=n,g=d["".concat(s,".").concat(p)]||d[p]||u[p]||r;return t?i.createElement(g,o(o({ref:a},l),{},{components:t})):i.createElement(g,o({ref:a},l))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=p;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c[d]="string"==typeof e?e:n,o[1]=c;for(var h=2;h<r;h++)o[h]=t[h];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4817:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var i=t(7462),n=(t(7294),t(3905));const r={sidebar_position:3,sidebar_label:"Common Caching Strategies",title:"Common Caching Strategies",pagination_next:null,description:"Learn what serverless is in terms of caching and what Momento Cache can be your simple, fast cache for your apps."},o="Common caching strategies",c={unversionedId:"cache/introduction/common-caching-strategies",id:"cache/introduction/common-caching-strategies",title:"Common Caching Strategies",description:"Learn what serverless is in terms of caching and what Momento Cache can be your simple, fast cache for your apps.",source:"@site/docs/cache/introduction/common-caching-strategies.md",sourceDirName:"cache/introduction",slug:"/cache/introduction/common-caching-strategies",permalink:"/cache/introduction/common-caching-strategies",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/introduction/common-caching-strategies.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Common Caching Strategies",title:"Common Caching Strategies",pagination_next:null,description:"Learn what serverless is in terms of caching and what Momento Cache can be your simple, fast cache for your apps."},sidebar:"tutorialSidebar",previous:{title:"Common Caching Patterns",permalink:"/cache/introduction/common-caching-patterns"}},s={},h=[{value:"Local browser caching",id:"local-browser-caching",level:2},{value:"Local backend caching",id:"local-backend-caching",level:2},{value:"Read-aside caching",id:"read-aside-caching",level:2},{value:"Write-aside caching",id:"write-aside-caching",level:2},{value:"Read-through and write-through caching",id:"read-through-and-write-through-caching",level:2}],l={toc:h},d="wrapper";function u(e){let{components:a,...r}=e;return(0,n.kt)(d,(0,i.Z)({},l,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"common-caching-strategies"},"Common caching strategies"),(0,n.kt)("p",null,"Now that we know the key choices you need to make when implementing a caching strategy, let's review some popular caching patterns. For each pattern, we will describe the pattern, the choices the pattern makes on the three questions above, and when you may want to use that pattern."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image of a fast moving city as Momento caching strategies",src:t(6408).Z,width:"1000",height:"398"})),(0,n.kt)("h2",{id:"local-browser-caching"},"Local browser caching"),(0,n.kt)("p",null,"The first, and perhaps simplest, caching strategy is local browser caching. If you are building a web-based application accessed from a browser, you can use ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"local storage")," to store key-value data in the user's browser. For example, once a user authenticates to your service, you may store some information about the user's ID and profile used to access the service to speed display of your application upon subsequent viewings."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cached data in local storage",src:t(3761).Z,title:"Caching in local storage",width:"1207",height:"176"})),(0,n.kt)("p",null,"Local browser caching is ",(0,n.kt)("strong",{parentName:"p"},"local"),", ",(0,n.kt)("strong",{parentName:"p"},"aside")," caching and is likely written at read-time."),(0,n.kt)("p",null,"The benefits of local browser caching are its simplicity, as the local storage API is included in modern web browsers. Additionally, you don't need to worry about provisioning a cache in advance or running out of space, as you're effectively renting out space on your user's machine to cache this data."),(0,n.kt)("p",null,"The downsides of local browser caching is that it's only useful in specific circumstances. If a user reuses a browser, you can speed up certain operations easily. However, the cached data does not apply to the user when using a different device or even using a different browser instance on the device. Further, there's no mechanism for your backend data source to proactively invalidate items in the local storage cache if the underlying data has changed."),(0,n.kt)("h2",{id:"local-backend-caching"},"Local backend caching"),(0,n.kt)("p",null,"A second caching strategy is another local strategy. With local backend caching, your backend server instances may cache network responses or intermediate data from other systems. This data is often cached in-memory within your application process, such as with key-value maps in your programming language. When your backend instance needs to access that data, it will first check the in-memory object, then fall back to the primary data source if the cached value is not present."),(0,n.kt)("p",null,"Like local browser caching, this is a ",(0,n.kt)("strong",{parentName:"p"},"local"),", ",(0,n.kt)("strong",{parentName:"p"},"aside")," caching strategy that is likely written at read-time."),(0,n.kt)("p",null,"The benefits of this strategy are in its ease of use and simplicity. If you have data that is frequently accessed and relatively long-lived, you can quickly cache it on individual server instances without standing up and operating additional infrastructure. This can work well for configuration data or other slow-moving data."),(0,n.kt)("p",null,"In a way, this is similar to the way we ",(0,n.kt)("a",{parentName:"p",href:"./../develop/guides/caching-with-aws-lambda#connection-reuse"},'reuse (or "cache") our Momento SimpleClient within AWS Lambda to enable connection reuse'),"!."),(0,n.kt)("p",null,"The downside of this caching strategy is that it is less effective than remote caching methods. Each backend instance will have its own independent cache. If you have a broad set of data to cache, and you only cache it once it has been requested once on that instance, your cache hit rate can be quite low. Further, the cache hit rate gets even lower as your cluster size (and, likely, your overall load) increases! This is particularly troublesome when caching with hyper-ephemeral compute like AWS Lambda where your instances can be created and destroyed regularly. Finally, like with local browser caching, it can be difficult to invalidate expired data on the backend instances if the underlying data changes."),(0,n.kt)("h2",{id:"read-aside-caching"},"Read-aside caching"),(0,n.kt)("p",null,'The third, and most common, caching strategy is read-aside caching (commonly called "lazy loading"). With read-aside caching, your application will first try to request your needed data from a cache. If the data is there, it will return to the caller. If not, it will request the data from the primary data source. Then, it will store the data in the cache for the next attempt and return the data to the caller.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Architecture diagram of read-aside caching",src:t(8668).Z,title:"Read-aside caching",width:"560",height:"760"})),(0,n.kt)("p",null,"This is a ",(0,n.kt)("strong",{parentName:"p"},"remote, read-based, aside "),"caching strategy."),(0,n.kt)("p",null,"The benefits of a read-aside caching strategy are in the improved cache hit rate and in the general applicability to most problems. For most access patterns, a piece of data that is accessed once is more likely to be accessed again soon after. By caching a piece of data in a centralized location after it has been read, we can improve the cache hit rate across our fleet of servers. Further, the read-aside cache strategy applies to nearly any situation. You can cache at any point in your application that makes sense -- a network response, after some intermediate calculation, or full, aggregated responses to an HTTP client."),(0,n.kt)("p",null,"Moving from local to remote caching will increase our hit rate, but it will also increase our operations burden and application complexity. We have an additional piece of infrastructure to manage and must consider its effect on overall system availability. You may think availability won't be affected because it falls back to a primary data source, but many outages are due to an initial cache failure leading to unsustainable load on a primary data source."),(0,n.kt)("p",null,"Additionally, the read-aside cache does pay a latency cost for the initial read of a piece of data. If your application reads are spread across records in your application, you might have a nearly full cache along with a low cache hit rate overall."),(0,n.kt)("h2",{id:"write-aside-caching"},"Write-aside caching"),(0,n.kt)("p",null,"The next caching strategy is similar to the previous. With write-aside caching, we are using a centralized, aside cache like with read-aside caching. However, rather than lazily loading items into our cache after accessing it for the first time, we are proactively pushing data to our cache when we write it."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Architecture diagram of write-aside caching",src:t(7364).Z,title:"Write-aside caching",width:"580",height:"760"})),(0,n.kt)("p",null,"This is a ",(0,n.kt)("strong",{parentName:"p"},"remote, write-based, aside "),"caching strategy."),(0,n.kt)("p",null,"Many of the benefits of the write-aside caching strategy are similar to the read-aside caching strategy. You should have a higher cache hit rate with a centralized cache. Further, your cache hit rate should be even higher as you won't have the initial miss for each entry. This can reduce latency for data that you know will be accessed soon after it is written. Finally, when implemented correctly, you can reduce the chance of stale data as all data updates are immediately reflected into the cache."),(0,n.kt)("p",null,"The downsides of the write-aside strategy are in its added complexity. Read-aside caching is straight-forward in how it is implemented within a single data access path. With write-aside caching, you need your read and write paths to work together to understand the cache key and value format. Further, you need a deeper understanding of both your read and write access patterns. This can require careful auditing and constant vigilance to prevent stale data across patterns."),(0,n.kt)("h2",{id:"read-through-and-write-through-caching"},"Read-through and write-through caching"),(0,n.kt)("p",null,"The final two strategies are read-through and write-through caching. These two strategies are unique in that all data access goes through the cache directly. Your application will make a request to the cache to fetch the requested data. If the data is available locally, the cache will return it. Otherwise, the ",(0,n.kt)("em",{parentName:"p"},"cache itself")," will do the work to fetch the data from the primary data source, cache the data, and return it to you."),(0,n.kt)("p",null,"For example, the image below shows the flow for a write-through cache. First, a write request comes to our application. The application writes the data directly to the cache, and the cache is responsible for persisting it back to the main database. Once the cache returns to the application indicating that the write is persisted, then the application returns a response."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Architecture diagram of write-through caching",src:t(1873).Z,title:"Write-through caching",width:"756",height:"760"})),(0,n.kt)("p",null,"This is a ",(0,n.kt)("strong",{parentName:"p"},"remote, inline")," caching strategy that can be used on either the read side or the write side."),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Content_delivery_network"},"content delivery network")," (CDN) is a type of read-through cache, as you can see in the image below."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Architecture diagram of a content delivery network (CDN)",src:t(9025).Z,title:"Read-through CDN",width:"870",height:"301"})),(0,n.kt)("p",null,"A client may make an HTTP request for a piece of content, and the CDN will serve it from an edge location if available or make a trip back to the origin if not. If the CDN retrieves it from the origin, then it will store it on the edge for subsequent requests. There are also a few other HTTP-based read-through caches, such as ",(0,n.kt)("a",{parentName:"p",href:"https://varnish-cache.org/"},"Varnish")," or even ",(0,n.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"Nginx"),"."),(0,n.kt)("p",null,"Database-based inline caches are more rare, but they do exist. ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/dynamodb/dax/"},"DynamoDB Accelerator")," (DAX) is a read- and write-through cache for DynamoDB. You can perform the same DynamoDB operations against DAX as against your DynamoDB table, and your DAX instance will forward reads and writes to the underlying DynamoDB table as needed."),(0,n.kt)("p",null,"The benefits of an inline cache are in their simplicity from a client perspective. You don't need to manage cache keys or implement multi-step logic to handle cache misses. The inline cache handles this for you. Additionally, because it is a remote cache, it gets the benefits of a higher cache hit rate that we saw from aside caches."),(0,n.kt)("p",null,"Inline caches have downsides as well. First, inline caches for your data source can be hard to find or non-existent. The creator of an inline cache needs to implement the logic to handle fallback to the underlying data source. Depending on the implementation, there can be discrepancies in how your application works with and without the inline cache. Further, using an inline cache adds a critical piece of infrastructure to your application and can affect availability even more than an aside cache.\u200b\u200b"))}u.isMDXComponent=!0},3761:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/local-storage-caching-8fdad5d220416e8d2bec417c542ee82d.png"},8668:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/read-aside-caching-1acc971ecbacc3b2ab849e23535e845c.png"},9025:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/read-through-cdn-69630182d743ee83526444d9a981f842.png"},7364:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/write-aside-caching-40ad59b23711d30f65a9a7dcd70b9d79.png"},1873:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/write-through-caching-635e0645a848c7b64b6e1de6302d05d9.png"},6408:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/common-caching-strategies-ba70e33ddde0d2378a8102fcb773fdf0.jpg"}}]);