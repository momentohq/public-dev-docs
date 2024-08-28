"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7598],{9985:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=s(4848),t=s(8453),r=(s(1441),s(5347));const a={sidebar_position:20,title:"Momento tokens for short-lived, limited scope permissions",sidebar_label:"Tokens",description:"Learn what Momento tokens are, how to create them, and how they are used."},i="Momento tokens for short-lived permissions",l={id:"cache/develop/authentication/tokens",title:"Momento tokens for short-lived, limited scope permissions",description:"Learn what Momento tokens are, how to create them, and how they are used.",source:"@site/docs/cache/develop/authentication/tokens.md",sourceDirName:"cache/develop/authentication",slug:"/cache/develop/authentication/tokens",permalink:"/cache/develop/authentication/tokens",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/authentication/tokens.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Momento tokens for short-lived, limited scope permissions",sidebar_label:"Tokens",description:"Learn what Momento tokens are, how to create them, and how they are used."},sidebar:"cacheSidebar",previous:{title:"API Keys",permalink:"/cache/develop/authentication/api-keys"},next:{title:"Permissions",permalink:"/cache/develop/authentication/permissions"}},c={},u=[{value:"Creating a token",id:"creating-a-token",level:2},{value:"Expiration",id:"expiration",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"Data restriction",id:"data-restriction",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"momento-tokens-for-short-lived-permissions",children:"Momento tokens for short-lived permissions"})}),"\n",(0,o.jsx)(n.p,{children:"Tokens are short-lived, limited-scope values intended to be used in temporary situations like a user's session. Software lifecycle events like a user login often result in the issuing of a token only valid for the duration of that session."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Not sure if you should be using an ",(0,o.jsx)(n.code,{children:"API key"})," or a ",(0,o.jsx)(n.code,{children:"token"}),"? Check out our ",(0,o.jsx)(n.a,{href:"/cache/develop/authentication/",children:"authentication"})," page for all the details!"]})}),"\n",(0,o.jsx)(n.p,{children:"Tokens cannot be refreshed. So once it expires, it's gone forever. You'll be responsible for creating and issuing a new one if the session continues."}),"\n",(0,o.jsxs)(n.p,{children:["A Momento token allows access to ",(0,o.jsx)(n.em,{children:"data plane"})," API operations only. The user is unable to do ",(0,o.jsx)(n.em,{children:"control plane"})," operations like creating, deleting, or flushing a cache."]}),"\n",(0,o.jsx)(n.p,{children:"A user with a fully privileged token will be able to perform the following actions:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Add/edit/delete cache items in any cache"}),"\n",(0,o.jsx)(n.li,{children:"Publish and subscribe to any topic in any cache"}),"\n",(0,o.jsx)(n.li,{children:"Increment cache values via the increment API in any cache"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"It's up to you to limit the access of a token based on your system requirements."}),"\n",(0,o.jsx)(n.h2,{id:"creating-a-token",children:"Creating a token"}),"\n",(0,o.jsxs)(n.p,{children:["Unlike our ",(0,o.jsx)(n.a,{href:"/cache/develop/authentication/api-keys",children:"API keys"}),", the only way to create a token is through code. You cannot create them through the Momento console."]}),"\n",(0,o.jsx)(n.p,{children:"Below are some examples to create tokens with different sets of permissions:"}),"\n",(0,o.jsx)(r.r,{js:"// Generate a disposable token with read-write access to a specific key in one cache\nconst oneKeyOneCacheToken = await authClient.generateDisposableToken(\n  DisposableTokenScopes.cacheKeyReadWrite('squirrels', 'mo'),\n  ExpiresIn.minutes(30)\n);\nswitch (oneKeyOneCacheToken.type) {\n  case GenerateDisposableTokenResponse.Success:\n    console.log('Generated a disposable API key with access to the \"mo\" key in the \"squirrels\" cache!');\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\n    console.log(`API key starts with: ${oneKeyOneCacheToken.authToken.substring(0, 10)}`);\n    console.log(`Expires At: ${oneKeyOneCacheToken.expiresAt.epoch()}`);\n    break;\n  case GenerateDisposableTokenResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call generateApiKey with disposable token scope: ${oneKeyOneCacheToken.errorCode()}: ${oneKeyOneCacheToken.toString()}`\n    );\n}\n\n// Generate a disposable token with read-write access to a specific key prefix in all caches\nconst keyPrefixAllCachesToken = await authClient.generateDisposableToken(\n  DisposableTokenScopes.cacheKeyPrefixReadWrite(AllCaches, 'squirrel'),\n  ExpiresIn.minutes(30)\n);\nswitch (keyPrefixAllCachesToken.type) {\n  case GenerateDisposableTokenResponse.Success:\n    console.log('Generated a disposable API key with access to keys prefixed with \"squirrel\" in all caches!');\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\n    console.log(`API key starts with: ${keyPrefixAllCachesToken.authToken.substring(0, 10)}`);\n    console.log(`Expires At: ${keyPrefixAllCachesToken.expiresAt.epoch()}`);\n    break;\n  case GenerateDisposableTokenResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call generateApiKey with disposable token scope: ${keyPrefixAllCachesToken.errorCode()}: ${keyPrefixAllCachesToken.toString()}`\n    );\n}\n\n// Generate a disposable token with read-only access to all topics in one cache\nconst allTopicsOneCacheToken = await authClient.generateDisposableToken(\n  TokenScopes.topicSubscribeOnly('squirrel', AllTopics),\n  ExpiresIn.minutes(30)\n);\nswitch (allTopicsOneCacheToken.type) {\n  case GenerateDisposableTokenResponse.Success:\n    console.log('Generated a disposable API key with access to all topics in the \"squirrel\" cache!');\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\n    console.log(`API key starts with: ${allTopicsOneCacheToken.authToken.substring(0, 10)}`);\n    console.log(`Expires At: ${allTopicsOneCacheToken.expiresAt.epoch()}`);\n    break;\n  case GenerateDisposableTokenResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call generateApiKey with disposable token scope: ${allTopicsOneCacheToken.errorCode()}: ${allTopicsOneCacheToken.toString()}`\n    );\n}\n\n// Generate a disposable token with write-only access to a single topic in all caches\nconst oneTopicAllCachesToken = await authClient.generateDisposableToken(\n  TokenScopes.topicPublishOnly(AllCaches, 'acorn'),\n  ExpiresIn.minutes(30)\n);\nswitch (oneTopicAllCachesToken.type) {\n  case GenerateDisposableTokenResponse.Success:\n    console.log('Generated a disposable API key with access to all topics in the \"squirrel\" cache!');\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\n    console.log(`API key starts with: ${oneTopicAllCachesToken.authToken.substring(0, 10)}`);\n    console.log(`Expires At: ${oneTopicAllCachesToken.expiresAt.epoch()}`);\n    break;\n  case GenerateDisposableTokenResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to call generateApiKey with disposable token scope: ${oneTopicAllCachesToken.errorCode()}: ${oneTopicAllCachesToken.toString()}`\n    );\n}",python:"",java:'final GenerateDisposableTokenResponse response =\n    authClient\n        .generateDisposableTokenAsync(\n            DisposableTokenScopes.cacheKeyReadWrite("squirrel", "mo"), ExpiresIn.minutes(30))\n        .join();\nif (response instanceof GenerateDisposableTokenResponse.Success success) {\n  System.out.println("Successfully generated the disposable token: " + success.authToken());\n} else if (response instanceof GenerateDisposableTokenResponse.Error error) {\n  throw new RuntimeException(\n      "An error occurred while attempting to generate disposable token: "\n          + error.getErrorCode(),\n      error);\n}',kotlin:"",go:'tokenId := "a token id"\nresp, err := authClient.GenerateDisposableToken(ctx, &momento.GenerateDisposableTokenRequest{\n\tExpiresIn: utils.ExpiresInSeconds(10),\n\tScope: momento.TopicSubscribeOnly(\n\t\tmomento.CacheName{Name: "a cache"},\n\t\tmomento.TopicName{Name: "a topic"},\n\t),\n\tProps: momento.DisposableTokenProps{\n\t\tTokenId: &tokenId,\n\t},\n})\n\nif err != nil {\n\tpanic(err)\n}\n\nswitch r := resp.(type) {\ncase *auth_resp.GenerateDisposableTokenSuccess:\n\tlog.Printf("Successfully generated a disposable token for endpoint=%s with tokenId=%s\\n", r.Endpoint, tokenId)\n}',csharp:'// Generate a disposable token with read-write access to a specific key in one cache\r\nvar oneKeyOneCacheToken = await authClient.GenerateDisposableTokenAsync(\r\n    DisposableTokenScopes.CacheKeyReadWrite("squirrels", "mo"),\r\n    ExpiresIn.Minutes(30)\r\n);\r\n\nif (oneKeyOneCacheToken is GenerateDisposableTokenResponse.Success token1)\r\n{\r\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\r\n    Console.WriteLine("The generated disposable token starts with: " + token1.AuthToken.Substring(0, 10));\r\n    Console.WriteLine("The token expires at (epoch timestamp): " + token1.ExpiresAt.Epoch());\r\n}\r\nelse if (oneKeyOneCacheToken is GenerateDisposableTokenResponse.Error err)\r\n{\r\n    Console.WriteLine("Error generating disposable token: " + err.Message);\r\n}\r\n\n// Generate a disposable token with read-write access to a specific key prefix in all caches\r\nvar keyPrefixAllCachesToken = await authClient.GenerateDisposableTokenAsync(\r\n    DisposableTokenScopes.CacheKeyPrefixReadWrite(CacheSelector.AllCaches, "squirrel"),\r\n    ExpiresIn.Minutes(30)\r\n);\r\n\nif (keyPrefixAllCachesToken is GenerateDisposableTokenResponse.Success token2)\r\n{\r\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\r\n    Console.WriteLine("The generated disposable token starts with: " + token2.AuthToken.Substring(0, 10));\r\n    Console.WriteLine("The token expires at (epoch timestamp): " + token2.ExpiresAt.Epoch());\r\n}\r\nelse if (keyPrefixAllCachesToken is GenerateDisposableTokenResponse.Error err)\r\n{\r\n    Console.WriteLine("Error generating disposable token: " + err.Message);\r\n}\r\n\n// Generate a disposable token with read-only access to all topics in one cache\r\nvar allTopicsOneCacheToken = await authClient.GenerateDisposableTokenAsync(\r\n    DisposableTokenScopes.TopicSubscribeOnly("squirrel", TopicSelector.AllTopics),\r\n    ExpiresIn.Minutes(30)\r\n);\r\n\nif (allTopicsOneCacheToken is GenerateDisposableTokenResponse.Success token3)\r\n{\r\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\r\n    Console.WriteLine("The generated disposable token starts with: " + token3.AuthToken.Substring(0, 10));\r\n    Console.WriteLine("The token expires at (epoch timestamp): " + token3.ExpiresAt.Epoch());\r\n}\r\nelse if (allTopicsOneCacheToken is GenerateDisposableTokenResponse.Error err)\r\n{\r\n    Console.WriteLine("Error generating disposable token: " + err.Message);\r\n}\r\n\n// Generate a disposable token with write-only access to a single topic in all caches\r\nvar oneTopicAllCachesToken = await authClient.GenerateDisposableTokenAsync(\r\n    DisposableTokenScopes.TopicPublishOnly(CacheSelector.AllCaches, "acorn"),\r\n    ExpiresIn.Minutes(30)\r\n);\r\n\nif (oneTopicAllCachesToken is GenerateDisposableTokenResponse.Success token4)\r\n{\r\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\r\n    Console.WriteLine("The generated disposable token starts with: " + token4.AuthToken.Substring(0, 10));\r\n    Console.WriteLine("The token expires at (epoch timestamp): " + token4.ExpiresAt.Epoch());\r\n}\r\nelse if (oneTopicAllCachesToken is GenerateDisposableTokenResponse.Error err)\r\n{\r\n    Console.WriteLine("Error generating disposable token: " + err.Message);\r\n}\r\n',php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,o.jsxs)(n.p,{children:["For detailed information on creating a token, please refer to the ",(0,o.jsx)(n.a,{href:"/cache/develop/api-reference/auth",children:"API reference page"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"expiration",children:"Expiration"}),"\n",(0,o.jsxs)(n.p,{children:["Momento tokens are required to have an expiration time. The ",(0,o.jsx)(n.strong,{children:"maximum expiration time for a token is 1 hour"}),". When the token expiration time elapses, you will be required to create a new one."]}),"\n",(0,o.jsxs)(n.p,{children:["If you attempt to make a call with an expired token, you will receive a ",(0,o.jsx)(n.code,{children:"AUTHENTICATION_ERROR"})," response indicating the provided credentials could not connect to the service."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Tokens cannot be refreshed. So once it expires, it's gone forever. You'll be responsible for creating and issuing a new one if the session continues."})}),"\n",(0,o.jsx)(n.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,o.jsx)(n.p,{children:"These tokens are a great fit for the following use cases:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Using Momento for front-end development"}),"\n",(0,o.jsx)(n.li,{children:"Communicating with IoT devices"}),"\n",(0,o.jsx)(n.li,{children:"Issuing temporary access to specific resources"}),"\n",(0,o.jsx)(n.li,{children:"Providing credentials to users on login"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"data-restriction",children:"Data restriction"}),"\n",(0,o.jsxs)(n.p,{children:["A common use case for a token is to limit access to only a small subset of resources. Not only can you limit capabilities, like providing a token with ",(0,o.jsx)(n.em,{children:"read-only"})," access, but you can also scope it to individual cache items or topics."]}),"\n",(0,o.jsxs)(n.p,{children:["To get a full understanding of what you can do with data restriction, check out our ",(0,o.jsx)(n.a,{href:"/cache/develop/authentication/permissions",children:"permissions page"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},9365:(e,n,s)=>{s.d(n,{A:()=>a});s(6540);var o=s(4164);const t={tabItem:"tabItem_Ymn6"};var r=s(4848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.A)(t.tabItem,a),hidden:s,children:n})}},1470:(e,n,s)=>{s.d(n,{A:()=>v});var o=s(6540),t=s(4164),r=s(3104),a=s(6347),i=s(205),l=s(7485),c=s(1682),u=s(679);function h(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:o,default:t}}=e;return{value:n,label:s,attributes:o,default:t}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function d(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function k(e){let{queryString:n=!1,groupId:s}=e;const t=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function b(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,r=p(e),[a,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=s.find((e=>e.default))??s[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[c,h]=k({queryString:s,groupId:t}),[b,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,u.Dv)(s);return[t,(0,o.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:t}),m=(()=>{const e=c??b;return d({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{m&&l(m)}),[m]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,r]),tabValues:r}}var g=s(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(4848);function x(e){let{className:n,block:s,selectedValue:o,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,s=l.indexOf(n),t=i[s].value;t!==o&&(c(n),a(t))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:h,onClick:u,...r,className:(0,t.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":o===n}),children:s??n},n)}))})}function T(e){let{lazy:n,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",m.tabList),children:[(0,f.jsx)(x,{...n,...e}),(0,f.jsx)(T,{...n,...e})]})}function v(e){const n=(0,g.A)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(n))}},1441:(e,n,s)=>{s(6540)},5347:(e,n,s)=>{s.d(n,{r:()=>i});var o=s(1470),t=s(9365),r=s(1432),a=(s(6540),s(4848));const i=e=>{let{js:n,python:s,java:i,kotlin:l,go:c,csharp:u,php:h,rust:p,ruby:d,elixir:k,swift:b,dart:g,cli:m}=e;return n||s||i||l||c||u||h||p||d||k||b||g||m?(0,a.jsxs)(o.A,{children:[n&&(0,a.jsx)(t.A,{value:"js",label:"JavaScript",children:(0,a.jsx)(r.A,{language:"js",children:n})}),s&&(0,a.jsx)(t.A,{value:"python",label:"Python",children:(0,a.jsx)(r.A,{language:"python",children:s})}),i&&(0,a.jsx)(t.A,{value:"java",label:"Java",children:(0,a.jsx)(r.A,{language:"java",children:i})}),l&&(0,a.jsx)(t.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(r.A,{language:"kotlin",children:l})}),c&&(0,a.jsx)(t.A,{value:"go",label:"Go",children:(0,a.jsx)(r.A,{language:"go",children:c})}),u&&(0,a.jsx)(t.A,{value:"csharp",label:"C#",children:(0,a.jsx)(r.A,{language:"csharp",children:u})}),h&&(0,a.jsx)(t.A,{value:"php",label:"PHP",children:(0,a.jsx)(r.A,{language:"php",children:h})}),p&&(0,a.jsx)(t.A,{value:"rust",label:"Rust",children:(0,a.jsx)(r.A,{language:"rust",children:p})}),d&&(0,a.jsx)(t.A,{value:"ruby",label:"Ruby",children:(0,a.jsx)(r.A,{language:"ruby",children:d})}),k&&(0,a.jsx)(t.A,{value:"elixir",label:"Elixir",children:(0,a.jsx)(r.A,{language:"elixir",children:k})}),b&&(0,a.jsx)(t.A,{value:"swift",label:"Swift",children:(0,a.jsx)(r.A,{language:"swift",children:b})}),g&&(0,a.jsx)(t.A,{value:"dart",label:"Dart",children:(0,a.jsx)(r.A,{language:"dart",children:g})}),m&&(0,a.jsx)(t.A,{value:"cli",label:"CLI",children:(0,a.jsx)(r.A,{language:"cli",children:m})})]}):null}}}]);