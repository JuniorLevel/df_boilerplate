/* eslint-disable global-require */
/* eslint-disable no-unused-vars */

const path = require('path');

module.exports = {
	title: 'Документация',
	pagePerSection: true,
	sections: [
		{
			name: 'OrderListPreviewPage',
			content:
				'src/styleguide/templates/OrderListPreviewPage/OrderListPreviewPage.md',
		},
		{
			name: 'DiffClosedCardsPage',
			content:
				'src/styleguide/templates/DiffClosedCardsPage/DiffClosedCardsPage.md',
		},
		{
			name: 'OrdersFilterClosedPage',
			content:
				'src/styleguide/templates/OrdersFilterClosedPage/OrdersFilterClosedPage.md',
		},
		{
			name: 'OrdersFilterClosed',
			content:
				'src/lib/components/OrdersFilter/OrdersFilterClosed/OrdersFilterClosed.md',
		},
		{
			name: 'OrdersFilterOpenedPage',
			content:
				'src/styleguide/templates/OrdersFilterOpenedPage/OrdersFilterOpenedPage.md',
		},
		{
			name: 'OrderPage',
			content: 'src/styleguide/templates/OrderPage/OrderPage.md',
		},
		{
			name: 'Layout',
			content: 'src/styleguide/templates/HomePage/Layout.md',
		},
		{
			name: 'WelcomePage',
			content: 'src/styleguide/templates/WelcomePages/Welcome.md',
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
