'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize("contacts_management_development", "root", "luffy", {
    host: "127.0.0.1",
    dialect: "mysql",
    // operatorsAliases: false
});

module.exports = sequelize;
global.sequelize = sequelize;