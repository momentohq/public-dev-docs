---
sidebar_position: 1
sidebar_class_name: sidebar-item-security
sidebar_label: PrivateLink Connectivity
title: PrivateLink connectivity with Momento services 
description: Learn securing the connection of your Momento caches and topics with PrivateLink.
pagination_next: null
pagination_prev: null
---

# AWS PrivateLink connectivity with Momento Cache and Momento Topics
Momento presents a public endpoint that is secure by default when customers connect to Momento Cache and Momento Topics. However, a minority of customers require an additional level of security for their traffic to not traverse a public network. For these customers, Momento offers [AWS PrivateLink](https://aws.amazon.com/privatelink/) connectivity to customer’s hosted in Amazon Web Services (AWS) and have dedicated Momento cells.

PrivateLink connectivity provides you with the ability to create an [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html) endpoint to Momento’s services. Once setup, all communications to and from Momento route over a private IP address space. There are two key benefits to this connectivity pattern for customers in need of this security feature:
* You don’t pay for NAT gateway instances to talk to Momento services
* Increased security posture as no traffic goes over the public internet

If this feature is something you require, please contact [Momento Support](mailto:support@momentohq.com).