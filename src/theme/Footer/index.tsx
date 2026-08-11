import React, { type ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

import {
  getFooterGroups,
  resolveFooterHref,
  copyright,
} from '@site/src/data/marketingFooter';

import styles from './styles.module.css';

/**
 * Site footer, recreated to match the marketing site footer at
 * https://www.gomomento.com/ as closely as possible.
 *
 * Structure (top to bottom):
 *   - logo row: Momento wordmark (links to the marketing site home)
 *   - nav: four link groups (Products / Solutions / Resources / Company)
 *   - bottom bar: copyright line
 *
 * Deliberately omitted from the marketing footer:
 *   - The language/region switcher. The docs site already has its own locale switcher in
 *     the left sidebar (src/components/DocsSidebar/LocaleToggle); duplicating it in the
 *     footer would be confusing. Footer labels are localized per current locale instead.
 *   - The legal links (Privacy Policy, Cookie Policy, Terms of Service, Consent
 *     Preferences). These belong on the marketing site, not the docs site.
 *
 * The link content (group titles, link labels, hrefs) lives in
 * src/data/marketingFooter.ts, which is the single sync point with the marketing site —
 * see the docblock at the top of that file for the update workflow.
 *
 * Styling ports the marketing site's footer CSS (originally scoped via Astro's
 * data-astro-cid-e77awp6a) to CSS modules, using the same design tokens. The one
 * structural adaptation for this docs site: the footer spans the full page width (the
 * marketing site constrains it to a 1080px column), because the docs layout's left
 * sidebar already defines the content column and a second inner max-width would double
 * up. The inner footer content keeps the marketing site's max-width and centering.
 */
export default function Footer(): ReactNode {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const locale = (currentLocale === 'ja' ? 'ja' : 'en') as 'en' | 'ja';
  const groups = getFooterGroups(locale);

  // The marketing footer uses the white Momento wordmark on its dark green surface. The
  // docs footer keeps that same dark surface in both color modes (it is a brand surface,
  // not a theme-aware one), so the white wordmark is always correct.
  const logoSrc = '/img/momento-logo-white.svg';

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerInner}>
        <div className={styles.footerLogoRow}>
          <Link
            className={styles.footerLogoLink}
            href={resolveFooterHref('/', locale)}
            aria-label={locale === 'ja' ? 'Momento ホーム' : 'Momento home'}
          >
            <img
              src={logoSrc}
              alt="Momento"
              width={150}
              height={31}
              className={styles.footerLogo}
            />
          </Link>
        </div>

        <nav className={styles.footerNav} aria-label="Footer navigation">
          {groups.map((group, index) => (
            <section
              key={group.title}
              className={styles.footerGroup}
              aria-labelledby={`footer-group-${index}`}
            >
              <h2 id={`footer-group-${index}`} className={styles.footerGroupTitle}>
                {group.title}
              </h2>
              <ul className={styles.footerLinkList}>
                {group.items.map((item) => (
                  <li key={`${item.href}-${item.label}`} className={styles.footerLinkItem}>
                    {item.internal ? (
                      <Link className={styles.footerLink} to={item.href}>
                        {item.label}
                      </Link>
                    ) : (
                      <Link
                        className={styles.footerLink}
                        href={resolveFooterHref(item.href, locale)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>

        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>{copyright[locale]}</p>
        </div>
      </div>
    </footer>
  );
}
