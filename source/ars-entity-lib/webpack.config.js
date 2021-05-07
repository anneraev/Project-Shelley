const path = require('path');
const webpack = require('webpack');

var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const pluginName = __dirname.replace(/\\/g, "/").split("/").pop();

const banner = `
//=============================================================================
// ${pluginName}.js
//=============================================================================

/*:
@libraryDesc A layer that stores and manages entities.
@author An Rae Vick
`

module.exports = {
    entry: [path.resolve(__dirname, './main.ts')],
    output: {
        filename: `${pluginName}.js`,
        path: path.resolve(__dirname, "../../js/libs/"),
    },
    devtool: 'inline-source-map',
    mode: "development",
    module: {
        rules: [{
            test: /\.ts$/,
            use: { loader: 'ts-loader', options: { transpileOnly: true, configFile: path.resolve(__dirname, "../../tsconfig.json") } },
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new webpack.BannerPlugin(banner)
    ],
};
