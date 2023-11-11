const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const app = express()

app.use(express.json())

// Routes: 1. Registration 
app.post("/register", (req, res) => {
    const { username, password }= req.body
})

//2. User Login
app.post("/login", (req, res) => {
    const { username, password } = req.body
})