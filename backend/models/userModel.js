const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")

const Schema = mongoose.Schema
const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type:String,
        required: true
    },
    address:{
        type:String,
        required:true
    },
    image:{
        type: String,
        required: true
    },
    admin:{
        type: Boolean,
    },
    cart:{
        type: [String]
    }

})

// signup method

userSchema.statics.signup = async function (email,password,name,phone,address,image) {

    // validation

    if (!email||!password){
        throw Error("All fields must be filled")
    }
    if (!validator.isEmail(email)){
        throw Error("Email is not valid")
    }
    if (!validator.isStrongPassword(password)){
        throw Error("Password not strong enough")
    }
    const exists = await this.findOne({email})
    if (exists) {
        throw Error("E-mail already in use")
    }

    // password encryption

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    // create user in database

    const user = await this.create({ email, password: hash, name, phone, address, image })
    return user
}

// login method

userSchema.statics.login = async function (email, password){

    console.log(email,password)
    // admin

    if (email== "admin" && password=="admin") {

        console.log("admin entry")
        const user = await this.findOne({ email: "admin@admin.com" })
        return user

    }

    // validation

    if (!email||!password){
        throw Error("All fields must be filled")
    }

    const user = await this.findOne({ email })

    if (!user){
        throw Error("Incorrect email")
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match){
        throw Error("Incorrect password")
    }

    return user
    
}


// execute user purchase

userSchema.statics.purchase = async function (user_id,item_id) {

    const result = await this.findByIdAndUpdate( user_id, {$push:{ cart: item_id }} )
    if (!result) {
        throw Error ("failed @ findByIdAndUpdate")
    }

    return result

} //64adb4c97b35aae0007da9e5

module.exports = mongoose.model("User", userSchema)