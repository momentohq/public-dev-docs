import {ExampleLanguage, ExampleSnippetType} from '../examples';
import {MISSING_SNIPPETS_REGISTRY} from '../missing-snippets-registry';
import {SnippetResolver} from '../snippet-resolver';
import {SdkRepoSnippetResolver} from './sdk-repo-snippet-resolver';

/**
 * This class exists as a composite wrapper to allow us to support falling back to other resolvers
 * besides the SdkRepo resolver. At one point in time we did have a fallback resolver that had some
 * hard-coded snippets in it. That has been removed, but I decided to leave this class here since
 * it was already here and would allow us to esily add more resolvers in the future.
 */
export class DefaultSnippetResolver implements SnippetResolver {
  private readonly sdkRepoResolver = new SdkRepoSnippetResolver();

  resolveSnippet(
    language: ExampleLanguage,
    snippetType: ExampleSnippetType,
    snippetId: string
  ): string | undefined {
    const fromSdkRepo = this.sdkRepoResolver.resolveSnippet(
      language,
      snippetType,
      snippetId
    );
    if (fromSdkRepo !== undefined) {
      return fromSdkRepo;
    }

    MISSING_SNIPPETS_REGISTRY.registerMissingSnippet({
      language,
      snippetType,
      snippetId,
    });

    return undefined;
  }

  getFileContent(language: ExampleLanguage, file: string): string | undefined {
    const fromSdkRepo = this.sdkRepoResolver.getFileContent(language, file);

    if (fromSdkRepo !== undefined) {
      return fromSdkRepo;
    }

    MISSING_SNIPPETS_REGISTRY.registerMissingFile(language, file);

    return undefined;
  }
}

export const SNIPPET_RESOLVER: SnippetResolver = new DefaultSnippetResolver();
