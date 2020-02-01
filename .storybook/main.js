import 'styleguide/src/'
module.exports = {
  stories: ["../stories/**/*.stories.(js|mdx)"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    "@storybook/addon-a11y/register",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-docs/register"
  ]
};
