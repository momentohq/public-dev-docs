"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9603],{8586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>m});var i=n(4848),o=n(8453),s=(n(2821),n(503));const r={sidebar_position:1,sidebar_label:"Topics",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in Go",description:"Learn the basic building blocks for writing Go code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","go","golang"]},c="Go\u3067Momento Topics\u3092\u59cb\u3081\u308b",a={id:"platform/sdks/go/topics",title:"Getting started with Momento Cache in Go",description:"Learn the basic building blocks for writing Go code to interact with Momento Topics.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/sdks/go/topics.mdx",sourceDirName:"platform/sdks/go",slug:"/platform/sdks/go/topics",permalink:"/ja/platform/sdks/go/topics",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/go/topics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Topics",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in Go",description:"Learn the basic building blocks for writing Go code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","go","golang"]},sidebar:"platformSidebar",previous:{title:"Cache",permalink:"/ja/platform/sdks/go/cache"},next:{title:"Storage",permalink:"/ja/platform/sdks/go/storage"}},d={},m=[{value:"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:2},{value:"Momento API\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b",id:"momento-api\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b",level:2},{value:"TopicClient\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"topicclient\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b",id:"\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b",level:2},{value:"\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3059\u308b",id:"\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3059\u308b",level:2},{value:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"go\u3067momento-topics\u3092\u59cb\u3081\u308b",children:"Go\u3067Momento Topics\u3092\u59cb\u3081\u308b"})}),"\n",(0,i.jsxs)(t.p,{children:["Go\u3068Momento\u30c8\u30d4\u30c3\u30af\u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u3053\u306e\u30da\u30fc\u30b8\u306b\u306f\u5fc5\u8981\u306a\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u52d5\u4f5c\u3059\u308b\u5b8c\u5168\u306a\u30b3\u30fc\u30c9\u30b5\u30f3\u30d7\u30eb\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-kotlin/tree/main/examples",children:"Go SDK \u306e\u30b5\u30f3\u30d7\u30eb"})," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",children:"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://go.dev/doc/code#Command",children:"Go\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210"}),"\u3057\u305f\u3089\u3001Momento Go SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cli",children:"go get github.com/momentohq/client-sdk-go\n"})}),"\n",(0,i.jsx)(t.h2,{id:"momento-api\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b",children:"Momento API\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b"}),"\n",(0,i.jsxs)(t.p,{children:["Momento API\u30ad\u30fc\u304c\u5fc5\u8981\u3067\u3059\u3002Momento Web Console](",(0,i.jsx)(t.a,{href:"https://console.gomomento.com/)%E3%81%8B%E3%82%89%E5%8F%96%E5%BE%97%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82",children:"https://console.gomomento.com/)\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"}),"\n\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3057\u307e\u3059\uff1a"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"export MOMENTO_API_KEY=<your api key here>\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),": \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5f37\u5316\u306e\u305f\u3081\u306b\u306f\u3001API\u30ad\u30fc\u3092\u74b0\u5883\u5909\u6570\u3067\u306f\u306a\u304f\u3001AWS Secret Manager\u3084GCP Secret Manager\u306e\u3088\u3046\u306a\u3082\u306e\u306b\u5165\u308c\u308b\u306e\u304c\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3060\u304c\u3001\u3053\u3053\u3067\u306f\u30c7\u30e2\u306e\u305f\u3081\u306bAPI\u30ad\u30fc\u3092\u4f7f\u3063\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"topicclient\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"TopicClient\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,i.jsx)(t.p,{children:"\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001\u30d1\u30d6/\u30b5\u30d6\u30fb\u30c8\u30d4\u30c3\u30af\u3068\u306e\u5bfe\u8a71\u306b\u4f7f\u7528\u3059\u308b TopicClient \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(s.F,{language:"go",code:'credProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\n\ntopicClient, err = momento.NewTopicClient(\n\tconfig.TopicsDefault(),\n\tcredProvider,\n)\nif err != nil {\n\tpanic(err)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b",children:"\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b"}),"\n",(0,i.jsx)(t.p,{children:'\u3053\u308c\u306f\u3001"topic "\u3068\u3044\u3046\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u767a\u884c\u3057\u3001\u305d\u306e\u8fd4\u308a\u5024\u3092\u30ad\u30e3\u30c3\u30c1\u3057\u3066\u767a\u884c\u304c\u6210\u529f\u3057\u305f\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u4f8b\u3067\u3059\u3002'}),"\n",(0,i.jsx)(s.F,{language:"go",code:'_, err := topicClient.Publish(ctx, &momento.TopicPublishRequest{\n\tCacheName: cacheName,\n\tTopicName: "test-topic",\n\tValue:     momento.String("test-message"),\n})\nif err != nil {\n\tpanic(err)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3059\u308b",children:"\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3059\u308b"}),"\n",(0,i.jsx)(t.p,{children:'\u3053\u308c\u306f\u3001"topic "\u3068\u3044\u3046\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3059\u308b\u4f8b\u3067\u3042\u308b\u3002\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3055\u308c\u308b\u3068\u3001\u3053\u3053\u306e\u30b3\u30fc\u30c9\u306f\u305d\u308c\u3092\u975e\u540c\u671f\u306b\u53d7\u4fe1\u3057\u3066\u8868\u793a\u3057\u307e\u3059\u3002'}),"\n",(0,i.jsx)(s.F,{language:"go",code:'// Instantiate subscriber\nsub, subErr := topicClient.Subscribe(ctx, &momento.TopicSubscribeRequest{\n\tCacheName: cacheName,\n\tTopicName: "test-topic",\n})\nif subErr != nil {\n\tpanic(subErr)\n}\n\ntime.Sleep(time.Second)\n_, pubErr := topicClient.Publish(ctx, &momento.TopicPublishRequest{\n\tCacheName: cacheName,\n\tTopicName: "test-topic",\n\tValue:     momento.String("test-message"),\n})\nif pubErr != nil {\n\tpanic(pubErr)\n}\ntime.Sleep(time.Second)\n\n// Receive only subscription items with messages\nitem, err := sub.Item(ctx)\nif err != nil {\n\tpanic(err)\n}\nswitch msg := item.(type) {\ncase momento.String:\n\tfmt.Printf("received message as string: \'%v\'\\n", msg)\ncase momento.Bytes:\n\tfmt.Printf("received message as bytes: \'%v\'\\n", msg)\n}\n\n// Receive all subscription events (messages, discontinuities, heartbeats)\nevent, err := sub.Event(ctx)\nif err != nil {\n\tpanic(err)\n}\nswitch e := event.(type) {\ncase momento.TopicHeartbeat:\n\tfmt.Printf("received heartbeat\\n")\ncase momento.TopicDiscontinuity:\n\tfmt.Printf("received discontinuity\\n")\ncase momento.TopicItem:\n\tfmt.Printf(\n\t\t"received message with sequence number %d and publisher id %s: %v \\n",\n\t\te.GetTopicSequenceNumber(),\n\t\te.GetPublisherId(),\n\t\te.GetValue(),\n\t)\n}'}),"\n",(0,i.jsx)(t.h2,{id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",children:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-go/tree/main/examples",children:"Go SDK GitHub repo examples directory"}),"\u306b\u5b8c\u5168\u306a\u52d5\u4f5c\u4f8b\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["\u3053\u308c\u3089\u306e\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u4ee5\u5916\u306b\u3082\u3001Momento\u306eAPI\u30b3\u30fc\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.jsx)(t.a,{href:"/topics/api-reference",children:"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},2821:(e,t,n)=>{n(6540)},503:(e,t,n)=>{n.d(t,{F:()=>s});var i=n(1432),o=(n(6540),n(4848));const s=e=>{let{language:t,code:n}=e;return(0,o.jsx)(i.A,{language:t,children:n})}}}]);