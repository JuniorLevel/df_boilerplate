/* eslint-disable global-require */
/* eslint-disable no-unused-vars */

const path = require('path');
const fs = require('fs');

module.exports = {
	title: 'Документация',
	pagePerSection: true,
	exampleMode: 'expand',
	updateExample(props, exampleFilePath) {
		const { settings = {}, lang } = props;
		if (typeof settings.file === 'string') {
			const filepath = path.resolve(
				path.dirname(exampleFilePath),
				settings.file
			);
			const { file, ...restSettings } = settings;
			const content = fs.readFileSync(filepath, 'utf8');
			const updatedContent = content
				.replace(/^\s*\/\/\s?@flow\s*\n/, '')
				.trim()
				.replace(/^export.*$/gm, '')
				.trim()
				.replace(/^\s*return.*$/gm, '')
				.trim()
				.replace(/\s*[/);\\}]\s*;?$/, '')
				.trim()
				.replace(/\s*[/);\\}]\s*;?$/, '')
				.trim();
			return {
				content: updatedContent,
				settings: restSettings,
				lang,
			};
		}
		return props;
	},
	sections: [
		{
			name: '',
			content: '',
		},
		{
			name: '',
			content: '',
		},
		{
			name: '',
			content: '',
		},
		{
			name: '',
			content: '',
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
		Wrapper: path.join(__dirname, 'src/Wrapper.jsx'),
	},
	ignore: ['**/__snapshots__/**', '**/src/*.test.js'],
	webpackConfig: require('./webpack.config'),
};
