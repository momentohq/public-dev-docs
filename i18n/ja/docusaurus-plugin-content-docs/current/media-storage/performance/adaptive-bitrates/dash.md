---
sidebar_position: 3
sidebar_label: DASH
title: Dynamic Adaptive Streaming over HTTP
description: Learn about the Dynamic Adaptive Streaming over HTTP (DASH) protocol and how it works
pagination_next: null
hide_title: true
keywords:
  - momento
  - media storage
  - origin
  - encoding
  - streaming
  - live
  - elemental
  - serverless
  - abr
  - bitrate
---

# DASH（Dynamic Adaptive Streaming over HTTP）とは？

DASH (Dynamic Adaptive Streaming over HTTP) は、[アダプティブ・ビットレート・ストリーミング・プロトコル](/media-storage/performance/adaptive-bitrates/how-it-works) であり、ビデオプレーヤーの利用可能な帯域幅に基づいてストリームの品質をリアルタイムに調整することで、インターネット上でビデオをスムーズに配信することができます。[HLS](/media-storage/performance/adaptive-bitrates/hls)のように、DASHは動画コンテンツを[segments](/media-storage/core-concepts/segments)に分割し、HTTPで配信します。これにより、プレイヤーは品質レベルを動的に切り替えることができ、ネットワークの状態が変動してもバッファのない体験を保証します。

## DASHの仕組み

DASH は、コンテンツを小さなセグメントに分割し、異なるビットレートと解像度で利用可能なすべてのセグメントをリストした **マニフェスト・ファイル**（MPD - Media Presentation Description と呼ばれる）を提供することで機能します。動画プレーヤはこのマニフェストを使用して、現在のネットワーク状況に基づいて適切なセグメントの再生を要求します。帯域幅が広い場合、プレーヤはより高品質のセグメントをストリーミングしますが、帯域幅が低下すると、中断を避けるために低品質のセグメントに切り替えます。

### DASHのワークフロー

DASH は、HLS のような他のアダプティブ・ビットレート・ストリーミング・プロトコルと同様のワークフローに従いますが、異なるフォーマットとセグメント構造を使用します。以下は、その仕組みの概要である：

1. **Encoding and segmenting** - ソースビデオは複数のビットレートと解像度にエンコードされています。ビデオの各バージョンは、通常**2秒から10秒**の長さの小さなセグメントに分割される。これらのセグメントは一意の**キー名**を使って保存されます。

2. **Manifest file (MPD)** - MPD ファイルが生成され、さまざまな品質レベルで利用可能なセグメントが一覧表示されます。MPDファイルには、各セグメントのビットレート、解像度、各セグメントに対応するURLまたはキー名の情報が含まれます。

3. **Segment delivery** - 動画セグメントと MPD ファイルは、[origin](/media-storage/core-concepts/origin) に保存されます。プレーヤーは MPD を取得し、それを使用して **コンテンツ配信ネットワーク（CDN）** から適切なセグメントをダウンロードします。プレーヤーは、変化するネットワーク条件に基づいてストリーム品質を動的に調整します。

4. **Dynamic switching** - ネットワークの帯域幅が変動すると、プレーヤーはMPDファイルで指定された異なるセグメントをフェッチすることによって、異なる品質レベルを動的に切り替えます。

## DASHとHLSの違い

DASHとHLSはどちらもアダプティブ・ビットレート・ストリーミング・プロトコルですが、両者にはいくつかの重要な違いがある：

* **Compatibility** - HLSはアップルのデバイス（iOS、macOS）でネイティブにサポートされているが、DASHはAndroidやほとんどのウェブブラウザなど、他のプラットフォームでより広くサポートされています。

* **File format**- DASH はマニフェストとして *MPD* ファイルを使用しますが、HLS は `.m3u8` プレイリストを使用します。DASH の基礎となるセグメントフォーマットは通常 `.m4s` (MPEG-4 Segment) で、HLS は `.ts` (MPEG-2 Transport Stream) セグメントを使用します。

## DASHとMomento Media Storage

Momento Media Storageは、**セグメント**と**MPDファイル**の両方を保存します。各セグメントは一意の**キー名**で保存され、MPDファイルから参照されます。例えば、*1080p* のセグメントは `segment-1080p-0001.m4s` として保存され、同じセグメントの *720p* バージョンは `segment-720p-0001.m4s` として保存されます。

MPDファイルはこれらのキー名を一覧表示し、現在の帯域幅の状況に基づいて、どのセグメントをダウンロードするかをプレーヤーに指示します。以下に、DASHのアダプティブ・ビットレート・ストリーミング（ABR）用のMPDファイルの例を示します：

```xml
<MPD xmlns="urn:mpeg:dash:schema:mpd:2011" minBufferTime="PT1.5S" profiles="urn:mpeg:dash:profile:isoff-live:2011">
  <Period>
    <AdaptationSet>
      <Representation id="1080p" bandwidth="5000000" width="1920" height="1080">
        <SegmentTemplate media="segment-1080p-$Number$.m4s" startNumber="1" duration="2000" />
      </Representation>
      <Representation id="720p" bandwidth="3000000" width="1280" height="720">
        <SegmentTemplate media="segment-720p-$Number$.m4s" startNumber="1" duration="2000" />
      </Representation>
      <Representation id="480p" bandwidth="1500000" width="854" height="480">
        <SegmentTemplate media="segment-480p-$Number$.m4s" startNumber="1" duration="2000" />
      </Representation>
    </AdaptationSet>
  </Period>
</MPD>
```

この例では、プレーヤーはMPDを参照し、利用可能な帯域幅に応じて、*1080p*、 *720p*、または*480p*ストリームの適切なセグメントを選択します。プレーヤーは、現在利用可能な帯域幅に基づいて、最初のセグメントを要求してストリー ミングを開始します。ストリームが進むにつれて、プレーヤーはネットワークの状態を継続的に監視し、それに応じてビットレートを調整します。**Momento Media Storage**は、これらのセグメントへの高速で低遅延なアクセスを保証し、品質レベル間の迅速な切り替えを可能にし、バッファリングを最小限に抑えます。
