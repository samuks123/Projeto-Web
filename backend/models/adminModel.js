const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")

const Schema = mongoose.Schema
const adminSchema = new Schema({

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
    }

})

// signup method

adminSchema.statics.signup = async function (email,password,name,phone,address) {

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

    const user = await this.create({ email, password: hash, name, phone, address })
    return user
}

// login method

adminSchema.statics.login = async function (email, password){

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


module.exports = mongoose.model("User", adminSchema)