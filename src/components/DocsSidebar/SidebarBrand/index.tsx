import React, { type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';
import ThemedImage from '@theme/ThemedImage';

import styles from './styles.module.css';

/**
 * The docs "wordmark" at the top of the left sidebar: the Momento company logo with
 * "Documentation" locked up underneath it, tuned to the same width so the two read as a
 * single mark. The logo swaps with the active color mode (forest on light, white on dark).
 */
export default function SidebarBrand(): ReactNode {
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
      <span className={styles.wordmark}>
        <Translate id="sidebar.brand.documentation">Documentation</Translate>
      </span>
    </Link>
  );
}
