---
sidebar_position: 20
sidebar_label: SDK エラー処理
title: SDK エラー処理
description: Momento SDK を使用する際のエラーの処理方法を説明しています。
pagination_next: null
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# SDKエラー処理

左のナビゲーションメニューにある `Develop`->`SDKs` をクリックすると、それぞれのSDKのページに移動できます。それぞれのページには、"Taking your code to prod "というリンクがあり、その言語でプロダクションですぐに使えるコードを作るためのベストプラクティスが紹介されています。

Momento SDK は、あらかじめ用意された設定オブジェクトを使用して本番環境でも問題なく動作するように設計されているため、ほとんどのユーザーは運用方法を変更することなく、概念実証から本番環境に簡単に移行できます。このページでは、Momento SDK のエラー処理に関する一般的な注意点と、デフォルトの動作がほとんどのお客様に推奨される理由について説明します。

## 表面的なエラー

`CacheClient` メソッド（Get、Set、Increment など）の呼び出しで発生したエラーは、例外をスローするのではなく、呼び出しの返り値の一部として開発者に表示されます。これによって、コードを書いているときにエラーが目に見えるようになり、IDE が、気になるエラーを確実に処理するのに役立つようになります。この点に関する私たちの考え方については、ブログ記事「なぜ[例外はバグ]なのか」(https://www.gomomento.com/blog/exceptions-are-bugs)を参照し、ご意見があればお寄せください！

これは、アプリケーションが実行時にクラッシュしないようにするのにも役立ちます。Momentoはキャッシュであるため、アプリケーションは通常、キャッシュが利用できない場合にデータを取得する信頼できるデータソースを持っています。そのため、Momento SDKは例外をスローしないように設計されており、try/catchブロックを追加し忘れてもアプリケーションがクラッシュすることはありません。

その代わりに、Momentoのレスポンスオブジェクトは親クラスから拡張され、`Hit`,`Miss`や`Error`などの子クラス型を持ち、パターンマッチでアクセスできるように設計されています。(ある言語では、この概念を "sealed classes "と呼び、他の言語では "algebraic data types "と呼ぶ。ポリモーフィズムの一種である)。あなたのコードはレスポンスが `Hit`、`Miss`、`Error` のいずれかをチェックし、それに応じて分岐する。キャッシュの読み込み結果が `Miss` または `Error` であった場合、何が起こったのかについての詳細な情報を得るために使用できる型安全なオブジェクトも得られます (`Hit` オブジェクトには存在しない `errorCode` などのプロパティがあります)。

以下は `Hit`/`Miss`/`Error` レスポンスのパターンマッチングの例です：

<SdkExampleTabs snippetId={'API_ErrorHandlingHitMiss'} />

書き込みAPI(例えばSetやDelete)などのいくつかのAPIは、(`Hit`/`Miss`とは対照的に)`Success`と`Error`レスポンスしか持ちません。これらのレスポンスを処理する例を以下に示します：

<SdkExampleTabs snippetId={'API_ErrorHandlingSuccess'} />

どのような場合でも、IDEは特定のAPIでどのタイプのレスポンスが利用可能か、そしてそれぞれのレスポンスタイプでどのようなプロパティ/メソッドが利用可能かについてのヒントを与えてくれるでしょう。

エラー・レスポンスの仕組みと使い方の例については、こちらのビデオをご覧ください：
<iframe width="560" height="315" src="https://www.youtube.com/embed/h9FiNCxlZso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## エラーを返した呼び出しの再試行
エラー応答後に呼び出しを再試行する場合、Momento SDK に期待できる一般的な動作パターンは次のとおりです：

<img src="/img/sdk_retry_behavior.png" width="100%" alt="logic diagram depicting SDK retry behavior"/>

Momento SDKは、スロット付きリクエスト([制限超過](/cache/manage/limits)))を再試行しません。その他のエラーについては、要求された操作が [idempotent](https://en.wikipedia.org/wiki/Idempotence) でない場合、SDK は再試行しません。例えば、カウンターをインクリメントしているときにエラー応答を受け取った場合、SDKはあなたの代わりにリトライを行いません（これはオーバーカウントになる可能性があるため）。べきでない操作の場合、リトライするかどうかは開発者に選択させた方が安全です。


