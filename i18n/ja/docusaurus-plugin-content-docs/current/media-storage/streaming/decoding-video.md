---
sidebar_position: 2
sidebar_label: Decoding video streams
title: Decoding video streams
description: Discover how to decode media in your video player for live streaming or video on demand (VOD)
pagination_next: null
hide_title: true
keywords:
  - momento
  - media storage
  - origin
  - decoding
  - streaming
  - live
  - elemental
  - serverless
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Decoding video streams

ビデオストリームをデコードすることで、ビデオプレーヤーは、[ライブストリーミング](/media-storage/streaming/live-streaming/how-it-works)であれ、[ビデオオンデマンド(VOD)](/media-storage/streaming/video-on-demand/media-storage)であれ、コンテンツをストリーミングすることができます。このプロセスでは、コンテンツ・デリバリー・ネットワーク（CDN）から[セグメント](/media-storage/core-concepts/segments)をフェッチし、視聴可能なコンテンツにデコードし、視聴者の画面にビデオを最小限の遅延で配信します。HLS（HTTPライブストリーミング）](/media-storage/performance/adaptive-bitrates/hls) と [DASH（Dynamic Adaptive Streaming over HTTP）](/media-storage/performance/adaptive-bitrates/dash) が主要な方式です。これらのプロトコルは、[希望するビットレートと解像度](/media-storage/core-concepts/abr-ladder)のセグメントの場所をプレーヤーに指定するために、*マニフェストファイル*に依存しています。

## ビデオプレーヤーの仕組み

先に述べたように、ビデオストリーミングにおける 2 つの主要なプロトコルは HLS と DASH です。どちらのプロトコルも、[アダプティブ・ビットレート・ストリーミング（ABR）](/media-storage/performance/adaptive-bitrates/how-it-works) のサポートを可能にし、プレーヤーが視聴者のネットワーク状況に基づいて再生品質を最適化するために、異なる解像度とビットレートを動的に切り替えることを可能にします。これは、**マニフェスト・ファイル**の使用によって行われます。

### Momento Media Storageに保存されたマニフェスト・ファイルとセグメント

マニフェスト ファイルは、ストリームの利用可能な動画セグメントを、対応するビットレートおよび解像度とともに一覧表示します。これらのマニフェスト ファイルは、**Momento Media Storage** に格納されている特定のセグメントやその他のマニフェストへ、動画プレーヤを誘導します。

保存されたセグメントおよびビットレート/解像度固有のマニフェストファイルは、**キー名**によって識別されます。キー名は、セグメントが存在する URL に直接マッピングされるか、マニフェストのベース URL に基づく相対パスにマッピングされます。Momento Media Storage に保存されたファイルは、名前空間とキーの名前に基づいて HTTP 経由でアクセスできます。

Momento プラットフォームのすべてのデータはデフォルトで安全に保存されるため、アクセスには認証が必要です。動画プレーヤの動作の性質上、マニフェスト ファイルは通常 2 つの方法のいずれかで構成されます：

* 直接 Momento に `token` クエリパラメータを指定する。
* Authorization` ヘッダを転送する CDN を指定する。

#### トークン・クエリ・パラメータの使用

ライブ・ストリームは性質上、短命です。コンテンツが録画されると、その瞬間にエンドユーザーにストリーミングされます。再生が終わると、プロバイダがオンデマンドで利用可能にすることを決定しない限り、そのセグメントはアクセスできなくなります。このユースケースは[Momentoセッショントークン](/cache/develop/authentication/tokens)に最適です。

ライブ・ストリーミングに使用されるトークンは、最小特権パーミッションで動作するように、特定の名前空間または [キープレフィックス](/cache/develop/authentication/permissions#item-level-restriction) のいずれかにスコープされた `readonly` アクセスで生成されなければなりません。セグメントまたはマニフェストファイルへのパスは、以下の例のいずれかに一致する必要があります。

<Tabs>
<TabItem value="hls-absolute" label="HLS - Absolute">

```plaintext
#EXTINF:2.000,
https://<MOMENTO_REGION_BASE_URL>/cache/<NAMESPACE>/<SEGMENT_1_NAME>?token=<MOMENTO_TOKEN>
#EXTINF:2.000,
https://<MOMENTO_REGION_BASE_URL>/cache/<NAMESPACE>/<SEGMENT_2_NAME>?token=<MOMENTO_TOKEN>
```

</TabItem>
<TabItem value="hls-relative" label="HLS - Relative">

```plaintext
#EXTINF:2.000,
/cache/<NAMESPACE>/<SEGMENT_1_NAME>?token=<MOMENTO_TOKEN>
#EXTINF:2.000,
/cache/<NAMESPACE>/<SEGMENT_2_NAME>?token=<MOMENTO_TOKEN>
```

</TabItem>
<TabItem value="dash-absolute" label="DASH - Absolute">

```xml
<SegmentURL media="https://<MOMENTO_REGION_BASE_URL>/cache/<NAMESPACE>/<SEGMENT_1_NAME>?token=<MOMENTO_TOKEN>" />
<SegmentURL media="https://<MOMENTO_REGION_BASE_URL>/cache/<NAMESPACE>/<SEGMENT_2_NAME>?token=<MOMENTO_TOKEN>" />
```

</TabItem>
<TabItem value="dash-relative" label="DASH - Relative">

```xml
<SegmentURL media="/cache/<NAMESPACE>/<SEGMENT_1_NAME>?token=<MOMENTO_TOKEN>" />
<SegmentURL media="/cache/<NAMESPACE>/<SEGMENT_2_NAME>?token=<MOMENTO_TOKEN>" />
```

</TabItem>
</Tabs>

上記の例では、プレースホルダーは以下の値に解決されます：

* `MOMENTO_REGION_BASE_URL` - オリジンとなる地域の[endpoint](/platform/regions)
* `NAMESPACE` - オリジン領域の名前空間/キャッシュの名前
* `SEGMENT_#_NAME` - Momento に保存されているセグメントのキー。通常、HLS の場合は `.ts` で終わり、DASH の場合は `.m4s` で終わる。
* `MOMENTO_TOKEN` - 名前空間内の特定のセグメントへの読み取りアクセスを許可する短命トークン
*
### Using a CDN with header forwarding

