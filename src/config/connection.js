'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize("contacts_management_development", "root", "", {
    host: "127.0.0.1",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    // operatorsAliases: false
});

module.exports = sequelize;
global.sequelize = sequelize;