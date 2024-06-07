const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env) => ({
	entry: path.resolve(__dirname, 'src', 'main.jsx'),
	mode: env.MODE || 'development',
	module: {
		rules: [
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
	resolve: { extensions: ['.*', '.js', '.jsx'] },
	output: {
		path: path.resolve(__dirname, 'build'),
		assetModuleFilename: 'assets/[hash][ext][query]',
		filename: '[name].[contenthash].js',
		clean: true,
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html'),
			favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
		}),
		new EslintWebpackPlugin({
			extensions: ['js', 'jsx'],
			fix: true,
		}),
		env.MODE === 'development' && new ReactRefreshWebpackPlugin(),
	],
	devtool: env.MODE === 'development' && 'inline-source-map',
	devServer: {
		port: env.PORT || 3000,
		open: true,
		hot: true,
	},
});
