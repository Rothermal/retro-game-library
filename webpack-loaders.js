"use strict";

const webpack = require('webpack');
const PATHS = require('./webpack-paths');

exports.devServer = function(options){
    return {
        devServer:{
            historyApiFallback:true,
            hot:true, // enable hot module.
            inline: true,
            stats:'errors-only',
            host: options.host, // http://localhost
            port: options.port, // 3000
            contentBase: './client/dist'
        },
        //enable multi-pass compilation for enchanced performace
        plugins:[ // hot module
            new webpack.HotModuleReplacementPlugin({
                multiStep: true
            })
        ]
    };
};
// the css loader
exports.css = {
    test:/\.css$/,
    use:['style-loader', 'css-loader'],
    include: PATHS.css
};
// the file loader
exports.font = {
    test:/\.ttf$/,
    use:['file-loader']
};
//babel loader
exports.babel = {
    test:/\.jsx?$/,
    exclude: /node_modules/,
    use:['babel-loader']
};