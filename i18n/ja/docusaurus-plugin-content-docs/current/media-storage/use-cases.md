---
sidebar_position: 1
sidebar_label: Common use cases
title: Media Storage use cases
description: See how others commonly use Momento Media Storage to boost performance and reliability in production
pagination_next: null
hide_title: true
keywords:
  - momento
  - media storage
  - origin
  - streaming
  - live
  - elemental
  - serverless
---

# 一般的な使用例

Momento Media Storageは、大規模なライブ・ストリーミング・イベントから効率的なビデオ・オン・デマンド（VOD）配信まで、幅広いメディア・ストリーミング・ニーズに対応するように設計されています。超低遅延アーキテクチャ、スケーラビリティ、信頼性により、最新のメディアワークフローに理想的なオリジンソリューションとなっています。以下は、最も一般的な使用例です。

## アクセス数の多いイベントのライブストリーミング

[ライブストリーミング](/media-storage/streaming/live-streaming/how-it-works) スポーツイベント、コンサート、世界的な会議などの大きなイベントでは、突然のトラフィックの急増に対応し、リアルタイムでコンテンツを配信するために、スケーラブルで信頼性の高いオリジンが必要です。何百万人もの視聴者が視聴するため、オリジンは、遅延やバッファリングの問題を回避するために、ビデオセグメントを迅速に保存し、提供する必要があります。

### Momento Media Storageが最適な理由

* **Scalability** - 何百万もの同時リクエストに対応できるよう容易に拡張でき、ピーク時のパフォーマンス低下を防ぎます。
*
* **Low-latency segment retrieval** - [ビデオ・セグメント](/media-storage/core-concepts/segments)とマニフェスト・ファイルはインメモリで保存され、コンテンツ配信ネットワーク(CDN)のためにほぼ瞬時のアクセスを保証し、[glass-to-glass latency](/media-storage/streaming/live-streaming/glass-to-glass-latency)を最小限に抑えます。

## Video on demand (VOD)

[ビデオ・オン・デマンド（VOD）](/media-storage/streaming/video-on-demand/media-storage)プラットフォームは、録画済みコンテンツの膨大なライブラリを、ユーザーの都合に合わせて提供する。効率的なメディアの保存と検索は、特に人気のあるコンテンツに何千人もの視聴者が同時にアクセスするような需要のピーク時に、バッファのないスムーズな視聴体験を提供するための鍵となります。

### Momento Media Storageが最適な理由

* **コンテンツへの迅速なアクセス** - 動画セグメントとマニフェスト ファイルはメモリ内に保存されるため、動画プレーヤが最初のセグメントを取得して再生を開始するまでの時間が短縮されます。
* **階層型ストレージのサポート** - 頻繁にアクセスされるコンテンツは高速メモリに保存して迅速に検索できるようにする一方、あまり利用されないコンテンツは費用対効果の高いストレージ階層に移動させ、パフォーマンスとコストを最適化することができます。
* **大規模ライブラリのスケーラビリティ** - 小規模なライブラリーを管理する場合でも、数百万人のユーザーに数千時間のコンテンツを提供する場合でも、Momento Media Storageは、需要に応じて簡単に拡張できます。
*
## Adaptive bitrate streaming (ABR)

[アダプティブ・ビットレート・ストリーミング(ABR)](/media-storage/performance/adaptive-bitrates/how-it-works)は、視聴者の利用可能な帯域幅に基づいてビデオの品質を動的に調整するために使用される技術です。異なるビットレートと解像度で同じビデオの複数のバージョンを保存および配信することにより、**Momento Media Storage**は、品質レベル間のシームレスな移行をサポートし、視聴者は中断することなく可能な限り最高の品質を体験することができます。

### Momento Media Storageが最適な理由

* **効率的なセグメント・デリバリー** - セグメントはメモリ内に保存されるため、ビデオプレーヤーは現在のネットワーク状況に応じて適切なビットレートを素早く取得できます。
* **マニフェストファイルへの高速アクセス** - マニフェストファイルへの即時アクセスにより、プレーヤーはロードするセグメントをリアルタイムで決定できるため、バッファリングが減り、視聴体験が向上します。
* **複数の品質レベルをサポート** - 4Kでも480pでも、**Momento Media Storage**は、最小限の遅延で複数の画質レベルの保存と配信をサポートします。

## インタラクティブ・ストリーミングとリアルタイム・エンゲージメント

ライブオークション、オンラインゲーム、リアルタイム投票などのインタラクティブなストリーミングシナリオでは、**低遅延**はリアルタイムのインタラクションを維持するために重要です。遅延が大きいと、体験が中断され、アクションやフィードバックに遅延が生じ、ユーザーをイライラさせ、エンゲージメントを低下させる可能性があります。

### Momento Media Storageが最適な理由

* **Momento Topicsでリアルタイム更新** - インタラクティブな体験のために、**Momento Topics**は、視聴者とプラットフォーム間でイベントの更新やメッセージをリアルタイムで配信し、ライブインタラクションが同期されたままであることを保証します。ライブオークションでのアクションのトリガーであれ、ライブゲーム中のスコアの更新であれ、**Momento Topics**はリアルタイムのコミュニケーションを保証します。
* **信頼性の高いスケーリング** - 小規模のインタラクティブなセッションから大規模でグローバルなイベントまで、**Momento Media Storage**は、パフォーマンスを損なうことなく、大量のリクエストを処理するために拡張することができます。
* **リアルタイムセグメント検索** - リアルタイムのエンゲージメントでは、動画セグメントに素早くアクセスすることで、プレーヤーやインタラクティブ要素がユーザーの入力に即座に反応します。
