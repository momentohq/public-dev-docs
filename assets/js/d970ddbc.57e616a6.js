"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5956],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>b});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),l=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=l(e.components);return o.createElement(c.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=n,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return t?o.createElement(b,s(s({ref:r},d),{},{components:t})):o.createElement(b,s({ref:r},d))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6470:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(7462),n=(t(7294),t(3905));const a={sidebar_position:11,sidebar_label:"Response objects",title:"Response object API reference in Momento Leaderboards",description:"Learn how to interact with the response object in the Momento API for Leaderboards."},s="Response objects from Momento APIs in Momento Leaderboards",i={unversionedId:"leaderboards/api-reference/response-objects",id:"leaderboards/api-reference/response-objects",title:"Response object API reference in Momento Leaderboards",description:"Learn how to interact with the response object in the Momento API for Leaderboards.",source:"@site/docs/leaderboards/api-reference/response-objects.md",sourceDirName:"leaderboards/api-reference",slug:"/leaderboards/api-reference/response-objects",permalink:"/leaderboards/api-reference/response-objects",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/leaderboards/api-reference/response-objects.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"Response objects",title:"Response object API reference in Momento Leaderboards",description:"Learn how to interact with the response object in the Momento API for Leaderboards."},sidebar:"leaderboardSidebar",previous:{title:"Auth",permalink:"/leaderboards/api-reference/auth"},next:{title:"Momento Leaderboards",permalink:"/leaderboards/"}},c={},l=[{value:"Error",id:"error",level:2},{value:"Constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:3},{value:"Success",id:"success",level:2}],d={toc:l},p="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(p,(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"response-objects-from-momento-apis-in-momento-leaderboards"},"Response objects from Momento APIs in Momento Leaderboards"),(0,n.kt)("p",null,"These are the baseline responses for all commands. Some commands will add more data and functionality."),(0,n.kt)("h2",{id:"error"},"Error"),(0,n.kt)("p",null,"Returned in lieu of an exception."),(0,n.kt)("h3",{id:"constructor"},"Constructor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"innerException: Exception - the exception which caused the error")),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"message(): String - a human readable error message"),(0,n.kt)("li",{parentName:"ul"},"innerException(): Exception - the original exception."),(0,n.kt)("li",{parentName:"ul"},"errorCode(): MomentoErrorCode - Momento\u2019s own category of errors such as InvalidArgument or BadRequest. See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md"},"Standards And Practices - Error Handling")),(0,n.kt)("li",{parentName:"ul"},"toString(): String - alias for message()")),(0,n.kt)("h2",{id:"success"},"Success"),(0,n.kt)("p",null,"The command was successful."))}u.isMDXComponent=!0}}]);