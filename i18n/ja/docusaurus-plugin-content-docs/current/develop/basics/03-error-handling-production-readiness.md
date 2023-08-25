---
sidebar_position: 3
sidebar_label: SDK のエラーハンドリング
sidebar_class_name: "sidebar-item-api-reference"
title: SDK のエラーハンドリング
description: Momento SDK を使用する際のエラー処理の方法について説明します。
pagination_next: null
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# SDK のエラーハンドリング

<img src="/img/error-handling.jpg" width="90%" alt="a technical illustration of Momento client configuration objects." />

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

エラー・レスポンスの仕組みと使い方の例については、こちらのビデオをご覧ください：
<iframe width="560" height="315" src="https://www.youtube.com/embed/h9FiNCxlZso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
