const content = require('./content.config')
const miniCss = require('mini-css-extract-plugin')
const TerserPlugin = require("terser-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const buildType = process.env.BUILD_TYPE ? process.env.BUILD_TYPE : "development"
const result = {}

const htmlPlugins = content.pages.map(page => {
    return new HtmlWebpackPlugin({
        inject: true,
        template: page.template,
        filename: page.page,
        chunks: [...page.chunks]
    })
})

result.plugins = [
    new miniCss({
        filename: 'css/[name].css',
    }),
    ...htmlPlugins,
    new FaviconsWebpackPlugin('src/img/favicon.png')
]

result.module = {
    rules: [
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(s*)css$/,
            use: [miniCss.loader, 'css-loader', 'sass-loader'],
        }
    ]
}

result.optimization = {
    splitChunks: {
        chunks: "all",
    }
}

if (buildType === "production") {
    result.optimization = {
        ...result.optimization,
        minimize: true,
        minimizer: [new TerserPlugin()],
    }
}

module.exports = result
