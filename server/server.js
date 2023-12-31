const express = require('express')
const app = express()
const connectDb = require("./config/database")
const userAuthRoute = require('./routes/userAuth')
const protectedRoutes = require('./routes/protected')
const { verifyToken } = require('../middleware/authMiddleware')

app.use(express.json())
app.use("/api/v1/", userAuthRoute)
app.use("/api/v1/protected", verifyToken, protectedRoutes)


const port = 3000
connectDb()
    .then(() => {
        console.log("sucessful connection")
        app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    })
    .catch(err => console.log(err))