const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const UserAuth = require("../models/userAuthModel")
const passport = require('passport')

// Google Authentication
// Login Failed
router.get('/api/v1/login/failed', (req, res) => {
    res.status(401).json({
        error: true, 
        message: "Login Failed"
    })
})
// Handle authentication flow
router.get('/api/v1/login', passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/login',
  })
)
// Protect routes
router.get('/profile', isLoggedIn, (req, res) => {
    // Display user profile information
    const user = req.user;
    res.render('profile', { user });
});
  
// Check if user is logged in
function isLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}
  
  // Handle login failure
router.get('/login', (req, res) => {
    const error_message = req.flash('error_message');
    res.render('login', { error_message });
});

//Registration
router.post('/register', async(req, res) => {
    const { username, password } = req.body

    try{
        //Check if the username exists
        const existingUser = await UserAuth.findOne({ username })
        if (existingUser) {
            return res.status(400).json( {error: "Username already taken."})
        }

        //Hash the password
        const hashedPassword = await bcrypt.hash(password, 10)
        //Create a new User
        await User.create({ username, password: hashedPassword})
        res.json({ message: "User created successfull"})

    } catch(err){
        console.error(err.message)
        res.status(500).json({error: "Internal Server Error"})
    }

})

//Login
router.post("/login", async(req, res) => {
    const { username, password } = req.body

    try{
        //Find if user has been registered
        const user = await UserAuth.findOne({ username })
        if (!user) {
            return res.status(401).json({ error: "Invalid username"})
        }

        //Compare the passowrd
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch){
            return res.status(401).json({ error: "Invalid password"})
        }

        //Generate a JWT
    } catch(error){
        console.error(error)
        res.status(500).json({ error: "Internal Server Error"})
    }
})