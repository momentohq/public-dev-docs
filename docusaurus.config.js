// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const exampleSnippetsPlugin = require('./plugins/example-code-snippets/dist/inject-example-code-snippets');
const languageApiSupportMatrixPlugin = require('./plugins/example-code-snippets/dist/language-api-support-matrix');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Momento Documentation",
  tagline: "Believe in Serverless!",
  url: "https://docs.momentohq.com",
  baseUrl: "/",
  projectName: "momentohq.github.io",
  organizationName: "momentohq",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",

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
      /**
    [
      require.resolve("@docusaurus/plugin-client-redirects"),
      {
        redirects: [
          // Redirect overview

          {
            to: '/',
            from: '/docs/overview',
          },
          // Redirect limits
          {
            to: '/manage/limits',
            from: '/limits',
          },
          {
            to: '/manage/limits',
            from: '/docs/limits',
          },
          // Redirect getting started
          {
            to: '/getting-started',
            from: '/docs/getting-started',
          },
          // Redirect pricing
          {
            to: '/manage/pricing',
            from: '/pricing',
          },
          {
            to: '/manage/pricing',
            from: '/docs/pricing',
          },
          // Redirect how-it-works
          {
            to: '/learn/how-it-works/',
            from: '/how-it-works',
          },
          {
            to: '/learn/how-it-works/',
            from: '/docs/how-it-works',
          },
          // Redirect momento-concepts
          {
            to: '/learn/how-it-works/',
            from: '/how-it-works/momento-concepts',
          },
          {
            to: '/learn/how-it-works/',
            from: '/docs/how-it-works/momento-concepts',
          },
          // Redirect how-it-works/caching-with-serverless
          {
            to: '/introduction/what-is-serverless-caching',
            from: '/how-it-works/caching-with-serverless',
          },
          {
            to: '/introduction/what-is-serverless-caching',
            from: '/docs/how-it-works/caching-with-serverless',
          },
          // Redirect category/caching-concepts
          {
            to: '/introduction/common-caching-patterns',
            from: '/docs/category/caching-concepts',
          },
          // Redirect caching-concepts/caching-strategies-and-patterns
          {
            to: '/introduction/common-caching-patterns',
            from: '/docs/caching-concepts/caching-strategies-and-patterns',
          },
          // Redirect guides
          {
            to: '/develop/guides/caching-with-aws-lambda',
            from: '/guides',
          },
          {
            to: '/develop/guides/caching-with-aws-lambda',
            from: '/docs/guides',
          },
          // Redirect guides/caching-with-aws-lambda
          {
            to: '/develop/guides/caching-with-aws-lambda',
            from: '/guides/caching-with-aws-lambda',
          },
          {
            to: '/develop/guides/caching-with-aws-lambda',
            from: '/docs/guides/caching-with-aws-lambda',
          },
          // Redirect API-reference
          {
            to: '/develop/api-reference',
            from: '/docs/API-reference',
          },
          {
            to: '/develop/api-reference',
            from: '/API-reference',
          },
          {
            from: '/develop/sdks-integrations/aws-secrets-manager',
            to: '/develop/integrations/aws-secrets-manager',
          },
          {
            from: '/develop/sdks-integrations/bulk-writing-from-redis-json-csv',
            to: '/develop/integrations/bulk-writing-from-redis-json-csv',
          },
          {
            from: '/develop/sdks-integrations/momento-cache-laravel-php',
            to: '/develop/integrations/momento-cache-laravel-php',
          },
          {
            from: '/develop/sdks-integrations/redis-client-compatibility',
            to: '/develop/integrations/redis-client-compatibility',
          },
          {
            from: '/develop/guides/cheat-sheets/momento-cache-go-cheat-sheet',
            to: '/develop/sdks/go/cheat-sheet',
          },
          {
            from: '/develop/guides/cheat-sheets/momento-cache-nodejs-cheat-sheet',
            to: '/develop/sdks/nodejs/cheat-sheet',
          },
          {
            from: '/develop/guides/cheat-sheets/momento-cache-php-cheat-sheet',
            to: '/develop/sdks/php/cheat-sheet',
          },
          {
            from: '/develop/guides/cheat-sheets/momento-cache-python-cheat-sheet',
            to: '/develop/sdks/python/cheat-sheet',
          },
          {
            from: '/develop/sdks-integrations/deploying-javascript-web-sdk',
            to: '/develop/sdks/web',
          },
          {
            from: '/develop/api-reference/auth-tokens',
            to: '/develop/api-reference/auth'
          }
        ],
        /**createRedirects(existingPath) {
          if (existingPath.includes('/docs')) {
            // Redirect from /docs/X to /X
            console.log("this is a test");
            return [
              existingPath.replace('/docs', '/'),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      }
    ], **/
    // This plugin will print out information / statistics about which SDK repos
    // are missing docs code snippets.
    './plugins/example-code-snippets/dist/example-code-snippets-post-build'
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: "",
        logo: {
          alt: "Momento Logo",
          src: "img/logo.svg",
          href: "/",
          target: "_blank",
        },
        items: [
          {to: '/cache', label: 'Cache', position: 'left'},
          {to: '/topics', label: 'Topics', position: 'left'},
          {to: '/vector-index', label: 'Vector Index', position: 'left'},
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
          src: "img/footer_logo.svg",
        },
        copyright: `Copyright © 2022 - ${new Date().getFullYear()} Momento, Inc.`,
        links: [
          {
            title: "Docs",
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
        additionalLanguages: ["java", "rust", "csharp", "php", "elixir"],
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
