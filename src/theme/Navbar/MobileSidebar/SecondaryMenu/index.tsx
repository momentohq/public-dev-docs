import React, { type ComponentProps, type ReactNode } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal';
import Translate from '@docusaurus/Translate';

function SecondaryMenuBackButton(props: ComponentProps<'button'>) {
  return (
    <button {...props} type="button" className="clean-btn navbar-sidebar__back">
      <Translate
        id="theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel"
        description="The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)">
        ← Back to main menu
      </Translate>
    </button>
  );
}

/**
 * Swizzled from @docusaurus/theme-classic. With the top navbar's items emptied, the mobile
 * drawer's primary menu is gone; on docs pages the drawer opens straight into the docs tree
 * (the secondary menu). Hide the "Back to main menu" button whenever the secondary menu is
 * showing docs content, so the drawer presents only the docs nav with nothing stale behind it.
 *
 * Whether a docs sidebar is available is inferred from the secondary menu's content: it is
 * undefined when no docs sidebar filler has registered (non-doc pages) and a rendered element
 * on doc pages. This avoids useDocsSidebar(), which is only valid inside the docs route and
 * throws in the navbar tree.
 */
export default function NavbarMobileSidebarSecondaryMenu(): ReactNode {
  const isPrimaryMenuEmpty = useThemeConfig().navbar.items.length === 0;
  const secondaryMenu = useNavbarSecondaryMenu();

  const hasDocsSidebar = secondaryMenu.content !== undefined;
  const hideBackButton = isPrimaryMenuEmpty || hasDocsSidebar;

  return (
    <>
      {!hideBackButton && (
        <SecondaryMenuBackButton onClick={() => secondaryMenu.hide()} />
      )}
      {secondaryMenu.content}
    </>
  );
}
