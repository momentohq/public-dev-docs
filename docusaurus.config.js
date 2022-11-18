// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Momento Docs",
  tagline: "The World's Fastest Cache",
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
            to: '/',
            from: '/docs/overview',
          },
          // Redirect limits
          {
            to: '/limits',
            from: '/docs/limits',
          },
          // Redirect getting started
          {
            to: '/getting-started',
            from: '/docs/getting-started',
          },
          // Redirect pricing
          {
            to: '/pricing',
            from: '/docs/pricing',
          },
          // Redirect API-reference
          {
            to: '/API-reference',
            from: '/docs/API-reference',
          },
          // Redirect how-it-works
          {
            to: '/how-it-works',
            from: '/docs/how-it-works',
          },
          // Redirect momento-concepts
          {
            to: '/how-it-works/momento-concepts',
            from: '/docs/how-it-works/momento-concepts',
          },
          // Redirect how-it-works/caching-with-serverless
          {
            to: '/how-it-works/caching-with-serverless',
            from: '/docs/how-it-works/caching-with-serverless',
          },
          // Redirect category/caching-concepts
          {
            to: '/category/caching-concepts',
            from: '/docs/category/caching-concepts',
          },
          // Redirect caching-concepts/caching-strategies-and-patterns
          {
            to: '/caching-concepts/caching-strategies-and-patterns',
            from: '/docs/caching-concepts/caching-strategies-and-patterns',
          },
          // Redirect guides
          {
            to: '/guides',
            from: '/docs/guides',
          },
          // Redirect guides/caching-with-aws-lambda
          {
            to: '/guides/caching-with-aws-lambda',
            from: '/docs/guides/caching-with-aws-lambda',
          },
          // Redirect serverless-cache-walkthrough
          {
            to: '/serverless-cache-walkthrough',
            from: '/docs/serverless-cache-walkthrough',
          },
          // Redirect serverless-cache-walkthrough/adding-a-cache-to-serverless
          {
            to: '/serverless-cache-walkthrough/adding-a-cache-to-serverless',
            from: '/docs/serverless-cache-walkthrough/adding-a-cache-to-serverless',
          },
          // Redirect serverless-cache-walkthrough/deploying-a-basic-serverless-application
          {
            to: '/serverless-cache-walkthrough/deploying-a-basic-serverless-application',
            from: '/docs/serverless-cache-walkthrough/deploying-a-basic-serverless-application',
          },
          // Redirect serverless-cache-walkthrough/configuring-momento
          {
            to: '/serverless-cache-walkthrough/configuring-momento',
            from: '/docs/serverless-cache-walkthrough/configuring-momento',
          },
          // Redirect serverless-cache-walkthrough/read-aside-caching-with-momento
          {
            to: '/serverless-cache-walkthrough/read-aside-caching-with-momento',
            from: '/docs/serverless-cache-walkthrough/read-aside-caching-with-momento',
          },
          // Redirect serverless-cache-walkthrough/write-aside-caching-with-momento
          {
            to: '/serverless-cache-walkthrough/write-aside-caching-with-momento',
            from: '/docs/serverless-cache-walkthrough/write-aside-caching-with-momento',
          },
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
        },**/
      }
    ],
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
          href: "https://www.gomomento.com/",
          target: "_blank",
        },
        items: [
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
        copyright: `Copyright © ${new Date().getFullYear()} Momento, Inc.`,
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation Home",
                to: "/",
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
        ],
      },
      prism: {
        additionalLanguages: ["java", "rust", "csharp"],
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
