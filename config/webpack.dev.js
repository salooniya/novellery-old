const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, '../src/app.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../public')
    },
    devtool: 'source-map',
    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, '../public'),
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
                type: 'asset/source',
            },
            {
                test: /\.scss$/i,
                use: ['sass-loader'],
                type: 'asset/resource',
                generator: {
                    filename: '[name].css'
                }
            }
        ]
    }
}
