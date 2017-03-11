var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'babel-polyfill',
        'webpack-hot-middleware/client',
        './client/index'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'client')
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[hash].[ext]'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff'},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=fonts/[name].[hash].[ext]&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=fonts/[name].[hash].[ext]'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=images/[name].[hash].[ext]&mimetype=image/svg+xml'}]
    }
};