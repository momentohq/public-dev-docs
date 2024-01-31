---
sidebar_position: 1
sidebar_label: Vector Index
title: Getting started with Momento Vector Index in JavaScript
description: Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Vector Index.
keywords:
  - momento
  - cache
  - caching
  - vector index
  - llm
  - large language model
  - vector search
  - redis
  - serverless
  - sdk
  - sdks
  - api
  - typescript
  - javascript
  - nodejs
  - node.js
  - examples
  - resources
  - getting started
  - quick start
  - web
  - browser
---

# JavaScriptでMomento Vector Indexを始める

Momentoは2つのJavaScript SDKを提供しています。[1つはNode.js用](/sdks/nodejs)、[1つはブラウザその他のWebアプリケーション用](/sdks/web)です。2つのSDKは同じAPIを持っているので、あなたのコードは `import` ステートメントを除いて同じように見えますが、異なるJavaScriptランタイム環境で最適なパフォーマンスと互換性を実現するように作られています。

このページでは、Momento Vector Indexを素早く使いこなすために必要な基本的なことを説明します。より詳細な情報やサンプルについては、上記のSDKページをご覧ください。

## Momento SDKをインストールする

既存のNode.jsプロジェクトにMomento Node.js SDKをインストールするには：

```cli
npm install @gomomento/sdk
```

または、既存のブラウザ アプリケーション プロジェクトに Momento Web SDK をインストールします：

```cli
npm install @gomomento/sdk-web
```

:::tip
`gomento/sdk`または`@gomento/sdk-web`のどちらか片方だけが必要です。両方は必要ありません。
:::

## API キーの設定

Momentoで認証するには[Momento API key](/cache/develop/authentication/api-keys)が必要です。できれば、[Momento Web Console](https://console.gomomento.com/caches) から取得できます。
トークンを取得したら、Momento クライアントが利用できるように環境変数に保存します：

```
export MOMENTO_API_KEY=<your Momento token here>
```

**Note**: セキュリティ強化のためには、トークンを環境変数ではなく、AWS Secret ManagerやGCP Secret Managerのようなものに格納するのがベストプラクティスだが、ここではデモのために使用しています。

## ライブラリのインポートとベクターインデックス クライアントのインスタンス化

このコードでは、必要なインポート、クラス定義、そして他の各関数が呼び出す必要のある `PreviewVectorIndexClient` のインスタンス化をセットアップしています。


```typescript
import {CredentialProvider, PreviewVectorIndexClient, VectorIndexConfigurations} from "@gomomento/sdk";


const client = new PreviewVectorIndexClient({
    configuration: VectorIndexConfigurations.Laptop.latest(),
    credentialProvider: CredentialProvider.fromEnvironmentVariable({
        environmentVariableName: 'MOMENTO_API_KEY',
    }),
});

```

以下の例では、すでに `PreviewVectorIndexClient` がインスタンス化されているものとします。

## Momento Vector Indexに新しいインデックスを作成する

このスニペットを使用して、アカウントに新しいインデックスを作成します。`similarityMetric` パラメータはオプションで、デフォルトは `VectorSimilarityMetric.COSINE_SIMILARITY` です。

```typescript
const indexName = "my-index";
// The number of dimensions in your vectors
const numDimensions = 2;
const similarityMetric = VectorSimilarityMetric.COSINE_SIMILARITY;

const createResponse = await client.createIndex(indexName, numDimensions, similarityMetric);
if (createResponse instanceof CreateVectorIndex.Success) {
    console.log('Index created successfully!');
} else {
    console.log(`Error creating index: ${createResponse.toString()}`);
}
```

## アカウントに存在するインデックスの一覧を取得する

この例では、アカウント内のインデックスをリストアップします。

```typescript
const listResponse = await client.listIndexes();
if (listResponse instanceof ListVectorIndexes.Success) {
    console.log(listResponse.getIndexNames().join('\n'));
} else {
    console.log(`Error listing indexes: ${listResponse.toString()}`);
}
```

## バッチアイテムをインデックスに書き込む

upsertItemBatch`操作を行う簡単な例です。この操作はアイテムが存在しなければ挿入し、存在すれば置き換えられます。

```typescript
const indexName = "my-index";
const upsertResponse = await client.upsertItemBatch(indexName, [
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
if (upsertResponse instanceof VectorUpsertItemBatch.Success) {
    console.log('Successfully upserted items');
} else {
    console.log(`Error adding items: ${upsertResponse.toString()}`);
}
```

## インデックスの検索

これは `queryVector` にマッチするインデックスから上位 k 個のアイテムを取得する検索操作の例である。metadataFields` パラメータはオプションで、レスポンスで返すメタデータフィールドを指定することができます。

ここでは `queryVector` に `[1.0, 2.0]` を指定し、上位 2 件の検索結果を求めています。


```typescript
const indexName = "my-index";
const queryVector = [1.0, 2.0];
const searchResponse = await client.search(indexName, queryVector, {
    topK: 2,
    metadataFields: ALL_VECTOR_METADATA,
});
if (searchResponse instanceof VectorSearch.Success) {
    console.log(`Search succeeded with ${searchResponse.hits().length} results`);
} else {
    console.log(`Error searching items: ${searchResponse.toString()}`);
}
```

## インデックスから項目を削除する

`deleteItemBatch` を使用してインデックスから項目を削除する例である。

```typescript
const indexName = "my-index";
const itemsToDelete = [
    'example_item_1',
    'example_item_2',
];

const deleteResponse = await client.deleteItemBatch(indexName, itemsToDelete);
if (deleteResponse instanceof VectorDeleteItemBatch.Success) {
    console.log('Successfully deleted items');
} else {
    console.log(`Error deleting items: ${deleteResponse.toString()}`);
}
```

## インデックスの削除

`deleteIndex`を使用してインデックスを削除する例である。

```typescript
const indexName = "my-index";
const deleteIndexResponse = await client.deleteIndex(indexName);
if (deleteIndexResponse instanceof DeleteVectorIndex.Success) {
    console.log("Index 'test-index' deleted");
} else {
    console.log(`Error deleting index: ${deleteIndexResponse.toString()}`);
}
```
