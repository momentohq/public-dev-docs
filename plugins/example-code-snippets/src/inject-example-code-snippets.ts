import visit from 'unist-util-visit';
// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import * as unist from 'unist';
import {
  ExampleLanguage,
  exampleLanguage,
  ExampleSnippetId,
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
    if (value.startsWith('<SdkExampleCodeBlock')) {
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
      if (value.startsWith('<SdkExampleSnippets')) {
        replaceValueWithExampleTabs(literal);
      } else if (value.startsWith('<SdkExampleCodeBlock')) {
        replaceValueWithExampleCodeBlock(literal);
      }
    });
  }
  return transformer;
}

function replaceValueWithExampleTabs(literal: unist.Literal): void {
  const value = literal.value as string;
  const snippetIdAttr = value.match(/snippetId={'([^']+)'}/m)?.[1];
  if (snippetIdAttr === undefined) {
    console.log(
      `Unable to find "snippetId={'xxx'}" attribute on jsx tag:\n${value}`
    );
    return;
  }
  const snippetId = exampleSnippetId(snippetIdAttr);

  literal.value = `<SdkExampleSnippetTabs
  js={\`${snippetForLanguage(ExampleLanguage.JAVASCRIPT, snippetId)}\`}
  python={\`${snippetForLanguage(ExampleLanguage.PYTHON, snippetId)}\`}
  java={\`${snippetForLanguage(ExampleLanguage.JAVA, snippetId)}\`}
  go={\`${snippetForLanguage(ExampleLanguage.GO, snippetId)}\`}
  csharp={\`${snippetForLanguage(ExampleLanguage.CSHARP, snippetId)}\`}
  rust={\`${snippetForLanguage(ExampleLanguage.RUST, snippetId)}\`}
  ruby={\`${snippetForLanguage(ExampleLanguage.RUBY, snippetId)}\`}
  cli={\`${snippetForLanguage(ExampleLanguage.CLI, snippetId)}\`}
/>
`;
}

function replaceValueWithExampleCodeBlock(literal: unist.Literal): void {
  const value = literal.value as string;

  const snippetLanguageAttr = value.match(/language={'([^']+)'}/m)?.[1];
  if (snippetLanguageAttr === undefined) {
    console.log(
      `Unable to find "language={'xxx'}" attribute on jsx tag:\n${value}`
    );
    return;
  }
  const language = exampleLanguage(snippetLanguageAttr);

  const snippetIdAttr = value.match(/snippetId={'([^']+)'}/m)?.[1];
  const filename = value.match(/file={'([^']+)'}/m)?.[1];
  if (snippetIdAttr === undefined && filename === undefined) {
    console.log(
      `Unable to find "snippetId={'xxx'}" or "file={'xxx'}" attribute on jsx tag:\n${value}`
    );
    return;
  }
  if (snippetIdAttr !== undefined && filename !== undefined) {
    console.log(
      `Providing both "snippetId={'xxx'}" and "file={'xxx'}" attribute on jsx tag is not supported:\n${value}`
    );
    return;
  }
  if (snippetIdAttr !== undefined) {
    const snippetId = exampleSnippetId(snippetIdAttr);
    const snippet = snippetForLanguage(language, snippetId);
    literal.value = `<SdkExampleCodeBlockImpl language={'${language}'} code={\`${snippet}\`}/>`;
  } else if (filename !== undefined) {
    const snippet = fileContentsForLanguage(language, filename);
    literal.value = `<SdkExampleCodeBlockImpl language={'${language}'} code={\`${snippet}\`}/>`;
  }
}

function snippetForLanguage(
  language: ExampleLanguage,
  snippetId: ExampleSnippetId
): string {
  return (
    SNIPPET_RESOLVER.resolveSnippet(
      exampleLanguage(language),
      exampleSnippetType('code'),
      snippetId
    ) ?? ''
  ).replace(/[\\`$]/g, '\\$&');
}

function fileContentsForLanguage(
  language: ExampleLanguage,
  file: string
): string {
  return (SNIPPET_RESOLVER.getFileContent(language, file) ?? '').replace(
    /[\\`$]/g,
    '\\$&'
  );
}

module.exports = plugin;
