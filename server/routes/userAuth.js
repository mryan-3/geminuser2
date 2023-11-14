const express = require("express")
const router = express.Router()
const userAuthController = require("../controllers/userAuthController")
const passport = require('passport')



//Registration
router.post('/register', userAuthController.registerUser)

//Login and Authorization
router.post("/login", userAuthController.loginUser)

//Logout
router.post('/logout', userAuthController.logoutUser)

// // Google Authentication
// // Login Failed
// router.get('/api/v1/login/failed', (req, res) => {
//     res.status(401).json({
//         error: true, 
//         message: "Login Failed"
//     })
// })
// // Handle authentication flow
// router.get('/api/v1/login', passport.authenticate('google', {
//     successRedirect: '/profile',
//     failureRedirect: '/login',
//   })
// )
// // Protect routes
// router.get('/profile', isLoggedIn, (req, res) => {
//     // Display user profile information
//     const user = req.user;
//     res.render('profile', { user });
// });
  
// // Check if user is logged in
// function isLoggedIn(req, res, next) {
//     if (!req.isAuthenticated()) {
//         return res.redirect('/login');
//     }
//     next();
// }
  
//   // Handle login failure
// router.get('/login', (req, res) => {
//     const error_message = req.flash('error_message');
//     res.render('login', { error_message });
// });
