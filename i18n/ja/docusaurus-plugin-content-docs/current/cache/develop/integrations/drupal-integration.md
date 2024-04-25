---
sidebar_position: 12
sidebar_label: Drupal
title: Use Momento As Your Drupal Cache
description: Supercharge your Drupal cache by integrating with Momento 
pagination_next: null
---

# Momento CacheとDrupalのインテグレーション
# METHOD 1: (Recommended)
MomentoをDrupalのインストールと統合し、キャッシュ機能をシームレスに強化することができます。この統合は、Momentoのサーバーレス・キャッシング・ソリューションを活用し、Drupalのキャッシュ運用に合わせたキャッシュ・バックエンドを提供します。Momentoを採用することで、キャッシュサーバーを管理・維持する必要がなくなります。

この統合の利用を開始するには、以下の簡単な手順に従います：

1. 1.[こちら](https://www.drupal.org/project/momento)からMomentoモジュールをダウンロードする。
2. 2.[README](https://git.drupalcode.org/project/momento/-/blob/1.0.x/README.md?ref_type=heads)に記載されている手順に従って、Momentoモジュールを設定する。
3. 
# METHOD 2: 
[Drupal](https://www.drupal.org)は、PHPで構築されたフリーでオープンソースのコンテンツ管理フレームワークであり、利用可能な最も安定した安全で柔軟なコンテンツ管理ソリューションの一つと考えられています。デフォルトでは、Drupalはデータベース（通常はMySQL、MariaDB、またはPostgreSQL）を使用して、比較的高価な計算結果をキャッシュします。しかし、このアプローチには問題があります。データベースは相対的に言って遅いのです。サイトのスケーラビリティとパフォーマンスの必要性が高まるにつれて、専用のキャッシュソリューションが提供する利点も増えていきます。

DrupalはRedisやMemcachedのような一般的なキャッシュバックエンドとのインテグレーションを提供していますが、これらのソリューションの利点にはコストがかかります。どちらの技術を使うにしても、ワークロードに適したサーバインスタンスやクラスタのプロビジョニングと設定にかなりの時間と労力を費やす必要があります。サイトのキャッシュ需要は時間とともに変化するため、キャッシング・インフラのプロビジョニングが過少でも過剰でもないことを確認することは、コストとパフォーマンスを管理する上で非常に重要です。**Momento Cacheは、需要の変動に対応するために自動的にスケーリングし、**このすべてを処理します。

このガイドでは、Drupal CMSのキャッシュバックエンドとして機能するDrupal統合モジュール `momento_cache` をインストールして設定します。

詳しくは[Momento Drupalキャッシュインテグレーションリポジトリ](https://github.com/momentohq/drupal-cache)を参照してください。

## 前提条件

* Momento API トークンが必要です。[Momentoコンソール](https://console.gomomento.com) を使って生成できます。
* DrupalのキャッシュバックエンドとなるMomentoキャッシュは [Momento コンソール](https://console.gomomento.com) を使って作成できます。**モジュールを使用する前にキャッシュを作成する必要があります。キャッシュが存在しない場合、エラーは Drupal dblog と、もしあれば設定で設定したログファイルに書き込まれます。
* PHP 7.4以上。
* Drupal 9.4以上。
* [gRPC PHP extension](https://github.com/grpc/grpc/blob/master/src/php/README.md).
* [Composer](https://getcomposer.org/doc/00-intro.md) PHP依存関係マネージャ。

### DrupalとMomentoのレート制限

Momentoの無料枠は、アカウントの1秒あたりのトランザクション（TPS）とスループット（KiBps）を制限し、これらの制限を超えるリクエストはスロットルされます。Drupalのキャッシュバックエンドの使用量はデフォルトの制限を大幅に超えているため、インテグレーションを使用する前にsupport@momentohq.com、アカウントの制限を引き上げてください。レート制限のエラーメッセージについては、Drupalのdblogおよび/または設定（以下の手順）で設定したログファイルを確認することができます。

## Momento Cache Drupalモジュールのインストールと設定

`momento_cache`モジュールは通常のDrupalの方法でインストールします。Drupalのルートディレクトリから、composerを使ってモジュールを取り込みます： `composer require 'momentohq/drupal_cache:0.5.0'`. 次に、Drupalの管理インターフェイスを使うか、`drush en momento_cache`を使ってモジュールを有効にします。

次のステップは `settings.php` ファイルでモジュールを設定することです。グローバルキャッシュバックエンドとしてMomentoを使用する場合は、以下を追加します： 

`$settings['cache']['default'] = 'cache.backend.momento_cache';` を追加します。

特定のキャッシュビンに Momento を使用することもできます。例えば、Momentoを使って `render` ビンの内容をキャッシュするには、次のように追加します：

`$settings['cache']['bins']['render'] = 'cache.backend.momento_cache'`.

次に、Momentoとの認証に必要な設定を追加し、キャッシュ名を指定します：

```php
$settings['momento_cache']['api_token'] = '<YOUR_MOMENTO_TOKEN>';
$settings['momento_cache']['cache_name'] = '<YOUR_CACHE_NAME>';
```

<YOUR_MOMENTO_TOKEN> をコンソールで生成したトークンに置き換えてください。MOMENTO_API_TOKEN という環境変数を使用して、API keyを Momento キャッシュバックエンドに渡すこともできます。両方を指定した場合は、設定ファイルが優先されます。<YOUR_CACHE_NAME> は、先に作成した Momento キャッシュの名前に置き換えてください。MOMENTO_CACHE_NAME という環境変数を使ってこの値を渡すこともできます。両方を指定した場合は、設定ファイルが優先されます。

オプションで、モジュールのキャッシュ操作と各操作にかかる時間を追跡するためのログファイル（Drupalによって書き込み可能であることを確認してください）へのパスを指定することもできます：

`$settings['momento_cache']['logfile'] = '<YOUR_LOG_FILE_PATH>';`

**注意**このファイルは時間が経つとすぐに大きくなってしまうので、長期的に有効にする場合はlogrotateや同様のユーティリティを使用して、制御不能にならないようにしてください。ログファイルを指定しない場合でも、エラーはDrupalのdblogの `momento_cache` タイプのカテゴリーに記録されます。
