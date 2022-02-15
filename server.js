const express = require('express');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

// const config = require('./webpack.config.js');
const config = {
	entry: {
		app: './public/index.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
		hot: true,
	},
	resolve: {
		alias: {
			'@app-vstrap': path.resolve(__dirname, 'public/vstrap/'),
			'@app-components': path.resolve(__dirname, 'public/components/'),
			'@app-styles': path.resolve(__dirname, 'public/styles/')
		},
		extensions: ['.js', '.jsx', '.tsx', '.ts', '.json']
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.tsx?$/,
				loader: 'babel-loader',
			},
			{
				test: /\.js$/,
				use: ["source-map-loader"],
				enforce: "pre"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							"@babel/env"
						],
						plugins: [
							"@babel/plugin-proposal-class-properties",
							"@babel/plugin-transform-object-assign",
							"@babel/plugin-transform-runtime"
						]
					}
				}
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'vStrap Example',
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	}
};

const compiler = webpack(config);
const server = new webpackDevServer({
	hot: false,
	client: false
}, compiler);

(async () => {
	await server.start();
	console.log('dev server is running');
})();
// const fs = require('fs');
// const bodyParser = require('body-parser');

// webpackDevServer.addDevServerEntrypoints(config, config.devServer);
//
// const compiler = webpack(config);
// const server = new webpackDevServer(compiler, {
// 	contentBase: './dist',
// 	port: 3000,
// 	host: 'localhost',
// 	hot: true,
//
// 	before(app) {
// 		app.use(bodyParser.json());
// 		app.use(express.static(__dirname + '/public'));
// 	}
// });
//
// server.listen(3000, () => console.log('Server started && listening on port 3000'));
