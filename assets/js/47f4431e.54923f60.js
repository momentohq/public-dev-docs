"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6749],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(a),d=o,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||c;return a?r.createElement(m,n(n({ref:t},p),{},{components:a})):r.createElement(m,n({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=a.length,n=new Array(c);n[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:o,n[1]=i;for(var l=2;l<c;l++)n[l]=a[l];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5926:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=a(7462),o=(a(7294),a(3905));const c={sidebar_position:1,sidebar_label:"Cache Concepts",title:"Cache concepts course",pagination_prev:null,description:"This cache concepts course gets you going with what you need to know on the basics of caching data for your application."},n="Course: Cache concepts",i={unversionedId:"cache/learn/courses/cache-concepts/index",id:"cache/learn/courses/cache-concepts/index",title:"Cache concepts course",description:"This cache concepts course gets you going with what you need to know on the basics of caching data for your application.",source:"@site/docs/cache/learn/courses/cache-concepts/index.md",sourceDirName:"cache/learn/courses/cache-concepts",slug:"/cache/learn/courses/cache-concepts/",permalink:"/cache/learn/courses/cache-concepts/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/learn/courses/cache-concepts/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cache Concepts",title:"Cache concepts course",pagination_prev:null,description:"This cache concepts course gets you going with what you need to know on the basics of caching data for your application."},sidebar:"tutorialSidebar",next:{title:"Common Caching Use Cases",permalink:"/cache/learn/courses/cache-concepts/common-caching-use-cases"}},s={},l=[{value:"Video",id:"video",level:2},{value:"Transcript",id:"transcript",level:2}],p={toc:l},h="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"course-cache-concepts"},"Course: Cache concepts"),(0,o.kt)("p",null,"This beginner caching course covers such topics as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What is caching"),(0,o.kt)("li",{parentName:"ul"},"Why it matters"),(0,o.kt)("li",{parentName:"ul"},"Why a serverless service is great for caching"),(0,o.kt)("li",{parentName:"ul"},"How caching works"),(0,o.kt)("li",{parentName:"ul"},"Caching strategies"),(0,o.kt)("li",{parentName:"ul"},"How to employ those strategies"),(0,o.kt)("li",{parentName:"ul"},"Time to live (TTL)"),(0,o.kt)("li",{parentName:"ul"},"Cache eviction vs cache expiration")),(0,o.kt)("h2",{id:"video"},"Video"),(0,o.kt)("p",null,"This intro video (1:38) explains the information you need to know to get going with caching in your architecture."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/yErvJ2Bv6dY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("h2",{id:"transcript"},"Transcript"),(0,o.kt)("p",null,"If you have never worked with caching or want a refresher on the basics, you're in the right place. In this course, you'll learn what caching is, why it matters, and why a serverless service is a great choice for caching. I'll also walk through the basics of how caching works and caching strategies and how to employ them in your application architecture."),(0,o.kt)("p",null,"Let's talk about what is caching. Caching is a technique used in software development to store frequently used data in a temporary storage area to speed up the performance of an application. The storage area might be in-memory, local disk-based storage, or a distributed caching service. The goal of application caching is to reduce the number of times an application has to retrieve data from a slower storage system, such as a database, an API, or a remote service, and to retrieve that data from a cache closer to where the data is needed."),(0,o.kt)("p",null,"Application caching can be used to store a variety of data, including database query results, API responses, images, and other data. By caching this data, an application can reduce the time it takes to retrieve the data and thus improve the overall experience of the application."),(0,o.kt)("p",null,"The choice of caching technology to use depends on the specific needs of the application and a few select criteria, which we will get into in the course. With this knowledge, let's press on to more topics."))}u.isMDXComponent=!0}}]);