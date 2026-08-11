import React, { type ReactNode } from 'react';
import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';
import ColorModeToggle from '@theme/ColorModeToggle';
import LocaleToggle from '@site/src/components/DocsSidebar/LocaleToggle';

import styles from './styles.module.css';

/**
 * Bottom of the left sidebar nav: the language and dark/light switchers, side by side.
 * Both were previously in the top navbar; they're icon-only here so they pair up neatly.
 */
export default function SidebarFooter(): ReactNode {
  const { disableSwitch, respectPrefersColorScheme } = useThemeConfig().colorMode;
  const { colorModeChoice, setColorMode } = useColorMode();

  return (
    <div className={styles.sidebarFooter}>
      <LocaleToggle />
      {!disableSwitch && (
        <ColorModeToggle
          respectPrefersColorScheme={respectPrefersColorScheme}
          value={colorModeChoice}
          onChange={setColorMode}
        />
      )}
    </div>
  );
}
