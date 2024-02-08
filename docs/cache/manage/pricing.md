---
sidebar_position: 3
title: Pricing and Free Tier
pagination_prev: null
description: Explore the simplicity of the pricing model and free tier information for Momento Cache and Momento Topics
---

# Pricing and free tier for Momento Cache and Momento Topics

Serverless is about simplicity in every dimension, including pricing! For on-demand pricing, Momento Cache and Topics costs $0.50/GB transferred, metered in 1 KB increments each time. That's it!

Your first 5 GBs transferred each month are free, and you don't need a credit card to get started.

Momento services have no hidden charges. You don’t have to pay for storage, replication, or instances. We literally only charge you for data transferred in/out of Momento Cache or Topics services. Everything else is included. Sign up with confidence and create something wonderful.

For more savings, metrics integration, and support options, we offer [tiered pricing](https://www.gomomento.com/pricing) in standard and enterprise tiers.

If you need further assistance (or just can’t believe it), drop a message in our [Discord](https://discord.gg/Z7FSXB89), and we’ll help get it sorted out. Take the Momento Cache challenge: see how much you can save!

### FAQ's

<details open>
  <summary>Is it really just $.50/GB transferred in and out of Momento services? What else do you charge for?</summary>

| Dimension                            | Momento charges           |
|--------------------------------------|---------------------------|
| Memory / Storage                     | $0/GB                     |
| Multi-AZ replication charges         | $0/GB                     |
| Single sign-on & teams (coming soon) | $0/user                   |

 </details>

<details>
<summary>Can I run a production app for free on Momento Cache and Topics?</summary>
Absolutely! Our free tier and low usage tiers are just billing. It is the same exact service and features whether you use 40GB/month or 40TB/month. You get all our availability features like multi-AZ replication, hot key protection, and automatic scaling to handle bursts. In the free tier, you even get all our security features for free, such as <a href="./../develop/authentication">fine-grained auth tokens</a>, end-to-end encryption, per-request authentication, and TLS.

We frequently find customers provisioning an entire cluster to handle low-request per second (RPS) workflows. If you want them to be HA, you need multiple nodes. If you believe in CICD, you likely have a similarly sized cluster in staging—and maybe even in dev. That adds up! Turn off those machines—and save the environment. Go Momento!
</details>

<details>
  <summary>Can I run a production app for $5.00/month on Momento services?</summary>
Absolutely! If you are transferring 15 GB of data in/out of Momento Cache each month, you get the first 5GB free each month and pay $0.50/GB for the remaining 10GB each month. Access enterprise-grade availability, security, and performance at any scale with Momento.


As crazy as it sounds, we are not the first to do this. You can experience this with other serverless services like Amazon DynamoDB, Amazon S3, and more—we are just bringing serverless to caching!
</details>

<details>
  <summary>Can I really store as much data in my cache(s) as I want?</summary>
Heck yeah! You are billed for the inbound and outbound data transfer, not the volume of data in your cache.
</details>

<details>
  <summary>Will it scale?</summary>
Hell yes! Momento services are the best way to future-proof your application story. You can add Momento Cache *extremely* quickly, and it just fades into the background whether you are doing 1 operation per second (ops/s) or 1 million ops/s. You just pay for what you use, so you get a scalable cache without spending a lot of cash.
</details>

[Give Momento Cache a Try!](./../getting-started.md)
