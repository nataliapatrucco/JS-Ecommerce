const Sequelize = require("sequelize");

const db = new Sequelize("ecommerce", { logging: false });

module.exports = db;
