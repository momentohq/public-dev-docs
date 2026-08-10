import React, { type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { translate } from '@docusaurus/Translate';
import ThemedImage from '@theme/ThemedImage';

import styles from './styles.module.css';

/**
 * The docs "wordmark" at the top of the left sidebar: the Momento company logo with
 * "Documentation" locked up underneath it so the pair reads as a single mark. The logo swaps
 * with the active color mode (forest on light, white on dark).
 *
 * The label is laid out as individual letters in a space-between flex row rather than with a
 * hand-tuned letter-spacing, so it spans exactly the logo's width whatever the font or
 * locale, instead of depending on one font's metrics.
 */
export default function SidebarBrand(): ReactNode {
  const label = translate({
    id: 'sidebar.brand.documentation',
    message: 'Documentation',
    description: 'The word locked up under the logo at the top of the sidebar',
  });

  return (
    <Link to="/" className={styles.brand}>
      <ThemedImage
        className={styles.logo}
        sources={{
          light: useBaseUrl('/img/logo/momento-logo-forest.png'),
          dark: useBaseUrl('/img/logo/momento-logo-white.png'),
        }}
        alt="Momento"
      />
      <span className={styles.wordmark} aria-label={label}>
        {[...label].map((character, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={index} aria-hidden="true">
            {character}
          </span>
        ))}
      </span>
    </Link>
  );
}
