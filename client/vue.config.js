const path = require('path');

module.exports = {
  pluginOptions: {
    apollo: {
      enableMocks: false,
      enableEngine: false,
    },
  },

  transpileDependencies: [
    'vuetify',
  ],

  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    // eslint-disable-next-line no-use-before-define
    types.forEach((type) => addStyleResource(config.module.rule('scss').oneOf(type)));
  },
};

function addStyleResource (rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/settings/*.scss'),
        path.resolve(__dirname, './src/styles/functions/*.scss'),
        path.resolve(__dirname, './src/styles/mixins/*.scss'),
        path.resolve(__dirname, './src/styles/variables/*.scss'),
      ],
    });
}
