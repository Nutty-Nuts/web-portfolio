const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const { debugPort } = require("process")

module.exports = {
    mode: "development",
    watch: true,
    entry: {
        bundle: path.resolve(__dirname, "src/main.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][contenthash].js",
        clean: true,
        assetModuleFilename: "[name][ext]",
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "Developer Portfolio",
            filename: "index.html",
            template: "src/index.html",
        }),
    ],
}
