const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        publicPath: "/dist/",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "commonjs2" // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "src"),
                exclude: /(node_modules|dist)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            }
        ]
    },
    externals: {
        react: "commonjs react" // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    }
};
