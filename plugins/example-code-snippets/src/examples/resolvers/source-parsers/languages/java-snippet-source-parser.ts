import {
  RegexSnippetSourceParser,
  RegexSnippetTypeOptions,
} from '../regex-snippet-source-parser';
import {ExampleSnippetType} from '../../../examples';
import * as path from 'path';

export class JavaSnippetSourceParser extends RegexSnippetSourceParser {
  constructor(repoSourceDir: string) {
    const wholeFileExamplesDir =
      'examples/cache/src/main/java/momento/client/example/doc_examples';
    const codeSnippetFiles: Array<string> = [
      'examples/cache/src/main/java/momento/client/example/doc_examples/DocExamplesJavaAPIs.java',
    ];
    super({
      wholeFileExamplesDir: path.join(repoSourceDir, wholeFileExamplesDir),
      snippetTypeParseOptions: new Map<
        ExampleSnippetType,
        RegexSnippetTypeOptions
      >([
        [
          ExampleSnippetType.CODE,
          {
            snippetSourceFiles: codeSnippetFiles.map(f =>
              path.join(repoSourceDir, f)
            ),
            startRegex: snippetId =>
              new RegExp(
                `^ {2}public static void example_${snippetId.valueOf()}\\(`
              ),
            endRegex: () => /^ {2}}/,
            numLeadingSpacesToStrip: 4,
          },
        ],
      ]),
    });
  }
}
