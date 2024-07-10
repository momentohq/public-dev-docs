(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6568],{4196:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var n=r(4848),o=r(8453),s=r(8254),i=r(7206);const a={sidebar_position:1,sidebar_label:"Momento Cache",title:"Cache",description:"Learn what you need to know to speed up your cloud application with the world's first serverless cache.",pagination_next:null,hide_title:!0,keywords:["momento","cache","caching","eda","event-driven architecture","redis","serverless"]},c="What is Momento Cache?",l={id:"cache/index",title:"Cache",description:"Learn what you need to know to speed up your cloud application with the world's first serverless cache.",source:"@site/docs/cache/index.mdx",sourceDirName:"cache",slug:"/cache/",permalink:"/cache/",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Momento Cache",title:"Cache",description:"Learn what you need to know to speed up your cloud application with the world's first serverless cache.",pagination_next:null,hide_title:!0,keywords:["momento","cache","caching","eda","event-driven architecture","redis","serverless"]},sidebar:"cacheSidebar"},u={},h=[];function d(e){const t={h1:"h1",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"what-is-momento-cache",children:"What is Momento Cache?"}),"\n",(0,n.jsx)(t.p,{children:"Momento Cache is the world's first truly serverless caching service. It provides instant elasticity, scale-to-zero capability, and blazing-fast performance. Gone are the days where you need to choose, manage, and provision capacity. With Momento Cache, you grab the SDK, you get an end point, input a few lines into your code, and you're off and running."}),"\n","\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(i.V,{alignText:"center",link:"/cache/getting-started",title:"Getting Started",description:"Quickly get up and running with an SDK example."}),(0,n.jsx)(i.V,{alignText:"center",link:"/sdks",title:"SDKs",description:"Explore our open source SDKs."}),(0,n.jsx)(i.V,{alignText:"center",link:"/cache/develop",title:"Develop",description:"Develop with Momento!"}),(0,n.jsx)(i.V,{alignText:"center",link:"/cache/develop/language-support",title:"API Matrix",description:"Check out our language support matrix!"})]}),"\n",(0,n.jsx)(t.h1,{id:"concepts",children:"Concepts"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(i.V,{alignText:"center",link:"/cache/introduction/what-is-serverless-caching",title:"Serverless Caching",description:"How Momento shines in the serverless ecosystem. Whether it's caching or messaging, we've got your back when it comes to infrastructure management."}),(0,n.jsx)(i.V,{alignText:"center",link:"/cache/introduction/common-caching-strategies",title:"Caching strategies",description:"Leverage Momento to cache where and how you'd like!"}),(0,n.jsx)(i.V,{alignText:"center",link:"/cache/develop/basics/client-configuration-objects",title:"Configurations",description:"Wherever you go, we have hand-crafted configurations tailored for your environment!"}),(0,n.jsx)(i.V,{alignText:"center",link:"/cache/manage/pricing",title:"We scale to zero!",description:"No minimum payment, no underutilized resources. Pay for what you use."})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4788:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.__monkey_patch__=function(e,t){"types"===e?Object.assign(d,t):x[e]=t},t.attrs=a,t.legacyMerge=t.keyframes=t.include=t.firstThatWorks=t.defineVars=t.default=t.createTheme=t.create=void 0,t.props=i,t.types=void 0;var n=r(3176);const o=e=>new Error(`'stylex.${e}' should never be called at runtime. It should be compiled away by '@stylexjs/babel-plugin'`),s=e=>o(`types.${e}`);function i(){const e=this;for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];if(x.props)return x.props.call(e,r);const[s,i]=(0,n.styleq)(r),a={};return null!=s&&""!==s&&(a.className=s),null!=i&&Object.keys(i).length>0&&(a.style=i),a}function a(){const{className:e,style:t}=i(...arguments),r={};return null!=e&&""!==e&&(r.class=e),null!=t&&Object.keys(t).length>0&&(r.style=Object.keys(t).map((e=>`${e}:${t[e]};`)).join("")),r}const c=t.create=function(e){if(null!=x.create){return(0,x.create)(e)}throw o("create")},l=t.defineVars=function(e){if(x.defineVars)return x.defineVars(e);throw o("defineVars")},u=t.createTheme=(e,t)=>{if(x.createTheme)return x.createTheme(e,t);throw o("createTheme")},h=t.include=e=>{if(x.include)return x.include(e);throw o("include")},d=t.types={angle:e=>{throw s("angle")},color:e=>{throw s("color")},url:e=>{throw s("url")},image:e=>{throw s("image")},integer:e=>{throw s("integer")},lengthPercentage:e=>{throw s("lengthPercentage")},length:e=>{throw s("length")},percentage:e=>{throw s("percentage")},number:e=>{throw s("number")},resolution:e=>{throw s("resolution")},time:e=>{throw s("time")},transformFunction:e=>{throw s("transformFunction")},transformList:e=>{throw s("transformList")}},p=e=>{if(x.keyframes)return x.keyframes(e);throw o("keyframes")};t.keyframes=p;const f=function(){if(x.firstThatWorks)return x.firstThatWorks(...arguments);throw o("firstThatWorks")};function m(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const[o]=(0,n.styleq)(t);return o}t.firstThatWorks=f,m.props=i,m.attrs=a,m.create=c,m.defineVars=l,m.createTheme=u,m.include=h,m.keyframes=p,m.firstThatWorks=f,m.types=d;const x={};t.legacyMerge=m;t.default=m},8254:(e,t,r)=>{"use strict";var n=r(6305).default;t.p=void 0;n(r(4788));var o=r(4848);t.p=e=>{let{variant:t,children:r}=e;return(0,o.jsx)("div",{...{0:{className:"xrvj5dj xoybqp3 x1p9eum2"},1:{className:"xrvj5dj xoybqp3 x1wlfl8j"}}[!("dense"!==t)|0],children:r})}},7206:(e,t,r)=>{"use strict";var n=r(6305).default;t.V=void 0;n(r(4788));var o=r(4848);t.V=e=>{let{title:t,description:r,link:n,icon:s,alignText:i="start",alignItems:a="start"}=e;return(0,o.jsxs)("a",{href:n,target:"_blank",...{0:{className:"x78zum5 xh8yej3 x1in32aq x1tamke2 x1q0g3np x7a106z xou54vl xqlwffn x12oqio5 x15ny4rc xokoxfd x1hl2dhg x1heor9g"},1:{className:"x78zum5 xh8yej3 x1in32aq x1tamke2 x1q0g3np xou54vl xqlwffn x12oqio5 x15ny4rc xokoxfd x1hl2dhg x1heor9g x6s0dn4"}}[!("center"!==a)|0],children:[s&&(0,o.jsx)("img",{src:s,height:"32px",width:"32px"}),(0,o.jsxs)("div",{...{0:{className:"x1iyjqo2 x1yc453h"},1:{className:"x1iyjqo2 x2b8uid"}}[!("center"!==i)|0],children:[(0,o.jsx)("h3",{className:"x1q12cbh",children:t}),(0,o.jsx)("p",{className:"xy0hl59 xif65rj xo1l8bm x1du4iog",children:r})]})]})}},3176:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.styleq=void 0;var r=new WeakMap;function n(e){var t,n,o;return null!=e&&(t=!0===e.disableCache,n=!0===e.disableMix,o=e.transform),function(){for(var e=[],s="",i=null,a=t?null:r,c=new Array(arguments.length),l=0;l<arguments.length;l++)c[l]=arguments[l];for(;c.length>0;){var u=c.pop();if(null!=u&&!1!==u)if(Array.isArray(u))for(var h=0;h<u.length;h++)c.push(u[h]);else{var d=null!=o?o(u):u;if(d.$$css){var p="";if(null!=a&&a.has(d)){var f=a.get(d);null!=f&&(p=f[0],e.push.apply(e,f[1]),a=f[2])}else{var m=[];for(var x in d){var g=d[x];"$$css"!==x&&("string"==typeof g||null===g?e.includes(x)||(e.push(x),null!=a&&m.push(x),"string"==typeof g&&(p+=p?" "+g:g)):console.error("styleq: ".concat(x," typeof ").concat(String(g),' is not "string" or "null".')))}if(null!=a){var y=new WeakMap;a.set(d,[p,m,y]),a=y}}p&&(s=s?p+" "+s:p)}else if(n)null==i&&(i={}),i=Object.assign({},d,i);else{var v=null;for(var w in d){var b=d[w];void 0!==b&&(e.includes(w)||(null!=b&&(null==i&&(i={}),null==v&&(v={}),v[w]=b),e.push(w),a=null))}null!=v&&(i=Object.assign(v,i))}}}return[s,i]}}var o=n();t.styleq=o,o.factory=n},6305:(e,t,r)=>{var n=r(3738).default;function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var s={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var c=i?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(s,a,c):s[a]=e[a]}return s.default=e,r&&r.set(e,s),s},e.exports.__esModule=!0,e.exports.default=e.exports},3738:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},8453:(e,t,r)=>{"use strict";r.d(t,{R:()=>i,x:()=>a});var n=r(6540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);