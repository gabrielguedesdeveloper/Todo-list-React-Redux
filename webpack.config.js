const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "./bundle.js"
    },
    devServer: {
        port:8081,
        inline:true,
    },
    resolve: {
        extensions: [".js",".jsx"],
        alias: {
            modules: __dirname + '/node_modules',
            components: __dirname + '/src/components'
        }
    },
    module: {
        rules: [
            {
                test: /.js[x]?$/,
                exclude: "/node_modules/",
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                use: "file-loader"
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin("app.css")
    ]
}