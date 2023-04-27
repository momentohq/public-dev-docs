import {ExampleSnippetCoordinates} from './examples';

export class MissingSnippetsRegistry {
  private readonly _missingSnippets = new Set<string>();

  registerMissingSnippet(coords: ExampleSnippetCoordinates): void {
    this._missingSnippets.add(JSON.stringify(coords));
  }

  missingSnippets(): Array<ExampleSnippetCoordinates> {
    return Array.from(this._missingSnippets).map(
      s => JSON.parse(s) as ExampleSnippetCoordinates
    );
  }
}

export const MISSING_SNIPPETS_REGISTRY = new MissingSnippetsRegistry();
