const express = require('express');
require('express-async-errors');

const router = express.Router();
const errorhandler = require('../errorhandler/error');
const product = require('./product');

router.use('/product', product);

router.use(errorhandler);

module.exports = router;
