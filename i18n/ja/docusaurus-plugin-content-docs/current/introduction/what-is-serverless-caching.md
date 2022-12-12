---
sidebar_position: 1
sidebar_label: What is Serverless Caching?
title: What is Serverless Caching?
description: Learn what serverless is in terms of caching and what Momento Serverless Cache can be your simple, fast cache for your apps.
---

# What is Serverless Caching?

Serverless is one of the hottest trends in software development, and we're seeing an explosion in "serverless-friendly" services.

We believe Momento Serverless Cache is the most serverless-friendly cache available. But what does serverless mean, and why is Momento Serverless Cache a serverless-friendly cache?

We'll look at two definitions of serverless plus a group of builders that is interested in serverless-like technologies:

- [Serverless as an operational model](#serverless-as-an-operational-model)

- [Serverless as compatibility with related architectures](#serverless-as-compatibility-with-related-architectures)

- [Serverless as independent project platform](#serverless-as-independent-project-platform)

Note that this page is focused on the conceptual reasons why Momento fits so well in serverless applications. If you want more practical advice on integrating Momento Serverless Cache into your serverless application, check out our page on [using Momento Serverless Cache with AWS Lambda](./../develop/guides/caching-with-aws-lambda).

## Serverless as an operational model

The first way people use the term "serverless" is to describe the operational mechanics of a particular service. This is my preferred definition of serverless and the one closest to its original, unadulterated definition. Let's call this the 'traditional' definition of serverless.

Within the traditional definition of serverless, serverless services generally have three attributes.

First, _a serverless service is managed_. Rather than running a service yourself, some service provider has taken over the core management responsibilities from you. If you're running a database, you won't be installing Postgres on a bare metal machine in a database. If you need a cache, you're not standing up Memcached on an EC2 instance. Rather, you're consuming the service directly -- a database, a cache, a message queue -- from a provider that is installing, configuring, and maintaining the underlying software.

Second, _a serverless service is abstracted from you_. In general, you should have fewer knobs to turn or choices to make in provisioning your service. This is a point emphasized by Ben Kehoe in his [post on the Serverless Spectrum](https://ben11kehoe.medium.com/the-serverless-spectrum-147b02cb2292#fbae). Practically, this could mean you provision for specific functional capacity (such as DynamoDB's read and write capacity throughput) rather than the underlying resources (such as a database instance size with various configurations of CPU, RAM, and network I/O). Or it could mean you don't provision for anything at all, such as with an SQS queue or an S3 bucket. In those cases, the provider manages scaling up and down to meet your needs.

Finally, _a serverless service has a pay-for-value pricing scheme_. Because the service is more abstracted from underlying resources and more toward capacity, you can have a closer link between the price you pay and the value you receive. This can mean a pay-per-use billing system, such as with AWS Lambda, Amazon API Gateway, or Amazon SQS. It can also mean a system that allows for flexible scale up and scale down, such as Amazon DynamoDB or Amazon Kinesis. With a serverless service, you don't need to overprovision to account for times of peak load, leading to large periods of your instances sitting at low resource usage.

As Ben Kehoe notes in the article linked above, "serverlessness" is a spectrum, and you want to be using services that tend to have more of the qualities above. Additionally, some services have flexibility in how you use them, but you should try to use them in a more serverless way.

### How Momento Serverless Cache fits the traditional definition of serverless

Momento Serverless Cache fits perfectly under this traditional definition of serverless.

First, Momento Serverless Cache is a managed service. You won't be installing software, managing failovers, or upgrading versions. This is handled for you behind the scenes so you can focus on building and maintaining the core parts of your application.

Second, Momento Serverless Cache abstracts the decisions around cache management from you. You don't have to specify the type and number of instances in your cache, nor do you have to think about the maximum memory size for your cache. Momento is purpose-built for the cloud and takes advantage of the elasticity and scalability of modern cloud infrastructure. You can store as much data as you need in your cache, and Momento will handle it seamlessly.

Finally, Momento Serverless Cache has a pay-for-value pricing model. As mentioned above, you aren't selecting a specific cache and cluster size in advance, regardless of whether you use it. Momento charges based on the amount of data stored and the requests made against your cache. With this, you are in control of your pricing, and changes you make to your application have a direct impact on your bill.

Under this first definition of serverless, Memento Serverless Cache is the cache that fits best in the serverless ecosystem.

## Serverless as compatibility with related architectures

In the first definition of serverless above, serverless is defined as a set of operational mechanics when using a particular service. In this second definition, we'll look at a definition of serverless that I call "serverless-friendly" due to its general compatibility with serverless architectures.

AWS Lambda was introduced at AWS re:Invent in 2014 and essentially kicked off the serverless revolution. Here was a brand-new compute paradigm -- event-driven, function-based, hyper-ephemeral, and a pay-per-use billing model.

The ecosystem has evolved greatly since the 2014 announcement, but Lambda remains the fulcrum of most serverless architectures. Because of Lambda's centrality and unique model, many serverless developers look for services that work well with Lambda and other core parts of a serverless application.

First, _these serverless developers prefer services that are accessed via HTTPS over the internet_. This is in contrast to services, like traditional databases and caches, that utilize a persistent TCP connection within a private network. Part of this is due to some initial performance downsides of using AWS Lambda within a VPC. Though that performance downside has been fixed, there is still an aversion to the complexity of building and managing a private network for your services. For this reason, HTTPS-based services like DynamoDB and SQS are preferred over services like MySQL and RabbitMQ.

Second, _these developers want services that can scale quickly for rapid bursts in traffic_. Lambda is designed for rapid scale up without pre-provisioning. Whether it's processing a large batch of new queue messages or handling a flood of traffic to your website, Lambda can respond as needed. Serverless developers look for infrastructure components that fit those scaling capabilities. These are generally cloud-based, multi-tenant offerings where an increase in load can be amortized across a large number of customers, rather than instance-based services with connection limits or less elastic scalability.

Finally, _serverless developers prefer services that can be provisioned quickly and dynamically without a lengthy spin-up time_. This includes not only the core compute of AWS Lambda but also databases like DynamoDB, streams like Kinesis, or object stores like S3. Because serverless applications prefer managed, elastic, pay-for-value services, serverless developers can often create entire isolated environments on demand, whether for reproducing something in a clean environment or for automated testing in our release pipeline. To make these isolated environments feasible, we want services that can be provisioned in seconds rather than minutes.

### How Momento Serverless Cache fits with standard serverless applications

Momento is a great addition to serverless applications that use AWS Lambda and other popular serverless services.

First, Momento Serverless Cache is [available via HTTPS](./#networking). This simplifies the configuration required to add Momento Serverless Cache to your serverless application. You simply add the authentication token to your application and start using your cache. With this HTTPS-based connection pattern, you can still reuse an existing connection within your Lambda function to avoid the overhead of establishing a new connection on each request. Additionally, Memento has a VPC peering option available if you prefer using a VPC for your application.

Second, Momento can scale your cache quickly and achieve a high number of requests per second without pre-provisioning. There are no connection limits to your Momento cache, so a burst of traffic won't lead to availability issues in your application.

Finally, Momento Serverless Cache is a dynamic service that can add and remove caches instantly. When you call the [Momento control plane](./#control-plane-simple-efficient-cache-management) to create a new cache, the cache is provisioned instantly and is available by the time your client receives a response. This makes it easy to integrate Momento in branch-specific environments in your CI/CD system or allow each developer to have a unique copy of their application.

No other caches fit this well with serverless applications. While AWS provides Amazon ElastiCache as a caching option, it must be in a VPC. This can greatly increase the cost and complexity of your serverless application. Further, you must declare your instance size and cluster configuration upfront, regardless of your usage. Finally, provisioning new caches takes minutes, not seconds, as new instances must be launched and configured before you can use them.

## Serverless as independent project platform

The final category of serverlessness is less a specific concept and more a group of people or style of application.

In recent years, we've seen a huge rise in small SaaS applications and helpful tools built by individual developers or small teams. Part of this rise is due to the growth in the Indie Hackers movement, along with the rapid growth in people with programming skills worldwide. Yet another key factor is the ease with which one can build and scale an application without a large upfront investment.

The advent of the cloud, which introduced datacenter resources as an ongoing operational expense rather than a large upfront capital expense, reduced the barrier to building applications. But the rise of serverless tools and self-service infrastructure exploded this pattern and made global, resilient infrastructure available to the masses.

For this group, there are two key factors that matter in choosing services for their applications.

First, _self-service sign up with credit card billing is a must_. For developers working on their idea as a side project or in their spare time, they don't have time to go through sales calls and time-consuming procurement processes. They want to sign up and immediately try something to see if it fits their needs.

Second, _these developers are looking for a generous free tier as they start using a tool_. Because these are side projects or early attempts at a paid product, developers generally don't want to spend a lot for something with low or inconsistent usage. Between the AWS Free Tier and the similar free tiers for many developer services, you can get quite far without paying a cent for your side project.

### How Momento Serverless Cache fits with indie projects

If you're an indie hacker or an early-stage startup that's looking to save money, Momento is a great fit for you as well.

First, Momento Serverless Cache has a painless self-service sign up. You can get a Momento authentication token and [start writing to your cache in less than five minutes](./../getting-started). You don't need to talk to a salesperson or sign an upfront contract. In fact, you don't even need to enter a credit card to enjoy the free tier.

Second, Momento Serverless Cache has a generous free tier. You get 50 GB free each month (see [pricing](./../manage/pricing) for details). Our goal is to allow a wide variety of applications to run on Momento without ever paying us a cent. We want to provide a top-tier, robust service for applications that need it while also supporting a broad community of applications to use Momento as they grow.

## Conclusion

In this page, you learned how Momento Serverless Cache fits with every conception of serverless. Momento has been designed specifically for modern architectures, with a serverless operational model, an integration model that works well with Lambda-powered applications, and a sign up and billing model that works for all types of developers and teams.

If you're ready to get started with Momento Serverless Cache, be sure to check out the following materials:

- Quickstart guide to [start caching with Momento Serverless Cache](./../getting-started) in less than 5 minutes;

- A practical guide for [integrating Momento Serverless Cache with your AWS Lambda functions](./../develop/guides/caching-with-aws-lambda);

- An in-depth tutorial about [adding caching to your serverless application](./../develop/tutorials/serverless-cache-walkthrough/adding-a-cache-to-serverless).
