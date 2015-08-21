var path = require('path');
var webpack = require('webpack');

var config = {
    entry: {
        main: path.resolve(__dirname, './src/main.jsx'),
    },
    output: {
        path: path.resolve(__dirname, '../public/javascripts'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel?stage=1'
        }]
    }
};

module.exports = config;
