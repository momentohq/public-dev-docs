---
displayed_sidebar: platformSidebar
sidebar_position: 1
sidebar_label: Overview
title: SDKs
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

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Node.js" link="/platform/sdks/nodejs" imgSrc="/img/momento-sdk-icons/nodejs.svg" altText="Node.js Icon"/>
  <LinkButton text=".NET" link="/platform/sdks/dotnet" imgSrc="/img/momento-sdk-icons/dotnet.svg" altText=".NET Icon"/>
  <LinkButton text="Python" link="/platform/sdks/python" imgSrc="/img/momento-sdk-icons/python.svg" altText="Python Icon"/>
  <LinkButton text="Java" link="/platform/sdks/java" imgSrc="/img/momento-sdk-icons/java.svg" altText="Java Icon"/>
  <LinkButton text="Kotlin" link="/platform/sdks/kotlin" imgSrc="/img/momento-sdk-icons/kotlin.svg" altText="Kotlin Icon"/>
  <LinkButton text="Go" link="/platform/sdks/go" imgSrc="/img/momento-sdk-icons/go.svg" altText="Go Icon"/>
  <LinkButton text="PHP" link="/platform/sdks/php" imgSrc="/img/momento-sdk-icons/php.svg" altText="PHP Icon"/>
  <LinkButton text="Elixir" link="/platform/sdks/elixir" imgSrc="/img/momento-sdk-icons/elixer.svg" altText="Elixir Icon"/>
  <LinkButton text="Rust" link="/platform/sdks/rust" imgSrc="/img/momento-sdk-icons/rust.svg" altText="Rust Icon"/>
  <LinkButton text="Ruby" link="/platform/sdks/ruby" imgSrc="/img/momento-sdk-icons/ruby.svg" altText="Ruby Icon"/>
</div>
```


## Client-side SDKs

Momento client-side SDKs allow you to interact with Momento Cache and Momento Topics directly from your web or mobile application; no server-side infrastructure required! Create chat applications and other messaging features that allow your clients to communicate with one another with only a few lines of code!

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Unity SDK" link="/platform/sdks/unity" imgSrc="/img/momento-sdk-icons/unity-sdk.svg" altText="Unity"/>
  <LinkButton text="Unreal" link="/platform/sdks/unreal" imgSrc="/img/momento-sdk-icons/unreal.svg" altText="Unreal" isAlpha={true}/>
  <LinkButton text="Web SDK" link="/platform/sdks/web" imgSrc="/img/momento-sdk-icons/web-sdk.svg" altText="Web Icon"/>
  <LinkButton text="Swift SDK" link="/platform/sdks/swift" imgSrc="/img/momento-sdk-icons/ios.svg" altText="iOS Icon"/>
  <LinkButton text="Kotlin SDK" link="/platform/sdks/kotlin" imgSrc="/img/momento-sdk-icons/android.svg" altText="Android Icon"/>
  <LinkButton text="Dart SDK" link="/platform/sdks/dart" imgSrc="/img/momento-sdk-icons/flutter-dart.svg" altText="Flutter Icon"/>
</div>
```

### Web SDK (Browser)

The Momento Web SDK allows you to create rich browser applications in TypeScript or JavaScript.

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Overview" link="/platform/sdks/web"/>
  <LinkButton text="Style Guide" link="/platform/sdks/nodejs/style-guide.html"/>
  <LinkButton text="Cache" link="/platform/sdks/nodejs/cache.html"/>
  <LinkButton text="Topics" link="/platform/sdks/nodejs/topics.html"/>
  <LinkButton text="Storage" link="/platform/sdks/nodejs/storage.html"/>
  <LinkButton text="API Tokens" link="/platform/sdks/web#credentials-for-browsers"/>
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
  <LinkButton text="Overview" link="/platform/sdks/swift"/>
  <LinkButton text="Cache" link="/platform/sdks/swift/cache.html"/>
  <LinkButton text="Topics" link="/platform/sdks/swift/topics.html"/>
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
  <LinkButton text="Overview" link="/platform/sdks/kotlin"/>
  <LinkButton text="Cache" link="/platform/sdks/kotlin/cache.html"/>
  <LinkButton text="Topics" link="/platform/sdks/kotlin/topics.html"/>
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
  <LinkButton text="Overview" link="/platform/sdks/dart"/>
  <LinkButton text="Cache" link="/platform/sdks/dart/cache.html"/>
  <LinkButton text="Topics" link="/platform/sdks/dart/topics.html"/>
  <LinkButton text="Examples" link="https://github.com/momentohq/client-sdk-dart/tree/main/example" openInNewTab="true" />
  <LinkButton text="Packages" link="https://pub.dev/packages/momento" openInNewTab="true" />
  <LinkButton text="Source Code" link="https://github.com/momentohq/client-sdk-dart" openInNewTab="true" />
