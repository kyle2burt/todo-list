const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {

    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        open: {
        app: {
            name: 'Google Chrome', // Specify Chrome without changing default browser
        },
    },
    },
});

