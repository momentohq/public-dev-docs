import React, { type ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useAlternatePageUtils } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import IconLanguage from '@theme/Icon/Language';

import styles from './styles.module.css';

/**
 * Icon-only language switcher for the sidebar footer. This is the locale dropdown from the
 * old top navbar, reduced to just the globe icon (the active locale's name is dropped) so it
 * can sit beside the color-mode toggle. Links are built the same way the theme's
 * LocaleDropdownNavbarItem builds them, via useAlternatePageUtils.
 */
export default function LocaleToggle(): ReactNode {
  const {
    siteConfig,
    i18n: { currentLocale, locales, localeConfigs },
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();

  if (locales.length <= 1) {
    return null;
  }

  const getUrl = (locale: string) => {
    const localeConfig = localeConfigs[locale];
    // Shorter paths when the localized sites share a domain, matching the theme's behavior.
    const isSameDomain = localeConfig?.url === siteConfig.url;
    return isSameDomain
      ? `pathname://${alternatePageUtils.createUrl({ locale, fullyQualified: false })}`
      : alternatePageUtils.createUrl({ locale, fullyQualified: true });
  };

  return (
    <div className={styles.localeToggle}>
      <button
        type="button"
        className={`clean-btn ${styles.localeButton}`}
        aria-haspopup="true"
        aria-label={translate({
          id: 'sidebar.localeToggle.ariaLabel',
          message: 'Switch language',
          description: 'ARIA label for the sidebar language switcher',
        })}
        title={translate({
          id: 'sidebar.localeToggle.title',
          message: 'Switch language',
          description: 'Tooltip for the sidebar language switcher',
        })}>
        <IconLanguage className={styles.localeIcon} />
      </button>
      <ul className={styles.localeMenu}>
        {locales.map((locale) => (
          <li key={locale}>
            <a
              href={getUrl(locale)}
              target="_self"
              lang={localeConfigs[locale]?.htmlLang}
              aria-current={locale === currentLocale ? 'true' : undefined}
              className={locale === currentLocale ? styles.localeItemActive : undefined}>
              {localeConfigs[locale]?.label ?? locale}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
