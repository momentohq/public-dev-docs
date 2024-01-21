---
title: Find the Right Momento SDK for your Language and Use Case 
description: Momento provides SDKs for a wide variety of languages and target platforms. Find the right SDK for your use case!
pagination_next: null
hide_title: true
keywords:
  - momento
  - cache
  - caching
  - topics
  - pubsub
  - pub/sub
  - eda
  - event-driven architecture
  - redis
  - serverless
  - sdk
  - sdks
  - api
  - typescript
  - javascript
  - nodejs
  - node.js
  - python
  - go
  - php
  - java
  - kotlin
  - android
  - jvm
  - rust
  - ruby
  - elixir
  - swift
  - ios
  - dart
  - flutter
  - dotnet
  - .net
  - c#
  - csharp
  - c-sharp
---

import { LinkButton } from "@site/src/components/LinkButton";

# Momento SDKs

Write code to interact with Momento Cache and Momento Topics in your favorite programming language, regardless of whether you are building a web, mobile, or server application!

## Client-Side SDKs

Momento client-side SDKs allow you to interact with Momento Cache and Momento Topics directly from your web or mobile application; no server-side infrastructure required! Create chat applications and other messaging features that allow your clients to communicate with one another with only a few lines of code!

### Web SDK (Browser)

The Momento Web SDK allows you to create rich browser applications in TypeScript or JavaScript.

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Overview" link="/sdks/web"/>
  <LinkButton text="Cache" link="/sdks/nodejs/cache.html"/>
  <LinkButton text="Topics" link="/sdks/nodejs/topics.html"/>
  <LinkButton text="Vector Index" link="/sdks/nodejs/vector-index.html"/>
  <LinkButton text="API Tokens" link="/sdks/web#credentials-for-browsers"/>
  <LinkButton text="Examples" link="https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web" openInNewTab="true"/>
  <LinkButton text="Packages" link="https://www.npmjs.com/package/@gomomento/sdk-web" openInNewTab="true" />
  <LinkButton text="Source Code" link="https://github.com/momentohq/client-sdk-javascript" openInNewTab="true" />
</div>
```

### Swift SDK (iOS)

Build native iOS applications using the Momento Swift SDK.

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Overview" link="/sdks/swift"/>
  <LinkButton text="Cache" link="/sdks/swift/cache.html"/>
  <LinkButton text="Topics" link="/sdks/swift/topics.html"/>
  <LinkButton text="Examples" link="https://github.com/momentohq/client-sdk-swift/tree/main/Examples" openInNewTab="true" />
  <LinkButton text="Packages" link="https://github.com/momentohq/client-sdk-swift/releases" openInNewTab="true" />
  <LinkButton text="Source Code" link="https://github.com/momentohq/client-sdk-swift" openInNewTab="true" />
</div>
```

### Kotlin SDK (Android)

Build native Android applications using the Momento Kotlin SDK.

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Overview" link="/sdks/kotlin"/>
  <LinkButton text="Cache" link="/sdks/kotlin/cache.html"/>
  <LinkButton text="Topics" link="/sdks/kotlin/topics.html"/>
  <LinkButton text="Examples" link="https://github.com/momentohq/client-sdk-kotlin/blob/main/examples/README.md" openInNewTab="true" />
  <LinkButton text="Packages" link="https://central.sonatype.com/artifact/software.momento.kotlin/sdk" openInNewTab="true" />
  <LinkButton text="Source Code" link="https://github.com/momentohq/client-sdk-kotlin" openInNewTab="true" />
</div>
```

### Dart SDK (Flutter)

Use Momento Cache and Topics in your Flutter applications, allowing you to target browser, iOS, and Android with a single code base.

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Overview" link="/sdks/dart"/>
  <LinkButton text="Cache" link="/sdks/dart/cache.html"/>
  <LinkButton text="Topics" link="/sdks/dart/topics.html"/>
  <LinkButton text="Examples" link="https://github.com/momentohq/client-sdk-dart/tree/main/example" openInNewTab="true" />
  <LinkButton text="Packages" link="https://pub.dev/packages/momento" openInNewTab="true" />
  <LinkButton text="Source Code" link="https://github.com/momentohq/client-sdk-dart" openInNewTab="true" />
</div>
```

## Server-Side SDKs

Momento server-side SDKs allow you to take advantage of Momento's low-latency Cache and Topics services from your back-end application. The Momento clients are tuned to provide the best possible performance and throughput while requiring far fewer TCP connections than many other cache client libraries.

### Node.js SDK

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Overview" link="/sdks/nodejs"/>
  <LinkButton text="Cache" link="/sdks/nodejs/cache.html"/>
  <LinkButton text="Topics" link="/sdks/nodejs/topics.html"/>
  <LinkButton text="Vector Index" link="/sdks/nodejs/vector-index.html"/>
  <LinkButton text="Examples" link="https://github.com/momentohq/client-sdk-nodejs/tree/main/examples/nodejs" openInNewTab="true" />
  <LinkButton text="Packages" link="https://www.npmjs.com/package/@gomomento/sdk" openInNewTab="true" />
  <LinkButton text="Source Code" link="https://github.com/momentohq/client-sdk-javascript" openInNewTab="true" />
