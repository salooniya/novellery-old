const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, '../public/index.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../build')
    },
    devtool: 'source-map',
    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, '../build'),
            watch: true
        },
        historyApiFallback: true,
        liveReload: true,
        hot: false
    },
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
