---
sidebar_position: 4
sidebar_label: Zero buffer rate (ZBR)
title: What is zero buffer rate?
description: Learn what zero buffer rate means and why Momento Media Storage is the perfect option to get it.
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
---

# ゼロ・バッファ・レートとは？

ゼロ・バッファ・レート（ZBR）は、バッファリング・イベントに1度も遭遇することなくストリーム全体を視聴できる視聴者の割合を測定します。ZBRが高いということは、視聴者の満足度とエンゲージメントを維持するために不可欠な、スムーズで中断のないストリーミング体験を意味します。バッファリングの中断は視聴者をイライラさせ、ストリームから離脱させる可能性があるため、高いZBRを達成することは、あらゆるストリーミングサービスにとって重要な目標です。

<div style={{display: 'flex', justifyContent: 'center'}}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/xSWRpr2we6Y?si=u4TtsVlEQtm44cvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## メディア・ストリーミングにおけるZBR

高い ZBR を維持するためには、[segments](/media-storage/core-concepts/segments) が迅速かつ一貫して配信されることが重要です。ビデオ プレーヤーは、ビデオ セグメントを事前に受信して、*ルックアヘッド バッファー*を構築し、再生の中断を防ぎます。セグメント取得の遅延によりルックアヘッド バッファのコンテンツが不足すると、プレーヤは一時停止とバッファリングを余儀なくされ、ZBR が低下します。

### ZBRに影響を与える要因

- **Network conditions** - 携帯電話やWi-Fiネットワークの帯域幅が変動すると、プレーヤーが安定したルックアヘッドバッファを維持できなくなることがあります。
- **CDN performance** - ポイント・オブ・プレゼンス（POP）は、オリジンの負荷を軽減するためにリクエストを折りたたもうとしますが、オリジンに問題が発生した場合、遅延やボトルネックが発生する可能性があります。
- **Origin latency**: 遅い[origin](/media-storage/core-concepts/origin)は、失敗した書き込みや遅い読み込みのような追加の遅延をもたらします。

## MomentoがZBRを最大化する方法

Momentoは、**イン・メモリ・アーキテクチャ**と**低テール・レイテンシ**により、ZBRを改善します。高速で信頼性の高いオリジンとして、Momento は動画セグメントを迅速に配信し、バッファリングのリスクを低減します。このプラットフォームの細かく調整されたアーキテクチャは、セグメント配信時間を最小化し、プレーヤーが中断のない再生に不可欠な完全なルックアヘッド・バッファを維持できるようにします。

低レイテンシー配信に加え、Momentoのアーキテクチャはエラー率を低減し、セグメント配信を遅らせる可能性のある書き込み失敗や再試行の可能性を低減します。エラーの減少とデータ転送の高速化により、MomentoはZBRを大幅に改善します。従来のオブジェクトストアに比べて100倍も速いテールレイテンシーで、Momento Media Storageは、ハイデマンドシーンでも、すべての視聴者にスムーズで一貫性のあるストリーミングを提供します。

オリジンが遅いとボトルネックが発生し、プレーヤーが新しいセグメントのロードを待つ間にバッファリングが発生し、最終的に ZBR が低下します。Momentoでは、このようなリスクを最小限に抑え、視聴者を飽きさせないシームレスでバッファのない視聴体験を提供します。
