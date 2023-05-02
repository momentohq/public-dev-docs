import {ExampleSnippetId, ExampleSnippetType} from '../../examples';

export interface SnippetSourceParser {
  parseSourceForSnippet(
    snippetType: ExampleSnippetType,
    snippetId: ExampleSnippetId
  ): string | undefined;
}
