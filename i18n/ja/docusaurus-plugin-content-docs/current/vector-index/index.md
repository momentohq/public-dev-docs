---
sidebar_position: 1
title: Momento Vector Index
sidebar_label: Momento Vector Index
description: <TBD>
---

# What is Momento Vector Index?

Momento Vector Index (MVI) is a scalable, developer-friendly vector index service designed for real-time storage and retrieval of vector data for use in AI-powered applications.

![Main image about vector index service.](@site/static/img/vector-index/mvi.jpg)

MVI's serverless and API-driven approach to vector indexes aligns with modern development needs, providing compute resources as required without the burden of infrastructure or maintenance. The combination of simple self-service and consumption-based pricing reflects an intentional design that considers both initial development and future scaling. It's a solution that offers flexibility and convenience for developers at various stages of the development lifecycle.

## What is MVI’s role in your application?

Build with Momento Vector Indexes with use cases such as:

MVI can be leveraged for semantic searches, which enhance search capabilities by understanding context and meaning. By employing vector indexing, your app can interpret relationships between words and concepts, allowing for more relevant results. This technology supports applications like personalized recommendations, fraud detection, and Natural Language Processing (NLP), providing a more nuanced search experience than simple text-based search. MVI's potential to bridge language barriers and understand user intent makes it a valuable tool for delivering a more intelligent and satisfying search experience.

For sentiment analysis applications, you can use MVI to map data into a multidimensional space, where patterns correlating to positive, negative, or neutral emotions can be discerned. This allows for efficient comparison across large datasets, helping gauge opinions on products or trends. With real-time processing and adaptability, vector indexes become increasingly valuable for understanding and responding to user sentiments.

## Why is it called a vector index, not a vector database?

A vector index is just that, the index. It stores metadata about the data (images, text, etm.), in this case, vectors, but doesn’t keep the data like a database does. The vector index only has the data necessary to utilize the index, the vectors, and their embeddings. This makes an index super lean, super performant, and something that can easily accompany your existing data platform. For example, a vector index would store all of the vector embeddings for images and text but not the image or text themselves.
