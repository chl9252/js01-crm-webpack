const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {

		app: './index.js'
/**		main: './main.js',
		edit: './edit.js',
		hints: './hints.js',
		new: './new.js'*/

	},

/**	output: {

		filename: '[name].js',

		path: path.join(__dirname, '/dist'),


		publicPath: '/dist'

	},*/
	devtool: "source-map",
	module: {
	  	rules: [{
	    	test: /\.js$/,
	        include: path.resolve(__dirname, 'src/js'),
	        use: {
	        	loader: 'babel-loader',
	        	options: {
	         	   presets: ['@babel/preset-env']
	         	   	     	}
	        }
	    },
		{
	        test: /\.css$/,
	        use: ['style-loader', 'css-loader'],
 	    },
	   ]
	},
		devServer: {

		overlay: true

	},
	plugins: [
//	    new HtmlWebpackPlugin(), // Generates default index.html
	    new HtmlWebpackPlugin({
	      filename: 'main.html',
	      template: 'html/main.html'
	    }),
	    new HtmlWebpackPlugin({
	      filename: 'edit.html',
	      template: 'html/edit.html'
	    }),
	    new HtmlWebpackPlugin({
	      filename: 'new.html',
	      template: 'html/new.html'
	    }),
	    new HtmlWebpackPlugin({
	      filename: 'hints.html',
	      template: 'html/hints.html'
	    })
	]
}