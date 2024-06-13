---
sidebar_position: 13
sidebar_label: Terraform
title: Use Terraform to Create Momento Caches
description: Integrate Momento into your Terraform projects
pagination_next: null
---

# Manage Momento Caches with Terraform

[Terraform](https://www.terraform.io/) is an infrastructure as code tool for building, changing, and versioning infrastructure safely and efficiently.

The [Momento Terraform Provider](https://registry.terraform.io/providers/momentohq/momento/latest) allows you to create and delete Momento Caches in your Terraform project.

In this tutorial, we will walk through a basic Terraform project that creates and deletes a cache called "example".

## Prerequisites

- [Terraform](https://developer.hashicorp.com/terraform/install) is installed.
- You'll need a Momento API key, which you can create in the [Momento Console](https://console.gomomento.com)

## Example Terraform Project

Create a `main.tf` file with the following contents:

```hcl
terraform {
  required_providers {
    momento = {
      source = "momentohq/momento"
    }
  }
}

provider "momento" {}

resource "momento_cache" "example" {
  name = "example"
}
```

To provide your Momento API key, you can include it in the `provider` block like so:

```hcl
provider "momento" {
  api_key = "your-api-key
}
```

Or you can set an environment variable:

```bash
export MOMENTO_API_KEY="your-api-key"
```

Run the following commands to create and delete a Momento Cache named "example":

```bash
# Install the Momento provider from the Terraform Registry
terraform init

# Create the cache
terraform apply

# Delete the cache
terraform destroy
```
