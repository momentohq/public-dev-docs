"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[164],{4428:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var s=i(4848),t=i(8453);const o={sidebar_position:5,sidebar_label:"Bulk data writing",title:"Bulk data writing Redis, CSV, and JSON into Momento Cache",description:"Learn to migrate heaps of data into Momento Cache smoothly."},a="Redis\u3001CSV\u3001JSON\u306a\u3069\u304b\u3089Momento Cache\u3078\u306e\u52b9\u7387\u7684\u306a\u4e00\u62ec\u66f8\u304d\u8fbc\u307f",d={id:"cache/integrations/bulk-writing-from-redis-json-csv",title:"Bulk data writing Redis, CSV, and JSON into Momento Cache",description:"Learn to migrate heaps of data into Momento Cache smoothly.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/integrations/bulk-writing-from-redis-json-csv.md",sourceDirName:"cache/integrations",slug:"/cache/integrations/bulk-writing-from-redis-json-csv",permalink:"/ja/cache/integrations/bulk-writing-from-redis-json-csv",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/integrations/bulk-writing-from-redis-json-csv.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Bulk data writing",title:"Bulk data writing Redis, CSV, and JSON into Momento Cache",description:"Learn to migrate heaps of data into Momento Cache smoothly."},sidebar:"cacheSidebar",previous:{title:"AWS Secrets Manager",permalink:"/ja/cache/integrations/aws-secrets-manager"},next:{title:"Netlify",permalink:"/ja/cache/integrations/netlify-integration"}},c={},r=[{value:"\u30c4\u30fc\u30eb\u30bb\u30c3\u30c8\u30fb\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u8a2d\u5b9a",id:"\u30c4\u30fc\u30eb\u30bb\u30c3\u30c8\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u8a2d\u5b9a",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u624b\u9806",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u624b\u9806",level:3},{value:"\u4f7f\u7528\u30ac\u30a4\u30c9",id:"\u4f7f\u7528\u30ac\u30a4\u30c9",level:2},{value:"Redis\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\uff08RDB\uff09\u30d5\u30a1\u30a4\u30eb\u306e\u53d6\u5f97",id:"redis\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9rdb\u30d5\u30a1\u30a4\u30eb\u306e\u53d6\u5f97",level:3},{value:"Redis\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u306e\u62bd\u51fa\u3068\u691c\u8a3c",id:"redis\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u306e\u62bd\u51fa\u3068\u691c\u8a3c",level:3},{value:"\u51fa\u529b\u306e\u691c\u67fb",id:"\u51fa\u529b\u306e\u691c\u67fb",level:3},{value:"Momento Cache\u306b\u30c7\u30fc\u30bf\u3092\u30ed\u30fc\u30c9\u3059\u308b",id:"momento-cache\u306b\u30c7\u30fc\u30bf\u3092\u30ed\u30fc\u30c9\u3059\u308b",level:3},{value:"Momento Cache\u306e\u30c7\u30fc\u30bf\u3092\u691c\u8a3c\u3059\u308b",id:"momento-cache\u306e\u30c7\u30fc\u30bf\u3092\u691c\u8a3c\u3059\u308b",level:3},{value:"EC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089\u306e\u5b9f\u884c",id:"ec2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089\u306e\u5b9f\u884c",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"rediscsvjson\u306a\u3069\u304b\u3089momento-cache\u3078\u306e\u52b9\u7387\u7684\u306a\u4e00\u62ec\u66f8\u304d\u8fbc\u307f",children:"Redis\u3001CSV\u3001JSON\u306a\u3069\u304b\u3089Momento Cache\u3078\u306e\u52b9\u7387\u7684\u306a\u4e00\u62ec\u66f8\u304d\u8fbc\u307f"})}),"\n",(0,s.jsxs)(n.p,{children:["\u65e2\u5b58\u306e\u30bd\u30fc\u30b9\u304b\u3089\u5927\u91cf\u306e\u30c7\u30fc\u30bf\u3092Momento\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u79fb\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u3042\u306a\u305f\u306f\u6b63\u3057\u3044\u5834\u6240\u306b\u3044\u307e\u3059\u3002\u3053\u3053\u3067\u63d0\u6848\u3059\u308b\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u306fRedis\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u304c\u3001CSV\u3001JSON\u3001Parquet\u3001Memcache\u306a\u3069\u4ed6\u306e\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306b\u3082\u62e1\u5f35\u53ef\u80fd\u3067\u3059\u3002\nMomento\u306f\u3001\u62bd\u51fa\u3001\u691c\u8a3c\u3001\u30ed\u30fc\u30c9\u3092\u500b\u5225\u306b\u3001\u307e\u305f\u306f\u5408\u7406\u5316\u3055\u308c\u305f\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u3092\u4ecb\u3057\u3066\u7c21\u7d20\u5316\u3059\u308b\u30d0\u30eb\u30af\u30fb\u30ed\u30fc\u30c9\u30fb\u30c4\u30fc\u30eb\u30ad\u30c3\u30c8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\n",(0,s.jsx)(n.img,{alt:"diagram",src:i(2669).A+"",width:"3976",height:"1176"}),"\n\u4e0a\u306e\u56f3\u3067\u306f\u3001\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u304c\u307e\u305a\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3092\u5171\u901a\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u3042\u308b",(0,s.jsx)(n.a,{href:"https://jsonlines.org/",children:"JSON\u884c(JSON-L)"}),"\u306b\u6b63\u898f\u5316(\u62bd\u51fa)\u3059\u308b\u306e\u304c\u308f\u304b\u308a\u307e\u3059\u3002\u6b21\u306b\u3001Momento \u3068\u4e92\u63db\u6027\u306e\u306a\u3044\u30c7\u30fc\u30bf\u3092\u7279\u5b9a\u3059\u308b\u305f\u3081\u306e\u30c1\u30a7\u30c3\u30af\u304c\u884c\u308f\u308c\u307e\u3059\u3002\u6700\u5f8c\u306b\u3001\u6709\u52b9\u306a\u30c7\u30fc\u30bf\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002\n\u79c1\u305f\u3061\u306f\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3092\u8ffd\u52a0\u3059\u308b\u305f\u3081\u306e\u8ca2\u732e\u3092\u5968\u52b1\u3057\u3001\u6b53\u8fce\u3057\u307e\u3059\u3002",(0,s.jsx)(n.a,{href:"https://discord.com/invite/3HkAKjUZGq",children:"Discord"}),"\u307e\u305f\u306f\u30e1\u30fc\u30eb",(0,s.jsx)(n.a,{href:"mailto:support@momentohq.com",children:"Momento support"}),"\u3067\u3001\u7279\u5b9a\u306e\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306e\u30b5\u30dd\u30fc\u30c8\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u30c4\u30fc\u30eb\u30bb\u30c3\u30c8\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u8a2d\u5b9a",children:"\u30c4\u30fc\u30eb\u30bb\u30c3\u30c8\u30fb\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u8a2d\u5b9a"}),"\n",(0,s.jsx)(n.h3,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"Redis\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u8aad\u307f\u8fbc\u3080\u305f\u3081\u306e\u30c4\u30fc\u30eb\u30bb\u30c3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001Java 8\u307e\u305f\u306f\u305d\u308c\u4ee5\u4e0a\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002Windows\u30e6\u30fc\u30b6\u30fc\u306e\u5834\u5408\u306f\u3001\u3055\u3089\u306bbash\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u304b\u3001Windows Subsystem for Linux\uff08WSL\uff09\u3092\u4f7f\u7528\u3057\u3066Linux\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u624b\u9806",children:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u624b\u9806"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6700\u65b0\u30ea\u30ea\u30fc\u30b9\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u306b\u306f\u3001",(0,s.jsx)(n.a,{href:"https://github.com/momentohq/momento-bulk-writer/releases",children:"\u30ea\u30ea\u30fc\u30b9\u306e\u30da\u30fc\u30b8"}),"\u306b\u79fb\u52d5"]}),"\n",(0,s.jsx)(n.li,{children:"\u30e9\u30f3\u30bf\u30a4\u30e0\u306fLinux\u3001OSX\u3001Windows\u304b\u3089\u9078\u629e\u53ef\u80fd"}),"\n",(0,s.jsx)(n.li,{children:"\u30ea\u30ea\u30fc\u30b9\u3092\u89e3\u51cd\u3057\u3001\u4efb\u610f\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u89e3\u51cd\n\u4ee5\u4e0b\u306fLinux\u306e\u4f8b\u3067\u3059\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cli",children:"$ wget https://github.com/momentohq/momento-bulk-writer/releases/download/${version}/momento-bulk-writer-linux-x86.tgz\n$ tar xzvf momento-bulk-writer-linux-x86.tgz\n$ cd ./momento-bulk-writer-linux-x86\n$ ./extract-rdb.sh -h\n$ ./validate.sh -h\n$ ./load.sh -h\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u30ac\u30a4\u30c9",children:"\u4f7f\u7528\u30ac\u30a4\u30c9"}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001Redis\u304b\u3089Momento\u3078\u306e\u30c7\u30fc\u30bf\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u306e\u305f\u3081\u306e\u30c4\u30fc\u30eb\u30bb\u30c3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u306e\u30b9\u30c6\u30c3\u30d7\u30d0\u30a4\u30b9\u30c6\u30c3\u30d7\u306e\u30ac\u30a4\u30c9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u306e\u30d7\u30ed\u30bb\u30b9\u306b\u306f\u3001Redis \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092 JSON \u884c\u306b\u62bd\u51fa\u3057\u3001JSON \u884c\u3092\u691c\u8a3c\u3057\u3001\u6700\u5f8c\u306b JSON \u884c\u3092 Momento \u306b\u30ed\u30fc\u30c9\u3059\u308b\u3068\u3044\u3046 3 \u3064\u306e\u91cd\u8981\u306a\u30b9\u30c6\u30c3\u30d7\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"redis\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9rdb\u30d5\u30a1\u30a4\u30eb\u306e\u53d6\u5f97",children:"Redis\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\uff08RDB\uff09\u30d5\u30a1\u30a4\u30eb\u306e\u53d6\u5f97"}),"\n",(0,s.jsxs)(n.p,{children:["\u307e\u305a\u3001",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-manual.html",children:"Amazon ElastiCache\u306e\u30d0\u30c3\u30af\u30a2\u30c3\u30d7"}),"\u304b",(0,s.jsx)(n.a,{href:"https://redis.io/commands/bgsave/",children:"\u65e2\u5b58\u306eRedis\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3067BGSAVE\u3092\u5b9f\u884c"}),"\u3057\u3066RDB\u30d5\u30a1\u30a4\u30eb\u3092\u53d6\u5f97\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"redis\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u306e\u62bd\u51fa\u3068\u691c\u8a3c",children:"Redis\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u306e\u62bd\u51fa\u3068\u691c\u8a3c"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"./redis"}),"\u306bRDB\u30d5\u30a1\u30a4\u30eb\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u3042\u308a\u3001\u305d\u306e\u51fa\u529b\u3092\u30ab\u30ec\u30f3\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u66f8\u304d\u51fa\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b",(0,s.jsx)(n.code,{children:"extract-rdb-and-validate.sh"}),"\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cli",children:"$ ./extract-rdb-and-validate.sh -s 1 -t 1 ./redis\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f ",(0,s.jsx)(n.code,{children:"./redis"})," \u306b\u3042\u308b RDB \u30d5\u30a1\u30a4\u30eb\u3092\u5c55\u958b\u3057\u3001JSON lines \u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3078\u5909\u63db\u3057\u3066\u3001\u73fe\u5728\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u66f8\u304d\u51fa\u3057\u307e\u3059\u3002\n",(0,s.jsx)(n.code,{children:"-s"})," \u3068 ",(0,s.jsx)(n.code,{children:"-t"})," \u30d5\u30e9\u30b0\u306f\u3001\u305d\u308c\u305e\u308c\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u6700\u5927 MiB \u3068\u6700\u5927\u751f\u5b58\u671f\u9593(TTL) \u306e\u65e5\u6570\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\n\u3082\u3057\u9805\u76ee\u304c \u30b5\u30a4\u30ba\u4e0a\u9650 (5MB) \u307e\u305f\u306f TTL \u4e0a\u9650 (24 \u6642\u9593) \u7b49\u306e ",(0,s.jsx)(n.a,{href:"../../cache/limits",children:"Momento \u306e\u30b5\u30fc\u30d3\u30b9\u4e0a\u9650"}),"\u3092\u8d85\u3048\u308b\u5834\u5408\u3001\n\u305d\u306e\u9805\u76ee\u306f\u51e6\u7406\u4e2d\u306b\u30d5\u30e9\u30b0\u304c\u7acb\u3061\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u3088\u308a\u8a73\u3057\u3044\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u3001",(0,s.jsx)(n.a,{href:"../../cache/limits",children:"\u30b5\u30fc\u30d3\u30b9\u4e0a\u9650"}),"\u3092\u3054\u78ba\u8a8d\u4e0b\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u51fa\u529b\u306e\u691c\u67fb",children:"\u51fa\u529b\u306e\u691c\u67fb"}),"\n",(0,s.jsxs)(n.p,{children:["\u30ab\u30ec\u30f3\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u51fa\u529b\u30d5\u30a1\u30a4\u30eb\u3068\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u306f\u305a\u3067\u3059\u3002\u91cd\u8981\u306a\u65b0\u3057\u3044\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306f ",(0,s.jsx)(n.code,{children:"validate-strict"})," \u3068 ",(0,s.jsx)(n.code,{children:"validate-lax"})," \u3067\u3059\u3002",(0,s.jsx)(n.code,{children:"validate-strict"}),"\u306b\u306fRedis\u3068Momento\u9593\u306e\u4e0d\u4e00\u81f4\u306e\u30c7\u30fc\u30bf\u304c\u542b\u307e\u308c\u3001",(0,s.jsx)(n.code,{children:"validate-lax"}),"\u306b\u306f\u3088\u308a\u5c11\u306a\u3044\u57fa\u6e96\u306e\u30c7\u30fc\u30bf\u304c\u542b\u307e\u308c\u3001\u5b8c\u5168\u306b\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u30c7\u30fc\u30bf\u306e\u307f\u3092\u30ad\u30e3\u30c3\u30c1\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u30c7\u30fc\u30bf\u691c\u8a3c\u30d7\u30ed\u30bb\u30b9\u306e\u8a73\u7d30\u306a\u691c\u8a3c\u30ec\u30dd\u30fc\u30c8\u3082\u3042\u308a\u307e\u3059\u3002\n\u30ec\u30dd\u30fc\u30c8\u306e\u8a73\u7d30\u3092\u3044\u304f\u3064\u304b\u7d39\u4ecb\u3057\u307e\u3059\uff1a"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"validate-strict"}),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u306f\u3001\u30bd\u30fc\u30b9\u30c7\u30fc\u30bf (Redis) \u3068 Momento Cache \u306e\u9593\u306b\u30df\u30b9\u30de\u30c3\u30c1\u304c\u3042\u3063\u305f\u5834\u5408\u306e\u30c7\u30fc\u30bf\u304c\u683c\u7d0d\u3055\u308c\u307e\u3059\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6700\u5927\u30a2\u30a4\u30c6\u30e0\u30b5\u30a4\u30ba\u3092\u8d85\u3048\u308b"}),"\n",(0,s.jsx)(n.li,{children:"TTL\u304c\u6700\u5927TTL\u3088\u308a\u5927\u304d\u3044"}),"\n",(0,s.jsx)(n.li,{children:"TTL \u304c\u306a\u3044 (Momento Cache \u3067\u306f\u5fc5\u9808)"}),"\n",(0,s.jsxs)(n.li,{children:["Momento Cache \u304c\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u306a\u3044\u578b\n\u3053\u308c\u306f\u3001\u3069\u306e\u30c7\u30fc\u30bf\u306bTTL\u304c\u6b20\u3051\u3066\u3044\u308b\u304b\u3092\u628a\u63e1\u3057\u3001\u3069\u306eTTL\u3092\u9069\u7528\u3059\u3079\u304d\u304b\u3092\u7406\u89e3\u3059\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002\u7279\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30ed\u30b8\u30c3\u30af\u306e\u30d0\u30b0\u304c\u539f\u56e0\u3067\u3042\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u30c7\u30fc\u30bf\u306e\u7570\u5e38\u5024\u3092\u7279\u5b9a\u3059\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002\n\u5bfe\u7167\u7684\u306b\u3001",(0,s.jsx)(n.code,{children:"validate-lax"}),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u306f\u3001\u4ee5\u4e0b\u306b\u8a72\u5f53\u3059\u308b\u30c7\u30fc\u30bf\u304c\u5b58\u5728\u3059\u308b\u5834\u5408\u306e\u307f\u30c7\u30fc\u30bf\u304c\u51fa\u529b\u3055\u308c\u307e\u3059\uff1a"]}),"\n",(0,s.jsxs)(n.li,{children:["Momento\u306e",(0,s.jsx)(n.a,{href:"/cache/limits",children:"\u6700\u5927\u30a2\u30a4\u30c6\u30e0\u30b5\u30a4\u30ba"}),"\u3092\u8d85\u3048\u308b"]}),"\n",(0,s.jsxs)(n.li,{children:["Momento \u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u578b\u3067\u3042\u308b\u3002\n",(0,s.jsx)(n.code,{children:"validate-lax"}),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u306f\u3001Momento Cache\u3078\u306e\u8aad\u307f\u8fbc\u307f\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u30c7\u30fc\u30bf\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u624b\u52d5\u3067\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002\u4f8b\u3048\u3070\u3001TTL \u304c Momento \u306e\u6700\u5927\u5024\u3088\u308a\u3082\u5927\u304d\u3044\u3082\u306e\u3001TTL \u304c\u4e0d\u8db3\u3057\u3066\u3044\u308b\u3082\u306e\u3001\u65e2\u306b\u671f\u9650\u5207\u308c\u306e\u3082\u306e\u306a\u3069\u306f\u3001\u5bfe\u51e6\u3057\u3066\u304b\u3089 Momento \u306b\u8aad\u307f\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"momento-cache\u306b\u30c7\u30fc\u30bf\u3092\u30ed\u30fc\u30c9\u3059\u308b",children:"Momento Cache\u306b\u30c7\u30fc\u30bf\u3092\u30ed\u30fc\u30c9\u3059\u308b"}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u5f8c\u306b\u3001\u30ed\u30fc\u30c9\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001\u691c\u8a3c\u6e08\u307f\u306e\u30c7\u30fc\u30bf\u3092Momento\u306b\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u30b5\u30f3\u30d7\u30eb\u306f\u4ee5\u4e0b\u3067\u3059"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cli",children:"$ ./load.sh -a $AUTH_TOKEN -c $CACHE -t 1 -n 10 ./validate-lax/valid.jsonl\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f ",(0,s.jsx)(n.code,{children:"./validate-lax/valid.jsonl"})," \u306b\u3042\u308b\u30c7\u30fc\u30bf\u3092\u3001Momento \u306e\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3 ",(0,s.jsx)(n.code,{children:"$AUTH_TOKEN"})," \u3092\u4f7f\u3063\u3066\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e TTL \u3092 1 \u65e5\u3068\u3057\u3066\u30ad\u30e3\u30c3\u30b7\u30e5 ",(0,s.jsx)(n.code,{children:"$CACHE"})," \u306b\u30ed\u30fc\u30c9\u3059\u308b\u3002",(0,s.jsx)(n.code,{children:"n"})," \u30d5\u30e9\u30b0\u306f Momento \u3078\u306e\u540c\u6642\u30ea\u30af\u30a8\u30b9\u30c8\u6570\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"momento-cache\u306e\u30c7\u30fc\u30bf\u3092\u691c\u8a3c\u3059\u308b",children:"Momento Cache\u306e\u30c7\u30fc\u30bf\u3092\u691c\u8a3c\u3059\u308b"}),"\n",(0,s.jsx)(n.p,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3001verify \u30b5\u30d6\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001Momento Cache \u5185\u306e\u30c7\u30fc\u30bf\u304c\u30c7\u30a3\u30b9\u30af\u4e0a\u306e\u30c7\u30fc\u30bf\u3068\u4e00\u81f4\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u30b5\u30cb\u30c6\u30a3\u30fb\u30c1\u30a7\u30c3\u30af\u3067\u3042\u308a\u3001\u3059\u3067\u306b\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u3066\u3044\u308b\u9805\u76ee\u3092\u9664\u3044\u3066\u6210\u529f\u3059\u308b\u306f\u305a\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cli",children:"$ ./bin/MomentoEtl verify -a $AUTH_TOKEN -c $CACHE -n 10 ./validate-lax/valid.jsonl\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306e\u30c4\u30fc\u30eb\u306f\u3001\u30c7\u30a3\u30b9\u30af\u4e0a\u306e\u30a2\u30a4\u30c6\u30e0\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306e\u30a2\u30a4\u30c6\u30e0\u306e\u9055\u3044\u3092\u8868\u793a\u3057\u307e\u3059\u3002\u3082\u3057\u79c1\u305f\u3061\u304c\u6b63\u3057\u3044\u3053\u3068\u3092\u3057\u305f\u306e\u306a\u3089\u3001\u30a8\u30e9\u30fc\u51fa\u529b\u306f\u306a\u3044\u306f\u305a\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"ec2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089\u306e\u5b9f\u884c",children:"EC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089\u306e\u5b9f\u884c"}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306e\u30c4\u30fc\u30eb\u30bb\u30c3\u30c8\u306f\u3001AWS\u306e64GB\u306e\u30c7\u30a3\u30b9\u30af\u5bb9\u91cf\u3092\u6301\u3064\u30ea\u30fc\u30b8\u30e7\u30f3\u5185\u306em6a.2xlarge EC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3067\u30c6\u30b9\u30c8\u3055\u308c\u305f\u3002\u307e\u305a\u3001\u6700\u9069\u306a\u30ec\u30fc\u30c8\u3092\u6c7a\u5b9a\u3059\u308b\u305f\u3081\u306b\u3001\u540c\u6642\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30b9\u30a4\u30fc\u30d7\u3092\u5b9f\u884c\u3057\u307e\u3057\u305f\u3002\n\u3053\u306e\u5f37\u529b\u306a\u30c4\u30fc\u30eb\u30bb\u30c3\u30c8\u3068\u3001Momento Cache\u3078\u306e\u30c7\u30fc\u30bf\u4e00\u62ec\u66f8\u304d\u8fbc\u307f\u306e\u5229\u4fbf\u6027\u3092\u304a\u697d\u3057\u307f\u304f\u3060\u3055\u3044\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},2669:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/bulk-writing-diagram-e27d730668fcfd802738ecfa6b748d3d.svg"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var s=i(6540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);