const mongoose = require("mongoose");
const Schema = mongoose.Schema

const maintrecordSchema = new Schema({
    Date: String,
    Car: String,
    Type: String,
    Kilometers: Number,
    Cost: Number,
})

const maintrecord = mongoose.model("maintrecord", maintrecordSchema);
module.exports = maintrecord;