ビデオ オン デマンド (VOD) のワークフローでは、セグメントへのアクセス要求がいつでも発生する可能性があるため、短命のトークンを使用することはできません。代わりに、Amazon CloudFront や Cloudflare のような CDN を使用して、ヘッダーを追加してリクエストを転送することは、長寿命の [Momento API キー](/cache/develop/authentication/api-keys) を使用した実行可能な代替手段です。このソリューションにより、動画プレイヤーはトークンや API キーを知らなくても CDN を呼び出すことができ、サーバー側で自動的に追加されます。

:::warning[Note]
上記のソリューションには、悪意のある攻撃を防ぐために、何らかの認証メカニズムやファイアウォール・サポートを含めるべきです。何らかの認証なしにデータを公開することは、潜在的に安全ではありません。
:::

CDNへの呼び出しは、Momentoプラットフォームへのプロキシとして機能します。ユーザーの代わりに Momento を直接呼び出します。以下は、ヘッダー転送を使用したマニフェストファイルの例です。

<Tabs>
<TabItem value="hls-proxy-absolute" label="HLS - Absolute">

```plaintext
#EXTINF:2.000,
https://<YOUR_BASE_URL>/<SEGMENT_1_NAME>
#EXTINF:2.000,
https://<YOUR_BASE_URL>/<SEGMENT_2_NAME>
```

</TabItem>
<TabItem value="hls-proxy-relative" label="HLS - Relative">

```plaintext
#EXTINF:2.000,
<SEGMENT_1_NAME>
#EXTINF:2.000,
<SEGMENT_2_NAME>
```

</TabItem>
<TabItem value="dash-proxy-absolute" label="DASH - Absolute">

```xml
<SegmentURL media="https://<YOUR_BASE_URL>/<SEGMENT_1_NAME>" />
<SegmentURL media="https://<YOUR_BASE_URL>/<SEGMENT_2_NAME>" />
```

</TabItem>
<TabItem value="dash-proxy-relative" label="DASH - Relative">

```xml
<SegmentURL media="<SEGMENT_1_NAME>" />
<SegmentURL media="<SEGMENT_2_NAME>" />
```

</TabItem>
</Tabs>

上記の例では、プレースホルダーは以下の値に解決されます：

* `YOUR_BASE_URL` - CDNのベースURL
* `SEGMENT_#_NAME` - Momento に保存されているセグメントのキー。通常、HLS の場合は `.ts` で終わり、DASH の場合は `.m4s` で終わります。

2つのオプションのトレードオフは、シンプルさがどこにあるかということです。**short-livedトークン**の場合、シンプルさはアーキテクチャにあり、あなたはshort-livedセッショントークンを生成した後、Momento HTTPサービスを直接呼び出します。**CDNアプローチ**では、マニフェストファイルはシンプルですが、管理するサーバー側の実装が複雑になります。

### Adaptive bitrate streaming (ABR)

アダプティブ ビットレート ストリーミング (ABR) では、動画プレーヤがストリームの品質を動的に調整し、視聴者のネットワーク状況に基づいて可能な限り最高のエクスペリエンスを提供します。ストリーミング プロセスには通常、複数のマニフェストが含まれます。異なる品質レベルを一覧表示する **マスター マニフェスト**（**マスター プレイリスト** とも呼ばれます）と、各ビットレートおよび解像度の **メディア プレイリスト** です。プレーヤーは利用可能な帯域幅に基づいて適切なプレイリストを選択し、リアルタイムで品質レベルを切り替えてスムーズな再生を維持できます。

#### マスター・プレイリストとメディア・プレイリスト

**マスターマニフェスト**は、他の**メディアプレイリスト**を指すトップレベルのファイルです。各メディアプレイリストには、[ビットレートと解像度の特定の組み合わせ](/media-storage/core-concepts/abr-ladder)のセグメントリストが含まれます。この構造により、プレーヤーは最適なストリームを選択し、ネットワーク状況の変化に応じて品質レベルを動的に切り替えることができます。


```plaintext
#EXTM3U
#EXT-X-STREAM-INF:BANDWIDTH=5000000,RESOLUTION=1920x1080
1080p.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=3000000,RESOLUTION=1280x720
720p.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=1500000,RESOLUTION=854x480
480p.m3u8
```

この例では
* マスターマニフェストには3つの異なる品質レベルがリストされています： マスター マニフェストには、*1080p at 5mbps*、*720p at 3mbps*、*480p at 1.5mbps*の 3 つの品質レベルがリストされています。
* 各エントリは、相対パスを使用して、特定の品質レベルの Momento Media Storage のメディア プレイリストをポイントします。

#### 単一のマニフェストの使用

ABR ではこのマスター メディア プレイリスト構造に依存するのが一般的ですが、厳密には必須ではありません。より単純なストリーミング セットアップでは、1 つのマニフェストが 1 つのビットレートと解像度のビデオ セグメントを直接指すことができます。しかし、複数のプレイリストがないと、プレーヤはネットワーク状況に動的に適応できず、再生エクスペリエンスが固定品質レベルに制限されます。

アダプティブ・ストリーミングをサポートする場合、異なる品質レベルをシームレスに切り替える機能を提供するために、メディア・プレイリストを持つマスター・マニフェストが必要です。
