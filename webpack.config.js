const path = require("path");

let isProd = process.env.NODE_ENV === 'production';
let moduleOutFolder = path.resolve(__dirname, `extension/dist`);

module.exports = {
    entry: './src/app/views/main.js',
    output: {
        path: moduleOutFolder,
        filename: "app.js"
    },
    //devtool: 'eval',
    module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
}