"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3230],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(7462),r=a(7294),o=a(6010),s=a(2466),l=a(6550),i=a(1980),c=a(7392),u=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,c]=p({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=i??d;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var b=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(d(t),i(n))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:m},s,{className:(0,o.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":l===t})}),a??t)})))}function S(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(S,(0,n.Z)({},e,t)))}function k(e){const t=(0,b.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},3404:(e,t,a)=>{a(7294)},9720:(e,t,a)=>{a.d(t,{X:()=>l});var n=a(4866),r=a(5162),o=a(614),s=a(7294);const l=e=>{let{js:t,python:a,java:l,go:i,csharp:c,php:u,rust:d,ruby:m,elixir:h,cli:p}=e;return t||a||l||i||c||u||d||m||h||p?s.createElement(n.Z,null,t&&s.createElement(r.Z,{value:"js",label:"JavaScript"},s.createElement(o.Z,{language:"js"},t)),a&&s.createElement(r.Z,{value:"python",label:"Python"},s.createElement(o.Z,{language:"python"},a)),l&&s.createElement(r.Z,{value:"java",label:"Java"},s.createElement(o.Z,{language:"java"},l)),i&&s.createElement(r.Z,{value:"go",label:"Go"},s.createElement(o.Z,{language:"go"},i)),c&&s.createElement(r.Z,{value:"csharp",label:"C#"},s.createElement(o.Z,{language:"csharp"},c)),u&&s.createElement(r.Z,{value:"php",label:"PHP"},s.createElement(o.Z,{language:"php"},u)),d&&s.createElement(r.Z,{value:"rust",label:"Rust"},s.createElement(o.Z,{language:"rust"},d)),m&&s.createElement(r.Z,{value:"ruby",label:"Ruby"},s.createElement(o.Z,{language:"ruby"},m)),h&&s.createElement(r.Z,{value:"elixir",label:"Elixir"},s.createElement(o.Z,{language:"elixir"},h)),p&&s.createElement(r.Z,{value:"cli",label:"CLI"},s.createElement(o.Z,{language:"cli"},p))):null}},8406:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),o=(a(3404),a(9720));const s={sidebar_position:3,sidebar_label:"AWS Secrets Manager",title:"Momento + AWS Secrets Manager",description:"Learn how to retrieve your Momento Auth Token in AWS Secrets Manager."},l="Retrieving a Momento auth token from AWS Secrets Manager",i={unversionedId:"cache/develop/integrations/aws-secrets-manager",id:"cache/develop/integrations/aws-secrets-manager",title:"Momento + AWS Secrets Manager",description:"Learn how to retrieve your Momento Auth Token in AWS Secrets Manager.",source:"@site/docs/cache/develop/integrations/aws-secrets-manager.md",sourceDirName:"cache/develop/integrations",slug:"/cache/develop/integrations/aws-secrets-manager",permalink:"/cache/develop/integrations/aws-secrets-manager",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/integrations/aws-secrets-manager.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"AWS Secrets Manager",title:"Momento + AWS Secrets Manager",description:"Learn how to retrieve your Momento Auth Token in AWS Secrets Manager."},sidebar:"tutorialSidebar",previous:{title:"Laravel",permalink:"/cache/develop/integrations/momento-cache-laravel-php"},next:{title:"Bulk data writing",permalink:"/cache/develop/integrations/bulk-writing-from-redis-json-csv"}},c={},u=[{value:"Entry in AWS Secrets Manager",id:"entry-in-aws-secrets-manager",level:2},{value:"Example Code for AWS Secrets Manager",id:"example-code-for-aws-secrets-manager",level:2},{value:"FAQ",id:"faq",level:2}],d={toc:u},m="wrapper";function h(e){let{components:t,...s}=e;return(0,r.kt)(m,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"retrieving-a-momento-auth-token-from-aws-secrets-manager"},"Retrieving a Momento auth token from AWS Secrets Manager"),(0,r.kt)("p",null,"It's best practice to securely store your Momento authentication token. If you are using AWS, you can securely store the auth token in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"},"AWS Secrets Manager"),". With that, only code running with the correct IAM credentials will be able to fetch the auth token and use it to access Momento Cache or Momento Topics."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Just as you should reuse your Momento ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheClient")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TopicClient")," objects when possible, so should you with the Momento auth token from AWS Secrets Manager. Otherwise you risk adding cost, both in time and money, to each Momento API call for the round trip to AWS Secrets Manager. To keep cost low and avoid potential throttling by AWS Secrets Manager it's best to use client side caching of the credentials as detailed in this ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/security/use-aws-secrets-manager-client-side-caching-libraries-to-improve-the-availability-and-latency-of-using-your-secrets/"},"AWS blog"),".")),(0,r.kt)("h2",{id:"entry-in-aws-secrets-manager"},"Entry in AWS Secrets Manager"),(0,r.kt)("p",null,"When inserting the Momento auth token into AWS Secrets Manager, it should be as plaintext with no JSON as in this screenshot. (Token blurred for security.)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AWS Secrets Manager",src:a(174).Z,width:"938",height:"254"})),(0,r.kt)("h2",{id:"example-code-for-aws-secrets-manager"},"Example Code for AWS Secrets Manager"),(0,r.kt)(o.X,{js:"",python:"",java:'final Region region = Region.of("us-east-1");\n\n// Create a Secrets Manager client\nfinal SecretsManagerClient client =\n    SecretsManagerClient.builder()\n        .region(region)\n        // make sure to configure aws credentials in order to use the default provider\n        // https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/auth/credentials/DefaultCredentialsProvider.html\n        .credentialsProvider(DefaultCredentialsProvider.create())\n        .build();\n\nfinal GetSecretValueRequest getSecretValueRequest =\n    GetSecretValueRequest.builder().secretId("AUTH_TOKEN_SECRET_NAME").build();\n\nfinal GetSecretValueResponse getSecretValueResponse;\n\ntry {\n  getSecretValueResponse = client.getSecretValue(getSecretValueRequest);\n} catch (Exception e) {\n  // For a list of exceptions thrown, see\n  // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html\n  throw e;\n}\n\nfinal String secret = getSecretValueResponse.secretString();\ntry {\n  // store variable here\n  CredentialProvider.fromString(secret);\n} catch (SdkException e) {\n  throw new RuntimeException(\n      "An error occured while parsing the secrets manager vended" + " authentication token", e);\n}',go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Do I have to do this?"),"No. You can store your Momento auth token in an environment variable or a file, but that is not best practice as it is not as secure as storing it in something like AWS Secrets Manager."))}h.isMDXComponent=!0},174:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-secrets-manager-729b9bb7cc86f20f0a7dad4884573509.png"}}]);