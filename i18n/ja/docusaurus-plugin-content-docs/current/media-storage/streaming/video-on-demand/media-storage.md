---
sidebar_position: 1
sidebar_label: Media storage
title: Media storage with VOD
description: With video on demand (VOD), how you store your content is critical to availability to your consumers. Learn how to stay performant and reduce costs with Momento Media Storage
hide_title: true
keywords:
  - momento
  - media storage
  - zero buffer rate
  - zbr
  - streaming
  - live
  - elemental
  - serverless
  - video on demand
  - vod
  - storage
  - mdeia
---

# Video on Demand (VOD) media storage

ビデオ・オン・デマンド（VOD）ワークフローにおいて、メディア・ストレージは、録画済みコンテンツを視聴者が見たいときにすぐに利用できるようにするために重要な役割を果たします。効率的なストレージは、高速アクセスとスケーラビリティを可能にし、特にトラフィックの多い時間帯に、プラットフォームが数百万人のユーザーに遅延なくサービスを提供することを可能にします。**Momento Media Storage**は、VOD向けに最適化されたソリューションを提供し、ビデオセグメントやマニフェストファイルへの超低遅延アクセスを実現し、デバイス間でのシームレスな再生を保証します。

## ストレージの特性

VODワークフローにおけるメディアストレージシステムは、いくつかの重要なタスクをサポートしなければなりません：

* **Storing video segments** - コンテンツはVOD用に準備される際、エンコードされ、[セグメント](/media-storage/core-concepts/segments)と呼ばれる小さな塊に分割され、[オリジン](/media-storage/core-concepts/origin)に保存されます。**Momento Media Storage**はオリジンとして機能し、コンテンツ・デリバリー・ネットワーク（CDN）から要求されたときにいつでも動画セグメントを超高速で検索できるインメモリ・ストレージを提供します。

* **Managing manifest files** - メディア ストレージ システムは、動画セグメントの保存に加えて、動画の [利用可能なビットレートと解像度](/media-storage/core-concepts/abr-ladder) を含む **マニフェスト ファイル** (たとえば、[HLS](/media-storage/performance/adaptive-bitrates/hls) の場合は `.m3u8`、[DASH](/media-storage/performance/adaptive-bitrates/dash) の場合は `.mpd`) も管理します。これらのマニフェスト ファイルは、ネットワーク条件に基づいて適切なセグメントを選択する際に、動画プレーヤをガイドします。

* **Handling multiple resolutions and bitrates** - VOD コンテンツは、さまざまなネットワーク条件やデバイスの機能に対応するために、複数のビットレートや解像度にエンコードされることがよくあります。**Momento Media Storage**は、ビデオの各バージョンのセグメントを個別のアイテムとして保存し、高画質または低画質のフォーマットにかかわらず、各セグメントが迅速に配信されるようにすることで、[ABR（アダプティブ・ビットレート・ストリーミング）](/media-storage/performance/adaptive-bitrates/how-it-works)ワークフローをサポートします。

* **Tiered storage** - すべてのコンテンツが同じ頻度でアクセスされるわけではありません。新作などの一部の動画はすぐに高いトラフィックが発生しますが、古いコンテンツや人気のないコンテンツはアクセス頻度が低くなります。**階層型ストレージ**は、このようなコンテンツの管理方法を最適化するのに役立ちます。

**Momento Media Storage**は、**階層型ストレージ**戦略の一部とすることができ、頻繁にアクセスされるコンテンツは高速なインメモリストレージに保存して迅速に検索し、人気のないコンテンツは低速でコスト効率の高いストレージ階層に移動します。このアプローチにより、視聴頻度の高い動画は常に低遅延で配信され、アクセス頻度の低いコンテンツの可用性は維持されます。コンテンツの需要に応じてストレージを階層化することで、プラットフォームはコストを最適化しながら高いパフォーマンスを維持するこができます。

## スケーラビリティとパフォーマンスの最適化

VOD プラットフォームの規模が拡大するにつれ、メディアへの高速かつ信頼性の高いアクセスを維持しながら、トラフィックの増加に対応する必要があります。**Momento Media Storage** はスケーラビリティのために構築されており、パフォーマンスを低下させることなく、何百万もの同時リクエストを難なくサポートします。ユーザーが最新リリースを視聴している場合でも、古いコンテンツを視聴している場合でも、**Momento Media Storage**は、ビデオセグメントとマニフェストファイルの迅速な配信を保証し、遅延を防止してスムーズな視聴体験を維持します。

VOD ワークフローで **Momento Media Storage** を使用する主な利点の 1 つは、人気コンテンツの高速ストレージとロングテール コンテンツの効率的な検索のバランスを取ることができることです。この柔軟性により、プラットフォームはコンテンツライブラリ全体を効率的に提供することができ、視聴者は何を視聴していても高品質の体験を楽しむことができます。
