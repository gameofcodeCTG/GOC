'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var bodyParser = require('body-parser');

var app = module.exports = loopback();

/**** NEW INSTRUCTIONS ****/

var webpack = require('webpack');
var env = require('./environment');
var mode = process.env.NODE_ENV || env.DEVELOPMENT;
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require(`../webpack.config.${mode}`);
var compiler = webpack(config);


if (mode === env.DEVELOPMENT) {
    // only need in development
    app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
}
app.use(webpackHotMiddleware(compiler));

/*** END NEW INSTRUCTION ***/

// configure view handler
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// configure body parser
app.use(bodyParser.urlencoded({extended: true}));

app.use(loopback.token());

app.start = function () {
    // start the web server
    return app.listen(function () {
        app.emit('started');
        console.log('Path is ' + __dirname);
        var baseUrl = app.get('url').replace(/\/$/, '');
        console.log('Web server listening at: %s', baseUrl);
        if (app.get('loopback-component-explorer')) {
            var explorerPath = app.get('loopback-component-explorer').mountPath;
            console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
    });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
    if (err)
        throw err;

    // start the server if `$ node server.js`
    if (require.main === module)
        app.start();
});
