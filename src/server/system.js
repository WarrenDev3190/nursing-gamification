import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
import path from 'path';
import util from 'util';
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../constants/webpack.config';
// Routes
import index from './routes/index';

const app = express();

app.use(cookieParser());
app.use(session({
	secret: 's3kr3t',
	resave: false,
	saveUninitialized: false,
	cookie: {maxAge: 600000}
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(logger('combined'));
app.use(express.static(path.join(__dirname,'public')));

if(app.get('env')==='development'){
	app.use(WebpackDevMiddleware(webpack(webpackConfig),{
		publicPath: webpackConfig.output.publicPath,
		stats:[
			'colors',
			'progress'
		]
	}));
};

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use('/', index);

const startServer = (config) => {
	app.listen(config.port, (err) => {
		if(err){ throw new Error(`Failed to start server. Err: ${err}`);}
		util.log(`App running on port:${config.port}`);
	});
};

module.exports = startServer;