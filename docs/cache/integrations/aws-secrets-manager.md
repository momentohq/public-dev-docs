---
sidebar_position: 3
sidebar_label: AWS Secrets Manager
title: Momento + AWS Secrets Manager
description: Learn how to retrieve your Momento API Key in AWS Secrets Manager.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Retrieving a Momento API Key from AWS Secrets Manager

It's best practice to securely store your Momento API Key. If you are using AWS, you can securely store the auth token in [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html). With that, only code running with the correct IAM credentials will be able to fetch the API key and use it to access Momento Cache or Momento Topics.

:::info

Just as you should reuse your Momento `CacheClient` and `TopicClient` objects when possible, so should you with the Momento auth token from AWS Secrets Manager. Otherwise you risk adding cost, both in time and money, to each Momento API call for the round trip to AWS Secrets Manager. To keep cost low and avoid potential throttling by AWS Secrets Manager it's best to use client side caching of the credentials as detailed in this [AWS blog](https://aws.amazon.com/blogs/security/use-aws-secrets-manager-client-side-caching-libraries-to-improve-the-availability-and-latency-of-using-your-secrets/).

:::

## Entry in AWS Secrets Manager

When inserting the Momento API key into AWS Secrets Manager, it should be as plaintext with no JSON as in this screenshot. (Token blurred for security.)

![AWS Secrets Manager](/img/aws-secrets-manager.png)

## Example Code for AWS Secrets Manager

<SdkExampleTabs snippetId={'API_retrieveAuthTokenFromSecretsManager'} />

## FAQ

<details>
  <summary>Do I have to do this?</summary>

  No. You can store your Momento auth token in an environment variable or a file, but that is not best practice as it is not as secure as storing it in something like AWS Secrets Manager.
</details>
