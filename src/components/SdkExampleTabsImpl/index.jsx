import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import React from 'react';

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
 * @param go
 * @param csharp
 * @param php
 * @param rust
 * @param ruby
 * @param cli
 * @returns {JSX.Element|null}
 * @constructor
 */
export const SdkExampleTabsImpl = ({js, python, java, go, csharp, php, rust, ruby, cli}) => {
  if (js || python || java || go || csharp || php || rust || ruby || cli) {
    return (
  <Tabs>
    {js &&
      <TabItem value="js" label="JavaScript">
        <CodeBlock language={'js'}>{js}</CodeBlock>
      </TabItem>}
    {python &&
      <TabItem value="python" label="Python">
        <CodeBlock language={'python'}>{python}</CodeBlock>
      </TabItem>}
    {java &&
      <TabItem value="java" label="Java">
        <CodeBlock language={'java'}>{java}</CodeBlock>
      </TabItem>}
    {go &&
      <TabItem value="go" label="Go">
        <CodeBlock language={'go'}>{go}</CodeBlock>
      </TabItem>}
    {csharp &&
      <TabItem value="csharp" label="C#">
        <CodeBlock language={'csharp'}>{csharp}</CodeBlock>
      </TabItem>}
    {php &&
      <TabItem value="php" label="PHP">
        <CodeBlock language={'php'}>{php}</CodeBlock>
      </TabItem>}
    {rust &&
      <TabItem value="rust" label="Rust">
        <CodeBlock language={'rust'}>{rust}</CodeBlock>
      </TabItem>}
    {ruby &&
      <TabItem value="ruby" label="Ruby">
        <CodeBlock language={'ruby'}>{ruby}</CodeBlock>
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

