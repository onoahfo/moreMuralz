const passport = require('../config/passport');

// GET /signup
exports.register = (req, res) => {
    res.render('register');
}

// GET /login
exports.login = (req, res) => {
    res.render('login');
}

// GET /user/profile
exports.userProfile = (req, res) => {
    res.render('profile');
}

// GET for /user/logout
exports.userLogout = (req, res) => {
    req.logout();
    res.redirect('login');
}

// GET for /user/addspot
exports.userAddspot = (req, res) => {
    res.render('addspot')
}


exports.userAllspots = (req, res) => {
    res.render('allSpots');
}

exports.userSpot = (req,res) => {
    res.render('spot')
}

// POST /register
exports.signup = passport.authenticate('local-signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/register' 
});

// POST /login
exports.userSignin = passport.authenticate('local', { 
    successRedirect: '/user/profile',
    failureRedirect: '/login' 
});