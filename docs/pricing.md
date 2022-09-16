---
sidebar_position: 3
sidebar_class_name: sidebar-item-pricing
---

# Pricing
Serverless is about simplicity in every dimension, including pricing! Momento costs $0.15/GB transferred. That's it!

Your first 50 GB are free each month—and you don't even need a credit card to get started.

Momento has no hidden charges. You don’t have to pay for storage, replication, or instances. We literally only charge you for data transferred in/out of Momento. Everything else is included.

We’ve included some sample pricing exercises below to help you estimate. If you need further assistance (or just can’t believe it), drop a message in our [Discord](https://discord.gg/Z7FSXB89), and we’ll get it sorted out. Take the Momento challenge: see how much you can save!

### Examples:

##### You process a total of 1 million read/write requests per day with average object sizes of 4KB. Momento would cost you:

`1 million requests / day * 30.5 days/month * 4KB/request * $.15/GB` = **$18.3 /month**

_See the calculation in [Wolfram Alpha](https://www.wolframalpha.com/input?i=1+million%2F+day+*+4KB+*+%24.15%2FGB+to+%24%2Fmonth) for more detail._

##### You process an average load of 5K RPS with 1KB objects. Momento would cost you:

`5K requests/second * 86400 seconds/day * 30.5 days/month * 1KB/request` = **$1976/month**

_See the calculation in [Wolfram Alpha](https://www.wolframalpha.com/input?i=5000%2Fsecond+*+1KB++*+%24.15%2FGB+to+%24%2Fmonth) for more detail._

##### You have a 20 RPS Lambda that caches 1KB objects. Momento would cost you:

`20 requests/second * 86400 seconds/day * 30.5 days/month * 1KB` = **$.38/month**

_Note: Without the free tier, this workflow would cost $7.88/month_

_See the calculation in [Wolfram Alpha](https://www.wolframalpha.com/input?i=%28%2820+requests%2Fsecond+*+1KB%2Frequest%29+-+50GB+%2Fmonth%29+*+%24.15%2FGB+to+%24%2Fmonth) for more detail._

### FAQ's 
**Is it really just $.15/GB transferred in and out of Momento? What else do you charge for …**

| Dimension                            | Momento Charges         |
|--------------------------------------|-------------------------|
| Memory / Storage                     | $0/GB                   |
| Multi-AZ Replication Charges         | $0/GB                   |
| Single Sign-On & Teams (coming soon) | $0/user                 |
| Connections                          | $0/thousand connections |

**Can I run a production app for free on Momento?**

Absolutely! Our free tier and low usage tiers are as fast, as available, and as secure as our at scale service. You get all our availability features like multi-AZ replication, hot key protection, and automatic scaling to handle bursts. You even get all our security features for free (end-to-end encryption, per request authentication, TLS).

We frequently find customers provisioning an entire cluster to handle low-RPS workflows. If you want them to be HA, you need multiple nodes. If you believe in CICD, you likely have a similarly sized cluster in staging—and maybe even in dev. That adds up! Turn off those machines—and save the environment. Go Momento!

**Can I run a production app for $1.50/month on Momento?**

Absolutely! If you are transferring 60 GB of data in/out of Momento each month, you get the first 50GB free each month and pay $0.15/GB for the remaining 10GB each month. Access enterprise-grade availability, security, and performance at any scale with Momento.

As crazy as it sounds, we are not the first to do this. You can experience this with other serverless services like DynamoDB, S3, and more—we are just bringing serverless to caching!

**Will it scale?**

Hell yes! Momento is the best way to future-proof your caching story. You can add Momento *extremely* quickly—and it just fades into the background whether you are doing 1 RPS or 1 million RPS. You just pay for what you use—so you get a scalable cache without spending a lot of cash.

**Will it blend?**

We do not recommend putting Momento in a blender as it may void the warranty of your blender, but Momento is robust with enterprise grade security and availability. Momento does blend seamlessly with your current cloud setup, whether you're on AWS, GCP, Azure, or multi-cloud!

_[Give Momento a try!](https://docs.momentohq.com/docs/getting-started)_
