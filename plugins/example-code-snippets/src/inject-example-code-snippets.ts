import visit from 'unist-util-visit';
// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import * as unist from 'unist';
import {
  ExampleLanguage,
  exampleLanguage,
  exampleSnippetId,
  exampleSnippetType,
} from './examples/examples';
import {SNIPPET_RESOLVER} from './examples/resolvers/default-snippet-resolver';

function markdownNodeContainsExampleSnippets<T extends unist.Node>(
  node: unknown
): node is T {
  const unistNode = node as unist.Node;
  if (unistNode.type === 'jsx') {
    const literal = unistNode as unist.Literal;
    const value = literal.value as string;
    if (value.startsWith('<SdkExampleSnippets')) {
      return true;
    }
  }
  return false;
}

/**
 * This is a docusaurus MDX/remark plugin.  It finds <SdkExampleSnippets> in the markdown
 * source, and replaces them with <SdkExampleSnippetTabs> tags that are populated with the
 * example code snippets pulled in from the SDK repos.
 *
 * @param options
 * @returns {unknown}
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function plugin(options: unknown): unknown {
  function transformer(tree: unist.Node) {
    visit(tree, markdownNodeContainsExampleSnippets, node => {
      const literal = node as unist.Literal;
      const value = literal.value as string;

      const snippetIdAttr = value.match(/snippetId={'([^']+)'}/m)?.[1];
      if (snippetIdAttr === undefined) {
        console.log(
          `Unable to find "snippetId={'xxx'}" attribute on jsx tag:\n${value}`
        );
        return;
      }
      const snippetId = exampleSnippetId(snippetIdAttr);
      const snippetForLanguage = (language: ExampleLanguage) =>
        (
          SNIPPET_RESOLVER.resolveSnippet(
            exampleLanguage(language),
            exampleSnippetType('code'),
            snippetId
          ) ?? ''
        ).replace(/[\\`$]/g, '\\$&');

      const sdkExamplesValue = `<SdkExampleSnippetTabs
  js={\`${snippetForLanguage(ExampleLanguage.JAVASCRIPT)}\`}
  python={\`${snippetForLanguage(ExampleLanguage.PYTHON)}\`}
  java={\`${snippetForLanguage(ExampleLanguage.JAVA)}\`}
  go={\`${snippetForLanguage(ExampleLanguage.GO)}\`}
  csharp={\`${snippetForLanguage(ExampleLanguage.CSHARP)}\`}
  rust={\`${snippetForLanguage(ExampleLanguage.RUST)}\`}
  ruby={\`${snippetForLanguage(ExampleLanguage.RUBY)}\`}
  cli={\`${snippetForLanguage(ExampleLanguage.CLI)}\`}
/>
`;
      literal.value = sdkExamplesValue;
    });
  }
  return transformer;
}

module.exports = plugin;
