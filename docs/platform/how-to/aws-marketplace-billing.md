---
sidebar_label: Set up AWS Marketplace billing
title: Set up AWS Marketplace billing for Momento
description: Subscribe to Momento in AWS Marketplace and request registration of the agreement with your Momento account.
---

<!-- Projects: cross-product/aws-marketplace-billing; cross-product/account-identification; cross-product/support-plan-activation -->

# Set up AWS Marketplace billing for Momento

Use this workflow to establish a billing relationship through AWS Marketplace and ask Momento to
associate the AWS agreement with your Momento account.

## Before you begin

You need:

- Access to the AWS account that will own the Marketplace agreement.
- A Momento account and its [Account ID](/platform/how-to/locate-account-id).

## Subscribe in AWS Marketplace

1. Sign in to the AWS account that will own the agreement.
2. Open the [Momento product listing](https://aws.amazon.com/marketplace/pp/prodview-tntv64zqgaqm2).
3. Select **View purchase options**.
4. For the one-month contract, enable automatic renewal, select the **Momento On-Demand**
   dimension, and set the number of units to **1**.
5. Do not select a support-plan dimension in AWS Marketplace. Paid Momento support is activated
   through the separate [support-plan workflow](/platform/how-to/activate-support-plan).
6. Select **Subscribe**.
7. Copy the AWS Marketplace Agreement ID, which begins with `agmt-`, from the confirmation page.
   You can retrieve it later from [AWS Marketplace subscriptions](https://us-east-1.console.aws.amazon.com/marketplace/subscriptions).

## Request registration with Momento

Email [Momento Support](mailto:support@momentohq.com) with the subject
**[PURCHASE] Marketplace Subscription**. Include:

- The AWS Marketplace Agreement ID that begins with `agmt-`.
- The target Momento Account ID that begins with `a-`.
- A request to register the Marketplace agreement with that Momento account.

If you also want Production or Enterprise support, you can include the information from
[Request activation of a paid support plan](/platform/how-to/activate-support-plan) in the same
email.

:::note

Submitting the email only requests registration. This workflow does not specify a processing time
or billing-effective date.

:::

## How Momento Units work

The required Momento On-Demand contract costs `$1` per month and includes one Momento Unit each
month. One Momento Unit costs `$1` and represents `$1` of Momento services consumed during the
month. Usage beyond the included unit appears as additional usage fees.

Product pricing determines the underlying service charge that is converted to Momento Units. See
[Momento pricing](https://www.gomomento.com/pricing) for current product prices and
[Support plans](/support/plans) for current support terms.
