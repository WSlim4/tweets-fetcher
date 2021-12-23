const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    devServer: {
        port: 3000,
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    "style-loader",
                    "css-loader"
                ],
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
}