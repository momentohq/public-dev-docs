---
sidebar_position: 1
title: Momento Vector Index
sidebar_label: Momento Vector Index
description: <TBD>
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting started with Momento Vector Index

If you're looking to jump in and get started with Momento Vector Index with an SDK, you've come to the right place.

## Step 1: Create your API key

To use Momento Vector Index you will need a Super User Token for AWS us-west-2.
Go to the [Momento console](https://console.gomomento.com/tokens) and follow the instructions to log in with your email
address, Google account, or GitHub account.

![Image of Momento console landing page](@site/static/img/getting-started/console.png)

In the console, select the [API Keys](https://console.gomomento.com/tokens) menu option.

Once on the API key page, select the information that matches where your caches live:

1. Cloud provider - AWS
2. Region - us-west-2
3. Key Type - Super User
4. (Optional) Expiration date

![Image showing the fields to create a new API key](@site/static/img/getting-started/select-provider-region-us-west-2.png)

## Step 2: Create an index and insert some vectors!

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

# What is Momento Vector Index?

Momento Vector Index (MVI) is a scalable, developer-friendly vector index service designed for real-time storage and
retrieval of vector data for use in AI-powered applications.

MVI's serverless and API-driven approach to vector indexes aligns with modern development needs, providing compute
resources as required without the burden of infrastructure or maintenance. The combination of simple self-service and
consumption-based pricing reflects an intentional design that considers both initial development and future scaling.
It's a solution that offers flexibility and convenience for developers at various stages of the development lifecycle.

## What is MVI’s role in your application?

Build with Momento Vector Indexes with use cases such as:

### Semantic search

MVI improves your search features by understanding context and meaning. By using vector indexing, your application
delivers more relevant and nuanced search results. This feature shines in areas like e-commerce, personalized
recommendations, fraud detection, and information retrieval.

### Multimodal search

MVI also supports multimodal search, letting users search across different types of data such as text, images, videos,
and audio. Users can start a search in one modality and target any other, creating a flexible and comprehensive search
experience.

### Additional applications

While semantic and multimodal search are the main uses, MVI can be valuable for sentiment analysis, specifically in
assessing user feelings toward a business across multiple dimensions. By identifying emotional patterns in customer
reviews, social media mentions, or survey responses, MVI helps you gain a multi-faceted understanding of customer
sentiment. This can inform business strategies, customer engagement, and service improvements.

## Why is it called a vector index, not a vector database?

A vector index excels in specialized tasks, offering rapid and efficient search capabilities using vectors and metadata.
Unlike a general-purpose database, which is designed for a wide range of tasks including complex queries, joins, and
transactions, our vector index is streamlined for performance. It's not only fast and cost-effective but also lean,
allowing for easy integration into both early-stage development and production environments. Additionally, you can store
and filter through arbitrary metadata, like the original text and images, making it even more useful.
