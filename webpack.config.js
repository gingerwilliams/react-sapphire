const path = require("path");

module.exports = {
    entry: "./index.js",
    output: {
        filename: "index.js",
        publicPath: "/dist/",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "commonjs2" // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
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
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
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
    },
    externals: {
        react: "commonjs react" // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    }
};