"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8941],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,v=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1,sidebar_class_name:"sidebar-item-security",sidebar_label:"PrivateLink Connectivity",title:"PrivateLink connectivity with Momento services",description:"Learn how to add AWS PrivateLink to Momento Cache and Topics services.",pagination_next:null,pagination_prev:null},o="Momento Cache\u304a\u3088\u3073Momento Topics\u3068AWS PrivateLink\u306e\u63a5\u7d9a\u6027",c={unversionedId:"cache/learn/security/private-link",id:"cache/learn/security/private-link",title:"PrivateLink connectivity with Momento services",description:"Learn how to add AWS PrivateLink to Momento Cache and Topics services.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/learn/security/private-link.md",sourceDirName:"cache/learn/security",slug:"/cache/learn/security/private-link",permalink:"/ja/cache/learn/security/private-link",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/learn/security/private-link.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_class_name:"sidebar-item-security",sidebar_label:"PrivateLink Connectivity",title:"PrivateLink connectivity with Momento services",description:"Learn how to add AWS PrivateLink to Momento Cache and Topics services.",pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},s={},l=[],p={toc:l},m="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"momento-cache\u304a\u3088\u3073momento-topics\u3068aws-privatelink\u306e\u63a5\u7d9a\u6027"},"Momento Cache\u304a\u3088\u3073Momento Topics\u3068AWS PrivateLink\u306e\u63a5\u7d9a\u6027"),(0,i.kt)("p",null,"Momento\u306f\u3001\u9867\u5ba2\u304cMomento Cache\u3068Momento Topics\u306b\u63a5\u7d9a\u3059\u308b\u969b\u306b\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30bb\u30ad\u30e5\u30a2\u306a\u30d1\u30d6\u30ea\u30c3\u30af\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u63d0\u793a\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8VPC\u306b\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u3066\u3044\u306a\u3044\u30a2\u30d7\u30ea\u306b\u306f\u6700\u9069\u3067\u3059\u3002\u3057\u304b\u3057\u3001\u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9\u8981\u4ef6\u3092\u6e80\u305f\u3057\u305f\u308a\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30fb\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u306e\u5e2f\u57df\u5e45\u30b3\u30b9\u30c8\u3092\u524a\u6e1b\u3057\u305f\u308a\u3059\u308b\u305f\u3081\u306b\u3001VPC\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u304b\u3089Momento\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u9867\u5ba2\u3082\u3044\u307e\u3059\u3002\u3053\u306e\u3088\u3046\u306a\u304a\u5ba2\u69d8\u306b\u306fMomento\u306f",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/privatelink/"},"AWS PrivateLink")," \u3092\u4ecb\u3057\u305fAWS\u4e0a\u306e\u30b7\u30b9\u30c6\u30e0\u3078\u306e\u63a5\u7d9a\u6027\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PrivateLink Diagram",src:n(9785).Z,width:"1200",height:"645"})),(0,i.kt)("p",null,"PrivateLink\u63a5\u7d9a\u306f\u3001Momento\u306e\u30b5\u30fc\u30d3\u30b9\u3078\u306e",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"},"Amazon VPC"),"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u4e00\u5ea6\u8a2d\u5b9a\u3059\u308b\u3068\u3001Momento\u3068\u306e\u3059\u3079\u3066\u306e\u901a\u4fe1\u306f\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8IP\u30a2\u30c9\u30ec\u30b9\u7a7a\u9593\u3092\u7d4c\u7531\u3057\u307e\u3059\u3002\u3053\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u6a5f\u80fd\u3092\u5fc5\u8981\u3068\u3059\u308b\u304a\u5ba2\u69d8\u306b\u3068\u3063\u3066\u3001\u3053\u306e\u63a5\u7d9a\u30d1\u30bf\u30fc\u30f3\u306b\u306f2\u3064\u306e\u91cd\u8981\u306a\u5229\u70b9\u304c\u3042\u308a\u307e\u3059\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Momento\u306e\u30b5\u30fc\u30d3\u30b9\u3068\u901a\u4fe1\u3059\u308b\u305f\u3081\u306eNAT\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u8cbb\u7528\u3092\u6255\u3046\u5fc5\u8981\u304c\u306a\u3044\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u304c\u30d1\u30d6\u30ea\u30c3\u30af\u30fb\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u3092\u7d4c\u7531\u3057\u306a\u3044\u305f\u3081\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u614b\u52e2\u304c\u5f37\u5316\u3055\u308c\u308b\u3002")),(0,i.kt)("p",null,"\u3053\u306e\u6a5f\u80fd\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com?subject=PrivateLink"},"Momento \u30b5\u30dd\u30fc\u30c8")," \u307e\u3067\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002"))}u.isMDXComponent=!0},9785:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vpc-diagram-fa1b1b46e47a93bf9ef41b64eb7f5cda.jpeg"}}]);