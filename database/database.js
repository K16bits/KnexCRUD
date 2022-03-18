const config = require('../knexfile')
const knexDB = require('knex')(config.development)

module.exports = knexDB;
