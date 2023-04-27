import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import React from 'react';
import {SNIPPET_RESOLVER} from '../../../plugins/example-code-snippets/dist/examples/snippet-resolver';
import {
  ExampleLanguage,
  ExampleSnippetType,
  languageDisplayName
} from '../../../plugins/example-code-snippets/dist/examples/examples';


/**
 * This component will render a tab view with example snippets for each language.
 *
 * If an example snippet is not found for a given language, the tab for that language will not be rendered.
 *
 * @param snippetId
 * @returns {JSX.Element}
 * @constructor
 */
export const SdkExampleSnippets = ({snippetId}) => {
  const snippetResolver = SNIPPET_RESOLVER;

  return (
    <Tabs>
      {Object.values(ExampleLanguage).map(l => {
        const snippet = snippetResolver.resolveSnippet(l, ExampleSnippetType.CODE, snippetId);
        if (snippet) {
          return (<TabItem value={l} label={languageDisplayName(l)}>
            <CodeBlock language={l}>{snippet}</CodeBlock>
          </TabItem>)
        }
      })}
    </Tabs>
  );
}
