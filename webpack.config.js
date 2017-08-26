const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCss = require('./webpack/extract-css');

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
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: path.resolve(PATHS.source, 'pages', 'index', 'index.pug')
            }),
            new HtmlWebpackPlugin({
                filename: 'other.html',
                chunks: ['other', 'common'],
                template: path.resolve(PATHS.source, 'pages', 'other', 'other.pug')
            }),
            new webpack.optimize.CommonsChunkPlugin({
                 name: 'common'
            })
        ]
    },
    pug()
);

module.exports = function (env) {
    if (env === 'production') {
        return merge(
            common,
            extractCss()
        );
    }
    if (env === 'development') {
        return merge(
            common,
            devserver(),
            sass(),
            css()
        );
    }
};
