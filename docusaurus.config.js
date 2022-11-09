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
    locales: ["en"],
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
                to: "/docs/overview",
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
