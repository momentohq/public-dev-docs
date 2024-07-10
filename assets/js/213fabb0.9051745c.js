"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8316],{1875:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=a(4848),s=a(8453);const i={sidebar_position:4,sidebar_label:"Time to Live",title:"Cache Concepts - Time to live (TTL)",description:"Learn about the use of Time to live when caching data in a high speed serverless managed cache."},o="Cache Concepts: Time to live (TTL)",c={id:"cache/learn/courses/cache-concepts/time-to-live",title:"Cache Concepts - Time to live (TTL)",description:"Learn about the use of Time to live when caching data in a high speed serverless managed cache.",source:"@site/docs/cache/learn/courses/cache-concepts/time-to-live.md",sourceDirName:"cache/learn/courses/cache-concepts",slug:"/cache/learn/courses/cache-concepts/time-to-live",permalink:"/cache/learn/courses/cache-concepts/time-to-live",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/learn/courses/cache-concepts/time-to-live.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Time to Live",title:"Cache Concepts - Time to live (TTL)",description:"Learn about the use of Time to live when caching data in a high speed serverless managed cache."},sidebar:"cacheSidebar",previous:{title:"Why Use a Serverless Managed Service",permalink:"/cache/learn/courses/cache-concepts/why-use-serverless-services"},next:{title:"Eviction vs Expiration",permalink:"/cache/learn/courses/cache-concepts/cache-eviction-vs-cache-expiration"}},r={},h=[{value:"Video",id:"video",level:2},{value:"Transcript",id:"transcript",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"cache-concepts-time-to-live-ttl",children:"Cache Concepts: Time to live (TTL)"}),"\n",(0,n.jsx)(t.p,{children:"This lesson unpacks the important concept of time to live (TTL), including best practices and common use cases. It also covers defaults and limits for TTL in Momento Cache."}),"\n",(0,n.jsx)(t.h2,{id:"video",children:"Video"}),"\n",(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/FDmk6RP8-b0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,n.jsx)(t.h2,{id:"transcript",children:"Transcript"}),"\n",(0,n.jsx)(t.p,{children:"Time to live, or TTL, is a value assigned to an item of data stored in a cache. It determines how long the data will remain in the cache before it is considered expired and will no longer be returned to clients if requested. So, why is TTL important?"}),"\n",(0,n.jsx)(t.p,{children:"Well, imagine a situation where the data in the cache is overly stale. This could lead to information that's no longer relevant being displayed to a user, which can sometimes have severe consequences. By setting a TTL value, we can ensure that the data in the cache is deleted after a given time period has elapsed, and your app knows to refresh the item from the authoritative database."}),"\n",(0,n.jsx)(t.p,{children:"Storing session tokens is a good example use case scenario for TTL. Let's say you want to ensure the session lasts around 30 minutes at most. You set the TTL value on the session token item inserted into the cache for 30 minutes from session creation, and the cache deletes the session token after 30 minutes has elapsed. If your app checks for the token's existence and there's a cache miss, the app knows the user must log in again."}),"\n",(0,n.jsx)(t.p,{children:"If your app checks for the token's existence, and there's a cache miss, the app knows the user must log in again. But there's a tradeoff to consider when setting a TTL value. Suppose you were setting TTL to ensure you have the freshest version of data in the cache from the database. What if you have the value set too low on frequently-read data? In that case, the cache will be frequently refreshed by the app, leading to an increased load on the database and, thus slower performance."}),"\n",(0,n.jsxs)(t.p,{children:["On the other hand, if the TTL value is set too high, the data in the cache may become stale and inaccurate. That last part depends on which caching style you use, but that's a topic for another video. I will put a link in the description (",(0,n.jsx)(t.a,{href:"https://docs.momentohq.com/introduction/common-caching-patterns",children:"here"}),") for more on that subject. Anyhow, finding the right balance for the TTL value is crucial to your application and may take some time to tune, depending on your use case."]}),"\n",(0,n.jsx)(t.p,{children:"Now that we know what TTL is and how to use it, let's discuss how it relates to the Momento Cache service."}),"\n",(0,n.jsx)(t.p,{children:"Momento Cache service requires a time to live value in seconds for every item stored in the cache. There are two places to set that value. The first one is passing in a TTL value when the app instantiates the cache connection object in an SDK call. That value is required in the instantiation and will be used in all write operations unless you override it."}),"\n",(0,n.jsx)(t.p,{children:"This leads me to the second place. You can set the TTL value on any write operation to override that value set from the connection object. This way, every item gets its own TTL value if need be. Be advised that by default, in Momento Cache, the maximum value you can set for a TTL is 24 hours. Even if you put a number higher than 24 hours, the cache sets the value back to 24 hours."}),"\n",(0,n.jsx)(t.p,{children:"In conclusion, cache time to live is a critical concept that helps ensure the accuracy and freshness of the data and the cache. By carefully considering the trade-offs and finding the right balance, we can ensure that our systems are efficient and perform at their best."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>c});var n=a(6540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);