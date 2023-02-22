---
sidebar_position: 3
title: Pricing and free tier
pagination_prev: null
description: Explore the simplicity of the pricing model and free tier information for Momento Serverless Cache
---

# Pricing and free tier with Momento Serverless Cache
Serverless is about simplicity in every dimension, including pricing! Momento Serverless Cache costs $0.15/GB transferred, metered in 1 KB increments each time. That's it!

Your first 50 GBs transferred each month are free and you don't need a credit card to get started.

Momento Serverless Cache has no hidden charges. You don’t have to pay for storage, replication, or instances. We literally only charge you for data transferred in/out of Momento Serverless Cache service. Everything else is included. Sign up with confidence and create something wonderful.

 If you need further assistance (or just can’t believe it), drop a message in our [Discord](https://discord.gg/Z7FSXB89), and we’ll help get it sorted out. Take the Momento Serverless Cache challenge: see how much you can save!

### FAQ's
<details open>
  <summary>Is it really just $.15/GB transferred in and out of Momento Serverless Cache? What else do you charge for?</summary>

| Dimension                            | Momento charges           |
|--------------------------------------|---------------------------|
| Memory / Storage                     | $0/GB                     |
| Multi-AZ replication charges         | $0/GB                     |
| Single sign-on & teams (coming soon) | $0/user                   |
| Connections                          | $0.15/million connections |
  
 </details>
 
<details>
<summary>Can I see a few pricing examples of using Momento Serverless Cache to help estimate my costs?</summary>
Here are a few sample pricing exercises to help you estimate.

##### You process a total of 1 million read/write requests per day with average object sizes of 4KB. Momento Serverless Cache would cost you:

`1 million requests / day * 30.5 days/month * 4KB/request * $.15/GB` = **$18.3 /month**

_See the calculation in [Wolfram Alpha](https://www.wolframalpha.com/input?i=1+million%2F+day+*+4KB+*+%24.15%2FGB+to+%24%2Fmonth) for more detail._

##### You process an average load of 5K RPS with 1KB objects. Momento Serverless Cache would cost you:

`5K requests/second * 86400 seconds/day * 30.5 days/month * 1KB/request * $.15/GB` = **$1976/month**

##### You process an average load of 3K RPS with 800 bytes objects. Momento Serverless Cache would cost you:

`3K requests/second * 86400 seconds/day * 30.5 days/month * 1KB/request * $.15/GB` = **$1185.84/month**

_Note: Objects are metered in 1 KB increments. So a 800 byte object will be metered as 1 KB item_

_See the calculation in [Wolfram Alpha](https://www.wolframalpha.com/input?i=5000%2Fsecond+*+1KB++*+%24.15%2FGB+to+%24%2Fmonth) for more detail._

##### You have a 20 RPS Lambda that caches 1KB objects. Momento Serverless Cache would cost you:

`20 requests/second * 86400 seconds/day * 30.5 days/month * 1KB` = **$.38/month**

_Note: Without the free tier, this workflow would cost $7.88/month_

_See the calculation in [Wolfram Alpha](https://www.wolframalpha.com/input?i=%28%2820+requests%2Fsecond+*+1KB%2Frequest%29+-+50GB+%2Fmonth%29+*+%24.15%2FGB+to+%24%2Fmonth) for more detail._
</details>

<details>
<summary>Can I run a production app for free on Momento Serverless Cache?</summary>
Absolutely! Our free tier and low usage tiers are as fast, as available, and as secure as our at scale service. You get all our availability features like multi-AZ replication, hot key protection, and automatic scaling to handle bursts. You even get all our security features for free (end-to-end encryption, per request authentication, TLS).

We frequently find customers provisioning an entire cluster to handle low-RPS workflows. If you want them to be HA, you need multiple nodes. If you believe in CICD, you likely have a similarly sized cluster in staging—and maybe even in dev. That adds up! Turn off those machines—and save the environment. Go Momento!
</details>

<details>
  <summary>Can I run a production app for $1.50/month on Momento Serverless Cache?</summary>
Absolutely! If you are transferring 60 GB of data in/out of Momento Serverless Cache each month, you get the first 50GB free each month and pay $0.15/GB for the remaining 10GB each month. Access enterprise-grade availability, security, and performance at any scale with Momento.


As crazy as it sounds, we are not the first to do this. You can experience this with other serverless services like Amazon DynamoDB, Amazon S3, and more—we are just bringing serverless to caching!
</details>

<details>
  <summary>Can I really store as much data in my cache(s) as I want?</summary>
Heck yeah! You are billed for the inbound and outbound transfer of data, not for the volume of data in your cache.
</details>

<details>
  <summary>Will it scale?</summary>
Hell yes! Momento Serverless Cache is the best way to future-proof your caching story. You can add Momento Serverless Cache *extremely* quickly—and it just fades into the background whether you are doing 1 RPS or 1 million RPS. You just pay for what you use—so you get a scalable cache without spending a lot of cash.
</details>
  
<details>
  <summary>Will it blend?</summary>
We do not recommend putting Momento Serverless Cache in a blender as it may void the warranty of your blender, but Momento Serverless Cache  is robust with enterprise grade security and availability. Momento Serverless Cache does blend seamlessly with your current cloud setup, whether you're on AWS, GCP, Azure, or multi-cloud!
</details>

[Give Momento Serverless Cache a Try!](./../getting-started)
