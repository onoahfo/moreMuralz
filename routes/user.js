const express = require('express');
const router  = express.Router();
const isAuthenticated = require('../config/middleware/isAuthenticated');
const userController = require('../controllers/user');

// get 
router.get( '/register', userController.register );

router.get( '/login', userController.login );

router.get('/user/profile', userController.userProfile );

router.get( '/user/logout', userController.userLogout);

router.get( '/user/addspot', userController.userAddspot);

router.get('/user/allSpots', userController.userAllspots);

router.get('/user/spot', userController.userSpot);

//post

router.post( '/user/register', userController.signup );

router.post( '/user/login', userController.userSignin );

module.exports = router;
