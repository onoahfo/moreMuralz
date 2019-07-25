const express = require('express');
const user    = require('./user');
const comment = require('./comment')

const router = express.Router();

router.use(user);

module.exports = router;