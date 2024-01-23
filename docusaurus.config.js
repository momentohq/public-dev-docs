// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const exampleSnippetsPlugin = require('./plugins/example-code-snippets/dist/inject-example-code-snippets');
const languageApiSupportMatrixPlugin = require('./plugins/example-code-snippets/dist/language-api-support-matrix');

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
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.png",

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
    [
      require.resolve("docusaurus-gtm-plugin"),
      {
        id: "GTM-THBDHDQ", // GTM Container ID
      },
    ],
    [
      require.resolve("@docusaurus/plugin-client-redirects"),
      {
        redirects: [
          // Redirect overview

          {
            to: '/cache',
            from: '/docs/overview',
          },
          // Redirect limits
          {
            to: '/cache/limits',
            from: '/limits',
          },
          {
            to: '/cache/limits',
            from: '/docs/limits',
          },
          // Redirect getting started
          {
            to: '/cache/getting-started',
            from: '/getting-started',
          },
          // Redirect pricing
          {
            to: '/cache/manage/pricing',
            from: '/pricing',
          },
          {
            to: '/cache/manage/pricing',
            from: '/docs/pricing',
          },
          // Redirect how-it-works
          {
            to: '/cache',
            from: '/how-it-works',
          },
          {
            to: '/cache',
            from: '/docs/how-it-works',
          },
          // Redirect momento-concepts
          {
            to: '/cache',
            from: '/how-it-works/momento-concepts',
          },
          {
            to: '/cache',
            from: '/docs/how-it-works/momento-concepts',
          },
          // Redirect how-it-works/caching-with-serverless
          {
            to: '/cache/introduction/what-is-serverless-caching',
            from: '/how-it-works/caching-with-serverless',
          },
          {
            to: '/cache/introduction/what-is-serverless-caching',
            from: '/docs/how-it-works/caching-with-serverless',
          },
          // Redirect category/caching-concepts
          {
            to: '/cache/introduction/common-caching-patterns',
            from: '/docs/category/caching-concepts',
          },
          // Redirect caching-concepts/caching-strategies-and-patterns
          {
            to: '/cache/introduction/common-caching-patterns',
            from: '/docs/caching-concepts/caching-strategies-and-patterns',
          },
          // Redirect guides
          {
            to: '/cache',
            from: '/guides',
          },
          {
            to: '/cache',
            from: '/docs/guides',
          },
          {
            to: '/cache',
            from: '/guides/caching-with-aws-lambda',
          },
          {
            to: '/cache',
            from: '/docs/guides/caching-with-aws-lambda',
          },
          {
            to: '/cache/introduction/what-is-serverless-caching',
            from: '/cache/develop/guides/caching-with-aws-lambda'
          },
          // Redirect API-reference
          {
            to: '/cache/develop/api-reference',
            from: '/docs/API-reference',
          },
          {
            to: '/cache/develop/api-reference',
            from: '/API-reference',
          },
          {
            from: '/develop/sdks-integrations/aws-secrets-manager',
            to: '/cache/develop/integrations/aws-secrets-manager',
          },
          {
            from: '/develop/sdks-integrations/bulk-writing-from-redis-json-csv',
            to: '/cache/develop/integrations/bulk-writing-from-redis-json-csv',
          },
          {
            from: '/develop/sdks-integrations/momento-cache-laravel-php',
            to: '/cache/develop/integrations/momento-cache-laravel-php',
          },
          {
            from: '/develop/sdks-integrations/redis-client-compatibility',
            to: '/cache/develop/integrations/redis-client-compatibility',
          },
          {
            from: '/develop/guides/cheat-sheets/momento-cache-go-cheat-sheet',
            to: '/sdks/go/cache',
          },
          {
            from: '/develop/guides/cheat-sheets/momento-cache-nodejs-cheat-sheet',
            to: '/sdks/nodejs/cache',
          },
          {
            from: '/develop/guides/cheat-sheets/momento-cache-php-cheat-sheet',
            to: '/sdks/php/cache',
          },
          {
            from: '/develop/guides/cheat-sheets/momento-cache-python-cheat-sheet',
            to: '/sdks/python/cache',
          },
          {
            from: '/develop/sdks-integrations/deploying-javascript-web-sdk',
            to: '/sdks/web',
          },
          {
            from: '/develop/api-reference/collections/collectionttl',
            to: '/cache/develop/api-reference/collection-ttl',
          },
          {
            from: '/develop/api-reference/collections/sortedsets',
            to: '/cache/develop/api-reference/sorted-set-collections',
          },
          {
            from: '/develop/api-reference/collections/dictionary',
            to: '/cache/develop/api-reference/dictionary-collections',
          },
          {
            from: '/develop/api-reference/collections/list',
            to: '/cache/develop/api-reference/list-collections',
          },
          {
            from: '/develop/api-reference/collections/sets',
            to: '/cache/develop/api-reference/set-collections',
          },
          {
            from: '/develop/api-reference/auth-tokens',
            to: '/cache/develop/api-reference/auth'
          },
          {
            from: '/develop/datatypes',
            to: '/cache/develop/basics/datatypes'
          },
          {
            from: '/topics/develop/integrations/aws-secrets-manager',
            to: '/topics/integrations/aws-secrets-manager'
          },
          //This redirects from the pre v1.5.0 of the docs for the Topics page to the home page for the topics service /topics.
          {
            from: '/introduction/momento-topics',
            to: '/topics'
          },
          //This redirects from the pre v1.5.0 docs api-reference/topics page to the new /topics/develop/api-reference page.
          {
            from: '/develop/api-reference/topics',
            to: '/topics/develop/api-reference'
          },
          //This redirects users from the pre v1.5.0 docs location of the Node.js topics cheat sheet to the new location under /topics.
          {
            from: '/develop/sdks/nodejs/topics-cheat-sheet',
            to: '/sdks/nodejs/topics'
          },
          {
            from: '/topics/webhooks',
            to: '/topics/webhooks/overview'
          }
        ],
        // This came in with v1.5.0 of the docs where we split out by service.
        // This function redirects anything coming into /develop, /learn, /manage, or /introduction to /cache/<directory>.
        createRedirects(existingPath) {
          if (existingPath.includes('/develop') || existingPath.includes('/learn') || existingPath.includes('/manage') || existingPath.includes('/introduction')) {
            return [
              existingPath.replace('/cache/develop', '/develop'),
              existingPath.replace('/cache/learn', '/learn'),
              existingPath.replace('/cache/manage', '/manage'),
              existingPath.replace('/cache/introduction', '/introduction'),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      }
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
        title: "",
        logo: {
          alt: "Momento Logo",
          src: "img/momento-docs-logo-forest.svg",
          srcDark: "img/momento-docs-logo-white.svg",
          href: "/"
        },
        items: [
          { to: '/cache', label: 'Cache', position: 'left' },
          { to: '/topics', label: 'Topics', position: 'left' },
          { to: '/vector-index', label: 'Vector Index', position: 'left' },
          { to: '/leaderboards', label: 'Leaderboards', position: 'left' },
          {
            to: '/sdks', label: 'SDKs', position: 'right'
          },
          {
            to: "https://www.gomomento.com/blog",
            label: "Blog",
            position: "right",
          },
          {
            to: "https://github.com/momentohq/",
            label: "Github",
            position: "right",
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "Momento Logo",
          src: "img/momento-logo-white.svg",
          srcDark: "img/momento-logo-forest.svg"
        },
        copyright: `Copyright © 2022 - ${new Date().getFullYear()} Momento, Inc.`,
        links: [
          {
            title: "Sites",
            items: [
              {
                label: 'Documentation Home',
                to: '/',
              },
              {
                label: 'Momento Home',
                to: 'https://www.gomomento.com/',
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                to: "https://discord.gg/3HkAKjUZGq",
              },
              {
                label: "Twitter",
                to: "https://twitter.com/momentohq",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Contact us",
                to: "https://www.gomomento.com/contact-us",
              },
              {
                label: "Blog",
                to: "https://www.gomomento.com/blog",
              },
              {
                label: "Github",
                to: "https://github.com/momentohq",
              },
            ],
          },
          /** Commenting this out for now as it is messing with the formatting and with the menu it may not be needed anyhow.
            {
            title: "Language",
            items: [
              {
                label: "English",
                to: "https://docs.momentohq.com/",
              },
              {
                label: "日本語",
                to: "https://docs.momentohq.com/ja/",
              },
            ],
          }, **/
        ],
      },
      prism: {
        additionalLanguages: ["java", "kotlin", "rust", "csharp", "php", "elixir", "swift", "dart"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false,
        },
      },
    }),
};

module.exports = config;
