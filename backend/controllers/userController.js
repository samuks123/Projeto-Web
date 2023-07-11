const userModel = require("../models/userModel")
const UserModel = require("../models/userModel")
const jwt = require("jsonwebtoken")

const createToken = (_id) => {

    return jwt.sign({_id}, process.env.SECRET, { expiresIn: "3d" })
    
}

// login

const loginUser = async (req,res) => {
    const {email, password} = req.body    
    try{

        const user = await UserModel.login(email, password)

        // create token
        
        const token = createToken(user._id)
        res.status(200).json({user,token})

    }catch(error){

        res.status(400).json({error: error.message})

    }
}

// sign up

const signupUser = async (req,res) => {
    const { email, password, name, phone, address, image } = req.body
    try {

        const user = await UserModel.signup(email,password,name,phone,address,image)

        // create token

        const token = createToken(user._id)
        res.status(200).json({user,token})

    } catch (error) {

        res.status(400).json({error: error.message})

    }
}

// get user data

const getUserData = async (req,res) => {

    const {id} = req.body
    try{

        const user = await userModel.findById(id)
        console.log(user)
        res.status(200).json({

            // don't leak the password
            name: user.name,
            email: user.email,
            address: user.address,
            phone: user.phone,
            id: user._id,
            image: user.image,
            cart: user.cart

        })

    }catch (error) {

        console.log(error.message)
        res.status(400).json({error: error.message})

    }
}

// execute user purchase

const executePurchase = async (req,res) => {

    const {user_id,item_id} = req.body
    
    try{

        const result = await userModel.purchase(user_id,item_id)
        res.status(200).json(true)

    } catch (error) {

        console.log(error.message)
        res.status(400).json({error: error.message})

    }

}

module.exports = {

    loginUser,
    signupUser,
    getUserData,
    executePurchase
    
}