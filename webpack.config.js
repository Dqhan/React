const path = require('path');

module.exports = {
    mode: "development",
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: 'demo.js'
    },
    watchOptions: {
        aggregateTimeout: 800,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/
            },
        ]
    },
    plugins: [

    ],
    resolve: {
        extensions: [".js", ".jsx", ".json", ".css"]
    },
    externals: {

    }
}