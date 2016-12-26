
var config = {
  env: process.env.NODE_ENV || 'development',
  logging: false,
  jwtSecret: process.env.JWT_SECRET
};

var envConfig = require('./' + config.env);

module.exports = Object.assign({}, config, envConfig);
