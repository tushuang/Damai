
//使用commonjs模块化
const server_config = require('./server_config');
const webpack_config = require('./webpack_config');

module.exports = {
    server_config,
    sass_config: {outputStyle: 'compressed'},
    webpack_config
}