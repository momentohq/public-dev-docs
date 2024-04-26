---
sidebar_position: 12
sidebar_label: Drupal
title: Use Momento As Your Drupal Cache
description: Supercharge your Drupal cache by integrating with Momento 
pagination_next: null
---

# Momento CacheとDrupalのインテグレーション

[Drupal](https://www.drupal.org)は、PHPで構築されたフリーでオープンソースのコンテンツ管理フレームワークであり、利用可能な最も安定した安全で柔軟なコンテンツ管理ソリューションの一つと考えられています。デフォルトでは、Drupalはデータベース（通常はMySQL、MariaDB、またはPostgreSQL）を使用して、比較的高価な計算結果をキャッシュします。しかし、このアプローチには問題があります。データベースは相対的に言って遅いのです。サイトのスケーラビリティとパフォーマンスの必要性が高まるにつれて、専用のキャッシュソリューションが提供する利点も増えていきます。

DrupalはRedisやMemcachedのような一般的なキャッシュバックエンドとのインテグレーションを提供していますが、これらのソリューションの利点にはコストがかかります。どちらの技術を使うにしても、ワークロードに適したサーバインスタンスやクラスタのプロビジョニングと設定にかなりの時間と労力を費やす必要があります。サイトのキャッシュ需要は時間とともに変化するため、キャッシング・インフラのプロビジョニングが過少でも過剰でもないことを確認することは、コストとパフォーマンスを管理する上で非常に重要です。**Momento Cacheは、需要の変動に対応するために自動的にスケーリングし、**このすべてを処理します。

MomentoをDrupalのインストールと統合し、キャッシュ機能をシームレスに強化することができます。この統合は、Momentoのサーバーレス・キャッシング・ソリューションを活用し、Drupalのキャッシュ運用に合わせたキャッシュ・バックエンドを提供します。Momentoを採用することで、キャッシュサーバーを管理・維持する必要がなくなります。

**注意**このファイルは時間が経つとすぐに大きくなってしまうので、長期的に有効にする場合はlogrotateや同様のユーティリティを使用して、制御不能にならないようにしてください。ログファイルを指定しない場合でも、エラーはDrupalのdblogの `momento_cache` タイプのカテゴリーに記録されます。

この統合を利用し始めるには、以下の簡単な手順に従ってください：
1. Momentoモジュールを[こちら](https://www.drupal.org/project/momento)からダウンロード/インストールする。
2. [README](https://git.drupalcode.org/project/momento/-/blob/1.0.x/README.md?ref_type=heads)の指示に従って、Momentoモジュールを設定します。
