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
		// {
		// 	name: 'Container',
		// 	content: 'src/components/Container/Container.md',
		// },
		// {
		// 	name: 'FiltersCardsContainer',
		// 	content: 'src/components/FiltersCardsContainer/FiltersCardsContainer.md',
		// },
		// {
		// 	name: 'FiltersClosedList',
		// 	content: 'src/components/FiltersClosedList/FiltersClosedList.md',
		// },
		// {
		// 	name: 'FiltersOpened',
		// 	content: 'src/components/FiltersOpened/FiltersOpened.md',
		// },
		// {
		// 	name: 'FiltersSearch',
		// 	content: 'src/components/FiltersSearch/FiltersSearch.md',
		// },
		// {
		// 	name: 'FiltersSearchWithPreview',
		// 	content:
		// 		'src/components/FiltersSearchWithPreview/FiltersSearchWithPreview.md',
		// },
		// {
		// 	name: 'HomeDev',
		// 	content: 'src/components/HomeDev/HomeDev.md',
		// },
		// {
		// 	name: 'OrdersList',
		// 	content: 'src/components/OrdersList/OrdersList.md',
		// },
		// {
		// 	name: 'StatusContainer',
		// 	content: 'src/components/StatusContainer/StatusContainer.md',
		// },
		// {
		// 	name: 'TimeWidgetsPanel',
		// 	content: 'src/components/TimeWidgetsPanel/TimeWidgetsPanel.md',
		// 	sections: [
		// 		{
		// 			name: 'TimeWidgets1',
		// 			content:
		// 				'src/components/TimeWidgetsPanel/TimeWidgets1/TimeWidgets1.md',
		// 		},
		// 		{
		// 			name: 'TimeWidgets2',
		// 			content:
		// 				'src/components/TimeWidgetsPanel/TimeWidgets2/TimeWidgets2.md',
		// 		},
		// 		{
		// 			name: 'TimeWidgets3',
		// 			content:
		// 				'src/components/TimeWidgetsPanel/TimeWidgets3/TimeWidgets3.md',
		// 		},
		// 		{
		// 			name: 'TimeWidgets4',
		// 			content:
		// 				'src/components/TimeWidgetsPanel/TimeWidgets4/TimeWidgets4.md',
		// 		},
		// 		{
		// 			name: 'TimeWidgets5',
		// 			content:
		// 				'src/components/TimeWidgetsPanel/TimeWidgets5/TimeWidgets5.md',
		// 		},
		// 		{
		// 			name: 'TimeWidgets6',
		// 			content:
		// 				'src/components/TimeWidgetsPanel/TimeWidgets6/TimeWidgets6.md',
		// 		},
		// 		{
		// 			name: 'TimeWidgets7',
		// 			content:
		// 				'src/components/TimeWidgetsPanel/TimeWidgets7/TimeWidgets7.md',
		// 		},
		// 		{
		// 			name: 'TimeWidgets8',
		// 			content:
		// 				'src/components/TimeWidgetsPanel/TimeWidgets8/TimeWidgets8.md',
		// 		},
		// 		{
		// 			name: 'TextFieldWidget',
		// 			content:
		// 				'src/components/TimeWidgetsPanel/TextFieldWidget/TextFieldWidget.md',
		// 		},
		// 		{
		// 			name: 'TimeWidgetsWithTextField1',
		// 			content:
		// 				'src/components/TimeWidgetsPanel/TimeWidgetsWithTextField1/TimeWidgetsWithTextField1.md',
		// 		},
		// 		{
		// 			name: 'TimeWidgetsWithTextField2',
		// 			content:
		// 				'src/components/TimeWidgetsPanel/TimeWidgetsWithTextField2/TimeWidgetsWithTextField2.md',
		// 		},
		// 		{
		// 			name: 'PersonWidget',
		// 			content:
		// 				'src/components/TimeWidgetsPanel/PersonWidget/PersonWidget.md',
		// 		},
		// 		{
		// 			name: 'TimeWidgetsWithPerson',
		// 			content:
		// 				'src/components/TimeWidgetsPanel/TimeWidgetsWithPerson/TimeWidgetsWithPerson.md',
		// 		},
		// 	],
		// 	sectionDepth: 14,
		// },
		// {
		// 	name: 'Welcome',
		// 	content: 'src/components/Welcome/Welcome.md',
		// },
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
