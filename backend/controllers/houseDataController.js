const HouseDataModel = require("../models/houseDataModel")
const mongoose = require ("mongoose")

// 1. get all

const getAllHouseData = async (req,res) => {
    const houseData = await HouseDataModel.find({}).sort({createadAt: -1})
    res.status(200).json(houseData)
}

// 2. get single

const getSingleHouseData = async (req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"invalid id"})
    }
    const houseData = await HouseDataModel.findById(id)
    if (!houseData){
        return res.status(404).json({error:"id not found"})
    }
    res.status(200).json(houseData)
}

// 3. create new

const createHouseData = async (req,res) => {
    try{
        const housedata = await HouseDataModel.create(req.body)
        res.status(200).json(housedata)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

// 4. delete single
const deleteHouseData = async (req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"invalid id"})
    }
    const houseData = await HouseDataModel.findOneAndDelete({_id: id})
    if(!houseData){
        return res.status(400).json({error:"id not found"})        
    }
    res.status(200).json(houseData)
}

// 5. update single
const updateHouseData = async (req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"invalid id"})
    }
    const houseData = await HouseDataModel.findOneAndUpdate({_id: id},{...req.body})
    if(!houseData){
        return res.status(400).json({error:"id not found"})        
    }
    res.status(200).json(houseData)
}

// exports 
module.exports = {

    getAllHouseData,
    getSingleHouseData,
    createHouseData,
    deleteHouseData,
    updateHouseData

}