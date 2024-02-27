---
sidebar_position: 1
title: Vector Index
pagination_next: null
sidebar_label: Momento Vector Index
description: The Momento Vector Index
hide_title: true
keywords:
  - momento
  - vector index
  - mvi
  - ai
  - rag pipeline
  - serverless
  - langchain
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Momento Vector Indexを使い始める

SDKを使ってMomento Vector Indexを使い始めたいとお考えなら、このサイトをご覧ください。

## Step 1: APIキーを作成する

Momento Vector Indexを利用するには、AWS us-west-2のSuper User Tokenが必要です。
[Momento console](https://console.gomomento.com/tokens)にアクセスし、指示に従ってメールアドレス
アドレス、Google アカウント、または GitHub アカウントでログインします。

![Image of Momento console landing page](@site/static/img/getting-started/console.png)

コンソールで、[API Keys](https://console.gomomento.com/tokens)メニューオプションを選択します。

APIキーのページで、キャッシュの保存場所に一致する情報を選択する：

1. クラウドプロバイダー - AWS
2. リージョン - us-west-2
3. 鍵の種類 - スーパーユーザー
4.（オプション）有効期限

![Image showing the fields to create a new API key](@site/static/img/getting-started/select-provider-region-us-west-2.png)

## Step 2: インデックスを作成し、いくつかのベクトルを挿入する！

<Tabs>
   <TabItem value="node" label="Node.js" default>

```javascript
import {
    CredentialProvider,
    PreviewVectorIndexClient,
    VectorIndexConfigurations,
} from "@gomomento/sdk";

async function run(){
    const mviClient = new PreviewVectorIndexClient({
        configuration: VectorIndexConfigurations.Laptop.latest(),
        credentialProvider: CredentialProvider.fromEnvironmentVariable({
            environmentVariableName: 'MOMENTO_API_KEY',
        })
    });
    await mviClient.createIndex('test-index', 2);
    await mviClient.upsertItemBatch('test-index', [
        {
            id: 'example_item_1',
            vector: [1.0, 2.0],
            metadata: {key1: 'value1'},
        },
        {
            id: 'example_item_2',
            vector: [3.0, 4.0],
            metadata: {key2: 'value2'},
        },
    ]);
}
```

   </TabItem>
   <TabItem value="python" label="Python" default>

```python
from momento import PreviewVectorIndexClientAsync, VectorIndexConfigurations, CredentialProvider
from momento.requests.vector_index import Item

async def run() -> None:
    mvi_client = PreviewVectorIndexClientAsync(
        configuration=VectorIndexConfigurations.Default.latest(),
        credential_provider=CredentialProvider.from_environment_variable("MOMENTO_API_KEY"),
    )

    await mvi_client.create_index("test-index", 2);
    await mvi_client.upsert_item_batch("test-index", [
        Item(id="example_item_1", vector=[1.0, 2.0], metadata={"key1": "value1"}),
        Item(id="example_item_2", vector=[3.0, 4.0], metadata={"key2": "value2"}),
    ]);
```

   </TabItem>
</Tabs>

# Momento Vector Index とはなんですか?

Momento Vector Index（MVI）は、スケーラブルで開発者に優しいベクター・インデックス・サービスです。
AIを活用したアプリケーションで使用するベクターデータのリアルタイムな保存と検索を目的として設計された、開発者向けのスケーラブルなベクターインデックスサービスです。

ベクター・インデックスに対するMVIのサーバーレスおよびAPI駆動型アプローチは、現代の開発ニーズに合致しており、インフラストラクチャーやメンテナンスに負担をかけることなく、必要に応じてコンピューティング・リソースを提供します。
リソースを提供します。シンプルなセルフサービスと
消費ベースの価格設定の組み合わせは、初期開発と将来のスケーリングの両方を考慮した意図的な設計を反映しています。
開発ライフサイクルのさまざまな段階にある開発者に柔軟性と利便性を提供するソリューションです。

## アプリケーションにおけるMVIの役割は何ですか？

Momento Vector Indexesは、次のような使用例で構築することができます：

### Semantic search

MVIは文脈と意味を理解することにより、検索機能を向上させます。ベクトルインデックスを使用することで、より適切でニュアンスのある検索結果を提供します。この機能は、電子商取引、パーソナライズされたレコメンデーション、不正検出、情報検索などの分野で威力を発揮します。

### Multimodal search

MVIはマルチモーダル検索にも対応しており、ユーザーはテキスト、画像、動画、音声などさまざまな種類のデータを横断的に検索できます。ユーザーは、1つのモダリティで検索を開始し、他のモダリティを検索対象とすることができるため、柔軟で包括的な検索体験が実現します。

### その他のアプリケーション

セマンティック検索とマルチモーダル検索が主な用途であるが、MVIはセンチメント分析、特に複数の次元にまたがるビジネスに対するユーザーの感情を評価するのに有用です。特に、ビジネスに対するユーザーの感情を複数の次元にわたって評価します。MVIは、レビュー、ソーシャルメディアへの言及、または調査回答における感情パターンを特定することで、顧客の感情を多面的に理解するのに役立ちます。

## なぜベクター・データベースではなく、ベクター・インデックスと呼ばれるのですか？

ベクターインデックスは、ベクターとメタデータを使用した迅速かつ効率的な検索機能を提供し、特殊なタスクに優れています。
複雑なクエリ、結合、トランザクションを含む幅広いタスクのために設計された汎用データベースとは異なり、ベクトルインデックスはパフォーマンスのために合理化されています。高速でコスト効率に優れているだけでなく、無駄がありません、
初期段階の開発環境にも本番環境にも簡単に統合できます。また、テキストや画像のような任意のメタデータをフィルタリングできるため、さらに便利になります。
