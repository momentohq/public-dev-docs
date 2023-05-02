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
      console.log('SNIPPETS PLUGINS POST-BUILD');
      console.log(
        `MISSING SNIPPETS: ${MISSING_SNIPPETS_REGISTRY.missingSnippets()
          .map(s => JSON.stringify(s, null, 2))
          .join('\n')}`
      );
    },
  };
};
