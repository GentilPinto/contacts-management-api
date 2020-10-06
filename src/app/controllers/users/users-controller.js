'use strict';

const User = require('../../models/User');

exports.getAllUsers = async(_request, response) => {
    try {
        let users = await User.findAll();
        return response.send({
            users: users
        }).status(200);
    } catch (error) {
        console.log(error);
        return response.send({
            error: error
        }).status(500);
    }
};