"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3935],{75388:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=t(74848),i=t(28453);const r={sidebar_position:7,title:"HTTP API for Momento Topics",sidebar_label:"HTTP API",description:"Discover the HTTP API for edge computing services to access pub/sub services."},c="HTTP API Reference for Momento Topics",o={id:"topics/api-reference/http-api",title:"HTTP API for Momento Topics",description:"Discover the HTTP API for edge computing services to access pub/sub services.",source:"@site/docs/topics/api-reference/http-api.md",sourceDirName:"topics/api-reference",slug:"/topics/api-reference/http-api",permalink:"/topics/api-reference/http-api",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/api-reference/http-api.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"HTTP API for Momento Topics",sidebar_label:"HTTP API",description:"Discover the HTTP API for edge computing services to access pub/sub services."},sidebar:"topicsSidebar",previous:{title:"Webhooks",permalink:"/topics/api-reference/webhooks"},next:{title:"Response objects",permalink:"/topics/api-reference/response-objects"}},h={},d=[{value:"Authentication",id:"authentication",level:2},{value:"Publish",id:"publish",level:2},{value:"Request",id:"request",level:3},{value:"Path parameters",id:"path-parameters",level:4},{value:"Query parameters",id:"query-parameters",level:4},{value:"Headers",id:"headers",level:4},{value:"Body",id:"body",level:4},{value:"Responses",id:"responses",level:3},{value:"Success",id:"success",level:4},{value:"Error",id:"error",level:4},{value:"Examples",id:"examples",level:3},{value:"Publish with token query parameter",id:"publish-with-token-query-parameter",level:4},{value:"Publish with Authorization header",id:"publish-with-authorization-header",level:4},{value:"Subscribe",id:"subscribe",level:2},{value:"Request",id:"request-1",level:3},{value:"Path parameters",id:"path-parameters-1",level:4},{value:"Query parameters",id:"query-parameters-1",level:4},{value:"Headers",id:"headers-1",level:4},{value:"Responses",id:"responses-1",level:4},{value:"Success",id:"success-1",level:3},{value:"Error",id:"error-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Request with no sequence number",id:"request-with-no-sequence-number",level:4},{value:"Request with a sequence number provided",id:"request-with-a-sequence-number-provided",level:4}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"http-api-reference-for-momento-topics",children:"HTTP API Reference for Momento Topics"})}),"\n",(0,n.jsxs)(s.p,{children:["Momento provides an HTTP API interface for your applications that can\u2019t use our ",(0,n.jsx)(s.a,{href:"../",children:"SDKs"})," or for ones that prefer to use things like curl or fetch. For example, when deploying to edge compute services like ",(0,n.jsx)(s.a,{href:"https://workers.cloudflare.com/",children:"Cloudflare Workers"}),", ",(0,n.jsx)(s.a,{href:"https://www.fastly.com/products/edge-compute",children:"Fastly Compute@Edge"}),", etm. this API is for you. Be aware that most other applications should likely use ",(0,n.jsx)(s.a,{href:"../",children:"Momento\u2019s SDK clients"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["You can also view the Open API Specification in our ",(0,n.jsx)(s.a,{href:"https://www.postman.com/gomomento/workspace/momento-http-api/api/662743a0-471a-41a1-b446-5db596164a00",children:"public workspace in Postman"}),"."]}),"\n",(0,n.jsx)(s.admonition,{title:"Info",type:"tip",children:(0,n.jsxs)(s.p,{children:["The Momento platform is region-based with endpoints specific to each region. To view a list of supported regions and their endpoints, ",(0,n.jsx)(s.a,{href:"/platform/regions",children:"click here"}),"."]})}),"\n",(0,n.jsx)(s.h2,{id:"authentication",children:"Authentication"}),"\n",(0,n.jsxs)(s.p,{children:["Each request requires an API key or Momento auth token generated via the ",(0,n.jsx)(s.a,{href:"https://console.gomomento.com/tokens",children:"Momento console"})," or a ",(0,n.jsx)(s.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine",children:'token "vending machine" microservice you host'}),". Momento auth tokens control access to the Momento services and can be set to expire and grant/restrict access to specific resources."]}),"\n",(0,n.jsx)(s.p,{children:"The token may be provided in one of two places in the request:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["An ",(0,n.jsx)(s.code,{children:"Authorization"})," header"]}),"\n",(0,n.jsxs)(s.li,{children:["A ",(0,n.jsx)(s.code,{children:"token"})," query parameter"]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{title:"Tip",type:"info",children:(0,n.jsxs)(s.p,{children:["If both the header and query parameter are provided, ",(0,n.jsxs)(s.em,{children:["the request will fail with a ",(0,n.jsx)(s.code,{children:"400 Bad Request"})," indicating only one value must be set"]}),"."]})}),"\n",(0,n.jsx)(s.h2,{id:"publish",children:"Publish"}),"\n",(0,n.jsx)(s.p,{children:"Publishes a message to a topic."}),"\n",(0,n.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Path: /topics/{cacheName}/{topicName}"}),"\n",(0,n.jsx)(s.li,{children:"HTTP Method: POST"}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"path-parameters",children:"Path parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter\xa0name"}),(0,n.jsx)(s.th,{children:"Required?"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cacheName"}),(0,n.jsx)(s.td,{children:"yes"}),(0,n.jsx)(s.td,{children:"URL-safe string"}),(0,n.jsx)(s.td,{children:"The name of the cache containing the topic."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"topicName"}),(0,n.jsx)(s.td,{children:"yes"}),(0,n.jsx)(s.td,{children:"URL-safe string"}),(0,n.jsx)(s.td,{children:"Name of the topic to publish to."})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"query-parameters",children:"Query parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter\xa0name"}),(0,n.jsx)(s.th,{children:"Required?"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"token"})}),(0,n.jsx)(s.td,{children:"no**"}),(0,n.jsx)(s.td,{children:"URL-safe\xa0string"}),(0,n.jsx)(s.td,{children:"The Momento auth token, in string format, to be used for authentication/authorization of the request."})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"headers",children:"Headers"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Header\xa0name"}),(0,n.jsx)(s.th,{children:"Required?"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Authorization"})}),(0,n.jsx)(s.td,{children:"no**"}),(0,n.jsx)(s.td,{children:"The Momento auth token, in string format, is used for authentication/authorization of the request."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Content-Type"})}),(0,n.jsx)(s.td,{children:"yes"}),(0,n.jsxs)(s.td,{children:["To publish plain text data (UTF-8), specify ",(0,n.jsx)(s.code,{children:"text/plain"}),". To publish binary data, specify ",(0,n.jsx)(s.code,{children:"application/octet-stream"})]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"body",children:"Body"}),"\n",(0,n.jsxs)(s.p,{children:["The body of the HTTP POST request should contain the value that you wish to publish to the topic. You may publish\neither text data, or binary data. To specify which type of data you are publishing, use the ",(0,n.jsx)(s.code,{children:"Content-Type"})," header, as\ndocumented in the ",(0,n.jsx)(s.a,{href:"#Headers",children:"Headers"})," section above."]}),"\n",(0,n.jsx)(s.h3,{id:"responses",children:"Responses"}),"\n",(0,n.jsx)(s.h4,{id:"success",children:"Success"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Status code: 204 No Content"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The message was successfully published to the provided topic"}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"error",children:"Error"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Status code: 400 Bad Request"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"This error type typically indicates that the request was incorrectly specified. See the message body for further details."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Status code: 401 Unauthorized"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Status code: 403 Forbidden"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Status code: 404 Not Found"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u201cCache Not Found\u201d indicates that the specified cache does not exist."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Status code: 429 Too Many Requests"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"This error type typically indicates that account limits were exceeded. See the message body for further details, or contact Momento support to request a limit increase."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Status code: 500 Internal Server Error"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Below is an example that publishes the value ",(0,n.jsx)(s.code,{children:"hello world!"})," to the ",(0,n.jsx)(s.em,{children:"example"})," topic in the ",(0,n.jsx)(s.em,{children:"my-cache"})," cache in the ",(0,n.jsx)(s.em,{children:"us-east-1"})," region."]}),"\n",(0,n.jsx)(s.h4,{id:"publish-with-token-query-parameter",children:"Publish with token query parameter"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"curl -X POST -d 'hello world!' \"https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example?token=<token>\""})}),"\n",(0,n.jsx)(s.h4,{id:"publish-with-authorization-header",children:"Publish with Authorization header"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:'curl -X POST -H "Authorization: <token>" -d \'hello world!\' "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example"'})}),"\n",(0,n.jsx)(s.h2,{id:"subscribe",children:"Subscribe"}),"\n",(0,n.jsx)(s.p,{children:"Subscribes to a topic via long polling, waiting for messages to be published."}),"\n",(0,n.jsx)(s.h3,{id:"request-1",children:"Request"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Path: /topics/{cacheName}/{topicName}"}),"\n",(0,n.jsx)(s.li,{children:"HTTP Method: GET"}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"path-parameters-1",children:"Path parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter\xa0name"}),(0,n.jsx)(s.th,{children:"Required?"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cacheName"}),(0,n.jsx)(s.td,{children:"yes"}),(0,n.jsx)(s.td,{children:"URL-safe string"}),(0,n.jsx)(s.td,{children:"The name of the cache containing the topic."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"topicName"}),(0,n.jsx)(s.td,{children:"yes"}),(0,n.jsx)(s.td,{children:"URL-safe string"}),(0,n.jsx)(s.td,{children:"Name of the topic to subscribe to."})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"query-parameters-1",children:"Query parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter\xa0name"}),(0,n.jsx)(s.th,{children:"Required?"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"token"})}),(0,n.jsx)(s.td,{children:"no**"}),(0,n.jsx)(s.td,{children:"URL-safe\xa0string"}),(0,n.jsx)(s.td,{children:"The Momento auth token, in string format, to be used for authentication/authorization of the request."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"sequence_number"})}),(0,n.jsx)(s.td,{children:"no"}),(0,n.jsx)(s.td,{children:"Integer"}),(0,n.jsx)(s.td,{children:"Optional parameter to specify the last message received. Ensures messages are received in order or to detect discontinuities."})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"headers-1",children:"Headers"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Header\xa0name"}),(0,n.jsx)(s.th,{children:"Required?"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Authorization"})}),(0,n.jsx)(s.td,{children:"no**"}),(0,n.jsx)(s.td,{children:"The Momento auth token, in string format, is used for authentication/authorization of the request."})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"responses-1",children:"Responses"}),"\n",(0,n.jsx)(s.h3,{id:"success-1",children:"Success"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Status code: 200 OK"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The subscription was successful and messages were returned. The response will contain a JSON object with the message(s) and their sequence numbers. If there was a gap in the message sequence, a discontinuity message will be included."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"error-1",children:"Error"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Status code: 401 Unauthorized"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Status code: 403 Forbidden"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Status code: 404 Not Found"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u201cCache Not Found\u201d indicates that the specified cache or topic does not exist."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Status code: 429 Too Many Requests"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"This error type typically indicates that account limits were exceeded. See the message body for further details, or contact Momento support to request a limit increase."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Status code: 500 Internal Server Error"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"examples-1",children:"Examples"}),"\n",(0,n.jsx)(s.h4,{id:"request-with-no-sequence-number",children:"Request with no sequence number"}),"\n",(0,n.jsx)(s.p,{children:"This request includes auth as a header."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:'curl -X GET -H "Authorization: <token>" "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/my-topic"'})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Response"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "items": [\n    {\n      "item": {\n        "topic_sequence_number": 0,\n        "value": {\n          "text": "hello world"\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(s.h4,{id:"request-with-a-sequence-number-provided",children:"Request with a sequence number provided"}),"\n",(0,n.jsx)(s.p,{children:"This request includes auth as a query parameter."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:'curl -X GET "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/my-topic?token=<token>&sequence_number=100"'})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Response"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "items": [\n    {\n      "discontinuity": {\n        "last_topic_sequence": 100,\n        "new_topic_sequence": 104\n      }\n    },\n    {\n      "item": {\n        "topic_sequence_number": 104,\n        "value": {\n          "text": "hello world"\n        }\n      }\n    }\n  ]\n}\n\n'})})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>o});var n=t(96540);const i={},r=n.createContext(i);function c(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);