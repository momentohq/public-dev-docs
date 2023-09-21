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

### Semantic search
MVI improves your search features by understanding context and meaning. By using vector indexing, your application delivers more relevant and nuanced search results. This feature shines in areas like e-commerce, personalized recommendations, fraud detection, and information retrieval.

### Multimodal search
MVI also supports multimodal search, letting users search across different types of data such as text, images, videos, and audio. Users can start a search in one modality and target any other, creating a flexible and comprehensive search experience.

### Additional applications
While semantic and multimodal search are the main uses, MVI can be valuable for sentiment analysis, specifically in assessing user feelings toward a business across multiple dimensions. By identifying emotional patterns in customer reviews, social media mentions, or survey responses, MVI helps you gain a multi-faceted understanding of customer sentiment. This can inform business strategies, customer engagement, and service improvements.

## Why is it called a vector index, not a vector database?

A vector index is just that, the index. It stores metadata about the data (images, text, etm.), in this case, vectors, but doesn’t keep the data like a database does. The vector index only has the data necessary to utilize the index, the vectors, and their embeddings. This makes an index super lean, super performant, and something that can easily accompany your existing data platform. For example, a vector index would store all of the vector embeddings for images and text but not the image or text themselves.
