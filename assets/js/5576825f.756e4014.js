"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4776],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),u=r,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||s;return t?o.createElement(h,a(a({ref:n},d),{},{components:t})):o.createElement(h,a({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5085:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(7294);const r="card_Yy4i",s="cardLink_tPnZ",a="cardContent_l93Q",i="cardTitle_gz5m",c="cardDescription_RQFX",l="cardBody_MLn8",d=e=>{let{title:n,description:t,link:d,icon:p,variation:m="normal"}=e,u="",h="";if("dense"===m.toLowerCase())u="0",h="15em";return o.createElement("div",{className:r,style:{width:h}},o.createElement("a",{href:d,target:"_blank",className:s},o.createElement("div",{className:l},p&&o.createElement("img",{src:p,height:"32px",width:"32px"}),o.createElement("div",{className:a},o.createElement("h3",{className:i},n),o.createElement("p",{className:c,style:{marginBottom:u}},t)))))}},6057:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=t(7462),r=(t(7294),t(3905)),s=t(5085);const a={sidebar_position:6,title:"Leverage Momento Topics, webhooks, and tokens in your event-driven architectures",sidebar_label:"Identifying unique resources",description:"Learn best practices around using Momento Topics, webhooks, and tokens to process unique resources in your event-driven architectures.",keywords:["topics","webhooks","eda","momento","event-driven architecture"]},i="Leverage Momento Topics, webhooks, and tokens in your event-driven architectures",c={unversionedId:"topics/patterns/token_id_webhook",id:"topics/patterns/token_id_webhook",title:"Leverage Momento Topics, webhooks, and tokens in your event-driven architectures",description:"Learn best practices around using Momento Topics, webhooks, and tokens to process unique resources in your event-driven architectures.",source:"@site/docs/topics/patterns/token_id_webhook.md",sourceDirName:"topics/patterns",slug:"/topics/patterns/token_id_webhook",permalink:"/topics/patterns/token_id_webhook",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/patterns/token_id_webhook.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Leverage Momento Topics, webhooks, and tokens in your event-driven architectures",sidebar_label:"Identifying unique resources",description:"Learn best practices around using Momento Topics, webhooks, and tokens to process unique resources in your event-driven architectures.",keywords:["topics","webhooks","eda","momento","event-driven architecture"]},sidebar:"topicsSidebar",previous:{title:"Running background tasks",permalink:"/topics/patterns/running-background-tasks"},next:{title:"Develop",permalink:"/topics/develop/"}},l={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"See More",id:"see-more",level:2}],p={toc:d},m="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(m,(0,o.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"leverage-momento-topics-webhooks-and-tokens-in-your-event-driven-architectures"},"Leverage Momento Topics, webhooks, and tokens in your event-driven architectures"),(0,r.kt)("p",null,"With ",(0,r.kt)("a",{parentName:"p",href:"../"},"Momento Topics"),", you can subscribe to messages on a topic and publish messages to a different topic. ",(0,r.kt)("a",{parentName:"p",href:"../webhooks/overview"},"Webhooks")," serve as HTTP callbacks triggered in response to messages published to these topics, acting as stateless consumers. ",(0,r.kt)("a",{parentName:"p",href:"../../cache/develop/authentication/tokens"},"Tokens")," are designed to provide short-lived session tokens for users and services interacting with a system. By embedding unique identifiers (",(0,r.kt)("inlineCode",{parentName:"p"},"token_id"),") in each token, they ensure secure and traceable access to resources."),(0,r.kt)("p",null,"The key here is that you can use Topics to facilitate real-time communication between users by granting them short-lived tokens. These tokens can be embedded with user information (",(0,r.kt)("inlineCode",{parentName:"p"},"token_id"),"), which, when messages are published, can be leveraged to access shared resources like Momento caches via webhook callbacks. For instance, you can personalize user experiences by accessing their information stored in a Momento cache by identifying the user through the ",(0,r.kt)("inlineCode",{parentName:"p"},"token_id"),". Embedding information provides two significant advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It enhances security and prevents a user from spoofing their identity."),(0,r.kt)("li",{parentName:"ul"},"It reduces data transfer costs as the user information is embedded with the token itself.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture",src:t(3966).Z,width:"547",height:"520"})),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://console.gomomento.com/caches/create"},"Create a cache in the Momento console")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/topics/webhooks/creating-a-webhook"},"Create a webhook")," for the cache. Assign the webhook destination to a public facing endpoint. This endpoint must accept POST requests and be able to receive inbound calls from Momento. More detail about the structure of this event is ",(0,r.kt)("a",{parentName:"li",href:"../webhooks/overview#example-event"},"described here"),"."),(0,r.kt)("li",{parentName:"ol"},"Create your infrastructure. For example, below is sample code that creates a lambda function URL for our webhook endpoint. It also stores\nyour Momento auth token in AWS secrets manager.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"\nimport * as path from 'path';\nimport * as cdk from 'aws-cdk-lib';\nimport {Construct} from 'constructs';\nimport * as lambda from 'aws-cdk-lib/aws-lambda';\nimport * as lambdaNodejs from 'aws-cdk-lib/aws-lambda-nodejs';\nimport * as secrets from 'aws-cdk-lib/aws-secretsmanager';\nimport {CfnOutput} from \"aws-cdk-lib\";\n\nexport class MomentoWebhookStack extends cdk.Stack {\n    constructor(scope: Construct, id: string, props?: cdk.StackProps) {\n        super(scope, id, props);\n\n        const momentoApiKeyParam = new cdk.CfnParameter(this, 'MomentoApiKey', {\n            type: 'String',\n            description: 'The Momento API key that will be used to read from the cache.',\n            noEcho: true,\n        });\n\n        const momentoSecretStringParam = new cdk.CfnParameter(this, 'MomentoSecretString', {\n            type: 'String',\n            description: 'The Momento Webhook Secret String that will be used to validate the caller',\n            noEcho: true,\n        });\n\n        const apiKeySecret = new secrets.Secret(this, 'MomentoWebhookHandlerApiKey', {\n            secretName: 'MomentoWebhookHandlerApiKey',\n            secretStringValue: new cdk.SecretValue(momentoApiKeyParam.valueAsString),\n        });\n\n        const secretStringSecret = new secrets.Secret(this, 'MomentoWebhookHandlerSecretString', {\n            secretName: 'MomentoWebhookHandlerSecretString',\n            secretStringValue: new cdk.SecretValue(momentoSecretStringParam.valueAsString),\n        });\n\n        const webhookHandlerLambda = new lambdaNodejs.NodejsFunction(this, 'MomentoWebhookHandler', {\n            functionName: 'MomentoWebhookHandler',\n            runtime: lambda.Runtime.NODEJS_18_X,\n            entry: path.join(__dirname, '../../lambda/webhook-handler/handler.ts'),\n            projectRoot: path.join(__dirname, '../../lambda/webhook-handler'),\n            depsLockFilePath: path.join(__dirname, '../../lambda/webhook-handler/package-lock.json'),\n            handler: 'handler',\n            timeout: cdk.Duration.seconds(30),\n            memorySize: 128,\n            environment: {\n                MOMENTO_API_KEY_SECRET_NAME: apiKeySecret.secretName,\n                THE_SIGNING_SECRET: secretStringSecret.secretName,\n            },\n        });\n\n        const serviceLambda = new lambdaNodejs.NodejsFunction(this, 'ServiceLambda', {\n            functionName: 'ServiceLambda',\n            runtime: lambda.Runtime.NODEJS_18_X,\n            entry: path.join(__dirname, '../../lambda/service-topics/handler.ts'),\n            projectRoot: path.join(__dirname, '../../lambda/service-topics'),\n            depsLockFilePath: path.join(__dirname, '../../lambda/service-topics/package-lock.json'),\n            handler: 'handler',\n            timeout: cdk.Duration.seconds(30),\n            memorySize: 128,\n            environment: {\n                MOMENTO_API_KEY_SECRET_NAME: apiKeySecret.secretName\n            },\n        });\n\n        // \ud83d\udc47 Setup lambda url\n        const lambdaUrl = webhookHandlerLambda.addFunctionUrl({\n            authType: lambda.FunctionUrlAuthType.NONE,\n        });\n\n        apiKeySecret.grantRead(webhookHandlerLambda);\n        apiKeySecret.grantRead(serviceLambda);\n        secretStringSecret.grantRead(webhookHandlerLambda);\n\n        new CfnOutput(this, 'FunctionUrl ', { value: lambdaUrl.url });\n    }\n}\n\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Add code to the webhook to process incoming messages. Below is sample code for the webhook lambda handler that extracts a user's ",(0,r.kt)("inlineCode",{parentName:"li"},"token_id")," from the webhook payload, and access resources stored in Momento cache. It also verifies that the webhook caller is indeed Momento through the signing secret.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"\nimport {GetSecretValueCommand, SecretsManagerClient} from '@aws-sdk/client-secrets-manager';\nimport {CacheClient, CacheGet, CacheListPushFront, Configurations, CredentialProvider, WebhookUtils} from '@gomomento/sdk';\nimport * as crypto from \"crypto\";\n\nconst _secretsClient = new SecretsManagerClient({});\nconst _cachedSecrets = new Map<string, string>();\nlet _cacheClient: CacheClient | undefined = undefined;\n\nconst cacheName = 'course-comments';\n\nexport const handler = async (event: any) => {\n  try {\n\n    const secretStringSecretName = process.env.THE_SIGNING_SECRET;\n\n    if (secretStringSecretName === undefined) {\n      throw new Error(\"Missing required env var 'THE_SIGNING_SECRET\");\n    }\n\n    const secretString = await getSecret(secretStringSecretName);\n    const authorized = WebhookUtils.validateWebhookRequest(\n        { \n            signature: event.headers['momento-signature'],\n            signingSecret: secretString, \n            body: event.body\n        }\n    );\n    \n    if (authorized !== WebhookUtils.RequestValidation.VALID ) {\n      return {\n        statusCode: 403,\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: '{\"message\": \"Access Denied!\"}',\n      };\n    }\n\n    const payload = JSON.parse(event.body)\n    const userID = payload.token_id\n    const message = JSON.parse(payload.text)\n\n    console.log('Storing user comment for userID ' + userID + ' and courseId ' + message.courseId);\n    console.log('Comment: ' + message.comment);\n\n    const cacheClient = await getCacheClient();\n    if (_cacheClient === undefined) {\n      throw new Error('Cache client is undefined');\n    }\n\n    const listResp = await cacheClient.listPushFront(cacheName, String(message.courseId),\n      JSON.stringify({userID: userID, comment: message.comment}));\n    if (listResp instanceof CacheListPushFront.Success) {\n      console.log('Successfully persisted comment for course');\n    } else if (listResp instanceof CacheListPushFront.Error) {\n      console.log('Error while publishing comment for course ' + listResp.message());\n    }\n\n    return {\n      statusCode: 200,\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: '{}',\n    };\n  } catch (err) {\n    console.log(err);\n    return {\n      statusCode: 500,\n      body: JSON.stringify({\n        message: 'An error occurred!' + err\n      }),\n    };\n  }\n};\n\n\nasync function getSecret(secretName: string): Promise<string> {\n  if (!_cachedSecrets.has(secretName)) {\n    const secretResponse = await _secretsClient.send(new GetSecretValueCommand({SecretId: secretName}));\n    if (secretResponse) {\n      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n      _cachedSecrets.set(secretName, secretResponse.SecretString!);\n    } else {\n      throw new Error(`Unable to retrieve secret: ${secretName}`);\n    }\n  }\n  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n  return _cachedSecrets.get(secretName)!;\n}\n\nasync function getCacheClient(): Promise<CacheClient> {\n  const apiKeySecretName = process.env.MOMENTO_API_KEY_SECRET_NAME;\n  if (apiKeySecretName === undefined) {\n    throw new Error(\"Missing required env var 'MOMENTO_API_KEY_SECRET_NAME\");\n  }\n  if (_cacheClient === undefined) {\n    const momentoApiKey = await getSecret(apiKeySecretName);\n    console.log('Retrieved secret!');\n    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment\n    _cacheClient = await CacheClient.create({\n      configuration: Configurations.Lambda.latest(),\n      credentialProvider: CredentialProvider.fromString({apiKey: momentoApiKey}),\n      defaultTtlSeconds: 60,\n    });\n  }\n  return _cacheClient;\n}\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Finally, below has sample code for generating the token and publishing user messages on a topic. In a real-world,\nthese would ideally live in separate micro-services.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {GetSecretValueCommand, SecretsManagerClient} from '@aws-sdk/client-secrets-manager';\nimport {\n  AuthClient, Configurations, CredentialProvider, DisposableTokenScopes,\n  ExpiresIn, GenerateDisposableToken, TopicClient, TopicPublish\n} from '@gomomento/sdk';\n\nconst _secretsClient = new SecretsManagerClient({});\nconst _cachedSecrets = new Map<string, string>();\nlet _authClient: AuthClient | undefined = undefined;\nlet _topicClient: TopicClient | undefined = undefined;\n\nconst cacheName = 'course-comments';\nconst topicName = 'comment';\n\nexport const handler = async (event: any) => {\n  try {\n\n    const authClient = await getAuthClient();\n\n    const eventsPublishToken = await authClient.generateDisposableToken(\n      DisposableTokenScopes.topicPublishOnly(cacheName, topicName),\n      ExpiresIn.minutes(30),\n      {tokenId: 'taylor'},\n    )\n\n    if (eventsPublishToken instanceof GenerateDisposableToken.Success) {\n      console.log('Generated a disposable API key with access to the \"events\" topic in the \"cache\" cache!');\n      // logging only a substring of the tokens, because logging security credentials is not advisable :)\n      //console.log(`API key starts with: ${eventsPublishToken.authToken.substring(0, 10)}`);\n      //console.log(`Expires At: ${eventsPublishToken.expiresAt.epoch()}`);\n      console.log('Publishing to the \"events\" topic in the \"cache\" cache! using the generated disposable token');\n      const topicClient = await getTopicClient(eventsPublishToken.authToken);\n      const message = JSON.stringify({\n        comment: 'This course and video is awesome!',\n        courseId: 123,\n      });\n      console.log(\"Message: \"  + message);\n      const publishResponse = await topicClient.publish(cacheName, topicName, message);\n      if (publishResponse instanceof TopicPublish.Success) {\n        console.log('Published to the \"events\" topic in the \"cache\" cache!');\n      } else if (publishResponse instanceof TopicPublish.Error) {\n        throw new Error(\n          `An error occurred while attempting to publish to the \"events\" topic in the \"cache\" cache: ${publishResponse.errorCode()}: ${publishResponse.toString()}`\n        );\n      }\n    } else if (eventsPublishToken instanceof GenerateDisposableToken.Error) {\n      throw new Error(\n        `An error occurred while attempting to call generateApiKey with disposable token scope: ${eventsPublishToken.errorCode()}: ${eventsPublishToken.toString()}`\n      );\n    }\n    return {\n      statusCode: 200,\n      headers: {\n        'Content-Type': 'application/json',\n        'Access-Control-Allow-Origin': '*',\n      },\n      body: '{}',\n    };\n  } catch (err) {\n    console.log(err);\n    return {\n      statusCode: 500,\n      body: JSON.stringify({\n        message: 'An error occurred!',\n      }),\n    };\n  }\n}\n\nasync function getAuthClient(): Promise<AuthClient> {\n  const apiKeySecretName = process.env.MOMENTO_API_KEY_SECRET_NAME;\n  if (apiKeySecretName === undefined) {\n    throw new Error(\"Missing required env var 'MOMENTO_API_KEY_SECRET_NAME\");\n  }\n  if (_authClient === undefined) {\n    const momentoApiKey = await getSecret(apiKeySecretName);\n    console.log('Retrieved secret!');\n    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment\n    _authClient = new AuthClient({\n      credentialProvider: CredentialProvider.fromString({apiKey: momentoApiKey}),\n    });\n  }\n  return _authClient;\n}\n\nasync function getTopicClient(disposableTokenKey: string): Promise<TopicClient> {\n  if (_topicClient === undefined) {\n    console.log('Retrieved secret!');\n    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment\n    _topicClient = new TopicClient({\n      configuration: Configurations.Lambda.latest(),\n      credentialProvider: CredentialProvider.fromString({apiKey: disposableTokenKey}),\n    });\n  }\n\n  return _topicClient;\n}\n\nasync function getSecret(secretName: string): Promise<string> {\n  if (!_cachedSecrets.has(secretName)) {\n    const secretResponse = await _secretsClient.send(new GetSecretValueCommand({SecretId: secretName}));\n    if (secretResponse) {\n      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n      _cachedSecrets.set(secretName, secretResponse.SecretString!);\n    } else {\n      throw new Error(`Unable to retrieve secret: ${secretName}`);\n    }\n  }\n  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n  return _cachedSecrets.get(secretName)!;\n}\n\n")),(0,r.kt)("h2",{id:"see-more"},"See More"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"By integrating Momento topics, webhooks, and tokens, you can create secure and stateless asynchronous systems. This convention can be applied to a variety of use-cases such as multi-language chat app, online polling, and event-driven systems.")),(0,r.kt)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"20px",marginBottom:"20px"}},(0,r.kt)(s.Z,{title:"Multi-language chat app",link:"https://github.com/momentohq/moderated-chat/",description:"Explore the source code of our live-translation chat app using webhooks.",mdxType:"ReferenceCard"}),(0,r.kt)(s.Z,{title:"Use webhooks with API Gateway + Lambda",link:"https://www.gomomento.com/blog/how-to-use-webhooks-and-momento-topics-to-build-a-multi-language-chat-app",description:"Learn how to integrate Momento webhooks with Amazon API Gateway and Lambda functions",mdxType:"ReferenceCard"})))}u.isMDXComponent=!0},3966:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/token-id-webhook-06b7252991e86f2953c2aba0f917efbf.png"}}]);