// eslint-disable-next-line node/no-extraneous-import
import type {MdxJsxFlowElement} from 'mdast-util-mdx-jsx';

export type MdsJsxAttributeMap = Record<string, string | undefined>;
export function extractAttributeMap(
  node: MdxJsxFlowElement
): MdsJsxAttributeMap {
  const attrmap: MdsJsxAttributeMap = {};
  for (const attr of node.attributes) {
    if (attr.type !== 'mdxJsxAttribute') {
      throw Error(
        `Encountered unexpected attribute type on ${node.name ?? 'null'}: ${
          attr.type
        }`
      );
    }

    attrmap[attr.name] = resolveAttributeValue(attr);
  }
  return attrmap;
}

export function resolveAttributeValue(
  attribute: MdxJsxFlowElement['attributes'][0]
): string | undefined {
  if (attribute.type === 'mdxJsxExpressionAttribute') {
    throw Error(
      `NotImplemented: MdxJsxExpressionAttribute (${attribute.value})`
    );
  }

  const {name, value} = attribute;
  if (value === null || value === undefined) {
    return undefined;
  }
  if (typeof value === 'string') {
    return value;
  }
  // value is MdxJsxAttributeValueExpression
  try {
    const resolved: unknown = eval(value.value);
    if (typeof resolved !== 'string') {
      throw Error(
        `NotImplemented: non-string MdxJsxAttributeValueExpression (${name}=${value.value})`
      );
    }
    return resolved;
  } catch (e) {
    throw Error(
      `NotImplemented: non-string MdxJsxAttributeValueExpression (${name}=${value.value})`
    );
  }
}
