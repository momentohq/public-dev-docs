"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4661],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=i,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6791:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_position:5,sidebar_label:"Bulk data writing",title:"Bulk data writing Redis, CSV, and JSON into Momento Cache",description:"Learn to migrate heaps of data into Momento Cache smoothly."},r="Efficient bulk writes to Momento Cache from Redis, CSV, JSON, and more",l={unversionedId:"develop/integrations/bulk-writing-from-redis-json-csv",id:"develop/integrations/bulk-writing-from-redis-json-csv",title:"Bulk data writing Redis, CSV, and JSON into Momento Cache",description:"Learn to migrate heaps of data into Momento Cache smoothly.",source:"@site/docs/develop/integrations/bulk-writing-from-redis-json-csv.md",sourceDirName:"develop/integrations",slug:"/develop/integrations/bulk-writing-from-redis-json-csv",permalink:"/develop/integrations/bulk-writing-from-redis-json-csv",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/integrations/bulk-writing-from-redis-json-csv.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Bulk data writing",title:"Bulk data writing Redis, CSV, and JSON into Momento Cache",description:"Learn to migrate heaps of data into Momento Cache smoothly."},sidebar:"tutorialSidebar",previous:{title:"AWS Secrets Manager",permalink:"/develop/integrations/aws-secrets-manager"},next:{title:"Netlify",permalink:"/develop/integrations/netlify-integration"}},s={},d=[{value:"Setting up the toolset workflow",id:"setting-up-the-toolset-workflow",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installation steps",id:"installation-steps",level:3},{value:"Usage guide",id:"usage-guide",level:2},{value:"Obtaining Redis database (RDB) files",id:"obtaining-redis-database-rdb-files",level:3},{value:"Extracting and validating Redis database files",id:"extracting-and-validating-redis-database-files",level:3},{value:"Inspecting the output",id:"inspecting-the-output",level:3},{value:"Loading data into Momento Cache",id:"loading-data-into-momento-cache",level:3},{value:"Verifying data in Momento Cache",id:"verifying-data-in-momento-cache",level:3},{value:"Running from an EC2 instance",id:"running-from-an-ec2-instance",level:3}],c={toc:d};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"efficient-bulk-writes-to-momento-cache-from-redis-csv-json-and-more"},"Efficient bulk writes to Momento Cache from Redis, CSV, JSON, and more"),(0,i.kt)("p",null,"If you need to migrate large volumes of data from an existing source into your Momento cache, you\u2019re in the right place. The pipeline proposed here supports Redis data sources, but the design is extensible to other data sources like CSV, JSON, Parquet, and Memcache, among others."),(0,i.kt)("p",null,"Momento provides a bulk loading toolkit that simplifies extraction, validation, and loading, either individually or via a streamlined pipeline."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"diagram",src:a(3505).Z,width:"3976",height:"1176"})),(0,i.kt)("p",null,"In the above diagram, you can see the pipeline first normalizes (extracts) data sources into a common format, ",(0,i.kt)("a",{parentName:"p",href:"https://jsonlines.org/"},"JSON lines (JSON-L)"),". Then checks are performed to identify data incompatible with Momento. Finally, the valid data is loaded into your cache."),(0,i.kt)("p",null,"We encourage and welcome contributions to add more data sources. You can also request support for a particular data source by contacting us via ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/3HkAKjUZGq"},"Discord")," or email ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"Momento support"),"."),(0,i.kt)("h2",{id:"setting-up-the-toolset-workflow"},"Setting up the toolset workflow"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To use the toolset for reading a Redis database, ensure you have Java 8 or a higher version installed. For Windows users, you'll additionally either need to install bash or run the Linux version using the Windows Subsystem for Linux (WSL)."),(0,i.kt)("h3",{id:"installation-steps"},"Installation steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-bulk-writer/releases"},"releases page to download")," the latest release."),(0,i.kt)("li",{parentName:"ol"},"Choose between Linux, OSX, and Windows runtimes."),(0,i.kt)("li",{parentName:"ol"},"Decompress the release and untar it to your preferred directory.")),(0,i.kt)("p",null,"Below is an example for Linux:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cli"},"$ wget https://github.com/momentohq/momento-bulk-writer/releases/download/${version}/momento-bulk-writer-linux-x86.tgz\n$ tar xzvf momento-bulk-writer-linux-x86.tgz\n$ cd ./momento-bulk-writer-linux-x86\n$ ./extract-rdb.sh -h\n$ ./validate.sh -h\n$ ./load.sh -h\n")),(0,i.kt)("h2",{id:"usage-guide"},"Usage guide"),(0,i.kt)("p",null,"This section provides a step-by-step guide on using the toolset for a Redis to Momento data pipeline. The process involves three key steps: extracting a Redis database to JSON lines, validating the JSON lines, and finally loading the JSON lines into Momento."),(0,i.kt)("h3",{id:"obtaining-redis-database-rdb-files"},"Obtaining Redis database (RDB) files"),(0,i.kt)("p",null,"Firstly, you'll need to obtain RDB file(s) by either creating a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-manual.html"},"backup in Amazon ElastiCache")," or ",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/commands/bgsave/"},"running BGSAVE on an existing Redis instance"),"."),(0,i.kt)("h3",{id:"extracting-and-validating-redis-database-files"},"Extracting and validating Redis database files"),(0,i.kt)("p",null,"Assuming you have a directory of RDB files located in ",(0,i.kt)("inlineCode",{parentName:"p"},"./redis")," and you wish to write the output to the current directory, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"extract-rdb-and-validate.sh")," script as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cli"},"$ ./extract-rdb-and-validate.sh -s 1 -t 1 ./redis\n")),(0,i.kt)("p",null,"The command will extract the RDB files in ",(0,i.kt)("inlineCode",{parentName:"p"},"./redis")," to JSON lines format and write the output to the current directory. The ",(0,i.kt)("inlineCode",{parentName:"p"},"-s")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-t")," flags set the max size in MiB and max time-to-live (TTL) in days of items in the cache, respectively. If an item exceeds ",(0,i.kt)("a",{parentName:"p",href:"/manage/limits"},"Momento\u2019s service limits"),", item size (1 MiB), or a TTL (24 hours), that item will be flagged by the process."),(0,i.kt)("p",null,"For more information, check out ",(0,i.kt)("a",{parentName:"p",href:"/manage/limits"},"Service Limits"),"."),(0,i.kt)("h3",{id:"inspecting-the-output"},"Inspecting the output"),(0,i.kt)("p",null,"Your current directory should now contain several output files and directories. The important new directories are ",(0,i.kt)("inlineCode",{parentName:"p"},"validate-strict")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"validate-lax"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"validate-strict")," contains data for any mismatches between Redis and Momento, while ",(0,i.kt)("inlineCode",{parentName:"p"},"validate-lax")," contains data for fewer of the criteria, catching only wholly unsupported data. You'll also find a validation report detailing the data validation process."),(0,i.kt)("p",null,"Some details of the reports:\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"validate-strict")," directory has data from any mismatch between source data (Redis) and Momento Cache, if the data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"exceeds the max item size, or"),(0,i.kt)("li",{parentName:"ul"},"has a TTL greater than the max TTL, or"),(0,i.kt)("li",{parentName:"ul"},"is missing a TTL (as this is required for Momento Cache), or"),(0,i.kt)("li",{parentName:"ul"},"is a type unsupported by Momento Cache")),(0,i.kt)("p",null,"This is helpful in understanding which data lacks a TTL to understand what TTL to apply. Customers have found this especially useful as it identifies outliers in their data, which could be due to bugs in their application logic."),(0,i.kt)("p",null,"To contrast, the ",(0,i.kt)("inlineCode",{parentName:"p"},"validate-lax")," directory has data if the data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"exceeds ",(0,i.kt)("a",{parentName:"li",href:"/manage/limits"},"Momento\u2019s max item size"),", or"),(0,i.kt)("li",{parentName:"ul"},"is a type unsupported by Momento")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"validate-lax")," directory contains data that is unsupported to load into Momento Cache and should be reviewed manually. For example, items with a TTL greater than the Momento max, items lacking a TTL, or those already expired can be addressed and then loaded into Momento."),(0,i.kt)("h3",{id:"loading-data-into-momento-cache"},"Loading data into Momento Cache"),(0,i.kt)("p",null,"Finally, we will load the validated data into Momento using the load script. Following our example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cli"},"$ ./load.sh -a $AUTH_TOKEN -c $CACHE -t 1 -n 10 ./validate-lax/valid.jsonl\n")),(0,i.kt)("p",null,"This command will load the data in ",(0,i.kt)("inlineCode",{parentName:"p"},"./validate-lax/valid.jsonl")," into the cache ",(0,i.kt)("inlineCode",{parentName:"p"},"$CACHE")," with a default TTL of one day, using your Momento auth token ",(0,i.kt)("inlineCode",{parentName:"p"},"$AUTH_TOKEN"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"-n")," flag sets the number of concurrent requests to make to Momento."),(0,i.kt)("h3",{id:"verifying-data-in-momento-cache"},"Verifying data in Momento Cache"),(0,i.kt)("p",null,"Optionally, you can verify the data in Momento Cache matches what is on disk using the verify subcommand. This is a sanity check that should succeed, less items that have already expired."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cli"},"$ ./bin/MomentoEtl verify -a $AUTH_TOKEN -c $CACHE -n 10 ./validate-lax/valid.jsonl\n")),(0,i.kt)("p",null,"This tool prints any differences between the items on disk and items in your cache. If we did things right, then we expect no error output."),(0,i.kt)("h3",{id:"running-from-an-ec2-instance"},"Running from an EC2 instance"),(0,i.kt)("p",null,"The toolset has been tested on an in-region m6a.2xlarge EC2 instance with 64GB disk space on AWS. We first performed a sweep of concurrent requests to determine the optimal rate."),(0,i.kt)("p",null,"Enjoy this powerful toolset and the convenience of bulk-writing data to Momento Cache."))}u.isMDXComponent=!0},3505:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bulk-writing-diagram-e27d730668fcfd802738ecfa6b748d3d.svg"}}]);