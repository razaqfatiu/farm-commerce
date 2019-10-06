'use strict';
require('dotenv').config()
// const fs = require('fs');
// const path = require('path');
const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.Admin = require('./admin')(Sequelize, sequelize)
db.Animal = require('./categories/animal')(Sequelize, sequelize)
db.Equipment = require('./categories/equipment')(Sequelize, sequelize)
db.Fishery = require('./categories/fishery')(Sequelize, sequelize)
db.Fruit = require('./categories/fruit')(Sequelize, sequelize)
db.Grain = require('./categories/grain')(Sequelize, sequelize)
// db.Other = require('./categories/other')(Sequelize, sequelize)
db.Poultry = require('./categories/poultry')(Sequelize, sequelize)
db.Service = require('./categories/service')(Sequelize, sequelize)
db.Tuber = require('./categories/tuber')(Sequelize, sequelize)
db.Vegetable = require('./categories/vegetable')(Sequelize, sequelize)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
