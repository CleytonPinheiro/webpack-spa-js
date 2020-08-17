const path = require("path")

module.exports = {
    mode: "development",
    entry: "./componentes/lista/listagem-cliente.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }

}
