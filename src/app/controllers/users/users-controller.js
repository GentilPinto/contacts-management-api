'use strict';

const User = require('../../models/User');

exports.getAllUsers = async(_request, response) => {
    User
        .findAll()
        .then((result) => {
            return response
                .status(200)
                .send({
                    users: result
                });
        }).catch((error) => {
            return response
                .status(500)
                .send({
                    error: error.message
                });
        });
};