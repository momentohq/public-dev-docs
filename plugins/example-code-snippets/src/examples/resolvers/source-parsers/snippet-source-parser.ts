import {ExampleSnippetType} from '../../examples';

export interface SnippetSourceParser {
  parseSourceForSnippet(
    snippetType: ExampleSnippetType,
    snippetId: string
  ): string | undefined;

  getFileContent(file: string): string | undefined;
}
