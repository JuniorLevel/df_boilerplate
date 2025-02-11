module.exports = {
	parser: 'hermes-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'prettier',
		'eslint:recommended',
		'plugin:ft-flow/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/recommended',
		'plugin:react/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
	],
	plugins: [
		'react',
		'ft-flow',
		'fb-flow',
		'react-hooks',
		'import',
		'eslint-plugin-no-inline-styles',
	],
	rules: {
		'react/jsx-uses-react': 2,
		'react/jsx-uses-vars': 2,
		'import/no-extraneous-dependencies': 0,
		'react/jsx-filename-extension': 0,
		'fb-flow/use-indexed-access-type': 2,
		'react-hooks/rules-of-hooks': 2,
		'react-hooks/exhaustive-deps': 1,
		'react/function-component-definition': 0,
		'import/prefer-default-export': 0,
		'import/no-default-export': 2,
		'consistent-return': 0,
		'no-inline-styles/no-inline-styles': 2,
	},
	env: {
		browser: true,
		es2021: true,
	},
};
