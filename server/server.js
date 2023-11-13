const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const app = express()
const passport = require("passport")
const passportSetup = require("./config/passport")

app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())

// Routes: 1. Registration 
app.post("/register", (req, res) => {
    const { username, password }= req.body
})

//2. User Login
app.post("/login", (req, res) => {
    const { username, password } = req.body
})