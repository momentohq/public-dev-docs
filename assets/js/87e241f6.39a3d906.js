"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1741],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,k=m["".concat(p,".").concat(d)]||m[d]||h[d]||l;return a?r.createElement(k,o(o({ref:t},u),{},{components:a})):r.createElement(k,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1100:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:7,title:"HTTP API",sidebar_label:"HTTP API",description:"Discover the HTTP API for edge computing services to access serverless caching and pub/sub services."},o="HTTP API Reference",i={unversionedId:"develop/api-reference/http-api",id:"develop/api-reference/http-api",title:"HTTP API",description:"Discover the HTTP API for edge computing services to access serverless caching and pub/sub services.",source:"@site/docs/develop/api-reference/http-api.md",sourceDirName:"develop/api-reference",slug:"/develop/api-reference/http-api",permalink:"/develop/api-reference/http-api",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/api-reference/http-api.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"HTTP API",sidebar_label:"HTTP API",description:"Discover the HTTP API for edge computing services to access serverless caching and pub/sub services."},sidebar:"tutorialSidebar",previous:{title:"Auth",permalink:"/develop/api-reference/auth-tokens"},next:{title:"CollectionTTL object",permalink:"/develop/api-reference/collections/collectionttl"}},p={},s=[{value:"Authentication",id:"authentication",level:2},{value:"Regions",id:"regions",level:2},{value:"Cache",id:"cache",level:2},{value:"Get Value",id:"get-value",level:3},{value:"Request",id:"request",level:4},{value:"Path Parameters",id:"path-parameters",level:5},{value:"Query Parameters",id:"query-parameters",level:5},{value:"Headers",id:"headers",level:5},{value:"Responses",id:"responses",level:4},{value:"Hit",id:"hit",level:5},{value:"Miss",id:"miss",level:5},{value:"Error",id:"error",level:5},{value:"Set Value",id:"set-value",level:3},{value:"Request",id:"request-1",level:4},{value:"Body",id:"body",level:5},{value:"Path Parameters",id:"path-parameters-1",level:5},{value:"Query Parameters",id:"query-parameters-1",level:5},{value:"Headers",id:"headers-1",level:5},{value:"Responses",id:"responses-1",level:4},{value:"Ok",id:"ok",level:5},{value:"Error",id:"error-1",level:5},{value:"Delete Value",id:"delete-value",level:3},{value:"Request",id:"request-2",level:4},{value:"Path Parameters",id:"path-parameters-2",level:5},{value:"Query Parameters",id:"query-parameters-2",level:5},{value:"Headers",id:"headers-2",level:5},{value:"Responses",id:"responses-2",level:4},{value:"Ok",id:"ok-1",level:5},{value:"Error",id:"error-2",level:5},{value:"Topics",id:"topics",level:2},{value:"Publish",id:"publish",level:3},{value:"Request",id:"request-3",level:4},{value:"Body",id:"body-1",level:5},{value:"Path Parameters",id:"path-parameters-3",level:5},{value:"Query Parameters",id:"query-parameters-3",level:5},{value:"Headers",id:"headers-3",level:5},{value:"Responses",id:"responses-3",level:4},{value:"Success",id:"success",level:4},{value:"Error",id:"error-3",level:5},{value:"Examples",id:"examples",level:2},{value:"Cache",id:"cache-1",level:3},{value:"Put",id:"put",level:4},{value:"Get",id:"get",level:4},{value:"Delete",id:"delete",level:4},{value:"Topics",id:"topics-1",level:3},{value:"Publish",id:"publish-1",level:4}],u={toc:s};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"http-api-reference"},"HTTP API Reference"),(0,n.kt)("img",{src:"/img/http-api.jpg",width:"90%",alt:"a picture of abstract shapes as building and nodes of data connecting them at high speed"}),(0,n.kt)("p",null,"Momento provides an HTTP API interface for your applications that can\u2019t use our ",(0,n.kt)("a",{parentName:"p",href:"/develop"},"SDKs")," or for ones that prefer to use things like curl or fetch. For example, when deploying to edge compute services like ",(0,n.kt)("a",{parentName:"p",href:"https://workers.cloudflare.com/"},"Cloudflare Workers"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.fastly.com/products/edge-compute"},"Fastly Compute@Edge"),", etm. this API is for you. Be aware that most other applications should likely use ",(0,n.kt)("a",{parentName:"p",href:"/develop"},"Momento\u2019s SDK clients"),"."),(0,n.kt)("p",null,"You can also view the Open API Specification in our ",(0,n.kt)("a",{parentName:"p",href:"https://www.postman.com/gomomento/workspace/http-api/api/662743a0-471a-41a1-b446-5db596164a00/definition/4765b18e-ba84-4802-9795-ecce9c408062?view=documentation"},"public workspace in Postman"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This documentation does not describe how to implement HTTP request syntax as that is different and unique to each language you might use.")),(0,n.kt)("h2",{id:"authentication"},"Authentication"),(0,n.kt)("p",null,"For each connection, you will need a Momento auth token generated via the ",(0,n.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento console")," or a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine"},'token "vending machine" microservice you host'),". Momento auth tokens control access to the Momento services and can be set to expire and grant/restrict access to specific resources. "),(0,n.kt)("h2",{id:"regions"},"Regions"),(0,n.kt)("p",null,"To access the Momento HTTP API, use one of the following endpoints in the region of your API token and cache."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"AWS Region"),(0,n.kt)("th",{parentName:"tr",align:null},"Endpoints"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"us-west-2"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com"},"https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"us-east-1"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://api.cache.cell-us-east-1-1.prod.a.momentohq.com"},"https://api.cache.cell-us-east-1-1.prod.a.momentohq.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"ap-northeast-1"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://api.cache.cell-ap-northeast-1-1.prod.a.momentohq.com"},"https://api.cache.cell-ap-northeast-1-1.prod.a.momentohq.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"eu-west-1"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com"},"https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"ap-south-1"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com"},"https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com"))))),(0,n.kt)("p",null,"If you do not see a Region you require, let\u2019s discuss. Please contact ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"Support"),"."),(0,n.kt)("h2",{id:"cache"},"Cache"),(0,n.kt)("h3",{id:"get-value"},"Get Value"),(0,n.kt)("p",null,"Gets a scalar value from a cache."),(0,n.kt)("h4",{id:"request"},"Request"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Path: /cache/{cacheName}"),(0,n.kt)("li",{parentName:"ul"},"HTTP Method: GET")),(0,n.kt)("h5",{id:"path-parameters"},"Path Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter","\xa0","name"),(0,n.kt)("th",{parentName:"tr",align:null},"Required?"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"URL-safe string"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the cache to operate on.")))),(0,n.kt)("h5",{id:"query-parameters"},"Query Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter","\xa0","name"),(0,n.kt)("th",{parentName:"tr",align:null},"Required?"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key"),(0,n.kt)("td",{parentName:"tr",align:null},"no**"),(0,n.kt)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,n.kt)("td",{parentName:"tr",align:null},"The key to retrieve from the cache.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key_base64"),(0,n.kt)("td",{parentName:"tr",align:null},"no**"),(0,n.kt)("td",{parentName:"tr",align:null},"Base64","\xa0","URL-encoded","\xa0","binary","\xa0","key"),(0,n.kt)("td",{parentName:"tr",align:null},"The key to retrieve from the cache.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"token"),(0,n.kt)("td",{parentName:"tr",align:null},"no***"),(0,n.kt)("td",{parentName:"tr",align:null},"URL-safe string"),(0,n.kt)("td",{parentName:"tr",align:null},"The Momento auth token, in string format, to be used for authentication/authorization of the request.")))),(0,n.kt)("p",null,"** You must specify a key to be accessed in the cache. This may be either the key query parameter, which allows a URL-safe string, or the key_base64 parameter, which allows a Base64 URL-encoded key."),(0,n.kt)("p",null,"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."),(0,n.kt)("h5",{id:"headers"},"Headers"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Header","\xa0","name"),(0,n.kt)("th",{parentName:"tr",align:null},"Required?"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,n.kt)("td",{parentName:"tr",align:null},"no***"),(0,n.kt)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,n.kt)("td",{parentName:"tr",align:null},"The Momento auth token, in string format, is used for authentication/authorization of the request.")))),(0,n.kt)("p",null,"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."),(0,n.kt)("h4",{id:"responses"},"Responses"),(0,n.kt)("h5",{id:"hit"},"Hit"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 200 OK")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Content-Type: octet-stream"),(0,n.kt)("li",{parentName:"ul"},"Body: The binary value stored at the specified key.")),(0,n.kt)("h5",{id:"miss"},"Miss"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 404 Not Found")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"Key Not Found" indicates that the key was not present in the cache, while "Cache Not Found" indicates that the specified cache does not exist.')),(0,n.kt)("h5",{id:"error"},"Error"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 400 Bad Request")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates that the request was incorrectly specified. See the body of the message for further details.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 401 Unauthorized")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 403 Forbidden")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 429 Too Many Requests")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates that account limits were exceeded. See the body of the message for further details, or contact Momento support to request a limit increase.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 500 Internal Server Error")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.")),(0,n.kt)("h3",{id:"set-value"},"Set Value"),(0,n.kt)("p",null,"Sets a scalar value in a cache."),(0,n.kt)("h4",{id:"request-1"},"Request"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Path: /cache/{cacheName}"),(0,n.kt)("li",{parentName:"ul"},"HTTP Method: PUT")),(0,n.kt)("h5",{id:"body"},"Body"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Content-Type: octet-stream"),(0,n.kt)("li",{parentName:"ul"},"The body of the request should contain the binary value to be stored in the cache at the specified key.")),(0,n.kt)("h5",{id:"path-parameters-1"},"Path Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter","\xa0","name"),(0,n.kt)("th",{parentName:"tr",align:null},"Required?"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"URL-safe string"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the cache to operate on.")))),(0,n.kt)("h5",{id:"query-parameters-1"},"Query Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter","\xa0","name"),(0,n.kt)("th",{parentName:"tr",align:null},"Required?"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key"),(0,n.kt)("td",{parentName:"tr",align:null},"no**"),(0,n.kt)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,n.kt)("td",{parentName:"tr",align:null},"The key to retrieve from the cache.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key_base64"),(0,n.kt)("td",{parentName:"tr",align:null},"no**"),(0,n.kt)("td",{parentName:"tr",align:null},"Base64","\xa0","URL-encoded","\xa0","binary","\xa0","key"),(0,n.kt)("td",{parentName:"tr",align:null},"The key to retrieve from the cache.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"token"),(0,n.kt)("td",{parentName:"tr",align:null},"no***"),(0,n.kt)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,n.kt)("td",{parentName:"tr",align:null},"The Momento auth token, in string format, to be used for authentication/authorization of the request.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ttl_seconds"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"The TTL to be set on the key, in seconds. For more on TTL, see  ",(0,n.kt)("a",{parentName:"td",href:"/learn/how-it-works/expire-data-with-ttl"},"Expire Data with Time-to-Live"),".")))),(0,n.kt)("p",null,"** You must specify a key to be accessed in the cache. This may be either the key query parameter, which allows a URL-safe string, or the key_base64 parameter, which allows a Base64 URL-encoded key."),(0,n.kt)("p",null,"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."),(0,n.kt)("h5",{id:"headers-1"},"Headers"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Header","\xa0","name"),(0,n.kt)("th",{parentName:"tr",align:null},"Required?"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,n.kt)("td",{parentName:"tr",align:null},"no***"),(0,n.kt)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,n.kt)("td",{parentName:"tr",align:null},"The Momento auth token, in string format, is used for authentication/authorization of the request.")))),(0,n.kt)("p",null,"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."),(0,n.kt)("h4",{id:"responses-1"},"Responses"),(0,n.kt)("h5",{id:"ok"},"Ok"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 204 No Content")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The key-value pair was stored in the cache, but no content was returned (by design).")),(0,n.kt)("h5",{id:"error-1"},"Error"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 400 Bad Request")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates that the request was incorrectly specified. See the message body for further details.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 401 Unauthorized")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 403 Forbidden")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 404 Not Found")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u201cCache Not Found\u201d indicates that the specified cache does not exist.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 429 Too Many Requests")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates that account limits were exceeded. See the message body for further details, or contact Momento support to request a limit increase.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 500 Internal Server Error")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.")),(0,n.kt)("h3",{id:"delete-value"},"Delete Value"),(0,n.kt)("p",null,"Deletes a scalar value from a cache."),(0,n.kt)("h4",{id:"request-2"},"Request"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Path: /cache/{cacheName}"),(0,n.kt)("li",{parentName:"ul"},"HTTP Method: DELETE")),(0,n.kt)("h5",{id:"path-parameters-2"},"Path Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter","\xa0","name"),(0,n.kt)("th",{parentName:"tr",align:null},"Required?"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"URL-safe string"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the cache to operate on.")))),(0,n.kt)("h5",{id:"query-parameters-2"},"Query Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter","\xa0","name"),(0,n.kt)("th",{parentName:"tr",align:null},"Required?"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key"),(0,n.kt)("td",{parentName:"tr",align:null},"no**"),(0,n.kt)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,n.kt)("td",{parentName:"tr",align:null},"The key to retrieve from the cache.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"key_base64"),(0,n.kt)("td",{parentName:"tr",align:null},"no**"),(0,n.kt)("td",{parentName:"tr",align:null},"Base64","\xa0","URL-encoded","\xa0","binary","\xa0","key"),(0,n.kt)("td",{parentName:"tr",align:null},"The key to retrieve from the cache.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"token"),(0,n.kt)("td",{parentName:"tr",align:null},"no***"),(0,n.kt)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,n.kt)("td",{parentName:"tr",align:null},"The Momento auth token, in string format, to be used for authentication/authorization of the request.")))),(0,n.kt)("p",null,"** You must specify a key to be accessed in the cache. This may be either the key query parameter, which allows a URL-safe string, or the key_base64 parameter, which allows a Base64 URL-encoded key."),(0,n.kt)("p",null,"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."),(0,n.kt)("h5",{id:"headers-2"},"Headers"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Header","\xa0","name"),(0,n.kt)("th",{parentName:"tr",align:null},"Required?"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,n.kt)("td",{parentName:"tr",align:null},"no***"),(0,n.kt)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,n.kt)("td",{parentName:"tr",align:null},"The Momento auth token, in string format, is used for authentication/authorization of the request.")))),(0,n.kt)("p",null,"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."),(0,n.kt)("h4",{id:"responses-2"},"Responses"),(0,n.kt)("h5",{id:"ok-1"},"Ok"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 204 No Content")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The key-value pair was stored in the cache, but no content was returned (by design).")),(0,n.kt)("h5",{id:"error-2"},"Error"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 400 Bad Request")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates that the request was incorrectly specified. See the message body for further details.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 401 Unauthorized")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 403 Forbidden")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details. ")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 404 Not Found")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u201cCache Not Found\u201d indicates that the specified cache does not exist.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 429 Too Many Requests")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates that account limits were exceeded. See the message body for further details, or contact Momento support to request a limit increase.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 500 Internal Server Error")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.")),(0,n.kt)("h2",{id:"topics"},"Topics"),(0,n.kt)("h3",{id:"publish"},"Publish"),(0,n.kt)("p",null,"Publishes a message to a topic."),(0,n.kt)("h4",{id:"request-3"},"Request"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Path: /topics/{cacheName}/{topicName}"),(0,n.kt)("li",{parentName:"ul"},"HTTP Method: POST")),(0,n.kt)("h5",{id:"body-1"},"Body"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Content-Type: octet-stream"),(0,n.kt)("li",{parentName:"ul"},"The body of the request should contain the binary value to be published to the topic.")),(0,n.kt)("h5",{id:"path-parameters-3"},"Path Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter","\xa0","name"),(0,n.kt)("th",{parentName:"tr",align:null},"Required?"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"URL-safe string"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the cache containing the topic.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"topicName"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"URL-safe string"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the topic to publish to.")))),(0,n.kt)("h5",{id:"query-parameters-3"},"Query Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter","\xa0","name"),(0,n.kt)("th",{parentName:"tr",align:null},"Required?"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"token"),(0,n.kt)("td",{parentName:"tr",align:null},"no**"),(0,n.kt)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,n.kt)("td",{parentName:"tr",align:null},"The Momento auth token, in string format, to be used for authentication/authorization of the request.")))),(0,n.kt)("p",null,"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."),(0,n.kt)("h5",{id:"headers-3"},"Headers"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Header","\xa0","name"),(0,n.kt)("th",{parentName:"tr",align:null},"Required?"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,n.kt)("td",{parentName:"tr",align:null},"no**"),(0,n.kt)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,n.kt)("td",{parentName:"tr",align:null},"The Momento auth token, in string format, is used for authentication/authorization of the request.")))),(0,n.kt)("p",null,"** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."),(0,n.kt)("h4",{id:"responses-3"},"Responses"),(0,n.kt)("h4",{id:"success"},"Success"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 204 No Content")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The message was successfully published to the provided topic")),(0,n.kt)("h5",{id:"error-3"},"Error"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 400 Bad Request")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates that the request was incorrectly specified. See the message body for further details.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 401 Unauthorized")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 403 Forbidden")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 404 Not Found")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u201cCache Not Found\u201d indicates that the specified cache does not exist.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 429 Too Many Requests")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates that account limits were exceeded. See the message body for further details, or contact Momento support to request a limit increase.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Status Code: 500 Internal Server Error")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"cache-1"},"Cache"),(0,n.kt)("h4",{id:"put"},"Put"),(0,n.kt)("p",null,"Below is an example of a curl command that sets an item with a key of ",(0,n.kt)("em",{parentName:"p"},"example_key")," and value of ",(0,n.kt)("em",{parentName:"p"},"example value")," in the ",(0,n.kt)("em",{parentName:"p"},"default-cache")," cache in the ",(0,n.kt)("em",{parentName:"p"},"ap-south-1")," region:"),(0,n.kt)("p",null,"URL-safe Key, token provided in query parameter:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"curl -X PUT -d 'example value' \"https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com/cache/default-cache?key=example_key&ttl_seconds=300&token=<token>\"")),(0,n.kt)("p",null,"Base64 Key, token as ",(0,n.kt)("em",{parentName:"p"},"Authorization")," header:\n",(0,n.kt)("inlineCode",{parentName:"p"},'curl -X PUT -H "Authorization: <token>" -d \'example value\' "https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk&ttl_seconds=300"')),(0,n.kt)("h4",{id:"get"},"Get"),(0,n.kt)("p",null,"Below is an example of a curl command that gets an item with a key of ",(0,n.kt)("em",{parentName:"p"},"example_key")," in the ",(0,n.kt)("em",{parentName:"p"},"default-cache")," cache in the ",(0,n.kt)("em",{parentName:"p"},"eu-west-1")," region:"),(0,n.kt)("p",null,"URL-safe key, token provided in query parameter"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'curl "https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com/cache/default-cache?key=example_key&token=<token>"')),(0,n.kt)("p",null,"Base64 Key, token provided as ",(0,n.kt)("em",{parentName:"p"},"Authorization")," header:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'curl -H "Authorization: <token>" "https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk"')),(0,n.kt)("h4",{id:"delete"},"Delete"),(0,n.kt)("p",null,"Below is an example of a curl command that deletes an item with a key of ",(0,n.kt)("em",{parentName:"p"},"example_key")," in the ",(0,n.kt)("em",{parentName:"p"},"default-cache")," cache in the ",(0,n.kt)("em",{parentName:"p"},"us-west-2")," region:"),(0,n.kt)("p",null,"URL-safe key, token provided in query parameter:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'curl -X DELETE "https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com/cache/default-cache?key=example_key&token=<token>"')),(0,n.kt)("p",null,"Base64 Key, token provided as ",(0,n.kt)("em",{parentName:"p"},"Authorization")," header:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'curl -X DELETE -H "Authorization: <token>" "https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com/cache/default-cache?key_base64=ZXhhbXBsZV9rZXk"')),(0,n.kt)("h3",{id:"topics-1"},"Topics"),(0,n.kt)("h4",{id:"publish-1"},"Publish"),(0,n.kt)("p",null,"Below is an example that publishes the value ",(0,n.kt)("inlineCode",{parentName:"p"},"hello world!")," to the ",(0,n.kt)("em",{parentName:"p"},"example")," topic in the ",(0,n.kt)("em",{parentName:"p"},"my-cache")," cache in the ",(0,n.kt)("em",{parentName:"p"},"us-east-1")," region."),(0,n.kt)("p",null,"Token provided in query parameter:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"curl -X POST -d 'hello world!' \"https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example?token=<token>\"")),(0,n.kt)("p",null,"Token provided as ",(0,n.kt)("em",{parentName:"p"},"Authorization")," header:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'curl -X POST -H "Authorization: <token>" -d \'hello world!\' "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example"')))}h.isMDXComponent=!0}}]);