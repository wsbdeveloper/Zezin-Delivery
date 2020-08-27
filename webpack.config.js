const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    // Arquivo para "compilação".
    entry: "./src/index.js",
    // Saída do bundle após o build.
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    devServer: {
        // Configuração de rotas dentro do nosso zé delivery app
        // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
        historyApiFallback:{
            index: "/"
        },
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 5000,
    },
    module : {
        rules: [
            // Configurando babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            // Configurando o load de imagens no reactjs
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false),
            TOKEN_GOOGLE : JSON.stringify("AIzaSyAreJE8-daOeeC0J-uD5I9zezB08wqIzNc")
        })
    ],
}