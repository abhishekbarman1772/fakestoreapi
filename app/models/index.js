const { Sequelize } = require('sequelize');
const sequelize = require('../database/dbConnection');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = require('./Product')(sequelize, Sequelize);

module.exports = db;
