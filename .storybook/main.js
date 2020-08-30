const path = require('path')

//library webpack config
const npmLibConfig = require('../config/webpack.config')


module.exports = {
  "stories": [
    "../src/**/**/**/*.stories.mdx",
    "../src/**/**/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    return { ...config, module: { ...config.module, rules: npmLibConfig.module.rules } };
  }
}
