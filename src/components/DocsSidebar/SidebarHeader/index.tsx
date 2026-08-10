import React, { type ReactNode } from 'react';
import SearchBar from '@theme/SearchBar';
import SidebarBrand from '@site/src/components/DocsSidebar/SidebarBrand';

import styles from './styles.module.css';

/**
 * Top of the left sidebar nav: the company logo / "Documentation" lockup, then the search
 * widget (both relocated here from the removed top navbar).
 */
export default function SidebarHeader(): ReactNode {
  return (
    <div className={styles.sidebarHeader}>
      <SidebarBrand />
      <div className={styles.searchWrapper}>
        <SearchBar />
      </div>
    </div>
  );
}
