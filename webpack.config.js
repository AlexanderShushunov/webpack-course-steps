const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');

const PATHS = {
    source: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'build')
};

const common = merge(
    {
        entry: {
            'index': path.resolve(PATHS.source, 'pages', 'index', 'index.js'),
            'other': path.resolve(PATHS.source, 'pages', 'other', 'other.js')
        },
        output: {
            path: PATHS.build,
            filename: '[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index'],
                template: path.resolve(PATHS.source, 'pages', 'index', 'index.pug')
            }),
            new HtmlWebpackPlugin({
                filename: 'other.html',
                chunks: ['other'],
                template: path.resolve(PATHS.source, 'pages', 'other', 'other.pug')
            })
        ]
    },
    pug()
);

module.exports = function (env) {
    if (env === 'production') {
        return common;
    }
    if (env === 'development') {
        return merge(common, devserver());
    }
};
