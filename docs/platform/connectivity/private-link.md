---
title: AWS PrivateLink Connectivity
sidebar_position: 1
sidebar_label: AWS PrivateLink
description: Learn how to securely connect to the Momento platform within your Amazon VPC using AWS PrivateLink for optimized security and cost efficiency.
hide_title: true
keywords:
  - Momento Cache
  - Momento Topics
  - Momento platform
  - AWS PrivateLink
  - VPC endpoint
  - secure connection
  - compliance
  - private IP
  - cloud network cost optimization
  - private access
  - Amazon VPC
  - secure infrastructure
  - reduce NAT gateway costs
  - network traffic savings
  - enterprise security
  - high-security cloud architecture
---

# Connect securely with AWS PrivateLink and Momento's private access options

Momento prioritizes security and flexibility to meet your infrastructure needs, whether you're scaling for growth or optimizing for compliance. For applications not deployed in a private VPC, Momento offers a [public endpoint](/platform/regions) that's secure by default. But for customers needing access *from within a VPC*, we provide an option to connect securely through [AWS PrivateLink](https://aws.amazon.com/privatelink/).

This option enables you to establish a direct, private connection from your Amazon VPC to Momento's services, keeping your data secure without ever needing to route traffic over the public internet.

![PrivateLink Connectivity Diagram](/img/vpc-diagram.jpeg)

### Why choose AWS PrivateLink with Momento?

* **Optimized security** - Your data stays within a private IP space, granting a high-security posture by eliminating public internet exposure.
* **Cost efficiency** - Skip the NAT gateway costs by routing directly through PrivateLink to Momento, reducing your cloud expenses on network traffic.

For detailed setup instructions, patterns, and best practices, visit our [connectivity patterns repository](https://github.com/momentohq/connectivity-patterns) to start integrating PrivateLink with Momento.
