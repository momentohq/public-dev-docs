import {
  RegexSnippetSourceParser,
  RegexSnippetTypeOptions,
} from '../regex-snippet-source-parser';
import {ExampleSnippetType} from '../../../examples';
import * as path from 'path';

export class ElixirSnippetSourceParser extends RegexSnippetSourceParser {
  constructor(repoSourceDir: string) {
    const wholeFileExamplesDir = 'examples/doc_examples';
    const codeSnippetFiles: Array<string> = ['examples/doc_examples.exs'];
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
              new RegExp(`^ {2}def example_${snippetId.valueOf()}\\(`),
            endRegex: () => /^ {2}end/,
            numLeadingSpacesToStrip: 4,
          },
        ],
      ]),
    });
  }
}
