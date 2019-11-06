const Sequelize = require("sequelize");
const config = require('./dbconfig.json')

module.exports = new Sequelize(config.database, config.username, config.password, config);
