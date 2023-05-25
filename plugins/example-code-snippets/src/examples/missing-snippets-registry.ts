import {ExampleLanguage, ExampleSnippetCoordinates} from './examples';

export class MissingSnippetsRegistry {
  private readonly _missingSnippets = new Set<string>();
  private readonly _missingFiles = new Set<string>();
  registerMissingSnippet(coords: ExampleSnippetCoordinates): void {
    this._missingSnippets.add(JSON.stringify(coords));
  }

  registerMissingFile(language: ExampleLanguage, file: string): void {
    this._missingFiles.add(JSON.stringify({language: language, file: file}));
  }

  missingSnippets(): Array<ExampleSnippetCoordinates> {
    return Array.from(this._missingSnippets).map(
      s => JSON.parse(s) as ExampleSnippetCoordinates
    );
  }
}

export const MISSING_SNIPPETS_REGISTRY = new MissingSnippetsRegistry();
