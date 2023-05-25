"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),m=r,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),r=n(6010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var o=n(7462),r=n(7294),a=n(6010),i=n(2466),s=n(6550),l=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=h(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[l,u]=d({queryString:n,groupId:o}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,c.Nk)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),f=(()=>{const e=l??p;return m({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var f=n(2389);const k="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),h=e=>{const t=e.currentTarget,n=c.indexOf(t),o=u[n].value;o!==s&&(p(t),l(o))},m=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:h},i,{className:(0,a.Z)("tabs__item",b,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",k)},r.createElement(y,(0,o.Z)({},e,t)),r.createElement(v,(0,o.Z)({},e,t)))}function x(e){const t=(0,f.Z)();return r.createElement(w,(0,o.Z)({key:String(t)},e))}},2057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));n(4866),n(5162);const a={sidebar_position:4,sidebar_label:"Momento Authentication",title:"Momento Authentication With Expiring Tokens",description:"Learn how to use expiring tokens to enhance the security of your application",pagination_next:null},i="Momento authentication with expiring tokens",s={unversionedId:"develop/guides/working-with-momento-auth-tokens",id:"develop/guides/working-with-momento-auth-tokens",title:"Momento Authentication With Expiring Tokens",description:"Learn how to use expiring tokens to enhance the security of your application",source:"@site/docs/develop/guides/working-with-momento-auth-tokens.md",sourceDirName:"develop/guides",slug:"/develop/guides/working-with-momento-auth-tokens",permalink:"/develop/guides/working-with-momento-auth-tokens",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/guides/working-with-momento-auth-tokens.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Momento Authentication",title:"Momento Authentication With Expiring Tokens",description:"Learn how to use expiring tokens to enhance the security of your application",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"Working with files",permalink:"/develop/guides/working-with-files-cache"}},l={},u=[{value:"Generating expiring tokens",id:"generating-expiring-tokens",level:2},{value:"Step 1: Sign up or log into the Momento console",id:"step-1-sign-up-or-log-into-the-momento-console",level:3},{value:"Step 2: Generate a Momento auth token",id:"step-2-generate-a-momento-auth-token",level:3},{value:"Step 3: Store your Momento auth token",id:"step-3-store-your-momento-auth-token",level:3},{value:"Step 4: Automating token refresh",id:"step-4-automating-token-refresh",level:3}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-authentication-with-expiring-tokens"},"Momento authentication with expiring tokens"),(0,r.kt)("p",null,"To access Momento services from your application, a Momento auth token is required. The auth token is an alphanumeric string Momento generates that is unique to your account and the cloud provider's Region you select. When creating an auth token, you can set up one of two types of expiration:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An auth token that never expires. This should only be used for dev/test environments."),(0,r.kt)("li",{parentName:"ol"},"An auth token which expires and requires periodic rotation. You can set the expiration to 7, 30, 60, 90 days or custom, where you can select a specific calendar date. An expiring auth token is considered best practice for production deployments. We will walk through how to do exactly that in this page.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In addition to using an expiring auth token, it is best practice to store an auth token in a service like ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/secrets-manager/"},"AWS Secrets Manager")," or ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/secret-manager"},"GCP Secret Manager"),". Go to ",(0,r.kt)("a",{parentName:"p",href:"/develop/sdks-integrations/aws-secrets-manager"},"Retrieving a Momento auth token from AWS Secrets Manager")," for an example on using this.")),(0,r.kt)("h2",{id:"generating-expiring-tokens"},"Generating expiring tokens"),(0,r.kt)("h3",{id:"step-1-sign-up-or-log-into-the-momento-console"},"Step 1: Sign up or log into the Momento console"),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento console")," and follow the instructions to log in with your email address, Google account, or GitHub account."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(5176).Z,width:"700",height:"337"})),(0,r.kt)("h3",{id:"step-2-generate-a-momento-auth-token"},"Step 2: Generate a Momento auth token"),(0,r.kt)("p",null,"In the console, open the menu and select token."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image of console menu",src:n(4232).Z,width:"320",height:"240"})),(0,r.kt)("p",null,'On the token page, select your 1/ cloud provider, 2/ an available region from the drop down list, 3/ when the token should expire, and then 4/ hit the "Generate Token" button.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(8500).Z,width:"520",height:"377"})),(0,r.kt)("p",null,"Scroll down and you will see your token in a grey box. The tokens in the screenshot has been blurred out, but yours won't be. The box contains 3 separate fields:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Auth Token: this is the actual authentication token that gives your application access to Momento. This token will expired after the specified time period you selected."),(0,r.kt)("li",{parentName:"ol"},"Refresh Token: if you wish to programmatically obtain a new auth token before the current token expires, you need this refresh token."),(0,r.kt)("li",{parentName:"ol"},"Valid Until: this is purely informational, and displays the date and time the current auth token expires at.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(987).Z,width:"600",height:"334"})),(0,r.kt)("h3",{id:"step-3-store-your-momento-auth-token"},"Step 3: Store your Momento auth token"),(0,r.kt)("p",null,'If you wish to quickly test out Momento, click on the copy icon beside the auth token to copy the token to your clipboard and supply it to the Momento SDK. We recommend you also click the "Download JSON" button to store both the auth token and refresh token. Tokens are like passwords, the best practice is to store it in and retrieve it from a secure location such as ',(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/secrets-manager/"},"AWS Secrets Manager")," or ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/secret-manager"},"GCP Secret Manager"),"."),(0,r.kt)("h3",{id:"step-4-automating-token-refresh"},"Step 4: Automating token refresh"),(0,r.kt)("p",null,"Once your application is running in production. You will need an automated script that periodically refreshes the auth token, ",(0,r.kt)("strong",{parentName:"p"},"before")," it expires. If you are running in AWS, scheduling a function in AWS Lambda that does this for you. For GCP, Google Cloud Functions is likely your solution of choice. For an example using AWS Lambda, check out our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/auth-token-refresh-lambda"},"1-click deploy example Lambda function")," that will automatically refresh your token stored in AWS Secrets Manager."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"While a Lambda function, Google Cloud Function, or another automated script refreshes the auth token, your application also needs to check AWS Secrets Manager (or wherever you are storing your tokens) periodically for newly refreshed tokens if it is caching the token locally!")),(0,r.kt)("p",null,"Got more questions or feedback for us? Join our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/GDStRczm"},"Discord community")," or reach out to ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"Momento support")," for help."))}p.isMDXComponent=!0},4232:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/auth-token-877173c41a2a1fbce91948047a73d82b.gif"},5176:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/console-60f391edcc3628b2638136ba7fa61627.png"},987:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/generated-token-2245903b8ecca741be2ca22c1b64cee1.jpg"},8500:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/select-provider-region-28122ca1e4a57cacb8e22e00db3bd692.png"}}]);