module.exports = {
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: 'ts-loader'}
        ]
    },
    output: {
        path: __dirname,
        filename: "./dist/index.js",
        libraryTarget: "umd"
    }
}