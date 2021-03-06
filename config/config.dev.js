'use strict';

var config = require('./config.base'),
    validateConfig = require('webgme/config/validator');

// Add/overwrite any additional settings here
// config.server.port = 8080;
// config.mongo.uri = 'mongodb://127.0.0.1:27017/webgme_my_app';
config.visualization.layout.default = 'DefaultLayout';

validateConfig(config);
module.exports = config;
