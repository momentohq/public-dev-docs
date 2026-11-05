---
sidebar_label: Configure IAM Role for Momento federation
title: Configure IAM Role for Momento federation
description: Create an IAM role with the permissions and trust policy that Momento needs to deliver metrics into your AWS account.
---

# Configure IAM Role for Momento federation

Momento delivers metrics into your AWS account by assuming an IAM role that you create. Follow this
workflow to give that role permission to publish metrics to Amazon CloudWatch, and a secure trust
policy that allows Momento to assume it on behalf of your Momento account.

## Before you begin

You need:

- An AWS account.
- A Momento account.
- An active [support plan](/support/plans). To request one, see
  [Request activation of a Momento support plan](/platform/how-to/activate-support-plan).
- Access to the [Momento Console](https://console.gomomento.com/), so that you can
  [locate your Momento Account ID](/platform/how-to/locate-account-id).

Make sure that your AWS account can create and manage IAM roles.

## Creating the IAM role

Follow the usual directions for creating an IAM role in your AWS account. The AWS documentation
contains what you need for that process. When you reach the permissions and trust policy, use the
policies below.

### Permissions

Attach the following permissions policy to the role. It allows Momento to publish metrics only to
CloudWatch namespaces that begin with `Momento/`.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Condition": {
        "StringLike": {
          "cloudwatch:namespace": "Momento/*"
        }
      },
      "Action": [
        "cloudwatch:PutMetricData"
      ],
      "Resource": "*",
      "Effect": "Allow"
    }
  ]
}
```

### Trust policy

[Locate your Momento Account ID](/platform/how-to/locate-account-id), then use it in place of
`a-123456` in the following trust policy.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::168253909317:role/central-assume-role-prod"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringLike": {
          "sts:ExternalId": "a-123456/*"
        }
      }
    }
  ]
}
```
