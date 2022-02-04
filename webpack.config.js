const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, './dist'),
    },
    mode: 'development',
    devServer: {
        static: path.join(__dirname, './dist'),
        port: 9000,
        compress: true,
    },
    resolve: {
        fallback: {
            url: require.resolve('url'),
            fs: require.resolve('fs'),
            assert: require.resolve('assert'),
            crypto: require.resolve('crypto-browserify'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
            buffer: require.resolve('buffer'),
            stream: require.resolve('stream-browserify'),
        },
    },   
};