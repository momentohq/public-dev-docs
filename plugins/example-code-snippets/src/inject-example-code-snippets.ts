import visit from 'unist-util-visit';
// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import * as unist from 'unist';
import {SNIPPET_RESOLVER} from './examples/snippet-resolver';
import {exampleLanguage, exampleSnippetType} from './examples/examples';

function markdownNodeContainsExampleSnippets<T extends unist.Node>(
  node: unknown
): node is T {
  const unistNode = node as unist.Node;
  if (unistNode.type === 'text' || unistNode.type === 'code') {
    const literal = unistNode as unist.Literal;
    const value = literal.value as string;
    if (value.includes('%%%example:')) {
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

      literal.value = value.replace(
        /%%%([^%]*)%%%/g,
        (match: string, exampleId: string) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const [_, language, snippetType, snippetId] = exampleId.split(':');
          return SNIPPET_RESOLVER.resolveSnippet(
            exampleLanguage(language),
            exampleSnippetType(snippetType),
            snippetId
          );
        }
      );
    });
  }
  return transformer;
}

module.exports = plugin;
