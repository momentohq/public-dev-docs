import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import React from 'react';
import Admonition from '@theme/Admonition';

const docsExamplesFiles = {
  js: 'https://github.com/momentohq/client-sdk-javascript/blob/main/examples/nodejs/cache/doc-example-files/doc-examples-js-apis.ts',
  python: 'https://github.com/momentohq/client-sdk-python/blob/main/examples/py310/doc-examples-python-apis.py',
  java: 'https://github.com/momentohq/client-sdk-java/blob/main/examples/cache/src/main/java/momento/client/example/doc_examples/DocExamplesJavaAPIs.java',
  kotlin: 'https://github.com/momentohq/client-sdk-kotlin/blob/main/examples/src/main/kotlin/software/momento/example/doc_examples/DocExamples.kt',
  go: 'https://github.com/momentohq/client-sdk-go/blob/main/examples/docs-examples/main.go',
  csharp: 'https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/DocExampleApis/Program.cs',
  php: 'https://github.com/momentohq/client-sdk-php/blob/main/examples/doc-examples-php-apis.php',
  rust: 'https://github.com/momentohq/client-sdk-rust/blob/main/example/rust/src/docs_examples/docs_examples.rs',
  elixir: 'https://github.com/momentohq/client-sdk-elixir/blob/main/examples/doc_examples.exs',
  swift: 'https://github.com/momentohq/client-sdk-swift/blob/main/Examples/doc-example-apis/Sources/main.swift',
  dart: 'https://github.com/momentohq/client-sdk-dart/blob/main/example/doc_example_apis/bin/doc_example_apis.dart',
  // Ruby and CLI do not appear to have docs example files
}

/**
 * This component isn't intended to be used directly (though there is no issue with doing
 * so).  It is primarily intended to be used by including instances of `SdkExampleTabs`
 * in a mdx file and then allowing the `inject-exacmple-code-snippets` plugin to replace
 * it with an instance of this component, populated with snippets for all available languages
 * by looking the snippet source code up in the SDK repos.
 *
 * @param js
 * @param python
 * @param java
 * @param kotlin
 * @param go
 * @param csharp
 * @param php
 * @param rust
 * @param ruby
 * @param elixir
 * @param swift
 * @param dart
 * @param cli
 * @returns {JSX.Element|null}
 * @constructor
 */
export const SdkExampleTabsImpl = ({js, python, java, kotlin, go, csharp, php, rust, ruby, elixir, swift, dart, cli}) => {
  if (js || python || java || kotlin || go || csharp || php || rust || ruby || elixir || swift || dart || cli) {
    return (
  <Tabs>
    {js &&
      <TabItem value="js" label="JavaScript">
        <CodeBlock language={'js'}>{js}</CodeBlock>
        <Admonition type="info">
        Full example code and imports can be found <a href={docsExamplesFiles.js} target="_blank" rel="noopener noreferrer">here</a>
        </Admonition>
      </TabItem>}
    {python &&
      <TabItem value="python" label="Python">
        <CodeBlock language={'python'}>{python}</CodeBlock>
        <Admonition type="info">
        Full example code and imports can be found <a href={docsExamplesFiles.python} target="_blank" rel="noopener noreferrer">here</a>
        </Admonition>
      </TabItem>}
    {java &&
      <TabItem value="java" label="Java">
        <CodeBlock language={'java'}>{java}</CodeBlock>
        <Admonition type="info">
        Full example code and imports can be found <a href={docsExamplesFiles.java} target="_blank" rel="noopener noreferrer">here</a>
        </Admonition>
      </TabItem>}
    {kotlin &&
        <TabItem value="kotlin" label="Kotlin">
          <CodeBlock language={'kotlin'}>{kotlin}</CodeBlock>
          <Admonition type="info">
        Full example code and imports can be found <a href={docsExamplesFiles.kotlin} target="_blank" rel="noopener noreferrer">here</a>
        </Admonition>
        </TabItem>}
    {go &&
      <TabItem value="go" label="Go">
        <CodeBlock language={'go'}>{go}</CodeBlock>
        <Admonition type="info">
        Full example code and imports can be found <a href={docsExamplesFiles.go} target="_blank" rel="noopener noreferrer">here</a>
        </Admonition>
      </TabItem>}
    {csharp &&
      <TabItem value="csharp" label="C#">
        <CodeBlock language={'csharp'}>{csharp}</CodeBlock>
        <Admonition type="info">
        Full example code and imports can be found <a href={docsExamplesFiles.csharp} target="_blank" rel="noopener noreferrer">here</a>
        </Admonition>
      </TabItem>}
    {php &&
      <TabItem value="php" label="PHP">
        <CodeBlock language={'php'}>{php}</CodeBlock>
        <Admonition type="info">
        Full example code and imports can be found <a href={docsExamplesFiles.php} target="_blank" rel="noopener noreferrer">here</a>
        </Admonition>
      </TabItem>}
    {rust &&
      <TabItem value="rust" label="Rust">
        <CodeBlock language={'rust'}>{rust}</CodeBlock>
        <Admonition type="info">
        Full example code and imports can be found <a href={docsExamplesFiles.rust} target="_blank" rel="noopener noreferrer">here</a>
        </Admonition>
      </TabItem>}
    {ruby &&
      <TabItem value="ruby" label="Ruby">
        <CodeBlock language={'ruby'}>{ruby}</CodeBlock>
      </TabItem>}
    {elixir &&
        <TabItem value="elixir" label="Elixir">
          <CodeBlock language={'elixir'}>{elixir}</CodeBlock>
          <Admonition type="info">
        Full example code and imports can be found <a href={docsExamplesFiles.elixir} target="_blank" rel="noopener noreferrer">here</a>
        </Admonition>
        </TabItem>}
    {swift &&
        <TabItem value="swift" label="Swift">
          <CodeBlock language={'swift'}>{swift}</CodeBlock>
          <Admonition type="info">
        Full example code and imports can be found <a href={docsExamplesFiles.swift} target="_blank" rel="noopener noreferrer">here</a>
        </Admonition>
        </TabItem>}
    {dart &&
        <TabItem value="dart" label="Dart">
           <CodeBlock language={'dart'}>{dart}</CodeBlock>
           <Admonition type="info">
        Full example code and imports can be found <a href={docsExamplesFiles.dart} target="_blank" rel="noopener noreferrer">here</a>
        </Admonition>
        </TabItem>}
    {cli &&
      <TabItem value="cli" label="CLI">
        <CodeBlock language={'cli'}>{cli}</CodeBlock>
      </TabItem>}
  </Tabs>
    );
  } else {
    return null;
  }
}

