const path = require('path');
const tsconfigPaths = require('vite-tsconfig-paths').default;
const svgr = require('vite-plugin-svgr');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  },

  async viteFinal(config) {
    config.plugins = [
      ...config.plugins,
      tsconfigPaths({
        projects: [path.resolve(path.dirname(__dirname), '', 'tsconfig.json')]
      }),
      svgr()
    ];

    return config;
  }
};
