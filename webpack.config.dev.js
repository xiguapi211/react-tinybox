var baseConfig = require('./webpack.config.js');
baseConfig.debug = true;
baseConfig.cache = true;
baseConfig.devServer = {
    contentBase: path.join(__dirname, 'app/'),
    publicPath: 'http://localhost:8181/build'
}
module.exports = baseConfig;