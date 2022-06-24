const content = require("./webpack/content.config");
const pluginsConfig = require('./webpack/plugins.config')
const path = require("path");

const buildType = process.env.BUILD_TYPE ? process.env.BUILD_TYPE : "development"

module.exports = {
    mode: buildType,
    entry: {
        ...content.entry
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].js',
        assetModuleFilename: 'assets/images/[name]-[hash][ext]'
        //assetModuleFilename: 'assets/images/[name][ext]'
    },
    devServer: {
        port: 3000,
        static: path.join(__dirname, './build'),
        hot: true
    },
    ...pluginsConfig
}
