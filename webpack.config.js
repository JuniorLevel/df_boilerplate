const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => ({
	mode: env.MODE || 'development',
	entry:
		env.MODE === 'development'
			? path.resolve(__dirname, 'src', 'main.jsx')
			: path.resolve(__dirname, 'src', 'index.js'),
	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-modules-flow-types-loader' },
					{
						loader: 'css-loader',
						options: {
							esModule: true,
							modules: {
								namedExport: false,
								localIdentName: '[path][name]__[local]--[hash:base64:5]',
							},
						},
					},
					{ loader: 'sass-loader' },
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
		clean: true,
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	externals:
		env.MODE === 'production'
			? {
					react: 'react',
					'react-dom': 'react-dom',
				}
			: {},
	plugins: [
		env.MODE === 'development' &&
			new HTMLWebpackPlugin({
				template: path.resolve(__dirname, 'public', 'index.html'),
				favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
			}),
		new EslintWebpackPlugin({
			extensions: ['js', 'jsx'],
			fix: true,
		}),
		new CopyPlugin({
			patterns: [{ from: 'src/index.d.ts', to: '' }],
		}),
		env.MODE === 'development' && new ReactRefreshWebpackPlugin(),
	],
	devtool: env.MODE === 'development' && 'inline-source-map',
	devServer: {
		historyApiFallback: true,
		port: env.PORT || 3000,
		open: true,
		hot: true,
	},
});
