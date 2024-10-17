---
sidebar_position: 1
sidebar_label: Overview
title: Streaming media
description: Learn what goes on behind the scenes when you stream media over the internet
pagination_next: null
hide_title: true
keywords:
  - momento
  - mediastore
  - origin
  - streaming
  - live
  - elemental
  - serverless
---

# ストリーミング・メディア

ストリーミングは、ビデオやオーディオのコンテンツをインターネット上でリアルタイムに配信し、ユーザーが即座に視聴できるようにするものです。ライブストリーミング](/mediastore/streaming/live-streaming/how-it-works)であれ、[ビデオ・オン・デマンド(VOD)](/mediastore/streaming/video-on-demand/media-storage)であれ、ストリーミングは、ビデオのエンコーディングから、ネットワークの状況に基づいて動的にその品質を調整することまで、メディアのスムーズな配信を保証する一連のプロセスに依存しています。オリジンとして **Momento MediaStore** を活用することで、[segments](/mediastore/core-concepts/segments) の保存と取得を最適化し、視聴者の高速で信頼性の高いアクセスを確保できます。

## エンコーディングとABR（アダプティブ・ビットレート・ストリーミング）

ストリーミング・プロセスは**エンコード**から始まり、生のビデオは[複数のビットレートと解像度](/mediastore/core-concepts/abr-ladder)にトランスコードされ、インターネット上でのストリーミングに適したものになる。ビデオの各バージョンは**セグメント**に分割され、それは長さ数秒のビデオの小さな塊である。これらのセグメントは**Momento MediaStore**に保存され、コンテンツ配信ネットワーク（CDN）にオンデマンドで提供できるようになっています。

さまざまなネットワーク条件に適応するために、ビデオプレーヤーは[ABR（adaptive bitrate streaming）](/mediastore/performance/adaptive-bitrates/how-it-works)を使用し、異なる品質レベルを動的に切り替えることができます。これは[ABRラダー](/mediastore/core-concepts/abr-ladder)によって管理され、異なるビットレートと解像度を持つストリームのセットが**Momento MediaStore**に保存されます。プレーヤーは、視聴者の利用可能な帯域幅に基づいて適切な品質を選択し、バッファリングを最小限に抑え、可能な限り最高のビデオ品質を維持し、[ゼロ・バッファ・レート（ZBR）](/mediastore/core-concepts/zero-buffer-rate) を最大化します。

## ストリーミングの種類

### ライブ・ストリーミング

ライブ・ストリーミングは、スポーツ、コンサート、ウェビナーなどのイベントをリアルタイムで放送することができます。ライブストリーミングにおける重要な課題の1つは、[glass-to-glass latency](/mediastore/streaming/live-streaming/glass-to-glass-latency)-イベントをキャプチャしてから視聴者の画面に表示するまでの時間を最小化することです。このレイテンシーを可能な限りゼロに近づけることが、競合他社との差別化のカギとなります。

ライブ ストリーミング ワークフローでは、ビデオ フィードはセグメントにエンコードされて **Momento MediaStore** に送信され、**Momento MediaStore** はセグメントを保存および配信する [オリジン](/mediastore/core-concepts/origin) として機能します。Momento の **超低遅延アーキテクチャ** を活用することで、CDN によるほぼ瞬時の検索にセグメントを確実に利用できるようになり、待ち時間が短縮されて全体的なストリーミング体験が向上します。

### Video on demand (VOD)

ライブ・ストリーミングとは対照的に、ビデオ・オン・デマンド（VOD）では、ユーザーが好きなときに[録画済みコンテンツ](/mediastore/streaming/video-on-demand/media-storage)をストリーミングすることができます。ここでの課題は、特に利用ピーク時に、中断のない視聴体験を提供するのに十分な速さでメディアが保存され、取り出されるようにすることです。

**Momento MediaStore**は、VODワークフローに理想的なソリューションを提供します。オリジンとして、ビデオセグメントと[マニフェストファイル](/mediastore/performance/adaptive-bitrates/dash)の両方を**インメモリストレージ**で保存し、ビデオプレーヤーが最小限の遅延でコンテンツにアクセスできるようにします。これにより、高速検索が可能になり、バッファリングが減少するため、視聴者はネットワーク状況に関係なくコンテンツを楽しむことができます。

## コンテンツの配信と保管

効率的な**コンテンツ配信**は、ライブストリーミングとVODの成功を左右します。動画セグメントが**Momento MediaStore**に保存されると、リクエストに応じてCDNポイント・オブ・プレゼンス（PoP）に配信され、コンテンツがエンドユーザーに近づきます。Momento MediaStore の役割は、すべての動画セグメントとマニフェスト ファイルのプライマリ ストレージとして機能することです。このコンテンツをインメモリで保持することで、MediaStore は超低遅延アクセスを実現し、CDN が配信に必要なファイルを迅速に取得できるようにします。

このオリジンから CDN へのワークフローにより、あらゆるデバイスやネットワークでスムーズかつ高速な再生が可能になります。高速で信頼性の高いオリジンがなければ、動画プレーヤーはセグメントを十分に速く取得するのに苦労し、バッファリングや視聴者の体験の低下につながります。
