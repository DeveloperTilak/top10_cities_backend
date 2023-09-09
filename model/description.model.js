const mongoose = require("mongoose")



const citySchema = mongoose.Schema(
    {
        name:{type: String},
        description: {type: String},
        img: {type:String}
    }
)


const CityModel = mongoose.model("citie", citySchema)

module.exports = {CityModel}