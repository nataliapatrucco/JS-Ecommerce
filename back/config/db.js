const Sequelize = require('sequelize');
const config = require('./dbconfig.json');
require('dotenv').config();

module.exports = new Sequelize(
  config.database,
  process.env.DB_USER,
  process.env.DB_PASS,
  config
);
