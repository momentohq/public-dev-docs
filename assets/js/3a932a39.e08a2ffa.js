"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1303],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(o),p=r,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||a;return o?n.createElement(m,i(i({ref:t},h),{},{components:o})):n.createElement(m,i({ref:t},h))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},1056:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:2,sidebar_label:"Metrics in the Console",title:"Metrics in the Console",pagination_prev:null,description:"Metrics in the console",hide_title:!0},i="Metrics in the console",s={unversionedId:"cache/manage/metrics_in_the_console",id:"cache/manage/metrics_in_the_console",title:"Metrics in the Console",description:"Metrics in the console",source:"@site/docs/cache/manage/metrics_in_the_console.md",sourceDirName:"cache/manage",slug:"/cache/manage/metrics_in_the_console",permalink:"/cache/manage/metrics_in_the_console",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/manage/metrics_in_the_console.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Metrics in the Console",title:"Metrics in the Console",pagination_prev:null,description:"Metrics in the console",hide_title:!0},sidebar:"tutorialSidebar",next:{title:"Pricing and Free Tier",permalink:"/cache/manage/pricing"}},c={},l=[{value:"TPS (transactions per second)",id:"tps-transactions-per-second",level:2},{value:"Byte count (data volume in/out of your Momento caches)",id:"byte-count-data-volume-inout-of-your-momento-caches",level:2},{value:"Errors and successes",id:"errors-and-successes",level:2},{value:"Hits and misses (hit rate)",id:"hits-and-misses-hit-rate",level:2},{value:"FAQ&#39;s",id:"faqs",level:3}],h={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metrics-in-the-console"},"Metrics in the console"),(0,r.kt)("p",null,"When developing and operating applications with Momento Cache, you'll want visibility to effectively diagnose bugs and optimize performance. Momento provides an hour of basic service-side metrics to all customers via the Momento console, aimed at facilitating troubleshooting and tuning. If you're an enterprise with critical dependency on Momento Cache, we recommend partnering more closely with the Momento team for support and delivery of detailed historical metrics."),(0,r.kt)("p",null,"Within the Momento console, you can visit the cache metrics dashboard by selecting the small bar graph icon on the left navigation menu, as shown below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:o(6342).Z,width:"1019",height:"599"})),(0,r.kt)("p",null,"The available metrics cover cache data plane operations only (control plane operations such as creation or deletion of a cache are not included), and for the preceding hour. The metrics presently show an aggregation for all the caches in your Momento account. You can view point data for any given minute by hovering over the bubble for that minute in the line graph. Metrics display typically lags by a minute or two."),(0,r.kt)("h2",{id:"tps-transactions-per-second"},"TPS (transactions per second)"),(0,r.kt)("p",null,"This line graph represents the number of cache data operation requests per second, averaged over each one minute period. You can use this to understand the level of application activity within your caches. If you don't see anything here, you're not using any caches and should check the operational health of your application and the logic within your code!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:o(8885).Z,width:"1518",height:"948"})),(0,r.kt)("h2",{id:"byte-count-data-volume-inout-of-your-momento-caches"},"Byte count (data volume in/out of your Momento caches)"),(0,r.kt)("p",null,"This line graph represents the number of bytes transferred in or out of your Momento caches summed over the one minute period. The total byte count transferred over the most recent hour is also shown in the top bar. You can use this to understand the level of application activity within your caches. If you don't see anything here, you're not using any caches and should check the operational health of your application and the logic within your code! The information on data transferred can be used to get an estimate of the throughput your applications are driving to your caches, which can tell you what your cost expectations might be for the month. Looking at both the TPS and the byte count metrics can also give you rough information about cache item size."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:o(7999).Z,width:"1518",height:"944"})),(0,r.kt)("h2",{id:"errors-and-successes"},"Errors and successes"),(0,r.kt)("p",null,"This graph tells you about the number of error and success responses from Momento for application requests to your caches. It can be viewed as a percentage or as a raw count of responses for the minute. If you are seeing an elevated level of errors, dig closer into your application logs to better understand the cause. Elevated error rates can be an indicator that your application requests are being throttled by Momento due to encountering a ",(0,r.kt)("a",{parentName:"p",href:"./limits"},"service limit"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:o(4950).Z,width:"1514",height:"1078"})),(0,r.kt)("h2",{id:"hits-and-misses-hit-rate"},"Hits and misses (hit rate)"),(0,r.kt)("p",null,"This graph tells you how well your application is applying caching - you want to see a high rate of hits versus misses. Factors that can affect your hit rate include the TTL chosen for your items and your strategy for populating the cache (you need to write the items into the cache if you expect to find them there next time you make a read). The higher the hit rate you achieve, the greater the benefit you'll see from caching. However, you should balance this against the staleness of the data your application is working with if you are using long TTLs."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:o(4379).Z,width:"1512",height:"1074"})),(0,r.kt)("h3",{id:"faqs"},"FAQ's"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How can I get metrics for more than an hour?"),"For production, we recommend partnering with the Momento team for support - this includes publishing of detailed metrics into your observability tooling (presently CloudWatch but more options to come). With delivery of detailed metrics enabled, you can build alarms and dashboards in accordance with your operating standards."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Why are there no latency metrics provided?"),"Momento can only measure latency associated with traffic internal to the service (between request routers and storage nodes) - a much better indicator for your application is to measure latency as experienced by the client. This tells much more about the overall latency story and the experience your users are receiving. You might also consider using a canary to test and report on latency as experienced by end users somewhere further away on the network.",(0,r.kt)("br",null),(0,r.kt)("br",null),"For customers receiving detailed metrics delivery to CloudWatch, a latency metric with percentiles is provided. This can be used in comparison with client-side latency and canary latency to quickly determine whether a user experience problem is related to your Momento cache or if you should look elsewhere for root cause and resolution."))}d.isMDXComponent=!0},7999:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/metrics_bytecount-16a0c56f44f79d94960f23300c1d4e95.png"},4379:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/metrics_hit-miss-a73a870a07547c0a73bee51e5ff0404e.png"},6342:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/metrics_select-fa7782d9e072a2b8bd0d03f0fa16a416.png"},4950:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/metrics_success-error-bae258feb5c20dca400fe94cbed612e1.png"},8885:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/metrics_tps-c32cdb95c2f0410677efa8e3c62fe4ea.png"}}]);