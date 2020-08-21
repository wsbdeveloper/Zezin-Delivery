const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // Arquivo para "compilação".
    entry: "./src/index.js",
    // Saída do bundle após o build.
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
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
        })
    ]
}