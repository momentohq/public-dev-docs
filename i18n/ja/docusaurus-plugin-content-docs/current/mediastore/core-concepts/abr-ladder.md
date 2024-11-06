---
sidebar_position: 3
sidebar_label: ABR ladder
title: What is the ABR ladder?
description: Learn what the ABR ladder is and why it's important in the world of media and entertainment.
hide_title: true
keywords:
  - momento
  - media storage
  - abr ladder
  - bitrate
  - adaptive bitrate
  - streaming
  - live
  - elemental
  - serverless
  - zero buffer rate
  - zbr
---

# ABRラダーとは何ですか？

**ABR（アダプティブ・ビットレート）ラダー**は、メディアプレーヤーがプレーヤーのネットワーク状況に基づいて切り替えることができる、徐々に高品質のビデオストリームのコレクションです。これらのストリームは、異なる*ビットレート*と*解像度*でエンコードされ、プレーヤーは可能な限り最高の視聴体験のためにリアルタイムで最高の品質を選択します。ABRラダーの目標は、ネットワーク帯域幅の変動によって発生する可能性のあるバッファリングを最小限に抑えながら、ビデオ品質を最大化することです。

## メディア・ストリーミングにおけるABRラダーの役割

<div style={{ display: "flex", alignItems: 'flex-start', flexWrap: 'wrap' }}>
  <div style={{ flex: '2' }}>
ABRラダーは[アダプティブ・ビットレート・ストリーミング](/media-storage/performance/adaptive-bitrates/how-it-works)を有効にし、ビデオプレーヤーがネットワークパフォーマンスに基づいてストリームの品質を動的に調整します。帯域幅が広い場合、プレーヤーはより高品質のストリーム（より高い解像度とビットレート）を選択します。帯域幅が低下すると、プレーヤーは低品質のストリームに切り替わり、再生の中断を防ぐ。この適応性は、視聴体験の最高指標である[ゼロバッファレート](/media-storage/core-concepts/zero-buffer-rate)に貢献します。

### Bitrate and resolution

- **Bitrate** - 通常、**キロビット/秒（kbps）** または **メガビット/秒（Mbps）** で測定されます。ビットレートが高いほど1秒あたりのデータ量が多くなり、映像品質が高くなります。ただし、ビットレートが高いほど、ストリーミングにより多くの帯域幅が必要になるため、ネットワークが低速の場合、プレーヤーはバッファリングを防ぐために低ビットレートのストリームに切り替える必要があります。


</div>
 <div className="hideOnMobile" style={{ flex: '1', paddingLeft: '20px' }}>
  <img src="/img/media-storage/mo-ladder.png" alt="Mo climbing ladder" style={{ width: '80%' }} />
  </div>
</div>

- **Resolution**: ビデオ画像を構成する**ピクセル数**で、ビデオの鮮明さやシャープさに直接関係します。一般的な解像度には、**1080p**（1920x1080ピクセル）、**720p**（1280x720ピクセル）、**480p**（854x480ピクセル）などがあります。解像度が高いほど細部まで鮮明で画質が良くなりますが、その分帯域幅が広くなり、画質を維持するためにビットレートも高くなります。


### ABRの段階的なランクアップ

ABRラダーは複数の**ラング**で構成され、それぞれが例えばビットレートと解像度の異なる組み合わせを表す：

<table className="customTable">
  <thead>
    <tr>
      <th>Resolution</th>
      <th>Bitrate</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4K (2160p)</td>
      <td>30-45mbps</td>
      <td>Ultra-high resolution for 4K-capable devices and fast connections</td>
    </tr>
    <tr>
      <td>1080p</td>
      <td>8mbps</td>
      <td>High definition for most standard devices, offering a balance of quality and data usage</td>
    </tr>
    <tr>
      <td>720p</td>
      <td>5mbps</td>
      <td>Moderate resolution and bitrate, suitable for slower connections while maintaining decent video quality</td>
    </tr>
    <tr>
      <td>480p</td>
      <td>2.5mbps</td>
      <td>Lower resolution for acceptable quality on limited bandwidth connections</td>
    </tr>
    <tr>
      <td>360p</td>
      <td>1mbps</td>
      <td>Low resolution and bitrate, typically used when bandwidth is severely constrained</td>
    </tr>
  </tbody>
</table>

この構造により、プレーヤーの現在のネットワーク状況やデバイスの能力に応じて、プレーヤーが常に利用可能な最高の品質でビデオコンテンツを配信できることが保証されます。

## Momento Media Storage は、あなたを可能な限り高いレベルに保ちます

Momento のインメモリ 2 層アーキテクチャは、**低レイテンシ配信**用に最適化されており、ABR ラダーを使用するストリーミング ワークフローのパフォーマンスを大幅に向上させます。オリジンレイテンシーを削減することで、Momento は比類のない信頼性とパフォーマンスでセグメントを配信し、ビデオプレーヤーは最高品質のラダーに可能な限り長い時間留まることができます。

一方、オリジンの速度が遅いと、CDN の POP (Point of Presence) で **タイムアウト** が発生し、ダウンストリームの動画プレーヤが遅延や欠落したデータの処理に苦労するため、バッファリングが発生する可能性があります。Momento は、[segments](/media-storage/core-concepts/segments) への低レイテンシーのインメモリ アクセスを提供することで、これらのリスクを軽減し、コンテンツが遅延なくスムーズに配信されるようにします。

オリジンレイテンシーを削減することで、Momentoはタイムアウトを防ぐだけでなく、CDNが**一貫したデータの流れ**を維持するのを支援し、より高品質で中断のない再生と[ゼロバッファレート](/media-storage/core-concepts/zero-buffer-rate)を可能にします。
