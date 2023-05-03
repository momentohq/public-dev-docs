import {
  RegexSnippetSourceParser,
  RegexSnippetTypeOptions,
} from '../regex-snippet-source-parser';
import {ExampleSnippetType} from '../../../examples';
import * as path from 'path';

export class TypescriptSnippetSourceParser extends RegexSnippetSourceParser {
  constructor(repoSourceDir: string) {
    const codeSnippetFiles: Array<string> = [
      // For now we don't have any typescript examples, only javascript ones.  We
      // can add a list of files containing TS examples in the future if we have some.
    ];
    super({
      snippetTypeParseOptions: new Map<
        ExampleSnippetType,
        RegexSnippetTypeOptions
      >([
        [
          ExampleSnippetType.CODE,
          {
            sourceFiles: codeSnippetFiles.map(f => path.join(repoSourceDir, f)),
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