</div>
```

### .NET SDK (C#)

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Overview" link="/sdks/dotnet"/>
  <LinkButton text="Cache" link="/sdks/dotnet/cache.html"/>
  <LinkButton text="Topics" link="/sdks/dotnet/topics.html"/>
  <LinkButton text="Examples" link="https://github.com/momentohq/client-sdk-dotnet/tree/main/examples" openInNewTab="true" />
  <LinkButton text="Packages" link="https://www.nuget.org/packages/Momento.Sdk" openInNewTab="true" />
  <LinkButton text="Source Code" link="https://github.com/momentohq/client-sdk-dotnet" openInNewTab="true" />
</div>
```

### Python SDK

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Overview" link="/sdks/python"/>
  <LinkButton text="Cache" link="/sdks/python/cache.html"/>
  <LinkButton text="Topics" link="/sdks/python/topics.html"/>
  <LinkButton text="Vector Index" link="/sdks/python/vector-index.html"/>
  <LinkButton text="Examples" link="https://github.com/momentohq/client-sdk-python/tree/main/examples" openInNewTab="true" />
  <LinkButton text="Packages" link="https://pypi.org/project/momento/" openInNewTab="true" />
  <LinkButton text="Source Code" link="https://github.com/momentohq/client-sdk-python" openInNewTab="true" />
</div>
```

### Java SDK

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Overview" link="/sdks/java"/>
  <LinkButton text="Cache" link="/sdks/java/cache.html"/>
  <LinkButton text="Topics" link="/sdks/java/topics.html"/>
  <LinkButton text="Examples" link="https://github.com/momentohq/client-sdk-java/tree/main/examples" openInNewTab="true" />
  <LinkButton text="Packages" link="https://central.sonatype.com/artifact/software.momento.kotlin/sdk" openInNewTab="true" />
  <LinkButton text="Source Code" link="https://github.com/momentohq/client-sdk-java" openInNewTab="true" />
</div>
```

### Kotlin SDK (JVM)

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Overview" link="/sdks/kotlin"/>
  <LinkButton text="Cache" link="/sdks/kotlin/cache.html"/>
  <LinkButton text="Topics" link="/sdks/kotlin/topics.html"/>
  <LinkButton text="Examples" link="https://github.com/momentohq/client-sdk-kotlin/blob/main/examples/README.md" openInNewTab="true" />
  <LinkButton text="Packages" link="https://central.sonatype.com/artifact/software.momento.kotlin/sdk" openInNewTab="true" />
  <LinkButton text="Source Code" link="https://github.com/momentohq/client-sdk-kotlin" openInNewTab="true" />
</div>
```

### Go SDK

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Overview" link="/sdks/go"/>
  <LinkButton text="Cache" link="/sdks/go/cache.html"/>
  <LinkButton text="Topics" link="/sdks/go/topics.html"/>
  <LinkButton text="Examples" link="https://github.com/momentohq/client-sdk-go/blob/main/examples/README.md" openInNewTab="true" />
  <LinkButton text="Packages" link="https://github.com/momentohq/client-sdk-go/releases" openInNewTab="true" />
  <LinkButton text="Source Code" link="https://github.com/momentohq/client-sdk-go" openInNewTab="true" />  
</div>
```

### PHP SDK

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Overview" link="/sdks/php"/>
  <LinkButton text="Cache" link="/sdks/php/cache.html"/>
  <LinkButton text="Examples" link="https://github.com/momentohq/client-sdk-php/blob/main/examples" openInNewTab="true" />
  <LinkButton text="Packages" link="https://packagist.org/packages/momentohq/client-sdk-php" openInNewTab="true" />
  <LinkButton text="Source Code" link="https://github.com/momentohq/client-sdk-php" openInNewTab="true" />
</div>
```

### Elixir SDK

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Overview" link="/sdks/elixir"/>
  <LinkButton text="Cache" link="/sdks/elixir/cache.html"/>
  <LinkButton text="Examples" link="https://github.com/momentohq/client-sdk-elixir/blob/main/examples" openInNewTab="true" />
  <LinkButton text="Packages" link="https://hex.pm/packages/gomomento" openInNewTab="true" />
  <LinkButton text="Source Code" link="https://github.com/momentohq/client-sdk-elixir" openInNewTab="true" />
</div>
```

### Rust SDK

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Overview" link="/sdks/rust"/>
  <LinkButton text="Examples" link="https://github.com/momentohq/client-sdk-rust/blob/main/example" openInNewTab="true" />
  <LinkButton text="Packages" link="https://crates.io/crates/momento" openInNewTab="true" />
  <LinkButton text="Source Code" link="https://github.com/momentohq/client-sdk-rust" openInNewTab="true" />
</div>
```

### Ruby SDK

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Overview" link="/sdks/ruby"/>
  <LinkButton text="Examples" link="https://github.com/momentohq/client-sdk-ruby/blob/main/examples" openInNewTab="true" />
  <LinkButton text="Packages" link="https://rubygems.org/gems/momento" openInNewTab="true" />
  <LinkButton text="Source Code" link="https://github.com/momentohq/client-sdk-ruby" openInNewTab="true" />
</div>
```
