const ImageModel = require ("../models/imageModel")
const mongoose = require("mongoose")

const getImage = async(req,res) => {
    try{
        ImageModel.find({}).then(data=>{
            res.status(200).json(data)
        })
    }catch(error){
        res.status(400).json({error})
    }
}

const postImage = async (req,res) => {
    try{
        const image = await ImageModel.create(req.body)
        res.status(200).json(image)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    getImage,
    postImage
}