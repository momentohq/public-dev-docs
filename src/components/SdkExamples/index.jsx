import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import React from 'react';

export const SdkExamples = ({js, python, java, go, csharp, rust, ruby, cli}) => (
    <Tabs>
        <TabItem value="js" label="JavaScript">
            <CodeBlock language={'js'}>{js}</CodeBlock>
        </TabItem>
        <TabItem value="python" label="Python">
            <CodeBlock language={'python'}>{python}</CodeBlock>
        </TabItem>
        <TabItem value="java" label="Java">
            <CodeBlock language={'java'}>{java}</CodeBlock>
        </TabItem>
        <TabItem value="go" label="Go">
            <CodeBlock language={'go'}>{go}</CodeBlock>
        </TabItem>
        <TabItem value="csharp" label="C#">
            <CodeBlock language={'csharp'}>{csharp}</CodeBlock>
        </TabItem>
        <TabItem value="rust" label="Rust">
            <CodeBlock language={'rust'}>{rust}</CodeBlock>
        </TabItem>
        <TabItem value="ruby" label="Ruby">
            <CodeBlock language={'ruby'}>{ruby}</CodeBlock>
        </TabItem>
        <TabItem value="cli" label="CLI">
            <CodeBlock language={'cli'}>{cli}</CodeBlock>
        </TabItem>
    </Tabs>
);
