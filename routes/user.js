const express = require('express');
const router  = express.Router();
const isAuthenticated = require('../config/middleware/isAuthenticated');
const userController = require('../controllers/user');

router.get( '/user/signup', userController.register );

router.get( '/user/login', userController.userLogin );

router.post( '/user/signup', userController.signup );

router.post( '/user/login', userController.userSignin );

router.get('/profile', isAuthenticated, userController.userProfile );

router.get('/logout', userController.userLogout);

module.exports = router;
