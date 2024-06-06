// @flow
module.exports = {
  parser: 'hermes-eslint',
  extends: [
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:ft-flow/recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react', 'jsx-a11y', 'import', 'ft-flow'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
