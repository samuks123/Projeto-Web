const mongoose = require("mongoose")
const Schema = mongoose.Schema
const houseDataSchema = new Schema({

    id: Number,
    type: String,
    name: String,
    description: String,
    image: String,
    imageLG: String,
    country: String,
    address: String,
    bedrooms: Number,
    bathrooms: Number,
    surface: String,
    year: Number,
    price: Number,
    agent: {
        image: String,
        name: String,
        phone: String
    }
    
}, {timestamps:true})

module.exports = mongoose.model("HouseData", houseDataSchema)

