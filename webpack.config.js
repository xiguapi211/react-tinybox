const path = require('path');
var webpack = require('webpack');

module.exports = {
    cache: false,   // ?
    entry: {
        main: './src/main.jsx'
    },
    output: {
        path: path.join(__dirname, 'app/build'),
        publicPath: path.join(__dirname, 'app/'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }, {
                test: /\.less$/,
                loader: 'style!css!less'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.HotModuleReplacementPlugin()
    ]
}