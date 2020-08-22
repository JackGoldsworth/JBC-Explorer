module.exports = {
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: '../src/main/resources/static/built/bundle.js'
    },
    node: {
        net: 'empty',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};