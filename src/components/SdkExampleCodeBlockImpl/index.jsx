import CodeBlock from '@theme/CodeBlock';
import React from 'react';

/**
 * This component isn't intended to be used directly (though there is no issue with doing
 * so).  It is primarily intended to be used by including instances of `SdkExampleCodeBlock`
 * in a mdx file and then allowing the `inject-example-code-snippets` plugin to replace
 * it with an instance of this component, populated with a code snippet for the specified
 * language, by looking the snippet source code up in the SDK repo.
 *
 * @param language
 * @param code
 * @returns {JSX.Element|null}
 * @constructor
 */
export const SdkExampleCodeBlockImpl = ({language, code}) =>
  <CodeBlock language={language}>{code}</CodeBlock>;


