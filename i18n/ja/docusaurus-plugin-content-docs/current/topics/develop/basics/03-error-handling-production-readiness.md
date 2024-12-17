---
sidebar_position: 3
sidebar_label: SDK のエラーハンドリング
title: SDK のエラーハンドリング
description: Momento SDK を使用する際のエラー処理の方法について説明します。
pagination_next: null
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# SDK のエラーハンドリング

![a technical illustration of Momento client configuration objects.](@site/static/img/error-handling.jpg)

左のナビゲーションメニューから `Develop`->`SDKs` をクリックすることで、それぞれのSDKのページに移動することができます。それぞれのページには「コードを本番環境へ」というリンクがあり、その言語でプロダクションで使えるコードを作るためのベストプラクティスが紹介されています。

Momento SDKは、あらかじめ用意された設定オブジェクトを使用して本番環境でも問題なく動作するように設計されているため、ほとんどのユーザーは運用方法を変更することなく、検証環境から本番環境に簡単に移行できます。このページでは、Momento SDK のエラー処理に関する一般的な注意点と、デフォルトの動作が推奨される理由について説明します。

## Surfacing errors
`CacheClient` のメソッド (例: Get、Set、Increment) を呼び出す時に起こるエラーは、例外を投げるのではなく、呼出しの返り値として開発者には見えます。これは、コードを書いている時にエラーをもっと見えやすくしてくれ、IDE が対応すべきエラーを処理しているかを保証するのを手助けしてくれます。これに関する私たちの哲学については、なぜ[例外はバグ](https://www.gomomento.com/blog/exceptions-are-bugs)なのかのブログ投稿をご覧頂き、私たちにフィードバックを下さい。

これは実行時にアプリケーションがクラッシュしないことを保証するのにも役立ちます。Momento はキャッシュで、通常アプリケーションはキャッシュが利用できないときにデータを取得できる信頼できるデータソースを持っています。従って、Momento SDK は例外を投げない様に設計されていて、もし try/catch ブロックを忘れたとしてもアプリケーションはクラッシュしません。

その代わりに、Momento のレスポンスオブジェクトは、パターンマッチングでアクセスできるように設計された `Hit`、`Miss`、`Error` 等の子タイプを持った親クラスから拡張されています。(いくつかの言語では、この概念は"シールクラス"と呼ばれたり、他にも"代数データ型"と呼ばれます。ポリモーフィズムの一種になります。) 皆さんのコードは、レスポンスが `Hit`、`Miss`、または `Error` かどうかをチェックし、それに応じて分岐します。このアプローチを取ることで、何が起こったかのより詳しい情報を型安全に取得できます (例えば `errorCode` というプロパティは `Hit` オブジェクトには存在しません。)

こちらが、`Hit`/`Miss`/`Error` レスポンスにパターンマッチさせる方法の例です:

<SdkExampleTabs snippetId={'API_ErrorHandlingHitMiss'} />

いくつかの API、例えば書込み API (例: Set、Delete)は、(`Hit`/`Miss` はなく) `Success` と `Error` レスポンスしか持っていません。これらのレスポンスを処理する例はこちらです:

<SdkExampleTabs snippetId={'API_ErrorHandlingSuccess'} />

全ての場合で、IDE は各 API でどんなレスポンス型が利用可能か、各レスポンス型でどんなプロパティ/メソッドが利用可能かのヒントを与えてくれるでしょう。

エラー・レスポンスの仕組みと使い方の例については、こちらのビデオをご覧ください：
<iframe width="560" height="315" src="https://www.youtube.com/embed/h9FiNCxlZso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 呼び出しでエラーを返した時の再試行
エラー応答後に呼び出しを再試行する場合、Momento SDK に期待できる一般的な動作パターンは次のとおりです：

![logic diagram depicting SDK retry behavior](@site/static/img/sdk_retry_behavior.png)

Momento SDKはスロット付きリクエスト([制限超過](../../limits))を再試行しません。その他のエラーについては、要求された操作が [idempotent](https://en.wikipedia.org/wiki/Idempotence) でない場合、SDK は再試行しません。例えば、カウンターをインクリメントしているときにエラー応答を受け取った場合、SDKはあなたの代わりにリトライしません(これはオーバーカウントになる可能性があるため)。リトライするかどうかは開発者に選択させることが安全だと考えているためです。
