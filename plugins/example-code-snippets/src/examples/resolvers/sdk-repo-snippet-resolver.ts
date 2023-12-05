import {SnippetResolver} from '../snippet-resolver';
import {ExampleLanguage, ExampleSnippetType} from '../examples';
import {SdkSourceProvider} from '../sdk-source/sdk-source-provider';
import {SdkGithubRepoSourceProvider} from '../sdk-source/sdk-github-repo-source-provider';
import {Sdk} from '../sdk-source/sdks';
import {SnippetSourceParser} from './source-parsers/snippet-source-parser';
import {JavascriptSnippetSourceParser} from './source-parsers/languages/javascript-snippet-source-parser';
import {TypescriptSnippetSourceParser} from './source-parsers/languages/typescript-snippet-source-parser';
import {GolangSnippetSourceParser} from './source-parsers/languages/golang-snippet-source-parser';
import {PythonSnippetSourceParser} from './source-parsers/languages/python-snippet-source-parser';
import {CsharpSnippetSourceParser} from './source-parsers/languages/csharp-snippet-source-parser';
import {PhpSnippetSourceParser} from './source-parsers/languages/php-snippet-source-parser';
import {JavaSnippetSourceParser} from './source-parsers/languages/java-snippet-source-parser';
import {ElixirSnippetSourceParser} from './source-parsers/languages/elixir-snippet-source-parser';
import {SwiftSnippetSourceParser} from './source-parsers/languages/swift-snippet-source-parser';

export class SdkRepoSnippetResolver implements SnippetResolver {
  private readonly sourceProvider: SdkSourceProvider =
    new SdkGithubRepoSourceProvider();
  private readonly cachedSourceDirs = new Map<Sdk, string>();
  private readonly sourceParsers = new Map<
    ExampleLanguage,
    SnippetSourceParser
  >();

  constructor() {
    for (const languageVal in ExampleLanguage) {
      const language: ExampleLanguage =
        ExampleLanguage[languageVal as keyof typeof ExampleLanguage];
      const parser = this.sourceParserForLanguage(language);
      if (parser !== undefined) {
        this.sourceParsers.set(language, parser);
      } else {
        console.log(
          `No source parser available for language ${language.valueOf()}`
        );
      }
    }
  }

  resolveSnippet(
    language: ExampleLanguage,
    snippetType: ExampleSnippetType,
    snippetId: string
  ): string | undefined {
    const sourceParser = this.sourceParserForLanguage(language);
    if (sourceParser === undefined) {
      return undefined;
    } else {
      return sourceParser.parseSourceForSnippet(snippetType, snippetId);
    }
  }

  getFileContent(language: ExampleLanguage, file: string): string | undefined {
    const sourceParser = this.sourceParserForLanguage(language);
    if (sourceParser === undefined) {
      return undefined;
    } else {
      return sourceParser.getFileContent(file);
    }
  }

  private sourceDir(sdk: Sdk): string {
    if (!this.cachedSourceDirs.has(sdk)) {
      this.cachedSourceDirs.set(sdk, this.sourceProvider.sdkSourceDir(sdk));
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.cachedSourceDirs.get(sdk)!;
  }

  private sourceParserForLanguage(
    language: ExampleLanguage
  ): SnippetSourceParser | undefined {
    const sdk = sdkForLanguage(language);
    const sourceDir = this.sourceDir(sdk);
    switch (language) {
      case ExampleLanguage.TYPESCRIPT:
        return new TypescriptSnippetSourceParser(sourceDir);
      case ExampleLanguage.JAVASCRIPT:
        return new JavascriptSnippetSourceParser(sourceDir);
      case ExampleLanguage.CSHARP:
        return new CsharpSnippetSourceParser(sourceDir);
      case ExampleLanguage.PYTHON:
        return new PythonSnippetSourceParser(sourceDir);
      case ExampleLanguage.GO:
        return new GolangSnippetSourceParser(sourceDir);
      case ExampleLanguage.JAVA:
        return new JavaSnippetSourceParser(sourceDir);
      case ExampleLanguage.PHP:
        return new PhpSnippetSourceParser(sourceDir);
      case ExampleLanguage.ELIXIR:
        return new ElixirSnippetSourceParser(sourceDir);
      case ExampleLanguage.SWIFT:
        return new SwiftSnippetSourceParser(sourceDir);
      case ExampleLanguage.RUST:
        return undefined;
      case ExampleLanguage.RUBY:
        return undefined;
      case ExampleLanguage.CLI:
        return undefined;
      default:
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`Unrecognized language: ${language}`);
    }
  }
}

function sdkForLanguage(language: ExampleLanguage): Sdk {
  switch (language) {
    case ExampleLanguage.TYPESCRIPT:
      return Sdk.NODEJS;
    case ExampleLanguage.JAVASCRIPT:
      return Sdk.NODEJS;
    case ExampleLanguage.CSHARP:
      return Sdk.DOTNET;
    case ExampleLanguage.PYTHON:
      return Sdk.PYTHON;
    case ExampleLanguage.GO:
      return Sdk.GO;
    case ExampleLanguage.JAVA:
      return Sdk.JAVA;
    case ExampleLanguage.PHP:
      return Sdk.PHP;
    case ExampleLanguage.RUST:
      return Sdk.RUST;
    case ExampleLanguage.RUBY:
      return Sdk.RUBY;
    case ExampleLanguage.ELIXIR:
      return Sdk.ELIXIR;
    case ExampleLanguage.SWIFT:
      return Sdk.SWIFT;
    case ExampleLanguage.CLI:
      return Sdk.CLI;
    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Unrecognized language: ${language}`);
  }
}
