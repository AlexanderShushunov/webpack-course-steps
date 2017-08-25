const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    source: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'build')
};

module.exports = {
    entry: path.resolve(PATHS.source, 'index.js'),
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(PATHS.source, 'index.pug')
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
