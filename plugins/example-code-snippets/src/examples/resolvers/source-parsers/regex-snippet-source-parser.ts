import {SnippetSourceParser} from './snippet-source-parser';
import {ExampleSnippetType} from '../../examples';
import * as fs from 'fs';
import * as path from 'path';

export interface RegexSnippetTypeOptions {
  snippetSourceFiles: Array<string>;
  startRegex: (snippetId: string) => RegExp;
  endRegex: (snippetId: string) => RegExp;
  numLeadingSpacesToStrip: number;
}

export interface RegexSnippetSourceParserOptions {
  wholeFileExamplesDir: string;
  snippetTypeParseOptions: Map<ExampleSnippetType, RegexSnippetTypeOptions>;
}

export class RegexSnippetSourceParser implements SnippetSourceParser {
  private readonly wholeFileExamplesDir: string;
  private readonly snippetTypeParseOptions: Map<
    ExampleSnippetType,
    RegexSnippetTypeOptions
  >;
  private readonly snippetTypeContent: Map<ExampleSnippetType, Array<string>>;

  constructor(options: RegexSnippetSourceParserOptions) {
    this.wholeFileExamplesDir = options.wholeFileExamplesDir;
    this.snippetTypeParseOptions = options.snippetTypeParseOptions;
    this.snippetTypeContent = new Map();
    for (const [
      snippetType,
      snippetOptions,
    ] of this.snippetTypeParseOptions.entries()) {
      this.snippetTypeContent.set(
        snippetType,
        snippetOptions.snippetSourceFiles
          .map(f => fs.readFileSync(f).toString())
          .join('\n')
          .split('\n')
      );
    }
  }
  parseSourceForSnippet(
    snippetType: ExampleSnippetType,
    snippetId: string
  ): string | undefined {
    const options = this.snippetTypeParseOptions.get(snippetType);
    if (options === undefined) {
      return undefined;
    }

    const startRegex = options.startRegex(snippetId);
    const endRegex = options.endRegex(snippetId);

    const content = this.snippetTypeContent.get(snippetType);
    if (content === undefined) {
      return undefined;
    }

    const contentLinesIterator = content[Symbol.iterator]();

    let nextLine = contentLinesIterator.next();
    while (!nextLine.done) {
      const line = nextLine.value;
      if (line.match(startRegex)) {
        return this.captureUntilEndOfSnippet(
          contentLinesIterator,
          endRegex,
          options.numLeadingSpacesToStrip
        );
      }
      nextLine = contentLinesIterator.next();
    }

    return undefined;
  }

  getFileContent(file: string): string | undefined {
    return fs
      .readFileSync(path.join(this.wholeFileExamplesDir, file))
      .toString();
  }

  private captureUntilEndOfSnippet(
    remainingLines: IterableIterator<string>,
    endRegex: RegExp,
    numLeadingSpacesToStrip: number
  ): string | undefined {
    const result = [];
    let nextLine = remainingLines.next();
    while (!nextLine.done) {
      const line = nextLine.value;
      if (line.match(endRegex)) {
        return result.map(l => l.substring(numLeadingSpacesToStrip)).join('\n');
      }
      result.push(line);
      nextLine = remainingLines.next();
    }
    return undefined;
  }
}
