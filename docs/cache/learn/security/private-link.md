---
sidebar_position: 1
sidebar_label: PrivateLink Connectivity
title: PrivateLink connectivity with Momento services
description: Learn how to add AWS PrivateLink to Momento Cache and Topics services.
pagination_next: null
pagination_prev: null
---

# AWS PrivateLink connectivity with Momento Cache and Momento Topics

Momento presents a public endpoint that is secure by default when customers connect to Momento Cache and Momento Topics. This is great for apps not deployed into a private VPC. However, some customers may need to access Momento from a VPC endpoint to meet compliance requirements or cut down on bandwidth costs for network traffic. For these customers, Momento offers [AWS PrivateLink](https://aws.amazon.com/privatelink/) connectivity to customers hosted in Amazon Web Services (AWS).

![PrivateLink Diagram](/img/vpc-diagram.jpeg)

PrivateLink connectivity provides you with the ability to create an [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html) endpoint to Momento’s services. Once setup, all communications to and from Momento route over a private IP address space. There are two key benefits to this connectivity pattern for customers in need of this security feature:
* You don’t pay for NAT gateway instances to talk to Momento services
* Increased security posture as no traffic goes over the public internet

If this feature is something you require, please contact [Momento support](mailto:support@momentohq.com?subject=PrivateLink).
