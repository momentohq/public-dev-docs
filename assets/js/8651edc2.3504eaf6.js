"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5120],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>p});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(o),p=n,d=h["".concat(c,".").concat(p)]||h[p]||m[p]||i;return o?a.createElement(d,r(r({ref:t},u),{},{components:o})):a.createElement(d,r({ref:t},u))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<i;l++)r[l]=o[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},7878:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=o(7462),n=(o(7294),o(3905));const i={sidebar_position:3,sidebar_label:"Expiring data with TTL",title:"Expiring data with Time to Live (TTL)",description:"Learn about expiring data from a cache using Time to Live (TTL) in Momento Cache"},r="Expire data with Time-to-Live (TTL) in Momento Cache",s={unversionedId:"cache/learn/how-it-works/expire-data-with-ttl",id:"cache/learn/how-it-works/expire-data-with-ttl",title:"Expiring data with Time to Live (TTL)",description:"Learn about expiring data from a cache using Time to Live (TTL) in Momento Cache",source:"@site/docs/cache/learn/how-it-works/expire-data-with-ttl.md",sourceDirName:"cache/learn/how-it-works",slug:"/cache/learn/how-it-works/expire-data-with-ttl",permalink:"/cache/learn/how-it-works/expire-data-with-ttl",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/learn/how-it-works/expire-data-with-ttl.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Expiring data with TTL",title:"Expiring data with Time to Live (TTL)",description:"Learn about expiring data from a cache using Time to Live (TTL) in Momento Cache"},sidebar:"tutorialSidebar",previous:{title:"How It Works"},next:{title:"Cache eviction vs expiration",permalink:"/cache/learn/how-it-works/cache-eviction-vs-expiration"}},c={},l=[{value:"Expire items after a specified number of seconds",id:"expire-items-after-a-specified-number-of-seconds",level:2},{value:"How to set TTL in Momento Cache",id:"how-to-set-ttl-in-momento-cache",level:2},{value:"Frequently asked questions about TTL",id:"frequently-asked-questions-about-ttl",level:2}],u={toc:l};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"expire-data-with-time-to-live-ttl-in-momento-cache"},"Expire data with Time-to-Live (TTL) in Momento Cache"),(0,n.kt)("p",null,"This document provides an overview of Momento Cache\u2019s time-to-live (TTL) functionality. TTL allows items to expire automatically from the cache after a specified number of seconds."),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/FDmk6RP8-b0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Momento Cache handles TTL expiry and does not consume any bandwidth for metering in your monthly transfer cost.")),(0,n.kt)("h2",{id:"expire-items-after-a-specified-number-of-seconds"},"Expire items after a specified number of seconds"),(0,n.kt)("p",null,"The TTL value is the number of seconds from when Momento Cache writes the item to storage until the item expires from the cache. For example, if you set an item\u2019s TTL value to 900 seconds (15 minutes), the item will expire 15 minutes after insertion into the cache."),(0,n.kt)("h2",{id:"how-to-set-ttl-in-momento-cache"},"How to set TTL in Momento Cache"),(0,n.kt)("p",null,'For more robust examples of the code below in multiple languages, please see "',(0,n.kt)("a",{parentName:"p",href:"./../../develop"},"Developing applications with Momento SDKs"),'"'),(0,n.kt)("p",null,"There are three locations to set a TTL value:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When creating a CacheClient object in a Momento SDK, you must set a TTL value for the connection. Any future SET operation using that client object will use that TTL value, unless you override the value."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const MY_DEFAULT_TTL = 60; // This value is in seconds\nconst momento = await CacheClient.create(authToken, MY_DEFAULT_TTL);\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In a SET operation, you can set a TTL value just for this operation and it will override the TTL value set in the CacheClient object."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"await momento.set(CACHE_NAME, 'key', 'my value', 40)\n// The number 40 is the TTL value in seconds for this item to expire and overrides the connection object's value.\n")),(0,n.kt)("p",{parentName:"li"},"Optionally, you can omit the TTL value from the SET operation entirely and the item is inserted into the cache using the TTL value from the cache client object."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"await momento.set(CACHE_NAME, 'key', 'my value')\n// If you omit the TTL value, this will use the connection object's value.\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you\u2019re using the CLI when you run the command ",(0,n.kt)("inlineCode",{parentName:"p"},"momento configure"),", it writes a configuration file (~/.momento/config) and stores a value you specify for a default TTL in that file. If you write an item with the CLI from that same user and don\u2019t specify a TTL in the SET operation, the CLI will use the value from that configuration file."))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Unless you copy the configuration file with your application, that file and its contents are unique to the location where you ran the ",(0,n.kt)("inlineCode",{parentName:"p"},"momento configure")," command.")),(0,n.kt)("h2",{id:"frequently-asked-questions-about-ttl"},"Frequently asked questions about TTL"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Why do caches need Time to Live (TTL)?"),(0,n.kt)("p",null,"Usually, a cache entry is not the definitive source of a piece of data. Rather, a cache entry is a faster, cheaper, and less durable way to store a piece of data, whether it's an individual record from a different database, some aggregated or computed information from multiple records or sources, or even a resource from an external, third-party application. Using a cache helps to improve latency or reduce load on a dependency in our application. In using a cache, we're anticipating that our cache entry will be requested by another client soon."),(0,n.kt)("p",null,"And yet, most caches don't hold onto all of their entries forever. Partly, this is a function of data staleness. The data you have stored in a cache entry may be changed over time, in which case you want a client to retrieve something fresher than the cached entry. If you have strict requirements around data consistency, you may need to directly update or remove a cache entry whenever its underlying data changes. In other situations, you may be fine serving potentially stale data for a time, while still expiring it regularly to ensure some amount of freshness."),(0,n.kt)("p",null,"A second consideration is simple resource constraints. Caches usually hold their data in RAM, and RAM is a scarce resource. If you never expire entries from your cache, you may find your RAM full when you try to cache new items. Your cache could reject the new entry or, more likely, choose to evict items based on a predetermined eviction algorithm."),(0,n.kt)("p",null,"Most caches were built for a pre-cloud world and thus require you to pre-provision specific amounts of memory available for your cache. For these caches, proper TTL management is critical as overfilling your cache can result in availability issues or cache evictions in ways you don't prefer."),(0,n.kt)("p",null,"In contrast, Momento is designed for the elasticity of the modern cloud. You don't need to pre-provision your cache size -- your Momento cache automatically expands and contracts based on the operations you perform against it. In the normal course of operations, Momento will not evict items based on a lack of available memory."),(0,n.kt)("p",null,"That being said, you should still use TTL on items in your Momento cache to avoid cache staleness and to reduce costs. Let's see how to use TTL with Momento's SimpleCache.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What's the maximum TTL I can set?"),"By default, the limit you can set the TTL for an item is 24 hours. If you need to have data in the cache beyond that time, please ",(0,n.kt)("a",{href:"mailto:support@momentohq.com"},"contact Momento Support"),"."))}m.isMDXComponent=!0}}]);