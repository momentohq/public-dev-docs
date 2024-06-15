import StyleXWebpackPlugin from "@stylexjs/webpack-plugin";

export default function (context, options) {
  return {
    name: "stylex-docusaurus",

    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'stylesheet',
              href: context.baseUrl + 'stylex.css',
            },
          },
        ],
      };
    },

    configureWebpack(config, isServer, utils) {
      const dev = config.mode === "development";

      return {
        plugins: [
          new StyleXWebpackPlugin({
            dev,
            genConditionalClasses: true,
            treeshakeCompensation: true,
            unstable_moduleResolution: {
              type: "commonJS",
              rootDir: context.siteDir,
            },
            filename: "stylex.css",
          }),
        ],
      };
    },
  };
}