const express = require('express');
const user    = require('./user');
const commenting = require('../models/comment')

const router = express.Router();

router.use(user);
router.use(commenting);

module.exports = router;