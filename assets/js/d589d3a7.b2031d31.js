"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[162],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=c(n),p=a,d=h["".concat(s,".").concat(p)]||h[p]||u[p]||r;return n?o.createElement(d,i(i({ref:t},m),{},{components:n})):o.createElement(d,i({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9390:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c}});var o=n(3117),a=(n(7294),n(3905));const r={sidebar_position:2,sidebar_class_name:"sidebar-item-getting-started",sidebar_label:"Getting Started",title:"Getting Started with Momento Serverless Cache Service",description:"Jump in and get started on Momento Serverless Cache with your SDK of choice or CLI."},i="Getting Started with Momento Serverless Cache",l={unversionedId:"getting-started",id:"getting-started",title:"Getting Started with Momento Serverless Cache Service",description:"Jump in and get started on Momento Serverless Cache with your SDK of choice or CLI.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"sidebar-item-getting-started",sidebar_label:"Getting Started",title:"Getting Started with Momento Serverless Cache Service",description:"Jump in and get started on Momento Serverless Cache with your SDK of choice or CLI."},sidebar:"tutorialSidebar",previous:{title:"Momento Serverless Cache Service",permalink:"/docs/overview"},next:{title:"How it works",permalink:"/docs/how-it-works"}},s={},c=[{value:"Try our CLI in your browser",id:"try-our-cli-in-your-browser",level:2},{value:"Install the Momento command line interface (CLI)",id:"install-the-momento-command-line-interface-cli",level:2},{value:"Obtain an auth token",id:"obtain-an-auth-token",level:3},{value:"AWS available regions are us-west-2, us-east-1, ap-northeast-1",id:"aws-available-regions-are-us-west-2-us-east-1-ap-northeast-1",level:4},{value:"GCP available regions are us-east1, ap-northeast1",id:"gcp-available-regions-are-us-east1-ap-northeast1",level:4},{value:"Azure (Coming Soon) reach out if interested",id:"azure-coming-soon-reach-out-if-interested",level:4},{value:"Configure the Momento CLI",id:"configure-the-momento-cli",level:2},{value:"Cache some data",id:"cache-some-data",level:2},{value:"Next steps",id:"next-steps",level:2}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-momento-serverless-cache"},"Getting Started with Momento Serverless Cache"),(0,a.kt)("p",null,"If you're looking to jump in and get started with Momento Serverless Cache with an SDK or CLI, you've come to the right place. There are multiple ways to access the service below. "),(0,a.kt)("h2",{id:"try-our-cli-in-your-browser"},"Try our CLI in your browser"),(0,a.kt)("p",null,"You can try out our CLI tool today, right in your browser.  No software installation required!"),(0,a.kt)("p",null,"Head over to our ",(0,a.kt)("a",{parentName:"p",href:"https://www.gomomento.com/try-momento-for-free"},"Try Momento Serverless Cache page"),", and\nyou can experiment with ",(0,a.kt)("inlineCode",{parentName:"p"},"momento")," CLI commands in a shell session directly inside your browser.\nYou can create a free auth token, create a cache, and start running ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," commands\non your cache. It only takes a few minutes!"),(0,a.kt)("h2",{id:"install-the-momento-command-line-interface-cli"},"Install the Momento command line interface (CLI)"),(0,a.kt)("p",null,"If you want to run the CLI on your own machine instead of ",(0,a.kt)("a",{parentName:"p",href:"#try-our-cli-in-your-browser"},"running it in your browser"),",\nhere's how to get started on different operating systems:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"macOS using ",(0,a.kt)("a",{parentName:"strong",href:"https://brew.sh/"},"Homebrew"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew tap momentohq/tap\nbrew install momento-cli\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linux")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the latest linux tar.gz file from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-cli/releases/latest"},"https://github.com/momentohq/momento-cli/releases/latest")),(0,a.kt)("li",{parentName:"ol"},"Unzip the file: ",(0,a.kt)("inlineCode",{parentName:"li"},"tar -xvf momento-cli-X.X.X.linux_x86_64.tar.gz")),(0,a.kt)("li",{parentName:"ol"},"Move ",(0,a.kt)("inlineCode",{parentName:"li"},"./momento")," to your execution path.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Windows")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the latest windows zip file from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-cli/releases/latest"},"https://github.com/momentohq/momento-cli/releases/latest")),(0,a.kt)("li",{parentName:"ol"},"Unzip the ",(0,a.kt)("inlineCode",{parentName:"li"},"momento-cli-X.X.X.windows_x86_64.zip")," file"),(0,a.kt)("li",{parentName:"ol"},"Run the unzipped .exe file")),(0,a.kt)("p",null,"To verify the CLI was installed correctly, you can run our help command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ momento --help\nmomento 0.12.8\nCLI for Momento APIs\n\nUSAGE:\n    momento [OPTIONS] <SUBCOMMAND>\n\nOPTIONS:\n    -h, --help       Print help information\n    -V, --version    Print version information\n        --verbose\n\nSUBCOMMANDS:\n    account      Manage Accounts\n    cache        Cache Operations\n    configure    Configure Momento Credentials\n    help         Print this message or the help of the given subcommand(s)\n")),(0,a.kt)("h3",{id:"obtain-an-auth-token"},"Obtain an auth token"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./how-it-works/momento-concepts#authentication-token"},"Authentication in Momento is done via an authentication token"),", and you can sign up for a Momento Serverless Cache auth token directly from the command line."),(0,a.kt)("p",null,"Authentication tokens are associated with a specific Momento Serverless Cache region. You can provision an auth token for a region using the ",(0,a.kt)("inlineCode",{parentName:"p"},"account")," command with your desired cloud provider and region:"),(0,a.kt)("h4",{id:"aws-available-regions-are-us-west-2-us-east-1-ap-northeast-1"},"AWS ","[available regions are us-west-2, us-east-1, ap-northeast-1]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"momento account signup aws --email <TYPE_YOUR_EMAIL_HERE> --region <TYPE_DESIRED_REGION>\n")),(0,a.kt)("h4",{id:"gcp-available-regions-are-us-east1-ap-northeast1"},"GCP ","[available regions are us-east1, ap-northeast1]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"momento account signup gcp --email <TYPE_YOUR_EMAIL_HERE> --region <TYPE_DESIRED_REGION>\n")),(0,a.kt)("h4",{id:"azure-coming-soon-reach-out-if-interested"},"Azure (Coming Soon) ",(0,a.kt)("a",{parentName:"h4",href:"https://calendly.com/momento-meeting"},"reach out")," if interested"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"momento account signup azure --email <TYPE_YOUR_EMAIL_HERE> --region <TYPE_DESIRED_REGION>\n")),(0,a.kt)("p",null,"Be sure to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<TYPE_YOUR_EMAIL_HERE>")," with your actual email address."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: If a region you wish to use is not available for your selected cloud provider, please ",(0,a.kt)("a",{parentName:"em",href:"https://calendly.com/momento-meeting"},"reach out")," to us to inquire about adding it.")),(0,a.kt)("h2",{id:"configure-the-momento-cli"},"Configure the Momento CLI"),(0,a.kt)("p",null,"Momento will email your auth token to you. You can configure your local CLI to use this token by running the momento ",(0,a.kt)("inlineCode",{parentName:"p"},"configure")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ momento configure\nToken: // < Enter token from email here.\nDefault Cache [default-cache]: my-first-cache // Name of cache to use on CLI by default.\nDefault TTL Seconds [600]: 30 // Sets the default TTL for cache entries. For demostration purposes we are setting this lower right now.\n[2022-03-31T15:31:25Z INFO  momento::commands::cache::cache_cli] creating cache...\n[2022-03-31T15:31:33Z INFO  momento::commands::configure::configure_cli] default cache successfully created\n")),(0,a.kt)("p",null,"You are now up and running with Momento Serverless Cache! Let's see how to use the Momento CLI to cache data in Momento Serverless Cache."),(0,a.kt)("h2",{id:"cache-some-data"},"Cache some data"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cache")," command in the Momento CLI is used to interact with your Momento Serverless Cache. Let's see a few of these commands in action."),(0,a.kt)("p",null,"First, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," subcommand to store an item in your default Momento Serverless Cache:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ momento cache set --key test --value value\n[2022-03-31T15:45:17Z INFO  momento::commands::cache::cache_cli] setting key: test into cache: my-first-cache\n[2022-03-31T15:45:18Z INFO  momento::commands::cache::cache_cli] set success\n")),(0,a.kt)("p",null,"Then, you can retrieve the key using the ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," subcommand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ momento cache get --key test\n[2022-03-31T15:45:25Z INFO  momento::commands::cache::cache_cli] getting key: test from cache: my-first-cache\nvalue\n")),(0,a.kt)("p",null,"In configuring the cache, we set a default Time to Live (TTL) of 30 seconds. If you wait 30 seconds and try to retrieve the cache again, you will see the item has disappeared:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sleep 30 // wait for item to expire\n$ momento cache get --key test\n[2022-03-31T15:46:02Z INFO  momento::commands::cache::cache_cli] getting key: test from cache: my-first-cache\n[2022-03-31T15:46:03Z INFO  momento::commands::cache::cache_cli] cache miss\n")),(0,a.kt)("p",null,"These are the standard ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," ",(0,a.kt)("a",{parentName:"p",href:"./how-it-works/momento-concepts##data-plane-performant-cache-interactions"},"data plane operations")," with the Momento CLI."),(0,a.kt)("p",null,"You can also manage ",(0,a.kt)("a",{parentName:"p",href:"./how-it-works/momento-concepts#control-plane-simple-efficient-cache-management"},"control plane operations")," with the Momento CLI, such as creating a cache, deleting a cache, or listing available caches."),(0,a.kt)("p",null,"You can see all of the available subcommands in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cache")," command by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"momento cache --help")," flag in your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ momento cache --help\nmomento-cache\nCache Operations\n\nUSAGE:\n    momento cache [OPTIONS] <SUBCOMMAND>\n\nOPTIONS:\n    -h, --help       Print help information\n        --verbose\n\nSUBCOMMANDS:\n    create    Creates a Momento Cache\n    delete    Deletes the cache\n    get       Gets item from the cache\n    help      Print this message or the help of the given subcommand(s)\n    list      Lists all momento caches\n    set       Stores a given item in cache\n")),(0,a.kt)("p",null,"Further, you can specify non-default configuration options for your commands, such as a different region, cache name, or TTL."),(0,a.kt)("p",null,"For more information about any of the parameters for a subcommand, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"momento cache $SUBCOMMAND --help")," to learn more."),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"The CLI is great for testing and for understanding the core Momento API, but most of your caching work will be done in your application. For those, you can use the Momento SDKs."),(0,a.kt)("p",null,"We currently have the following SDK's languages availabile. Check out each repo for detailed instructions and usage examples."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-go"},"Go")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-java"},"Java")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript"},"JavaScript")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-python"},"Python")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-dotnet"},".NET")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-rust"},"Rust")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-php"},"Php"))))}u.isMDXComponent=!0}}]);