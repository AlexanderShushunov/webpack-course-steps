const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    source: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'build')
};

module.exports = {
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
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        ]
    }
};
