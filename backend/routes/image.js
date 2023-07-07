const express = require("express")
const router = express.Router()
const HouseDataModel = require("../models/houseDataModel")

const {
    getImage,
    postImage
} = require("../controllers/imageControllers")

// paths
router.get("/", getImage)
router.post("/", postImage )

module.exports = router