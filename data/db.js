const knex = require('knex');

const environment = process.env.Node_ENV || development;

const config = require('../knexfile.js').environment;

module.exports = knex(config);
