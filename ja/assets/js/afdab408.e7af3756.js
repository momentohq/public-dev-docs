"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5697],{38663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(74848),o=n(28453);const s={sidebar_position:2,sidebar_label:"Quick start guide",title:"How to configure a live origin with Momento",description:"Using Momento Storage as a live HLS origin for AWS MediaLive and CloudFront.",pagination_next:null,hide_title:!1,keywords:["momento","media storage","origin","encoding","streaming","live","elemental","tutorial","how to","guide","medialive","CloudFront"]},r="Creating a live video origin with Momento Media Storage, AWS MediaLive, and Amazon CloudFront",a={id:"media-storage/streaming/live-streaming/how-to-medialive-cloudfront",title:"How to configure a live origin with Momento",description:"Using Momento Storage as a live HLS origin for AWS MediaLive and CloudFront.",source:"@site/docs/media-storage/streaming/live-streaming/how-to-medialive-cloudfront.md",sourceDirName:"media-storage/streaming/live-streaming",slug:"/media-storage/streaming/live-streaming/how-to-medialive-cloudfront",permalink:"/ja/media-storage/streaming/live-streaming/how-to-medialive-cloudfront",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/media-storage/streaming/live-streaming/how-to-medialive-cloudfront.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Quick start guide",title:"How to configure a live origin with Momento",description:"Using Momento Storage as a live HLS origin for AWS MediaLive and CloudFront.",pagination_next:null,hide_title:!1,keywords:["momento","media storage","origin","encoding","streaming","live","elemental","tutorial","how to","guide","medialive","CloudFront"]},sidebar:"mediastorageSidebar",previous:{title:"Glass-to-glass latency",permalink:"/ja/media-storage/streaming/live-streaming/glass-to-glass-latency"}},l={},d=[{value:"Preparation",id:"preparation",level:2},{value:"1. Create a storage namespace in your Momento account",id:"1-create-a-storage-namespace-in-your-momento-account",level:2},{value:"2. Set up AWS MediaLive for live video encoding",id:"2-set-up-aws-medialive-for-live-video-encoding",level:2},{value:"3. Optimize content delivery with Amazon CloudFront",id:"3-optimize-content-delivery-with-amazon-cloudfront",level:2},{value:"4. Playback and troubleshooting",id:"4-playback-and-troubleshooting",level:2},{value:"MediaLive and Momento",id:"medialive-and-momento",level:3},{value:"CloudFront",id:"cloudfront",level:3},{value:"That&#39;s it!",id:"thats-it",level:2}];function c(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"creating-a-live-video-origin-with-momento-media-storage-aws-medialive-and-amazon-cloudfront",children:"Creating a live video origin with Momento Media Storage, AWS MediaLive, and Amazon CloudFront"})}),"\n",(0,i.jsxs)(t.p,{children:["Live video streaming requires a highly performant and scalable ",(0,i.jsx)(t.a,{href:"/media-storage/core-concepts/origin",children:"origin server"})," to handle the demands of a global audience. Traditional origin servers often struggle with latency, scalability, or complexity when integrated with modern cloud workflows. Momento Media Storage offers a simple, high-scale solution by providing a robust, low-latency, and cost-effective origin solution tailored for live video streaming."]}),"\n",(0,i.jsxs)(t.p,{children:["In this tutorial, you will learn how to set up Momento Media Storage as the origin server for a live video stream encoded by ",(0,i.jsx)(t.a,{href:"https://aws.amazon.com/medialive/",children:"AWS Elemental MediaLive"})," and delivered via ",(0,i.jsx)(t.a,{href:"https://aws.amazon.com/CloudFront/",children:"Amazon CloudFront"}),". By the end of this guide, you'll have a fully functional workflow capable of delivering live ",(0,i.jsx)(t.a,{href:"/media-storage/performance/adaptive-bitrates/hls",children:"HLS streams"})," optimized for performance and reliability."]}),"\n",(0,i.jsx)(t.p,{children:"Here's what we'll cover:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Creating a storage namespace in Momento Media Storage to act as the origin server."}),"\n",(0,i.jsx)(t.li,{children:"Configuring AWS Elemental MediaLive to encode and push live content to Momento."}),"\n",(0,i.jsx)(t.li,{children:"Setting up Amazon CloudFront to serve content to viewers with low latency."}),"\n",(0,i.jsx)(t.li,{children:"Testing and troubleshooting the setup to ensure smooth playback."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["In this tutorial, we will use the ",(0,i.jsx)(t.a,{href:"https://console.gomomento.com",children:"Momento console"}),", but everything could be created and configured programmatically through ",(0,i.jsx)(t.a,{href:"/platform/sdks",children:"the Momento SDK"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"preparation",children:"Preparation"}),"\n",(0,i.jsx)(t.p,{children:"Before creating any resources, please determine the basic characteristics of the live video channel."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Channel bitrates"}),": The bitrate of a channel depends on the resolution, framerate, and encoding. The table below lists the example bitrates used in this guide."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Segment duration"}),": Segment duration should fall between 1 and 2.5 seconds to minimize glass-to-glass latency. This guide uses 2.5 seconds."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"TTL (Time-to-Live)"}),": TTL determines how long stream data remains available for playback. This guide uses 3600 seconds (1 hour). Note that if your product includes features like DVR playback, you may need a much longer TTL measured in days."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Momento Media Storage supports a maximum object size of 10MB. To estimate segment size, divide the bitrate in Kbps by 8, multiply by the segment duration in seconds, and add 10% to account for headers. For example, a 2 second segment at 1000 Kbps is roughly ",(0,i.jsx)(t.code,{children:"1000 / 8 * 2 * 1.1 = 275 KB"}),"."]})}),"\n",(0,i.jsxs)(t.p,{children:["For the purposes of this tutorial, configure one live video channel for an ",(0,i.jsx)(t.a,{href:"/media-storage/core-concepts/abr-ladder",children:"adaptive bitrate ladder"})," with 3 encoding profiles and 2.5-second segments:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"resolution"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"framerate"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"bitrate"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"segment size"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"720p"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"30"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"2,500 kbps"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"850 KiB"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"480p"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"30"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"1,500 kbps"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"500 KiB"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"240p"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"30"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"750 kbps"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"250 KiB"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"1-create-a-storage-namespace-in-your-momento-account",children:"1. Create a storage namespace in your Momento account"}),"\n",(0,i.jsxs)(t.p,{children:["Momento Media Storage is currently restricted to private preview access by key design partners. To create a storage namespace, please ensure that you have successfully logged in to the ",(0,i.jsx)(t.a,{href:"https://console.gomomento.com/",children:"Momento Console"})," once to initialize your account. Then, contact ",(0,i.jsx)(t.code,{children:"support@momentohq.com"})," or your support representative with the following information to create a storage namespace:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"account id"}),": Locate your account id in the dropdown in the upper right corner of the ",(0,i.jsx)(t.a,{href:"https://console.gomomento.com/",children:"console"})," (",(0,i.jsx)(t.code,{children:"a-xxxxxxxxxxxx"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"namespace id"}),": The desired id for the new storage namespace. This guide uses ",(0,i.jsx)(t.code,{children:"live-origin"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"AWS region"}),": The AWS region for the new storage namespace. This guide uses ",(0,i.jsx)(t.code,{children:"us-west-1"}),". Once AZ-alignment becomes available, you will also need to specify two AZs within the region."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"hot storage capacity"}),": This determines how much stream data will be held in low-latency storage. Estimate required capacity by adding up the size of all segments and multiplying by the number of segments to keep in hot storage. For example, keeping 5 minutes of the example bitrate ladder in hot storage requires ",(0,i.jsx)(t.code,{children:"(850+500+250)Kib * 300/2.5 \u2248 200 MiB"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["While Momento Media Storage is in private preview, the Storage ",(0,i.jsx)(t.em,{children:"namespace"})," will be appear as a ",(0,i.jsx)(t.em,{children:"cache"})," in the console. This guide will use ",(0,i.jsx)(t.em,{children:"namespace"})," interchangeably with ",(0,i.jsx)(t.em,{children:"cache"}),". As Momento Media Storage approaches general availability, updates to the console will make namespace creation a self-service process."]}),"\n",(0,i.jsxs)(t.p,{children:["Next, generate the API key that the encoder will use to securely write segment and manifest files to the ",(0,i.jsx)(t.code,{children:"live-origin"})," namespace. In the ",(0,i.jsx)(t.a,{href:"https://console.gomomento.com/api-keys",children:"API Key section"})," of Momento console, create a Fine-Grained Access Key that expires in 30 days with ",(0,i.jsx)(t.em,{children:"readwrite"})," access to the ",(0,i.jsx)(t.code,{children:"live-origin"}),' namespace. Don\'t forget to click on "Add Permission" to grant the permissions before generating the API key.']}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Momento console showing readwrite permissions for the live-origin namespace",src:n(71718).A+"",width:"1593",height:"936"})}),"\n",(0,i.jsxs)(t.p,{children:["API key information will no longer be available after you navigate away from this page, so download the API key as a JSON file. The guide will refer to this API key as ",(0,i.jsx)(t.code,{children:"encoder_api_key"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Video players read the content pushed by encoders to Momento Media Storage via a ",(0,i.jsx)(t.strong,{children:"Content Delivery Network (CDN)"}),". As a security best practices, create a second API key with ",(0,i.jsx)(t.em,{children:"readonly"})," access to the ",(0,i.jsx)(t.code,{children:"live-origin"})," namespace. Use the same ",(0,i.jsx)(t.a,{href:"https://console.gomomento.com/api-keys",children:"API key page"})," as before to create this new API key. The guide will refer to this API key as ",(0,i.jsx)(t.code,{children:"player_api_key"}),"."]}),"\n",(0,i.jsx)(t.admonition,{title:"Checking in",type:"info",children:(0,i.jsxs)(t.p,{children:["At the end of this step, you should have created two API keys: one that grants ",(0,i.jsx)(t.em,{children:"readwrite"})," access and one that ",(0,i.jsx)(t.em,{children:"readonly"})," access to the ",(0,i.jsx)(t.code,{children:"live-origin"})," namespace. Keep these handy to use in the upcoming steps."]})}),"\n",(0,i.jsx)(t.h2,{id:"2-set-up-aws-medialive-for-live-video-encoding",children:"2. Set up AWS MediaLive for live video encoding"}),"\n",(0,i.jsxs)(t.p,{children:["AWS Elemental MediaLive is a live video encoding service from AWS that processes and delivers live streams at scale. MediaLive converts live video into streaming formats like ",(0,i.jsx)(t.a,{href:"/media-storage/performance/adaptive-bitrates/hls",children:"HLS"}),". It is commonly used for live sports, major live events, and 24/7 channels."]}),"\n",(0,i.jsxs)(t.p,{children:["MediaLive will act as the ",(0,i.jsx)(t.strong,{children:"encoder"})," in this live video workflow. The encoded video will be sent directly to Momento Media Storage, which functions as the origin server."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["For best performance, make sure the MediaLive service and the ",(0,i.jsx)(t.code,{children:"live-origin"})," namespace are in the same AWS region or as close as possible. If you are new to MediaLive, refer to the ",(0,i.jsx)(t.a,{href:"https://docs.aws.amazon.com/medialive/latest/ug/container-planning-workflow.html",children:"AWS documentation"})," for detailed setup instructions."]})}),"\n",(0,i.jsxs)(t.p,{children:["Configure a MediaLive channel with one encoding pipeline that outputs to a single destination, the ",(0,i.jsx)(t.code,{children:"live-origin"})," namespace. The output destination URL for the channel should follow this format:"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["https://<",(0,i.jsx)(t.em,{children:"momento_rest_endpoint"}),">/cache/<",(0,i.jsx)(t.em,{children:"namespace_id"}),">/playlist.m3u8?token=<",(0,i.jsx)(t.em,{children:"encoder_api_key"}),">&ttl_seconds=<",(0,i.jsx)(t.em,{children:"ttl"}),">&role=origin"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The variable placeholders are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"momento_rest_endpoint"})," - Region-specific endpoint of the Momento HTTP API (",(0,i.jsx)(t.a,{href:"/platform/regions",children:"find the endpoint of the region here"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"namespace_id"})," - ID of the namespace to upload the segments to."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"encoder_api_key"})," - Value of the ",(0,i.jsx)(t.em,{children:"readwrite"})," encoder key generated in step 1."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ttl"})," - Number of seconds to retain the playlist and segments in the Storage namespace."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:["Note - The query parameter ",(0,i.jsx)(t.code,{children:"role=origin"})," is required for AWS MediaLive. It is not a required query parameter for the Momento HTTP API."]})}),"\n",(0,i.jsx)(t.p,{children:"Applying the configuration from this tutorial, the resulting destination URL would be:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com/cache/live-origin/playlist.m3u8?token=ey[...]J9&ttl_seconds=3600&role=origin\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Set the ",(0,i.jsx)(t.em,{children:"CDN Settings"})," field to ",(0,i.jsx)(t.strong,{children:"HLS basic put"})," and configure the retry policy as shown below to guarantee compatibility with the Momento Media Storage namespace retention period."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"AWS MediaLive console with channel configuration filled out",src:n(35992).A+"",width:"1442",height:"882"})}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.strong,{children:"Manifest and Segments"})," section, configure the following fields:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Output Selection"})," - MANIFESTS_AND_SEGMENTS"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Mode"})," - LIVE"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"TS File Mode"})," - SEGMENTED_FILES"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Segment Length"})," - 2"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The remaining settings should match the configuration below:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"AWS MediaLive console with output configuration complete",src:n(600).A+"",width:"1449",height:"830"})}),"\n",(0,i.jsxs)(t.p,{children:["Finally, we configure how AWS Elemental MediaLive updates the variant playlists: the variant playlists are derived from the master manifest by appending a ",(0,i.jsx)(t.em,{children:"Name modifier"})," at the end of the master playlist chosen name. For each variant playlist/output, add a descriptive modifier that tells us at a glance which playlist we are looking at. For example, each of the variant playlists in the example bitrate ladder will have ",(0,i.jsx)(t.code,{children:"_480p30"}),", ",(0,i.jsx)(t.code,{children:"_240p30"}),", and ",(0,i.jsx)(t.code,{children:"_720p30"})," as the ",(0,i.jsx)(t.em,{children:"Name Modifier"}),". Since we named the master manifest ",(0,i.jsx)(t.code,{children:"playlist.m3u8"}),", the resulting variant manifests will be named respectively ",(0,i.jsx)(t.code,{children:"playlist_480p30.m3u8"}),", ",(0,i.jsx)(t.code,{children:"playlist_240p30.m3u8"}),", and ",(0,i.jsx)(t.code,{children:"playlist_720p30.m3u8"}),". This naming convention will need to be specified in the CloudFront settings below."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"AWS MediaLive console with the name modifier configured for all outputs",src:n(4693).A+"",width:"1436",height:"819"})}),"\n",(0,i.jsxs)(t.p,{children:["Once everything is configured, hit the ",(0,i.jsx)(t.em,{children:"Create channel"})," button to create the encoder!"]}),"\n",(0,i.jsx)(t.h2,{id:"3-optimize-content-delivery-with-amazon-cloudfront",children:"3. Optimize content delivery with Amazon CloudFront"}),"\n",(0,i.jsx)(t.p,{children:"Amazon CloudFront is a Content Delivery Network (CDN) that ensures the live video streams are delivered quickly and reliably to viewers worldwide. In this step, we'll configure CloudFront to work with Momento Media Storage - optimizing latency, managing costs, and securing access."}),"\n",(0,i.jsx)(t.p,{children:"CloudFront will serve two key purposes in this workflow:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Reduce latency and costs by caching video segments across its Points of Presence (PoPs)."}),"\n",(0,i.jsx)(t.li,{children:"Secure access to the Momento origin by adding the appropriate authorization tokens to requests."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/media-storage/core-concepts/segments",children:"Media segments"})," are assets that change infrequently. They represent 1-5 seconds of video, audio, or metadata that will not change once it's been generated by the encoder. These media assets are usually best cached by a CDN service like Amazon CloudFront across multiple PoPs located close to the end viewers for both ",(0,i.jsx)(t.a,{href:"/media-storage/streaming/live-streaming/how-it-works",children:"live"})," and ",(0,i.jsx)(t.a,{href:"/media-storage/streaming/video-on-demand/media-storage",children:"VOD"})," video workflows."]}),"\n",(0,i.jsxs)(t.p,{children:['While VOD workflows have HLS manifests that never change once they are created, HLS manifests in live video workflows are constantly recreated by the encoders to present the latest media segments, at the "live point". As a result, ',(0,i.jsx)(t.em,{children:"live HLS manifests should not be cached by a CDN for longer than the size of a media segment"}),". So we will ",(0,i.jsx)(t.strong,{children:"not cache the manifests"})," and instead hand them over the Momento origin, which is designed to manage frequently changing objects."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"You can optimize retrieval of manifest files by specifying a short TTL in the appropraite CloudFront behavior."})}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.a,{href:"https://console.aws.amazon.com/cloudfront",children:"Amazon CloudFront console"}),", create a CloudFront distribution that enables these rules through custom CloudFront behaviors."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"CloudFront console with the create distribution fields completed",src:n(72130).A+"",width:"1433",height:"885"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.em,{children:"Origin domain"})," of the CloudFront distribution must be set as the ",(0,i.jsx)(t.code,{children:"momento_rest_endpoint"})," url we used to configure the MediaLive channel, with the ",(0,i.jsx)(t.em,{children:"Origin path"})," as ",(0,i.jsx)(t.code,{children:"/cache/<namespace_id>"}),". Note the ",(0,i.jsx)(t.em,{children:"Origin path"})," field ",(0,i.jsx)(t.strong,{children:"is required for this workflow"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Since CloudFront is accessed by video players, which don't go through auth flows to obtain API keys or session tokens, we must set up the default policy to add an ",(0,i.jsx)(t.em,{children:"Authorization"})," header with ",(0,i.jsx)(t.code,{children:"player_api_key"})," for incoming requests. This enables CloudFront to automatically forward an API key to Momento, granting read-only access to the generated segments."]}),"\n",(0,i.jsxs)(t.p,{children:["You do not need to enable the ",(0,i.jsx)(t.em,{children:"Origin Shield"})," functionality of CloudFront, Momento takes care of it natively."]}),"\n",(0,i.jsxs)(t.p,{children:["For the ",(0,i.jsx)(t.strong,{children:"Web Application Firewall (WAF)"})," settings, select ",(0,i.jsx)(t.em,{children:"Do not enable security protections"})," for the demo."]}),"\n",(0,i.jsx)(t.p,{children:"Now we need to define the CloudFront behaviors for three types of objects read from the Momento origin server:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The default behavior"}),"\n",(0,i.jsx)(t.li,{children:"The behavior for media segments"}),"\n",(0,i.jsx)(t.li,{children:"The behavior for variant playlists"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"CloudFront console listing the caching behaviors and their policies",src:n(74155).A+"",width:"1444",height:"527"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Default behavior"}),': This "behavior" is for items that are not part of the video origin workflow. We assume these objects will be changed frequently, so we won\'t cache them in CloudFront, using the a "CachingDisabled" policy. Configure the policy as outlined below.']}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"CloudFront behavior for the default behavior",src:n(40021).A+"",width:"1446",height:"895"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Media segments behavior"}),': These files won\'t change after the encoder has sent them to the origin, so they are good candidates for being cached by CloudFront and its "CachingOptimized" policy. From the AWS MediaLive configuration, the segments that contain audio/video will always have the file extension ',(0,i.jsx)(t.code,{children:".ts"})," :"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"CloudFront behavior for caching segments",src:n(24386).A+"",width:"1450",height:"864"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Variant playlists behavior"}),": These ",(0,i.jsx)(t.code,{children:"playlist_*.m3u8"})," files are refreshed every time a new media segment is available from AWS Elemental MediaLive. When MediaLive recreates the playlists, it automatically appends the ",(0,i.jsx)(t.code,{children:"encoder_api_key"})," token query parameter in its URI. Since the default rules apply a different, conflicting value (",(0,i.jsx)(t.code,{children:"player_api_key"}),") in ",(0,i.jsx)(t.em,{children:"Authorization"})," header when requesting these segments, we need to define a behavior where the ",(0,i.jsx)(t.em,{children:"Authorization"})," header is dropped for these requests. To accomplish this, set the ",(0,i.jsx)(t.em,{children:"Origin request policy"})," to None."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"CloudFront behavior for variant playlists",src:n(17118).A+"",width:"1450",height:"840"})}),"\n",(0,i.jsx)(t.h2,{id:"4-playback-and-troubleshooting",children:"4. Playback and troubleshooting"}),"\n",(0,i.jsxs)(t.p,{children:["With that, we're ready to stream! You can now point your favorite HLS player (in ",(0,i.jsx)(t.a,{href:"https://www.videolan.org/",children:"VLC media player"})," open a network stream and paste the .m3u8 path) to ",(0,i.jsx)(t.code,{children:"https://<cloudfront_id>.CloudFront.net/playlist.m3u8"})," and play the live stream encoded by AWS Elemental MediaLive."]}),"\n",(0,i.jsx)(t.p,{children:"If things go wrong and the stream doesn't play, the best way to troubleshoot is to manually check each of the steps that is performed by the HLS video player."}),"\n",(0,i.jsx)(t.h3,{id:"medialive-and-momento",children:"MediaLive and Momento"}),"\n",(0,i.jsxs)(t.p,{children:["Verify the master manifest is accessible with ",(0,i.jsx)(t.code,{children:"player_api_key"})," and returns the variant playlists correctly. Use the following ",(0,i.jsx)(t.code,{children:"curl"})," command to test, or use the ",(0,i.jsx)(t.a,{href:"https://console.gomomento.com/caches/live-origin",children:"Momento console"})," to view data in the namespace."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'$ curl "https://<momento_rest_endpoint>/cache/live-origin/playlist.m3u8?token=<player_api_key>"\n\n#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-INDEPENDENT-SEGMENTS\n#EXT-X-STREAM-INF:BANDWIDTH=2648800,AVERAGE-BANDWIDTH=1790800,CODECS="avc1.77.30,mp4a.40.2",RESOLUTION=640x480,FRAME-RATE=30.000\nplaylist_480p30.m3u8?token=<encoder_api_key>&ttl_seconds=3600&role=origin\n#EXT-X-STREAM-INF:BANDWIDTH=1394800,AVERAGE-BANDWIDTH=965800,CODECS="avc1.4d400d,mp4a.40.2",RESOLUTION=320x240,FRAME-RATE=30.000\nplaylist_240p30.m3u8?token=<encoder_api_key>&ttl_seconds=3600&role=origin\n#EXT-X-STREAM-INF:BANDWIDTH=4391200,AVERAGE-BANDWIDTH=2961200,CODECS="avc1.4d401f,mp4a.40.2",RESOLUTION=960x720,FRAME-RATE=30.000\nplaylist_720p30.m3u8?token=<encoder_api_key>&ttl_seconds=3600&role=origin\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Verify that each variant playlist is accessible, and if you can download the last media segment listed in the variant playlists (aka ",(0,i.jsx)(t.em,{children:"the live point"}),"). Below are the ",(0,i.jsx)(t.code,{children:"curl"})," commands to view the 480p manifest and the live point."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'$ curl "https://<momento_rest_endpoint>/cache/live-origin/playlist_480p30.m3u8?token=<player_api_key>"\n\n#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-TARGETDURATION:2\n#EXT-X-MEDIA-SEQUENCE:891\n#EXTINF:2.00000,\nplaylist_480p30_00891.ts\n#EXTINF:2.00000,\nplaylist_480p30_00892.ts\n#EXTINF:2.00000,\n[...]\n#EXTINF:2.00000,\nplaylist_480p30_00939.ts\n#EXTINF:2.00000,\nplaylist_480p30_00940.ts\n\n$ curl -o test.ts  "https://<momento_rest_endpoint>/cache/live-origin/playlist_480p30_00940.ts?token=<player_api_key>"\n'})}),"\n",(0,i.jsxs)(t.p,{children:["When viewing the live point, verify a ",(0,i.jsx)(t.code,{children:"test.ts"})," file is correctly downloaded and looks OK with your favorite test tool (",(0,i.jsx)(t.a,{href:"https://ffmpeg.org/ffprobe.html",children:"ffprobe"}),", ",(0,i.jsx)(t.a,{href:"https://mediaarea.net/en/MediaInfo",children:"mediainfo"}),", etc...)."]}),"\n",(0,i.jsx)(t.p,{children:"If any of these steps fails, usual suspects are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"encoder_api_key"})," or ",(0,i.jsx)(t.code,{children:"player_api_key"})," might not have the right access level to the namespace."]}),"\n",(0,i.jsxs)(t.li,{children:["AWS Elemental MediaLive isn't configured correctly or isn't running.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Double check the URI provided in the ",(0,i.jsx)(t.em,{children:"Destination URL"})," field at the HLS output group level, and don't forget to add the query parameters ",(0,i.jsx)(t.code,{children:"&ttl_seconds=<ttl>&role=origin"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"cloudfront",children:"CloudFront"}),"\n",(0,i.jsxs)(t.p,{children:["If everything looks correct in MediaLive and Momento, verify the requests from CloudFront. The distribution rules already embed an authorization header, so you don't need to add ",(0,i.jsx)(t.code,{children:"player_api_key"})," in the URIs. Verify that CloudFront inserts them properly."]}),"\n",(0,i.jsxs)(t.p,{children:["The three commands below produce the same results as the requests sent from the player through CloudFront to Momento Media Storage. Remember that the media segments listed in each variant playlist constantly change, so replace ",(0,i.jsx)(t.code,{children:"<id>"})," in the final command with a valid value from the fetched playlist:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'$ curl "https://<cloudfront_id>.CloudFront.net/playlist.m3u8"\n\n$ curl "https://<cloudfront_id>.CloudFront.net/playlist_480p30.m3u8"\n\n$ curl -o test.ts "https://<cloudfront_id>.CloudFront.net/playlist_480p30_<id>.ts"\n'})}),"\n",(0,i.jsx)(t.p,{children:"If any of these steps fails, usual suspects are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.em,{children:"Authorization"})," header has not been correctly set to the ",(0,i.jsx)(t.code,{children:"player_api_key"})," when the CloudFront distribution was created."]}),"\n",(0,i.jsx)(t.li,{children:"A CloudFront behavior might be incorrectly set. Double check the file patterns and the associated caching policies."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"thats-it",children:"That's it!"}),"\n",(0,i.jsx)(t.p,{children:"Congratulations! You've successfully set up a live video streaming workflow using Momento Media Storage, AWS MediaLive, and Amazon CloudFront. This modern, scalable solution ensures low latency, reliability, and optimal performance for delivering live HLS streams."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Here's what you've learned:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Configured Momento Media Storage as a highly performant and cost-effective origin server."}),"\n",(0,i.jsx)(t.li,{children:"Set up AWS MediaLive to encode and push adaptive bitrate streams directly to Momento."}),"\n",(0,i.jsx)(t.li,{children:"Optimized content delivery using CloudFront to reduce latency, manage costs, and secure playback access."}),"\n",(0,i.jsx)(t.li,{children:"Tested and troubleshot the setup to ensure seamless streaming from origin to viewers."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Next Steps"})}),"\n",(0,i.jsx)(t.p,{children:"Now that your live streaming workflow is up and running, consider exploring additional features and optimizations:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Learn about ",(0,i.jsx)(t.a,{href:"/media-storage/entitlements/about",children:"adding entitlements"})," to your workflow."]}),"\n",(0,i.jsxs)(t.li,{children:["Discover ",(0,i.jsx)(t.a,{href:"/media-storage/streaming/capture/rtmp",children:"how to use ffmpeg and an RTMP stream"})," to stream to Momento."]}),"\n",(0,i.jsxs)(t.li,{children:["Add ",(0,i.jsx)(t.a,{href:"/media-storage/enhancements/live-reactions",children:"real-time reactions"})," to your streams."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"We can't wait to see what you build. Happy coding!"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},74155:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/cloudfront-behaviors-92f08c82ed020eb64f587494e7f9954b.png"},40021:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/cloudfront-default-566d7cf82846c4605a1f7cbede42a0d0.png"},72130:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/cloudfront-origin-a1e9cbd1c710e1b9f52d8249986c6444.png"},17118:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/cloudfront-playlist-051452112d56ec21ffd125f52f727c8e.png"},24386:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/cloudfront-segments-76df56e726fd2007b4fb5a7e747d1b81.png"},71718:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/console-api-key-2-a4a7f23149d0dfbb3526c1fd7694ef90.png"},35992:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/medialive-create-channel-6d6a4ed4f9b184149766df6b5a34cd70.png"},4693:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/medialive-output-8013ead6ef592f79ec11c8d9a97edf5d.png"},600:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/medialive-segments-865e610dfd66c11fbaa5dae87166cf45.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);