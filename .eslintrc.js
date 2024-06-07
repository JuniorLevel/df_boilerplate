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
	],
	plugins: ['react', 'ft-flow', 'fb-flow', 'react-hooks', 'jest', 'import'],
	rules: {
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'import/no-extraneous-dependencies': 0,
		'react/jsx-filename-extension': 0,
		'fb-flow/use-indexed-access-type': 2,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-expect': 'error',
		'react/function-component-definition': 0,
	},
	env: {
		browser: true,
		es2021: true,
	},
};
