const path = require('path');

module.exports = {
	entry: './lib/main.js',
	output: {
		publicPath: '/dist',
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js|jsx$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	devtool: '#eval-source-map'
}
