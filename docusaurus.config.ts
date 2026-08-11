import { themes } from "prism-react-renderer";

import exampleSnippetsPlugin from './plugins/example-code-snippets/dist/inject-example-code-snippets';
import languageApiSupportMatrixPlugin from './plugins/example-code-snippets/dist/language-api-support-matrix';
import stylexPlugin from './plugins/stylex-docusaurus.plugin.mjs';
import { REDIRECT_OPTIONS } from "./site/redirects";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Momento Docs",
  tagline: "Explore references, grab sample code, and get to know key concepts for our real-time data platform.",
  url: "https://docs.momentohq.com",
  baseUrl: "/",
  projectName: "momentohq.github.io",
  organizationName: "momentohq",
  trailingSlash: false,
  onBrokenLinks: "throw",
  favicon: "img/favicon.png",
  scripts: [],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
      },
      ja: {
        label: '日本語',
        htmlLang: 'ja',
        path: 'ja',
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsible: true,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/momentohq/public-dev-docs/tree/main/",
          routeBasePath: '/', // Serve the docs at the site's root
          remarkPlugins: [exampleSnippetsPlugin, languageApiSupportMatrixPlugin]
        },
        blog: false, // Turn off blog functionality
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },

      }),
    ],
  ],
  plugins: [
    "docusaurus-plugin-sass",
    stylexPlugin,
    [
      require.resolve("docusaurus-gtm-plugin"),
      {
        id: "GTM-THBDHDQ", // GTM Container ID
      },
    ],
    [
      require.resolve("@docusaurus/plugin-client-redirects"),
      REDIRECT_OPTIONS,
    ],
    // This plugin will print out information / statistics about which SDK repos
    // are missing docs code snippets.
    './plugins/example-code-snippets/dist/example-code-snippets-post-build'
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      /** colorMode: {
       disableSwitch: true,
       }, **/

      navbar: {
        // The navbar is only rendered on mobile (see src/theme/Navbar). On desktop all this
        // chrome lives in the left sidebar instead. There are no navbar items: the product
        // links the old top nav carried are reachable through the docs sidebar, and the
        // locale switcher and color mode toggle live in the sidebar footer. Search lives in
        // the sidebar header. The mobile drawer therefore shows only the docs sidebar on doc
        // pages (the "Back to main menu" link is hidden there via the swizzled SecondaryMenu).
        title: "",
        logo: {
          alt: "Momento Logo",
          src: "img/momento-docs-logo-forest.svg",
          srcDark: "img/momento-docs-logo-white.svg",
          href: "/"
        },
        items: [],
      },
      // The footer is swizzled (src/theme/Footer) to mirror the marketing site footer
      // (gomomento.com). Its content lives in src/data/marketingFooter.ts, not here, so
      // there is no `footer` themeConfig block.
      prism: {
        additionalLanguages: ["java", "kotlin", "rust", "csharp", "php", "elixir", "swift", "dart"],
        theme: themes.github,
        darkTheme: themes.dracula,
      },
      algolia: {
        appId: '3P10N8HW6D',
        apiKey: 'e88c1f69b2ea7498886f4275530f9233',
        indexName: 'momentohq',
        contextualSearch: false,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false
        },
      },
      mermaid: {
        theme: {
          light: 'forest',
          dark: 'forest'
        }
      },
    }),
};

module.exports = config;
