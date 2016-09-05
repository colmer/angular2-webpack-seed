var WebpackDevServer = require("webpack-dev-server");
var HtmlWebpackPlagin = require('html-webpack-plugin');

var webpack = require('webpack');

module.exports = {

    entry: {
        app: './src/main.ts'
    },
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.pug$/, loaders: ['pug-html']},
            { test: /\.ts$/, loader: 'ts'},
            { test: /^(?!.*component).*\.sass$/, loaders: ["style", "css", "sass"]},
            { test: /\.component.sass$/, loaders: ["raw-loader", "sass-loader"]},
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins: ([
        new HtmlWebpackPlagin({
            template: './src/index.pug'
        })
    ]),
    devServer: {
        historyApiFallback: true,
    }
};
