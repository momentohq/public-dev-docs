import {ExampleLanguage, ExampleSnippetType} from './examples';

export interface SnippetResolver {
  resolveSnippet(
    language: ExampleLanguage,
    snippetType: ExampleSnippetType,
    snippetId: string
  ): string | undefined;

  getFileContent(language: ExampleLanguage, file: string): string | undefined;
}
