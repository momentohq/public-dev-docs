---
sidebar_position: 13
sidebar_label: Terraform
title: Use Terraform to Create Momento Caches
description: Integrate Momento into your Terraform projects
pagination_next: null
---

# Manage Momento Caches with Terraform

[Terraform](https://www.terraform.io/)は、インフラを安全かつ効率的に構築、変更、バージョン管理するためのInfrastructure-as-Codeツールです。

[Momento Terraform Provider](https://registry.terraform.io/providers/momentohq/momento/latest)を使うと、TerraformプロジェクトでMomentoキャッシュを作成・削除することができます。

このチュートリアルでは、"example "というキャッシュを作成・削除する基本的なTerraformプロジェクトを説明します。

## 前提条件

- [Terraform](https://developer.hashicorp.com/terraform/install)がインストールされている
- [Momento Console](https://console.gomomento.com)で作成できるMomento APIキー

## Example Terraform Project

以下の内容で`main.tf`ファイルを作成します：

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

MomentoのAPIキーを提供するには、`provider`ブロックに次のように記述します：

```hcl
provider "momento" {
  api_key = "your-api-key"
}
```

あるいは、環境変数を設定することもできます：

```bash
export MOMENTO_API_KEY="your-api-key"
```

以下のコマンドを実行して、"example "という名前のMomento Cacheを作成し、削除します：

```bash
# TerraformレジストリからMomentoプロバイダをインストール

terraform init

# キャッシュの作成
terraform apply

# キャッシュの削除
terraform destroy
```
