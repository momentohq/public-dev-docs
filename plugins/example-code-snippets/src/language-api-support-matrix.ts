import visit from 'unist-util-visit';
// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import * as unist from 'unist';
import {ApiSupportMatrixGenerator} from './api-support/api-support-matrix-generator';

function isSupportMatrixNode<T extends unist.Node>(node: unknown): node is T {
  const unistNode = node as unist.Node;
  if (unistNode.type === 'paragraph') {
    const unistParent = unistNode as unist.Parent;
    if (unistParent.children.length === 1) {
      const childLiteral: unist.Literal = unistParent
        .children[0] as unist.Literal;
      if (childLiteral.type === 'text') {
        const value = childLiteral.value as string;
        if (value.match('%%%API_SUPPORT_MATRIX%%%')) {
          return true;
        }
      }
    }
  }
  return false;
}

/**
 * This is a docusaurus MDX/remark plugin.  It finds the %%%API_SUPPORT_MATRIX%%% marker
 * in the markdown and injects the API support matrix tables in its place.
 *
 * @param options
 * @returns {unknown}
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function plugin(options: unknown): unknown {
  function transformer(tree: unist.Parent) {
    visit(tree, isSupportMatrixNode, node => {
      const matrixGenerator = new ApiSupportMatrixGenerator();
      const newNodes = matrixGenerator.generateApiMatrixMarkdownNodes();

      const treeChildren: Array<unist.Node> = tree.children;
      const thisNodeIndex = treeChildren.findIndex(n => n === node);
      tree.children = [
        ...treeChildren.slice(0, thisNodeIndex),
        ...newNodes,
        ...treeChildren.slice(thisNodeIndex + 1),
      ];
    });
  }
  return transformer;
}

module.exports = plugin;
