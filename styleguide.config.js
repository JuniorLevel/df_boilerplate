/* eslint-disable global-require */
/* eslint-disable no-unused-vars */

module.exports = {
	title: 'Styleguidist',
	components: './src/templates/[A-Z]**/*.jsx',
	ignore: ['**/__snapshots__/**', '**/src/*.test.js'],
	webpackConfig: require('./webpack.config'),
};
