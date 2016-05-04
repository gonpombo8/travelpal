/**
 * Main application file
 */

'use strict';

process.on('uncaughtException', function (err) {
  console.error(err.stack);
});

// require('dotenv').load();

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
var models = require("./models");
// if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes/index.route')(app);
// Start server
models.sequelize.sync().then(() => {
  server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
})


// Expose app
exports = module.exports = app;