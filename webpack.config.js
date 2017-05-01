var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './local/index.js',
    target: 'node',
    externals: [nodeExternals()],
    module:{
        loaders: [{
            test:       /\.js$/,
            loaders:    ['babel-loader'],
            include:    __dirname
        }]
    }
};