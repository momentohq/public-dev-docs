"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,v=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(v,a(a({ref:t},l),{},{components:n})):r.createElement(v,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1,sidebar_class_name:"sidebar-item-security",sidebar_label:"PrivateLink Connectivity",title:"PrivateLink connectivity with Momento services",description:"Learn securing the connection of your Momento caches and topics with PrivateLink.",pagination_next:null,pagination_prev:null},a="AWS PrivateLink connectivity with Momento Cache and Momento Topics",c={unversionedId:"learn/security/private-link",id:"learn/security/private-link",title:"PrivateLink connectivity with Momento services",description:"Learn securing the connection of your Momento caches and topics with PrivateLink.",source:"@site/docs/learn/security/private-link.md",sourceDirName:"learn/security",slug:"/learn/security/private-link",permalink:"/ja/learn/security/private-link",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/learn/security/private-link.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_class_name:"sidebar-item-security",sidebar_label:"PrivateLink Connectivity",title:"PrivateLink connectivity with Momento services",description:"Learn securing the connection of your Momento caches and topics with PrivateLink.",pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},s={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aws-privatelink-connectivity-with-momento-cache-and-momento-topics"},"AWS PrivateLink connectivity with Momento Cache and Momento Topics"),(0,o.kt)("p",null,"Momento presents a public endpoint that is secure by default when customers connect to Momento Cache and Momento Topics. This is great for apps not deployed into a private VPC. However, some customers may need to access momento from a VPC endpoint to meet compliance requirements or cut down on bandwidth costs for network traffic. For these customers, Momento offers ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/privatelink/"},"AWS PrivateLink")," connectivity to customer\u2019s hosted in Amazon Web Services (AWS) and have dedicated Momento cells."),(0,o.kt)("p",null,"PrivateLink connectivity provides you with the ability to create an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"},"Amazon VPC")," endpoint to Momento\u2019s services. Once setup, all communications to and from Momento route over a private IP address space. There are two key benefits to this connectivity pattern for customers in need of this security feature:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You don\u2019t pay for NAT gateway instances to talk to Momento services"),(0,o.kt)("li",{parentName:"ul"},"Increased security posture as no traffic goes over the public internet")),(0,o.kt)("p",null,"If this feature is something you require, please contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com?subject=PrivateLink"},"Momento Support"),"."))}u.isMDXComponent=!0}}]);