"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6906],{1750:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var c=a(4848),o=a(8453);const i={sidebar_position:5,sidebar_label:"Eviction vs Expiration",title:"Cache Concepts - Cache eviction vs expiration with Momento Cache",description:"Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Cache",pagination_next:null},n="Cache Concepts: Cache eviction vs. cache expiration",r={id:"cache/learn/courses/cache-concepts/cache-eviction-vs-cache-expiration",title:"Cache Concepts - Cache eviction vs expiration with Momento Cache",description:"Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Cache",source:"@site/docs/cache/learn/courses/cache-concepts/cache-eviction-vs-cache-expiration.md",sourceDirName:"cache/learn/courses/cache-concepts",slug:"/cache/learn/courses/cache-concepts/cache-eviction-vs-cache-expiration",permalink:"/cache/learn/courses/cache-concepts/cache-eviction-vs-cache-expiration",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/learn/courses/cache-concepts/cache-eviction-vs-cache-expiration.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Eviction vs Expiration",title:"Cache Concepts - Cache eviction vs expiration with Momento Cache",description:"Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Cache",pagination_next:null},sidebar:"cacheSidebar",previous:{title:"Time to Live",permalink:"/cache/learn/courses/cache-concepts/time-to-live"}},s={},h=[{value:"Video",id:"video",level:2},{value:"Transcript",id:"transcript",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"cache-concepts-cache-eviction-vs-cache-expiration",children:"Cache Concepts: Cache eviction vs. cache expiration"}),"\n",(0,c.jsx)(t.p,{children:"This lesson covers the basic purpose and benefits of a database cache. It then breaks down the concepts of cache eviction and cache expiration and explains how they are handled behind the scenes in Momento Cache."}),"\n",(0,c.jsx)(t.h2,{id:"video",children:"Video"}),"\n",(0,c.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/76qpwvn262g",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,c.jsx)(t.h2,{id:"transcript",children:"Transcript"}),"\n",(0,c.jsx)(t.p,{children:"A database cache has a temporary storage area for frequently accessed data from a database. The purpose of a database cache is to reduce the number of times the database must be accessed in order to retrieve data. Database caches are used to improve the performance of applications that rely on a database for data storage and retrieval. They can help to reduce the load in the database server and improve the scalability and availability of your application."}),"\n",(0,c.jsx)(t.p,{children:"Now that we've established that, let's talk about cache eviction and cache expiration. These two concepts are related, but they are quite different. Cache eviction is the cache service removing data to make room for other data. This can happen when the cache is full, and there is no more room to store new data."}),"\n",(0,c.jsx)(t.p,{children:"Cache eviction policies determine which data gets removed from the cache when that happens. Some example cache eviction policies include least recently used (LRU), least frequently used (LFU), and random eviction. Cache expiration is the process of removing data from the cache because it's no longer considered fresh or up-to-date. This is typically determined by a value called the cache time to live, or TTL. This value is assigned to each piece of data when it is stored in the cache. When the TTL value is reached, the data is considered expired and is removed from the cache by the service."}),"\n",(0,c.jsx)(t.p,{children:"To summarize, cache eviction is the process of removing data from the cache to make room for new data, while cache expiration is deleting data from the cache because it is no longer considered fresh or up-to-date. Both of these concepts are important for ensuring the efficiency and effectiveness of a caching system."}),"\n",(0,c.jsx)(t.p,{children:"Now that you know these two terms, let's quickly talk about them as they relate to the Momento Cache service. Momento considers cache evictions to be a key indicator of service quality degradation. The service continually monitors this and will add capacity to maintain a buffer for all customers. The service level objective of Momento Cache is to respect the TTL expiry of all cached items and not evict data."}),"\n",(0,c.jsx)(t.p,{children:"For cache expiration, Momento Cache requires a time to live value in seconds for every object inserted into the cache. There are two places to set that value. Number one, when you establish the connection to the cache in your call to the SDK, you can specify that value. And number two, when you do a write operation, you can override that value on a per-object basis. If you do not set a TTL value in the write operation, the SDK uses the value from the connection object. By default, the maximum value for TTL is 24 hours."}),"\n",(0,c.jsxs)(t.p,{children:['For more information, see the "',(0,c.jsx)(t.a,{href:"/cache/learn/how-it-works/cache-eviction-vs-expiration",children:"Cache eviction vs. cache expiration"}),'" documentation.']})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>r});var c=a(6540);const o={},i=c.createContext(o);function n(e){const t=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),c.createElement(i.Provider,{value:t},e.children)}}}]);