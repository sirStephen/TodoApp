var path = require('path');
const HtmpWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: "web",
    devtool: "cheap-module-source-map",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    node: {
        fs: "empty"
    },
    plugins: [
        new HtmpWebpackPlugin({
            template: 'src/index.html'
        }),
    ],
    devServer: {
        hot: true,
        historyApiFallback: true,
        stats: "minimal",
        overlay: true,
        disableHostCheck: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        https: false
    },
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    }
}