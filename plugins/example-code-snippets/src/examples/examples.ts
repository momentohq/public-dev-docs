import {enumFromValue} from '../utils/enum';

/**
 * This is the registry of all of the languages that we may inject example snippets for.
 */
export enum ExampleLanguage {
  TYPESCRIPT = 'typescript',
  JAVASCRIPT = 'javascript',
  CSHARP = 'csharp',
  PYTHON = 'python',
  GO = 'go',
  JAVA = 'java',
  PHP = 'php',
  RUST = 'rust',
  RUBY = 'ruby',
  CLI = 'cli',
}

/**
 * Convenience function for converting the simple lower-case string name of a language
 * to the enum value.
 * @param {string} language
 * @returns {ExampleLanguage}
 */
export function exampleLanguage(language: string): ExampleLanguage {
  return enumFromValue(ExampleLanguage, language) as unknown as ExampleLanguage;
}

/**
 * The display name that we will use (in tabs etc.) for each language.
 * @param {ExampleLanguage} language
 * @returns {string}
 */
export function languageDisplayName(language: ExampleLanguage): string {
  switch (language) {
    case ExampleLanguage.TYPESCRIPT:
      return 'TypeScript';
    case ExampleLanguage.JAVASCRIPT:
      return 'JavaScript';
    case ExampleLanguage.CSHARP:
      return 'C#';
    case ExampleLanguage.PYTHON:
      return 'Python';
    case ExampleLanguage.GO:
      return 'Go';
    case ExampleLanguage.JAVA:
      return 'Java';
    case ExampleLanguage.PHP:
      return 'PHP';
    case ExampleLanguage.RUST:
      return 'Rust';
    case ExampleLanguage.RUBY:
      return 'Ruby';
    case ExampleLanguage.CLI:
      return 'CLI';
    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Unrecognized language: ${language}`);
  }
}

/**
 * A list of all the types of snippets that we may inject.  Most snippets will
 * just be "code", but in some cases (logging, observability, etc.) there will be
 * some prose differences for different languages, so this gives us the ability
 * to associate "description" snippets with the code snippets for each language in
 * cases where it is useful.
 */
export enum ExampleSnippetType {
  CODE = 'code',
  DESCRIPTION = 'description',
}

/**
 * Convenience function for converting the simple lower-case string name of a snippet type
 * to the enum value.
 * @param {string} snippetType
 * @returns {ExampleSnippetType}
 */
export function exampleSnippetType(snippetType: string): ExampleSnippetType {
  return enumFromValue(
    ExampleSnippetType,
    snippetType
  ) as unknown as ExampleSnippetType;
}

export enum ExampleSnippetId {
  API_SET = 'API_Set',
}

/**
 * Convenience function for converting the simple lower-case string name of a snippet id
 * to the enum value.
 * @param {string} snippetId
 * @returns {ExampleSnippetId}
 */
export function exampleSnippetId(snippetId: string): ExampleSnippetId {
  return enumFromValue(
    ExampleSnippetId,
    snippetId
  ) as unknown as ExampleSnippetId;
}

/**
 * Used to uniquely identify an example snippet; this is used to keep track of which languages
 * are missing some examples.
 */
export interface ExampleSnippetCoordinates {
  language: ExampleLanguage;
  snippetType: ExampleSnippetType;
  snippetId: ExampleSnippetId;
}
