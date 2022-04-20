const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'prod',
    devtool: 'source-map',
    cache: false
})