---
sidebar_position: 4
sidebar_label: 開発
sidebar_class_name: "sidebar-item-api-reference"
title: Momento SDK を使ってアプリケーションを開発
description: Momento SDK を使い始めるための基本的なコンセプトを学びましょう。
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Momento SDK を使ってアプリケーションを開発

ようこそ！このページでは私達の SDK を使って Momento クライアントを組み立てるために必要な共通的な構造に関する情報を提供します。Momento の認証情報 (認証トークンと呼ばれます) をどの様に渡すか、クライアントをどの様に設定するか、そしてエラー処理や本番利用のためのいくつかの基本的な情報をカバーしています。

## キャッシュクライアントを構築

`CacheClient` は Momento のサービスとやり取りするコードで使う中心となるオブジェクトになります。これを生成する際には、`CredentialProvider`、`Configuration`、そしてデフォルトの生存期間 (TTL) の値を渡す必要があります。デフォルト TTL は `CacheClient` を使った項目がキャッシュから削除される前にどのくらいの長さキャッシュに保存されているかを決めます。`Set` 操作をする時に、TTL の値をユニークなものに上書きすることもできます。詳しくは、[Momento Cache のデータを生存期間 (TTL) を使って期限切れにする](/learn/how-it-works/expire-data-with-ttl)をご覧下さい。

`CacheClient` を構築する例はこちらです:

<SdkExampleTabs snippetId={'API_InstantiateCacheClient'} />

## Momento 認証トークンを使った認証プロバイダーを生成する

