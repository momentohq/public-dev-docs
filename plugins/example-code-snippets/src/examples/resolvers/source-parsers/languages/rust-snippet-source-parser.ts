import {
  RegexSnippetSourceParser,
  RegexSnippetTypeOptions,
} from '../regex-snippet-source-parser';
import {ExampleSnippetType} from '../../../examples';
import * as path from 'path';

export class RustSnippetSourceParser extends RegexSnippetSourceParser {
  constructor(repoSourceDir: string) {
    const wholeFileExamplesDir = '.';
    const codeSnippetFiles: Array<string> = [
      'example/rust/src/docs_examples/docs_examples.rs',
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
              new RegExp(`pub (?:async )?fn example_${snippetId.valueOf()}\\(`),
            endRegex: () => /^\s*Ok\(\(\)\)\s*$/,
            numLeadingSpacesToStrip: 2,
          },
        ],
      ]),
    });
  }
}
