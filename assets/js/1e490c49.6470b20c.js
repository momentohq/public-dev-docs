"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1054],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1,title:"Momento Node.js SDK",pagination_prev:null,sidebar_label:"Node.js",description:"Information about the Momento Node.js SDK"},i="Momento Node.js SDK",s={unversionedId:"cache/develop/sdks/nodejs/index",id:"cache/develop/sdks/nodejs/index",title:"Momento Node.js SDK",description:"Information about the Momento Node.js SDK",source:"@site/docs/cache/develop/sdks/nodejs/index.md",sourceDirName:"cache/develop/sdks/nodejs",slug:"/cache/develop/sdks/nodejs/",permalink:"/cache/develop/sdks/nodejs/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/sdks/nodejs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Momento Node.js SDK",pagination_prev:null,sidebar_label:"Node.js",description:"Information about the Momento Node.js SDK"},sidebar:"tutorialSidebar",next:{title:"Cache Cheat Sheet",permalink:"/cache/develop/sdks/nodejs/cheat-sheet"}},l={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Resources",id:"resources",level:2},{value:"Integrations",id:"integrations",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-nodejs-sdk"},"Momento Node.js SDK"),(0,r.kt)("img",{src:"/img/nodes.png",width:"95%",alt:"a picture of abstract shapes as building and nodes of data connecting them at high speed"}),(0,r.kt)("p",null,"Welcome to the Momento Node.js SDK documentation!"),(0,r.kt)("p",null,"The Momento Node.js SDK is available via the npm package ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@gomomento/sdk"},(0,r.kt)("inlineCode",{parentName:"a"},"@gomomento/sdk")),"."),(0,r.kt)("p",null,"The source code can be found on GitHub: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript"},"momentohq/client-sdk-javascript"),"."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node version ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"14 or higher")," is required."),(0,r.kt)("li",{parentName:"ul"},"A Momento Auth Token is required; you can get one from the ",(0,r.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento Web Console"),".")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cache/develop/sdks/nodejs/cheat-sheet"},"Node.js SDK Cache Cheat Sheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/README.md"},"Node.js SDK Examples"),": working example projects that illustrate how to use the Node.js SDK"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine"},"Node.js Token Vending Machine"),": provides temporary, restricted scope Momento Auth tokens that can be used by browsers running apps written against the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/packages/client-sdk-web"},"Momento Web SDK"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cache/develop/sdks/nodejs/observability"},"Node.js SDK Observability"),": Logging and Client-side Metrics with the Node.js SDK"),(0,r.kt)("li",{parentName:"ul"},"COMING SOON: Taking your code to prod: Configuration and Error handling in the Node.js SDK")),(0,r.kt)("h2",{id:"integrations"},"Integrations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-node-redis-client"},"Redis Compatibility Client for ",(0,r.kt)("inlineCode",{parentName:"a"},"@redis/client"))," - a drop-in replacement that allows you to use Momento Cache with your existing ",(0,r.kt)("inlineCode",{parentName:"li"},"@redis/client")," code! See also our ",(0,r.kt)("a",{parentName:"li",href:"/cache/develop/integrations/redis-client-compatibility"},"Redis Client Compatibility")," page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-node-ioredis-client"},"Redis Compatibility Client for ",(0,r.kt)("inlineCode",{parentName:"a"},"ioredis"))," - a drop-in replacement that allows you to use Momento Cache with your existing ",(0,r.kt)("inlineCode",{parentName:"li"},"ioredis")," code! See also our ",(0,r.kt)("a",{parentName:"li",href:"/cache/develop/integrations/redis-client-compatibility"},"Redis Client Compatibility")," page.")))}m.isMDXComponent=!0}}]);