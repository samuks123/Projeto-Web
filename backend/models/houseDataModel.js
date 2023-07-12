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
    surface: Number,
    year: Number,
    price: Number,
    agent: {
        image: String,
        name: String,
        phone: String
    },
    sold: Boolean
    
}, {timestamps:true})


houseDataSchema.statics.purchase = async function ( user_id, item_id ) {

    const result = await this.findByIdAndUpdate ( item_id, { sold: true } )

    if (!result) {

        throw Error ("failed @ houseSchema findByIdAndUpdate")
    }

    return result
}

module.exports = mongoose.model("HouseData", houseDataSchema)

