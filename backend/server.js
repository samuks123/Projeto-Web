require("dotenv").config()

// express app
const express = require("express")
const app = express()
const housedataRoutes = require("./routes/housedata")
const userRoutes = require("./routes/user")


// mongoose
const mongoose = require("mongoose")

// middleware
app.use(express.json({limit:"50mb"}))
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use("/api/housedata",housedataRoutes)
app.use("/api/user",userRoutes)


// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{

        // listen for requests
        app.listen(process.env.PORT,()=>{
            console.log(`listening on port ${process.env.PORT}`)
        })
        
    })
    .catch(error => console.log(error))