Momento クライアントを生成するときには Momento 認証トークンを渡す必要があります。もしまだお持ちでなければ、[Momento ウェブコンソール](https://console.gomomento.com/)から取得することができます。トークンを取得したら、`CredentialProvider` のインスタンスを作る時にそれを Momento SDK に渡します。`CredentialProvider` を環境変数や文字列から構築する便利なファクトリーメソッドもあります。以下は、環境変数から `CredentialProvider` をどのように生成するかの例になります:

<SdkExampleTabs snippetId={'API_CredentialProviderFromEnvVar'} />

もし Momento 認証トークンを [AWS Secret Manager](https://aws.amazon.com/secrets-manager/) や [GCP Secret Manager](https://cloud.google.com/secret-manager)、またはローカル設定ファイルに保存している場合には、まずそこから認証情報を取得して、`CredentialProvider` を文字列から生成します。例えばこのようになります:

<SdkExampleTabs snippetId={'API_CredentialProviderFromString'} />

AWS Secrets Manager から認証情報を取得する方法の例は、[AWS Secrets Manager から Momento 認証トークンを取得する](/develop/integrations/aws-secrets-manager)をご覧下さい。

Momento 認証トークンを生成したりリフレッシュするための一般的な情報は、[期限付きのトークンで Momento と認証する](/develop/guides/working-with-momento-auth-tokens)をご覧下さい。

## クライアント設定オブジェクト

`Configuration` オブジェクトは Momento クライアントがどの様に Momento サービスと接続すべきかの必要な設定を保持しています。`Configuration` オブジェクトは、タイムアウト、リトライ、ロギング、ミドルウェア、その他の設定を制御しています。

各 SDK は事前構築済の `Configuration` オブジェクトを持っているので、できる限り速く使えるように手助けしてくれます。私たちはたくさんのデプロイ環境においてしっかりとチューニングしてきたので、皆さんは自身のビジネス独自の部分に集中することができます。(ブログにもこのことを投稿しています！[衝撃のシンプルさ。キャッシュクライアントは、あなたのために難しい仕事をする](https://www.gomomento.com/blog/shockingly-simple-cache-clients-that-do-the-hard-work-for-you))

事前構築済の設定は `latest()` バージョンを持っていて、環境毎の最新の推奨設定を提供してくれます。例:

<SdkExampleTabs snippetId={'API_ConfigurationInRegionDefaultLatest'} />

私達は継続的にテスト、チューニングし、最適な設定を提供するために、`latest()` の事前構築済の設定は SDK のリリース間で変更されます。SDK の更新で設定が変わらない様にしたい方のために、`v1()` の様に固定バージョンを提供していて、リリース間で変わらないことが保証されています。例:

<SdkExampleTabs snippetId={'API_ConfigurationInRegionDefault'} />

カスタムの設定が必要な場合は、専用の `Configuration` オブジェクトを構築することもできます。各 SDK ソースコードの `Configurations` 名前空間にある例を見て、どのように構築されているかをご確認下さい。

これらの設定はほとんどのユースケースで必要となる要件を満たせていると思っていますが、もし何かしら欠けているものを見つけられた場合には、SDK のレポジトリに GitHub issue を作るか、`support@momentohq.com` へご連絡下さい。ぜひ皆さんのユースケースを聞いて、事前構築済の設定を修正したり拡張することで、より良いサポートを提供したいと考えています。

以下が、いくつかの事前構築済の設定です。

### ラップトップ

`Configurations.Laptop` は開発環境様で、ラップトップ上から使うためにあります。タイムアウトは緩めになっていて、ネットワークのレイテンシが多少大きいことを仮定しています。

<SdkExampleTabs snippetId={'API_ConfigurationLaptop'} />

### ブラウザ

`Configurations.Browser` は [ウェブ SDK](/develop/sdks/web) に特有の設定になっています。ユーザー毎にブラウザのレイテンシの振れ幅が大きいので、タイムアウト設定が緩めになっています。

### 同一リージョン - デフォルト

`Configurations.InRegion.Default` は、アプリケーションから同一のクラウドプロバイダーのリージョンにある Momento サービスにリクエストを送る、多くのサーバーサイドでのユースケースのための設定です。ラップトップ設定よりも積極的なタイムアウトとリトライの挙動が設定されているので、より早く失敗することでアプリケーションがデータベースや他のデータソースにより早くフォールバックできるようにしてくれています。これによって、ネットワークやサービスに問題があるときにアプリケーションが Momento でボトルネックにならないことを保証するのに役立ちます。

<SdkExampleTabs snippetId={'API_ConfigurationInRegionDefault'} />

### 同一リージョン - 低レイテンシ

`Configurations.InRegion.LowLatency` は p99.9 レイテンシを可能な限り低く保つことを優先した設定で、そのためにスループットを犠牲にしている可能性があります。`InRegion.Default` の設定よりも早くタイムアウトします。この設定は、キャッシュが利用できない時に許容できない程の大きなレイテンシを生まないことを保証することがアプリケーションの最も重要な要素で、もしキャッシュが反応しない時にアプリケーションロジックや権威あるデータソースにもっと早くフォールバックしたい時に利用して下さい。

<SdkExampleTabs snippetId={'API_ConfigurationInRegionLowLatency'} />

### Lambda

`Configurations.Lambda` はいくつかの SDK で利用可能な、AWS Lambda 環境に最適化された設定です。Lambda のコールドスタートでクライアントを暖気する様に設計された設定を持ち、もし接続がタイムアウトするほど長く Lambda がアイドル状態になった時は、接続が再度確立されていることを積極的に保証してくれます。

<SdkExampleTabs snippetId={'API_ConfigurationLambda'} />

## エラーハンドリング / 本番環境への準備

各 SDK はドキュメント内の個別のページを持っています。左のナビゲーションから `開発` -> `SDKs` をクリックすることで見られます。それぞれのページで、"コードを本番環境へ持っていく"というリンクから、その言語に応じた本番環境への準備のためのベストプラクティスを提供しています。

全ての SDK に適応できる Momento のエラーハンドリングに関する一般的な注意書きがこちらになります。

`CacheClient` のメソッド (例: Get、Set、Increment) を呼び出す時に起こるエラーは、例外を投げるのではなく、呼出しの返り値として開発者には見えます。これは、コードを書いている時にエラーをもっと見えやすくしてくれ、IDE が対応すべきエラーを処理しているかを保証するのを手助けしてくれます。これに関する私たちの哲学については、なぜ[例外はバグ](https://www.gomomento.com/blog/exceptions-are-bugs)なのかのブログ投稿をご覧頂き、私たちにフィードバックを下さい。

これは実行時にアプリケーションがクラッシュしないことを保証するのにも役立ちます。Momento はキャッシュで、通常アプリケーションはキャッシュが利用できないときにデータを取得できる信頼できるデータソースを持っています。従って、Momento SDK は例外を投げない様に設計されていて、もし try/catch ブロックを忘れたとしてもアプリケーションはクラッシュしません。

その代わりに、Momento のレスポンスオブジェクトは、パターンマッチングでアクセスできるように設計された `Hit`、`Miss`、`Error` 等の子タイプを持った親クラスから拡張されています。(いくつかの言語では、この概念は"シールクラス"と呼ばれたり、他にも"代数データ型"と呼ばれます。ポリモーフィズムの一種になります。) 皆さんのコードは、レスポンスが `Hit`、`Miss`、または `Error` かどうかをチェックし、それに応じて分岐します。このアプローチを取ることで、何が起こったかのより詳しい情報を型安全に取得できます (例えば `errorCode` というプロパティは `Hit` オブジェクトには存在しません。)

こちらが、`Hit`/`Miss`/`Error` レスポンスにパターンマッチさせる方法の例です:

<SdkExampleTabs snippetId={'API_ErrorHandlingHitMiss'} />

いくつかの API、例えば書込み API (例: Set、Delete)は、(`Hit`/`Miss` はなく) `Success` と `Error` レスポンスしか持っていません。これらのレスポンスを処理する例はこちらです:

<SdkExampleTabs snippetId={'API_ErrorHandlingSuccess'} />

全ての場合で、IDE は各 API でどんなレスポンス型が利用可能か、各レスポンス型でどんなプロパティ/メソッドが利用可能かのヒントを与えてくれるでしょう。

より詳しい情報は[レスポンスオブジェクト](/develop/api-reference/response-objects)ページと、お使いの SDK 専用のドキュメント (左のナビゲーションから`開発`->`SDKs`) をご確認下さい。
