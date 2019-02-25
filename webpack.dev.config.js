const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        publicPath: "/dist/",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        port: 8000,
        open: true,
        watchContentBase: true,
        writeToDisk: true,
        compress: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader"
                    },
                    {
                        loader: "url-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};
