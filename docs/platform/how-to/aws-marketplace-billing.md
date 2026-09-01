---
sidebar_label: Set up AWS Marketplace billing
title: Set up AWS Marketplace billing for Momento
description: Subscribe to Momento in AWS Marketplace and request registration of the agreement with your Momento account.
---

<!-- Projects: cross-product/aws-marketplace-billing; cross-product/account-identification; cross-product/support-plan-activation -->

# Set up AWS Marketplace billing for Momento

Use this workflow to set up billing for the Momento Platofrm through AWS Marketplace.

AWS Marketplace offers a streamlined procurement and billing process. Because AWS Marketplace
leverages your existing vendor relationship with AWS, it is the easiest way for your
organization to purchase from the Momento Platform.

## Getting started

### Before you begin

You need:

- Access to the AWS account that will own the Marketplace agreement.
- A Momento account and its [Account ID](/platform/how-to/locate-account-id).

### Subscribe in AWS Marketplace

:::warning

Do not purchase a support plan through AWS Marketplace! Support is activated through [a separate process](/platform/how-to/activate-support-plan).

:::

1. Sign in to the AWS account that will own the agreement.
2. Open the [Momento product listing](https://aws.amazon.com/marketplace/pp/prodview-tntv64zqgaqm2).
3. Select **View purchase options**.
4. Select the following options:
   - **Auto-renewal**: Automatically renew this contract when it expires
   - **Dimensions**: “Momento On-Demand” *(do not select a support plan!)*
   - **Number of units**: 1 
6. Select **Subscribe**.
7. Copy the AWS Marketplace Agreement ID, which begins with `agmt-`, from the confirmation page.
   You can retrieve it later from [AWS Marketplace subscriptions](https://us-east-1.console.aws.amazon.com/marketplace/subscriptions).

### Register the agreement with Momento

Email [Momento Support](mailto:support@momentohq.com) with the subject
**[PURCHASE] Marketplace Subscription**. Include:

- The AWS Marketplace Agreement ID that begins with `agmt-`.
- The target Momento Account ID that begins with `a-`.
- A request to register the Marketplace agreement with that Momento account.

If you also want the [Production or Enterprise support plans](/support/plans), you can include the information from
[Request activation of a paid support plan](/platform/how-to/activate-support-plan) in the same
email.

:::note

Submitting the email only requests registration. Allow one or more business days to activate
your subscription.

:::

## Understanding the AWS Marketplace Product Listing

The Momento platform's product listing contains two distinct categories of services: Support Plan and Usage.

### 1-Month Contract

Due to AWS Marketplace billing constraints, you must select a 1-Month contract type in order to establish a billing relationship with Momento. The "Momento On-Demand" plan costs $1 per month and includes 1 unit of usage each month.

Do not purchase a support plan through Marketplace. Just like usage, support plans are billed through marketplace as normalized Momento Units described below.

### Additional Usage Fees

Momento's AWS Marketplace pricing includes an additional usage fee that reflects your monthly consumption of resources. This billing dimension is a mandatory component of the Momento product listing on the AWS Marketplace.

If the number of units you consume in a month does not exceed the amount included with your monthly contract, then you will be charged $0 of additional usage fees.

## Understanding Momento Units

In order to facilitate billing through the AWS Marketplace, Momento's various pricing plans are normalized into "Momento Units". A Momento Unit costs $1, and reflects $1 of resources consumed during the month.

Momento Units most commonly represent consumption of on-demand resources through our standard pay-as-you-go model. Consumption of data transfer or provisioned capacity is metered at the appropriate rate and then converted into Momento units. For billing purposes, Momento units are rounded up to the nearest whole integer.

For example, 10 GiB of Flex Standard capacity used continuously for 30 days costs
`10 GiB × 720 hours × $0.018/GiB-hour = $129.60`, which rounds to 130 Momento Units.

Other types of services, including provisioned capacity or various add-on features, can also be normalized to Momento Units following the same conversion process. For example, the deployment of an enterprise network connection that costs $100 per month would be normalized to 100 Momento Units.

Please refer to Momento's [standard pricing](https://www.gomomento.com/pricing) for the costs associated with various services or features. You can also [contact us](https://www.gomomento.com/contact-us/) for assistance.
