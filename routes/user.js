const express = require('express');
const router  = express.Router();
const isAuthenticated = require('../config/middleware/isAuthenticated');
const userController = require('../controllers/user');

// get 
router.get( '/register', userController.register );

router.get( '/login', userController.userLogin );

router.get('/profile', isAuthenticated, userController.userProfile );

router.get('/logout', userController.userLogout);

//post

router.post( '/user/register', userController.signup );

router.post( '/user/login', userController.userSignin );

module.exports = router;
