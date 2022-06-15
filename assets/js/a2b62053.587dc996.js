"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1588],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2745:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},l="Deploying a basic serverless application",c={unversionedId:"serverless-cache-walkthrough/deploying-a-basic-serverless-application",id:"serverless-cache-walkthrough/deploying-a-basic-serverless-application",title:"Deploying a basic serverless application",description:"In this step, we will deploy a basic serverless application on AWS. This service will not use caching yet -- we are going to start with the straightforward implementation of our service first. In the following steps, we will see how to improve performance of our application by adding caching with Momento.",source:"@site/docs/6-serverless-cache-walkthrough/2-deploying-a-basic-serverless-application.md",sourceDirName:"6-serverless-cache-walkthrough",slug:"/serverless-cache-walkthrough/deploying-a-basic-serverless-application",permalink:"/docs/serverless-cache-walkthrough/deploying-a-basic-serverless-application",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/6-serverless-cache-walkthrough/2-deploying-a-basic-serverless-application.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction and setup",permalink:"/docs/serverless-cache-walkthrough/adding-a-cache-to-serverless"},next:{title:"Configuring Momento in Serverless",permalink:"/docs/serverless-cache-walkthrough/configuring-momento"}},p={},u=[{value:"Key concepts in our serverless application",id:"key-concepts-in-our-serverless-application",level:2},{value:"Infrastructure-as-code and the serverless.yml file",id:"infrastructure-as-code-and-the-serverlessyml-file",level:3},{value:"The Lambda function handler",id:"the-lambda-function-handler",level:3},{value:"Deployment and usage",id:"deployment-and-usage",level:2},{value:"Deploying our serverless application",id:"deploying-our-serverless-application",level:3},{value:"Interacting with our service",id:"interacting-with-our-service",level:3}],h={toc:u};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-a-basic-serverless-application"},"Deploying a basic serverless application"),(0,r.kt)("p",null,"In this step, we will deploy a basic serverless application on AWS. This service will not use caching yet -- we are going to start with the straightforward implementation of our service first. In the following steps, we will see how to improve performance of our application by adding caching with Momento."),(0,r.kt)("p",null,"We are building an account management service. Our application will use three AWS services to implement our account management features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://aws.amazon.com/lambda/"},"AWS Lambda"),":")," an ephemeral, function-based, pay-per-use compute service that is a core part of many serverless applications on AWS;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://aws.amazon.com/api-gateway/"},"AWS API Gateway"),":")," a pay-per-use service that handles HTTP requests and routes them to our Lambda functions; and")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://aws.amazon.com/dynamodb/"},"Amazon DynamoDB"),":")," a fully-managed NoSQL database from AWS that offers a pay-per-use pricing, a Lambda-friendly connection model, and consistent performance at any scale."))),(0,r.kt)("p",null,"Additionally, we will use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.serverless.com/framework"},"Serverless Framework")," to assist with deployment. The Serverless Framework is an infrastructure-as-code tool that makes it easy to manage and deploy your serverless applications."),(0,r.kt)("p",null,"In the interest of brevity, this tutorial won't walk through every line of code that is written in our serverless application. Rather, we will point out a few key aspects of the code that guide how serverless applications work."),(0,r.kt)("p",null,"For a deeper understanding of the code in this example, please review the documentation in the tutorial repository -- TODO. The code referenced in this step will be from the ",(0,r.kt)("inlineCode",{parentName:"p"},"step-1")," branch of the repository. You can also find out more about the AWS services used or the Serverless Framework by reading their respective documentation pages linked above."),(0,r.kt)("p",null,"This step will proceed by first walking through key points in the application code to teach concepts about serverless applications. Then, it will show how to deploy and use your application. If you would like to jump straight to the action, please navigate to the ",(0,r.kt)("a",{parentName:"p",href:"#deployment-and-usage"},"deployment and usage section"),"."),(0,r.kt)("h2",{id:"key-concepts-in-our-serverless-application"},"Key concepts in our serverless application"),(0,r.kt)("p",null,"Before we deploy our application, we will cover two key concepts about working with serverless applications. First, we'll learn about infrastructure-as-code and how we manage it with our serverless.yml file. Then, we'll learn about the Lambda function handler. For each of these concepts, we'll refer to code from the tutorial repository."),(0,r.kt)("h3",{id:"infrastructure-as-code-and-the-serverlessyml-file"},"Infrastructure-as-code and the serverless.yml file"),(0,r.kt)("p",null,'Serverless applications are often called "service-full" applications as they emphasize using managed services rather than running your own versions of the software. We can see this based on the components mentioned above for our own application:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using managed compute in AWS Lambda rather than running custom applications directly on Amazon EC2 instance;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using a managed API Gateway service rather than running our own Nginx load balancer; or")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using a managed NoSQL database in DynamoDB rather than hosting our own MongoDB or open source relational database"))),(0,r.kt)("p",null,"While we're only using three services here, this is a pretty small application. In a larger application, the number of services and connections between them can be much larger."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Charlie conspiracy meme with serverless architecture background",src:n(5827).Z,width:"1999",height:"1999"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Meme credit: ",(0,r.kt)("a",{parentName:"em",href:"https://twitter.com/swyx/status/1423025792783568899"},"@swyx"))),(0,r.kt)("p",null,"Note that while this may seem overwhelming, it's actually making explicit what is implicitly happening in your application. If you have a single application handling fifteen endpoints, that server box appears more simple than fifteen separate Lambda function icons. But the complexity is still there -- it's just not on your architecture diagram."),(0,r.kt)("p",null,"To handle all these services, it is imperative that you use infrastructure-as-code to manage your serverless application. Infrastructure-as-code is a pattern where you declare the infrastructure that will make up your application in a codified format, generally to be deployed just like the rest of your application code. This is in contrast to configuring your infrastructure manually using a web browser or with ad-hoc scripts."),(0,r.kt)("p",null,"If you're building serverless applications, the foundational infrastructure-as-code tool is ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/cloudformation/"},"AWS CloudFormation"),". CloudFormation itself can be verbose and confusing, particularly when wiring together serverless applications, so there are various abstractions built on top of CloudFormation for serverless-specific applications. One of the more popular ones is the Serverless Framework, which we will use in this tutorial."),(0,r.kt)("p",null,"When using the Serverless Framework in your application, you will describe your infrastructure in a serverless.yml file. You can look at the full file in the application repository (TODO LINK). I want to discuss a few points of the file."),(0,r.kt)("p",null,"First, look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"functions")," block."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Serverless.yml functions block",src:n(9865).Z,width:"1249",height:"672"})),(0,r.kt)("p",null,"AWS Lambda functions are the core of most serverless applications, and the Serverless Framework makes it easy to provision them there. Notice that the functions are fine-grained -- we have four different functions, each handling a specific REST endpoint in our application. Each of them has a ",(0,r.kt)("inlineCode",{parentName:"p"},"handler")," property that points to a file and exported function that will serve as the entrypoint for this Lambda function. We'll look at the handler code shortly."),(0,r.kt)("p",null,"Second, notice that each function has an ",(0,r.kt)("inlineCode",{parentName:"p"},"events")," property with a listed HTTP method and path."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Event triggers",src:n(3166).Z,width:"959",height:"365"})),(0,r.kt)("p",null,"Lambda functions are ",(0,r.kt)("em",{parentName:"p"},"event-driven compute")," -- your code is only executed upon the occurrence of a specified event, and it is triggered with the context of that event in mind."),(0,r.kt)("p",null,"For these examples, each of these functions will be triggered by an HTTP request to our API Gateway instance. API Gateway will route the request to the correct Lambda function based on the method and path of the request, and our Lambda function code will be invoked with details of the request, such as the HTTP headers and request body."),(0,r.kt)("p",null,"Finally, look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," block."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Serverless resources",src:n(983).Z,title:"image_tooltip",width:"795",height:"627"})),(0,r.kt)("p",null,"While Lambda functions are the core of our serverless application, we also need to provision supporting resources. We can do so by writing standard CloudFormation in the resources block. For this application, we are provisioning a DynamoDB table that will be used in our application."),(0,r.kt)("p",null,"Now that we know the basics of the serverless.yml file and infrastructure-as-code, let's look a little deeper at our Lambda functions."),(0,r.kt)("h3",{id:"the-lambda-function-handler"},"The Lambda function handler"),(0,r.kt)("p",null,"In reviewing the infrastructure code that declared our Lambda functions, we saw that each function had a handler property that pointed to a specific file and exported function as the entrypoint to our Lambda function. Let's take a look at one of those files now."),(0,r.kt)("p",null,"All of our function handlers are located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/handlers")," directory. Navigate to that directory and open the ",(0,r.kt)("inlineCode",{parentName:"p"},"createUser.js")," file. The contents will look as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Lambda function handler",src:n(8071).Z,width:"1064",height:"700"})),(0,r.kt)("p",null,"Let's walk through what's happening here."),(0,r.kt)("p",null,"First, notice the function called ",(0,r.kt)("inlineCode",{parentName:"p"},"handler")," that makes up most of the contents of the file. This is the entrypoint to our Lambda function. When a configured event triggers this Lambda function, the Lambda service will call this function with details about the triggering event."),(0,r.kt)("p",null,"Our handler function takes in two arguments: event and context. The event argument is an object that contains all the specific details of the event that triggered our function. For an HTTP request event, that means the request body, headers, and route information. You will use this argument to customize the handler logic in response to the event."),(0,r.kt)("p",null,"You can see that the first line of this function parses the ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," property on the ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," object to extract the ",(0,r.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"firstName"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"lastName")," properties that will be used to create a new User."),(0,r.kt)("p",null,"The context argument contains metadata information about the function itself, including the function name and basic configuration options."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Lambda handler breakdown",src:n(4056).Z,width:"1272",height:"536"})),(0,r.kt)("p",null,"Second, notice what we return from the handler function. It is an object containing ",(0,r.kt)("inlineCode",{parentName:"p"},"statusCode")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," properties. Because our Lambda function will be handling HTTP request events, we need to indicate to API Gateway how to craft the response to the request. We can include information about the status code and body, as shown here, as well as HTTP headers to be included in the response."),(0,r.kt)("p",null,"Finally, notice that our handler is calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"createUser")," method on an ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountService")," instance. This service encapsulates the business logic around creating a User in our application."),(0,r.kt)("p",null,'While we use the term "function" when talking about Lambda compute, you shouldn\'t think of it as analogous to a small, isolated function in your application code. A Lambda function will often call out to other functions within your application and handle complicated logic. Rather, think of your Lambda function as a "handler" -- it handles a particular unit of work, such as responding to an HTTP request.'),(0,r.kt)("p",null,"I like to keep my handler code small and focused. It will parse inputs, handle some minor validation, and assemble the appropriate response at the end. Most of the gnarly logic is contained within a separate service module within my application. This service module can be shared across the various handlers in my application."),(0,r.kt)("p",null,"We'll look deeper at the AccountService in the next step of this tutorial. For now, let's deploy and interact with our application."),(0,r.kt)("h2",{id:"deployment-and-usage"},"Deployment and usage"),(0,r.kt)("p",null,"Time to see our serverless application in action."),(0,r.kt)("h3",{id:"deploying-our-serverless-application"},"Deploying our serverless application"),(0,r.kt)("p",null,"In the root directory of the application (the same directory with your ",(0,r.kt)("inlineCode",{parentName:"p"},"serverless.yml")," file), run the following command to deploy your application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"serverless deploy\n")),(0,r.kt)("p",null,"This is a command from the Serverless Framework to build and deploy your application. First, it will create ZIP files for your Lambda functions and upload those files to S3. Then, it will create and configure the resources specified in your serverless.yml file. The serverless.yml file may only have about 50 lines of YAML, but it's actually provisioning 31 separate resources, including your Lambda functions, API Gateway instance, DynamoDB table, and supporting infrastructure."),(0,r.kt)("p",null,"For this initial deployment, the command will take a few minutes to complete."),(0,r.kt)("p",null,"Once your deployment is finished, you will see summary information about your application printed to the terminal. It should look similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2714 Service deployed to stack momento-serverless-tutorial-dev (58s)\n\nendpoints:\n  POST - https://${apiId}.execute-api.us-east-1.amazonaws.com/dev/users\n  POST - https://${apiId}.execute-api.us-east-1.amazonaws.com/dev/organizations\n  POST - https://${apiId}.execute-api.us-east-1.amazonaws.com/dev/organizations/{organization}/members\n  GET - https://${apiId}.execute-api.us-east-1.amazonaws.com/dev/organizations/{organization}/members/{username}\nfunctions:\n  createUser: momento-serverless-tutorial-dev-createUser (21 kB)\n  createOrganization: momento-serverless-tutorial-dev-createOrganization (21 kB)\n  addUserToOrganization: momento-serverless-tutorial-dev-addUserToOrganization (21 kB)\n  userInOrganization: momento-serverless-tutorial-dev-userInOrganization (21 kB)\n")),(0,r.kt)("p",null,"Notice that it lists each of your deployed functions as well as the full path to your various function endpoints. Each endpoint will be in the format of:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://${apiId}.execute-api.${awsRegion}.amazonaws.com/dev/${route}\n")),(0,r.kt)("p",null,"Copy and paste the base domain and path of your API endpoint, without a specific route, and save it to a variable in your terminal with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ENDPOINT=<yourEndpoint>\n")),(0,r.kt)("p",null,'Be sure to replace "',(0,r.kt)("inlineCode",{parentName:"p"},"<yourEndpoint>"),'" with your copied endpoint from the terminal.'),(0,r.kt)("h3",{id:"interacting-with-our-service"},"Interacting with our service"),(0,r.kt)("p",null,"Now, let's interact with our application and use our deployed endpoints. The examples below use curl in your terminal, but you can also use the exported collection (TODO LINK to repo) in a tool like ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman")," or ",(0,r.kt)("a",{parentName:"p",href:"https://insomnia.rest/"},"Insomnia"),"."),(0,r.kt)("p",null,"First, let's create some users. We will create two users, ",(0,r.kt)("em",{parentName:"p"},"oliviaowner")," and ",(0,r.kt)("em",{parentName:"p"},"membermichael"),", so that we can see how to interact with organizations and memberships in our application."),(0,r.kt)("p",null,"Create your first user by running the following command in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --request POST \\\n  --url ${ENDPOINT}/users \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{ "username": "oliviaowner", "firstName": "Olivia", "lastName": "Smith"}\'\n')),(0,r.kt)("p",null,"You should see a response indicating that the user was created successfully:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"user":{"username":"oliviaowner","firstName":"Olivia","lastName":"Smith"}}\n')),(0,r.kt)("p",null,"Create your second user by executing the following command in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --request POST \\\n  --url ${ENDPOINT}/users \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{ "username": "membermichael", "firstName": "Michael", "lastName": "Scott"}\'\n')),(0,r.kt)("p",null,"Again, you should see a similar response indicating the second user was created"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"user":{"username":"membermichael","firstName":"Michael","lastName":"Scott"}}\n')),(0,r.kt)("p",null,"Now, let's create an organization using our first user. Run the following command in your terminal to create an organization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl --request POST \\\n  --url ${ENDPOINT}/organizations \\\n  --header 'Authorization: oliviaowner' \\\n  --header 'Content-Type: application/json' \\\n  --data '{ \"organizationName\": \"olivia-org\"}'\n")),(0,r.kt)("p",null,"You should see a response indicating that the organization was created successfully:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"organization":{"organizationName":"olivia-org","foundingUser":"oliviaowner"}}\n')),(0,r.kt)("p",null,"When we created an organization, it also created a membership for the founder of that organization. We can check our logic is working correctly by checking our ",(0,r.kt)("em",{parentName:"p"},"userInOrganization")," endpoint to assert that oliviaowner is a member of olivia-org."),(0,r.kt)("p",null,"Run the following command in your terminal to check oliviaowner's membership in olivia-org:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl --request GET \\\n  --url ${ENDPOINT}/organizations/olivia-org/members/oliviaowner\n")),(0,r.kt)("p",null,'You can see that oliviaowner is a member of the organization with a role of "Owner":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"membership":{"organizationName":"olivia-org","memberUsername":"oliviaowner","role":"Owner"}}\n')),(0,r.kt)("p",null,"Let's try the same endpoint but with our other user, who is not currently a member of the organization."),(0,r.kt)("p",null,"Run the following command in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl --request GET \\\n  --url ${ENDPOINT}/organizations/olivia-org/members/membermichael\n")),(0,r.kt)("p",null,"For this user, you will see an error message indicating that membermichael is not a member of the organization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"error":"User membermichael is not a member of organization olivia-org"}\n')),(0,r.kt)("p",null,"Let's add our second user to the organization. To do so, we'll need to call the addMemberToOrganization endpoint while authorizing as a current member. For our application, you can \"authenticate\" yourself by sending a username in the Authorization header."),(0,r.kt)("p",null,"Run the following command to add our second user to the organization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --request POST \\\n  --url ${ENDPOINT}/organizations/olivia-org/members \\\n  --header \'Authorization: oliviaowner\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{ "memberUsername": "membermichael", "role": "Member"}\'\n')),(0,r.kt)("p",null,"You should see the following response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"membership":{"organizationName":"olivia-org","memberUsername":"membermichael","role":"Member"}}\n')),(0,r.kt)("p",null,"Finally, you can re-check the membership of our second user in our organization. You should now see membermichael as a member of olivia-org."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"membership":{"organizationName":"olivia-org","memberUsername":"membermichael","role":"Member"}}\n')),(0,r.kt)("p",null,"In this step, we built and deployed a basic serverless application using Lambda, API Gateway, and DynamoDB. We also tested our endpoints to make sure the basic behavior is working as expected. But now it's time to improve the speed of our application."),(0,r.kt)("p",null,"In the next step, we'll start our cache implementation by installing and configuring Momento in our serverless application. In doing so, we'll learn more about the Lambda execution model so that we can get top performance out of our caching."))}d.isMDXComponent=!0},3166:function(e,t,n){t.Z=n.p+"assets/images/function_events-0f122b4b3d6a2efc3d21ca9fdd274c7d.png"},9865:function(e,t,n){t.Z=n.p+"assets/images/functions_block-268373d8eecc782fd9b05117490a6551.png"},4056:function(e,t,n){t.Z=n.p+"assets/images/handler_breakdown-f38fe850a535412d12beaa3512380965.png"},8071:function(e,t,n){t.Z=n.p+"assets/images/lambda_handler-921a35a779f1cd674b55239c6a855e1b.png"},5827:function(e,t,n){t.Z=n.p+"assets/images/serverless_charlie-49d40fbdbcc8bc86d956f2441ee850fe.png"},983:function(e,t,n){t.Z=n.p+"assets/images/serverless_resources-d08bce2390403369bbefce193a101229.png"}}]);