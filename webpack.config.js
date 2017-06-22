"use strict";

const merge = require('webpack-merge');
const PATHS = require('./webpack-paths');
const loaders = require('./webpack-loaders');

const common = {
  entry:{ // The entry file is index.js in client/src
    app: PATHS.src
  },
  output: { // the output defines where the bundle output gets created
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module: {
    rules: [
        loaders.babel, // transpiler
        loaders.css,    // our bundle will contain css
        loaders.font    // load fonts
    ]
  },
  resolve: {
     extensions: ['.js','.jsx']// the extensions to resolve
  }
};

let config;
    // the switch defines the different
    // configurations as development requires webpack-dev-server
switch(process.env.NODE_ENV){
    case 'build':
        config = merge(
            common,
            {devtool:'source-map'} // source maps on separate files
        );
        break;
    case 'development':
        config = merge(
          common,
            { devtool: 'eval-source-map' }, // default value
            loaders.devServer({
                host:process.env.host,
                port:3000
            })

        );
}
module.exports = config;