const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    plugins: [
        new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.(js|jsx|ts|tsx|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 10000,
            maxSize: 250000,
            minChunks: 1,
            automaticNameDelimiter: '_',
        },
        runtimeChunk: 'single',
        moduleIds: 'deterministic',
        minimize: true,
    },
});
