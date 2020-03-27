const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'crudaxe.js',
        library: 'Crudaxe',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/, //Regular expression
                exclude: /(node_modules|bower_components)/,//excluded node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']  //Preset used for env setup
                    }
                }
            }
        ],
    },
};