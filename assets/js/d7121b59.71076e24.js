"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8894],{98024:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(74848),o=t(28453);const s={sidebar_position:2,sidebar_label:"Live reactions",title:"Live reactions",description:"Learn how to overlay live reactions on your content with Momento MediaStore",hide_title:!0,keywords:["momento","mediastore","zero buffer rate","zbr","streaming","live","elemental","serverless","metrics","overlay","reactions"]},r="Adding real-time emoji reactions to a video stream",a={id:"mediastore/enhancements/live-reactions",title:"Live reactions",description:"Learn how to overlay live reactions on your content with Momento MediaStore",source:"@site/docs/mediastore/enhancements/live-reactions.md",sourceDirName:"mediastore/enhancements",slug:"/mediastore/enhancements/live-reactions",permalink:"/mediastore/enhancements/live-reactions",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/mediastore/enhancements/live-reactions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Live reactions",title:"Live reactions",description:"Learn how to overlay live reactions on your content with Momento MediaStore",hide_title:!0,keywords:["momento","mediastore","zero buffer rate","zbr","streaming","live","elemental","serverless","metrics","overlay","reactions"]},sidebar:"mediastoreSidebar",previous:{title:"Viewer metrics",permalink:"/mediastore/enhancements/viewer-metrics"}},l={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Building a token vending machine",id:"step-1-building-a-token-vending-machine",level:2},{value:"Step 2: Creating the video player and emoji overlay",id:"step-2-creating-the-video-player-and-emoji-overlay",level:2},{value:"Step 3: Publishing messages with Momento Topics",id:"step-3-publishing-messages-with-momento-topics",level:2},{value:"Step 4: Rendering emojis on screen",id:"step-4-rendering-emojis-on-screen",level:2},{value:"Step 5: Let the emojis fly!",id:"step-5-let-the-emojis-fly",level:2},{value:"Initialize and install dependencies",id:"initialize-and-install-dependencies",level:3},{value:"Server-side code",id:"server-side-code",level:3},{value:"Client-side code",id:"client-side-code",level:3},{value:"Concepts learned",id:"concepts-learned",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"adding-real-time-emoji-reactions-to-a-video-stream",children:"Adding real-time emoji reactions to a video stream"})}),"\n",(0,i.jsxs)(n.p,{children:["Interactivity plays a significant role in viewer experience. Sending reactions and sharing emotions with other viewers adds a sense of community and engagement you can't find through media streaming alone. In this tutorial, you\u2019ll set up a real-time emoji overlay on a video player. With ",(0,i.jsx)(n.strong,{children:"Momento Topics"}),", emoji reactions appear instantly as users interact, allowing for a lively and engaging viewing experience."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["You can skip straight to a complete ",(0,i.jsx)(n.a,{href:"https://github.com/momentohq/demo-video-streaming",children:"example in GitHub"})," or follow along the tutorial below to build a simple implementation yourself."]})}),"\n",(0,i.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,i.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Browser\n    participant Server\n    participant Momento\n\n    Browser->>+Server: Request auth token\n    Server->>+Momento: Create auth token\n    Momento--\x3e>-Server: Return auth token\n    Server--\x3e>-Browser: Send auth token\n\n    Browser->>+Momento: Publish reaction to Topics\n    Momento--\x3e>-Browser: Broadcast reaction to all viewers"}),"\n",(0,i.jsxs)(n.p,{children:["First, the browser will request an auth token from a server component called a ",(0,i.jsx)(n.em,{children:"token vending machine"}),", which is responsible for creating and distributing short-lived, limited scope ",(0,i.jsx)(n.a,{href:"/cache/develop/authentication/tokens",children:"session tokens"}),". This token will be active for a short period of time and grants access only to the resources needed for sending and receiving reactions."]}),"\n",(0,i.jsxs)(n.p,{children:["After the token is received, the player will publish a message to ",(0,i.jsx)(n.a,{href:"/topics",children:"Momento Topics"})," indicating which emoji was pressed. Topics will broadcast the emoji to all video players that subscribed for reactions."]}),"\n",(0,i.jsx)(n.p,{children:"The event handler in the browser invoked by Momento Topics then renders the emoji on screen, providing real-time reactions to all your users."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.a,{href:"/cache/develop/authentication/api-keys",children:"Momento API key"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-1-building-a-token-vending-machine",children:"Step 1: Building a token vending machine"}),"\n",(0,i.jsxs)(n.p,{children:["The video player needs access to Momento Topics to publish and receive emojis. To grant access, you must generate a session token and return it to the caller. We do this by creating a simple ",(0,i.jsx)(n.a,{href:"https://expressjs.com/",children:"Express server"})," with a ",(0,i.jsx)(n.code,{children:"POST /tokens"})," endpoint."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"import express from 'express';\nimport { AuthClient, ExpiresIn } from '@gomomento/sdk'\n\nconst authClient = new AuthClient();\nconst app = express();\napp.use(express.json());\n\napp.post('/tokens', (req, res) => {\n  const { playerId, streamId} = req.body;\n  const scope = {\n    permissions: [{\n      role: 'publishsubscribe',\n      cache: 'video',\n      topic: streamId\n    }]\n  },\n\n  const tokenResponse = await authClient.generateDisposableToken(scope, ExpiresIn.minutes(30), { tokenId: playerId });\n  res.status(201).json({ token: tokenResponse.authToken });\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The endpoint you created here accepts a request body containing ",(0,i.jsx)(n.code,{children:"playerId"})," and ",(0,i.jsx)(n.code,{children:"streamId"})," properties. The ",(0,i.jsx)(n.code,{children:"streamId"})," is a unique identifier for the video stream being watched. This is used to ",(0,i.jsx)(n.em,{children:"limit the scope of the reactions to the requested video"}),". The ",(0,i.jsx)(n.code,{children:"playerId"})," is the identifier of the caller. Momento best practices say to ",(0,i.jsx)(n.em,{children:"always include the identifier of the caller in your session tokens"})," so you can uniquely identify the actor on your account. We are creating the token with the ",(0,i.jsx)(n.code,{children:"playerId"})," embedded directly in it, which will carry through to every message published by the user."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For the Momento AuthClient to initialize properly, you must have your Momento API key configured in a ",(0,i.jsx)(n.code,{children:"MOMENTO_API_KEY"})," environment variable or pass it directly to the constructor in the ",(0,i.jsx)(n.code,{children:"credentialProvider"})," property."]})}),"\n",(0,i.jsxs)(n.p,{children:["The permissions granted in the token allow the caller to both ",(0,i.jsx)(n.em,{children:"publish"})," and ",(0,i.jsx)(n.em,{children:"subscribe"})," to a topic dedicated to the video stream the caller is watching. This topic lives in a ",(0,i.jsx)(n.a,{href:"/cache",children:"cache"})," named ",(0,i.jsx)(n.code,{children:"video"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Upon success, this endpoint will return a ",(0,i.jsx)(n.code,{children:"201 Created"})," status code along with the generated token that expires in 30 minutes."]}),"\n",(0,i.jsx)(n.h2,{id:"step-2-creating-the-video-player-and-emoji-overlay",children:"Step 2: Creating the video player and emoji overlay"}),"\n",(0,i.jsxs)(n.p,{children:["The emojis sent to each other by viewers are not actually part of the embedded video player itself. In reality, the emojis are overlayed in a ",(0,i.jsx)(n.code,{children:"div"})," surrounding the video player. Emojis are placed with ",(0,i.jsx)(n.em,{children:"absolute"})," positioning and animated with keyframes in CSS."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Live emoji reactions with Momento</title>\n  <style>\n    .video-container {\n      position: relative;\n    }\n    .reaction-buttons {\n      position: absolute;\n      display: flex;\n      top: 1rem;\n      right: 1rem;\n      gap: 0.5rem;\n    }\n    .reaction {\n      padding: 0.5rem;\n      background-color: black;\n      opacity: 0.5;\n      border-radius: 1.5rem;\n    }\n    .animated-emoji {\n      position: absolute;\n      bottom: 0;\n      font-size: 30px;\n      animation: floatUpAndOut 2s linear forwards;\n      pointer-events: none;\n    }\n\n    @keyframes floatUpAndOut {\n      0% { bottom: 0%; opacity: 1; transform: translateX(0) rotate(0deg); }\n      100% { bottom: 100%; opacity: 0; transform: translateX(20px) rotate(15deg); }\n    }\n  </style>\n</head>\n<body>\n  \x3c!-- Video Player Container --\x3e\n  <div id="videoPlayerContainer" class="video-container">\n    <video id="videoPlayer" controls autoplay muted></video>\n\n    \x3c!-- Reaction Buttons --\x3e\n    <div id="emojiReactions" class="reaction-buttons">\n      <button onclick="sendReaction(\'heart\')" class="reaction">\u2764\ufe0f</button>\n      <button onclick="sendReaction(\'100\')" class="reaction">\ud83d\udcaf</button>\n      <button onclick="sendReaction(\'thumbsup\')" class="reaction">\ud83d\udc4d</button>\n      <button onclick="sendReaction(\'mindblown\')" class="reaction">\ud83e\udd2f</button>\n    </div>\n  </div>\n</body>\n</html>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In this HTML, each emoji button triggers a ",(0,i.jsx)(n.code,{children:"sendReaction"})," function, which will send an emoji reaction when clicked. The ",(0,i.jsx)(n.code,{children:"videoPlayerContainer"})," contains both the video player and emoji overlay. The reaction buttons will display on the top right corner of the video player. You can see we have options of \u2764\ufe0f, \ud83d\udcaf, \ud83d\udc4d, and \ud83e\udd2f to send."]}),"\n",(0,i.jsx)(n.p,{children:"This is the foundation of our video player. Now we have to make it work!"}),"\n",(0,i.jsx)(n.h2,{id:"step-3-publishing-messages-with-momento-topics",children:"Step 3: Publishing messages with Momento Topics"}),"\n",(0,i.jsxs)(n.p,{children:["In either a ",(0,i.jsx)(n.code,{children:"<script>"})," tag or external ",(0,i.jsx)(n.code,{children:"script.js"})," file, we must add some logic to call our token vending machine and publish a message when an emoji button is pressed. For simplicity, we'll assume this is running locally and use ",(0,i.jsx)(n.code,{children:"localhost"})," as the base url for the token vending machine."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"let authToken;\nlet id = crypto.randomUUID();\nconst url = new URL(window.location.href);\nconst streamId = url.searchParams.get('videoId');\n\nconst response = await fetch('http://localhost/tokens', {\n  method: 'POST',\n  body: JSON.stringify({\n    playerId: id,\n    streamId: streamId\n  })\n});\n\nconst data = await response.json();\nauthToken = data.token;\n\nfunction sendReaction(reaction) {\n  fetch(`<MOMENTO_REGION_ENDOINT>/topics/video/${streamId}`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      'Authorization': authToken\n    },\n    body: reaction\n  });\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This code generates a unique ",(0,i.jsx)(n.code,{children:"playerId"})," for the viewer, gets the requested video id from the ",(0,i.jsx)(n.code,{children:"videoId"})," query string parameter, and gets an auth token from our token vending machine. It then saves the token globally so we have it in scope for calls made to Momento."]}),"\n",(0,i.jsxs)(n.p,{children:["We also define the ",(0,i.jsx)(n.code,{children:"sendReaction"})," function, which simply wraps a call to the ",(0,i.jsx)(n.a,{href:"/topics/api-reference/http-api",children:"Momento HTTP API"})," using our globally-scoped auth token variable. The url to the Momento API is ",(0,i.jsx)(n.a,{href:"/platform/regions",children:"region-based"})," and varies based on geo-location. You can see in the url, we are doing a POST to Momento Topics, specifically to the ",(0,i.jsx)(n.code,{children:"video"})," cache and sending a message to the ",(0,i.jsx)(n.code,{children:"streamId"})," topic. This allows us to scope interactions specifically to the video being watched by the player."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["When adding reactions to videos, it's considered best practice to scope interactions to a specific piece of media. If you broadcast to a generic ",(0,i.jsx)(n.code,{children:"reactions"})," topic, then ",(0,i.jsx)(n.em,{children:"all reactions"})," across ",(0,i.jsx)(n.em,{children:"all videos"})," would display across the screen."]})}),"\n",(0,i.jsx)(n.h2,{id:"step-4-rendering-emojis-on-screen",children:"Step 4: Rendering emojis on screen"}),"\n",(0,i.jsxs)(n.p,{children:["Now that we're publishing messages that share emojis with other viewers, we need to render them on screen. To get a dynamic effect, each emoji will be placed at a random point horizontally across the video player and will slowly animate from the bottom to the top gradually fading out. Remember, we've already configured the fade up and out animation in our ",(0,i.jsx)(n.code,{children:"floatUpAndOut"})," keyframe CSS class in ",(0,i.jsx)(n.em,{children:"step 2"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"function displayEmoji(emoji) {\n  const emoji = document.createElement('div');\n  emoji.textContent = emoji;\n  emoji.className = 'animated-emoji';\n\n  // Random horizontal position within the video player\n  const containerWidth = document.getElementById('videoPlayerContainer').offsetWidth;\n  emoji.style.left = `${Math.random() * (containerWidth - 30)}px`;\n\n  document.getElementById('videoPlayerContainer').appendChild(emoji);\n\n  setTimeout(() => { emoji.remove(); }, 2000);\n}\n\nasync function longPoll(signal) {\n  try {\n    const response = await fetch('<MOMENTO_REGION_ENDOINT>/topics/video/${streamId}', {\n    headers: {\n      'Authorization': '{{{momento.token}}}',\n    }\n    });\n\n    if (response.ok) {\n      const data = await response.json();\n      if (data && data.items && data.items.length > 0) {\n        const emojiMap = {\n          'heart': '\u2764\ufe0f',\n          '100': '\ud83d\udcaf',\n          'thumbsup': '\ud83d\udc4d',\n          'mindblown': '\ud83e\udd2f'\n        };\n        data.items.forEach(item => {\n          if (item.item && item.item.value && item.item.value.text) {\n            const emoji = emojiMap[item.item.value.text];\n            if(emoji){\n              displayEmoji(emoji);\n            }\n          }\n        });\n      }\n    }\n  } catch (error) {\n    if (error.name !== 'AbortError') {\n      console.error('Long polling error:', error);\n    }\n  } finally {\n    if (!signal.aborted) {\n      setTimeout(() => longPoll(signal), 0);\n    }\n  }\n}\n\nconst pollingController = new AbortController();\nlongPoll(pollingController.signal);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the code above, we define the function that adds the emoji ",(0,i.jsx)(n.code,{children:"div"})," to the video player and applies the CSS class that contains the animation. When the animation is over (it takes two seconds as defined in the CSS), we remove the ",(0,i.jsx)(n.code,{children:"div"})," from the page to clean everything up."]}),"\n",(0,i.jsxs)(n.p,{children:["The other big piece you see above is ",(0,i.jsx)(n.strong,{children:"long polling"}),". We use the Momento HTTP API to ",(0,i.jsx)(n.em,{children:"subscribe"})," for messages to the ",(0,i.jsx)(n.code,{children:"streamId"})," topic. With long polling, the browser will make a request to Momento and it will only return once a message has been published. The browser then immediately makes the request again, waiting for another message to be published. While technically this is a ",(0,i.jsx)(n.em,{children:"pull"})," instead of a ",(0,i.jsx)(n.em,{children:"push"})," for messages, it does provide near real-time messages from Momento."]}),"\n",(0,i.jsxs)(n.p,{children:["The response handler of the long polling will iterate over all received messages, validate the text received is a valid reaction (to prevent against malicious emojis), then proceed to call the ",(0,i.jsx)(n.code,{children:"displayEmoji"})," function and start the animation across the video player."]}),"\n",(0,i.jsx)(n.h2,{id:"step-5-let-the-emojis-fly",children:"Step 5: Let the emojis fly!"}),"\n",(0,i.jsx)(n.p,{children:"Now that the code is written, it's time to test it out! The easiest way to test it all is to run everything locally. So let's tie up some of the loose ends here."}),"\n",(0,i.jsx)(n.h3,{id:"initialize-and-install-dependencies",children:"Initialize and install dependencies"}),"\n",(0,i.jsx)(n.p,{children:"To make this code functional, you need to initialize a new project and install the dependencies. This can be done with the following commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm init\nnpm install express @gomomento/sdk\n"})}),"\n",(0,i.jsx)(n.p,{children:"The first command will walk you through a wizard to setup the project. The second command will install all the dependencies we used in the server-side code."}),"\n",(0,i.jsx)(n.h3,{id:"server-side-code",children:"Server-side code"}),"\n",(0,i.jsxs)(n.p,{children:["The code from ",(0,i.jsx)(n.em,{children:"step 1"})," should be in a file called ",(0,i.jsx)(n.code,{children:"server.mjs"}),". You can configure a ",(0,i.jsx)(n.code,{children:".env"})," file with the ",(0,i.jsx)(n.code,{children:"MOMENTO_API_KEY"})," environment variable set to your Momento API key. To start the server locally, you can run the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"node server.mjs\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will start the server and allow our web page to make a call."}),"\n",(0,i.jsx)(n.h3,{id:"client-side-code",children:"Client-side code"}),"\n",(0,i.jsxs)(n.p,{children:["The html we created in ",(0,i.jsx)(n.em,{children:"step 2"})," should be in a file called ",(0,i.jsx)(n.code,{children:"client.html"}),". The JavaScript from ",(0,i.jsx)(n.em,{children:"steps 3 and 4"})," can be put in a ",(0,i.jsx)(n.code,{children:"<script>"})," tag inside of the ",(0,i.jsx)(n.code,{children:"<body>"})," element in the html. From there, we can run the web page by executing the following command in a terminal:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx serve client.html\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will start another server locally hosting the html. You can click on the link provided in the terminal to open the page in your browser. From here, everything is functional, so click on the emojis and start sending them across the video player!!"}),"\n",(0,i.jsx)(n.h2,{id:"concepts-learned",children:"Concepts learned"}),"\n",(0,i.jsx)(n.p,{children:"In this tutorial, you learned how to do a bunch of things in a short amount of time and an even shorter amount of code! Here's what you now know how to do:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use the Momento AuthClient to create a token vending machine"}),"\n",(0,i.jsxs)(n.li,{children:["Use Momento Topics to send messages ",(0,i.jsx)(n.em,{children:"directly between browsers"})," with no server-side code"]}),"\n",(0,i.jsxs)(n.li,{children:["How to implement ",(0,i.jsx)(n.strong,{children:"long polling"})," with the Momento HTTP API"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["These are foundational topics and core builder skills for programmers of any level. Whether you're building a side project at home or designing an enterprise-grade application, Momento scales with you automatically leaving you to worry about what's important - ",(0,i.jsx)(n.em,{children:"solving your business problem"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Happy coding!"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);