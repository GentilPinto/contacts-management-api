'use strict';

const express = require('express');
const router = express.Router();
const indexController = require('../app/controllers/index/index-controller');

router.get('/', indexController.index);

module.exports = router;
