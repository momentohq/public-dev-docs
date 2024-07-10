"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3939],{5165:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=o(4848),n=o(8453);const a={sidebar_position:3,sidebar_label:"Expiring data with TTL",title:"Expiring data with Time to Live (TTL)",description:"Learn about expiring data from a cache using Time to Live (TTL) in Momento Cache"},r="Expire data with Time-to-Live (TTL) in Momento Cache",s={id:"cache/learn/how-it-works/expire-data-with-ttl",title:"Expiring data with Time to Live (TTL)",description:"Learn about expiring data from a cache using Time to Live (TTL) in Momento Cache",source:"@site/docs/cache/learn/how-it-works/expire-data-with-ttl.md",sourceDirName:"cache/learn/how-it-works",slug:"/cache/learn/how-it-works/expire-data-with-ttl",permalink:"/cache/learn/how-it-works/expire-data-with-ttl",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/learn/how-it-works/expire-data-with-ttl.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Expiring data with TTL",title:"Expiring data with Time to Live (TTL)",description:"Learn about expiring data from a cache using Time to Live (TTL) in Momento Cache"},sidebar:"cacheSidebar",previous:{title:"How It Works"},next:{title:"Cache eviction vs expiration",permalink:"/cache/learn/how-it-works/cache-eviction-vs-expiration"}},c={},l=[{value:"Expire items after a specified number of seconds",id:"expire-items-after-a-specified-number-of-seconds",level:2},{value:"How to set TTL in Momento Cache",id:"how-to-set-ttl-in-momento-cache",level:2},{value:"Frequently asked questions about TTL",id:"frequently-asked-questions-about-ttl",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"expire-data-with-time-to-live-ttl-in-momento-cache",children:"Expire data with Time-to-Live (TTL) in Momento Cache"}),"\n",(0,i.jsx)(t.p,{children:"This document provides an overview of Momento Cache\u2019s time-to-live (TTL) functionality. TTL allows items to expire automatically from the cache after a specified number of seconds."}),"\n",(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/FDmk6RP8-b0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Momento Cache handles TTL expiry and does not consume any bandwidth for metering in your monthly transfer cost."})}),"\n",(0,i.jsx)(t.h2,{id:"expire-items-after-a-specified-number-of-seconds",children:"Expire items after a specified number of seconds"}),"\n",(0,i.jsx)(t.p,{children:"The TTL value is the number of seconds from when Momento Cache writes the item to storage until the item expires from the cache. For example, if you set an item\u2019s TTL value to 900 seconds (15 minutes), the item will expire 15 minutes after insertion into the cache."}),"\n",(0,i.jsx)(t.h2,{id:"how-to-set-ttl-in-momento-cache",children:"How to set TTL in Momento Cache"}),"\n",(0,i.jsxs)(t.p,{children:['For more robust examples of the code below in multiple languages, please see "',(0,i.jsx)(t.a,{href:"../../develop",children:"Developing applications with Momento SDKs"}),'"']}),"\n",(0,i.jsx)(t.p,{children:"There are three locations to set a TTL value:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"When creating a CacheClient object in a Momento SDK, you must set a TTL value for the connection. Any future SET operation using that client object will use that TTL value, unless you override the value."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const MY_DEFAULT_TTL = 60; // This value is in seconds\nconst momento = await CacheClient.create(authToken, MY_DEFAULT_TTL);\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"In a SET operation, you can set a TTL value just for this operation and it will override the TTL value set in the CacheClient object."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"await momento.set(CACHE_NAME, 'key', 'my value', 40)\n// The number 40 is the TTL value in seconds for this item to expire and overrides the connection object's value.\n"})}),"\n",(0,i.jsx)(t.p,{children:"Optionally, you can omit the TTL value from the SET operation entirely and the item is inserted into the cache using the TTL value from the cache client object."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"await momento.set(CACHE_NAME, 'key', 'my value')\n// If you omit the TTL value, this will use the connection object's value.\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["If you\u2019re using the CLI when you run the command ",(0,i.jsx)(t.code,{children:"momento configure"}),", it writes a configuration file (~/.momento/config) and stores a value you specify for a default TTL in that file. If you write an item with the CLI from that same user and don\u2019t specify a TTL in the SET operation, the CLI will use the value from that configuration file."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Unless you copy the configuration file with your application, that file and its contents are unique to the location where you ran the ",(0,i.jsx)(t.code,{children:"momento configure"})," command."]})}),"\n",(0,i.jsx)(t.h2,{id:"frequently-asked-questions-about-ttl",children:"Frequently asked questions about TTL"}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Why do caches need Time to Live (TTL)?"}),(0,i.jsx)(t.p,{children:"Usually, a cache entry is not the definitive source of a piece of data. Rather, a cache entry is a faster, cheaper, and less durable way to store a piece of data, whether it's an individual record from a different database, some aggregated or computed information from multiple records or sources, or even a resource from an external, third-party application. Using a cache helps to improve latency or reduce load on a dependency in our application. In using a cache, we're anticipating that our cache entry will be requested by another client soon."}),(0,i.jsx)(t.p,{children:"And yet, most caches don't hold onto all of their entries forever. Partly, this is a function of data staleness. The data you have stored in a cache entry may be changed over time, in which case you want a client to retrieve something fresher than the cached entry. If you have strict requirements around data consistency, you may need to directly update or remove a cache entry whenever its underlying data changes. In other situations, you may be fine serving potentially stale data for a time, while still expiring it regularly to ensure some amount of freshness."}),(0,i.jsx)(t.p,{children:"A second consideration is simple resource constraints. Caches usually hold their data in RAM, and RAM is a scarce resource. If you never expire entries from your cache, you may find your RAM full when you try to cache new items. Your cache could reject the new entry or, more likely, choose to evict items based on a predetermined eviction algorithm."}),(0,i.jsx)(t.p,{children:"Most caches were built for a pre-cloud world and thus require you to pre-provision specific amounts of memory available for your cache. For these caches, proper TTL management is critical as overfilling your cache can result in availability issues or cache evictions in ways you don't prefer."}),(0,i.jsx)(t.p,{children:"In contrast, Momento is designed for the elasticity of the modern cloud. You don't need to pre-provision your cache size -- your Momento cache automatically expands and contracts based on the operations you perform against it. In the normal course of operations, Momento will not evict items based on a lack of available memory."}),(0,i.jsx)(t.p,{children:"That being said, you should still use TTL on items in your Momento cache to avoid cache staleness and to reduce costs. Let's see how to use TTL with Momento's SimpleCache."})]}),"\n",(0,i.jsx)(o,{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)("summary",{children:"What's the maximum TTL I can set?"}),"\nBy default, the limit you can set the TTL for an item is 24 hours. If you need to have data in the cache beyond that time, please ",(0,i.jsx)("a",{href:"mailto:support@momentohq.com",children:"contact Momento Support"}),"."]})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>s});var i=o(6540);const n={},a=i.createContext(n);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);