const path = require('path');

var baseConfig = require('./webpack.config.js');
baseConfig.debug = true;
baseConfig.cache = true;
baseConfig.devServer = {
    contentBase: path.join(__dirname, 'app/'),
    port: 8181
}
module.exports = baseConfig;