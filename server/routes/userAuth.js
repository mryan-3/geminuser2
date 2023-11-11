const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const UserAuth = require("../models/userAuthModel")

//Registration
router.post('/register', async(req, res) => {
    const { username, oassword } = req.body

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