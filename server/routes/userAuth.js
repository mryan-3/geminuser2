const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")

//Registrtion
router.post('/register', async(req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { name: req.body.name, password: hashedPassword}
        users.push(user)
        res.status(201).send()
    } catch(err){
        console.error(err.message)
        res.status(500).json({error: "Internal Server Error"})
    }

})

//Login
router.post("/login", async(req, res) => {
    const user = users.find(user => user.name = req.body.name)
        if (user == null){
            return res.status(400).send("Cannot find user")
        }
    try{
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send("Success")
        } else{
           res.send("Not allowed") 
        }
    } catch(error){
        console.error(error)
        res.status(500).json({ error: "Internal Server Error"})
    }
})