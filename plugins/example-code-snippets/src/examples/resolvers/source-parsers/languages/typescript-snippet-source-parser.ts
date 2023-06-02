import {
  RegexSnippetSourceParser,
  RegexSnippetTypeOptions,
} from '../regex-snippet-source-parser';
import {ExampleSnippetType} from '../../../examples';
import * as path from 'path';

export class TypescriptSnippetSourceParser extends RegexSnippetSourceParser {
  constructor(repoSourceDir: string) {
    const wholeFileExamplesDir = 'examples/nodejs/basic/doc-example-files';
    const codeSnippetFiles: Array<string> = [
      // For now we don't have any typescript examples, only javascript ones.  We
      // can add a list of files containing TS examples in the future if we have some.
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
              new RegExp(`^async function example_${snippetId.valueOf()}\\(`),
            endRegex: () => /^}/,
            numLeadingSpacesToStrip: 2,
          },
        ],
      ]),
    });
  }
}
