---
sidebar_position: 1
sidebar_label: Momento Topics
sidebar_class_name: sidebar-item-overview
title: Momento Topics とは?
pagination_prev: null
description: リアルタイムなアプリケーション通信のための、最高に洗練されたサーバーレスのパブ/サブ (パブリッシュ/サブスクライブ) メッセージパターンである Momento Topics について学びましょう。
---

# Momento Topics とは？

Momento Topics は最高に洗練されたサーバーレスのパブ/サブ (パブリッシュ/サブスクライブ) メッセージパターンで、これによって分散システム間でリアルタイムの通信をすることが可能になります。Momento Topics では、あるアプリがトピックをサブスクライブすることで、他のアプリからそのトピックにパブリッシュされた項目を受け取ることができます。Momento Topics はサーバーレスなので、インフラを作る必要も全くなく、パブ/サブするトピックを生成する必要もありません。あるトピックにパブリッシュするときに、もしもそれが存在しなければ、トピックは自動的に作成されます。Topics は Momento Cache を基盤として使っているので、スケールを考慮する必要もありません。[データ転送の入出](./../manage/pricing)に対して課金されるだけです。

![image](./../../../../../static/img/topics-city.jpg)

## Momento Topics はどの様に動作するのか？

Momento Topics (パブ/サブ) はサーバーレスサービスで、分散システム間のリアルタイム通信を効率よく実行できるようにしてくれます。パブ/サブのサービスは疎結合なアーキテクチャに繋がっていて、そこではパブリッシャー(プロデューサー)はサブスクライバー(コンシューマー)が誰でどこにあるのかを全く知る必要なく、項目を特定のトピックに送り出します。サブスクライバーは1つ、もしくは複数の興味あるトピックから項目が来ないか聴いていて、あらゆるパブリッシャーからそれらのトピックにパブリッシュされた全ての項目を受け取っています。

このトピックベースの通信は、サブスクライバーがサブスクライブしているトピックからのみ項目を受け取るので、効果的なルーティングとフィルタリングを可能にし、サブスクライバーはこれらの特定のトピックに集中することができます。このアプローチはチャットシステム、通知、またはデータストリーミング等のリアルタイムアプリケーションの実装を単純化してくれます。

Momento Topics は"Fire-and-forget (発火したら忘れる)"メッセージモデルなので、一度項目をパブリッシュしたら、それはその時点でそのトピックの全サブスクライバーに即座に送られ、その後捨てられます。項目の永続化や配送保証をする仕組みはもっていません。従って、Momento Topics は低レイテンシであることが重要で、たまに項目を失っても問題なく動作するようなアプリケーションに最も適しています。

:::note

Momento Topics は Momento Cache をバックエンドとして使うので、既存のキャッシュを使うか、新しいキャッシュを Momento Cache に作成してから、[Momento Topics のパブリッシュやサブスクライブ API](./../develop/api-reference/topics)を呼び出すことができます。

:::

## Momento Topics の API 呼出し

[Topics の API リファレンスページ](./../develop/api-reference/topics.md)をご覧下さい。

<br />
<br />

Momento Topics を試してみたい場合には、無料のサンドボックスデモをクリックしてみて下さい。
<a href="https://play.instruqt.com/embed/momento/tracks/topics-on-the-momento-cli?token=em_Q_mgzhVtWtP5B_jj&finish_btn_target=_top&finish_btn_text=Go+to+Docs&finish_btn_url=https%3A%2F%2Fdocs.momentohq.com%2Fdevelop%2Fapi-reference%2Ftopics"><img src="/ja/img/topics-instruct.png" alt="Momento Topics lab" /></a>

## Momento Topics (パブ/サブ) に関するよくある質問

<details>
  <summary>もしある項目がパブリッシュされた後にアプリがトピックをサブスクライブした場合、その項目を受け取ることはできますか？</summary>
いいえ。サブスクライバーはトピックの過去の項目にアクセスすることはできません。
</details>
