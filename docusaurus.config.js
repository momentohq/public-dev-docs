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
            to: '/cache/manage/limits',
            from: '/limits',
          },
          {
            to: '/cache/manage/limits',
            from: '/docs/limits',
          },
          // Redirect getting started
          {
            to: '/cache/getting-started',
            from: '/docs/getting-started',
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
            to: '/cache/learn/how-it-works/',
            from: '/how-it-works',
          },
          {
            to: '/cache/learn/how-it-works/',
            from: '/docs/how-it-works',
          },
          // Redirect momento-concepts
          {
            to: '/cache/learn/how-it-works/',
            from: '/how-it-works/momento-concepts',
          },
          {
            to: '/cache/learn/how-it-works/',
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
            to: '/cache/develop/guides/caching-with-aws-lambda',
            from: '/guides',
          },
          {
            to: '/cache/develop/guides/caching-with-aws-lambda',
            from: '/docs/guides',
          },
          // Redirect guides/caching-with-aws-lambda
          {
            to: '/cache/develop/guides/caching-with-aws-lambda',
            from: '/guides/caching-with-aws-lambda',
          },
          {
            to: '/cache/develop/guides/caching-with-aws-lambda',
            from: '/docs/guides/caching-with-aws-lambda',
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
            to: '/cache/develop/sdks/go/cheat-sheet',
          },
          {
            from: '/develop/guides/cheat-sheets/momento-cache-nodejs-cheat-sheet',
            to: '/cache/develop/sdks/nodejs/cheat-sheet',
          },
          {
            from: '/develop/guides/cheat-sheets/momento-cache-php-cheat-sheet',
            to: '/cache/develop/sdks/php/cheat-sheet',
          },
          {
            from: '/develop/guides/cheat-sheets/momento-cache-python-cheat-sheet',
            to: '/cache/develop/sdks/python/cheat-sheet',
          },
          {
            from: '/develop/sdks-integrations/deploying-javascript-web-sdk',
            to: '/cache/develop/sdks/web',
          },
          {
            from: '/develop/api-reference/auth-tokens',
            to: '/cache/develop/api-reference/auth'
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
            to: '/topics/develop/sdks/nodejs/cheat-sheet'
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
