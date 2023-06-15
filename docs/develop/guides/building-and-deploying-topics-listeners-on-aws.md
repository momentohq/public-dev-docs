---
sidebar_position: 6
sidebar_label: Building and deploying Topics listeners on AWS
title: Building and deploying Topics listeners on AWS
description: Learn how to build and deploy Topics listeners on AWS
pagination_next: null
---

# Building and Deploying Topics listeners on AWS

## Organizing Topics listeners

When developing Topics listeners, the two most common approaches to follow are to deploy all Topic listeners within a single monolithic application or to split off the Topic listeners into microservices. There’s no one size fits all answer, the decision should be made given the details of your workload and the application’s complexity. Start by building a single subscriber application that listens to multiple topics. Once the traffic and business logic complexity of your application grows, re-evaluate your approach and consider splitting up the Topics listeners into microservices.

## Deploying Topics listeners on AWS

Momento Topics listeners require stateful connections to a Momento Cache to pick up new messages in a topic. The absence of stateful connections in AWS Lambda makes it unsuitable for listening to Topics, necessitating deployment in a container. As you might’ve heard, there are quite a few ways to deploy container-based applications on AWS. Let’s talk through a few common options.
AWS App Runner
Amazon ECS on AWS Fargate

AWS App Runner is an AWS service that provides a fast, simple, and cost-effective way to deploy from source code or a container image directly to a scalable and secure Momento Topics listener application on AWS. AWS App Runner is a great one to use when building new applications, especially if you’re prototyping, if you don’t need all the custom options of other container services, or if you’re new to container-based applications.

For larger workloads, we recommend deploying your application with Amazon ECS on AWS Fargate. Fargate abstracts away the overhead of scaling, patching, securing, and managing servers, allowing you to focus on developing your application. Fargate is a better fit for heavier workloads compared to AWS App Runner if you’re expecting steady levels of high traffic.

If you’re not sure about which container service to choose for your listener application, please get in touch! We’d be happy to review your application requirements with you and figure out the best fit.

Considerations for deploying your Topics listener on AWS

- Credential management
    - Consider how you’ll store your Momento auth token for retrieval by your listener application. 
    - We recommend using AWS Secrets Manager to store and retrieve your token.
    - You can cache your secret in memory to reduce Secrets Manager cost.
    - See [here](./working-with-momento-auth-tokens.md) for more on Momento auth tokens.
- Runtime selection (AWS App Runner only)
    - Ensure the runtime is supported on AWS App Runner and the Momento SDK.
- Infrastructure as code
    - You can deploy Momento caches in the IaC frameworks we support today.
    - CDK
    - SAM