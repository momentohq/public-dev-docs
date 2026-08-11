import React, { type ReactNode } from 'react';
import { useWindowSize } from '@docusaurus/theme-common';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';

/**
 * Swizzled from @docusaurus/theme-classic to remove the top navbar from the page layout.
 *
 * On desktop the navbar renders as an empty, zero-height `.navbar` element: the logo, search,
 * language switcher and color mode toggle it used to hold now live in the left sidebar (see
 * src/theme/DocSidebar/Desktop). The element itself has to stay in the DOM — theme-common's
 * useTOCHighlight does `document.querySelector('.navbar')!.clientHeight` unconditionally to
 * compute its anchor offset, so removing it entirely throws and takes down hydration for
 * every page with a table of contents. Keeping an empty node gives that lookup a height of 0,
 * which is exactly the offset we want now.
 *
 * On mobile the real navbar is kept, because it is the only entry point to the docs
 * navigation there: DocSidebar/Mobile injects the sidebar tree into the navbar's secondary
 * menu, which is opened by the navbar's hamburger toggle. `useWindowSize` returns 'ssr'
 * before hydration, which we treat as desktop so the desktop layout never flashes a navbar.
 */
export default function Navbar(): ReactNode {
  const windowSize = useWindowSize();

  if (windowSize !== 'mobile') {
    return <nav className="navbar navbar--emptied" aria-hidden="true" />;
  }

  return (
    <NavbarLayout>
      <NavbarContent />
    </NavbarLayout>
  );
}
