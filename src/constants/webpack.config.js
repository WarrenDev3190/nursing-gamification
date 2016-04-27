import path from 'path';
import webpack from 'webpack';

const webpackConfig =  {
	entry: path.join(__dirname,'../app/index'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname,'../server/public/dist/js'),
		publicPath: '/static/'
	},
	devTools: ['eval-source-maps'],
	plugins: [new webpack.NoErrorsPlugin()],
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loaders: ['babel'],
				include: path.join(__dirname, '../app'),
				exclude: /node_modules/
			},
			{
				test: /\.scss?$/,
				loaders: ['style','css','sass']
			}
		] 
	}
};

module.exports = webpackConfig;