const path = require('path');
const miniCss = require('mini-css-extract-plugin');
 
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /.(s*)css$/,
			use: [
				miniCss.loader,
				'css-loader?url=false',
				'sass-loader',
			]
		}]
	},
	plugins: [
		new miniCss({
			filename: '../style.css',
		}),
	],
	devServer: {
        open: true,
        port: 8080,
    },
};