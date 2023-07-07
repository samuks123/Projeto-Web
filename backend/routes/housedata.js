const express = require("express")
const router = express.Router()
const HouseDataModel = require("../models/houseDataModel")
const { 
    getAllHouseData,
    getSingleHouseData,
    createHouseData,
    deleteHouseData,
    updateHouseData
} = require("../controllers/houseDataController")

// paths
router.get("/", getAllHouseData)
router.get("/:id", getSingleHouseData)
router.post("/", createHouseData )
router.delete("/:id", deleteHouseData )
router.patch("/:id", updateHouseData )

module.exports = router