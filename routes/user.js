const express = require('express');
const router  = express.Router();
const isAuthenticated = require('../config/middleware/isAuthenticated');
const userController = require('../controllers/user');

// get 
router.get( '/register', userController.register );

router.get( '/login', userController.login );

router.get('/user/profile', userController.userProfile );

router.get('/user/logout', userController.userLogout);

router.get('/allSpots', userController.allSpots);

router.get('/spot', userController.spot);

//post

router.post( '/user/register', userController.signup );

router.post( '/user/login', userController.userSignin );

module.exports = router;
