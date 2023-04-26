const visit = require('unist-util-visit');

// for this POC, here we define some hard-coded example snippets.  In the real, working version of this plugin,
// there would be some code to pull this stuff from the sdk git repos.
const temporaryHardCodedCodeSnippets = new Map([
  ['example:typescript:code:ListCaches', 'This snippet would be pulled from the node.js repo and contain sample code for listing caches in TS'],
  ['example:go:description:Logging', 'This snippet would be pulled from the go repo, and contain prose about logging support in our Golang SDK'],
  ['example:go:code:Logging', 'This snippet would be pulled from the go repo, and contain example code illustrating logging support.'],
]);


function markdownNodeContainsExampleSnippets(node) {
  if ((node.type === 'text') || (node.type === 'code')) {
    if (node.value.includes("%%%example:")) {
     return true;
    }
  }
  return false;
}

const plugin = (options) => {
  const transformer = async (ast) => {
    visit(ast, markdownNodeContainsExampleSnippets, (node) => {
      console.log(`Found a markdown node that contains example snippets.  Replacing content.`);

      node.value = node.value.replace(/%%%([^%]*)%%%/g, (match, exampleId) => {
        return temporaryHardCodedCodeSnippets.get(exampleId)
      })
    });
  };
  return transformer;
};

module.exports = plugin;
