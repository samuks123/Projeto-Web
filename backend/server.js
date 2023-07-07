require("dotenv").config()
const cors = require("cors")

// express app
const express = require("express")
const app = express()
const houseData_Routes = require("./routes/housedata")
const image_Routes = require("./routes/image")

// mongoose
const mongoose = require("mongoose")

// middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})
// routes
app.use("/api/housedata",houseData_Routes)
app.use("/api/image",image_Routes)

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{

        // listen for requests
        app.listen(process.env.PORT,()=>{
            console.log(`listening on port ${process.env.PORT}`)
        })
        
    })
    .catch(error => console.log(error))