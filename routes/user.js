const express = require('express');
const router  = express.Router();
const isAuthenticated = require('../config/middleware/isAuthenticated');
const userController = require('../controllers/user');

router.get( '/register', userController.register );

router.get( '/user/login', userController.userLogin );

router.get('/profile', isAuthenticated, userController.userProfile );

router.get('/logout', userController.userLogout);

router.post( '/user/signup', userController.signup );

router.post( '/user/login', userController.userSignin );

module.exports = router;
