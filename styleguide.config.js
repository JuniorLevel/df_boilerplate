/* eslint-disable global-require */
/* eslint-disable no-unused-vars */

const path = require('path');

module.exports = {
	title: 'Документация',
	pagePerSection: true,
	sections: [
		{
			name: 'FiltersOpenedPage',
			content: 'src/lib/templates/FiltersOpenedPage/FiltersOpenedPage.md',
		},
		{
			name: 'FiltersClosed',
			content: 'src/lib/components/FiltersClosed/FiltersClosed.md',
		},
		{
			name: 'DiffClosedCardsPage',
			content: 'src/lib/templates/DiffClosedCardsPage/DiffClosedCardsPage.md',
		},
		{
			name: 'FiltersClosedPreviewPage',
			content:
				'src/lib/templates/FiltersClosedPreviewPage/FiltersClosedPreviewPage.md',
		},
		{
			name: 'FiltersClosedPage',
			content: 'src/lib/templates/FiltersClosedPage/FiltersClosedPage.md',
		},
		{
			name: 'OrderPage',
			content: 'src/lib/templates/OrderPage/OrderPage.md',
		},
		{
			name: 'Layout',
			content: 'src/lib/templates/HomePage/Layout.md',
		},
		{
			name: 'WelcomePage',
			content: 'src/lib/templates/WelcomePages/Welcome.md',
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
