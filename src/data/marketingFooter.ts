/**
 * Footer content for the docs site, mirrored from the marketing site footer at
 * https://www.gomomento.com/.
 *
 * ── How to keep this in sync with the marketing site ─────────────────────────
 *
 * The marketing site is an Astro site; its footer is rendered by
 * `src/components/SiteFooter.astro` (component id `e77awp6a`) and driven by a footer
 * links data structure. When the marketing footer changes, mirror the change here.
 *
 * To sync:
 *   1. Open https://www.gomomento.com/ (English) and https://www.gomomento.com/jp/
 *      (Japanese) and view source on the <footer class="site-footer"> element.
 *   2. Update the `groups` array below so the titles, link labels, and hrefs match the
 *      marketing site's footer nav. The marketing site's hrefs are site-relative paths
 *      (e.g. "/products/valkey-router/"); keep them site-relative so the resolver below
 *      can map them to the right origin per locale.
 *   3. The legal links (privacy/cookie policy, ToS, consent preferences) and the locale
 *      switcher are intentionally NOT mirrored here — see the top-of-file note in
 *      src/theme/Footer/index.tsx.
 *   4. If the marketing site adds a new nav group or link, add it here in both `en` and
 *      `ja`. Keep the two locales in lockstep.
 *   5. The marketing footer's "Documentation" link points back at this docs site. Here it
 *      is an internal docs route (`internal: true`, href "/"), so it navigates in-app
 *      instead of opening a new tab. Keep it internal.
 *
 * The structure below is deliberately close to the marketing site's own footer data
 * shape (group → title + link list) so a future agent can diff the two at a glance.
 */

export interface FooterLink {
  /** Link label, already localized. */
  label: string;
  /**
   * Destination. Site-relative paths (e.g. "/products/valkey-router/") resolve to the
   * marketing site for the current locale; absolute URLs (e.g.
   * "https://docs.momentohq.com") are used verbatim.
   */
  href: string;
  /**
   * When true, the link points at this docs site itself (a Docusaurus-internal route) and
   * is rendered as an in-app navigation rather than an external jump. The marketing
   * footer's "Documentation" link becomes an internal link to the docs root here, since
   * the user is already on the docs site. Marketing-site links leave this unset/false.
   */
  internal?: boolean;
}

export interface FooterGroup {
  title: string;
  items: FooterLink[];
}

type LocaleGroups = {
  en: FooterGroup[];
  ja: FooterGroup[];
};

const groups: LocaleGroups = {
  en: [
    {
      title: 'Products',
      items: [
        { label: 'Valkey Router', href: '/products/valkey-router/' },
        { label: 'Valkey Operator', href: '/products/valkey-operator/' },
        { label: 'Valkey Image', href: '/products/valkey-image/' },
      ],
    },
    {
      title: 'Solutions',
      items: [
        { label: 'Media and entertainment', href: '/solutions/media-entertainment/' },
        { label: 'Game development', href: '/solutions/game-development/' },
      ],
    },
    {
      title: 'Resources',
      items: [
        { label: 'Documentation', href: '/', internal: true },
        { label: 'Blog', href: '/blog/' },
        { label: 'Customer Stories', href: '/resources/case-studies/' },
        { label: 'Events', href: '/events/' },
      ],
    },
    {
      title: 'Company',
      items: [
        { label: 'Pricing', href: '/pricing/' },
        { label: 'Contact Us', href: '/contact-us/' },
      ],
    },
  ],
  ja: [
    {
      title: '製品',
      items: [
        { label: 'Valkey Router', href: '/products/valkey-router/' },
        { label: 'Valkey Operator', href: '/products/valkey-operator/' },
        { label: 'Valkey Image', href: '/products/valkey-image/' },
      ],
    },
    {
      title: 'ソリューション',
      items: [
        { label: 'メディア・エンターテインメント', href: '/solutions/media-entertainment/' },
        { label: 'ゲーム開発', href: '/solutions/game-development/' },
      ],
    },
    {
      title: 'リソース',
      items: [
        { label: 'ドキュメント', href: '/', internal: true },
        { label: 'ブログ', href: '/blog/' },
        { label: '導入事例', href: '/resources/case-studies/' },
        { label: 'イベント', href: '/events/' },
      ],
    },
    {
      title: '会社情報',
      items: [
        { label: '料金', href: '/pricing/' },
        { label: 'お問い合わせ', href: '/contact-us/' },
      ],
    },
  ],
};

/** Copyright line for each locale, matching the marketing site footer. */
export const copyright: Record<'en' | 'ja', string> = {
  en: `© ${new Date().getFullYear()} Momento, Inc.`,
  ja: `© ${new Date().getFullYear()} Momento, Inc.`,
};

/** Origin of the marketing site per locale (site-relative hrefs resolve against this). */
const marketingOrigin: Record<'en' | 'ja', string> = {
  en: 'https://www.gomomento.com',
  ja: 'https://www.gomomento.com',
};

/**
 * Resolve a footer href to an absolute URL for the given locale.
 *
 * - Absolute URLs (http/https) are returned as-is.
 * - Site-relative paths are joined to the marketing site's origin. On the Japanese locale
 *   the marketing site prefixes routes with "/jp" (e.g. "/jp/pricing/"), so we insert that
 *   prefix for site-relative paths.
 *
 * Internal docs links (`FooterLink.internal`) are NOT resolved here — they are rendered
 * via Docusaurus's in-app `Link to` in the component, which handles the locale prefix
 * itself. Calling this for an internal href is a programmer error.
 */
export function resolveFooterHref(href: string, locale: 'en' | 'ja'): string {
  if (/^https?:\/\//i.test(href)) {
    return href;
  }
  const origin = marketingOrigin[locale];
  if (locale === 'ja') {
    // The Japanese marketing site lives under /jp; site-relative hrefs already start with "/".
    return `${origin}/jp${href}`;
  }
  return `${origin}${href}`;
}

export function getFooterGroups(locale: 'en' | 'ja'): FooterGroup[] {
  return groups[locale] ?? groups.en;
}
