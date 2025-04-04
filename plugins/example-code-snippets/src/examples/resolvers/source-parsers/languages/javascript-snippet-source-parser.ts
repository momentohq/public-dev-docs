import {
  RegexSnippetSourceParser,
  RegexSnippetTypeOptions,
} from '../regex-snippet-source-parser';
import {ExampleSnippetType} from '../../../examples';
import * as path from 'path';

export class JavascriptSnippetSourceParser extends RegexSnippetSourceParser {
  constructor(repoSourceDir: string) {
    const wholeFileExamplesDir = '.';
    const codeSnippetFiles: Array<string> = [
      'examples/nodejs/cache/doc-example-files/doc-examples-js-apis.ts',
      'examples/nodejs/compression/doc-example-files/doc-examples-js-apis.ts',
      'examples/nodejs/observability/doc-example-files/doc-examples-js-apis.ts',
      'examples/nodejs/observability/utils/instrumentation.ts',
      'examples/nodejs/observability/advanced-logging.ts',
      'examples/nodejs/aws/secrets-manager/doc-example-files/doc-examples-js-aws-secrets.ts',
      'examples/nodejs/cache/doc-example-files/collection-ttl.ts',
      'examples/nodejs/cache/doc-example-files/config-and-error-handling.ts',
      'examples/nodejs/cache/doc-example-files/patterns.ts',
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
                `^(?:export )?(?:async )?function example_${snippetId.valueOf()}\\(`
              ),
            endRegex: () => /^}/,
            numLeadingSpacesToStrip: 2,
          },
        ],
      ]),
    });
  }
}
