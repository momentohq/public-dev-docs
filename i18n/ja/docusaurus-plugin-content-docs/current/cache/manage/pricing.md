---
sidebar_position: 3
title: Pricing and Free Tier
pagination_prev: null
description: Explore the simplicity of the pricing model and free tier information for Momento Cache and Momento Topics
---

# Momento Cache と Momento ---

sidebar_position: 3
title: Pricing and Free Tier
pagination_prev: null
description: Explore the simplicity of the pricing model and free tier information for Momento Cache and Momento Topics

---

# Momento Cache と Momento Topics の価格と無料利用枠

サーバーレスは、価格設定を含め、あらゆる面でシンプルであることを重視しています！オンデマンド価格では、Momento Cache と Topics は転送量 1GB あたり 0.50 ドルで、毎回 1KB 単位で課金されます。それだけです！

毎月最初の 5GB は無料で転送され、始めるのにクレジットカードは必要ありません。

Momento のサービスには隠れた料金がありません。ストレージ、レプリケーション、インスタンスに料金を支払う必要はありません。文字通り、Momento Cache や Topics サービスに出入りするデータに対してのみ課金されます。それ以外はすべて含まれています。安心してサインアップして、素晴らしいものを作ってください。

さらなるコスト削減、メトリクスの統合、サポートオプションのために、標準およびエンタープライズ階層で[階層価格](https://www.gomomento.com/pricing)を提供しています。

さらにサポートが必要な場合（または単に信じられない場合）は、私たちの[Discord](https://discord.gg/Z7FSXB89)にメッセージを送ってください。Momento キャッシュに挑戦してみましょう！

### FAQ's

<details open>
  <summary>Momentoのサービスに出入りするのは、本当に$.50/GBだけですか？他に料金はかかりますか？</summary>

| Dimension                            | Momento charges |
| ------------------------------------ | --------------- |
| Memory / Storage                     | $0/GB           |
| Multi-AZ replication charges         | $0/GB           |
| Single sign-on & teams (coming soon) | $0/user         |

 </details>

<details>
<summary>>Momento CacheとTopicsで本番アプリを無料で実行できますか？</summary>
勿論です。無料ティアと低利用ティアは単なる課金です。40GB/月でも40TB/月でも、サービスや機能はまったく同じです。マルチAZレプリケーション、ホットキー保護、バースト対応の自動スケーリングなど、可用性に関するすべての機能が利用できます。 無料ティアでは、<a href="/../develop/authentication">きめ細かな認証トークン</a>、エンドツーエンドの暗号化、リクエストごとの認証、TLSなどのセキュリティ機能をすべて無料で利用できます。

低い秒間リクエストのワークフローを処理するためにクラスタ全体をプロビジョニングしている顧客をよく見かけます。それらを HA にしたいのであれば、複数のノードが必要です。CICD を信じているのであれば、同じようなサイズのクラスタをステージング中、そしておそらく開発中にも持っている可能性が高いといえます。これは大きな負担だ！マシンの電源を切って、環境を守ろう。Momento へ！

</details>

<details>
  <summary>Momentoのサービスでは、月額5ドルで本番アプリケーションを実行できますか？</summary>
もちろんです！毎月15GBのデータをMomento Cacheに出し入れする場合、最初の5GBは無料、残りの10GBは毎月$0.50/GBを支払います。エンタープライズグレードの可用性、セキュリティ、パフォーマンスを、Momentoであらゆるスケールでご利用ください。

クレイジーに聞こえるかもしれないが、これをやったのは我々が初めてではありません。Amazon DynamoDB や Amazon S3 など、他のサーバーレス・サービスでもこれを体験することができます！

</details>

<details>
  <summary>本当にキャッシュに好きなだけデータを保存できるのか？</summary>
そうです！キャッシュ内のデータ量ではなく、インバウンドとアウトバウンドのデータ転送に対して課金されます。
</details>

<details>
  <summary>スケーラビリティはどうですか？</summary>
そうです！Momentoサービスは、アプリケーションのストーリーを将来にわたって保証する最良の方法です。1RPSでも100万秒間リクエストでも、Momento Cacheは非常に素早く追加でき、バックグラウンドに消えていきます。使用した分だけ支払うだけなので、大金を使わずにスケーラブルなキャッシュを手に入れることができます。
</details>

[Give Momento Cache a Try!](./../getting-started)
