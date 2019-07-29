const bcrypt          = require('bcryptjs')
const express         = require('express');
const router          = express.Router();
const isAuthenticated = require('../config/middleware/isAuthenticated');
const userController  = require('../controllers/user');
const spotC           = require('../controllers/spot')

// get 
router.get( '/register', userController.register );

router.get( '/login', userController.login );


// add (isAuthenticated) to userController), so that we are able to block our any other
// person from trying to get to this page without signing in
// and redirect them back to the home page
router.get('/user/profile', userController.userProfile );

router.get('/33128', userController.demo)

router.get( '/user/logout', userController.userLogout);

router.get( '/user/addspot', userController.userAddspot);

router.get('/user/allSpots', userController.userAllspots);

router.get('/user/spot/:spotId', userController.userSpot);
// A route to add spots

router.post('/addSpot', spotC.addSpot)


//post

router.post( '/user/register', userController.signup );

router.post( '/user/login', userController.userLogin );

module.exports = router;
