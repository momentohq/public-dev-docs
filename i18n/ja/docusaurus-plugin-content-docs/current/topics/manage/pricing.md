---
sidebar_position: 3
title: Pricing and Free Tier
pagination_prev: null
description: Explore the simplicity of the pricing model and free tier information for Momento Topics
---

# Momento Topicsの価格と無料ティア

サーバーレスは、価格設定を含め、あらゆる面でシンプルであることを重視しています！オンデマンド価格では、Momento CacheとTopicsは転送量1GBあたり0.50ドルで、毎回1KB単位で課金されます。それだけです！

毎月最初の5GBは無料で転送され、始めるのにクレジットカードは必要ありません。

Momentoのサービスには隠れた料金がありません。ストレージ、レプリケーション、インスタンスに料金を支払う必要はありません。文字通り、Momento CacheやTopicsサービスに出入りするデータに対してのみ課金されます。それ以外はすべて含まれています。安心してサインアップして、素晴らしいものを作ってください。

さらなるコスト削減、メトリクスの統合、サポートオプションのために、標準およびエンタープライズ階層で[階層価格](https://www.gomomento.com/pricing)を提供しています。

さらにサポートが必要な場合（または単に信じられない場合）は、私たちの[Discord](https://discord.gg/Z7FSXB89)にメッセージを送ってください。Momentoキャッシュに挑戦してみましょう！

## FAQ's

<details open>
  <summary>Momentoサービスに出入りするのは、本当に$.50/GBだけですか？他に料金はかかりますか？</summary>

| Dimension                            | Momento charges           |
|--------------------------------------|---------------------------|
| Memory / Storage                     | $0/GB                     |
| Multi-AZ replication charges         | $0/GB                     |
| Single sign-on & teams (coming soon) | $0/user                   |

 </details>

<details>
<summary>トピックスで本番アプリを無料で実行できますか？</summary>
絶対に！無料利用枠と低使用量枠は単なる課金です。 40GB/月を使用しても、40TB/月を使用しても、まったく同じサービスと機能です。マルチ AZ レプリケーション、ホット キー保護、バーストを処理するための自動スケーリングなどの可用性機能をすべて利用できます。無料枠では、<a href="./../develop/authentication">きめ細かい認証トークン</a>やエンドツーエンドの暗号化など、すべてのセキュリティ機能を無料で利用できます。

低RPSのワークフローを処理するためにクラスタ全体をプロビジョニングしている顧客をよく見かける。それらをHAにしたいのであれば、複数のノードが必要です。CICDを信じているのであれば、同じようなサイズのクラスタをステージング中、そしておそらく開発中にも持っている可能性が高いでしょう。これは大きな負担です！マシンの電源を切って、環境を守りましょう。Momentoへ！
</details>

<details>
  <summary>Momentoのサービスでは、本番アプリケーションを月額5ドルで実行できますか</summary>？
もちろんです！毎月15GBのデータをMomento Cacheに出し入れする場合、最初の5GBは無料、残りの10GBは毎月$0.50/GBを支払います。エンタープライズグレードの可用性、セキュリティ、パフォーマンスを、Momentoであらゆるスケールでご利用ください。


クレイジーに聞こえるかもしれないが、これをやったのは我々が初めてではありません。Amazon DynamoDBやAmazon S3など、他のサーバーレス・サービスでもこれを体験することができます！
</details>

<details>
  <summary>自分のトピックに好きなだけデータを保存できますか？</summary>
もちろんです！キャッシュ内のデータ量ではなく、インバウンドおよびアウトバウンドのデータ転送に対して課金されます。
</details>

<details>
  <summary>スケールアップしますか？</summary>
そうです！Momento サービスは、アプリケーションのストーリーを将来にわたって保証する最良の方法です。1RPSでも100万RPSでも、Momento Cacheは非常に素早く追加でき、バックグラウンドにフェードインします。使用した分だけ支払うだけなので、大金を使わずにスケーラブルなキャッシュを手に入れることができます
</details>
