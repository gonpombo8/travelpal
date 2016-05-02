'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../'),

  // Server port
  port: process.env.PORT || 9000,

  // Should we populate the DB with sample data?
  seedDB: process.env.SEEDDB || false,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'smartsalud-secret'
  },

  // List of user roles
  userRoles: ['guest', 'user', 'admin'],

  // MongoDB connection options
  mongo: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost/smartsalud_dev',
    options: {
        server: {
            auto_reconnect: true,
            socketOptions: {
                keepAlive: 1
            }
        },
        db: {
            safe: true
        }
    }
  },

};

module.exports = all;
