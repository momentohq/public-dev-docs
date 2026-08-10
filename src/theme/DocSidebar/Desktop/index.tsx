import React from 'react';
import clsx from 'clsx';
import { useThemeConfig } from '@docusaurus/theme-common';
import CollapseButton from '@theme/DocSidebar/Desktop/CollapseButton';
import Content from '@theme/DocSidebar/Desktop/Content';
import type { Props } from '@theme/DocSidebar/Desktop';
import SidebarHeader from '@site/src/components/DocsSidebar/SidebarHeader';
import SidebarFooter from '@site/src/components/DocsSidebar/SidebarFooter';

import styles from './styles.module.css';

/**
 * Swizzled from @docusaurus/theme-classic. The top navbar has been removed, so the sidebar
 * owns the chrome that used to live there: the logo and search go above the nav tree
 * (SidebarHeader), and the language / color-mode switchers below it (SidebarFooter). The
 * theme's own <Logo> (which only rendered under navbar.hideOnScroll) is dropped in favor of
 * SidebarHeader's branded lockup.
 */
function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }: Props) {
  const {
    docs: {
      sidebar: { hideable },
    },
  } = useThemeConfig();

  return (
    <div className={clsx(styles.sidebar, isHidden && styles.sidebarHidden)}>
      <SidebarHeader />
      <Content path={path} sidebar={sidebar} />
      <SidebarFooter />
      {hideable && <CollapseButton onClick={onCollapse} />}
    </div>
  );
}

export default React.memo(DocSidebarDesktop);
