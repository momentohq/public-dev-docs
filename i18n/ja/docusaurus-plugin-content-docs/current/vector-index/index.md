---
sidebar_position: 1
title: Momento Vector Index
sidebar_label: Momento Vector Index
description: <TBD>
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Momento Vector Index の使用を開始する

SDKを使ってMomento Vector Indexを使い始めたいとお考えなら、このサイトをご覧ください。

## Step 1: API keyを作成

Momento Vector Indexを利用するには、AWS us-west-2のSuper User Tokenが必要です。
[Momento console](https://console.gomomento.com/tokens)にアクセスし、指示に従ってメールアドレス
アドレス、Google アカウント、または GitHub アカウントでログインします。

![Image of Momento console landing page](@site/static/img/getting-started/console.png)

コンソールで、[API Keys](https://console.gomomento.com/tokens)メニューオプションを選択します。

APIキーのページで、キャッシュが存在する場所に一致する情報を選択します：

1. Cloud provider - AWS
2. Region - us-west-2
3. Key Type - Super User
4. (オプション）有効期限

![Image showing the fields to create a new API key](@site/static/img/getting-started/select-provider-region-us-west-2.png)

## Step 2: インデックスを作成し、いくつかのベクトルを挿入する

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

# Momento Vector Indexとは?

Momento Vector Index (MVI) は、AI を活用したアプリケーションで使用するベクトルデータのリアルタイムの保存と取得のために設計された、スケーラブルで開発者に優しいVector Indexサービスです。

Vector Indexのサーバーレスおよび API 駆動のアプローチは、現代の開発ニーズに適合しており、インフラストラクチャやメンテナンスの負担なく、必要に応じてコンピューティングリソースを提供します。 シンプルなセルフサービスと消費ベースの価格設定の組み合わせは、初期開発と将来の拡張の両方を考慮した意図的な設計を反映しています。
これは、開発ライフサイクルのさまざまな段階で開発者に柔軟性と利便性を提供するソリューションです。

## アプリケーションにおける MVI の役割は何ですか?

次のようなユースケースで Momento Vector Index を使用して構築します。

### Semantic search

MVI は、コンテキストと意味を理解することで検索機能を向上させます。 Vector Indexを使用すると、アプリケーションはより関連性の高い検索結果を提供します。 この機能は、電子商取引、パーソナライズされた推奨事項、不正行為の検出、情報検索などの分野で威力を発揮します。

### Multimodal search

MVI はマルチモーダル検索もサポートしており、ユーザーはテキスト、画像、ビデオ、オーディオなどのさまざまな種類のデータを検索できます。 ユーザーは 1 つのモダリティで検索を開始し、他のモダリティをターゲットにすることができるため、柔軟で包括的な検索体験を実現できます。

### Additional applications

セマンティック検索やマルチモーダル検索が主な用途ですが、MVI はセンチメント分析、特にビジネスに対するユーザーの感情を多面的に評価する場合に役立ちます。 MVI は、顧客のレビュー、ソーシャルメディアでの言及、またはアンケートの回答から感情的なパターンを特定することで、顧客の感情を多面的に理解するのに役立ちます。 これにより、ビジネス戦略、顧客エンゲージメント、サービスの改善に情報を得ることができます。

## なぜVector DatabaseではなくVector Indexと呼ばれるのでしょうか?

Vector Indexは特殊なタスクに優れており、ベクトルとメタデータを使用した迅速かつ効率的な検索機能を提供します。
複雑なクエリ、結合、トランザクションなどの幅広いタスク向けに設計された汎用データベースとは異なり、Vector Indexはパフォーマンスを向上させるために合理化されています。 高速かつコスト効率が高いだけでなく、無駄がないため、初期段階の開発環境と運用環境の両方に簡単に統合できます。 さらに、元のテキストや画像などの任意のメタデータを保存してフィルタリングできるため、さらに便利になります。
