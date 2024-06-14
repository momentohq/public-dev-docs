import {visit} from 'unist-util-visit';
// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import * as unist from 'unist';
// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import * as mdast from 'mdast';
import {ApiSupportMatrixGenerator} from './api-support/api-support-matrix-generator';
import type {Transformer} from 'unified';

/**
 * This is a docusaurus MDX/remark plugin.  It finds the %%%{product}_API_SUPPORT_MATRIX%%% marker
 * in the markdown and injects the API support matrix tables in its place.
 * Current supported markers are in the `generateApiMatrixMarkdownNodes` switch statement.
 *
 * @param options
 * @returns {Transformer}
 */
function plugin(): Transformer {
  const matrixGenerator = new ApiSupportMatrixGenerator();
  return tree => {
    visit(
      tree,
      'paragraph',
      (node: mdast.Paragraph, index: number, parent: unist.Parent) => {
        if (node.children.length !== 1) {
          return;
        }

        const child = node.children[0];
        if (child.type !== 'text') {
          return;
        }

        const value = child.value;
        if (!value.includes('API_SUPPORT_MATRIX%%%')) {
          return;
        }

        const matrixType = value;
        console.log('Found matrix type:', matrixType);

        const newNodes =
          matrixGenerator.generateApiMatrixMarkdownNodes(matrixType);

        node.data?.parent;

        const siblings = parent.children;
        parent.children = [
          ...siblings.slice(0, index),
          ...newNodes,
          ...siblings.slice(index + 1),
        ];
      }
    );
  };
}

module.exports = plugin;
