import {visit} from 'unist-util-visit';
import {
  ExampleLanguage,
  exampleLanguage,
  exampleSnippetType,
} from './examples/examples';
import {SNIPPET_RESOLVER} from './examples/resolvers/default-snippet-resolver';
import type {Transformer} from 'unified';
// eslint-disable-next-line node/no-extraneous-import
import type {MdxJsxFlowElement} from 'mdast-util-mdx-jsx';
import {resolveAttributeValue} from './utils/mdx-util';

const langToAttrName: Partial<Record<ExampleLanguage, string>> = {
  [ExampleLanguage.JAVASCRIPT]: 'js',
  [ExampleLanguage.PYTHON]: 'python',
  [ExampleLanguage.JAVA]: 'java',
  [ExampleLanguage.KOTLIN]: 'kotlin',
  [ExampleLanguage.GO]: 'go',
  [ExampleLanguage.CSHARP]: 'csharp',
  [ExampleLanguage.PHP]: 'php',
  [ExampleLanguage.RUST]: 'rust',
  // [ExampleLanguage.RUBY]: 'ruby',
  [ExampleLanguage.ELIXIR]: 'elixir',
  [ExampleLanguage.SWIFT]: 'swift',
  [ExampleLanguage.DART]: 'dart',
  // [ExampleLanguage.CLI]: 'cli',
  [ExampleLanguage.TYPESCRIPT]: 'ts',
};

function replaceValueWithExampleTabs(node: MdxJsxFlowElement): void {
  const snippetIdAttr = node.attributes.find(
    a => a.type === 'mdxJsxAttribute' && a.name === 'snippetId'
  );
  if (snippetIdAttr === undefined) {
    throw Error('Missing required attribute SdkExampleTabs.snippetId');
  }

  const snippetId = resolveAttributeValue(snippetIdAttr);
  if (snippetId === undefined) {
    throw Error('Invalid undefined value for SdkExampleTabs.snippetId');
  }

  node.name = 'SdkExampleTabsImpl';
  node.attributes = Object.entries(langToAttrName).map(([lang, name]) => ({
    type: 'mdxJsxAttribute' as const,
    name,
    value: snippetForLanguage(lang as ExampleLanguage, snippetId),
  }));
}

function replaceValueWithExampleFileTabs(node: MdxJsxFlowElement): void {
  const attributes: typeof node.attributes = [];
  for (const a of node.attributes) {
    if (a.type !== 'mdxJsxAttribute') {
      continue;
    }
    const value = resolveAttributeValue(a);
    if (value === undefined) {
      throw Error(`Invalid undefined value for SdkExampleFileTabs.${a.name}`);
    }

    const lang = a.name as ExampleLanguage;
    const attrName = langToAttrName[lang];
    if (attrName === undefined) {
      throw Error('Unknown language on <SdkExampleFileTabs>: ' + lang);
    }

    attributes.push({
      type: 'mdxJsxAttribute' as const,
      name: attrName,
      value: fileContentsForLanguage(lang, value),
    });
  }

  if (attributes.length === 0) {
    throw Error(
      'Failed to identify any example files. Did you include any properties?'
    );
  }

  node.name = 'SdkExampleFileTabsImpl';
  node.attributes = attributes;
}

function replaceValueWithExampleCodeBlock(node: MdxJsxFlowElement): void {
  const attrmap: Record<string, string | undefined> = {};
  for (const a of node.attributes) {
    if (a.type !== 'mdxJsxAttribute') {
      continue;
    }
    const value = resolveAttributeValue(a);
    if (value === undefined) {
      throw Error(`Invalid undefined value for SdkExampleCodeBlock.${a.name}`);
    }
    attrmap[a.name] = value;
  }

  const snippetLanguageAttr = attrmap['language'];
  if (snippetLanguageAttr === undefined) {
    throw Error('Missing attribute SdkExampleCodeBlock.language');
  }
  const language = exampleLanguage(snippetLanguageAttr);

  const snippetId = attrmap['snippetId'];
  const filename = attrmap['file'];
  let code: string | null = null;

  if (snippetId !== undefined) {
    if (filename !== undefined) {
      throw Error(
        'Both SdkExampleCodeBlock.snippetId and SdkExampleCodeBlock.file were specified. You must specify exactly one.'
      );
    }
    code = snippetForLanguage(language, snippetId);
  } else if (filename !== undefined) {
    code = fileContentsForLanguage(language, filename);
  } else {
    throw Error(
      'Neither SdkExampleCodeBlock.snippetId nor SdkExampleCodeBlock.file were specified. You must specify exactly one.'
    );
  }

  node.name = 'SdkExampleCodeBlockImpl';
  node.attributes = [
    {
      type: 'mdxJsxAttribute' as const,
      name: 'language',
      value: language,
    },
    {
      type: 'mdxJsxAttribute' as const,
      name: 'code',
      value: code,
    },
  ];
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
  );
}

function fileContentsForLanguage(
  language: ExampleLanguage,
  file: string | undefined
): string {
  if (file === undefined) {
    return '';
  }
  return SNIPPET_RESOLVER.getFileContent(language, file) ?? '';
}

/**
 * This is a docusaurus MDX/remark plugin.  It finds <SdkExampleTabs> in the markdown
 * source, and replaces them with <SdkExampleTabsImpl> tags that are populated with the
 * example code snippets pulled in from the SDK repos.
 *
 * @param options
 * @returns {Transformer}
 */
export default function plugin(): Transformer {
  return tree => {
    visit(tree, node => {
      if (node.type !== 'mdxJsxFlowElement') {
        return;
      }
      const el = node as MdxJsxFlowElement;

      switch (el.name) {
        case 'SdkExampleTabs':
          replaceValueWithExampleTabs(el);
          break;
        case 'SdkExampleCodeBlock':
          replaceValueWithExampleCodeBlock(el);
          break;
        case 'SdkExampleFileTabs':
          replaceValueWithExampleFileTabs(el);
          break;
        default:
          break;
      }
    });
  };
}
