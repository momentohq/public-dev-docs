import visit from 'unist-util-visit';
// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import * as unist from 'unist';
import {
  ExampleLanguage,
  exampleLanguage,
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
    if (value.startsWith('<SdkExampleTabs')) {
      return true;
    }
    if (value.startsWith('<SdkExampleCodeBlock')) {
      return true;
    }
    if (value.startsWith('<SdkExampleFileTabs')) {
      return true;
    }
  }
  return false;
}

/**
 * This is a docusaurus MDX/remark plugin.  It finds <SdkExampleTabs> in the markdown
 * source, and replaces them with <SdkExampleTabsImpl> tags that are populated with the
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
      if (value.startsWith('<SdkExampleTabs')) {
        replaceValueWithExampleTabs(literal);
      } else if (value.startsWith('<SdkExampleCodeBlock')) {
        replaceValueWithExampleCodeBlock(literal);
      } else if (value.startsWith('<SdkExampleFileTabs')) {
        replaceValueWithExampleFileTabs(literal);
      }
    });
  }
  return transformer;
}

function replaceValueWithExampleTabs(literal: unist.Literal): void {
  const value = literal.value as string;
  const snippetId = value.match(/snippetId={'([^']+)'}/m)?.[1];
  if (snippetId === undefined) {
    console.log(
      `Unable to find "snippetId={'xxx'}" attribute on jsx tag:\n${value}`
    );
    return;
  }

  literal.value = `<SdkExampleTabsImpl
  js={\`${snippetForLanguage(ExampleLanguage.JAVASCRIPT, snippetId)}\`}
  python={\`${snippetForLanguage(ExampleLanguage.PYTHON, snippetId)}\`}
  java={\`${snippetForLanguage(ExampleLanguage.JAVA, snippetId)}\`}
  kotlin={\`${snippetForLanguage(ExampleLanguage.KOTLIN, snippetId)}\`}
  go={\`${snippetForLanguage(ExampleLanguage.GO, snippetId)}\`}
  csharp={\`${snippetForLanguage(ExampleLanguage.CSHARP, snippetId)}\`}
  php={\`${snippetForLanguage(ExampleLanguage.PHP, snippetId)}\`}
  rust={\`${snippetForLanguage(ExampleLanguage.RUST, snippetId)}\`}
  ruby={\`${snippetForLanguage(ExampleLanguage.RUBY, snippetId)}\`}
  elixir={\`${snippetForLanguage(ExampleLanguage.ELIXIR, snippetId)}\`}
  swift={\`${snippetForLanguage(ExampleLanguage.SWIFT, snippetId)}\`}
  dart={\`${snippetForLanguage(ExampleLanguage.DART, snippetId)}\`}
  cli={\`${snippetForLanguage(ExampleLanguage.CLI, snippetId)}\`}
/>
`;
}

function replaceValueWithExampleFileTabs(literal: unist.Literal): void {
  const value = literal.value as string;
  literal.value = `<SdkExampleFileTabsImpl
    js={\`${fileTabContentsForLanguage(value, ExampleLanguage.JAVASCRIPT)}\`}
    python={\`${fileTabContentsForLanguage(value, ExampleLanguage.PYTHON)}\`}
    java={\`${fileTabContentsForLanguage(value, ExampleLanguage.JAVA)}\`}
    kotlin={\`${fileTabContentsForLanguage(value, ExampleLanguage.KOTLIN)}\`}
    go={\`${fileTabContentsForLanguage(value, ExampleLanguage.GO)}\`}
    csharp={\`${fileTabContentsForLanguage(value, ExampleLanguage.CSHARP)}\`}
    php={\`${fileTabContentsForLanguage(value, ExampleLanguage.PHP)}\`}
    rust={\`${fileTabContentsForLanguage(value, ExampleLanguage.RUST)}\`}
    ruby={\`${fileTabContentsForLanguage(value, ExampleLanguage.RUBY)}\`}
    elixir={\`${fileTabContentsForLanguage(value, ExampleLanguage.ELIXIR)}\`}
    swift={\`${fileTabContentsForLanguage(value, ExampleLanguage.SWIFT)}\`}
    dart={\`${fileTabContentsForLanguage(value, ExampleLanguage.DART)}\`}
    cli={\`${fileTabContentsForLanguage(value, ExampleLanguage.CLI)}\`}
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

  const snippetId = value.match(/snippetId={'([^']+)'}/m)?.[1];
  const filename = value.match(/file={'([^']+)'}/m)?.[1];
  if (snippetId === undefined && filename === undefined) {
    console.log(
      `Unable to find "snippetId={'xxx'}" or "file={'xxx'}" attribute on jsx tag:\n${value}`
    );
    return;
  }
  if (snippetId !== undefined && filename !== undefined) {
    console.log(
      `Providing both "snippetId={'xxx'}" and "file={'xxx'}" attribute on jsx tag is not supported:\n${value}`
    );
    return;
  }
  if (snippetId !== undefined) {
    const snippet = snippetForLanguage(language, snippetId);
    literal.value = `<SdkExampleCodeBlockImpl language={'${language}'} code={\`${snippet}\`}/>`;
  } else if (filename !== undefined) {
    const snippet = fileContentsForLanguage(language, filename);
    literal.value = `<SdkExampleCodeBlockImpl language={'${language}'} code={\`${snippet}\`}/>`;
  }
}

function snippetForLanguage(
  language: ExampleLanguage,
  snippetId: string
): string {
  return (
    SNIPPET_RESOLVER.resolveSnippet(
      exampleLanguage(language),
      exampleSnippetType('code'),
      snippetId
    ) ?? ''
  ).replace(/[\\`$]/g, '\\$&');
}

function fileTabContentsForLanguage(
  tagValue: string,
  language: ExampleLanguage
): string {
  const re = new RegExp(`${language}={'([^']+)'}`, 'm');
  const filePath = tagValue.match(re)?.[1];
  return fileContentsForLanguage(language, filePath);
}

function fileContentsForLanguage(
  language: ExampleLanguage,
  file: string | undefined
): string {
  if (file === undefined) {
    return '';
  }
  return (SNIPPET_RESOLVER.getFileContent(language, file) ?? '').replace(
    /[\\`$]/g,
    '\\$&'
  );
}

module.exports = plugin;
