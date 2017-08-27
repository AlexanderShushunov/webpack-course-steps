module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(png|jpg|svg)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                }
            ]
        }
    };
};
