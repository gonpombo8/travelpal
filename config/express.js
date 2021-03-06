/**
 * Express configuration
 */

 'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');
var config = require('./environment');
var cors = require('cors')


module.exports = function(app) {
	var env = app.get('env');
	app.use(cors());
	app.use(compression());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(cookieParser());
	app.use('/public', express.static(path.join(config.root, 'public')));
	app.use(morgan('dev'));   
	app.use(errorHandler()); // Error handler - has to be last
};