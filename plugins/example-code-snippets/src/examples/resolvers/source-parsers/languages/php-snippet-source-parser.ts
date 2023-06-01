import {
  RegexSnippetSourceParser,
  RegexSnippetTypeOptions,
} from '../regex-snippet-source-parser';
import {ExampleSnippetType} from '../../../examples';
import * as path from 'path';

export class PhpSnippetSourceParser extends RegexSnippetSourceParser {
  constructor(repoSourceDir: string) {
    const wholeFileExamplesDir = 'examples/doc-example-files';
    const codeSnippetFiles: Array<string> = [
      'examples/doc-examples-php-apis.php',
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
              new RegExp(`^function example_${snippetId.valueOf()}\\(`),
            endRegex: () => /^}/,
            numLeadingSpacesToStrip: 4,
          },
        ],
      ]),
    });
  }
}
