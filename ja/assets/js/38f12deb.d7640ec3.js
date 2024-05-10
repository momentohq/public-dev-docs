"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2774],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return t?n.createElement(b,l(l({ref:r},c),{},{components:t})):n.createElement(b,l({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9687:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:11,sidebar_label:"Response objects",title:"Response object API reference in Momento Leaderboards",description:"Learn how to interact with the response objects in the Momento API for Leaderboards."},l="Momento Leaderboards\u306eMomento API\u304b\u3089\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",i={unversionedId:"leaderboards/api-reference/response-objects",id:"leaderboards/api-reference/response-objects",title:"Response object API reference in Momento Leaderboards",description:"Learn how to interact with the response objects in the Momento API for Leaderboards.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/leaderboards/api-reference/response-objects.md",sourceDirName:"leaderboards/api-reference",slug:"/leaderboards/api-reference/response-objects",permalink:"/ja/leaderboards/api-reference/response-objects",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/leaderboards/api-reference/response-objects.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"Response objects",title:"Response object API reference in Momento Leaderboards",description:"Learn how to interact with the response objects in the Momento API for Leaderboards."},sidebar:"leaderboardSidebar",previous:{title:"Auth",permalink:"/ja/leaderboards/api-reference/auth"},next:{title:"Language Support",permalink:"/ja/leaderboards/language-support/"}},s={},d=[{value:"Error",id:"error",level:2},{value:"\u5229\u7528\u53ef\u80fd\u306a\u65b9\u6cd5",id:"\u5229\u7528\u53ef\u80fd\u306a\u65b9\u6cd5",level:3},{value:"Success",id:"success",level:2},{value:"LeaderboardFetch",id:"leaderboardfetch",level:3},{value:"Available methods",id:"available-methods",level:4},{value:"LeaderboardLength",id:"leaderboardlength",level:3},{value:"Available methods",id:"available-methods-1",level:4}],c={toc:d};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"momento-leaderboards\u306emomento-api\u304b\u3089\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"},"Momento Leaderboards\u306eMomento API\u304b\u3089\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,o.kt)("p",null,"Momento \u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u89aa\u30af\u30e9\u30b9\u304b\u3089\u62e1\u5f35\u3055\u308c\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Success")," \u3084 ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," \u3068\u3044\u3063\u305f\u5b50\u306e\u578b\u3092\u6301\u3061\u3001\u30d1\u30bf\u30fc\u30f3\u30de\u30c3\u30c1\u306b\u3088\u3063\u3066\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002(\u3042\u308b\u8a00\u8a9e\u3067\u306f\u3053\u306e\u6982\u5ff5\u3092\u300c\u30b7\u30fc\u30eb\u30c9\u30af\u30e9\u30b9\u300d\u3068\u547c\u3073\u3001\u5225\u306e\u8a00\u8a9e\u3067\u306f\u300c\u4ee3\u6570\u7684\u30c7\u30fc\u30bf\u578b\u300d\u3068\u547c\u3073\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30dd\u30ea\u30e2\u30fc\u30d5\u30a3\u30ba\u30e0\u306e\u4e00\u7a2e\u3067\u3059)\u3002\u30b3\u30fc\u30c9\u306f\u30ec\u30b9\u30dd\u30f3\u30b9\u304c ",(0,o.kt)("inlineCode",{parentName:"p"},"Success")," \u304b ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," \u304b\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3001\u305d\u308c\u306b\u5fdc\u3058\u3066\u5206\u5c90\u3057\u307e\u3059\u3002\u3053\u306e\u65b9\u6cd5\u3092\u4f7f\u3046\u3068\u3001\u578b\u5b89\u5168\u306a\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u5f97\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u305d\u308c\u3092\u4f7f\u3063\u3066\u3055\u3089\u306b\u60c5\u5831\u3092\u5f97\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"error"},"Error"),(0,o.kt)("p",null,"Momento Leaderboards \u30b5\u30fc\u30d3\u30b9\u306e\u547c\u3073\u51fa\u3057\u3067\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u306f\u3001\u4f8b\u5916\u306e\u30b9\u30ed\u30fc\u3067\u306f\u306a\u304f\u3001\u547c\u3073\u51fa\u3057\u306e\u623b\u308a\u5024\u306e\u4e00\u90e8\u3068\u3057\u3066\u958b\u767a\u8005\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u5b9f\u884c\u6642\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u3057\u306a\u3044\u3088\u3046\u306b\u3057\u3001\u30b3\u30fc\u30c9\u3092\u66f8\u3044\u3066\u3044\u308b\u3068\u304d\u306b\u30a8\u30e9\u30fc\u3092\u3088\u308a\u898b\u3084\u3059\u304f\u3057\u3001\u6c17\u306b\u306a\u308b\u30a8\u30e9\u30fc\u3092\u78ba\u5b9f\u306b\u51e6\u7406\u3059\u308b\u305f\u3081\u306b IDE \u304c\u3088\u308a\u5f79\u7acb\u3064\u3088\u3046\u306b\u3057\u307e\u3059\u3002\u3053\u306e\u70b9\u306b\u95a2\u3059\u308b\u79c1\u305f\u3061\u306e\u8003\u3048\u65b9\u306b\u3064\u3044\u3066\u306f\u3001\u30d6\u30ed\u30b0\u8a18\u4e8b\u300c\u306a\u305c","[\u4f8b\u5916\u306f\u30d0\u30b0]","\u306a\u306e\u304b\u300d(",(0,o.kt)("a",{parentName:"p",href:"https://www.gomomento.com/blog/exceptions-are-bugs)%E3%82%92%E3%81%94%E8%A6%A7%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%E3%81%BE%E3%81%9F%E3%80%81%E3%81%94%E6%84%8F%E8%A6%8B%E3%81%8C%E3%81%82%E3%82%8C%E3%81%B0%E3%81%8A%E5%AF%84%E3%81%9B%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%EF%BC%81"},"https://www.gomomento.com/blog/exceptions-are-bugs)\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002\u307e\u305f\u3001\u3054\u610f\u898b\u304c\u3042\u308c\u3070\u304a\u5bc4\u305b\u304f\u3060\u3055\u3044\uff01")),(0,o.kt)("h3",{id:"\u5229\u7528\u53ef\u80fd\u306a\u65b9\u6cd5"},"\u5229\u7528\u53ef\u80fd\u306a\u65b9\u6cd5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"message()\uff1a \u6587\u5b57\u5217 - \u4eba\u9593\u304c\u8aad\u3081\u308b\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u3002"),(0,o.kt)("li",{parentName:"ul"},"innerException()\uff1a \u4f8b\u5916 - \u5143\u306e\u4f8b\u5916\u306e\u5185\u5bb9\u3002"),(0,o.kt)("li",{parentName:"ul"},"errorCode()\uff1a MomentoErrorCode - InvalidArgument \u3084 BadRequest \u306a\u3069\u306e Momento \u72ec\u81ea\u306e\u30a8\u30e9\u30fc\u3002",(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md"},"Standards And Practices - Error Handling")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("li",{parentName:"ul"},"toString()\uff1a \u6587\u5b57\u5217 - message() \u306e\u30a8\u30a4\u30ea\u30a2\u30b9\u3002")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"success"},"Success"),(0,o.kt)("p",null,"\u8ffd\u52a0\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u6301\u305f\u306a\u3044\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u6210\u529f\u3092\u793a\u3059\u6c4e\u7528\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3002\u6210\u529f\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30d0\u30ea\u30a8\u30fc\u30b7\u30e7\u30f3\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\uff1a"),(0,o.kt)("h3",{id:"leaderboardfetch"},"LeaderboardFetch"),(0,o.kt)("p",null,"fetch request\u306b\u6210\u529f\u3057\u305f\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002"),(0,o.kt)("h4",{id:"available-methods"},"Available methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"values()\uff1a \u30ea\u30b9\u30c8 - ",(0,o.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"score"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"rank")," \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u542b\u3080\u30ec\u30b3\u30fc\u30c9\u306e\u30ea\u30b9\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002")),(0,o.kt)("h3",{id:"leaderboardlength"},"LeaderboardLength"),(0,o.kt)("p",null,"length request\u306b\u6210\u529f\u3057\u305f\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002"),(0,o.kt)("h4",{id:"available-methods-1"},"Available methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"length()\uff1a \u6574\u6570 - \u6307\u5b9a\u3057\u305f\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u306e\u8981\u7d20\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002")))}p.isMDXComponent=!0}}]);