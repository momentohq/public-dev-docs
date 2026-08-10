import React, { type ReactNode } from 'react';
import { useWindowSize } from '@docusaurus/theme-common';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';

/**
 * Swizzled from @docusaurus/theme-classic to remove the top navbar from the page layout.
 *
 * On desktop nothing is rendered at all: the logo, search, language switcher and color mode
 * toggle that used to live up here now live in the left sidebar (see
 * src/theme/DocSidebar/Desktop).
 *
 * On mobile the navbar is kept, because it is the only entry point to the docs navigation
 * there: DocSidebar/Mobile injects the sidebar tree into the navbar's secondary menu, which
 * is opened by the navbar's hamburger toggle. Dropping it outright would leave mobile users
 * with no way to navigate. `useWindowSize` returns 'ssr' before hydration, which we treat as
 * desktop so the desktop layout never flashes a navbar.
 */
export default function Navbar(): ReactNode {
  const windowSize = useWindowSize();

  if (windowSize !== 'mobile') {
    return null;
  }

  return (
    <NavbarLayout>
      <NavbarContent />
    </NavbarLayout>
  );
}
