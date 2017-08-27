const ExtractTextPlugin = require('extract-text-webpack-plugin');

const tunedCssLoader = {
    loader: 'css-loader',
    options: {
        minimize: true
    }
};

module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        publicPath: '../',
                        fallback: 'style-loader',
                        use: [tunedCssLoader, 'sass-loader']
                    })
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: tunedCssLoader
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('./css/[name].css')
        ]
    };
};
