---
sidebar_position: 1
sidebar_label: Cheat Sheet
title: Momento Vector Index cheat sheet for TypeScript and Node.js
description: Everything to get you going with coding using Node.js and Momento Vector Index
---

# Node.js用チートシート (Momento Vector Index)

Node.jsとMomento Vector Indexをすぐに使い始める必要がある場合、このページには必要な基本的なAPIコールが含まれています。

## ライブラリのインポートとベクトルインデックスクライアントのインスタンス化

このコードでは、必要なインポート、クラス定義、他の各関数が呼び出す必要のある`PreviewVectorIndexClient の`インスタンス化でクラスをセットアップします。

```typescript
import {CredentialProvider, PreviewVectorIndexClient, VectorIndexConfigurations} from "@gomomento/sdk";


const client = new PreviewVectorIndexClient({
    configuration: VectorIndexConfigurations.Laptop.latest(),
    credentialProvider: CredentialProvider.fromEnvironmentVariable({
        environmentVariableName: 'MOMENTO_API_KEY',
    }),
});

```

以下の例では、すでに`PreviewVectorIndexClient`をインスタンス化しているものとします。

## Momento Vector Index で新しいインデックスを作成する

このスニペットを使用して、アカウントに新しいインデックスを作成します。`similarityMetric`パラメータはオプションで、デフォルトは `VectorSimilarityMetric.COSINE_SIMILARITY` です。

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

## アカウント内の既存インデックスの一覧を取得

この例では、アカウント内のインデックスを一覧表示します。

```typescript
const listResponse = await client.listIndexes();
if (listResponse instanceof ListVectorIndexes.Success) {
    console.log(listResponse.getIndexNames().join('\n'));
} else {
    console.log(`Error listing indexes: ${listResponse.toString()}`);
}
```

## インデックスへの項目の一括書き込み

`upsertItemBatch`操作を行う簡単な例です。この操作はアイテムが存在しなければ挿入し、存在すれば置き換える。

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

これは `queryVector` にマッチするインデックスから上位 k 個のアイテムを取得する検索操作の例である。metadataFields` パラメータはオプションであり、レスポンスで返すメタデータフィールドを指定するために使用します。

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

## インデックスからの項目の削除

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

`deleteIndex`を使用してインデックスを削除する例。

```typescript
const indexName = "my-index";
const deleteIndexResponse = await client.deleteIndex(indexName);
if (deleteIndexResponse instanceof DeleteVectorIndex.Success) {
    console.log("Index 'test-index' deleted");
} else {
    console.log(`Error deleting index: ${deleteIndexResponse.toString()}`);
}
```
