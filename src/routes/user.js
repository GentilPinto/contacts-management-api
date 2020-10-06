'use strict';

const express = require('express');
const router = express.Router();
const usersController = require('../app/controllers/users/users-controller.js');

router.get('/users', usersController.getAllUsers);

module.exports = router;
