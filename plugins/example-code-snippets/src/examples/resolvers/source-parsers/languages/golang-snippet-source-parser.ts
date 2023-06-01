import {
  RegexSnippetSourceParser,
  RegexSnippetTypeOptions,
} from '../regex-snippet-source-parser';
import {ExampleSnippetType} from '../../../examples';
import * as path from 'path';

export class GolangSnippetSourceParser extends RegexSnippetSourceParser {
  constructor(repoSourceDir: string) {
    // const wholeFileExamplesDir = 'examples/doc-example-files';
    const codeSnippetFiles: Array<string> = [
      'examples/doc-examples-go-apis.go',
    ];
    super({
      // wholeFileExamplesDir: path.join(repoSourceDir, wholeFileExamplesDir),
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
              new RegExp(`^func example_${snippetId.valueOf()}\\(`),
            endRegex: () => /^}/,
            numLeadingSpacesToStrip: 1,
          },
        ],
      ]),
    });
  }
}
