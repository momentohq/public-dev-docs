import {
  RegexSnippetSourceParser,
  RegexSnippetTypeOptions,
} from '../regex-snippet-source-parser';
import {ExampleSnippetType} from '../../../examples';
import * as path from 'path';

export class SwiftSnippetSourceParser extends RegexSnippetSourceParser {
  constructor(repoSourceDir: string) {
    const wholeFileExamplesDir = 'Examples/';
    const codeSnippetFiles: Array<string> = [];
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
