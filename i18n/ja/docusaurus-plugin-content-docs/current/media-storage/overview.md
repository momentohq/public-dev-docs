---
sidebar_position: 1
sidebar_label: Momento Media Storage
title: Media Storage
description: Discover the world's first purpose-built media origin service designed for zero buffer rates
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

# クラス最高の専用オリジン

Momento Media Storageは、[ビデオ・オン・デマンド(VOD)](/media-storage/streaming/video-on-demand/media-storage)や[ライブ・ストリーミング](/media-storage/streaming/live-streaming/how-it-works)など、ストリーミングのユースケースに特化して設計された高性能オリジンです。超低レイテンシーのインメモリーアーキテクチャ上に構築されたMomento Media Storageは、すべての[ビデオセグメント](/media-storage/core-concepts/segments)、[マニフェスト](/media-storage/performance/adaptive-bitrates/hls)、およびメタデータを常に利用できるようにし、コンテンツ配信ネットワーク(CDN)およびエンドユーザーに高速で信頼性の高い配信を実現します。**Momento Media Storage**は、シームレスなメディアストリーミング体験を実現するクラス最高の[オリジン](/media-storage/core-concepts/origin)ソリューションを提供します。

## Momento Media Storageの特徴

Momento Media Storageは、ストリーミング・ワークフローにおけるメディア・ストレージと配信の特殊なニーズに対応するよう設計されています。メディア資産の保存と配信に最適な理由は次のとおりです：

### 超低遅延の検索

メディア配信はスピードが命です。Momento Media Storage は、動画セグメントとマニフェスト ファイルをメモリ内に保存し、**ほぼ即時の検索**を可能にします。この低レイテンシ アーキテクチャは、ライブ ストリーミングと VOD の両方のワークフローに不可欠です。セグメントへのアクセスが遅いと、バッファリング、低画質再生、視聴体験の低下につながります。リアルタイムでコンテンツを配信する場合でも、オンデマンドのリクエストに対応する場合でも、Momento Media Storageは、可能な限り最高の[ゼロ バッファ レート](/media-storage/core-concepts/zero-buffer-rate)を提供することを目指しています。

### 高トラフィックイベントに対応するスケーラビリティ

世界的なスポーツ中継やライブコンサートなどのライブストリーミングイベントでは、何百万人もの視聴者が一度に視聴するため、トラフィックが突然急増することがよくあります。Momento Media Storageは、**何百万もの同時リクエスト**を処理するために容易に拡張でき、大規模なイベントに最適なソリューションです。Momentoプラットフォームのすべてのサービスのアーキテクチャは、オンデマンドで拡張できるように設計されており、ピーク時の負荷がかかってもパフォーマンスの信頼性を維持できます。

### シームレスなアダプティブ・ビットレート・ストリーミング

最高の画質を提供するために、[ABR（アダプティブ・ビットレート・ストリーミング）](/media-storage/performance/adaptive-bitrates/how-it-works) では、さまざまなビットレートと解像度の動画セグメントに高速にアクセスする必要があります。**Momento Media Storage**は、ABRワークフローで重要な役割を果たし、セグメントを効率的に保存および配信し、ビデオプレーヤーがネットワークの状況に応じて異なる品質レベルを瞬時に切り替えることを可能にします。これにより、視聴者は接続状況に関係なく、バッファリングすることなく、可能な限り最高の画質を得ることができます。

### 信頼性と高可用性

ストリーミングワークフローでは、ダウンタイムは視聴率の低下、フラストレーション、ブランドの毀損につながります。**Momento Media Storage**は、高い信頼性と可用性の基盤の上に構築されており、要求があればいつでもメディアコンテンツにアクセスできます。冗長性とフェイルオーバーメカニズムが組み込まれているため、予期せぬ需要の急増やインフラストラクチャの障害が発生した場合でも、一貫して高レベルのサービスを維持します。

### 効率的なコンテンツ管理のための階層型ストレージ

すべてのコンテンツが同じようにアクセスされるわけではありません。新作など、視聴者が急増する動画もあれば、古いコンテンツやニッチなコンテンツはアクセス頻度が低い場合もあります。Momento Media Storageは、**階層型ストレージ**をサポートしており、頻繁にアクセスされるコンテンツを高速メモリに保存して最速の検索を可能にする一方、あまりアクセスされないコンテンツは、より費用対効果の高いストレージ階層に移動することができます。このアプローチにより、パフォーマンスとコストの両方が最適化され、適切なコンテンツが常に迅速に配信されます。
