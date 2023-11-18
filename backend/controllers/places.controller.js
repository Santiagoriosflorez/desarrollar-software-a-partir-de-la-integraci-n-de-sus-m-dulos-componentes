const Places = require('../models/places.model')

module.exports.getplaces= async (req,res)=>{
    const places = await Places.find()
    res.json(places)
};
module.exports.postplaces= async (req,res)=>{
    const {name,location,address} = req.body
    const newPlaces= new Places({
        name,
        location,
        address
    })

    const savePlaces= await newPlaces.save();
    res.json(savePlaces)
};
