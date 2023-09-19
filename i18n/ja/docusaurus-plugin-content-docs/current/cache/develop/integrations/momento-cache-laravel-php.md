---
sidebar_position: 2
sidebar_class_name: sidebar-item-laravel
sidebar_label: Laravel
title: Laravel + Momento Cacheをセットアップする
description: この簡単な開発者向けチートシートを使ってLaravelとMomento Cacheを走らせてみよう。
---

# Laravel + Momento Cacheをセットアップする

Laravelは、PHPの開発フレームワークとして非常に人気があります。Laravelは、エレガントな構造、豊富な機能、迅速かつ効率的に仕事を成し遂げるための優れたエコシステムで知られています。

Laravelの多くの特長の1つは、[cacheバックエンド用の統一API](https://laravel.com/docs/10.x/cache)です。これにより、Laravelアプリは、どのcacheバックエンドを使用しているかの詳細を気にすることなく、あらゆる使用頻度の高いデータをcacheすることができます。また、コードに変更を加えることなく、異なるcacheバックエンドを切り替えることができます！

Laravelは、MemcachedやRedisなどのcacheバックエンドをサポートしています。そこで、MomentoはLaravel Cache APIの実装を提供することで、cacheクラスタの管理を気にすることなく、cacheの利点をすべて手に入れることができます！Momento Cacheの柔軟な構造とサーバーレスな 特性は、Laravelのcacheワークフローに最適な選択です。

このガイドでは、LaravelとLaravel Momento Cacheプラグインをインストールして設定し、WebアプリとAPIを構築します。

詳しくは[Momento Laravelのcacheリポジトリ](https://github.com/momentohq/laravel-cache) をご覧ください。

## Laravel + Momentoアプリケーションの例

Momentoのcacheを使用したLaravelアプリの例をご覧になりたい方は [Momento Laravel Example App](https://github.com/momentohq/laravel-example)をご覧ください！このgit repoには、すべての動作サンプルアプリケーションが用意されています。このアプリケーションは、[OpenWeather](https://openweathermap.org/)から天気データを取得するWebサービスです。Momentoに天気データをcacheすることで、その後のリクエストをより迅速に処理できるようになります。

## Laravelプロジェクトのセットアップ

### 条件
* Momentoのトークン認証が必要です。 [Momento CLI](https://github.com/momentohq/momento-cli)を使用して作成することができます。
* PHP 8.0以降のインストール
* Laravel 9.x以降のインストール
* [gRPC PHPエクステンション](https://github.com/grpc/grpc/blob/v1.46.3/src/php/README.md)のインストール
* [Composer](https://getcomposer.org/doc/00-intro.md)のインストール - PHPの共通ライブラリおよび依存関係管理ツール

### Laravel + Momentoのパッケージの設定

`composer.json` ファイルに弊社リポジトリを追加し、依存関係として弊社SDKを追加します：

```json
{
  "require": {
    "momentohq/laravel-cache": "1.0.1"
  }
}
```

`composer update`を実行して、必要な前提条件をインストールします。

次に`MomentoServiceProvider`を`config/app.php`に追加します:

```php
'providers' => [
    // ...
    Momento\Cache\MomentoServiceProvider::class
];
```

最後に、`config/cache.php`に必要な設定を追加します：

```php
'default' => env('CACHE_DRIVER', 'momento'),

'stores' => [
        'momento' => [
            'driver' => 'momento',
            'cache_name' => env('MOMENTO_CACHE_NAME'),
            'default_ttl' => 60,
        ],
],
```

必要な条件をインストールするために、もう一度`composer update`を実行します。

### タグサポート

cacheタグは、[Laravel マニュアル](https://laravel.com/docs/9.x/cache#cache-tags)で説明されているのと同じように動作します。

:::備考

タグに4MB以上のキーが含まれる場合は、意図したとおりにタグ付けができない可能性があります。詳しくは、弊社までお問い合わせください！

:::

### 上限

以下のLaravelのcache操作は、現在サポートされていません。
* many
* putMany
* decrement
* forever
* flush

これらの操作が必要な場合は、弊社までご連絡いただければ、優先的に追加するよう努めます。[GitHub issue](https://github.com/momentohq/laravel-cache/issues)を作成いただくか、support@momentohq.com までメールをお送りいただくか、弊社の[Discord](https://discord.com/invite/3HkAKjUZGq)に参加していただくことができます。
