import {
  RegexSnippetSourceParser,
  RegexSnippetTypeOptions,
} from '../regex-snippet-source-parser';
import {ExampleSnippetType} from '../../../examples';
import * as path from 'path';

export class PythonSnippetSourceParser extends RegexSnippetSourceParser {
  constructor(repoSourceDir: string) {
    const wholeFileExamplesDir = 'examples/py310/doc-example-files';
    const codeSnippetFiles: Array<string> = [
      'examples/py310/doc-examples-python-apis.py',
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
              new RegExp(`^(?:async )?def example_${snippetId.valueOf()}\\(`),
            endRegex: () => /\n\n/,
            numLeadingSpacesToStrip: 4,
          },
        ],
      ]),
    });
  }
}
