(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4583],{44788:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.__monkey_patch__=function(e,t){"types"===e?Object.assign(u,t):f[e]=t},t.attrs=l,t.legacyMerge=t.keyframes=t.include=t.firstThatWorks=t.defineVars=t.default=t.createTheme=t.create=void 0,t.props=o,t.types=void 0;var r=s(73176);const n=e=>new Error(`'stylex.${e}' should never be called at runtime. It should be compiled away by '@stylexjs/babel-plugin'`),i=e=>n(`types.${e}`);function o(){const e=this;for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];if(f.props)return f.props.call(e,s);const[i,o]=(0,r.styleq)(s),l={};return null!=i&&""!==i&&(l.className=i),null!=o&&Object.keys(o).length>0&&(l.style=o),l}function l(){const{className:e,style:t}=o(...arguments),s={};return null!=e&&""!==e&&(s.class=e),null!=t&&Object.keys(t).length>0&&(s.style=Object.keys(t).map((e=>`${e}:${t[e]};`)).join("")),s}const a=t.create=function(e){if(null!=f.create){return(0,f.create)(e)}throw n("create")},c=t.defineVars=function(e){if(f.defineVars)return f.defineVars(e);throw n("defineVars")},d=t.createTheme=(e,t)=>{if(f.createTheme)return f.createTheme(e,t);throw n("createTheme")},h=t.include=e=>{if(f.include)return f.include(e);throw n("include")},u=t.types={angle:e=>{throw i("angle")},color:e=>{throw i("color")},url:e=>{throw i("url")},image:e=>{throw i("image")},integer:e=>{throw i("integer")},lengthPercentage:e=>{throw i("lengthPercentage")},length:e=>{throw i("length")},percentage:e=>{throw i("percentage")},number:e=>{throw i("number")},resolution:e=>{throw i("resolution")},time:e=>{throw i("time")},transformFunction:e=>{throw i("transformFunction")},transformList:e=>{throw i("transformList")}},p=e=>{if(f.keyframes)return f.keyframes(e);throw n("keyframes")};t.keyframes=p;const m=function(){if(f.firstThatWorks)return f.firstThatWorks(...arguments);throw n("firstThatWorks")};function x(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const[n]=(0,r.styleq)(t);return n}t.firstThatWorks=m,x.props=o,x.attrs=l,x.create=a,x.defineVars=c,x.createTheme=d,x.include=h,x.keyframes=p,x.firstThatWorks=m,x.types=u;const f={};t.legacyMerge=x;t.default=x},68254:(e,t,s)=>{"use strict";var r=s(6305).default;t.p=void 0;r(s(44788));var n=s(74848);t.p=e=>{let{variant:t,children:s}=e;return(0,n.jsx)("div",{...{0:{className:"xrvj5dj xoybqp3 x1p9eum2"},1:{className:"xrvj5dj xoybqp3 x1wlfl8j"}}[!("dense"!==t)|0],children:s})}},37206:(e,t,s)=>{"use strict";var r=s(24994).default,n=s(6305).default;t.V=void 0;n(s(44788));var i=r(s(28774)),o=s(74848);t.V=e=>{let{title:t,description:s,link:r,icon:n,alignText:l="start",alignItems:a="start"}=e;return(0,o.jsxs)(i.default,{to:r,target:"_blank",...{0:{className:"x78zum5 xh8yej3 x1in32aq x1tamke2 x1q0g3np x7a106z xou54vl xqlwffn x12oqio5 x15ny4rc xokoxfd x1hl2dhg x1heor9g"},1:{className:"x78zum5 xh8yej3 x1in32aq x1tamke2 x1q0g3np xou54vl xqlwffn x12oqio5 x15ny4rc xokoxfd x1hl2dhg x1heor9g x6s0dn4"}}[!("center"!==a)|0],children:[n&&(0,o.jsx)("img",{src:n,height:"32px",width:"32px"}),(0,o.jsxs)("div",{...{0:{className:"x1iyjqo2 x1yc453h"},1:{className:"x1iyjqo2 x2b8uid"}}[!("center"!==l)|0],children:[(0,o.jsx)("h3",{className:"x1q12cbh",children:t}),(0,o.jsx)("p",{className:"xif65rj xo1l8bm x1du4iog",children:s})]})]})}},36866:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var r=s(96540),n=s(44586),i=s(35302),o=s(54328),l=s(68254),a=s(37206),c=s(21312),d=s(65648),h=s(28774),u=s(74848);function p(){const{siteConfig:e}=(0,n.A)(),t=["Build faster with","Integrate easier on","Cache data with","Publish messages using"],[s,i]=(0,r.useState)(0),[o,l]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{const e=setInterval((()=>{l(!1),setTimeout((()=>{i((e=>(e+1)%t.length)),l(!0)}),500)}),5e3);return()=>clearInterval(e)}),[]),(0,u.jsxs)("div",{className:d.A.headerSection,children:[(0,u.jsx)("h1",{className:`${d.A.rotatingHeader} ${o?d.A.fadeIn:d.A.fadeOut} ${d.A.header}`,children:t[s]}),(0,u.jsx)("h1",{className:d.A.header,children:"the Momento Platform"}),(0,u.jsx)("p",{className:d.A.headerDescription,children:(0,u.jsx)(c.A,{id:"welcomeToTheMomentoDeveloperDocs",children:"Welcome to the Momento developer docs. Discover all the resources you need to help you get the most out of our products."})})]})}function m(){return(0,u.jsx)(i.A,{description:"Description will go into a meta tag in <head />",children:(0,u.jsxs)("main",{className:d.A.content,children:[(0,u.jsx)("img",{className:d.A.headerBackground,src:"/img/acorn-grid-background.svg",alt:"acorn-grid"}),(0,u.jsxs)("div",{className:d.A.contentContainer,children:[(0,u.jsx)(p,{}),(0,u.jsx)("div",{className:d.A.desktopOnly,children:(0,u.jsxs)("div",{className:d.A.columns,children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Cache"}),(0,u.jsxs)("ul",{className:d.A.columnList,children:[(0,u.jsx)("li",{children:(0,u.jsx)(h.default,{to:"/cache/getting-started",children:(0,u.jsx)(c.A,{id:"gettingStarted",children:"Getting started"})})}),(0,u.jsx)("li",{children:(0,u.jsx)(h.default,{to:"/cache/develop/api-reference",children:(0,u.jsx)(c.A,{id:"apiReference",children:"API reference"})})}),(0,u.jsx)("li",{children:(0,u.jsx)(h.default,{to:"/cache/integrations/redis-client-compatibility",children:(0,u.jsx)(c.A,{id:"dropInReplacementsForRedis",children:"Drop-in replacements for Redis"})})}),(0,u.jsx)("li",{children:(0,u.jsx)(h.default,{to:"/cache/develop/guides/working-with-files-cache",children:(0,u.jsx)(c.A,{id:"howToCacheFiles",children:"How to cache files"})})})]})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Topics"}),(0,u.jsxs)("ul",{className:d.A.columnList,children:[(0,u.jsx)("li",{children:(0,u.jsx)(h.default,{to:"/topics",children:(0,u.jsx)(c.A,{id:"aboutOurServerlessEventBus",children:"About our serverless event bus"})})}),(0,u.jsx)("li",{children:(0,u.jsx)(h.default,{to:"/topics/integrations/lambda-handler",children:(0,u.jsx)(c.A,{id:"integrateWithAmazonEventBridge",children:"Integrate with Amazon EventBridge"})})}),(0,u.jsx)("li",{children:(0,u.jsx)(h.default,{to:"/topics/webhooks/overview",children:(0,u.jsx)(c.A,{id:"webhooksOverview",children:"Webhooks overview"})})}),(0,u.jsx)("li",{children:(0,u.jsx)(h.default,{to:"https://www.gomomento.com/blog/how-to-create-a-slack-workflow-with-webhooks-in-momento-topics",target:"_blank",children:(0,u.jsxs)("div",{className:d.A.openInNew,children:[(0,u.jsx)("span",{children:(0,u.jsx)(c.A,{id:"publishMessagesToSlack",children:"Publish messages to Slack"})}),(0,u.jsx)(o.rDs,{})]})})})]})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:(0,u.jsx)(c.A,{id:"forDevelopers",children:"For developers"})}),(0,u.jsxs)("ul",{className:d.A.columnList,children:[(0,u.jsx)("li",{children:(0,u.jsx)(h.default,{to:"/platform/sdks",children:(0,u.jsx)(c.A,{id:"availableSDKs",children:"Available SDKs"})})}),(0,u.jsx)("li",{children:(0,u.jsx)(h.default,{to:"/cache/develop/authentication",children:(0,u.jsx)(c.A,{id:"authenticationAndAccessControl",children:"Authentication and access control"})})}),(0,u.jsx)("li",{children:(0,u.jsx)(h.default,{to:"/cache/develop/basics/error-handling-production-readiness",children:(0,u.jsx)(c.A,{id:"properlyHandlingErrorsInMomento",children:"Properly handling errors in Momento"})})}),(0,u.jsx)("li",{children:(0,u.jsx)(h.default,{to:"https://aws.amazon.com/marketplace/pp/prodview-tntv64zqgaqm2",target:"_blank",children:(0,u.jsxs)("div",{className:d.A.openInNew,children:[(0,u.jsx)("span",{children:(0,u.jsx)(c.A,{id:"momentoOnAWSMarketplace",children:"Momento on AWS Marketplace"})}),(0,u.jsx)(o.rDs,{})]})})})]})]})]})}),(0,u.jsxs)("div",{className:d.A.section,children:[(0,u.jsx)("h2",{className:d.A.sectionTitle,children:(0,u.jsx)(c.A,{id:"Overview",children:"Overview"})}),(0,u.jsxs)("p",{children:[(0,u.jsx)(c.A,{id:"momentoSimplifiesCloudArchitecture",children:"Momento simplifies cloud architecture and automates resource management so developers can build from zero to global scale without distractions. With our flagship "}),(0,u.jsx)("b",{children:"Cache"})," ",(0,u.jsx)(c.A,{id:"and",children:"and"})," ",(0,u.jsx)("b",{children:"Topics"})," ",(0,u.jsx)(c.A,{id:"servicesMomentoProvidesDevelopers",children:"services, Momento provides developers the building blocks they need to focus on the thing that matters most: "}),(0,u.jsx)("i",{children:(0,u.jsx)(c.A,{id:"yourBusinessProblem",children:"your business problem"})}),"."]}),(0,u.jsxs)("div",{className:d.A.columns,children:[(0,u.jsxs)("div",{className:d.A.subsectionDetail,children:[(0,u.jsxs)("h2",{className:d.A.subsectionTitle,children:[(0,u.jsx)(c.A,{id:"ItsAbout",children:"It's about "}),(0,u.jsx)("i",{children:(0,u.jsx)(c.A,{id:"developerProductivity",children:"developer productivity"})})]}),(0,u.jsx)("p",{children:(0,u.jsx)(c.A,{id:"weWantYouToMoveAsFastAsPossible",children:"We want you to move as fast as possible. Whether your database is pushing millions of transactions per second or you're publishing messages to tens of thousands of subscribers, Momento is with you managing the infrastructure, tackling scaling events, and providing you with simple API calls."})}),(0,u.jsx)("h2",{className:d.A.subsectionTitle,children:(0,u.jsx)(c.A,{id:"weGoWhereYouGo",children:"We go where you go"})}),(0,u.jsxs)("p",{children:[(0,u.jsx)(c.A,{id:"momentoWorksHardToProvideDevelopers",children:"Momento works hard to provide developers with SDKs in as many programming languages possible. We have clients for all types of projects: browsers, Android development, iOS apps, and 10+ server-side languages. Looking for tuned clients for your production environment or Lambda function? Our SDKs have"}),(0,u.jsx)(h.default,{to:"/cache/develop/basics/client-configuration-objects#pre-built-configurations",children:(0,u.jsx)(c.A,{id:"optimizedConfigurations",children:"optimized configurations"})})," ",(0,u.jsx)(c.A,{id:"forAnywhereDevelopmentTakesYou",children:"for anywhere development takes you."})]})]}),(0,u.jsx)("div",{className:d.A.subsectionGraphic,children:(0,u.jsx)("img",{src:"/img/landing-page-detail-graphic.png",width:300})})]}),(0,u.jsx)("h2",{className:d.A.subsectionTitle,children:(0,u.jsx)(c.A,{id:"simplifyYourCloudArchitecture",children:"Simplify your cloud architecture"})}),(0,u.jsx)("p",{children:(0,u.jsx)(c.A,{id:"buildingRobust",children:"Building robust, fault-tolerant systems at scale in the cloud is tough. We know. Lean on Momento's expertise to handle the infrastructure for you. Say goodbye to advanced networking, aggressive load balancing and scaling configurations, and complex WebSocket architectures. With Momento Cache and Topics, it's all managed for you - and getting better every day."})})]}),(0,u.jsxs)("div",{className:d.A.section,children:[(0,u.jsx)("h2",{className:d.A.sectionTitle,children:(0,u.jsx)(c.A,{id:"browseOurProducts",children:"Browse our products"})}),(0,u.jsx)("div",{className:d.A.productWrapper,children:(0,u.jsxs)(l.p,{variant:"dense",children:[(0,u.jsx)(a.V,{alignItems:"center",title:"Cache",link:"/cache",description:"low-latency ephemeral storage",icon:"/img/cache/momento-cache-brand-icon.svg"}),(0,u.jsx)(a.V,{alignItems:"center",title:"Topics",link:"/topics",description:"low-latency ephemeral event bus",icon:"/img/topics/momento-topics-brand-icons.svg"}),(0,u.jsx)(a.V,{alignItems:"center",title:"Leaderboards",link:"/leaderboards",description:"massive, durable sorted sets",icon:"/img/leaderboards/momento-leaderboards-2d.svg"})]})})]}),(0,u.jsxs)("div",{className:d.A.highlightedSection,children:[(0,u.jsx)("h2",{className:d.A.highlightedTitle,children:(0,u.jsx)(c.A,{id:"AccountSharing",children:"Account Sharing"})}),(0,u.jsx)("p",{className:d.A.highlightedDescription,children:(0,u.jsx)(c.A,{id:"momentoAccountSharingFeature",children:"Momento now supports account sharing, making it easy to manage and collaborate with your team. Simplify access and improve workflows with our new account-sharing functionality. Learn more about how to set it up and use it effectively."})}),(0,u.jsx)(h.default,{to:"/account-sharing",className:d.A.learnMoreLink,children:(0,u.jsx)(c.A,{id:"learnMore",children:"Learn More"})})]})]})]})})}},65648:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});const r={content:"content_ewlY",contentContainer:"contentContainer_C6d5",products:"products_dLNt",productWrapper:"productWrapper_jL9r",headerBackground:"headerBackground_QKwE",headerSection:"headerSection_x6lE",headerDescription:"headerDescription_IOoa",section:"section_Q9Zo",sectionTitle:"sectionTitle_Ut5p",subsectionTitle:"subsectionTitle_ARNC",subsectionDetail:"subsectionDetail_kmHI",subsectionGraphic:"subsectionGraphic_qVMX",header:"header_gB2a",rotatingHeader:"rotatingHeader_NRvM",desktopOnly:"desktopOnly_xVZT",columns:"columns_inOX",columnList:"columnList_rNCj",openInNew:"openInNew_y0xX",sectionBreak:"sectionBreak_IYC3",fadeOut:"fadeOut_EfHH",fadeIn:"fadeIn_sitH",highlightedSection:"highlightedSection_OwlJ",highlightedTitle:"highlightedTitle_pES6",highlightedDescription:"highlightedDescription_wo1Q",learnMoreLink:"learnMoreLink_AiBA"}},73176:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.styleq=void 0;var s=new WeakMap;function r(e){var t,r,n;return null!=e&&(t=!0===e.disableCache,r=!0===e.disableMix,n=e.transform),function(){for(var e=[],i="",o=null,l=t?null:s,a=new Array(arguments.length),c=0;c<arguments.length;c++)a[c]=arguments[c];for(;a.length>0;){var d=a.pop();if(null!=d&&!1!==d)if(Array.isArray(d))for(var h=0;h<d.length;h++)a.push(d[h]);else{var u=null!=n?n(d):d;if(u.$$css){var p="";if(null!=l&&l.has(u)){var m=l.get(u);null!=m&&(p=m[0],e.push.apply(e,m[1]),l=m[2])}else{var x=[];for(var f in u){var g=u[f];"$$css"!==f&&("string"==typeof g||null===g?e.includes(f)||(e.push(f),null!=l&&x.push(f),"string"==typeof g&&(p+=p?" "+g:g)):console.error("styleq: ".concat(f," typeof ").concat(String(g),' is not "string" or "null".')))}if(null!=l){var j=new WeakMap;l.set(u,[p,x,j]),l=j}}p&&(i=i?p+" "+i:p)}else if(r)null==o&&(o={}),o=Object.assign({},u,o);else{var v=null;for(var y in u){var b=u[y];void 0!==b&&(e.includes(y)||(null!=b&&(null==o&&(o={}),null==v&&(v={}),v[y]=b),e.push(y),l=null))}null!=v&&(o=Object.assign(v,o))}}}return[i,o]}}var n=r();t.styleq=n,n.factory=r},24994:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},6305:(e,t,s)=>{var r=s(73738).default;function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,s=new WeakMap;return(n=function(e){return e?s:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var s=n(t);if(s&&s.has(e))return s.get(e);var i={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var a=o?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(i,l,a):i[l]=e[l]}return i.default=e,s&&s.set(e,i),i},e.exports.__esModule=!0,e.exports.default=e.exports},73738:e=>{function t(s){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(s)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);