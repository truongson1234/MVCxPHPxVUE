const path = require("path");

const { VueLoaderPlugin } = require('vue-loader');

const { DefinePlugin }= require('webpack');

module.exports = {
	entry: "./resources/js/main.js", // Dẫn tới file index.js ta đã tạo
	output: {
		path: path.join(__dirname, "/public"), // Thư mục chứa file được build ra
		filename: "bundle.js" // Tên file được build ra
	},
	module: {
		rules: [
			{ 
				test: /\.vue$/, 
				loader: 'vue-loader', 
				options: { 
					loaders: { 
						js: 'awesome-typescript-loader?silent=true'
					} 
				} 
			},
			{
				test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
				use: ["style-loader", "css-loader"]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new DefinePlugin({
			__VUE_OPTIONS_API__: true, // If you are using the options api.
			__VUE_PROD_DEVTOOLS__: false, // If you don't want people sneaking around your components in production.
		}),
	]
};