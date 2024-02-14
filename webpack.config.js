const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Specify the path to your template file
        }),
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
};
