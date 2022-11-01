"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7162],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=o,d=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9390:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s}});var a=n(3117),o=(n(7294),n(3905));const r={sidebar_position:2,sidebar_class_name:"sidebar-item-getting-started"},i="Getting Started",l={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Quick start",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"sidebar-item-getting-started"},sidebar:"tutorialSidebar",previous:{title:"Momento",permalink:"/docs/overview"},next:{title:"How it works",permalink:"/docs/how-it-works"}},c={},s=[{value:"Quick start",id:"quick-start",level:2},{value:"Try our CLI in your browser!",id:"try-our-cli-in-your-browser",level:3},{value:"Install CLI",id:"install-cli",level:3},{value:"Obtain an auth token",id:"obtain-an-auth-token",level:3},{value:"AWS available regions are us-west-2, us-east-1, ap-northeast-1",id:"aws-available-regions-are-us-west-2-us-east-1-ap-northeast-1",level:5},{value:"GCP available regions are us-east1, ap-northeast1",id:"gcp-available-regions-are-us-east1-ap-northeast1",level:5},{value:"Azure (Coming Soon) reach out if interested",id:"azure-coming-soon-reach-out-if-interested",level:5},{value:"Cache some data",id:"cache-some-data",level:3},{value:"Next steps",id:"next-steps",level:2}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"quick-start"},"Quick start"),(0,o.kt)("h3",{id:"try-our-cli-in-your-browser"},"Try our CLI in your browser!"),(0,o.kt)("p",null,"You can try out our CLI tool today, right in your browser.  No software installation required!"),(0,o.kt)("p",null,"Head over to our ",(0,o.kt)("a",{parentName:"p",href:"https://www.gomomento.com/try-momento-for-free"},"Try Momento page"),", and\nyou can experiment with ",(0,o.kt)("inlineCode",{parentName:"p"},"momento")," CLI commands in a shell session directly inside your browser.\nYou can create a free auth token, create a cache, and start running ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," commands\non your cache.  It only takes a few minutes!"),(0,o.kt)("h3",{id:"install-cli"},"Install CLI"),(0,o.kt)("p",null,"If you want to run the CLI on your own machine instead of ",(0,o.kt)("a",{parentName:"p",href:"#try-our-cli-in-your-browser"},"running it in your browser"),",\nhere's how to get started on different operating systems:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OSx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew tap momentohq/tap\nbrew install momento-cli\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Linux")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the latest linux tar.gz file from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-cli/releases/latest"},"https://github.com/momentohq/momento-cli/releases/latest")),(0,o.kt)("li",{parentName:"ol"},"Unzip the file: ",(0,o.kt)("inlineCode",{parentName:"li"},"tar -xvf momento-cli-X.X.X.linux_x86_64.tar.gz")),(0,o.kt)("li",{parentName:"ol"},"Move ",(0,o.kt)("inlineCode",{parentName:"li"},"./momento")," to your execution path.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Windows")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the latest windows zip file from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-cli/releases/latest"},"https://github.com/momentohq/momento-cli/releases/latest")),(0,o.kt)("li",{parentName:"ol"},"Unzip the ",(0,o.kt)("inlineCode",{parentName:"li"},"momento-cli-X.X.X.windows_x86_64.zip")," file"),(0,o.kt)("li",{parentName:"ol"},"Run the unzipped .exe file")),(0,o.kt)("p",null,"To verify the CLI was installed correctly, you can run our help command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ momento --help\nmomento 0.12.8\nCLI for Momento APIs\n\nUSAGE:\n    momento [OPTIONS] <SUBCOMMAND>\n\nOPTIONS:\n    -h, --help       Print help information\n    -V, --version    Print version information\n        --verbose\n\nSUBCOMMANDS:\n    account      Manage Accounts\n    cache        Cache Operations\n    configure    Configure Momento Credentials\n    help         Print this message or the help of the given subcommand(s)\n")),(0,o.kt)("h3",{id:"obtain-an-auth-token"},"Obtain an auth token"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./how-it-works/momento-concepts#authentication-token"},"Authentication in Momento is done via an authentication token"),", and you can sign up for a Momento auth token directly from the command line."),(0,o.kt)("p",null,"Authentication tokens are associated with a specific Momento region. You can provision an auth token for a region using the ",(0,o.kt)("inlineCode",{parentName:"p"},"account")," command with your desired cloud provider and region:"),(0,o.kt)("h5",{id:"aws-available-regions-are-us-west-2-us-east-1-ap-northeast-1"},"AWS ","[available regions are us-west-2, us-east-1, ap-northeast-1]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"momento account signup aws --email <TYPE_YOUR_EMAIL_HERE> --region <TYPE_DESIRED_REGION>\n")),(0,o.kt)("h5",{id:"gcp-available-regions-are-us-east1-ap-northeast1"},"GCP ","[available regions are us-east1, ap-northeast1]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"momento account signup gcp --email <TYPE_YOUR_EMAIL_HERE> --region <TYPE_DESIRED_REGION>\n")),(0,o.kt)("h5",{id:"azure-coming-soon-reach-out-if-interested"},"Azure (Coming Soon) ",(0,o.kt)("a",{parentName:"h5",href:"https://calendly.com/momento-meeting"},"reach out")," if interested"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"momento account signup azure --email <TYPE_YOUR_EMAIL_HERE> --region <TYPE_DESIRED_REGION>\n")),(0,o.kt)("p",null,"Be sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<TYPE_YOUR_EMAIL_HERE>")," with your actual email address. If the region you want to use is not available yet for your selected cloud provider please ",(0,o.kt)("a",{parentName:"p",href:"https://calendly.com/momento-meeting"},"reach out"),", and we can quickly add support for you."),(0,o.kt)("p",null,"Momento will email your auth token to you. You can configure your local CLI to use this token by running the momento ",(0,o.kt)("inlineCode",{parentName:"p"},"configure")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ momento configure\nToken: // < Enter token from email here.\nDefault Cache [default-cache]: my-first-cache // Name of cache to use on CLI by default.\nDefault Ttl Seconds [600]: 30 // Sets the default TTL for cache entries. For demostration purposes we are setting this lower right now.\n[2022-03-31T15:31:25Z INFO  momento::commands::cache::cache_cli] creating cache...\n[2022-03-31T15:31:33Z INFO  momento::commands::configure::configure_cli] default cache successfully created\n")),(0,o.kt)("p",null,"You are now up and running with Momento! Let's see how to use the Momento CLI to cache data in Momento."),(0,o.kt)("h3",{id:"cache-some-data"},"Cache some data"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cache")," command in the Momento CLI is used to interact with your Momento cache. Let's see a few of these commands in action."),(0,o.kt)("p",null,"First, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," subcommand to store an item in your default Momento cache:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ momento cache set --key test --value value\n[2022-03-31T15:45:17Z INFO  momento::commands::cache::cache_cli] setting key: test into cache: my-first-cache\n[2022-03-31T15:45:18Z INFO  momento::commands::cache::cache_cli] set success\n")),(0,o.kt)("p",null,"Then, you can retrieve the key using the ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," subcommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ momento cache get --key test\n[2022-03-31T15:45:25Z INFO  momento::commands::cache::cache_cli] getting key: test from cache: my-first-cache\nvalue\n")),(0,o.kt)("p",null,"In configuring the cache, we set a default TTL of 30 seconds. If you wait 30 seconds and try to retrieve the cache again, you will see the item has disappeared:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sleep 30 // wait for item to expire\n$ momento cache get --key test\n[2022-03-31T15:46:02Z INFO  momento::commands::cache::cache_cli] getting key: test from cache: my-first-cache\n[2022-03-31T15:46:03Z INFO  momento::commands::cache::cache_cli] cache miss\n")),(0,o.kt)("p",null,"These are the standard ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," ",(0,o.kt)("a",{parentName:"p",href:"./how-it-works/momento-concepts##data-plane-performant-cache-interactions"},"data plane operations")," with the Momento CLI."),(0,o.kt)("p",null,"You can also manage ",(0,o.kt)("a",{parentName:"p",href:"./how-it-works/momento-concepts#control-plane-simple-efficient-cache-management"},"control plane operations")," with the Momento CLI, such as creating a cache, deleting a cache, or listing available caches."),(0,o.kt)("p",null,"You can see all of the available subcommands in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cache")," command by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"momento cache --help")," flag in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ momento cache --help\nmomento-cache\nCache Operations\n\nUSAGE:\n    momento cache [OPTIONS] <SUBCOMMAND>\n\nOPTIONS:\n    -h, --help       Print help information\n        --verbose\n\nSUBCOMMANDS:\n    create    Creates a Momento Cache\n    delete    Deletes the cache\n    get       Gets item from the cache\n    help      Print this message or the help of the given subcommand(s)\n    list      Lists all momento caches\n    set       Stores a given item in cache\n")),(0,o.kt)("p",null,"Further, you can specify non-default configuration options for your commands, such as a different region, cache name, or TTL."),(0,o.kt)("p",null,"For more information about any of the parameters for a subcommand, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"momento cache $SUBCOMMAND --help")," to learn more."),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"The CLI is great for testing and for understanding the core Momento API, but most of your caching work will be done in your application. For those, you can use the Momento SDKs."),(0,o.kt)("p",null,"We currently have the following SDK's languages availabile. Check out each repo for detailed instructions and usage examples."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-go"},"Go")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-java"},"Java")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript"},"JavaScript")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-python"},"Python")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-dotnet"},".NET")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-rust"},"Rust")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-php"},"Php"))))}u.isMDXComponent=!0}}]);