</div>
```

### Unity (C#)

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Overview" link="/platform/sdks/unity"/>
</div>
```

### Unreal (C++)

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Overview" link="/platform/sdks/unreal"/>
</div>
```

## Server-side SDKs

Momento server-side SDKs allow you to take advantage of Momento's low-latency Cache and Topics services from your back-end application. The Momento clients are tuned to provide the best possible performance and throughput while requiring far fewer TCP connections than many other cache client libraries.

### Node.js SDK

```mdx-code-block
<div style={{
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px'
}}>
  <LinkButton text="Overview" link="/platform/sdks/nodejs"/>
  <LinkButton text="Style Guide" link="/platform/sdks/nodejs/style-guide.html"/>
  <LinkButton text="Cache" link="/platform/sdks/nodejs/cache.html"/>
  <LinkButton text="Topics" link="/platform/sdks/nodejs/topics.html"/>
  <LinkButton text="Storage" link="/platform/sdks/nodejs/storage.html"/>
  <LinkButton text="Compression" link="/platform/sdks/nodejs/compression.html"/>
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
  <LinkButton text="Overview" link="/platform/sdks/dotnet"/>
  <LinkButton text="Cache" link="/platform/sdks/dotnet/cache.html"/>
  <LinkButton text="Topics" link="/platform/sdks/dotnet/topics.html"/>
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
  <LinkButton text="Overview" link="/platform/sdks/python"/>
  <LinkButton text="Cache" link="/platform/sdks/python/cache.html"/>
  <LinkButton text="Topics" link="/platform/sdks/python/topics.html"/>
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
  <LinkButton text="Overview" link="/platform/sdks/java"/>
  <LinkButton text="Cache" link="/platform/sdks/java/cache.html"/>
  <LinkButton text="Topics" link="/platform/sdks/java/topics.html"/>
  <LinkButton text="Storage" link="/platform/sdks/java/storage.html"/>
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
  <LinkButton text="Overview" link="/platform/sdks/kotlin"/>
  <LinkButton text="Cache" link="/platform/sdks/kotlin/cache.html"/>
  <LinkButton text="Topics" link="/platform/sdks/kotlin/topics.html"/>
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
  <LinkButton text="Overview" link="/platform/sdks/go"/>
  <LinkButton text="Cache" link="/platform/sdks/go/cache.html"/>
  <LinkButton text="Topics" link="/platform/sdks/go/topics.html"/>
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
  <LinkButton text="Overview" link="/platform/sdks/php"/>
  <LinkButton text="Cache" link="/platform/sdks/php/cache.html"/>
  <LinkButton text="Storage" link="/platform/sdks/php/storage.html"/>
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
  <LinkButton text="Overview" link="/platform/sdks/elixir"/>
  <LinkButton text="Cache" link="/platform/sdks/elixir/cache.html"/>
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
  <LinkButton text="Overview" link="/platform/sdks/rust"/>
  <LinkButton text="Cache" link="/platform/sdks/rust/cache.html"/>
  <LinkButton text="Topics" link="/platform/sdks/rust/topics.html"/>
  <LinkButton text="Storage" link="/platform/sdks/rust/storage.html"/>
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
  <LinkButton text="Overview" link="/platform/sdks/ruby"/>
  <LinkButton text="Examples" link="https://github.com/momentohq/client-sdk-ruby/blob/main/examples" openInNewTab="true" />
  <LinkButton text="Packages" link="https://rubygems.org/gems/momento" openInNewTab="true" />
  <LinkButton text="Source Code" link="https://github.com/momentohq/client-sdk-ruby" openInNewTab="true" />
</div>
```
