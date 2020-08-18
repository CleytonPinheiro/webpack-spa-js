const HtmlWebpackPlugin = require ("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    devServer: {
        open: true,
        contentBase: "dist"
    },
    entry: "./componentes/lista/listagem-cliente.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./clientes.html",
            filename: "index.html"
        })
    ]
}
