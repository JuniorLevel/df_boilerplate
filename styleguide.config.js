/* eslint-disable global-require */
/* eslint-disable no-unused-vars */

const path = require('path');

module.exports = {
	title: 'Документация',
	pagePerSection: true,
	sections: [
		{
			name: 'DiffClosedCardsPage',
			content: 'src/templates/DiffClosedCardsPage/DiffClosedCardsPage.md',
		},
		{
			name: 'FiltersClosedPreviewPage',
			content:
				'src/templates/FiltersClosedPreviewPage/FiltersClosedPreviewPage.md',
		},
		{
			name: 'FiltersClosedPage',
			content: 'src/templates/FiltersClosedPage/FiltersClosedPage.md',
		},
		{
			name: 'OrderPage',
			content: 'src/templates/OrderPage/OrderPage.md',
		},
		{
			name: 'Layout',
			content: 'src/templates/HomePage/Layout.md',
		},
		{
			name: 'WelcomePage',
			content: 'src/templates/WelcomePages/Welcome.md',
		},
	],
	styles: {
		StyleGuide: {
			content: { minWidth: '100%', padding: 5 },
		},
		Playground: {
			preview: { padding: 0 },
		},
	},
	styleguideComponents: {
		Wrapper: path.join(__dirname, 'src/styleguide/Wrapper.jsx'),
	},
	ignore: ['**/__snapshots__/**', '**/src/*.test.js'],
	webpackConfig: require('./webpack.config'),
};
