/* eslint-disable global-require */
/* eslint-disable no-unused-vars */

const path = require('path');

module.exports = {
	title: 'Документация',
	pagePerSection: true,
	sections: [
		{
			name: 'TimeWidgetsPage',
			content: 'src/templates/TimeWidgetsPage/TimeWidgetsPage.md',
		},
		{ name: 'OrderPage', content: 'src/templates/OrderPage/OrderPage.md' },
		{ name: 'HomePage', content: 'src/templates/HomePage/HomePage.md' },
		{
			name: 'FiltersOpenedPage',
			content: 'src/templates/FiltersOpenedPage/FiltersOpenedPage.md',
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
			name: 'DiffOpenedCardsPage',
			content: 'src/templates/DiffOpenedCardsPage/DiffOpenedCardsPage.md',
		},
		{
			name: 'DiffClosedCardsPage',
			content: 'src/templates/DiffClosedCardsPage/DiffClosedCardsPage.md',
		},
		{
			name: 'WelcomePage1',
			content: 'src/templates/WelcomePage1/WelcomePage1.md',
		},
		{
			name: 'WelcomePage2',
			content: 'src/templates/WelcomePage2/WelcomePage2.md',
		},
		{
			name: 'WelcomePage3',
			content: 'src/templates/WelcomePage3/WelcomePage3.md',
		},
		{
			name: 'WelcomePage4',
			content: 'src/templates/WelcomePage4/WelcomePage4.md',
		},
		{
			name: 'WelcomePage5',
			content: 'src/templates/WelcomePage5/WelcomePage5.md',
		},
		{
			name: 'WelcomePage6',
			content: 'src/templates/WelcomePage6/WelcomePage6.md',
		},
		{
			name: 'WelcomePage7',
			content: 'src/templates/WelcomePage7/WelcomePage7.md',
		},
		{
			name: 'WelcomePage8',
			content: 'src/templates/WelcomePage8/WelcomePage8.md',
		},
		{
			name: 'Container',
			content: 'src/components/Container/Container.md',
		},
		{
			name: 'Welcome',
			content: 'src/components/Welcome/Welcome.md',
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
