'use strict';

const Sequelize = require('sequelize');

module.exports = global.sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING(),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(),
        allowNull: false,
        unique: false
    }
});