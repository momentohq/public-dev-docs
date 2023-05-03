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
 * This is a docusaurus MDX/remark plugin.  It finds markers in the markdown
 * source, in 'text' or 'code' blocks, and injects example snippets into the
 * content in their place.
 *
 * The markers are delimited by 3 percent signs; here is an example:
 *
 * %%%example:typescript:code:API_Set%%%
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      node.value = sdkExamplesValue;
    });
  }
  return transformer;
}

module.exports = plugin;
