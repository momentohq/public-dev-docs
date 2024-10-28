"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[211],{56337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(74848),r=n(28453),s=(n(42821),n(70503));const i={sidebar_position:2,sidebar_label:"Style Guide",displayed_sidebar:"platformSidebar",title:"Style guide for Momento Node.js code",description:"Learn about the two different styles you can use when writing Momento Node.js code: the pattern matching style, or the simplified style.",keywords:["momento","cache","configuration","error handling","exceptions","sdk","production ready","typescript","node.js","nodejs","javascript","style guide","style","pattern matching","undefined"]},a="Momento Node.js Style Guide",c={id:"platform/sdks/nodejs/style-guide",title:"Style guide for Momento Node.js code",description:"Learn about the two different styles you can use when writing Momento Node.js code: the pattern matching style, or the simplified style.",source:"@site/docs/platform/sdks/nodejs/style-guide.mdx",sourceDirName:"platform/sdks/nodejs",slug:"/platform/sdks/nodejs/style-guide",permalink:"/platform/sdks/nodejs/style-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/nodejs/style-guide.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Style Guide",displayed_sidebar:"platformSidebar",title:"Style guide for Momento Node.js code",description:"Learn about the two different styles you can use when writing Momento Node.js code: the pattern matching style, or the simplified style.",keywords:["momento","cache","configuration","error handling","exceptions","sdk","production ready","typescript","node.js","nodejs","javascript","style guide","style","pattern matching","undefined"]},sidebar:"platformSidebar",previous:{title:"Config and Error Handling",permalink:"/platform/sdks/nodejs/config-and-error-handling"},next:{title:"Cache",permalink:"/platform/sdks/nodejs/cache"}},l={},d=[{value:"Pattern matching style",id:"pattern-matching-style",level:2},{value:"Simplified style",id:"simplified-style",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"momento-nodejs-style-guide",children:"Momento Node.js Style Guide"})}),"\n",(0,o.jsx)(t.p,{children:"When writing Momento Node.js code, you can choose between two different styles: the pattern matching style, or the simplified style. This guide will help you understand the differences between the two styles, so that you can choose which one will work best for your project."}),"\n",(0,o.jsx)(t.h2,{id:"pattern-matching-style",children:"Pattern matching style"}),"\n",(0,o.jsx)(t.p,{children:"If you're not familiar with pattern matching, it is a mechanism that has become increasingly popular in modern programming languages. It allows you to match a value against a pattern to determine the type of the value, and then extract its properties. It's very useful when making network requests, where the type of the response can vary a great deal depending on whether the request was successful or not, because it gives you a way to write exhaustive, type-safe code that handles all possible response types."}),"\n",(0,o.jsxs)(t.p,{children:["For example, when you issue a Momento ",(0,o.jsx)(t.code,{children:"get"})," request (or any other cache read request), the response can be one of three types:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Hit"})," - the key was found in the cache, and the value was returned"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Miss"})," - the key was not found in the cache, so no value was returned"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Error"})," - an error occurred while trying to read the value from the cache"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"As you can imagine, a type-safe model of these different cases will expose very different properties depending on which type of response you recieve:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["A ",(0,o.jsx)(t.code,{children:"Hit"})," response will have a ",(0,o.jsx)(t.code,{children:"value"})," property - and it is guaranteed not to be ",(0,o.jsx)(t.code,{children:"undefined"}),", so you don't have to write any ",(0,o.jsx)(t.code,{children:"if"})," statements to handle the ",(0,o.jsx)(t.code,{children:"undefined"})," case."]}),"\n",(0,o.jsxs)(t.li,{children:["A ",(0,o.jsx)(t.code,{children:"Miss"})," response will have no properties because no value was returned."]}),"\n",(0,o.jsxs)(t.li,{children:["An ",(0,o.jsx)(t.code,{children:"Error"})," response will have an ",(0,o.jsx)(t.code,{children:"errorCode"})," property, indicating what type of error occurred."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Using pattern matching, you can write code like this:"}),"\n",(0,o.jsx)(s.F,{language:"javascript",code:"const result = await cacheClient.get('test-cache', 'test-key');\nswitch (result.type) {\n  case CacheGetResponse.Hit:\n    console.log(`Retrieved value for key 'test-key': ${result.valueString()}`);\n    break;\n  case CacheGetResponse.Miss:\n    console.log(\"Key 'test-key' was not found in cache 'test-cache'\");\n    break;\n  case CacheGetResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to get key 'test-key' from cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n    );\n}"}),"\n",(0,o.jsxs)(t.p,{children:["In each branch of the ",(0,o.jsx)(t.code,{children:"if"})," statement, the TypeScript compiler is smart enough to recognize that it now knows the exact type of the ",(0,o.jsx)(t.code,{children:"result"})," object, so it will give you access to the correct properties based on which type it is. Because of this, you can catch many types of errors at compile time rather than finding out about them at run time. It also gives you a safer way to interact with the error objects than a normal try/catch block would."]}),"\n",(0,o.jsx)(t.p,{children:"If your primary goal is to write thorough, production-ready code with exhaustive handling of each different type of response you might receive for a request, then this pattern matching style is the way to go."}),"\n",(0,o.jsx)(t.p,{children:"However, it can be more verbose and take longer to write than code you might be used to writing against other client libraries. If you prefer something more succinct, you might want to consider the simplified style."}),"\n",(0,o.jsx)(t.h2,{id:"simplified-style",children:"Simplified style"}),"\n",(0,o.jsxs)(t.p,{children:["With the simplified style, you won't be doing any pattern matching or type checking. Instead, you will simply call the ",(0,o.jsx)(t.code,{children:".value()"})," method on the response object. For the case of a ",(0,o.jsx)(t.code,{children:"Hit"}),", you will get the value back; otherwise you will get back an ",(0,o.jsx)(t.code,{children:"undefined"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["When using the simplified style you will probably want to enable the ",(0,o.jsx)(t.code,{children:"withThrowOnErrors"})," setting. By default, Momento always returns errors as part of the return value, as opposed to throwing them. But when using the simplified code style, if you call ",(0,o.jsx)(t.code,{children:".value()"})," on a response and you get back ",(0,o.jsx)(t.code,{children:"undefined"}),", you won't be able to tell if the response was a ",(0,o.jsx)(t.code,{children:"Miss"})," or an ",(0,o.jsx)(t.code,{children:"Error"}),". By enabling ",(0,o.jsx)(t.code,{children:"withThrowOnErrors"}),", you can tell the Momento client that you prefer for it to actually throw the errors when they occur."]}),"\n",(0,o.jsxs)(t.p,{children:["Here's how to enable ",(0,o.jsx)(t.code,{children:"withThrowOnErrors"}),":"]}),"\n",(0,o.jsx)(s.F,{language:"javascript",code:"const cacheClient = await CacheClient.create({\n  configuration: Configurations.Lambda.latest().withThrowOnErrors(true),\n  credentialProvider: CredentialProvider.fromEnvVar('MOMENTO_API_KEY'),\n  defaultTtlSeconds: 60,\n});"}),"\n",(0,o.jsxs)(t.p,{children:["For more information on this topic, see the ",(0,o.jsx)(t.a,{href:"./config-and-error-handling",children:"Configuration and Error Handling"})," page."]}),"\n",(0,o.jsxs)(t.p,{children:["Once you've enabled ",(0,o.jsx)(t.code,{children:"withThrowOnErrors"}),", you can write code like this:"]}),"\n",(0,o.jsx)(s.F,{language:"javascript",code:"const result = (await cacheClient.get('test-cache', 'test-key')).value();\nif (result !== undefined) {\n  console.log(`Retrieved value for key 'test-key': ${result}`);\n} else {\n  console.log(\"Key 'test-key' was not found in cache 'test-cache'\");\n}"}),"\n",(0,o.jsx)(t.p,{children:"And if an error occurs, it will be thrown as an exception. You can catch the exception and handle it with a normal try/catch block, like this:"}),"\n",(0,o.jsx)(s.F,{language:"javascript",code:"try {\n  const result = (await cacheClient.get('test-cache', 'test-key')).value();\n  if (result !== undefined) {\n    console.log(`Retrieved value for key 'test-key': ${result}`);\n  } else {\n    console.log(\"Key 'test-key' was not found in cache 'test-cache'\");\n  }\n} catch (e) {\n  const momentoError = e as SdkError;\n  if (momentoError.errorCode() === MomentoErrorCode.LIMIT_EXCEEDED_ERROR) {\n    console.log('Request rate limit exceeded, may need to request a limit increase!');\n  } else {\n    throw new Error(\n      `An error occurred while attempting to get key 'test-key' from cache 'test-cache': ${momentoError.errorCode()}: ${momentoError.toString()}`\n    );\n  }\n}"}),"\n",(0,o.jsx)(t.p,{children:"The simplified style probably looks and feels more familiar to you compared to other Node.js client libraries you might have used in the past. It's also more succinct and faster to write than the pattern matching style. If you prefer to write code that is more concise, and you don't mind the trade-off of not having exhaustive type checking, then this style may be the right fit for you!"})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},42821:(e,t,n)=>{n(96540)},70503:(e,t,n)=>{n.d(t,{F:()=>s});var o=n(21432),r=(n(96540),n(74848));const s=e=>{let{language:t,code:n}=e;return(0,r.jsx)(o.A,{language:t,children:n})}}}]);