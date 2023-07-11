const express = require("express")
const router = express.Router()
const {

    loginUser,
    signupUser,
    getUserData,
    executePurchase

} = require("../controllers/userController")

// login
router.post("/login",loginUser)

// sign up
router.post("/signup",signupUser)

// get user data
router.post("/get",getUserData)

// execute user purchase
router.post("/purchase",executePurchase)

module.exports = router