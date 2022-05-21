const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    name: "client",
    mode: "production",
    target: "web",
    //
    entry: {
        client: path.resolve(__dirname, "src/index.ts"),
    },
    //
    output: {
        path: path.resolve(__dirname + "/dist/static"),
        filename: "[name].js",
        publicPath: "",
    },
    //
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    //
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    configFile: "tsconfig.json",
                },
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    // {
                    //     loader: "style-loader",
                    // },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                exportLocalsConvention: "camelCase",
                                localIdentName: "[local]_[hash:base64:5]",
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    //
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackManifestPlugin(),
        new MiniCssExtractPlugin({
            filename: "styles.css",
        }),
    ],
};
