const webpack = require('webpack');
// variable for environment
const nodeEnv = process.env.NODE_ENV || 'production';
const { CheckerPlugin } = require('awesome-typescript-loader');

// entry - where do u wnat to start app
// output - where do you want to go
// loaders - how should I handle spec file
// loader: 'babel-loader' converts to ES5
module.exports = {
	devtool: 'source-map',
	entry: {
		filename: './app.js'
	},
	output: {
		filename: '_build/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ["es2015"]
				}
			}
		]
	},
	plugins: [
		// compress our js - uglify js
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false },
			output: { comments: false },
			sourceMap: true 
		}),
		// set the actual environment - env plugin
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify(nodeEnv)}
		})
	]
}