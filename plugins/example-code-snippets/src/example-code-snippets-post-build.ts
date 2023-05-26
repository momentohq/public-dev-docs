import {MISSING_SNIPPETS_REGISTRY} from './examples/missing-snippets-registry';

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = function (context, options) {
  return {
    name: 'example-code-snippets-post-build',

    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    postBuild({siteConfig = {}, routesPaths = [], outDir}) {
      console.log('\n\n\nMISSING SDK EXAMPLES REPORT\n\n\n');
      const missingSnippets = MISSING_SNIPPETS_REGISTRY.missingSnippets();
      const missingFiles = MISSING_SNIPPETS_REGISTRY.missingFiles();
      for (const [language, snippets] of missingSnippets.entries()) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const files = missingFiles.get(language) ?? [];
        console.log(
          `SDK '${language.valueOf()}' is missing ${
            snippets.length
          } snippets and ${files.length} files.`
        );
        if (snippets.length > 0) {
          console.log(
            `\tMissing snippets: ${snippets.map(s => s.snippetId).join(',')}`
          );
        }
        if (files.length > 0) {
          console.log(`\tMissing files: ${files.join(',')}`);
        }
        console.log();
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    configureWebpack(config: unknown, isServer: unknown, utils: unknown) {
      return {
        node: {
          __dirname: true,
        },
        resolve: {
          alias: {
            path: require.resolve('path-browserify'),
          },
          fallback: {
            fs: false,
          },
        },
      };
    },
  };
};
