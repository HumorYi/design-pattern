/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-23 23:50:29
 * @Description:
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-26 22:41:49
 * @LastEditorsDescription:
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'release'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],
	devServer: {
		contentBase: path.join(__dirname, './release'),
		open: true,
		port: 9000,
		proxy: {
			'/api/*': {
				target: 'http://localhost:8880'
			}
		}
	}
}