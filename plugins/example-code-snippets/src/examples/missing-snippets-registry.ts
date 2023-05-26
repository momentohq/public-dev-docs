import {ExampleLanguage, ExampleSnippetCoordinates} from './examples';

export class MissingSnippetsRegistry {
  private readonly _missingSnippets = new Map<ExampleLanguage, Set<string>>();
  private readonly _missingFiles = new Map<ExampleLanguage, Set<string>>();
  registerMissingSnippet(coords: ExampleSnippetCoordinates): void {
    if (!this._missingSnippets.has(coords.language)) {
      this._missingSnippets.set(coords.language, new Set());
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this._missingSnippets.get(coords.language)!.add(JSON.stringify(coords));
  }

  registerMissingFile(language: ExampleLanguage, file: string): void {
    if (!this._missingFiles.has(language)) {
      this._missingFiles.set(language, new Set());
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this._missingFiles.get(language)!.add(file);
  }

  missingSnippets(): Map<ExampleLanguage, Array<ExampleSnippetCoordinates>> {
    return new Map(
      Array.from(this._missingSnippets.entries()).map(([lang, snippets]) => [
        lang,
        Array.from(snippets).map(
          coords => JSON.parse(coords) as ExampleSnippetCoordinates
        ),
      ])
    );
  }

  missingFiles(): Map<ExampleLanguage, Array<string>> {
    return new Map(
      Array.from(this._missingFiles.entries()).map(([lang, files]) => [
        lang,
        Array.from(files),
      ])
    );
  }
}

export const MISSING_SNIPPETS_REGISTRY = new MissingSnippetsRegistry();
