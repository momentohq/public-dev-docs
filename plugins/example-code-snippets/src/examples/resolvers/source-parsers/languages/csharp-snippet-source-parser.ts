import {
  RegexSnippetSourceParser,
  RegexSnippetTypeOptions,
} from '../regex-snippet-source-parser';
import {ExampleSnippetType} from '../../../examples';
import * as path from 'path';

export class CsharpSnippetSourceParser extends RegexSnippetSourceParser {
  constructor(repoSourceDir: string) {
    const wholeFileExamplesDir = 'examples/DocExampleFiles';
    const codeSnippetFiles: Array<string> = [
      'examples/DocExampleApis/Program.cs',
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
                `^ {4}public static async Task Example_${snippetId.valueOf()}\\(`
              ),
            endRegex: () => /^ {4}}/,
            numLeadingSpacesToStrip: 8,
            skipFirstLine: true,
          },
        ],
      ]),
    });
  }
}
