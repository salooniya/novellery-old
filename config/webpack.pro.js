const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        app: path.resolve(__dirname, '../public/index.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../build')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.html$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]'
                }
            },
            {
                test: /\.(scss|css)$/i,
                use: ['sass-loader'],
                type: 'asset/resource',
                generator: {
                    filename: '[name].css'
                }
            }
        ]
    }
};
