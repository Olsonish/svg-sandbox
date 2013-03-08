/** Dependencies */
var express = require('express')
	, routes = require('./app/server/routes')
	, lessMiddleware = require('less-middleware')
	, http = require('http')
	, path = require('path');

/** Application */
var app = express();
app.configure(function() {
	app.set('port', process.env.PORT || 8888);
	app.use(express.favicon());
	app.set('views', __dirname + '/app/server/views');
	app.set('view engine', 'jade');
	app.locals.pretty = true;
	app.use(express.cookieParser());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'app/public')));
	app.use(lessMiddleware({
        src: path.join(__dirname, 'app/server/assets/less'),
        dest: path.join(__dirname, 'app/public/stylesheets'),
        prefix: '/stylesheets',
        compress: true,
        debug: true,
        force: true
    }));
	app.use(express.logger('dev'));
});


/** Dev */
app.configure('development', function() {
	app.use(express.errorHandler());
});

/** Router */
require('./app/server/router')(app);

/** Go */
http.createServer(app).listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});