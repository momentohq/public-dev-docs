"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8504],{861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(4848),i=t(8453);const a={sidebar_position:6,sidebar_label:"Sequelize",title:"Integrate Momento With Sequelize ORM",description:"Supercharge your sequelize backed databases with Momento cache"},r="Integrating Momento with your Sequelize backed database",s={id:"cache/integrations/sequelize",title:"Integrate Momento With Sequelize ORM",description:"Supercharge your sequelize backed databases with Momento cache",source:"@site/docs/cache/integrations/sequelize.md",sourceDirName:"cache/integrations",slug:"/cache/integrations/sequelize",permalink:"/cache/integrations/sequelize",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/integrations/sequelize.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Sequelize",title:"Integrate Momento With Sequelize ORM",description:"Supercharge your sequelize backed databases with Momento cache"},sidebar:"cacheSidebar",previous:{title:"Netlify",permalink:"/cache/integrations/netlify-integration"},next:{title:"Vercel",permalink:"/cache/integrations/vercel-integration"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integrating the wrapper in your application",id:"integrating-the-wrapper-in-your-application",level:2},{value:"Examples",id:"examples",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"integrating-momento-with-your-sequelize-backed-database",children:"Integrating Momento with your Sequelize backed database"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://sequelize.org/",children:"Sequelize"})," is a popular ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more."]}),"\n",(0,o.jsxs)(n.p,{children:["In this tutorial, we'll walk through our ",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/momento-sequelize-cache",children:"Momento sequelize model cache wrapper"}),". By the end of the exercise, you'll be able to seamlessly cache your sequelize-backed ORM databases with minimal code changes."]}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(n.p,{children:"To use Momento with Sequelize in your app, you'll need to have the following available:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Node version 16 and above installed on your machine ",(0,o.jsx)(n.a,{href:"https://nodejs.org/en/download",children:"https://nodejs.org/en/download"})]}),"\n",(0,o.jsxs)(n.li,{children:["Configure the Momento side of things using the ",(0,o.jsx)(n.a,{href:"https://console.gomomento.com",children:"Momento console"}),". You can create an account in the console by providing your email address or linking an existing Google or GitHub account. Once you've logged into the console, click the ",(0,o.jsx)(n.code,{children:"Create Cache"})," button on the top right of the page:"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Create Cache button",src:t(2432).A+"",width:"336",height:"258"})}),"\n",(0,o.jsxs)(n.p,{children:["Create a cache called ",(0,o.jsx)(n.code,{children:"model-cache"}),". You can create the cache in your choice of cloud provider, AWS or GCP, and in any region."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Create cache form",src:t(9273).A+"",width:"3406",height:"1402"})}),"\n",(0,o.jsxs)(n.p,{children:["After pressing the ",(0,o.jsx)(n.code,{children:"Create"})," button you'll see the new ",(0,o.jsx)(n.code,{children:"model-cache"})," cache in the list of available caches."]}),"\n",(0,o.jsxs)(n.p,{children:["Notice the region you created your cache in is also displayed in the list of caches. You'll need to make sure that you choose the same region when you generate a Momento authentication token in the next step. Navigate to the ",(0,o.jsx)(n.a,{href:"https://console.gomomento.com/api_keys",children:"api_keys"})," page, choose the cloud provider and region you used to create your cache, choose the ",(0,o.jsx)(n.code,{children:"Super User API Key"})," key type, and hit the ",(0,o.jsx)(n.code,{children:"Generate API Key"})," button."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Generate token",src:t(5329).A+"",width:"3416",height:"1670"})}),"\n",(0,o.jsxs)(n.p,{children:["Copy the ",(0,o.jsx)(n.code,{children:"API Key"})," and save it in a safe place. You'll need to use it later to run your application, where you will add it as an environment variable."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Generated token",src:t(3761).A+"",width:"2704",height:"416"})}),"\n",(0,o.jsx)(n.h2,{id:"integrating-the-wrapper-in-your-application",children:"Integrating the wrapper in your application"}),"\n",(0,o.jsx)(n.p,{children:"To integrate the Momento wrapper in your sequelize-backed application, let's first install the latest release of the wrapper."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install @gomomento-poc/momento-sequelize-cache\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now you're ready to add the necessary imports and ",(0,o.jsx)(n.code,{children:"wrap"})," your Sequelize models such that it will be backed by Momento as a read-aside cache.\nCreating a Momento wrapper over your Sequelize backed database simply involves creating a Momento client and passing it to a factory method. Remember to export your copied ",(0,o.jsx)(n.code,{children:"ApiKey"})," as an environment variable ",(0,o.jsx)(n.code,{children:"MOMENTO_API_KEY"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:'import { Configurations, CredentialProvider } from "@gomomento/sdk";\nimport { modelCacheFactory, MomentoClientGenerator} from "@gomomento-poc/momento-sequelize-cache";\n\nconst momentoClient = MomentoClientGenerator.getInstance({\n        configuration: Configurations.Laptop.latest(),\n        credentialProvider: CredentialProvider.fromEnvironmentVariable({environmentVariableName: \'MOMENTO_API_KEY\'}),\n        defaultTtlSeconds: 60,    \n});\n\nconst modelCache = await modelCacheFactory(momentoClient);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"modelCache"})," object provides a ",(0,o.jsx)(n.code,{children:"wrap"})," method that you can use to wrap any existing Sequelize model. From that point, the wrapped object provides the same familiar APIs that your Sequelize model object would. For example, to fetch a User (from a ",(0,o.jsx)(n.code,{children:"User"})," model) by the primary key, the call looks like:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"await modelCache.wrap(User).findByPk(1);\n"})}),"\n",(0,o.jsx)(n.p,{children:"This call orchestrates the read-aside caching lifecycle: prioritizing cache retrieval, resorting to the Sequelize database on cache misses, and subsequently updating the cache for future requests. You can quickly get started by running one of our examples with various queries."}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsxs)(n.p,{children:["Ready to jump in and explore more functionalities? You can also get started with our ",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/momento-sequelize-cache/tree/main/examples",children:"examples"})," by forking the repo and running the example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'git clone https://github.com/momentohq/momento-sequelize-cache\ncd examples\nnpm install\nMOMENTO_API_KEY="yourApiKey" npm run basic\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This example demonstrates various Sequelize operations supported by the wrapper such as ",(0,o.jsx)(n.code,{children:"findByPk"}),", ",(0,o.jsx)(n.code,{children:"findOne"}),", ",(0,o.jsx)(n.code,{children:"count"}),", and ",(0,o.jsx)(n.code,{children:"findAll"}),". It also demonstrates ",(0,o.jsx)(n.code,{children:"joins"})," between different tables whose queries can be cached."]}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"A read-aside cache can significantly improve the performance of applications. It not only accelerates data retrieval but also lightens the load on primary data stores, resulting in benefits for both developers and end-users. With Momento enhancing your Sequelize applications, you're set to experience a harmonious blend of speed and efficiency."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},3761:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/console-api-key-result-4b58c13d256f6d072db0c9fdf98fe4bc.png"},9273:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/console-create-cache-model-cache-1e6e63c196e0ecb774431504b3f757ce.png"},2432:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/console-create-cache-90d89709336a49153da1d5b47282742a.png"},5329:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/console-generate-api-key-fa04c960370ff9c839806a6154d75aad.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var o=t(6540);const i={},a=o.createContext(i);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);