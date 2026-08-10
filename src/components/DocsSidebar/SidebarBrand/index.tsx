import React, { type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

import styles from './styles.module.css';

/**
 * The wordmark at the top of the left sidebar: the original "Momento Docs" logo, swapped for
 * the active color mode (forest on light, white on dark). This is the same wordmark the old
 * top navbar used (img/momento-docs-logo-forest.svg / -white.svg).
 */
export default function SidebarBrand(): ReactNode {
  return (
    <Link to="/" className={styles.brand} aria-label="Momento Docs home">
      <ThemedImage
        className={styles.wordmark}
        sources={{
          light: useBaseUrl('/img/momento-docs-logo-forest.svg'),
          dark: useBaseUrl('/img/momento-docs-logo-white.svg'),
        }}
        alt="Momento Docs"
      />
    </Link>
  );
}
