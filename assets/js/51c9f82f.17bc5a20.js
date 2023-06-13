"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5747],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(o),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||n;return o?r.createElement(h,i(i({ref:t},c),{},{components:o})):r.createElement(h,i({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<n;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},5703:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var r=o(7462),a=(o(7294),o(3905));const n={sidebar_position:5,sidebar_label:"Working with Time Series Data",title:"Working with Time Series Data",description:"Learn how to store time series data in Momento Cache",pagination_next:null},i="Storing time series data",s={unversionedId:"develop/guides/working-with-time-series-data",id:"develop/guides/working-with-time-series-data",title:"Working with Time Series Data",description:"Learn how to store time series data in Momento Cache",source:"@site/docs/develop/guides/working-with-time-series-data.md",sourceDirName:"develop/guides",slug:"/develop/guides/working-with-time-series-data",permalink:"/develop/guides/working-with-time-series-data",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/guides/working-with-time-series-data.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Working with Time Series Data",title:"Working with Time Series Data",description:"Learn how to store time series data in Momento Cache",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"Momento Authentication",permalink:"/develop/guides/working-with-momento-auth-tokens"}},l={},d=[{value:"Storing time series data in the SortedSet:",id:"storing-time-series-data-in-the-sortedset",level:2},{value:"Considerations",id:"considerations",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"storing-time-series-data"},"Storing time series data"),(0,a.kt)("p",null,"Temporarily storing time series data enables you to visualize that data without having to worry about longterm storage costs. Let's think about a common use case for time series data like IoT sensors. Sure, it's useful to see what the recent data looks like, but do you need to keep each sensor value indefinitely? With numerous sensors sending metrics into your database, your storage costs will skyrocket. Storing that data in Momento instead is a great way to take advantage of what Momento does best - storing large volumes of data without having to worry about scaling up or longterm storage costs."),(0,a.kt)("p",null,"You can store related data elements in Momento's collection data types such as lists, sets, and dictionaries. You should pick the appropriate data type for your application's access patterns and data schema. For time series data, you should use Momento's SortedSet data type. You can read more about SortedSets ",(0,a.kt)("a",{parentName:"p",href:"https://www.gomomento.com/blog/were-back-with-another-collection-data-type-sorted-sets"},"here"),". Why use SortedSets?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sorting your time series data by timestamp makes it easy for client applications to retrieve and display the data in sorted order."),(0,a.kt)("li",{parentName:"ul"},"Limit query responses with the Momento SDK's SortedSetFetchByRank and SortedSetFetchByScore to a certain number of values or values within a certain timespan.")),(0,a.kt)("h2",{id:"storing-time-series-data-in-the-sortedset"},"Storing time series data in the SortedSet:"),(0,a.kt)("p",null,"Use the Momento SDK's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.momentohq.com/develop/api-reference/collections/sortedsets#sortedsetputelement"},"SortedSetPutElement")," method to insert items into your SortedSet."),(0,a.kt)("p",null,"Let's consider a workload for storing IoT sensor data in a Momento Cache."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Each sensor has its own SortedSet."),(0,a.kt)("li",{parentName:"ul"},"Each sensor_value within sensor's SortedSet is a JSON string containing the value and timestamp\ni.e. ",(0,a.kt)("inlineCode",{parentName:"li"},'JSON.stringify("value":1, "timestamp": 1686583076)')),(0,a.kt)("li",{parentName:"ul"},"Each score for the item in the SortedSet is the timestamp of the datapoint. SortedSets use scores to sort the data within the set.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Code snippet for writing SortedSet into the Cache")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const item_value = JSON.stringify({"sensor_value": sensor_value, "timestamp": timestamp})\n\nconst response = await cacheClient.sortedSetPutElement("sensor_data", `${sensor_id}-sensor-data`, item_value, timestamp)\n')),(0,a.kt)("p",null,"Retrieving time series data from the sorted set:"),(0,a.kt)("p",null,"Use SortedSetFetchByRank to retrieve data from the cache. If you want to retrieve the entire SortedSet, don't pass in any startRank and endRank parameter values."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Code snippet for SortedSetFetchByRank to retrieve the entire SortedSet")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const sensor_data = await cacheClient.sortedSetFetchByRank("sensor_data", `${sensor_id}-sensor-data`)\n')),(0,a.kt)("p",null,"If you only want to retrieve a subset of the SortedSet, you could set the startRank and endRank parameter values as follows:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Code snippet for SortedSetFetchByRank to retrieve a subset of the SortedSet")),(0,a.kt)("p",null,'const sensor_data = await cacheClient.sortedSetFetchByRank("sensor_data", ',(0,a.kt)("inlineCode",{parentName:"p"},"${sensor_id}-sensor-data"),", 0, 10)"),(0,a.kt)("p",null,"If you only want to retrieve data from a specified time period instead of a specific number of values, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"SortedSetFetchByScore"),". "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Code snippet for SortedSetFetchByScore to retrieve a subset of the SortedSet")),(0,a.kt)("p",null,'const sensor_data = await cacheClient.sortedSetFetchByScore("sensor_data", ',(0,a.kt)("inlineCode",{parentName:"p"},"${sensor_id}-sensor-data"),", 1686511076, 1686597476)"),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("p",null,"Time To Live (TTL) Values:"),(0,a.kt)("p",null,"Your TTL value will depend on how long you need to keep the time series data visible for your users. If you're displaying your time series data in a chart on the client application, ensure your earliest time value in the chart is aligned with the TTL for the time series data."),(0,a.kt)("p",null,"Sensor Index Set:"),(0,a.kt)("p",null,"If you have multiple sensors pushing data into your cache, consider adding a Set data type to store all the Sensor ID's. You must pass in a Sensor ID when fetching data from the SortedSets. Your client application can retrieve all the Sensor ID's from this Set prior to fetching the time series data, then fetch data for every sensor from the Sorted Sets."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Set example",src:o(8183).Z,width:"551",height:"531"})))}u.isMDXComponent=!0},8183:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/time-series-example-db22194dbe532e40de3c167f7f3595e7.png"}}]);